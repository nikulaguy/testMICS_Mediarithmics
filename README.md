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
mics-skills/       les règles de production, réutilisables par un agent
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
- La croix du Tag est dessinée à 8 px dans la maquette, sous toute recommandation de cible de
  pointage : le dev utilise un glyphe de 12 px dans une cible de 20 px.

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
