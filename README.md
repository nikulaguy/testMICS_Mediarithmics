# MICS — test front « Segments »

Prototype jetable qui rejoue l'écran **Segments — Liste** du DS (Figma `34:2041`) et les
comportements de filtrage validés en maquette. Aucune API : les données sont en dur.

## Stack

Même socle que le repo client, nettoyé :

| Côté client | Ici |
|---|---|
| React + TypeScript | idem (Vite au lieu de Nx, pour un test isolé) |
| Ant Design v5 + ConfigProvider | idem, `src/theme/micsTheme.ts` reprend `defaultTheme.ts` |
| LESS v3 legacy (primary/info inversés), 478 px bruts | **supprimé** : plus une seule valeur en dur hors du module de thème |

`src/theme/micsTheme.ts` est la seule source de valeurs : primitives, sémantiques, échelle.
Il applique aussi les arbitrages du ticket « Tokens de couleurs » (page Audit) : `colorLink`
déclaré explicitement (`#003056`), `borderRadiusLG` à 6, `controlHeight` à 32.

## Lancer

```bash
npm install
npm run dev
```

Le serveur écoute sur **http://localhost:5199** (port dédié : `5173` est occupé par un autre
projet local dont le service worker détournait le titre et le manifeste de cette page).

## Ce que le prototype démontre

- **Actions de page dans l'Actionbar** (Export, New segment, ⋮), actions de tableau dans la Toolbar.
- **Panneau Filters en cascade** : dimensions à gauche avec un **compteur** par dimension (pas de
  pastille de couleur), valeurs à droite, application immédiate, `CLEAR <DIMENSION>` à portée explicite.
- **Barre de filtres actifs** : une chip par dimension (« Segment type : Campaign +2 »), fermable,
  plus `Clear all filters`. Elle n'apparaît que s'il existe au moins un filtre actif.
- **Repli automatique** : la largeur réelle des chips est mesurée (`ResizeObserver`) ; le lien
  « +n autres / Réduire » n'apparaît que si la ligne déborde vraiment. Réduire la fenêtre pour le voir.
- **Filtre de colonne** (entonnoir de la colonne Type) qui écrit **la même clé d'état** que le
  panneau : une seule chip, jamais deux vérités. Ni OK ni Reset, application immédiate.
- **Le cas qui justifie tout** : quand le filtrage ne renvoie rien, le tableau affiche « No data »
  mais les chips expliquent pourquoi.

## Assets

Les icônes et le logo viennent du **fichier Figma**, pas d'une librairie tierce :
33 SVG exportés de la page 🖼 Icons vers `src/assets/icons/`, plus le logo
(`src/assets/logo-mediarithmics.png`). Chaque SVG a été normalisé (viewBox carré,
`preserveAspectRatio` retiré, fills remplacés par `currentColor`, taille en `1em`),
ce qui permet de piloter couleur et taille en CSS comme un glyphe de police.
Le composant `src/components/Icon.tsx` les expose par nom (`<Icon name="view" />`).

## Comportements implémentés

- **TopBar** : les trois actions de droite sont des `buttonIcon` (Figma 666:110318) — icône 20×20
  sans fond, couleur pilotée par l'état (Default `text/on-dark`, Hover `bg/hover`, Pressed
  `bg/selected`), cible cliquable de 32×32, `aria-label` sur chacune. Le launcher et le compte
  ouvrent un panneau (`aria-haspopup` + `aria-expanded`, fermeture au clic extérieur et à Échap) ;
  le panneau compte affiche l'email et Logout.
- **Recherche globale** : le clic sur la barre de la TopBar ou **Cmd/Ctrl + K** ouvre la palette
  (`SearchPalette`) — scrim `bg/scrim`, modale de 760 ancrée à 140 px du haut, résultats groupés
  FEATURES / SEGMENTS / PLUGINS, mise en gras de la sous-chaîne cherchée, navigation ↑ ↓, Échap
  pour fermer, état vide quand la requête ne donne rien.
- **Edit view** : dropdown de choix des colonnes affichées (les 11 de la maquette), application
  immédiate sur le tableau.
- **Survols conformes à la maquette** : items du SideMenu et pieds « CLEAR … » en `bg/hover`
  (#ebeff2), là où le défaut est transparent pour le menu et `bg/window` pour les pieds.

## Navigation et écrans

- **Fil d'ariane à trois niveaux** : niveau 1 = item actif du SideMenu, niveau 2 = onglet actif,
  niveau 3 = ressource ouverte. La liste affiche donc « Segments › Segments », l'onglet suivant
  « Segments › Usage overview », et le détail « Segments › Segments › {nom du segment} ».
- **Trois onglets** développés : Segments (liste filtrable), Usage overview (compteurs à barre de
  progression, répartition par type, créations dans le temps) et Alerts (quatre familles d'alertes
  dépliables, tableau ou état vide selon le cas).
- **Détail d'un segment** : clic sur le nom dans la liste. En-tête de ressource, carte UserPoint +
  compteurs, onglets internes, et l'onglet « Features and adoption » en deux colonnes comparées.
- **Switcher d'organisation** : le clic sur « mediarithmics - product » ouvre la liste des
  organisations avec leur identifiant ; la sélection ne change que le contexte, pas la page.

## Détails conformes à la maquette

- Pastille de l'onglet Alerts : Badge du DS (fond `warning`, 20×20, radius 6, chiffre blanc),
  ancrée en haut à droite du libellé, et non centrée verticalement.
- Filtre « Creation date » : panneau `Date Range Content` (plage absolue à deux champs datés +
  plages relatives), et non une liste de cases à cocher.
- Onglet Alerts : tout est replié à l'arrivée, la barre d'en-tête entière est cliquable
  (`role="button"` + `aria-expanded`), le tableau ou l'état vide se place SOUS la rangée
  texte + bouton, et l'état vide est centré avec l'icône `inbox` du DS.
- Usage overview : tous les espacements à 16, icône `info` sur les compteurs (pas `options`),
  aucune icône sur « Breakdown of segments by type », et les deux compteurs occupent toute la
  hauteur de leur colonne.
- Navigation : les niveaux parents du fil d'ariane sont des liens, les entrées du SideMenu sont
  cliquables, et le logo ramène à l'entrée Boards.

## Composants du DS développés

`Icon`, `IconButton` (buttonIcon), `Link`, `Tag`, `ActiveFilterBar`, `FilterPanel`, `SearchPalette`,
`EmptyBlock`, plus la coque (TopBar, SideMenu, AppShell). Ils reprennent les specs Figma, tokens
compris : par exemple le `Tag` porte les six couleurs du composant (fond 100, bordure 1 px 300,
texte 700 ; Default en gris), hauteur 26, padding 2/8, gap 4, radius/base, libellé Body/Book 12.
Aucun composant AntD n'est utilisé tel quel quand le DS en définit un.

## Écarts assumés

- Police Circular non embarquée (licence) : `font-family` la déclare, repli système sinon.
- Croix de fermeture du Tag : la maquette la dessine à 8 px, en dessous de toute recommandation
  de cible de pointage. Le dev utilise un glyphe de 12 px dans une cible de 20 px. À arbitrer côté
  maquette (la cible, elle, doit rester au moins à 20).
- Deux glyphes manquent au set exporté : le « + » de New segment reste `PlusOutlined` d'AntD
  (identique visuellement), et le type Partition retombe sur l'icône `cluster`.
- Pagination, tri et sélection sont ceux d'AntD, non recâblés sur les données.
- Le panneau Filters est un popover maîtrisé plutôt qu'un `Dropdown` AntD : le composant se ferme
  au clic interne, incompatible avec une application immédiate multi-valeurs.
- Les surfaces flottantes d'AntD (calendrier, select, filtre de colonne) sont rendues dans un
  **portail attaché au body** : un clic dedans n'est pas un clic « en dehors » du panneau. Sans
  cette exception dans le détecteur de clic extérieur, choisir une date de début refermait tout
  avant la date de fin. Échap ferme d'abord le calendrier, puis seulement le panneau.

## Consulter les versions compilées

```bash
npm run build && npm run build-storybook
npx vite preview --host 127.0.0.1 --port 4199 --strictPort                              # l'application
npx vite preview --outDir storybook-static --host 127.0.0.1 --port 4200 --strictPort    # la documentation
```

- Application : **http://localhost:4199**
- Storybook : **http://localhost:4200**

`--host 127.0.0.1` est nécessaire : sans lui, Vite n'écoute qu'en IPv6 et `localhost` peut ne pas
répondre selon la résolution de la machine.

## Documentation du design system (Storybook)

```bash
npm run storybook
```

Ouvre **http://localhost:6006**. Trois entrées :

- **Design System / Introduction** : le principe (AntD encadré, pas remplacé), la règle des trois
  catégories, les trois règles d'or.
- **Design System / Tokens** : sémantiques, primitives, échelle et typographie, rendus avec les
  vraies valeurs du thème.
- **Composants** : `Tag` (enveloppé) et `Link` (construit), avec leurs variantes, leurs états et
  un cas d'usage réel. La catégorie est rappelée en tête de chaque page.

Les stories sont rendues dans le `ConfigProvider` du produit : ce qui s'affiche est exactement ce
que rendent les écrans. L'addon d'accessibilité est actif sur chaque story.

## Pour reprendre le projet

Lire `ARCHITECTURE.md` : règle des trois catégories (thémé / enveloppé / construit), table de
correspondance Figma → dev, écarts connus et pièges rencontrés.
