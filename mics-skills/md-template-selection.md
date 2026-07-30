---
name: md-template-selection
description: Template 5 — Page Choix du type MICS. Première étape d'un tunnel de création, contenu centré, Selection Cards. Ex. Segment — Choix du type, Offer — Choix du type.
---

# md-template-selection — Page Choix du type

Appliquer /md-ds-rules. Composants : /md-navigation + /md-overlays (Selection Card).
Référence visuelle : page 🎼 Layout, bloc « 5 · Page — Choix du type » ; écrans clean : Segment — Choix du type, Offer — Choix du type.

## Quand l'utiliser
Première étape d'un tunnel de création : l'utilisateur choisit le type de ressource avant d'accéder au formulaire. Toujours suivi du template Formulaire d'édition.

## Structure exacte

```
Frame « NomEcran » (VERTICAL, 1496 × hauteur FIXE — jamais HUG, bg/window)
  TopBar [17:26] — FILL
  Actionbar Type=Light [245:4156] — FILL, pleine largeur   ⚠ pas de SideMenu
  content (VERTICAL, FILL/FILL, padding 35 EN HAUT SEULEMENT, gap 35,
           enfants CENTRÉS horizontalement, bg/window)
    head (VERTICAL, gap 4, centré)
      titre (Headline 3, text/darker) — ex. « Segment Types »
      sous-titre (Body/Book, text/lighter) — ex. « Choose your segment type »
    primary-types (HORIZONTAL, gap 24, alignement centre)
      Selection Card Layout=Card [185:294] — 240×200
      « Or » (Body/Book, text/lighter) — texte de liaison
      Selection Card Layout=Card
    other-types (VERTICAL, l 700 FIXE, gap 12)
      libellé (Body/Medium, text/normal) — ex. « Other segment types »
      Selection Card Layout=Row — FILL, h 56 × n
```

## Règles

- **Contenu centré** : seul template où `content` aligne ses enfants au centre plutôt qu'en pleine largeur.
- Padding **uniquement en haut** (35) : les cartes portent leur propre respiration.
- **Deux choix principaux maximum** en Layout=Card ; tout le reste passe en Layout=Row dans other-types (l 700).
- « Or » est un texte de liaison, pas un composant : il n'apparaît qu'entre deux cartes principales.
- Pas de bouton de validation : le clic sur une carte est l'action.
