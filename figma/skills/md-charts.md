---
name: md-charts
description: Système de graphiques MICS — architecture modules → tracé → graphique, choix du type, couleurs de série, limites. Page 📊 Charts + graphiques métier de 🏷 Data Display.
---

# md-charts — Système de graphiques

Appliquer /md-ds-rules avant toute utilisation. Documentation de référence : page 📊 Charts, section 📘 Documentation.

## Architecture en trois niveaux

1. **Modules** (briques, jamais posées seules dans un écran) :
   - `Chart Module / Point` (346:51742) — point de série 8×8, couleur chart/1 à recolorer par série.
   - `Chart Module / X Axis` (346:37075) · `Chart Module / Y Axis` (346:37086) — axes ; libellés à surcharger calque par calque (pas de prop texte).
   - `Chart Module / Grid` (Set 346:37381 — Horizontal | Vertical) — 7 lignes ; masquer les excédentaires pour coller aux graduations.
   - `Chart Module / Bars` (Set 346:37469 — Direction × Size 1..8) — une barre exprimée en huitièmes.
2. **Zone de tracé** : `Chart Module / XY Viz` (Set 346:37094 — Type × Mode) — assemblage de modules sans axes ni grille.
3. **Graphiques complets, prêts à poser** :
   - `Chart / XY` (Set 346:37398) — Type (Bars | Column | Area | Line) × Mode (Default | Stacking | Multi | Double).
   - `Chart / Pie` (Set 346:36863) — Size (Small | Medium | Large) × Dimensions (2 | 5 | 7). Sans légende intégrée : l'obtenir via Chart / Card (variantes Legend) ou composer dot (`Chart Module / Point` recoloré) + libellé.
   - `Chart / Radar` (Set 346:36966) — Size × Multi series.
   - `Chart / Card` (Set 346:37614 — Legend : No legend | Right | Bottom) — enveloppe titre + **SLOT natif `Content`** + légende. Insérer le graphique dans le slot (jamais posé par-dessus la carte) ; sur les variantes Right/Bottom, la légende par défaut vit dans le slot et s'adapte aux séries réelles par instance.

## Graphiques métier (page 🏷 Data Display) — représentations statiques de la prod

| Composant | ID | Usage |
|---|---|---|
| Chart / Bar | 238:98 | barres verticales décroissantes (features usage) |
| Chart / Stacked Bar | 325:102 | colonnes empilées 3 séries (Campaigns — Users). Prop `Title` |
| Chart / Stats Line | 267:118 | courbes multi-séries + sélecteur de plage (6 séries max) |
| Chart / Scatter | 322:102 | nuage de points + légende droite. Prop `Title` |
| Chart / Adoption Funnel | 238:124 | entonnoir 4 barres + légende |

Ces cinq-là reproduisent des données de production : leurs barres/courbes sont sur mesure (la granularité en huitièmes du kit ne sait pas les rendre). Ne pas les reconstruire avec Chart / XY.

## Choisir un type

- Comparer des catégories → `Chart / XY` Type=Column ; libellés longs ou nombreux → Type=Bars (horizontales).
- Suivre une évolution dans le temps → Type=Line ; Type=Area seulement si le volume cumulé porte du sens.
- Décomposer un total → Mode=Stacking. Deux séries de même nature → Mode=Double. Plus de deux → Mode=Multi.
- Parts d'un tout → `Chart / Pie`, 7 dimensions max ; au-delà, revenir aux barres.
- Profils sur axes identiques → `Chart / Radar`, uniquement ce cas.
- Quelques chiffres sans dimension temporelle → `Metrics Column` ou `Counter` (voir /md-components), pas un graphique.

## Couleurs de série

- Ordre strict **chart/1 → chart/7**, sans saut : 1 cyan, 2 orange, 3 vert, 4 violet, 5 rouge, 6 navy, 7 gris.
- **chart/7 (gris)** : réservé aux valeurs neutres / résiduelles / « autres » — jamais une série porteuse de sens.
- **Exception documentée** : `Chart / Stacked Bar` utilise une rampe séquentielle (bg/tooltip → primary → bg/window) parce que l'empilement décrit une même grandeur, pas des catégories.
- Légende obligatoire dès 2 séries ; elle nomme chaque série dans l'ordre (RGAA 3.1 : jamais la couleur seule).

## Limites connues du kit

- `Chart Module / Bars` = valeurs en huitièmes : suffisant pour illustrer, pas pour refléter des valeurs réelles.
- `Chart / Placeholder` (346:51739) = zone d'attente : aucun écran livré n'en contient.
- Kit dimensionné pour des cartes de tableau de bord ; au-delà d'~1000 px de large, préférer un graphique métier dédié.
- Toute représentation Figma est statique : la data réelle vient de Highcharts côté produit. Prévoir en spec la table de données accessible (RGAA 1.1).
- **Ne pas reconfigurer un graphique métier en profondeur** (réétiqueter axes, légendes, masquer des séries de Chart / Stats Line…) : ces overrides fragiles ont été annulés en revue. Garder le rendu générique du maître ; les vraies séries relèvent de la spec dev. S'il faut absolument une déclinaison (ex. 2 séries), c'est une variante à demander via /md-new-component.
