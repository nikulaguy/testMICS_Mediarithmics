---
name: md-template-analytics
description: Template 10 — Page Analytics requêtable MICS. Analytics Action Bar + constructeur de requête (steps) + panneau de résultats. Ex. Funnel — Analytics.
---

# md-template-analytics — Page Analytics requêtable

Appliquer /md-ds-rules. Composants : /md-navigation (Analytics Action Bar) + /md-overlays (Funnel / Step Card, Funnel / Result Column via 💬 Feedback & Overlays).
Référence visuelle : page 🎼 Layout, bloc « 10 · Page — Analytics requêtable » ; écran clean : Funnel — Analytics.

## Quand l'utiliser
Les pages d'analyse pilotées par une requête que l'utilisateur construit puis exécute (Funnel Analytics). Se distingue du Board : ici l'utilisateur CONSTRUIT la question (étapes, filtres) avant de voir le résultat.

## Structure exacte

```
Frame « NomEcran » (VERTICAL, 1496 × hauteur FIXE, bg/window)
  TopBar [17:26] — FILL
  shell-row (H) : SideMenu 200 (item de section Active) + main (V, FILL/FILL)
    Analytics Action Bar [449:417] — FILL  ⚠ remplace l'Actionbar
      Breadcrumb exposé (titre) · Metric (select) · Date range · Export · Execute Query (primaire) · Share
    content (V, FILL/FILL, padding 35, gap 16, bg/window)
      dateChip — début de période (icône calendar + date, fond bg/subtle)
      stepRow × n (H, gap 16) — rail (point primary 14) + Funnel / Step Card [450:456] FILL
      addStepRow — bouton pleine largeur « Add a step » (fond bg/subtle, bordure)
      dateChip — fin de période
      resultsPanel (H, bg/container, radius/card)
        vizColumn (FILL, padding 24) — compteur + barre primary + triangle blue/100
        Funnel / Result Column [450:480] × n — FILL, bordure gauche
      seeFunnelRow — bouton centré « See funnel for others »
```

## Règles
- L'action primaire est **Execute Query**, dans l'Analytics Action Bar — jamais dans le contenu.
- Funnel / Step Card : le délai (« n day maximum after previous step ») n'apparaît qu'à partir de l'étape 2 (`Show delay`).
- Les valeurs de filtre sont des **Tags fermables** dans le champ de valeurs (instance exposée `valueTag`).
- Une colonne de résultat par étape : la première porte la visualisation, les suivantes des Funnel / Result Column (props Count, Succeeded, Failed, Show conversions…).
- Statuts/vocabulaire funnel : /md-business + user guide /campaigns/funnel.
