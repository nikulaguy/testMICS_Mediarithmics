---
name: md-produce-screen
description: Orchestrateur de production MICS. Reçoit une spec + un lien Figma, questionne pour cadrer, choisit le template, produit, vérifie (pre-flight), livre. Point d'entrée pour créer ou modifier un écran.
---

# md-produce-screen — Produire ou modifier un écran

## Entrées obligatoires — ne rien produire sans elles

1. **La spécification** : quoi construire ou modifier (fonctionnalités, contenus, comportements).
2. **Le lien Figma cible** : la page (et si modification, le nœud) où produire.

Si l'un des deux manque : le demander et s'arrêter là.

**Mode sans utilisateur joignable** (exécution batch, test) : chaque question du workflow — y compris celles de /md-new-component, /md-component-doc et /md-a11y-specs — devient « question consignée + hypothèse la plus raisonnable + livraison » ; le rapport final liste toutes les hypothèses pour validation a posteriori.

## Étape 1 — Cadrer (questionner l'utilisateur)

Poser uniquement les questions dont la réponse ne se déduit pas de la spec. Une question à la fois quand les réponses s'enchaînent (le choix du template conditionne la suite).

0. **Le vocabulaire de la spec est-il compris ?** Sinon, le résoudre soi-même via /md-business et le user guide AVANT de questionner — la moitié des ambiguïtés apparentes sont du vocabulaire métier, pas des questions à poser.
1. **Création ou modification ?** Si modification : de quel écran / section / composant exactement ?
2. **Quel template ?** Proposer un choix via la matrice de /md-ds-rules (Liste, Détail, Board, Édition, Choix du type, Settings, + Drawer/Modale par-dessus). Si la spec colle à deux templates, présenter les deux avec le critère qui les départage et demander.
3. **Quelle section du SideMenu est active ?** (ou Settings / tunnel sans SideMenu)
4. **Contenu principal ?** (table, KPIs + graphiques, formulaire, cartes de choix)
5. **Overlay ?** (aucun / drawer / modale — et l'écran de fond)
6. **Où poser l'écran ?** (section existante « ✅ … — Clean » ou nouvelle section) et **quel nom** (format « Section — Nom », ex. « Segments — Liste »).

## Étape 2 — Charger les skills

- Toujours : **/md-ds-rules**
- Si la spec emploie du vocabulaire métier (segments, feeds, automations, UserPoint, clean room…) ou touche un module que vous ne maîtrisez pas : **/md-business** — et lire la page du user guide correspondante avant de produire.
- Template choisi : /md-template-list · /md-template-detail · /md-template-board · /md-template-edition · /md-template-selection · /md-template-settings · /md-template-overlay · /md-template-analytics · /md-template-lookup
- Familles de composants selon le contenu : /md-navigation (toujours utile), /md-forms, /md-data-display, /md-overlays, /md-charts
- Icônes et logos (choix et inventaire) : /md-icons
- Composant manquant : **/md-new-component** (qui enchaîne sur /md-component-doc et /md-a11y-specs pour la documentation)
- Agent utilisant l'API Figma : **/md-figma-api** (annexe technique)

## Étape 3 — Vérifier que les composants suffisent

Avant de produire, confronter chaque élément de la spec aux composants existants :
- **Ça existe** → instance + variantes + overrides.
- **Ça existe presque** (il manque une prop, un état) → proposer d'**étendre le composant** (prop booléenne, variante) plutôt que de dévier.
- **Ça n'existe pas** → le dire à l'utilisateur et proposer la création via /md-new-component. Ne jamais improviser un faux composant en frames.

## Étape 4 — Produire

1. Construire la coque du template choisi (instances TopBar / SideMenu / Actionbar / Settings Bar — jamais de rectangles).
2. Construire le contenu en suivant l'arborescence exacte du template (paddings et gaps du skill, pas d'à-peu-près).
3. Appliquer les 3 règles d'or de /md-ds-rules en continu.
4. Poser l'écran dans la section cible, aligné sur la grille des écrans voisins (1496 de large, **gap 120 entre écrans**, jamais de chevauchement).

## Étape 5 — Pre-flight check (obligatoire, avant toute livraison)

1. **Prendre un screenshot** de l'écran produit et le regarder réellement.
2. Vérifier :
   - coque correcte (TopBar en premier, navigation du template, largeur 1496) ;
   - contenu conforme à la spec, rien d'oublié ;
   - pas de texte tronqué, pas de débordement, pas de chevauchement ;
   - composants = instances (aucune frame « reconstituée ») ;
   - couleurs plausibles (pas de noir brut, pas de gris hors palette) ;
   - tableau : booléens Header Row = booléens Rows ;
   - nomenclature des calques (aucun « Frame 12 ») ;
   - **cohérence métier des données de démo** (compteurs plausibles entre eux, pas de dimension absurde vs les filtres affichés, statuts/actions compatibles).
3. **Corriger soi-même** chaque défaut trouvé, reprendre un screenshot, itérer jusqu'à zéro défaut.
4. Comparer avec un écran clean existant du même template pour valider la cohérence d'ensemble.

## Étape 6 — Livrer

Fournir le lien du nœud produit, résumer ce qui a été construit, **signaler explicitement** : les choix faits sous hypothèse, les écarts par rapport à la spec, les composants créés ou étendus. Demander un retour.

## Checklist des pièges (tous outils confondus)

- Ne jamais poser une valeur « de tête » : chaque padding/gap vient du skill du template.
- Un élément répété sur plusieurs écrans → signaler qu'il devrait être composanté.
- Un dropdown/tooltip ouvert se pose en absolu, pas dans l'autolayout.
- L'état vide, le chargement et l'erreur existent pour tout contenu de données.
- Texte sur fond sombre = text/on-dark ; jamais de texte foncé sur fond foncé.
