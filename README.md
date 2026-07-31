# MICS — design system et prototype front

Reconstruction du front MICS avec une couche de composants documentée, pour réduire le temps de
passation entre le prototypage produit et l'intégration.

| | URL |
| --- | --- |
| **Storybook** (le design system) | https://nikulaguy.github.io/testMICS_Mediarithmics/storybook/ |
| **Application** de démonstration | https://nikulaguy.github.io/testMICS_Mediarithmics/ |

Commencez par le Storybook : c'est la documentation, et c'est la source de vérité.
La page **Design System / Passation** explique quoi faire de ce dépôt.

## Lancer

```bash
npm install && npm run storybook
```

Le Storybook écoute sur **http://localhost:6006**, l'application sur **http://localhost:5199**
(`npm run dev`). Aucune API n'est appelée : toutes les données sont fausses et en dur.

| Script | Effet |
|---|---|
| `npm run storybook` | la documentation, en développement |
| `npm run dev` | l'application de démonstration |
| `npm run build` | typecheck (`tsc -b`) puis build de l'app |
| `npm run build-storybook` | build statique du Storybook |
| `npm run lint` | oxlint |

## Ce que contient le dépôt

| | |
|---|---|
| Composants de DS | **30**, exposés par `src/ui.ts` |
| Pages de documentation | **32** MDX : 28 pages de composant, 4 transverses |
| Fichiers de stories | 28 |
| Icônes SVG | 52, exportées du Figma client et normalisées |
| Écrans de démonstration | Boards (9 tableaux de bord), Segments (liste, usage, alertes, détail) |

```
src/
  ui.ts            surface publique unique — le seul import autorisé depuis une page
  theme/           micsTheme.ts : primitives, sémantiques, échelle, typographie
  components/      les 30 composants, chacun avec ses stories et sa page MDX
  pages/           les écrans de démonstration
  docs/            Introduction, Fondations, Comparaison, Passation
  assets/icons/    les 52 SVG
figma/             le fichier de design system et les 22 skills de production (voir plus bas)
ARCHITECTURE.md    la règle des trois catégories, la correspondance Figma → dev
```

## Les trois règles

Elles sont détaillées dans `Design System / Introduction` ; en résumé :

1. **`src/ui.ts` est la seule porte d'entrée.** Une page n'importe jamais `antd` directement.
2. **Aucune valeur en dur** hors de `src/theme/micsTheme.ts`. Pas un hex, pas un padding.
3. **Un besoin = une entrée.** Deux composants qui rendent la même surface, c'est un composant.

Chaque composant relève d'une des trois catégories : **thémé** (AntD tel quel, habillé par les
tokens), **enveloppé** (composant du DS qui rend un AntD en dessous), **construit** (aucun
équivalent AntD).

## Figma — la moitié amont

Tout ce qui concerne la conception est dans **[`figma/`](figma/)** : le fichier de design system
(19 pages, 446 composants, 121 variables) et les **22 skills** de production, plus un pack de
14 références RGAA. Les skills sont les règles du DS écrites dans un format que Claude Code charge
automatiquement : règles d'or, templates d'écran, catalogue de composants, pièges de l'API Figma,
accessibilité.

**Ce qu'ils font, et ce qu'ils ne font pas.** Ils pilotent la production dans **Figma** — un PM
décrit un écran, Claude le construit avec les vrais composants du fichier, tokens liés, autolayout
partout, et refuse d'improviser une frame quand un composant existe déjà. Ils **ne génèrent pas de
code** : la traduction en React reste le travail du dev, ce dépôt en est le résultat.

Sans eux, une maquette part en dérive et le dev hérite de l'arbitrage ; avec eux, ce qui arrive au
dev est déjà exprimé dans le vocabulaire du DS.

### Installer

Depuis la racine du dépôt :

```bash
for f in figma/skills/md-*.md; do n=$(basename "$f" .md); mkdir -p ~/.claude/skills/"$n"; cp "$f" ~/.claude/skills/"$n"/SKILL.md; done && cp -R figma/skills/md-a11y-rgaa ~/.claude/skills/
```

Chaque skill doit finir dans son propre dossier, sous le nom exact `SKILL.md` — c'est la seule
convention à respecter. Pour un partage d'équipe versionné, remplacez `~/.claude/skills` par
`<votre-repo>/.claude/skills`.

Vérification : dans une session `claude`, tapez `/md-` — l'autocomplétion doit proposer la liste.

### Utiliser

Un seul point d'entrée, avec votre spec et l'URL du fichier Figma :

```bash
claude "/md-produce-screen Écran de liste des Creatives, avec recherche, filtres par statut et pagination. Fichier : https://www.figma.com/design/OnvlU9azeM4rffD83XnEGI/"
```

Claude enchaîne alors seul : vocabulaire métier → choix du template → production en instances →
*pre-flight check* (screenshot et auto-contrôle, zéro défaut exigé avant de rendre la main).
Les autres skills se chargent d'eux-mêmes selon le besoin ; les appeler à la main est possible mais
rarement utile.

| Famille | Skills |
|---|---|
| Point d'entrée | `md-produce-screen` |
| Fondation | `md-ds-rules` (chargé avant tout), `md-business`, `md-figma-api` |
| Templates d'écran | `md-template-` `list` · `detail` · `board` · `edition` · `selection` · `settings` · `overlay` · `analytics` · `lookup` |
| Familles de composants | `md-navigation`, `md-forms`, `md-data-display`, `md-overlays`, `md-charts`, `md-icons` |
| Création et documentation | `md-new-component`, `md-component-doc`, `md-a11y-specs` (+ `md-a11y-rgaa/`) |

**Prérequis** : un compte Figma avec accès en édition et un siège payant, la police Circular
disponible, et le MCP Figma connecté. L'installation complète, la connexion du MCP et le dépannage
sont détaillés dans **[`figma/skills/README.md`](figma/skills/README.md)** ; le contenu du fichier
et l'accès, dans **[`figma/README.md`](figma/README.md)**.

### Les faire vivre

Un skill est un texte : quand une correction en revue vous apprend une règle, ajoutez-la au skill
concerné et commitez. C'est ce qui empêche la même erreur de revenir, et c'est la seule maintenance
que le package demande.

## Écarts avec `mediarithmics-platform`

À lire avant d'évaluer la réutilisation du code.

| | mediarithmics-platform | Ici |
|---|---|---|
| Ant Design | 5.22 | **6.5** |
| React | 18.3 | **19.2** |
| Build | Nx (monorepo) | Vite |
| Storybook | aucun | 9 |
| Graphiques | Highcharts 7 | SVG écrit à la main |
| Tokens | LESS v3 **et** AntD v5 en parallèle, `primary`/`info` inversés entre les deux | un seul module |

Deux majeures d'écart sur AntD et sur React : les composants thémés et enveloppés demanderont une
passe d'adaptation. Les composants construits (`Card`, `Counter`, `Link`, `Overlay`, `TabBar`,
`DropdownPanel`, `Icon`…) ne dépendent presque pas d'AntD et se reprennent directement.

Le code de production a été **lu** pour comprendre structure et comportements ; rien n'en a été
copié. Ce qui vient de chez le client : les **valeurs** de tokens, transcrites de `defaultTheme.ts`,
et les **52 icônes**, exportées du Figma.

## Écarts assumés dans le prototype

- Police Circular non embarquée (licence) : `font-family` la déclare, repli système sinon.
- Pagination, tri et sélection sont ceux d'AntD, non recâblés sur les données.
- Deux glyphes manquent au set exporté : le « + » de New segment reste `PlusOutlined` d'AntD, et le
  type Partition retombe sur l'icône `cluster`.
- Le panneau Filters est un popover maîtrisé plutôt qu'un `Dropdown` AntD, qui se ferme au clic
  interne — incompatible avec une application immédiate multi-valeurs.
- Les surfaces flottantes d'AntD (calendrier, select, filtre de colonne) sont rendues dans un
  portail attaché au body : le détecteur de clic extérieur doit les exclure, sinon choisir une date
  de début referme tout avant la date de fin.

Les écarts propres à un composant sont écrits dans sa page de documentation, section
« Écarts et évolutions ».

## Publication

`.github/workflows/pages.yml` construit les deux artefacts à chaque push sur `main` et les déploie
sur GitHub Pages : l'app à la racine, le Storybook sous `/storybook/`. Rien à lancer à la main.

Le build utilise des chemins relatifs (`base: './'`), donc le même artefact fonctionne en local et
sous le sous-chemin de GitHub Pages.

Deux prérequis, une seule fois, sur un dépôt recréé :

1. Le dépôt doit être **public** (Pages ne sert un dépôt privé que sur un plan payant).
2. **Settings → Pages → Build and deployment → Source → « GitHub Actions »**.

Le second n'est pas contournable malgré le `enablement: true` passé à `actions/configure-pages` :
le `GITHUB_TOKEN` du workflow n'a pas le droit de *créer* un site Pages, seulement d'y déployer.
