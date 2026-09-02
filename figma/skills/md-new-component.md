---
name: md-new-component
description: Créer, étendre ou documenter un composant du DS MICS — hiérarchie des solutions, construction atomique, nomenclature, états complets, puis la documentation obligatoire (description native + frame 2 zones + a11y RGAA). Invoqué aussi pour toute demande « documente ce composant ».
---

# md-new-component — Créer, étendre, documenter un composant

Appliquer /md-ds-rules. Création : uniquement quand /md-produce-screen a établi qu'aucun composant
ne couvre le besoin — et que l'utilisateur a validé. Documentation seule (« documente ce
composant ») : aller directement au § Documenter.

## Avant de créer : la hiérarchie des solutions

**Étape 0 (bloquante) — audit de l'existant.** Parcourir le catalogue (/md-components, /md-charts)
et comparer la STRUCTURE du besoin (fond, radius, padding, contenu) aux composants en place, pas
seulement leur nom. Un chip gris avec un texte est un `Tag`, même s'il affiche une date. Cas
d'école : un « Timeline / Day Separator » créé alors que `Tag` Color=Default faisait le travail —
supprimé, tous ses usages migrés.

**Côté dev, la même question suit** : thémé (AntD convient), enveloppé (AntD presque) ou construit
(pas d'équivalent) ? Le préciser dans la description native — voir /md-ds-rules.

1. **Override** d'une instance (texte, icône, couleur) — toujours préféré.
2. **Extension** du composant : prop booléenne (`Show …`), prop texte, swap ou variante. La
   réponse quand « ça existe presque ». Toute extension met à jour la **description native** ET
   ajoute un bloc `Ajouté en maquette` en zone ② de la doc existante.
3. **Nouveau composant** — seulement si l'élément a un sens propre et réutilisable. Un bloc d'un
   seul écran n'est pas un composant.

## Construction atomique

- Fait d'**instances** des atomes existants partout où c'est possible — jamais de copies.
- 100 % autolayout ; aucun calque vide d'espacement ; padding/gap liés aux variables Scale ;
  couleurs liées aux variables Color ; textes sur les styles du fichier.
- Un élément interne répété devient un **sous-composant** « Famille / Item ».

## Nomenclature (bloquant)

Composant : Title Case « Famille / Nom » · Props : Sentence case (`Show icon`), acronymes
conservés (`Installation IDs`) · Valeurs de variantes : Sentence case, numériques restent
numériques · Calques : camelCase, zéro nom par défaut · Slot : Sentence case (`Content`) — un slot
se remplit, il ne s'override pas.

## États et variantes — complet dès la conception

- Interactif → **tous** les états : Default, Hover, Focus si focusable, Disabled, et les états
  métier (Error, Empty/Has data, Expanded…).
- Ce qui varie indépendamment de l'état = **prop booléenne** ou **swap**, pas une variante. Les
  textes = **props texte** overridables. Le maître garde des contenus génériques (« Label »).

## Rangement

Poser le composant dans la **page de sa famille** (🔘 Button, 📝 Form Inputs, 🏷 Data Display,
💬 Feedback & Overlays, 🧭 Navigation & Shell, 📊 Table & Lists, 📊 Charts), dans la grille
existante. Ajouter sa carte au 📋 Sommaire.

## Pre-flight spécifique composant

Screenshot du set complet (rien de clippé) · redimensionnement testé (largeur ×1.5, textes longs) ·
chaque prop agit sur ce qu'elle doit · instancié dans un écran réel (FILL, alignements).

## Documenter — les deux livrables indissociables

1. **La description native** (champ description Figma) — source de vérité, visible en Dev Mode.
2. **La frame « {Composant} — Documentation »**, sur la page du composant.

Les deux disent LA MÊME CHOSE, et décrivent **ce que le composant est réellement** — jamais un
état souhaité. Implémentation incohérente → signalée, pas enjolivée.

### Phase 1 — Inspecter
Sur le composant réel, jamais de mémoire : variants et défaut, props (types, défauts, nœuds
pilotés, instances exposées, slots), anatomie (structure, dimensions, bindings), tokens consommés
+ **valeurs en dur restantes** (dette à signaler), usages dans le fichier.

### Phase 2 — Règles d'usage
Demander à l'utilisateur ses règles produit (une seule salve). Si elles se déduisent (spec, user
guide via /md-business, écrans de référence) : les **proposer et faire valider**. Impératives et
testables : « Un seul Primary par zone d'action », jamais « avec parcimonie ».

### Phase 3 — Accessibilité
Invoquer **/md-a11y-specs** (mode annotation/standard). Sortie = lignes taguées (`Sémantique`,
`Attribut ARIA`, `Alternative textuelle`, `Texte Lecteur d'écran`, `Comportement a11y`,
`Information couleur`/`Contraste`), chacune rattachée à un critère RGAA (référentiel packagé dans
`md-a11y-rgaa/references/`). Vérifier les **contrastes réels** : sous le seuil → encart warning
« hérité de la prod, à arbitrer côté produit », jamais omis.

### Phase 4 — Description native
Texte brut, 1 500–3 000 caractères, première ligne autoporteuse :
```
{NOM} — {rôle + origine technique, une phrase}.
SOURCE : {chemin repo + techno} · STORYBOOK : {URL ou « à renseigner »}
═══ EXISTANT (iso production) ═══
ANATOMIE / PROPS / TOKENS / RÈGLES D'USAGE / ACCESSIBILITÉ (RGAA)
═══ ÉVOLUTIONS PROPOSÉES ═══  (omettre si iso-prod)
[Ajouté en maquette] … / [À construire] …
```
Les pièges de manipulation (swap qui re-taille, calque `vector`…) vivent dans ANATOMIE.

### Phase 5 — Frame de documentation
Frame « {Composant} — Documentation », ~1180, fond `info`, radius/card, padding et gap `space/35` :

1. **Titre** — Headline, text/on-dark.
2. **`code-refs`** — deux lignes à chip (chip `bg/tooltip`, ~110, Caption/Medium inversé) :
   `Source code` (chemin repo exact) et `Storybook` — **l'URL réelle du Storybook publié, posée en
   hyperlien Figma** (`setRangeHyperlink`) :
   `https://nikulaguy.github.io/testMICS_Mediarithmics/storybook/?path=/docs/<id>` — l'`id` se lit
   dans `storybook-static/index.json` (entrées `type: 'docs'`), jamais deviné : il encode les
   accents (`composants-composés-tabs--docs`). Composant non développé → « Pas de page : composant
   non développé », sans lien — un lien mort coûte plus qu'une absence assumée. Poser aussi le
   lien dans `documentationLinks` du composant lui-même (/md-ds-rules).
3. **`preview`** — le composant **MAÎTRE déplacé dans la frame** (jamais une instance avec le
   maître dehors), sur carte bg/container, radius/card, padding 24.
4. **`use case`** (« Exemples d'usage ») dès qu'il y a plusieurs cas réels : un wrapper
   `case/{libellé}` par cas, instance configurée comme en prod.
5. **Bandeau ① Existant ISO Prod** puis **② Évolutions proposées** — frame blue/100, bordure
   blue/300, radius/card, chip carrée 25 primary (numéro Body/Book inversé) + titre Headline 3
   primary.
   - Zone ① : `existant/description`, `existant/props`, `existant/règles`,
     `existant/accessibilité` — cartes bg/tooltip, bordure 1 px `#0a487a` (exception actée),
     padding 24, titres Headline 3 et textes text/on-dark. Lignes a11y = chip tag (150, fond
     `#0a487a`, Caption/Medium inversé) + Body/Book ; dernière ligne « Critères : RGAA x.x · … »
     en Caption/Main.
   - Zone ② : un mini-bloc par évolution (carte bg/container) avec tag `Ajouté en maquette`
     (blue/100, bordure blue/300) ou `À construire` (orange/100, bordure orange/300), titre
     Body/Medium, texte Body/Book.
6. **Règle d'or : rien d'ajouté silencieusement.** Une prop/un état absent de la prod vit
   exclusivement en zone ② avec son tag — jamais dans la zone ①.

### Phase 6 — QA
Audit structure (aucun calque par défaut, tout bindé, textes sur styles) · screenshot regardé
(lisibilité, débordements sur libellés longs, **contraste** : la couleur du texte suit la luminance
du fond parent — foncé sur sombre interdit) · chaque règle tranchable par un reviewer.

### Hygiène et pièges
Do/don't : caption du Don't = anti-pattern **et sa conséquence** ; instances réelles, jamais de
captures. Une prop « pour plus tard » va en zone ② `À construire`. Exception de nommage : les
frames de doc gardent leur préfixe de zone (`existant/props`, `a11y/Sémantique`, `évo/…`). Pièges
Figma : les instances portent le nom du set ; un swap réinitialise taille/fills ; après `resize()`,
re-poser les HUG (/md-figma-api).

### Sorties
Description native + frame de doc + **liste des non-conformités trouvées** (contrastes, valeurs en
dur) en fin de réponse, pour arbitrage.
