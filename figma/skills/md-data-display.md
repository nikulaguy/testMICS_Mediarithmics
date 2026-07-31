---
name: md-data-display
description: Composants d'affichage de données MICS — Tag, Badge, Active Filter Bar, Alert, Alert Row, Counter, Segment Header, Resource Title Header, Metrics Column, Empty State, Tooltip, Table.
---

# md-data-display — Affichage de données

Appliquer /md-ds-rules avant toute utilisation. Pour les graphiques : /md-charts.

## Tag — Set 15:18 (6 variantes)
- **Color** : Default | Blue | Green | Orange | Purple | Red · h 24
- **Props** : `Label` · `Closable` (bool — croix de fermeture, utilisé par le Select FullTag) · `Show logo` (bool)

## Badge — Set 15:38 (6 variantes)
- **Type** : Count | Dot | Success | Processing | Warning | Error. Count porte un nombre (utilisé aussi par la prop `Badge` des Tab).
- C'est le composant du **statut d'une ressource** (feed Live = Success, erreur = Error…). Le libellé s'override sur le calque texte (pas de prop — extension candidate).

## Active Filter Bar — Set 712:132327 (3 variantes)
- **State** : Default (les chips tiennent sur une ligne) | Overflow (lien « +n autres ») | Expanded (toutes les chips, lien « Réduire »).
- Surface `bg/subtle`, `radius/card`, padding `space/8`, gap `space/12`. Zone chips en FILL, « Clear all filters » en HUG à droite.
- Les chips sont des instances de **Tag** (`Color=Default`, `Closable` activé) — jamais un rectangle redessiné. La réinitialisation est un **Button `Type=Link` + `icon/broom`**, le même balai que le pied des panneaux de filtres.
- **Une chip par filtre appliqué**, jamais de regroupement : grouper supprime ce que la barre existe pour montrer. Le libellé nomme la dimension puis la valeur (« Segment type : Campaign +2 »).
- **Quand la poser** : modèle panneau (bouton Filters unique) → toujours, c'est le seul endroit où l'état est lisible panneau fermé. Modèle exposé (un sélecteur par dimension) → uniquement pour les dimensions que la barre d'outils ne montre plus. Aucun filtre actif → la barre n'existe pas, elle ne réserve pas de hauteur.
- Une seule barre par écran, quelle que soit l'origine des filtres (cascade, filtre de colonne).
- ⚠ Les variantes **Button `Type=Link` `Size=M`** (Default/Hover/Disabled) n'ont pas de nœud `icon`, contrairement à `Size=L`. Prendre `Size=L` dès qu'une icône est nécessaire.

## Alert — Set 15:55 (4 variantes)
- **Type** : Info | Success | Warning | Error · largeur FILL
- **Props** : `Title` (texte) · `showTitle` · `showDescription` · `showIcon` · `showClose` (bools) · `Show action` (bool, défaut false — bouton Type=Link exposé `actionButton`, label au panneau)
- **CONTRE-USAGE** : l'alerte n'est **pas cliquable** — ne jamais écrire d'appel au clic dans son texte (« please click here to refresh »). `showClose` la rend fermable (croix), rien de plus ; toute action passe par `Show action` avec un verbe (« Refresh », « Retry »).

## Alert Row — Set 266:132 (4 variantes)
- **Variantes** : State (Empty | Has alerts) × Expanded (False | True)
- **Props** : `Label` · `Count` · `Description` · `Icon` (swap) · `Content` (**SLOT** — contenu déplié)
- **Usage** : lignes d'alertes dépliables (écrans Alerts). Le chevron droit reste visible plié ET déplié (choix produit assumé).

## Progress — Set 16:24 — Level : Low | Mid | High. Barre 220, track bg/window, fill success.

## Spin — 16:25 — un seul par zone de chargement, centré.

## Counter — 185:81
- 360×145, fond bg/container, radius card, padding 24.
- **Props** : `Title` · `Value` · `Max`. Valeur en Headline, titre en Caption/Medium.
- KPI sans quota : utiliser la prop **`Show progress`** (ajoutée en maquette) qui masque la barre ET le « / Max » — jamais un masquage manuel de calques. À défaut, Metrics Column.

## Segment Header — 237:92
- 982×216. Carte navy (User point + grande valeur) + 5 métriques.
- **Props** : `User point` · `User accounts` · `User profiles` · `User device points` · `Installation IDs` · `Vector IDs` (textes).
- **Usage** : en-tête des pages de détail de segment, sous le Resource Title Header.

## Resource Title Header — 250:88
- **Props** : `Title` · `Type` · `Created` · `Show labels` (bool — chips Tag).
- **Usage** : premier enfant de `content` sur les pages de détail : c'est lui qui identifie la ressource.

## Metrics Column — 322:126
- 280×231, carte bg/container padding 24. Props : `Label 1..3` + `Value 1..3`.
- **Règle** : 3 métriques max, la plus importante en premier. Bloc de chiffres, pas un graphique.

## Empty State — 285:151
- **Props** : `Message` · `Illustration` (swap) · `showMessage` · `showDescription` (défaut false) · `showButton` (défaut false)
- Trois configurations couvrent tous les cas « No data » : titre seul / titre + description / complet avec action.
- **Règles** : message = absence de données (pas une erreur) ; posé directement sur bg/window, centré sur les deux axes, sans panel blanc ; ne jamais recomposer icône + texte + bouton à la main.

## Tooltip — Set 126:11 (4 variantes)
- **Arrow** : Left | Top | Bottom | Right · Prop `Text`. Fond bg/tooltip, texte text/on-dark. Flèche centrée sur le côté.

## Table — architecture complète

Le tableau se compose de quatre briques, toujours dans un panel blanc (voir /md-template-list) :

### Table / Toolbar — 21:65
Recherche (Input) à gauche · boutons Filter / Edit view / Export · action Primary à droite. Ordre stable.
- **Props** : `Show search` · `Show filter` · `Show edit view` · `Show export` · `Show primary` (bools, défaut true) — dosent la barre par module.
- **Icônes normées des boutons** (ne pas improviser) : Filter → `icon/filter` · Edit view → `icon/view` · Export → `icon/download` · création → `icon/plus`. Ni `icon/table`, ni `icon/display`.
- **Périmètre (règle transverse)** : la Toolbar ne porte QUE ce qui agit sur le tableau — recherche, filtres, Edit view, actions de masse sur la sélection. Les actions de page ou de ressource (New …, Export global, Edit, ⋮) vont dans l'**Actionbar** : sur une liste standard, `Show export` et `Show primary` restent à **false**. Un Export ne reste dans la Toolbar que s'il porte sur la sélection courante.
- L'Input de recherche et le bouton primaire sont des **instances exposées** : leur placeholder/label se règlent directement dans le panneau de propriétés de l'instance Toolbar.

### Table / Header Row — 158:185
- **Props** : 9 booléens de colonnes — `ID`, `Technical name`, `Creation date`, `User point`, `User accounts`, `User profiles`, `User device points`, `Installation IDs`, `Vector IDs` (défaut true).

### Table / Row — Set 21:64
- **Variantes** : State (Default | Hover) · h 44.
- **Props** : les **mêmes 9 booléens** que Header Row.
- **RÈGLE CRITIQUE** : Header Row et toutes les Rows d'un même tableau doivent avoir des booléens **strictement identiques**, sinon les colonnes se désalignent. C'est le premier point à vérifier au pre-flight d'une liste.

### Table / Cell — Set 133:14
- **Kind** : Text | Link | Number | Icon | Actions · Prop `Value`.
- Link est cyan (couleur lien de la prod). Dernière colonne = Kind=Actions (kebab).
- La colonne Type porte une icône swappable (`type-icon`) : l'adapter à la ressource (base = segment, `icon/plug` = feed…).
- Les textes de cellule **tronquent sur 1 ligne** (ellipsis) : la hauteur de ligne reste 44 quelle que soit la longueur. Si une donnée doit rester lisible en entier, prévoir un Tooltip au survol dans la spec.

### Table / Feed Row — Set 446:400 (Default | Hover)
- Ligne de la liste détaillée des feeds. **Props** : `Feed name` · `Segment source` (lien) · `Destination` · `Logo` (swap logo/*).
- Colonnes fixes 56/FILL/FILL/FILL/110/96/56 — composer le header avec des `Table / HeaderCell` aux mêmes largeurs.

### Table / Destination Row — Set 447:422 (Expanded False | True)
- Ligne dépliable d'une destination (Feeds > Overview). Expanded=True : fond bg/subtle, les Preset Rows suivent.
- **Props** : `Destination` · `Logo` · `Version` · `Live` · `Booting` · `Paused` · `Total` · `Show status` (Tag exposé : vert Active / orange Waiting for authentication).

### Table / Preset Row — 447:423
- Preset indenté (padding gauche 56) sous sa destination. **Props** : `Preset name` · `Version` · `Live` · `Total`.
- Largeurs numériques partagées avec Destination Row : 96/76/64/130/150/64/170/64/56. Rangée « + New preset » = Button Link dans une rangée bordée.

### Table Campaigns (modèle de colonnes de référence)
- Colonnes : `select` 56 FIXE (Checkbox) · `Status` 96 FIXE (Badge) · `Name` FILL (Cell Kind=Link) · 6 métriques 110 FIXE (Cell Kind=Number : Imp., Clicks, Spent, CPM, CTR, CPC) · `actions` 56 FIXE (Cell Kind=Actions).
- Header composé de `Table / HeaderCell` aux mêmes largeurs, `Sortable=True` sur les seules métriques triables.
- **Statut d'une ligne** : `Badge` (Type=Success/Processing/Warning/Error) avec son libellé métier (Active, Pending…) — la pastille de couleur seule est un contre-usage (RGAA 3.1, cf. doc Badge). Le libellé n'est pas une prop du Badge : c'est un override de texte sur l'instance.
- Pas de composant `Campaign Row` : la ligne est une composition de Cells. On ne crée un composant de ligne que si la même ligne sert dans plusieurs écrans distincts (cf. Feed Row, Destination Row).

### Tables custom (hors segments)
- Chaque module a ses colonnes : composer le header en `Table / HeaderCell` (Set 21:21 — Sortable=False|True, prop `Label`) et les lignes en `Table / Cell` (ou un composant Row dédié si la ligne se répète sur plusieurs écrans).
- La règle d'alignement vaut toujours : **mêmes largeurs de colonnes entre header et lignes**, colonnes fixes identiques et FILL pour le reste.

## Timeline (User Lookup)
- Jour de timeline : **pas de composant dédié** — un `Tag` Color=Default (Label = Today / Yesterday / date, Closable et Show logo à false). L'ancien Timeline / Day Separator a été supprimé, remplacé par Tag.
- `Timeline / Session Header` (451:177) — en-tête de carte de session : `Title`, `Duration`, `Origin` + lien JSON.
- `Timeline / Event Row` (451:173) — `Time` · `Event` · `Show details`. S'empile sous le header dans une carte blanche.
- `Lookup / Device Item` (451:190) — UserDevice : `Device`, `Technical ID`, `Dates`, `Found`, icône swappable.
- Le rail vertical (ligne 2 px + drapeau/point) est une composition d'écran — voir /md-template-lookup.

### Comportements
- Le choix des colonnes visibles côté produit passe par « Edit view » (bouton de la Toolbar).
- Liste vide → remplacer les Rows par un Empty State (pas de tableau vide).
