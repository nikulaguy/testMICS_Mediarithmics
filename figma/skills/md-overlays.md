---
name: md-overlays
description: Overlays et surfaces superposées MICS — Overlay (Modal/Drawer) avec slot, Header/Footer, Dropdowns, Selection Card, Feed Card.
---

# md-overlays — Overlays et surfaces superposées

Appliquer /md-ds-rules avant toute utilisation. Pour poser un overlay sur un écran : /md-template-overlay.

## Overlay — Set 228:3401 (le composant unique modale + drawer)
- **Variantes** : Mode=Modal (204:204) | Mode=Drawer (228:3402)
- **Prop** : `Content` (**SLOT**) — on remplit le slot, on ne remplace jamais le header ni le footer.
- **Structure** : Overlay / Header + slot Content (padding 24) + Overlay / Footer.
- **Modal** : centrée sur les deux axes ; référence 960 × 692. Tâche courte qui tient sans scroll — si ça déborde, c'était un drawer ou une page.
- **Drawer** : collé au bord droit, pleine hauteur, l 520 (le maître est à 520 ; constante dans un même parcours).
- **Règle** : un seul overlay actif, jamais d'empilement modal + drawer. Un enchaînement d'étapes se fait dans la même modale.

## Overlay / Header — Set 193:3194 (3 thèmes)
- **Theme** : Blue (modales standard) | Light (drawers) | Dark · Prop `Title`.
- Structure : titre + croix de fermeture. En mode édition plein écran, c'est l'Actionbar Edition qui joue ce rôle, pas un Header.

## Overlay / Footer — 193:3214
- Rangée alignée à droite : bouton secondaire (Default L) à gauche, primaire (Primary L) à droite.
- **Prop** : `Show 3rd action` (bool, défaut false).
- Pas d'action → pas de footer.

## Dropdown — système à container commun

### Dropdown / Container — 145:69
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

## Choisir la surface : drawer, modale ou page

Question de coût d'interruption et de besoin de contexte, pas d'esthétique. Repères : Nielsen Norman Group (Modal & Nonmodal Dialogs ; Popups: 10 Problematic Trends) et Material 3 (Side sheets). Exemples visuels : frame « Overlay — choisir la bonne surface », page 💬 Feedback & Overlays.

| Surface | Quand | Jamais |
|---|---|---|
| **Drawer** | Tâche secondaire qui a besoin du contexte : consulter ou éditer un élément sans perdre la liste, filtrer, comparer, prévisualiser | Un formulaire de création ou d'édition dense (Material 3 renvoie explicitement vers une page) |
| **Modale** | Décision courte qui doit bloquer : confirmer une action destructive, réclamer l'information sans laquelle l'action lancée ne peut pas aboutir | Une décision qui dépend du contenu masqué · un contenu qui scrolle · une information non sollicitée |
| **Page dédiée** | Tâche longue ou structurée : création multi-étapes, formulaire dense, contenu de référence | C'est la surface par défaut : c'est l'overlay qui doit se justifier |

- **Jamais deux surfaces empilées** (modale par-dessus drawer) : plus de sortie lisible, focus clavier perdu. Un enchaînement d'étapes reste dans la MÊME surface.
- Le drawer prend toute la hauteur : à réserver aux cas où le contexte sert vraiment, largeur constante (520) dans un même parcours.
- Test rapide : si l'utilisateur doit relire ce que la surface masque pour répondre, changer de surface.

## Search — palette de recherche globale (Cmd+K)

### Search / Modal — 515:589
- Modale de la recherche du TopBar : rangée de recherche (loupe + `Query` + icône info) + **slot natif `Content`**.
- **Position fixe** : centrée horizontalement, ancrée à ~140 px du haut, l 760, ombre portée, par-dessus un scrim `bg/scrim`.
- **N'utilise pas le composant Overlay** : pas de header/footer ni de croix — fermeture par Échap ou clic sur le voile.
- **Aucun résultat** : le slot `Content` reçoit une instance `Empty State` (285:151), la query reste affichée — référence : écran « Search — Empty State » (section Search).

### Search / Section Header — 515:578
- En-tête de groupe de résultats (FEATURES, SEGMENTS, PLUGINS…). Prop `Label` (capitales).

### Search / Result Item — Set 515:588 (Default | Hover)
- Un résultat : icône (swap, `Show icon`) + libellé. Hover = sélection clavier, un seul à la fois.
- Le libellé n'est **pas** une prop : la sous-chaîne correspondant à la requête passe en Circular Medium par plage de caractères — à refaire après tout override de texte.
- Remplissage du slot : empiler Section Header + Result Items par section. Écran de référence : Search — Palette (Cmd+K), ✅ Search — Clean.

## Selection Card — Set 185:294 (4 variantes)
- **Variantes** : Layout (Card 240×200 | Row h56) × State (Default | Hover) · Props `Label`, `Icon` (swap).
- **Usage** : écrans de choix de type (/md-template-selection). Card = 2 choix principaux max ; au-delà, Row.

## Feed Card — 184:199
- 282×164. **Props** : `Title` · `Version` · `Description` · `Logo` (**swap** — famille `logo/*` : amazon-ads, linkedin, snapchat, kameleoon, parrot).
- **Usage** : grille de presets dans la modale « Create a feed » (3 colonnes, gap 24, dans le slot Content de l'Overlay).
