---
name: md-template-edition
description: Template 4 — Formulaire d'édition MICS (wizard). Pas de SideMenu, Actionbar Edition pleine largeur, step-nav 200, sections + dividers. Ex. Segment — Édition.
---

# md-template-edition — Formulaire d'édition (wizard)

Appliquer /md-ds-rules. Composants : /md-navigation + /md-forms.
Référence visuelle : page 🎼 Layout, bloc « 4 · Page — Formulaire d'édition » ; écrans clean : Segment — Édition (2 variantes), Navigator - New Template Clean Room.

## Quand l'utiliser
Création ou édition d'une ressource en plusieurs étapes. **Le SideMenu disparaît** : l'utilisateur est dans un tunnel, la seule navigation offerte est celle des étapes.

## Structure exacte

```
Frame « NomEcran » (VERTICAL, 1496 × hauteur FIXE — jamais HUG, bg/window)
  TopBar [17:26] — FILL, showAppstore=false
  Actionbar Type=Edition [245:4156] — FILL, pleine largeur   ⚠ pas de SideMenu
    Breadcrumb On dark Level=2 (« Section > Nom ») + bouton Save + croix
  body-row (HORIZONTAL, FILL/FILL)
    step-nav (VERTICAL, l 200 FIXE, hauteur FILL, bg/container, gap 0)
      Step Nav / Item [111:26] × 3–5 — FILL (un seul Current, passées = Validated)
    form-area (VERTICAL, FILL/FILL, padding 35, gap 0, bg/window)
      section/nom-de-section (VERTICAL, FILL, padding 16/0/35/0, gap 24)
        titre (Headline 3, text/darker) + description (Body/Book, text/lighter)
        champs : Input / Select / Switch / Radio (Show label activé)
        [icône info + Tooltip au hover sur les champs qui le demandent]
      divider (FILL × 1 px, border/default) — enfant direct de form-area
      section/nom-suivant (VERTICAL, FILL, padding 24/0/35/0, gap 16)
      …
```

## Règles

- Pas de SideMenu : l'Actionbar Edition occupe toute la largeur, directement sous la TopBar.
- Les sections gèrent leur propre espacement (padding bas 35) ; **form-area a un gap 0**, sinon l'écart double.
- Le divider (1 px `border/default`) est un enfant direct de form-area, **jamais après la dernière section**.
- Save / Annuler vivent dans l'Actionbar en haut à droite, pas en bas du formulaire.
- Sections optionnelles dépliables → `Section Toggle` (Set 111:39).
- Chaque champ porteur d'aide a son « i » (`showLabelIcon` du Select, icône info de l'Input) avec Tooltip au survol.
- La croix de l'Actionbar ferme l'édition et revient à la page précédente.
