---
name: md-template-settings
description: Template 6 — Page Settings MICS. Settings Bar + subnav 200 + contenu p35 g35. Ni SideMenu ni Actionbar. Ex. Profile & Preferences, Account subscribed offers.
---

# md-template-settings — Page Settings

Appliquer /md-ds-rules. Composants : /md-navigation + /md-forms.
Référence visuelle : page 🎼 Layout, bloc « 6 · Page — Settings » ; écrans clean : Settings — Profile & Preferences, Navigator - Account subscribed offers.

## Quand l'utiliser
Toutes les pages de configuration du compte et de l'organisation : profil, préférences, offres, accès. Reconnaissable à sa Settings Bar : on est sorti du produit, on est dans les réglages.

## Structure exacte

```
Frame « NomEcran » (VERTICAL, 1496 × hauteur FIXE — jamais HUG, bg/window)
  TopBar [17:26] — FILL
  Settings Bar [309:161] — FILL, h 44   ⚠ remplace SideMenu + Actionbar
    retour (icon/arrow-left + Title) + slot Tabs (onglets principaux, un seul actif)
  body (HORIZONTAL, FILL/FILL)
    subnav (VERTICAL, l 200 FIXE, hauteur FILL, bg/container, padding 8, gap 0)
      Settings Nav / Item [309:160] × n — FILL (l utile 184, un seul Active)
    content (VERTICAL, FILL/FILL, padding 35, gap 35, bg/window)
      header (HORIZONTAL, FILL) — titre (Headline 3) + action optionnelle à droite
      [groupes : formulaire, table, préférences]
```

## Pattern de formulaire de réglages

```
form (VERTICAL, FILL, gap 16)
  form-row (HORIZONTAL, gap 16)
    field (VERTICAL, FILL, gap 4) — Input avec Show label
communication (VERTICAL, gap 8)
  titre (Body/Medium, text/darker)
  row (HORIZONTAL, SPACE_BETWEEN) — label (Body/Book) + Switch
```

## Règles

- Ni SideMenu ni Actionbar : la Settings Bar porte le retour et le contexte, la subnav porte les rubriques.
- Un seul `Settings Nav / Item` en State=Active à la fois.
- Le gap de content est **35** (pas 16) : les groupes de réglages respirent plus que les blocs de données.
- Les boutons d'enregistrement se placent en bas à droite du groupe concerné, pas dans la Settings Bar.
- Édition d'un élément de la liste → drawer par-dessus (voir /md-template-overlay), header Light.
