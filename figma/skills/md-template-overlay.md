---
name: md-template-overlay
description: Templates 8 & 9 — Écran avec Drawer ou Modale MICS. Trois calques superposés — page hôte, scrim `bg/scrim`, Overlay. Ex. Create a feed, Alerts + Drawer.
---

# md-template-overlay — Écran avec overlay (Drawer ou Modale)

Appliquer /md-ds-rules. Composants : /md-overlays. Le fond est un écran d'un autre template : charger aussi son skill.
Référence visuelle : page 🎼 Layout, blocs « 8 · Overlay — Drawer » et « 9 · Overlay — Modale » ; écrans clean : Segment — Create a feed (modal), Segments — Alerts + Drawer (labels mutés), Navigator - drawer Clean Room.

## Choisir Drawer ou Modale

⚠ **Avant d'arriver ici, vérifier que c'est bien un overlay** : dérouler /md-choose-surface. La page est le défaut, et l'arbre y ramène dès que le contenu se partage, déborde, ou porte plus d'une tâche. Ce skill ne traite que le cas où l'overlay est déjà justifié.

- **Drawer** : tâche secondaire qui a besoin du contexte de la page — consulter un détail, filtrer, éditer une liste. Contenu long ou scrollable, l'écran de fond reste une référence visible.
- **Modale** : décision courte et bloquante — créer un objet en quelques champs, confirmer une action destructrice. Le contenu tient sans scroll ; s'il déborde, c'était un drawer ou une page dédiée.

## Structure exacte (3 calques superposés, frame racine SANS autolayout)

```
Frame « NomEcran » (1496 × hauteur, layout NONE)
  page (arrière-plan) — l'écran hôte COMPLET et inchangé (son template s'applique)
  scrim — rectangle plein écran, fill lié à `bg/scrim`
  Overlay [Set 228:3401] :
    · Mode=Drawer : l 520, pleine hauteur, x = 1496 − 520, y = 0
    · Mode=Modal : 960 × 692, centrée sur les deux axes
      Overlay / Header [193:3194] — Theme=Light (drawer) / Blue (modale standard)
      slot Content — padding 24 ; on remplit le slot, on ne touche ni header ni footer
      Overlay / Footer [193:3214] — primaire en bas à droite, secondaire à sa gauche ; absent si pas d'action
```

## Méthode de construction

1. Construire (ou dupliquer) l'écran hôte normalement, en autolayout.
2. Passer le frame racine en positionnement libre et caler l'hôte en 0,0.
3. Poser le scrim (fill lié à `bg/scrim`) sur toute la surface.
4. Instancier l'Overlay dans le bon Mode, le positionner (droite ou centre), remplir son slot `Content`.

## Variante : palette de recherche (Cmd+K)
La recherche globale est une surface superposée SPÉCIALE : Search / Modal (voir /md-overlays), centrée-haute (~140 px du haut), sans header/footer Overlay, scrim `bg/scrim`. Même méthode de construction (3 calques), mais on n'utilise PAS le composant Overlay. État sans résultat : slot `Content` = une instance `Empty State`, query conservée (écran de référence « Search — Empty State »).

## Règles

- **Un seul overlay actif** — jamais modal + drawer empilés. Un enchaînement d'étapes reste dans la même modale.
- La page de fond n'est **ni floutée ni tronquée** : seul le scrim la couvre.
- Largeur du drawer : 520, constante dans un même parcours.
- Le contenu va dans le slot ; header et footer viennent du composant Overlay, jamais recomposés.
- Grille de cartes dans une modale (ex. Create a feed) : 3 colonnes de `Feed Card`, gap 24, toolbar de filtres en tête du slot.
