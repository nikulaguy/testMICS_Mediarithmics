---
name: md-navigation
description: Composants de navigation et coque MICS — TopBar, SideMenu, Actionbar, Breadcrumb, Tab Bar, Settings Bar, Step Nav, Board Action Bar, Pagination.
---

# md-navigation — Navigation et coque

Appliquer /md-ds-rules avant toute utilisation.

## TopBar — 17:26 (standalone)
- h 40, pleine largeur, fond primary. **Toujours premier enfant du frame écran.**
- **Structure** : orgSwitcher (icon/tree + nom d'org) | SearchBar centrée | actions (appstore, options, user)
- **Props** : `Org` (texte) · `showAppstore` · `showSettings` · `showUser` (bools, défaut true)
- **Règle** : en mode édition, `showAppstore=false`.

## SideMenu — 19:32 (standalone)
- l 200 fixe, hauteur FILL.
- **Structure** : logo + groupes AUDIENCE / ACTIVATION / CONTEXTUAL / MEASUREMENT / DATA STUDIO, faits de `SideMenu / Item`.
- **SideMenu / Item** — Set 19:31 : State (Default | Hover | Active) · Props `Label`, `Icon` (swap).
- **Règle** : un seul item Active, celui de la section courante de l'écran. **Piège vérifié** : le maître a « Boards » en Active — sur chaque instance, activer le bon item ET repasser Boards en Default.

## Actionbar — Set 245:4156 (3 variantes)
- h 52. **Variantes** :
  - `Type=Light` (245:4117) — fil d'Ariane seul.
  - `Type=Light with actions` — fil d'Ariane + boutons d'action à droite.
  - `Type=Edition` — barre navy pleine largeur : Breadcrumb On dark + bouton Save + croix de fermeture.
- **Périmètre (règle transverse)** : l'Actionbar est le SEUL emplacement des actions de page ou de ressource (New …, Export, Edit, menu ⋮) — elles ne descendent jamais dans la Table / Toolbar, qui ne porte que la recherche, les filtres, Edit view et les actions de masse. Une page de liste qui a une action de page est donc en `Type=Light with actions` (le menu ⋮ y est structurel), `Type=Light` uniquement si la page n'a aucune action. Voir /md-template-list et la démonstration avant/après (page 📋 Audit, section « ActionBar vs Toolbar »).
- **Props** : `Show primary` · `Show secondary 1` · `Show secondary 2` · `Show link action` (bools) — dosent les actions visibles.
- **Règles** : dans `main` (démarre au bord du SideMenu) sur les templates Liste/Détail ; pleine largeur sans SideMenu en Édition. Jamais d'Actionbar sur un Board ou un Settings.

## Breadcrumb — Set 29:22142 (6 variantes)
- Theme (On dark | On light) × Level (1 | 2 | 3) · Prop `Current` (texte du dernier niveau).
- **Règle** : On light dans Actionbar Light, On dark dans Actionbar Edition. Level = profondeur réelle du chemin de navigation ; les groupes du SideMenu (AUDIENCE, ACTIVATION…) ne comptent pas comme niveau — la liste d'une section est Level 1.
- La prop `Current` pilote le calque `current` (dernier niveau) sur toutes les variantes. Les niveaux parents `level1`/`level2` sont des **instances de `Link`** (Size=M, Theme assorti, exposées dans le panneau de props) : overrider leur texte via l'instance imbriquée. Ne jamais écrire directement dans `current` : un override texte écrase la prop.

## SearchBar — Set 17:21
- States Default | Hover | Active · Prop `Query`. Vit uniquement dans le TopBar. Le clic (ou Cmd+K) ouvre la **palette de recherche globale** — voir Search / Modal dans /md-overlays.

## Tab Bar — 249:107 (standalone, slot `Tabs`)
- **Structure** : slot `Tabs` rempli d'instances de `Tab` (gap 24) + ligne de séparation basse + bouton de débordement.
- **Tab** — Set 17:61 : State (Default | Active) · Props `Label`, `Show badge`, `Badge`.
- **Règles** : un seul Tab Active. Au-delà de la largeur disponible : scroll horizontal + bouton d'accès aux onglets masqués (documenté dans la doc du composant). Le maître garde des labels génériques « Label » : les vrais noms sont des overrides d'écran.
- Le slot est aligné à gauche, gap 24 : les onglets se rangent naturellement quel que soit leur nombre.

## Settings Bar — 309:161 (standalone, slot `Tabs`)
- h 44, pleine largeur. **Structure** : retour (icon/arrow-left + `Title`) + slot `Tabs`.
- **Remplir le slot à l'instanciation** (le contenu par défaut n'est pas overridable) avec les onglets réels : My Account · Organisation · Datamart · Campaigns · Services · Data Clean Room — un seul Active.
- Remplace SideMenu + Actionbar sur les pages de réglages.

## Settings Nav / Item — Set 309:160
- States Default | Active · Prop `Label`. Sous-navigation verticale des Settings (l 184 dans une subnav de 200, padding 8). Un seul Active.

## Step Nav / Item — Set 111:26 (4 variantes)
- States : Default | Current | Validated | Validated + Current · Prop `Title`.
- 200 × 60. Colonne d'étapes des wizards d'édition. Un seul Current ; les étapes passées sont Validated.

## Analytics Action Bar — 449:417 (standalone)
- h 52, position de l'Actionbar. **Structure** : Breadcrumb exposé (titre) · spacer · select de métrique · plage de dates · Export · **Execute Query** (primaire) · Share.
- **Props** : `Metric` · `Date range` · `Show metric select` · `Show export` · `Show share`.
- **Usage** : pages d'analyse requêtables (Funnel Analytics) — voir /md-template-analytics. Choisir : Actionbar (navigation), Board Action Bar (filtres de board), Analytics Action Bar (requête à exécuter).

## Board Action Bar — 317:23796 (standalone)
- h 52. **Structure** : boutons + selects de portée + bouton Apply (toujours dernier à droite).
- **Props** : `Show button 1` · `Show button 2` · `Show select 1` · `Show select 2` · `Show select 3` (bools).

## Pagination — 16:34 (standalone)
- Dernier enfant du panel de liste (dans une rangée `pagination-row` alignée à droite). Inclut le sélecteur d'éléments par page. Aucun texte paramétrable (nombre de pages, « 10 / page ») : garder les valeurs du maître, elles sont illustratives. Le hover des « … » est un override, pas une prop.

## AppLauncher — 19:148 (standalone)
- Dropdown du TopBar (grille) pour changer d'app. Positionné en absolu sous le TopBar quand il est montré ouvert.
