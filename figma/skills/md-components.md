---
name: md-components
description: Catalogue des composants MICS en quatre familles — Navigation & coque (TopBar, SideMenu, Actionbar…), Formulaires (Button, Input, Select…), Affichage de données (Tag, Badge, Table…), Overlays (Overlay, Dropdowns, Search). IDs vérifiés, props exactes, règles d'usage.
---

# md-components — Catalogue des composants

Appliquer /md-ds-rules avant toute utilisation. Les templates qui assemblent ces composants sont
dans /md-templates ; les graphiques dans /md-charts ; les icônes dans /md-icons. Tous les IDs sont
vérifiés sur le fichier (le **Set ID** désigne le component set ; instancier la variante voulue).

## Navigation & coque

### TopBar — 17:26 (standalone)
- h 40, pleine largeur, fond primary. **Toujours premier enfant du frame écran.**
- **Structure** : orgSwitcher (icon/tree + nom d'org) | SearchBar centrée | actions (appstore, options, user)
- **Props** : `Org` (texte) · `showAppstore` · `showSettings` · `showUser` (bools, défaut true)
- **Règle** : en mode édition, `showAppstore=false`.

### buttonIcon — Set 666:110318 (6 variantes)
- **Variantes** : `state` (Default | Hover | Pressed) × `theme` (onLight | onDark) · **Prop** : `iconSwap` (swap d'icône)
- Glyphe 20×20, **aucun fond, aucune bordure, aucune ombre** dans aucun état : seule la couleur change. **Chaque rampe s'éloigne de sa surface** — elle s'éclaircit sur le navy, elle fonce sur le clair.
  - `onDark` : `text/on-dark` → `bg/hover` → `bg/selected`
  - `onLight` : `text/normal` → `text/darker` → `info` (le navy, miroir du `bg/selected` bleuté d'onDark)
- **Code** : `IconButton`, prop `theme` (défaut `onDark`, la TopBar). Le composant maquette fait 20×20 ; le code l'entoure d'une **cible de 32×32** — la taille du glyphe ne dicte pas celle de la zone cliquable.
- **Contraste** (RGAA 3.2, seuil 3:1) : onDark 13,5 / 11,7 / 12,3 · onLight 7 / 11,7 / 13,5 — conformes dans les six états. La première rampe onLight estompait le glyphe (65 → 43 → 25 %) et faisait tomber Pressed à 1,8:1 : ne pas la réintroduire, une rampe qui se rapproche de son fond finit toujours par disparaître dedans.
- **Usage** : barres denses (TopBar, en-têtes de carte). Une action principale d'écran reste un Button. L'intitulé accessible est obligatoire.

### SideMenu — 19:32 (standalone)
- l 200 fixe, hauteur FILL.
- **Structure** : logo + groupes AUDIENCE / ACTIVATION / CONTEXTUAL / MEASUREMENT / DATA STUDIO, faits de `SideMenu / Item`.
- **SideMenu / Item** — Set 19:31 : State (Default | Hover | Active) · Props `Label`, `Icon` (swap).
- **Règle** : un seul item Active, celui de la section courante de l'écran. **Piège vérifié** : le maître a « Boards » en Active — sur chaque instance, activer le bon item ET repasser Boards en Default.

### Actionbar — Set 245:4156 (4 variantes)
- Padding **12 vertical / 35 horizontal** (35 = marge de page `space/35`) sur les quatre variantes ; hauteur au contenu (44 · 50 · 49 · 76), plus de hauteur fixe. **Variantes** :
  - `Type=Light` (245:4117) — fil d'Ariane seul, bordure basse.
  - `Type=Light with actions` — fil d'Ariane + boutons d'action à droite.
  - `Type=Edition` — barre navy pleine largeur : Breadcrumb On dark + bouton Save + croix de fermeture.
  - `Type=Creation` (806:39046) — header du **parcours de création plein écran** (/md-templates §12) : fond `info`, pas de fil d'Ariane (le tunnel est hors navigation) mais un Header `Title` (nom de la ressource) + `Subtitle` (« Segment type : … ») et la croix seule à droite. Côté code : `ActionbarCreation` dans `src/templates/CreationFlow.tsx`.
- **Périmètre (règle transverse)** : l'Actionbar est le SEUL emplacement des actions de page ou de ressource (New …, Export, Edit, menu ⋮) — elles ne descendent jamais dans la Table / Toolbar, qui ne porte que la recherche, les filtres, Edit view et les actions de masse. Une page de liste qui a une action de page est donc en `Type=Light with actions` (le menu ⋮ y est structurel), `Type=Light` uniquement si la page n'a aucune action. Voir /md-templates et la démonstration avant/après (page 📋 Audit, section « ActionBar vs Toolbar »).
- **Props** : `Show primary` · `Show secondary 1` · `Show secondary 2` · `Show link action` (bools) — dosent les actions visibles.
- **Règles** : dans `main` (démarre au bord du SideMenu) sur les templates Liste/Détail ; pleine largeur sans SideMenu en Édition. Jamais d'Actionbar sur un Board ou un Settings.

### Breadcrumb — Set 29:22142 (6 variantes)
- Theme (On dark | On light) × Level (1 | 2 | 3) · Prop `Current` (texte du dernier niveau).
- **Règle** : On light dans Actionbar Light, On dark dans Actionbar Edition. Level = profondeur réelle du chemin de navigation ; les groupes du SideMenu (AUDIENCE, ACTIVATION…) ne comptent pas comme niveau — la liste d'une section est Level 1.
- La prop `Current` pilote le calque `current` (dernier niveau) sur toutes les variantes. Les niveaux parents `level1`/`level2` sont des **instances de `Link`** (Size=M, Theme assorti, exposées dans le panneau de props) : overrider leur texte via l'instance imbriquée. Ne jamais écrire directement dans `current` : un override texte écrase la prop.

### SearchBar — Set 17:21
- States Default | Hover | Active · Prop `Query`. Vit uniquement dans le TopBar. Le clic (ou Cmd+K) ouvre la **palette de recherche globale** — voir Search / Modal dans § Overlays.

### Tab Bar — 249:107 (standalone, slot `Tabs`)
- **Structure** : slot `Tabs` rempli d'instances de `Tab` (gap 24) + ligne de séparation basse + bouton de débordement.
- **Tab** — Set 17:61 : State (Default | Active) · Props `Label`, `Show badge`, `Badge`.
- **Règles** : un seul Tab Active. Au-delà de la largeur disponible : scroll horizontal + bouton d'accès aux onglets masqués (documenté dans la doc du composant). Le maître garde des labels génériques « Label » : les vrais noms sont des overrides d'écran.
- Le slot est aligné à gauche, gap 24 : les onglets se rangent naturellement quel que soit leur nombre.

### Settings Bar — 309:161 (standalone, slot `Tabs`)
- h 44, pleine largeur. **Structure** : retour (icon/arrow-left + `Title`) + slot `Tabs`.
- **Remplir le slot à l'instanciation** (le contenu par défaut n'est pas overridable) avec les onglets réels : My Account · Organisation · Datamart · Campaigns · Services · Data Clean Room — un seul Active.
- Remplace SideMenu + Actionbar sur les pages de réglages.

### Settings Nav / Item — Set 309:160
- States Default | Active · Prop `Label`. Sous-navigation verticale des Settings (l 184 dans une subnav de 200, padding 8). Un seul Active.

### Step Nav / Item — Set 111:26 (4 variantes)
- States : Default | Current | Validated | Validated + Current · Prop `Title`.
- 200 × 60. Colonne d'étapes des wizards d'édition. Un seul Current ; les étapes passées sont Validated.

### Analytics Action Bar — 449:417 (standalone)
- h 52, position de l'Actionbar. **Structure** : Breadcrumb exposé (titre) · spacer · select de métrique · plage de dates · Export · **Execute Query** (primaire) · Share.
- **Props** : `Metric` · `Date range` · `Show metric select` · `Show export` · `Show share`.
- **Usage** : pages d'analyse requêtables (Funnel Analytics) — voir /md-templates. Choisir : Actionbar (navigation), Board Action Bar (filtres de board), Analytics Action Bar (requête à exécuter).

### Board Action Bar — 317:23796 (standalone)
- h 52. **Structure** : boutons + selects de portée + bouton Apply (toujours dernier à droite).
- **Props** : `Show button 1` · `Show button 2` · `Show select 1` · `Show select 2` · `Show select 3` (bools).

### Pagination — 16:34 (standalone)
- Dernier enfant du panel de liste (dans une rangée `pagination-row` alignée à droite). Inclut le sélecteur d'éléments par page. Aucun texte paramétrable (nombre de pages, « 10 / page ») : garder les valeurs du maître, elles sont illustratives. Le hover des « … » est un override, pas une prop.

### AppLauncher — 19:148 (standalone)
- Dropdown du TopBar (grille) pour changer d'app. Positionné en absolu sous le TopBar quand il est montré ouvert.

## Formulaires

### Button — Set 13:98 (32 variantes)
- **Variantes** : Type (Primary | Default | Danger | Link) × State (Default | Hover | **Focus** | Disabled) × Size (**L h32 pad 15** | **M h24 pad 7**)
- **Props** : `Label` (texte) · `Show icon` (bool, défaut false) · `Icon` (swap d'icône, toujours à gauche du libellé)
- **Défaut** : Type=Primary, State=Default, Size=L (13:6)
- **Les deux tailles portent le même texte**, Body/Medium 12/20. Seuls la hauteur et le padding changent. (La maquette a longtemps donné M en h25 avec un texte de 10 : c'était faux, la valeur mesurée dans le DOM est h24.)
- **Correspondance code** (catégorie THÉMÉ, c'est le Button d'AntD) : Primary → `type="primary"` · Default → aucun `type` · Link → `type="link"` · **Danger → la prop booléenne `danger`, pas un type** · Size=L → défaut (`middle`) · Size=M → `size="small"`.
- **`State=Focus`** = l'outline de `:focus-visible` : liseré `focus/ring` de 3, décalé de 1 vers l'extérieur. Rendu par un rectangle enfant `focus-ring` en position absolue, bordure OUTSIDE — une ombre portée d'étalement ne se rend pas à l'export.
- ⚠ **Ne pas confondre avec le halo du clic.** AntD dessine en plus une onde (`.ant-wave`) : un anneau `primary` qui part du bord, s'étend de 6 et s'efface en 2 s. C'est une **animation**, pas un état : elle ne se maquette pas, elle se spécifie. Le liseré, lui, persiste tant que le bouton a le focus.
- **Pas d'état Loading.** Ce qui portait ce nom n'était qu'un bouton à icône gauche : les instances ont été migrées vers `State=Default` + `Show icon`. Pour une action longue, désactiver le bouton et annoncer l'attente à côté.
- **Règles** : un seul Primary par zone d'action ; Primary = dernière action à droite ; Danger jamais à la place du Primary par défaut ; label = verbe d'action, jamais « OK » seul.

### Link — Set 567:140 (12 variantes)
- **Variantes** : Size (L texte 14 Body/Large | M texte 12 Body/Book) × Theme (On light | On dark) × State (Default | Hover | Disabled)
- **Props** : `Label` (texte) · `Show left icon` / `Left icon` (bool + swap) · `Show right icon` / `Right icon` (bool + swap) — icônes calées sur la taille du texte, même couleur, gap 4
- **Couleurs** : On light = link/default, hover link/hover, disabled text/lightest · On dark = link/on-dark, hover text/on-dark, disabled text/on-dark-disabled
- **Règles** : action légère ou navigation inline (Refresh, See more, niveaux du Breadcrumb — voir § Navigation). Action principale d'un écran → Button. Sur surface navy, toujours Theme=On dark, jamais link/default.
- ⚠ Distinct de `Button Type=Link` (bouton à paddings h32/h25 pour les zones d'action) : Link est l'atome texte nu, sans padding.

### Input — Set 14:16 (6 variantes)
- **States** : Default | Filled (champ rempli) | Hover | Focus | Error | Disabled
- **Props** : `Value` (texte) · `Label` + `Show label` (bool, défaut false) · `Message` + `Show message` (bool, défaut false) · `showRightIcon` + `RightIcon` (icône de droite) · `showLeftIcon` + `LeftIcon` (icône à gauche du texte, = prefix AntD)
- **Taille** : h32, largeur FILL. Bordure `border/input`.
- **Règles** : State=Filled pour un champ rempli ; en Error, activer `Show message` pour afficher le message sous le champ. Icône à droite par défaut ; l'icône gauche est réservée aux patterns de recherche (loupe).

### Select — Set 14:30 (7 variantes)
- **States** : Default | Filled (valeur saisie) | FullTag (tags fermables dans le champ) | Hover | Focus | Error | Disabled
- **Props** : `Value` (texte affiché) · `Label` · `showLabel` (bool, défaut true) · `Message` + `Show message` · `showLabelIcon` (bool — icône info à côté du label) · `showIcon`
- **Taille** : h56 label inclus, largeur FILL.
- **Attention** : deux textes distincts — `Label` (libellé au-dessus) et `Value` (valeur dans le champ). Cibler le bon.
- **FullTag** : le champ contient des instances de `Tag` avec `Closable=true` — c'est le multi-select.

### Checkbox — Set 14:49 (4 variantes)
- **States** : Unchecked | Checked | Indeterminate | Disabled · **Props** : `Label`

### Radio — Set 14:60 (3 variantes)
- **States** : Unchecked | Checked | Disabled · **Props** : `Label` · `showLabel` (bool, défaut true)
- Un groupe de radios = un choix unique ; toujours ≥ 2 options.

### Switch — Set 14:67 (3 variantes)
- **States** : Off | On | Disabled. **Pas de label intégré** : ajouter un texte à côté (pattern : rangée SPACE_BETWEEN label + Switch).

### Section Toggle — Set 111:39 (2 variantes)
- **States** : Collapsed | Expanded · **Props** : `Label`
- **Usage** : titres de sections optionnelles dépliables dans les formulaires (« Advanced »).

### Pattern de champ de formulaire

```
field (VERTICAL, FILL, gap 4)
  [Label porté par le composant Input/Select : activer Show label]
  Input ou Select (FILL)
  [Message d'erreur porté par le composant : activer Show message]
```
Espacement entre champs : gap 16 ou 24 selon la densité de la section (voir /md-templates).

## Affichage de données

### Tag — Set 15:18 (6 variantes)
- **Color** : Default | Blue | Green | Orange | Purple | Red · hauteur `size/tag` (26 — la valeur 24 annoncée jusqu'ici était fausse, relevée sur le composant)
- **Props** : `Label` · `Closable` (bool — croix de fermeture, utilisé par le Select FullTag) · `Show logo` (bool)

### Badge — Set 15:38 (6 variantes)
- **Type** : Count | Dot | Success | Processing | Warning | Error. Count porte un nombre (utilisé aussi par la prop `Badge` des Tab).
- C'est le composant du **statut d'une ressource** (feed Live = Success, erreur = Error…). Le libellé s'override sur le calque texte (pas de prop — extension candidate).

### Active Filter Bar — Set 712:132327 (3 variantes)
- **State** : Default (les chips tiennent sur une ligne) | Overflow (lien « +n autres ») | Expanded (toutes les chips, lien « Réduire »).
- Surface `bg/subtle`, `radius/card`, padding `space/8`, gap `space/12`. Zone chips en FILL, « Clear all filters » en HUG à droite.
- Les chips sont des instances de **Tag** (`Color=Default`, `Closable` activé) — jamais un rectangle redessiné. La réinitialisation est un **Button `Type=Link` + `icon/broom`**, le même balai que le pied des panneaux de filtres.
- **Une chip par filtre appliqué**, jamais de regroupement : grouper supprime ce que la barre existe pour montrer. Le libellé porte la **valeur seule** quand elle se comprend sans sa dimension (« Active », « E commerce » — écran 614:97211) ; il se préfixe de la dimension quand la valeur seule serait ambiguë (« Persistence : Persisted »).
- **Quand la poser, quoi y mettre** : règles dans /md-templates §1 (multi-sélections seulement, jamais de duplication d'un filtre lisible ailleurs, pas de barre sans filtre actif). Une seule barre par écran, quelle que soit l'origine des filtres.

### Alert — Set 15:55 (4 variantes)
- **Type** : Info | Success | Warning | Error · largeur FILL
- **Props** : `Title` (texte) · `showTitle` · `showDescription` · `showIcon` · `showClose` (bools) · `Show action` (bool, défaut false — bouton Type=Link exposé `actionButton`, label au panneau)
- **CONTRE-USAGE** : l'alerte n'est **pas cliquable** — ne jamais écrire d'appel au clic dans son texte (« please click here to refresh »). `showClose` la rend fermable (croix), rien de plus ; toute action passe par `Show action` avec un verbe (« Refresh », « Retry »).

### Alert Row — Set 266:132 (4 variantes)
- **Variantes** : State (Empty | Has alerts) × Expanded (False | True)
- **Props** : `Label` · `Count` · `Description` · `Icon` (swap) · `Content` (**SLOT** — contenu déplié)
- **Usage** : lignes d'alertes dépliables (écrans Alerts). Le chevron droit reste visible plié ET déplié (choix produit assumé).

### Progress — Set 16:24 — Level : Low | Mid | High. Barre 220, track bg/window, fill success.

### Spin — 16:25 — un seul par zone de chargement, centré.

### Counter — 185:81
- 360×145, fond `bg/container`, `radius/card`, padding `space/24`.
- **Props** : `Title` · `Value` · `Max`. Valeur en Headline, titre en Caption/Medium.
- KPI sans quota : utiliser la prop **`Show progress`** (ajoutée en maquette) qui masque la barre ET le « / Max » — jamais un masquage manuel de calques. À défaut, Metrics Column.

### Segment Header — 237:92
- 982×216. Carte navy (User point + grande valeur) + 5 métriques.
- **Props** : `User point` · `User accounts` · `User profiles` · `User device points` · `Installation IDs` · `Vector IDs` (textes).
- **Usage** : en-tête des pages de détail de segment, sous le Resource Title Header.

### Resource Title Header — 250:88
- **Props** : `Title` · `Type` · `Created` · `Show labels` (bool — chips Tag).
- **Usage** : premier enfant de `content` sur les pages de détail : c'est lui qui identifie la ressource.

### Metrics Column — 322:126
- 280×231, carte bg/container padding 24. Props : `Label 1..3` + `Value 1..3`.
- **Règle** : 3 métriques max, la plus importante en premier. Bloc de chiffres, pas un graphique.

### Empty State — 285:151
- **Props** : `Message` · `Illustration` (swap) · `showMessage` · `showDescription` (défaut false) · `showButton` (défaut false)
- Trois configurations couvrent tous les cas « No data » : titre seul / titre + description / complet avec action.
- **Règles** : message = absence de données (pas une erreur) ; posé directement sur bg/window, centré sur les deux axes, sans panel blanc ; ne jamais recomposer icône + texte + bouton à la main.

### Tooltip — Set 126:11 (4 variantes)
- **Arrow** : Left | Top | Bottom | Right · Prop `Text`. Fond bg/tooltip, texte text/on-dark. Flèche centrée sur le côté.

### Table — architecture complète

Le tableau se compose de quatre briques, toujours dans un panel blanc (voir /md-templates) :

#### Table / Toolbar — 21:65
Recherche (Input) à gauche · boutons Filter / Edit view / Export · action Primary à droite. Ordre stable.
- **Props** : `Show search` · `Show filter` · `Show edit view` · `Show export` · `Show primary` (bools, défaut true) — dosent la barre par module.
- **Icônes normées des boutons** (ne pas improviser) : Filter → `icon/filter` · Edit view → `icon/view` · Export → `icon/download` · création → `icon/plus`. Ni `icon/table`, ni `icon/display`.
- **Périmètre (règle transverse)** : la Toolbar ne porte QUE ce qui agit sur le tableau — recherche, filtres, Edit view, actions de masse sur la sélection. Les actions de page ou de ressource (New …, Export global, Edit, ⋮) vont dans l'**Actionbar** : sur une liste standard, `Show export` et `Show primary` restent à **false**. Un Export ne reste dans la Toolbar que s'il porte sur la sélection courante.
- L'Input de recherche et le bouton primaire sont des **instances exposées** : leur placeholder/label se règlent directement dans le panneau de propriétés de l'instance Toolbar.

#### Table / Header Row — 158:185
- **Props** : 9 booléens de colonnes — `ID`, `Technical name`, `Creation date`, `User point`, `User accounts`, `User profiles`, `User device points`, `Installation IDs`, `Vector IDs` (défaut true).

#### Table / Row — Set 21:64
- **Variantes** : State (Default | Hover) · hauteur `size/row`.
- **Props** : les **mêmes 9 booléens** que Header Row.
- **RÈGLE CRITIQUE** : Header Row et toutes les Rows d'un même tableau doivent avoir des booléens **strictement identiques**, sinon les colonnes se désalignent. C'est le premier point à vérifier au pre-flight d'une liste.

#### Table / Cell — Set 133:14
- **Kind** : Text | Link | Number | Icon | Actions · Prop `Value`.
- Link est cyan (couleur lien de la prod). Dernière colonne = Kind=Actions (kebab).
- La colonne Type porte une icône swappable (`type-icon`) : l'adapter à la ressource (base = segment, `icon/plug` = feed…).
- Les textes de cellule **tronquent sur 1 ligne** (ellipsis) : la hauteur de ligne reste `size/row` quelle que soit la longueur. Si une donnée doit rester lisible en entier, prévoir un Tooltip au survol dans la spec.

#### Table / Feed Row — Set 446:400 (Default | Hover)
- Ligne de la liste détaillée des feeds. **Props** : `Feed name` · `Segment source` (lien) · `Destination` · `Logo` (swap logo/*).
- Colonnes fixes 56/FILL/FILL/FILL/110/96/56 — composer le header avec des `Table / HeaderCell` aux mêmes largeurs.

#### Table / Destination Row — Set 447:422 (Expanded False | True)
- Ligne dépliable d'une destination (Feeds > Overview). Expanded=True : fond bg/subtle, les Preset Rows suivent.
- **Props** : `Destination` · `Logo` · `Version` · `Live` · `Booting` · `Paused` · `Total` · `Show status` (Tag exposé : vert Active / orange Waiting for authentication).

#### Table / Preset Row — 447:423
- Preset indenté (padding gauche 56) sous sa destination. **Props** : `Preset name` · `Version` · `Live` · `Total`.
- Largeurs numériques partagées avec Destination Row : 96/76/64/130/150/64/170/64/56. Rangée « + New preset » = Button Link dans une rangée bordée.

#### Table Campaigns (modèle de colonnes de référence)
- Colonnes : `select` 56 FIXE (Checkbox) · `Status` 96 FIXE (Badge) · `Name` FILL (Cell Kind=Link) · 6 métriques 110 FIXE (Cell Kind=Number : Imp., Clicks, Spent, CPM, CTR, CPC) · `actions` 56 FIXE (Cell Kind=Actions).
- Header composé de `Table / HeaderCell` aux mêmes largeurs, `Sortable=True` sur les seules métriques triables.
- **Statut d'une ligne** : `Badge` (Type=Success/Processing/Warning/Error) avec son libellé métier (Active, Pending…) — la pastille de couleur seule est un contre-usage (RGAA 3.1, cf. doc Badge). Le libellé n'est pas une prop du Badge : c'est un override de texte sur l'instance.
- Pas de composant `Campaign Row` : la ligne est une composition de Cells. On ne crée un composant de ligne que si la même ligne sert dans plusieurs écrans distincts (cf. Feed Row, Destination Row).

#### Tables custom (hors segments)
- Chaque module a ses colonnes : composer le header en `Table / HeaderCell` (Set 21:21 — Sortable=False|True, prop `Label`) et les lignes en `Table / Cell` (ou un composant Row dédié si la ligne se répète sur plusieurs écrans).
- La règle d'alignement vaut toujours : **mêmes largeurs de colonnes entre header et lignes**, colonnes fixes identiques et FILL pour le reste.

### Timeline (User Lookup)
- Jour de timeline : **pas de composant dédié** — un `Tag` Color=Default (Label = Today / Yesterday / date, Closable et Show logo à false). L'ancien Timeline / Day Separator a été supprimé, remplacé par Tag.
- `Timeline / Session Header` (451:177) — en-tête de carte de session : `Title`, `Duration`, `Origin` + lien JSON.
- `Timeline / Event Row` (451:173) — `Time` · `Event` · `Show details`. S'empile sous le header dans une carte blanche.
- `Lookup / Device Item` (451:190) — UserDevice : `Device`, `Technical ID`, `Dates`, `Found`, icône swappable.
- Le rail vertical (ligne 2 px + drapeau/point) est une composition d'écran — voir /md-templates.

#### Comportements
- Le choix des colonnes visibles côté produit passe par « Edit view » (bouton de la Toolbar).
- Liste vide → remplacer les Rows par un Empty State (pas de tableau vide).

## Overlays & surfaces superposées

### Overlay — Set 228:3401 (le composant unique modale + drawer)
- **Variantes** : Mode=Modal (204:204) | Mode=Drawer (228:3402)
- **Prop** : `Content` (**SLOT**) — on remplit le slot, on ne remplace jamais le header ni le footer.
- **Structure** : Overlay / Header + slot Content (padding 24) + Overlay / Footer.
- **Modal** : centrée sur les deux axes ; référence 960 × 692. Tâche courte qui tient sans scroll — si ça déborde, c'était un drawer ou une page.
- **Drawer** : collé au bord droit, pleine hauteur, l 520 (le maître est à 520 ; constante dans un même parcours).
- **Règle** : un seul overlay actif, jamais d'empilement modal + drawer. Un enchaînement d'étapes se fait dans la même modale.

### Overlay / Header — Set 193:3194 (3 thèmes)
- **Theme** : Blue (modales standard) | Light (drawers) | Dark · Prop `Title`.
- Structure : titre + croix de fermeture. En mode édition plein écran, c'est l'Actionbar Edition qui joue ce rôle, pas un Header.

### Overlay / Footer — 193:3214
- Rangée alignée à droite : bouton secondaire (Default L) à gauche, primaire (Primary L) à droite.
- **Prop** : `Show 3rd action` (bool, défaut false).
- Pas d'action → pas de footer.

### Dropdown — système à container commun

#### Dropdown / Container — 145:69
- Panneau blanc + **slot `Content`** + `Show clear` (bool, défaut true → rangée Dropdown / Clear en bas).
- Tous les dropdowns du produit utilisent CE container ; le contenu du slot varie :

| Contenu du slot | Composant | Cas |
|---|---|---|
| Navigation de filtres | `Dropdown / Nav Item` (Set 142:71 — Default/Active, prop `Active filter`) | menu de filtres |
| Options simples | `Dropdown / Option Item` (Set 142:76 — Default/Selected) | choix unique |
| Multi-sélection | `Dropdown / Checkbox Item` (Set 143:76 — Unchecked/Checked) | filtres multiples |
| Libellés taggés | `Dropdown / Label Item` (143:77) | labels |
| Plage de dates | `Dropdown / Date Range Content` (145:73) | date picker |

- `Dropdown / Clear` — Set 193:2804 (Default | Hover) : remise à zéro du filtre.
- **Positionnement** : en absolu au-dessus du contenu (jamais dans l'autolayout de la page), sous l'élément déclencheur.

- **Menu d'actions contextuelles** (kebab ⋮ de ligne de tableau) : c'est aussi un `Dropdown / Container`, slot rempli d'`Option Item`. Action destructive en dernier, en couleur error. Actions ponctuelles uniquement — pas de navigation. (L'ancien composant monolithique DropdownMenu a été supprimé du fichier.)

### Choisir la surface

L'arbre de décision (page, modale, drawer, non modal) est dans /md-produce-screen ; la
construction dans /md-templates §8-9. Repères sources : Nielsen Norman Group (Modal & Nonmodal
Dialogs ; Popups: 10 Problematic Trends), Material 3 (Side sheets — un formulaire dense renvoie
vers une page). Exemples visuels : frame « Overlay — choisir la bonne surface », page 💬 Feedback
& Overlays. Test rapide : si l'utilisateur doit relire ce que la surface masque pour répondre,
changer de surface.

### Search — palette de recherche globale (Cmd+K)

#### Search / Modal — 515:589
- Modale de la recherche du TopBar : rangée de recherche (loupe + `Query` + icône info) + **slot natif `Content`**.
- **Position fixe** : centrée horizontalement, ancrée à ~140 px du haut, l 760, ombre portée, par-dessus un scrim `bg/scrim`.
- **N'utilise pas le composant Overlay** : pas de header/footer ni de croix — fermeture par Échap ou clic sur le voile.
- **Aucun résultat** : le slot `Content` reçoit une instance `Empty State` (285:151), la query reste affichée — référence : écran « Search — Empty State » (section Search).

#### Search / Section Header — 515:578
- En-tête de groupe de résultats (FEATURES, SEGMENTS, PLUGINS…). Prop `Label` (capitales).

#### Search / Result Item — Set 515:588 (Default | Hover)
- Un résultat : icône (swap, `Show icon`) + libellé. Hover = sélection clavier, un seul à la fois.
- Le libellé n'est **pas** une prop : la sous-chaîne correspondant à la requête passe en Circular Medium par plage de caractères — à refaire après tout override de texte.
- Remplissage du slot : empiler Section Header + Result Items par section. Écran de référence : Search — Palette (Cmd+K), ✅ Search — Clean.

### Selection Card — Set 185:294 (4 variantes)
- **Variantes** : Layout (Card 240×200 | Row h56) × State (Default | Hover) · Props `Label`, `Icon` (swap).
- **Usage** : écrans de choix de type (/md-templates). Card = 2 choix principaux max ; au-delà, Row.

### Feed Card — 184:199
- 282×164. **Props** : `Title` · `Version` · `Description` · `Logo` (**swap** — famille `logo/*` : amazon-ads, linkedin, snapchat, kameleoon, parrot).
- **Usage** : grille de presets dans la modale « Create a feed » (3 colonnes, gap 24, dans le slot Content de l'Overlay).
