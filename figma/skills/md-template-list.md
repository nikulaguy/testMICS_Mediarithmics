---
name: md-template-list
description: Template 1 — Page Liste MICS. Tableau paginé dans un panel blanc, Tab Bar, Actionbar. Ex. Segments — Liste, Segments — Alerts.
---

# md-template-list — Page Liste

Appliquer /md-ds-rules. Composants : /md-navigation + /md-data-display.
Référence visuelle : page 🎼 Layout, bloc « 1 · Page — Liste » ; écrans clean : Segments — Liste (5 variantes), Segments — Alerts, Boards — Campaigns.

## Quand l'utiliser
Toute page qui liste des ressources dans un tableau paginé : segments, feeds, créations, campagnes, automations. C'est le template le plus fréquent du produit.

## Structure exacte

```
Frame « NomEcran » (VERTICAL, 1496 × hauteur FIXE — la hauteur du contenu, ou celle des écrans voisins ; jamais HUG : shell-row/content sont en FILL vertical, bg/window)
  TopBar [17:26] — FILL
  shell-row (HORIZONTAL, FILL/FILL, gap 0)
    SideMenu [19:32] — l 200 FIXE, hauteur FILL, item de section Active
    main (VERTICAL, FILL/FILL, gap 0)
      Actionbar Type=Light with actions [245:4156] — FILL (porte les actions de page : Export, New …, ⋮)
        Breadcrumb On light Level=1 — les groupes du SideMenu (AUDIENCE, ACTIVATION…) ne comptent PAS comme niveau
      content (VERTICAL, FILL/FILL, padding 35, gap 16, bg/window)
        Tab Bar [249:107] — FILL (si la section a des onglets)
        panel (VERTICAL, FILL, bg/container, radius lié à radius/card, padding 20, gap 20)
          Table / Toolbar [21:65] — FILL
          table (VERTICAL, FILL, gap 0)
            Table / Header Row [158:185] — FILL
            Table / Row [21:64] × n — FILL
          pagination-row (HORIZONTAL, FILL, alignée à droite)
            Pagination [16:34]
```

## Règles (interdits testables)

- L'Actionbar est **dans `main`** : elle commence au bord du SideMenu, jamais sous lui.
- **Actions de page vs actions de tableau (règle transverse, non négociable)** : les actions qui portent sur la PAGE ou la RESSOURCE (New …, Export, Edit, menu ⋮) vivent dans l'**Actionbar** → `Type=Light with actions`. La **Table / Toolbar** ne porte que ce qui agit sur le tableau : recherche, filtres, Edit view, actions de masse sur la sélection → `Show export` et `Show primary` à **false**. `Type=Light` (fil d'ariane seul) uniquement si la page n'a aucune action. Test de décision : si l'action garde du sens quand le tableau est vide, elle est de page. Avant/après : page 📋 Audit, section « ActionBar vs Toolbar ».
- Padding de `content` = 35 sur les quatre côtés (space/35). Rien ne colle au bord.
- Le tableau vit **toujours dans le panel blanc** ; jamais posé à même le fond gris.
- Header Row et Rows : **booléens de colonnes strictement identiques** (voir /md-data-display). Les maîtres partagent le même modèle de colonnes (tout-FILL, paddings identiques) : à booléens égaux, l'alignement gauche titre/valeur est garanti — un désalignement signale forcément un booléen ou un override de largeur.
- La rangée `pagination-row` (qui contient la Pagination, alignée à droite) est le dernier enfant du panel.
- **Barre de filtres propre au module** : quand la liste a ses propres filtres (plage de dates, statut…), le `Table / Toolbar` ne suffit pas — composer une `toolbar` à même le panel : rangée 1 = `Input` de recherche (à gauche, SPACE_BETWEEN) + groupe droit de déclencheurs de filtres + Button « Edit view ». Dans ce cas l'action primaire remonte dans l'Actionbar (`Type=Light with actions`) — jamais dupliquée dans la toolbar. Écrans de référence : Campaigns — Liste (797:25218, filtres actifs 614:97211, label ouvert 612:344).
- **Exposé ou panneau (revue client du 1er septembre 2026)** : jusqu'à TROIS dimensions, chaque filtre a son déclencheur dans la toolbar (modèle exposé — Campaigns). Au-delà, un seul bouton « Filters » ouvre le panneau en cascade (modèle panneau — Segments). Jamais les deux à la fois.
- **Le déclencheur d'un filtre multi-sélection porte le NOM de la dimension, jamais sa valeur** : « Status », « Label », quel que soit l'état. Le contenu se lit dans le panneau ouvert et dans la barre de rappel. Statut : dropdown à `Dropdown / Checkbox Item` + pied `Dropdown / Clear`. Label : le déclencheur (chevron) se déploie au clic en champ de recherche (la loupe remplace le chevron, libellé « Search a label »), la liste se filtre à la frappe, chaque choix part en chip et le champ reste ouvert pour cumuler.
- **Pas de filtre de colonne** (revue du 1er septembre 2026) : le filtre dans l'en-tête du tableau doublait une dimension du panneau pour un usage marginal. Une dimension a UNE porte d'entrée — toolbar ou panneau.
- **Selects de filtre** : `State=Default` (valeur + caret). `State=Filled` ajoute une croix de réinitialisation : à réserver aux filtres réellement effaçables, sinon on invente une affordance absente de la prod.
- **Rappel des filtres appliqués** : `Active Filter Bar` (Set 712:132327), posée SOUS la toolbar et AVANT le tableau. La règle (revue du 1er septembre 2026) : seuls les filtres **dont la valeur n'est pas lisible ailleurs** y vont — donc toutes les **multi-sélections** (statuts cochés, labels), dont le déclencheur ne dit que le nom de la dimension. Un filtre à valeur unique lisible dans son sélecteur (période « Yesterday ») n'y est **jamais dupliqué** : la redondance apprend à ignorer la barre. Aucun filtre actif → la barre n'existe pas, pas de hauteur réservée. Voir /md-data-display.
- **Colonne de sélection multiple** : première colonne 56 FIXE contenant un `Checkbox` (Label vide) — dans un cadre `cell/select` (padding 12) côté lignes et `header/select` côté en-tête ; le Checkbox de l'en-tête pilote la sélection globale (Indeterminate si sélection partielle).
- L'espace gris sous le panel est normal : la hauteur d'écran n'est pas ajustée au pixel près, elle s'aligne sur les écrans voisins de la section.
- Liste vide → composant `Empty State` centré à la place du panel (template État vide) : coque complète conservée, panel retiré.
- Ligne dépliable avec alertes → `Alert Row` (Set 266:132) à la place de Table / Row.
- Dropdown ouvert (filtre, edit view) → `Dropdown / Container` en position absolue au-dessus du contenu, jamais dans l'autolayout.
