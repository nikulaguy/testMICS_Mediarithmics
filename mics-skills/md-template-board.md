---
name: md-template-board
description: Template 3 — Page Board MICS. Le seul sans Actionbar — Tab Bar + Board Action Bar + sections de cartes-graphiques. Ex. Boards Activities, Client's Usage, Builders usage.
---

# md-template-board — Page Board

Appliquer /md-ds-rules. Composants : /md-navigation + /md-data-display + /md-charts.
Référence visuelle : page 🎼 Layout, bloc « 3 · Page — Board » ; écrans clean : Boards — Activities, Boards — Client's Usage WIP, Boards — Builders usage (erreurs).

## Quand l'utiliser
Les pages Boards : tableaux de bord composés de sections de cartes-graphiques, pilotés par une barre d'actions propre au board. **C'est le seul template sans Actionbar.**

## Structure exacte

```
Frame « NomEcran » (VERTICAL, 1496 × hauteur FIXE — jamais HUG, bg/window)
  TopBar [17:26] — FILL
  shell-row (HORIZONTAL, FILL/FILL)
    SideMenu [19:32] — l 200, item « Boards » Active
    main (VERTICAL, FILL/FILL, padding 35, gap 0)   ⚠ pas d'Actionbar
      content (VERTICAL, FILL, padding 0/24/24/24, gap 35)
        Tab Bar [249:107] — FILL (sélection du board, jusqu'à ~13 onglets + débordement)
        Board Action Bar [317:23796] — FILL (boutons + selects + Apply en dernier)
        section (VERTICAL, FILL, gap 16) × n
          titre de section (TEXT, Subtitle 2, capitales, text/lighter)
          chartCard × n — cartes de graphique, padding 16, gap 16
```

## Contenus observés par board

- **Activities** : Metrics Column + Chart / Scatter côte à côte ; Chart / Stacked Bar pleine largeur.
- **Client's Usage** : 3 Counter en ligne ; graphiques par canal ; 3 Chart / Bar en ligne ; section RETRIEVED EVENTS.
- **Campaigns** : Counter + Chart / Stacked Bar — mais construit sur le template **Liste** quand il est tabulaire.
- **Builders usage (erreurs)** : tableau d'erreurs en Alert Row.

## Règles

- Pas d'Actionbar : la navigation passe par la Tab Bar, les actions par la Board Action Bar (Apply toujours en dernier).
- Les paddings **se cumulent volontairement** : main p35 + content 24 = 59 px à gauche/droite ; 0 en haut pour que la Tab Bar affleure.
- Les sections sont séparées par le gap 35 de content, jamais par un divider.
- Une carte de graphique porte son padding (16) : ne pas la réenvelopper dans un panel.
- SideMenu : « Boards » est toujours l'item actif.
