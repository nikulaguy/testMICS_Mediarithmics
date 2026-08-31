---
name: md-component-doc
description: Documenter un composant du DS MICS — description native structurée + frame de documentation 2 zones (Existant ISO Prod / Évolutions proposées) avec le maître dans la preview et l'accessibilité via md-a11y-specs. Invoqué par md-new-component et pour toute demande « documente ce composant ».
---

# md-component-doc — Documenter un composant

Produire deux livrables indissociables, qui disent **la même chose** :
1. **La description native** du composant (champ description Figma) — la source de vérité, visible en Dev Mode.
2. **La frame de documentation** « {Composant} — Documentation », posée sur la page du composant.

La doc décrit **ce que le composant est réellement** (variants, props, tokens bindés) — jamais un état souhaité. Implémentation incohérente → la signaler, pas l'enjoliver.

## Workflow

### Phase 1 — Inspecter
Collecter sur le composant réel (jamais de mémoire) : variants et défaut, props (types, défauts, nœuds pilotés, instances exposées, slots), anatomie (structure, dimensions, autolayout et bindings), tokens consommés + **valeurs en dur restantes** (dette à signaler), usages dans le fichier.

### Phase 2 — Règles d'usage
Demander à l'utilisateur ses règles d'usage produit (une seule salve : règles spécifiques, cas do/don't, contraintes de wording). Si elles sont déjà connues (spec, user guide via /md-business, écrans de référence), les **proposer et faire valider** plutôt que questionner à vide. Les règles sont impératives et testables : « Un seul Primary par zone d'action », jamais « à utiliser avec parcimonie ».

### Phase 3 — Accessibilité
Invoquer **/md-a11y-specs** en mode annotation/standard avec la description fonctionnelle du composant. Sortie = lignes taguées (`Sémantique`, `Landmark`, `Attribut ARIA`, `Alternative textuelle`, `Texte Lecteur d'écran`, `Comportement a11y`, + `Information couleur`/`Contraste`), chacune rattachée à un critère RGAA cité (le référentiel est packagé dans `md-a11y-rgaa/references/`). Vérifier les **contrastes réels** (WCAG) : un ratio sous le seuil se documente en encart warning « hérité de la prod, à arbitrer côté produit » — jamais omis.

### Phase 4 — Description native
Texte brut (pas de markdown), 1 500–3 000 caractères, première ligne autoporteuse :
```
{NOM} — {résumé une phrase : rôle + origine technique}.
SOURCE : {chemin repo + techno} · STORYBOOK : {URL ou « à renseigner »}
═══ EXISTANT (iso production) ═══
ANATOMIE / PROPS / TOKENS / RÈGLES D'USAGE / ACCESSIBILITÉ (RGAA)
═══ ÉVOLUTIONS PROPOSÉES ═══  (omettre si strictement iso-prod)
[Ajouté en maquette] … / [À construire] …
```
Les pièges de manipulation Figma (swap qui re-taille, calque `vector`…) vivent dans ANATOMIE.

### Phase 5 — Frame de documentation
Frame « {Composant} — Documentation », largeur ~1180, fond `info`, radius `radius/card`, padding et gap `space/35`. Blocs dans l'ordre :

1. **Titre** — Headline, `text/on-dark`.
2. **`code-refs`** — deux lignes à chip (chip `bg/tooltip`, ~110, Caption/Medium inversé) : `Source code` (chemin repo exact) et `Storybook`.

   La ligne Storybook porte **l'URL réelle du Storybook publié, posée en hyperlien Figma** (`setRangeHyperlink`), pas un texte de remplacement :

   ```
   https://nikulaguy.github.io/testMICS_Mediarithmics/storybook/?path=/docs/<id>
   ```

   L'`id` se lit dans `storybook-static/index.json` (entrées `type: 'docs'`), jamais deviné : il encode les accents du titre (`composants-composés-tabs--docs`). Sans hyperlien, le texte n'est pas cliquable et la passation reste manuelle.

   Composant non développé → écrire **« Pas de page : composant non développé »**, sans lien. Un lien mort coûte plus cher qu'une absence assumée.
3. **`preview`** — le composant **MAÎTRE déplacé dans la frame** (jamais une instance avec le maître dehors), sur carte `bg/container`, radius card, padding 24.
4. **`use case`** (« Exemples d'usage ») dès qu'il existe plusieurs cas réels : un wrapper `case/{libellé}` par cas, instance configurée comme en prod. Le maître garde ses libellés génériques.
5. **Bandeau ① Existant ISO Prod** puis **bandeau ② Évolutions proposées** — frame `blue/100`, bordure `blue/300`, radius card, chip carrée 25 `primary` (numéro Body/Book inversé) + titre Headline 3 `primary`.
   - Zone ① : `existant/description`, `existant/props`, `existant/règles`, `existant/accessibilité` — cartes sombres `bg/tooltip`, bordure 1 px `#0a487a` (exception actée), padding 24, titres Headline 3 et textes `text/on-dark`. Les lignes a11y = chip tag (150, fond `#0a487a`, Caption/Medium inversé) + Body/Book, dernière ligne « Critères : RGAA x.x · … » en Caption/Main.
   - Zone ② : un mini-bloc par évolution (carte claire `bg/container`) avec tag `Ajouté en maquette` (fond blue/100, bordure blue/300) ou `À construire` (fond orange/100, bordure orange/300), titre Body/Medium, texte Body/Book.
6. **Règle d'or** : rien d'ajouté silencieusement. Une prop/un état absent de la prod vit exclusivement en zone ② avec son tag — jamais dans les Props/États de la zone ①.

### Phase 6 — QA
1. Audit structure : aucun calque par défaut, tout en autolayout, paddings/gaps/couleurs bindés, textes sur styles.
2. Screenshot regardé : lisibilité, débordements (tester les libellés longs), **contraste texte/fond** — texte foncé sur carte sombre = interdit ; la couleur du texte suit la luminance du fond parent (`text/on-dark` sur sombre, `text/normal`/`text/darker` sur clair).
3. Relire : chaque règle est-elle tranchable par un reviewer de maquette ?

## Hygiène et pièges

- Do/don't : caption du Don't = anti-pattern **et sa conséquence** ; wrappers `cas-N-slug` ; instances réelles, jamais de captures.
- Ne documenter que ce qui existe ; une prop « pour plus tard » va en zone ② `À construire`.
- Exception de nommage : les frames de structure de doc gardent leur préfixe de zone (`existant/props`, `a11y/Sémantique`, `évo/…`).
- Pièges Figma : instances de variants portent le nom du set ; un swap réinitialise taille/fills ; `use_figma` atomique ; après `resize()`, re-poser les modes HUG (voir /md-figma-api).

## Sorties
Description native + frame de doc + liste des non-conformités trouvées (contrastes, valeurs en dur) en fin de réponse pour arbitrage.
