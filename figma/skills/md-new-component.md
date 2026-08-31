---
name: md-new-component
description: Créer ou étendre un composant du DS MICS — construction atomique, nomenclature, états complets, description native, frame de documentation 2 zones, a11y RGAA.
---

# md-new-component — Créer ou étendre un composant

Appliquer /md-ds-rules. À n'utiliser que lorsque /md-produce-screen a établi qu'aucun composant existant ne couvre le besoin — et que l'utilisateur a validé la création.

## Avant de créer : la hiérarchie des solutions

**Étape 0 (bloquante) — audit de l'existant.** Parcourir le catalogue (via /md-forms, /md-data-display, /md-overlays, /md-navigation, /md-charts) et comparer la STRUCTURE du besoin (fond, radius, padding, contenu) aux composants en place, pas seulement leur nom. Un chip gris avec un texte est un `Tag`, même s'il affiche une date ; une rangée icône+libellé est peut-être déjà un item de Dropdown. Cas d'école : un « Timeline / Day Separator » avait été créé alors que `Tag` Color=Default faisait le travail — il a dû être supprimé et tous ses usages migrés.

**Côté développement, la même question se pose ensuite** : le composant sera-t-il *thémé* (AntD convient), *enveloppé* (AntD presque, on impose l'anatomie du DS par-dessus) ou *construit* (AntD n'a pas d'équivalent) ? Le préciser dans la description native du composant évite que le dev retranche ou réinvente. Voir /md-ds-rules.

1. **Override** d'une instance existante (texte, icône, couleur d'instance) — toujours préféré.
2. **Extension** du composant existant : ajouter une prop booléenne (`Show …`), une prop texte, un swap, ou une variante d'état. C'est la réponse quand « ça existe presque ». Toute extension met à jour la **description native** ET ajoute un bloc tagué `Ajouté en maquette` dans la **frame de doc existante** (zone ②) du composant.
3. **Nouveau composant** — seulement si l'élément a un sens propre et réutilisable. Un bloc utilisé sur un seul écran n'est pas un composant.

## Construction atomique

- Le composant est fait d'**instances** des atomes existants (Button, Tag, icônes…) partout où c'est possible — jamais de copies.
- 100 % autolayout ; aucun calque vide d'espacement ; padding/gap liés aux variables Scale.
- Toutes les couleurs liées aux variables Color ; textes sur les styles du fichier (Circular).
- Un élément interne répété (item de liste, cellule) devient un **sous-composant** « Famille / Item ».

## Nomenclature (bloquant)

- Nom : Title Case « Famille / Nom » — la famille regroupe (`Table / …`, `Dropdown / …`, `Overlay / …`, `Chart / …`).
- Props : Sentence case (`Show icon`, `Label`) ; acronymes conservés (`Installation IDs`).
- Valeurs de variantes : Sentence case ; les numériques restent numériques.
- Calques : camelCase, tous nommés — zéro nom par défaut.
- Slot : Sentence case (`Content`, `Tabs`). Un slot se remplit, il ne s'override pas.

## États et variantes — penser complet dès la conception

- Interactif → prévoir **tous** les états : Default, Hover, Focus si focusable, Disabled, et les états métier (Error, Loading, Done, Empty/Has data, Expanded/Collapsed).
- Ce qui varie indépendamment de l'état passe en **prop booléenne** (`Show …`) ou en **swap** (`Icon`, `Logo`), pas en variante.
- Les textes exposés en **props texte** (`Label`, `Value`, `Title`) pour être overridables proprement.
- Le maître garde des contenus génériques (« Label ») : les vraies valeurs sont des overrides d'écran.

## Rangement et description

- Poser le composant dans la **page de sa famille** (🔘 Button, 📝 Form Inputs, 🏷 Data Display, 💬 Feedback & Overlays, 🧭 Navigation & Shell, 📊 Table & Lists, 📊 Charts), dans la grille existante.
- Renseigner la **description native** du composant : rôle, source prod si applicable, résumé EXISTANT vs ÉVOLUTIONS.

## Documentation (obligatoire)

Produire la doc avec **/md-component-doc** (description native + frame 2 zones) et son volet accessibilité avec **/md-a11y-specs**. Rappel de la structure :

Frame « {Composant} — Documentation », fond navy `info`, largeur ~1100 :
1. Titre + chips `Source code` / `Storybook`.
   Et poser le lien Storybook dans `documentationLinks` du composant lui-même — voir /md-ds-rules.
2. **`preview`** : le composant **MAÎTRE**, déplacé dans la frame (jamais une instance avec le maître dehors).
3. **`use case`** (« Exemples d'usage ») dès qu'il y a plusieurs cas réels : un wrapper par cas, instance configurée comme en prod.
4. Bandeau **① Existant ISO Prod** : Description, Props, Règles d'usage, Accessibilité.
5. Bandeau **② Évolutions proposées** : chaque évolution taguée `Ajouté en maquette` ou `À construire`. Rien d'ajouté silencieusement : ce qui n'existe pas en prod vit en zone ②.
6. Contraste : texte clair (`text/on-dark`) sur les blocs sombres, jamais de texte foncé sur fond foncé.

## Accessibilité (zone ① de la doc)

Produite via **/md-a11y-specs** (mode annotation) — le référentiel RGAA est packagé dans `md-a11y-rgaa/references/`. Lignes taguées rattachées à un critère RGAA : `Sémantique`, `Attribut ARIA`, `Alternative textuelle`, `Texte Lecteur d'écran`, `Comportement a11y`, + `Information couleur` / `Contraste` quand pertinent. Chaque exigence est testable et cite son critère (ex. « RGAA 11.1 »). Non-conformité héritée de la prod → encart orange « à arbitrer côté produit », jamais passée sous silence.

## Pre-flight spécifique composant

- Screenshot du set complet (toutes variantes visibles, rien de clippé).
- Tester le redimensionnement : largeur ×1.5, textes longs — rien ne casse.
- Vérifier chaque prop : le toggle/swap/texte agit sur ce qu'il doit.
- Instancier le composant dans un écran réel et vérifier qu'il s'y comporte (FILL, alignements).
