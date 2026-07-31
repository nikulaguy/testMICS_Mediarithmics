# Portabilité vers `mediarithmics-platform`

Ce que coûte, composant par composant, la reprise du code de ce dépôt dans le produit.
**Mesuré, pas estimé** : chaque ligne a été vérifiée en compilant les fichiers dans un projet nu
monté sur la chaîne exacte du client.

Conditions du test, le 31 juillet 2026 :

```
typescript 5.5.2 · react 18.3.1 · react-dom 18.3.1 · antd 5.22.7 · @ant-design/icons 5.5.2
tsconfig strict, moduleResolution node, jsx react-jsx
```

## Résultat

**27 composants sur 31 compilent tels quels**, sans une ligne de modification.

| | Composants | Ce qu'il faut faire |
|---|---|---|
| ✅ **Copiables tels quels** | 27 | Réécrire le chemin d'import du thème. Rien d'autre. |
| ⚠️ **Un import d'asset à déclarer** | `Shell`, `AppLauncher` | Le logo est un `import … from '….png'`. Une déclaration de module suffit à TypeScript ; le bundler doit savoir charger un PNG, ce que Webpack fait nativement. |
| ⛔ **Couplés aux données de démo** | `FilterPanel`, `SearchPalette` | Ils importent `../data/segments`. Voir plus bas : c'est un défaut de conception, pas un obstacle technique. |

Les templates (`ListTemplate`) importent la surface publique `../ui` : ils supposent qu'on reprend
la couche entière, pas un fichier isolé.

## La seule dépendance à Vite a été supprimée

`Icon` importait ses 52 SVG avec le suffixe `?raw`, **propre à Vite**. Sous Webpack, la
résolution échoue — et comme 24 composants sur 31 importent `Icon`, le blocage se propageait à
presque tout le dépôt.

Les sources sont désormais inlinées dans `src/assets/icons.generated.ts`, du TypeScript ordinaire,
régénérable par `npm run icons` après toute modification d'un SVG. Le composant se copie
maintenant dans n'importe quelle chaîne de build.

C'est le seul point de ce type qui restait : plus aucun composant ne dépend d'une fonctionnalité de
bundler, hors les deux imports de logo signalés ci-dessus.

## Ce qui reste à faire à la copie

Aucun de ces points n'est bloquant, mais aucun n'est automatique.

1. **Le chemin du thème.** Tout composant importe `../theme/micsTheme`. Il faut soit copier ce
   module, soit rebrancher l'import sur l'équivalent du produit. C'est le seul geste commun à tous
   les fichiers.
2. **La surface publique.** Ici une page importe depuis `../ui`. Dans le produit, les imports
   passent par les alias Nx (`@basic`, `@advanced`). À réécrire.
3. **Les styles.** Nos composants portent leurs styles en objets `style={{}}` inline ; le produit
   utilise des fichiers LESS. Les deux cohabitent sans conflit, mais un composant repris gardera
   ses styles inline tant qu'on ne les traduira pas.
4. **TypeScript 6 chez nous, 5.5.2 chez eux.** Sans effet constaté : les 27 composants compilent
   sous 5.5.2. L'écart porte sur des options de compilation, pas sur la syntaxe utilisée.

## Le vrai défaut : deux composants ne sont pas réutilisables

`FilterPanel` et `SearchPalette` importent `../data/segments` — les dimensions de filtrage, les
icônes par type, le jeu de démonstration. **Ce ne sont donc pas des composants génériques**, ce
sont des morceaux de l'écran Segments.

Le symptôme est visible dans le test : les erreurs de type `implicitly has an 'any' type` sur ces
deux fichiers sont la conséquence du module manquant, pas des défauts indépendants.

La correction est connue et n'a pas été faite : passer les dimensions en props plutôt que les
importer. Elle change la signature des deux composants, donc elle se décide, elle ne se glisse pas
dans un lot.

## Correspondance avec les composants existants du produit

Inventaire relevé dans `frontend/libs/basic/src/components` (56 dossiers) et
`frontend/libs/advanced/src/components` (40 dossiers).

### Un équivalent existe — arbitrer lequel gagne

| Ici | Chez vous | Remarque |
|---|---|---|
| `Card` | `basic/card` | Même rôle. |
| `Counter` | `basic/counters` | Pluriel côté produit. |
| `Tag` | `basic/tags` | Pluriel côté produit. |
| `Icon` | `basic/mcs-icon` | Le vôtre mélange trois systèmes d'icônes (mcsfont, AntD, SVG) ; le nôtre n'en a qu'un. |
| `Tabs` | `basic/mcs-tabs` | |
| `AppLauncher` | `basic/apps-navigation` | Nom très différent, même fonction. |
| `Shell` (TopBar, SideMenu) | `advanced/top-bar`, `advanced/side-menu` | |
| `AppShell` | `advanced/layout` | |
| `LabelPicker` | `basic/labels-selector`, `advanced/labels` | Deux chez vous. |
| `SectionToggle` | `basic/foldable-card-hierarchy`, `basic/section` | Deux chez vous. |
| `ResourceTitleHeader` | `basic/content-header`, `basic/mcs-header` | Deux chez vous. |
| `DropdownPanel` | `basic/popup-container` | |
| `ListTemplate` | `basic/table-view`, `basic/collection-view` | Deux chez vous. |

### Vous en avez plusieurs là où nous en avons un

C'est le point le plus intéressant pour la reprise : la duplication n'est pas de notre côté.

| Besoin | Ici | Chez vous |
|---|---|---|
| Surface flottante modale | `Overlay` (+ Header, Footer) | `basic/mcs-modal`, `basic/blurred-modal`, `basic/modal-header`, `advanced/drawer` — **4** |
| Filtrage d'une liste | `FilterPanel` | `basic/collection-view-filters`, `basic/table-view-filters`, `basic/tree-select-filter` — **3** |
| Absence de résultat | `EmptyState` | `basic/empty-records`, `basic/empty-table-view` — **2** |
| Sélection dans une liste | `Select` | `basic/multi-select`, `basic/multi-level-select`, `basic/graph-tabbed-select`, `basic/element-selector`, `basic/table-selector`, `basic/collection-selector` — **6** |

### Sans équivalent chez vous

`Link`, `IconButton`, `CountBadge`, `StatusBadge`, `DropdownItems` (les six rangées de menu),
`ActiveFilterBar`, `SegmentHeader`, `Breadcrumb`, `Toolbar`, `SideMenuItem`, `Field`.

`ActiveFilterBar` est le cas emblématique : aucun écran du produit ne rappelle les filtres actifs,
et c'est précisément l'incohérence qui a lancé ce travail.

### Nomenclature

Aucun de nos noms n'entre en collision avec les vôtres, parce que les conventions diffèrent
partout : nous sommes en `PascalCase` pour un fichier par composant, vous êtes en `kebab-case`
pour un dossier par composant, avec un préfixe `mcs-` appliqué de façon irrégulière.

Conséquence pratique : **un composant repris peut coexister avec le vôtre** le temps de la
migration. Il n'y a pas de choix à faire le premier jour.

## Par où commencer, si vous ne prenez qu'une chose

`StatusBadge`, `CountBadge`, `Card`, `Link`. Quatre fichiers, aucune dépendance hors du module de
thème, aucun équivalent chez vous pour trois d'entre eux. Une heure pour vérifier que la reprise
tient, sans rien engager.
