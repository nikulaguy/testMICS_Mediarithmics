---
name: md-forms
description: Composants de formulaire MICS — Button, Input, Select, Checkbox, Radio, Switch, Section Toggle. IDs vérifiés, props exactes, règles d'usage.
---

# md-forms — Composants de formulaire

Appliquer /md-ds-rules avant toute utilisation. Tous les IDs ci-dessous sont vérifiés sur le fichier (le **Set ID** désigne le component set ; instancier la variante voulue).

## Button — Set 13:98 (32 variantes)
- **Variantes** : Type (Primary | Default | Danger | Link) × State (Default | Hover | **Focus** | Disabled) × Size (**L h32 pad 15** | **M h24 pad 7**)
- **Props** : `Label` (texte) · `Show icon` (bool, défaut false) · `Icon` (swap d'icône, toujours à gauche du libellé)
- **Défaut** : Type=Primary, State=Default, Size=L (13:6)
- **Les deux tailles portent le même texte**, Body/Medium 12/20. Seuls la hauteur et le padding changent. (La maquette a longtemps donné M en h25 avec un texte de 10 : c'était faux, la valeur mesurée dans le DOM est h24.)
- **Correspondance code** (catégorie THÉMÉ, c'est le Button d'AntD) : Primary → `type="primary"` · Default → aucun `type` · Link → `type="link"` · **Danger → la prop booléenne `danger`, pas un type** · Size=L → défaut (`middle`) · Size=M → `size="small"`.
- **`State=Focus`** = l'outline de `:focus-visible` : liseré `focus/ring` de 3, décalé de 1 vers l'extérieur. Rendu par un rectangle enfant `focus-ring` en position absolue, bordure OUTSIDE — une ombre portée d'étalement ne se rend pas à l'export.
- ⚠ **Ne pas confondre avec le halo du clic.** AntD dessine en plus une onde (`.ant-wave`) : un anneau `primary` qui part du bord, s'étend de 6 et s'efface en 2 s. C'est une **animation**, pas un état : elle ne se maquette pas, elle se spécifie. Le liseré, lui, persiste tant que le bouton a le focus.
- **Pas d'état Loading.** Ce qui portait ce nom n'était qu'un bouton à icône gauche : les instances ont été migrées vers `State=Default` + `Show icon`. Pour une action longue, désactiver le bouton et annoncer l'attente à côté.
- **Règles** : un seul Primary par zone d'action ; Primary = dernière action à droite ; Danger jamais à la place du Primary par défaut ; label = verbe d'action, jamais « OK » seul.

## Link — Set 567:140 (12 variantes)
- **Variantes** : Size (L texte 14 Body/Large | M texte 12 Body/Book) × Theme (On light | On dark) × State (Default | Hover | Disabled)
- **Props** : `Label` (texte) · `Show left icon` / `Left icon` (bool + swap) · `Show right icon` / `Right icon` (bool + swap) — icônes calées sur la taille du texte, même couleur, gap 4
- **Couleurs** : On light = link/default, hover link/hover, disabled text/lightest · On dark = link/on-dark, hover text/on-dark, disabled text/on-dark-disabled
- **Règles** : action légère ou navigation inline (Refresh, See more, niveaux du Breadcrumb — voir /md-navigation). Action principale d'un écran → Button. Sur surface navy, toujours Theme=On dark, jamais link/default.
- ⚠ Distinct de `Button Type=Link` (bouton à paddings h32/h25 pour les zones d'action) : Link est l'atome texte nu, sans padding.

## Input — Set 14:16 (6 variantes)
- **States** : Default | Filled (champ rempli) | Hover | Focus | Error | Disabled
- **Props** : `Value` (texte) · `Label` + `Show label` (bool, défaut false) · `Message` + `Show message` (bool, défaut false) · `showRightIcon` + `RightIcon` (icône de droite) · `showLeftIcon` + `LeftIcon` (icône à gauche du texte, = prefix AntD)
- **Taille** : h32, largeur FILL. Bordure `border/input`.
- **Règles** : State=Filled pour un champ rempli ; en Error, activer `Show message` pour afficher le message sous le champ. Icône à droite par défaut ; l'icône gauche est réservée aux patterns de recherche (loupe).

## Select — Set 14:30 (7 variantes)
- **States** : Default | Filled (valeur saisie) | FullTag (tags fermables dans le champ) | Hover | Focus | Error | Disabled
- **Props** : `Value` (texte affiché) · `Label` · `showLabel` (bool, défaut true) · `Message` + `Show message` · `showLabelIcon` (bool — icône info à côté du label) · `showIcon`
- **Taille** : h56 label inclus, largeur FILL.
- **Attention** : deux textes distincts — `Label` (libellé au-dessus) et `Value` (valeur dans le champ). Cibler le bon.
- **FullTag** : le champ contient des instances de `Tag` avec `Closable=true` — c'est le multi-select.

## Checkbox — Set 14:49 (4 variantes)
- **States** : Unchecked | Checked | Indeterminate | Disabled · **Props** : `Label`

## Radio — Set 14:60 (3 variantes)
- **States** : Unchecked | Checked | Disabled · **Props** : `Label` · `showLabel` (bool, défaut true)
- Un groupe de radios = un choix unique ; toujours ≥ 2 options.

## Switch — Set 14:67 (3 variantes)
- **States** : Off | On | Disabled. **Pas de label intégré** : ajouter un texte à côté (pattern : rangée SPACE_BETWEEN label + Switch).

## Section Toggle — Set 111:39 (2 variantes)
- **States** : Collapsed | Expanded · **Props** : `Label`
- **Usage** : titres de sections optionnelles dépliables dans les formulaires (« Advanced »).

## Pattern de champ de formulaire

```
field (VERTICAL, FILL, gap 4)
  [Label porté par le composant Input/Select : activer Show label]
  Input ou Select (FILL)
  [Message d'erreur porté par le composant : activer Show message]
```
Espacement entre champs : gap 16 ou 24 selon la densité de la section (voir /md-template-edition).
