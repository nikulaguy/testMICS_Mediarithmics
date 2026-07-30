---
name: md-figma-api
description: Annexe technique MICS pour agents pilotant l'API Plugin Figma. Pièges vérifiés, helpers, recettes. Ignorer si vous construisez à la main dans Figma.
---

# md-figma-api — Annexe technique (agents / API Plugin)

Tous les skills md-* sont agnostiques : ce fichier isole ce qui est spécifique à l'API Plugin Figma. Chaque piège listé a réellement été rencontré sur ce fichier.

## Helpers de base

```js
// Fill bindé sur une variable — construire le paint avec la couleur RÉSOLUE puis binder,
// sinon le rendu est noir.
const rc = async v => { let x = v.valuesByMode[Object.keys(v.valuesByMode)[0]];
  while (x && x.type === "VARIABLE_ALIAS") { const nv = await figma.variables.getVariableByIdAsync(x.id);
    x = nv.valuesByMode[Object.keys(nv.valuesByMode)[0]]; } return x; };
const bp = async (v) => { const c = await rc(v);
  return figma.variables.setBoundVariableForPaint(
    { type: "SOLID", color: { r: c.r, g: c.g, b: c.b } }, "color", v); };
```

## Pièges vérifiés (à relire avant chaque production)

- **Alpha replié dans le paint** : `setBoundVariableForPaint` copie l'alpha du token dans `paint.opacity`. Deux cas : pour les **icônes** (convention du fichier : rendu 100 %), forcer `opacity: 1` après binding ; pour les tokens dont **l'alpha EST l'effet voulu** (`bg/scrim`, usages texte des `text/*`), NE PAS forcer à 1. ATTENTION : le repli ne traverse PAS les alias — si le token est un alias (bg/scrim → black/45), le paint sort à opacity 1 : poser l'opacité manuellement (`{...f, opacity: 0.45}`) en gardant le binding.
- **`createFrame()` naît en 100×100 FIXED** : tout wrapper doit recevoir `layoutSizingVertical="HUG"` (après appendChild), sinon il garde 100 px de haut et crée des trous sans signification. C'est l'erreur n°1 constatée en revue humaine.
- **Après remplissage d'un slot, vérifier le frame interne** : le wrapper `tabs` du slot Tab Bar reste parfois en hauteur FIXED (Tab Bar à 101 px au lieu de 45) — le repasser en HUG.
- **`resize()` fige les axes** : il repasse les sizing en FIXED. Après un resize, réappliquer `primaryAxisSizingMode = "AUTO"` / `layoutSizingVertical = "HUG"` sous peine de contenu clippé invisible.
- **HUG/FILL** : sur le nœud lui-même c'est `primaryAxisSizingMode/counterAxisSizingMode` (valeurs FIXED|AUTO) ; en tant qu'enfant c'est `layoutSizingHorizontal/Vertical` (FIXED|HUG|FILL). `layoutSizing* = "FILL"` **après** `appendChild`.
- **Axes H/V** : sur un frame HORIZONTAL, c'est `counterAxisSizingMode="AUTO"` qui fait hugger la hauteur.
- **`clone()` perd les `componentPropertyReferences`** : après clonage d'une variante, rebinder les textes/bools exposés.
- **La taille d'un sous-calque d'instance n'est pas overridable** : swapper un composant dans une enveloppe redimensionne mal (rendu déformé). C'est le rôle des **slots natifs** : insérer, pas swapper.
- **Vider un slot supprime en cascade** : retirer les enfants par défaut UN PAR UN avec relecture entre chaque, jamais en boucle sur une liste figée.
- **Un override texte direct écrase la prop bindée** : toujours passer par `setProperties` (ou `componentPropertyReferences`) sur un calque piloté par une prop — sinon la prop devient inerte sur cette instance.
- **Modifier un maître peut réinitialiser des overrides d'instances** : changer le sizing d'un enfant du maître a déjà remis à `true` des booléens d'instances (colonnes de table). Après tout fix de maître, re-vérifier les props des instances existantes.
- **INSTANCE_SWAP** : `addComponentProperty(name, "INSTANCE_SWAP", nodeId)` attend un **ID de nœud** (« 395:53043 »), pas une key.
- **Slot natif** : la prop slot s'ajoute au **COMPONENT_SET**, pas à une variante. Un slot se **remplit** sur l'instance (le contenu par défaut n'est pas overridable). Le remplissage marche en API standard : vider `slot.children`, `appendChild` des instances — puis régler l'alignement du slot (hérité du maître, souvent SPACE_BETWEEN).
- **GROUP / BOOLEAN_OPERATION** n'exposent pas `constraints` : les poser sur les feuilles.
- **Ne jamais `flatten()` un dessin** : le winding EVENODD est détruit (ajourages remplis de noir).
- **Fonts** : `figma.loadFontAsync({family:"Circular", style:"Book"})` (et "Medium") **avant** tout `characters=`.
- **Rotation** : `x/y/width/height` sont pré-rotation — mesurer avec `absoluteBoundingBox`.
- **Relecture en mémoire** : dans un même appel, relire une propriété qu'on vient d'écrire renvoie la valeur locale. Tout audit se fait dans un appel séparé, et le contrôle final par **screenshot**.
- **Select** : deux nœuds texte (label au-dessus / value dans le champ) — passer par les props, pas par le texte brut.
- **Atomicité** : les appels `use_figma` sont atomiques (un échec n'écrit rien). Travailler par lots courts et vérifiables.

## Recette : instancier proprement

```js
let n = await figma.getNodeByIdAsync(SET_ID);
if (n.type === "COMPONENT_SET")
  n = n.children.find(c => c.name === "Type=Primary, State=Default, Size=L") || n.defaultVariant;
const inst = n.createInstance();
parent.appendChild(inst);
inst.layoutSizingHorizontal = "FILL";          // après appendChild
inst.setProperties({ "Label#13:0": "Save" });  // clé complète name#id — TOUJOURS lire componentProperties d'abord :
// le suffixe #id diffère d'un composant à l'autre pour un même nom (ID#158:0 sur Header Row, ID#157:0 sur Row).
// Helper : const key=(i,n)=>Object.keys(i.componentProperties||{}).find(k=>k.split("#")[0]===n);
```

## Recette : pre-flight

1. `get_screenshot` sur le nœud produit, télécharger, **regarder l'image**.
2. Auditer par code dans un appel séparé : noms par défaut, layout NONE non justifié, fills non bindés, **gaps/paddings non bindés (y compris 2/4/8)**, **frames de contenu en hauteur FIXED** (tout sauf racine et coque), **textes dont la couleur diffère de l'icône adjacente**, booléens Header/Rows.
3. Corriger, re-screenshoter, itérer jusqu'à zéro défaut.
