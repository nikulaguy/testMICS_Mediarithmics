# Architecture front MICS — note de passation

Ce document explique **comment ce prototype est construit et pourquoi**, pour qu'une équipe
puisse reprendre le travail sans avoir à deviner les intentions. Il complète le `README.md`,
qui, lui, dit comment lancer et ce que le prototype démontre.

---

## 1. Le principe : Ant Design reste le socle, une couche DS s'intercale

Le produit repose sur Ant Design v5 et **doit continuer à le faire**. Le Table, le DatePicker et
les composants de formulaire représentent des années de comportements clavier, de gestion des
locales et d'accessibilité qu'il serait absurde de réécrire. Sortir d'AntD n'est pas un objectif.

En revanche, **les écrans n'importent jamais `antd` directement**. Ils importent tout depuis
`src/ui.ts`, la surface publique du DS (demain un paquet `@mics/ui`). C'est ce qui permet de
changer l'implémentation d'un composant sans toucher une seule page.

Vérification permanente, à garder dans la CI :

```bash
grep -rn "from 'antd'" src/pages   # doit ne rien renvoyer
```

## 2. La règle des trois catégories

Un seul critère, testable : *le composant AntD a-t-il la même anatomie et les mêmes états que le
composant Figma ?*

| Réponse | Ce qu'on fait | Coût de reprise |
|---|---|---|
| **Oui** → THÉMÉ | Rien de plus qu'un token dans `ConfigProvider` | Nul |
| **Presque** → ENVELOPPÉ | Un composant DS qui rend l'AntD en dessous, avec l'API du DS | Faible, contenu dans la couche |
| **Non** → CONSTRUIT | Composant écrit dans la couche DS | Le vrai coût, à réserver aux cas où il n'y a pas d'équivalent |

Corollaire : on n'écrit **jamais** une valeur en dur dans un écran. Couleurs, espacements, radius et
ombres viennent de `src/theme/micsTheme.ts`, qui est la seule source de valeurs du projet.

## 3. Correspondance Figma → développement

### Thémés (AntD tel quel, habillé par les tokens)

| Composant Figma | Rendu par |
|---|---|
| Button `13:98` | `antd/Button` |
| Input `14:16` | `antd/Input` |
| Select `14:30` | `antd/Select` |
| Checkbox `14:49` | `antd/Checkbox` |
| Table : HeaderCell `21:21`, Header Row `158:185`, Row `21:64`, Cell `133:14` | `antd/Table` |
| Pagination `16:34` | `antd/Pagination` |
| Tab `17:61` / Tab Bar `249:107` | `antd/Tabs` |
| Breadcrumb `29:22142` | `antd/Breadcrumb`, niveaux parents rendus par le `Link` du DS |
| Dropdown / Date Range Content `145:73` | `antd/DatePicker.RangePicker` |

### Enveloppés

| Composant Figma | Fichier | Ce que l'enveloppe impose |
|---|---|---|
| Tag `15:18` | `components/Tag.tsx` | Les six palettes (fond 100, bordure 300, texte 700), hauteur 26, padding 2/8, radius/base, croix du set d'icônes |
| Empty State `285:151` | `components/EmptyBlock.tsx` | Icône et libellé du DS, centrage dans la carte |

### Construits (aucun équivalent AntD)

| Composant Figma | Fichier |
|---|---|
| Link `567:140` | `components/Link.tsx` (2 tailles × 2 thèmes × 3 états) |
| buttonIcon `666:110318` | `components/IconButton.tsx` |
| Dropdown / Container `145:69` | `components/DropdownPanel.tsx` (+ `panelSurface` pour les mises en page spécifiques) |
| Badge Type=Count `15:38` | `components/CountBadge.tsx` |
| Icônes (page 🖼 Icons) | `components/Icon.tsx` + 34 SVG dans `assets/icons/` |
| TopBar `17:26` | `components/Shell.tsx` |
| SideMenu `19:32` + SideMenu / Item `19:31` | `components/Shell.tsx` |
| Actionbar `245:4156` | `components/AppShell.tsx` |
| Search / Modal `515:589` et ses items | `components/SearchPalette.tsx` |
| Barre de filtres actifs (validée en maquette de test) | `components/ActiveFilterBar.tsx` |
| Panneau de filtres en cascade | `components/FilterPanel.tsx` |
| Dropdown / Nav Item `142:71`, Checkbox Item `143:76`, Option Item `142:76`, Label Item `143:77`, Clear `193:2804` | `components/DropdownItems.tsx` |
| Table / Toolbar `21:65` | `components/Toolbar.tsx` |
| Counter `185:81` | `components/Counter.tsx` |
| Resource Title Header `250:88` | `components/ResourceTitleHeader.tsx` |
| AppLauncher `19:148` | `components/AppLauncher.tsx` |

| Tab `17:61` + Tab Bar `249:107` | `components/Tabs.tsx` |
| Pagination `16:34` | `components/Pagination.tsx` |
| Breadcrumb `29:22142` | `components/Breadcrumb.tsx` |
| Overlay `212:169` + Header `190:198` + Footer `202:198` | `components/Overlay.tsx` |
| Input `14:16` | `components/Input.tsx` (+ `Field.tsx`) |
| Select `14:30` | `components/Select.tsx` (+ `Field.tsx`) |
| Checkbox `14:49`, Radio `14:60` | AntD thémés, doc `Choice.mdx` |
| Switch `14:67` | `components/Switch.tsx` |
| Section Toggle `111:39` | `components/SectionToggle.tsx` |

### Couverture réelle du fichier Figma

Le fichier compte **83 composants** hors icônes et charts, répartis sur 6 pages. Vingt-et-un sont
développés et documentés. Le reste est identifié, pas encore fait — inventaire à jour au
2026-07-29, obtenu par `findAllWithCriteria` sur chaque page du fichier :

| Page Figma | Fait | Reste à faire |
| --- | --- | --- |
| 🔘 Button | Link, buttonIcon | Button (thémé AntD, page de doc à écrire) |
| 📝 Form Inputs | Input, Select, Checkbox, Radio, Switch, Section Toggle | — |
| 🏷 Data Display | Tag, Badge → CountBadge, Counter, Resource Title Header, Empty State | Alert, Progress, Spin, Tooltip, Segment Header, Alert Row, Metrics Column, Timeline / Event Row, Timeline / Session Header, Lookup / Device Item, 8 composants Chart |
| 💬 Feedback & Overlays | Dropdown ×7, Search / Modal, Overlay + Header + Footer | Feed Card, Selection Card, Funnel / Step Card, Funnel / Result Column, Builder / Criterion, Builder / Criteria Group, Search / Result Item, Search / Section Header |
| 🧭 Navigation & Shell | TopBar, SideMenu + Item, AppLauncher, Actionbar, Tab, Tab Bar, Pagination, Breadcrumb | SearchBar, Step Nav / Item, Actionbar/Light with actions, Settings Bar, Settings Nav / Item, Board Action Bar, Analytics Action Bar |
| 📊 Table & Lists | Table / Toolbar | Table / HeaderCell, Row, Cell, Header Row, Feed Row, Destination Row, Preset Row |

Les composants **thémés** (Button, Input, Select, Checkbox, Radio, Switch) sont rendus par AntD
sans enveloppe : ils fonctionnent déjà dans les écrans, mais leur page Storybook reste à écrire.
Ne pas confondre « rendu correctement » et « documenté ».

## 4. Pièges rencontrés, et pourquoi le code est écrit ainsi

- **`Dropdown` d'AntD se referme au clic interne.** Incompatible avec une application immédiate
  multi-valeurs : le panneau de filtres est donc un popover maîtrisé (`DropdownPanel` + fermeture
  au clic extérieur et à Échap).
- **Les surfaces flottantes d'AntD vivent dans un portail attaché au `body`.** Un clic dedans n'est
  pas un clic « en dehors » : sans exception explicite, choisir une date de début refermait tout.
  Voir le filtre `.ant-picker-dropdown, .ant-select-dropdown, .ant-table-filter-dropdown` dans
  `SegmentsList.tsx`.
- **Un `Checkbox` AntD rend déjà son propre `<label>`.** L'envelopper dans un second `<label>`
  avale le clic : les lignes cochables sont des `div role="checkbox"`.
- **AntD clone les nœuds passés en slot.** `closeIcon`, `suffix`, `prefix`, `icon`, `addonAfter` :
  AntD y injecte `onClick`, `onKeyDown`, `role`, `tabIndex`, `className`. Un composant React qui ne
  spread pas ses props DOM restantes les avale **sans erreur ni avertissement** — la croix d'un Tag
  s'affiche et ne ferme rien. Tout composant destiné à ces emplacements étend
  `React.HTMLAttributes` et fait `{...rest}` sur sa racine : voir `Icon.tsx` et `CloseCross` dans
  `Tag.tsx`.
- **`scroll-behavior: smooth` et défilement programmé ne font pas bon ménage.** Un `scrollTo`
  émis pendant qu'une animation de défilement est en cours la relance depuis la position
  intermédiaire. Dans la TabBar, l'onglet visé restait sous le bouton « … ». Le défilement
  programmé se fait en instantané ; réserver `smooth` aux gestes de l'utilisateur.
- **Ne jamais faire dépendre une mesure de layout de son propre résultat.** La TabBar déduisait
  la largeur utile de la présence du bouton « … », qui dépendait de la mesure : un onglet à
  cheval sur la bande de 48 px faisait osciller les deux. La largeur du bouton est une constante.
- **Un `useEffect` qui déplace le focus ne dépend jamais d'un callback.** Les props `onClose`,
  `onChange`, `onSelect` sont presque toujours des lambdas recréées à chaque rendu du parent.
  Les mettre en dépendance d'un effet qui appelle `focus()` rejoue cet effet à chaque frappe, et
  le champ de saisie perd le focus caractère après caractère. Lire le callback via une ref
  (`onCloseRef.current`) et ne dépendre que de l'état d'ouverture. Voir `Overlay.tsx`.
- **La sélection dans une liste est gouvernée par deux tokens globaux.** `controlItemBgActive`
  (sélectionné) et `controlItemBgHover` (survolé) pilotent d'un coup le Select, le menu Dropdown,
  le DatePicker, le Cascader et le TreeSelect d'Ant Design. Leurs valeurs sont celles du
  Dropdown / Option Item de la maquette : `bg/window` et `bg/hover`. Ne jamais surcharger la
  sélection au niveau d'un composant — c'est ainsi qu'un cyan AntD s'était glissé dans le Select.
- **Un besoin = une entrée dans `src/ui.ts`.** L'équivalent AntD d'un composant du DS n'est pas
  réexporté : `Badge` d'AntD est sorti de la surface publique le jour où `CountBadge` est né. Tant
  que les deux étaient exportés, `SegmentsList` rendait la pastille flottante d'AntD au lieu du
  compteur dans le flux de la maquette. La règle vaut aussi pour `Tag` et `Empty`.
- **Les SVG exportés de Figma arrivent rognés, déformés et avec la couleur en dur.** Ils sont
  normalisés à l'export (viewBox carré, `preserveAspectRatio` retiré, `currentColor`, taille en
  `1em`) pour se piloter en CSS comme un glyphe de police.
- **Le port 5199 est dédié.** Un autre projet local occupe 5173 et y laisse un service worker qui
  détournait le titre et le manifeste de cette page.

## 5. Documentation Storybook

Chaque composant a **une page principale** qui transpose sa frame « {Composant} — Documentation »
du fichier Figma, dans cet ordre : titre et catégorie, description et aperçu, props, règles d'usage
avec les paires à faire / à éviter, exemples d'usage réels, anatomie, accessibilité RGAA, puis
écarts et évolutions.

Concrètement, un composant se documente avec deux fichiers voisins :

- `Composant.stories.tsx` : les stories, une par cas réel de la maquette (pas une par prop).
- `Composant.mdx` : la page principale, attachée aux stories via `<Meta of={…} />`, qui les
  intercale avec le texte de la doc Figma.

Le modèle est rappelé dans la page « Design System / Introduction » du Storybook. `Tag` et `Link`
servent de références : le premier pour un composant enveloppé, le second pour un composant construit.

Les **fondations** ont leur propre page, `Design System / Tokens / Fondations`
(`src/docs/Foundations.mdx` + `.stories.tsx`) : couleurs, espacements, typographie, effets, avec
pour chaque règle son origine — usage relevé dans le produit, ou règle générale du web
(RGAA / WCAG / Gestalt). Elle a son miroir dans la page « 🎨 Foundations » du fichier Figma, où
les mêmes règles sont posées avec les chips PRODUIT / WEB. Les deux se mettent à jour ensemble.

MDX ne parse pas les tableaux markdown : les tableaux de documentation passent tous par
`src/docs/DocTable.tsx`. Attention aussi aux accolades dans le texte, interprétées comme des
expressions JS : écrire `{'{Composant}'}` et non `{Composant}`.

Vingt-quatre composants ont leur page : Icon, IconButton, Link, Tag, CountBadge, EmptyBlock,
DropdownPanel, DropdownItems, ActiveFilterBar, FilterPanel, Toolbar, Counter, ResourceTitleHeader,
AppLauncher, Tabs, Pagination, Breadcrumb, Overlay, Input, Select, Choix (Checkbox / Radio /
Switch), SectionToggle, Shell (TopBar / SideMenu / SearchPalette) et AppShell.

La couverture n'est pas complète : voir le tableau « Couverture réelle du fichier Figma » plus
haut. Un composant rendu correctement dans un écran n'est pas pour autant documenté.

## 6. Où intervenir selon le besoin

| Besoin | Fichier |
|---|---|
| Changer une couleur, un espacement, un radius | `src/theme/micsTheme.ts`, nulle part ailleurs |
| Ajouter une icône | exporter le SVG de Figma, le normaliser, l'enregistrer dans `components/Icon.tsx` |
| Ajouter un composant | appliquer la règle des trois catégories avant d'écrire une ligne |
| Ajouter un écran | composer avec la couche DS ; aucun import direct d'`antd` dans `pages/` |
