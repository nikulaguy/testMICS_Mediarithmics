---
name: md-template-detail
description: Template 2 — Page Détail de ressource MICS. Resource Title Header + Segment Header + Tab Bar + blocs de contenu. Ex. Segment Detail Stats, Dashboard compare, Usage overview.
---

# md-template-detail — Page Détail de ressource

Appliquer /md-ds-rules. Composants : /md-navigation + /md-data-display + /md-charts.
Référence visuelle : page 🎼 Layout, bloc « 2 · Page — Détail de ressource » ; écrans clean : Segment — Détail (Stats), Segment — Dashboard (compare), Segment — Usage overview.

## Quand l'utiliser
La fiche d'une ressource unique : segment, feed, campagne. On y consulte des métriques et on navigue entre facettes par onglets. **À ne pas confondre avec la Liste** : ici, ni tableau paginé ni Table / Toolbar en tête.

## Structure exacte

```
Frame « NomEcran » (VERTICAL, 1496 × hauteur FIXE — jamais HUG, le SideMenu doit remplir, bg/window)
  TopBar [17:26] — FILL
  shell-row (HORIZONTAL, FILL/FILL)
    SideMenu [19:32] — l 200, item de section Active
    main (VERTICAL, FILL/FILL)
      Actionbar Type=Light with actions [245:4156] — FILL
        Breadcrumb On light Level=2 (« Section > Nom de la ressource »)
      content (VERTICAL, FILL/FILL, padding 35, gap 16, bg/window)
        Resource Title Header [250:88] — FILL (Title, Type, Created, Show labels)
        Segment Header [237:92] — FILL (si segment : bandeau des 6 métriques)
        last-computed (HORIZONTAL, FILL) — « Last computed on … » Caption/Main text/lighter
        Tab Bar [249:107] — FILL (facettes de la ressource ; OPTIONNELLE si la ressource n'a pas de facettes documentées — l'omettre plutôt que d'inventer des onglets)
        [bloc(s) de contenu] — graphiques, tableaux ou colonnes, gap 16
```

## Variante : fiche d'un feed (validée sur « Feeds — Détail »)

Sous le Resource Title Header (Type = « Server-side feed », Created en date relative — **texte de la même couleur que son icône**, text/normal) :
```
feed-meta (HORIZONTAL, FILL/HUG, gap 35, éléments centrés verticalement)
  Badge — statut du feed (Type=Success pour Live), texte overridé
  destination (texte, text/lighter) — « Destination: LinkedIn · Sponsored account … »
  sourceSegment (H, HUG/HUG, gap 4 bindé) — libellé text/lighter + nom du segment en primary (cliquable)
```
Puis Tab Bar (Stats / Troubleshooting), rangée de Counter (KPIs), Chart / Stats Line pleine largeur.
Statuts, actions et métriques d'un feed : voir /md-business (cycle de vie feeds) et le user guide — ne rien inventer.

## Blocs de contenu — patterns validés

- **Graphique pleine largeur** : `Chart / Stats Line` (courbes multi-séries + plage de dates).
- **Comparaison** : `compare-controls` (HORIZONTAL, gap 12 : spacer FILL + Button + Select + Button) puis `compare-columns` (HORIZONTAL, gap 16) avec deux colonnes FILL de même largeur, contenus dupliqués.
- **KPIs** : rangée de `Counter` (HORIZONTAL, FILL, gap 24).

## Règles

- Resource Title Header vient **toujours en premier** dans content : c'est lui qui identifie la ressource ; l'Actionbar ne porte que le fil d'Ariane et les actions globales.
- La Tab Bar se place **sous** l'en-tête de ressource, jamais au-dessus.
- Les cartes de graphique portent leur propre padding (24) : ne pas ajouter de padding au conteneur ni les envelopper dans un panel.
- Couleurs de série : ordre chart/1 → chart/7 (voir /md-charts).
