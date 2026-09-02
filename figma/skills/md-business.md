---
name: md-business
description: Contexte métier mediarithmics — ce que fait la plateforme, glossaire des concepts, carte modules ↔ user guide. Charger quand une spec emploie du vocabulaire métier, et AVANT de maquetter un module qu'on ne connaît pas.
---

# md-business — Contexte métier mediarithmics

## La règle d'or : ne pas deviner le métier, aller le lire

Le user guide officiel est conçu pour être lu par des agents comme par des humains :
- **Index complet** : https://userguides.mediarithmics.io/llms.txt
- **Toute page existe en Markdown brut** : ajouter `.md` à l'URL (ex. `/audience/segments.md`).
- Avant de maquetter un écran d'un module que vous ne maîtrisez pas, **récupérer et lire la page correspondante** (carte ci-dessous). Une maquette juste visuellement mais fausse métier sera refusée.
- Le guide évolue avec le produit : il fait foi sur ce skill en cas d'écart. Côté technique : developer.mediarithmics.com.

## Ce qu'est la plateforme

mediarithmics est une **CDP / marketing cloud « data-first »** : elle collecte des données utilisateurs depuis tous les canaux (site, CRM, ERP…), les unifie dans un modèle graphe, permet de construire des **segments** d'audience, et les **active** vers des destinations publicitaires et de communication (les **feeds**). Autour de ce cœur : automations (scénarios), contextual (ciblage sans cookie), campaigns (mesure), data clean room (collaboration inter-acteurs) et computing console (imports/exports techniques).

## Glossaire des concepts clés

| Terme | Définition |
|---|---|
| Community / Organisation | Hiérarchie des clients : une community regroupe des organisations ; les droits et objets appartiennent à une organisation |
| Datamart | La base de données d'une organisation : tout (UserPoints, segments, schéma) vit dans un datamart |
| Compartment | Partition logique d'un datamart (ex. par filiale ou source) |
| Channel | Point de collecte : un site ou une app d'où proviennent les activités |
| Schema | Le modèle de données GraphQL du datamart (objets, champs interrogeables) |
| **UserPoint** | La vision 360° d'un utilisateur unique — l'objet central de la plateforme |
| Identifiers | Rattachés au UserPoint : **UserAccount** (compte CRM), **UserEmail**, **UserDevice** + **UserDeviceTechnicalId** (cookie, mobile ID, network ID), **UserChoice** (consentements) |
| Activity / Event | **UserActivity** = session ; **UserEvent** = événement dans une activité (page vue, achat…) |
| UserProfile / UserSegment | Attributs intemporels du visiteur / segments auxquels il appartient |
| OTQL | Le langage de requête de la plateforme (`SELECT @count{} FROM UserPoint WHERE …`) |
| Network ID | Identifiant publicitaire universel pour le matching avec les plateformes d'activation |
| Segment | Ensemble de UserPoints. **Typologie** : User List (import), User Query (OTQL), User Expert Query, User Activation, User Partition, User Lookalike (cohort ou score), User Pixel, Edge |
| Segment metrics | Les compteurs du bandeau d'un segment : User Points, User Accounts, Emails, Device Points… (notre composant `Segment Header`) |
| Feed (cycle de vie) | Server-side : Initial → Creation → Connection → Starting → Initial loading → **Live** → Closed ; client-side : Active / Paused. Actions selon statut : « Resend all users » (LIVE uniquement), « Delete » (feed stoppé requis), « Edit » (client-side non actif). Métriques : identifier upserts/deletes envoyés, % de UserPoints avec identifiants compatibles — période par défaut 7 jours |
| Feed | Connexion qui pousse un segment vers une **destination** (LinkedIn, Google, Meta, Xandr…) ; un **preset** est une configuration de feed réutilisable ; server-side vs client-side |
| Automation | Scénario : **triggers** (entrée/sortie de segment, événement) → **flow control** (split, wait, if) → **actions** (add to segment, send email, feed…) |
| Automation (cycle de vie + analytics) | Statuts : **Draft → Active** (et **Paused**) ; actions : Activate/Pause, Edit, Delete. Analytics : compteurs par nœud = **des passages, pas des users uniques** (un UserPoint peut passer plusieurs fois), fenêtre temporelle sélectionnable ; stats sur start/end/feed nodes et exit conditions |
| Settings (navigation) | Onglets de la Settings Bar : My Account · **Organisation** (subnav : Labels, Profile, **Users & Roles**, Processing Activities, Single Sign On, Device Registries) · Datamart · Campaigns · Services · Data Clean Room. Rôles réels : **Community administrator, Organisation administrator, Editor, Reader** ; en édition d'un user, seul le rôle est modifiable. « Dernier accès » n'existe pas dans le guide Users |
| Processing activity | Base légale RGPD d'un traitement ; associée aux segments, channels, compartments (consent management) |
| Contextual | Ciblage contextuel (panel-based ou semantic) + targeting lists |
| Campaigns | Display (ad serving, tracking, goals), Funnel (analyse d'entonnoir), Experiments (A/B) |
| Data Clean Room | Collaboration de données entre acteurs : **bunkers** (environnements isolés), **datasets** (+ matching keys), **clean rooms** (croisement, insights, activation) |
| Computing Console | L'app technique : assets, imports (activities, profiles, segments, identifiers, user choices), exports, data loader |
| User Lookup | Consultation d'un UserPoint : profil, segments, timeline, identifiants |

## Carte modules ↔ SideMenu ↔ user guide

| SideMenu | Module métier | Page de référence (ajouter .md) |
|---|---|---|
| Boards | Dashboards built-in & custom | /basics/dashboards |
| AUDIENCE · Builders | Standard / Advanced Segment Builder | /audience/segment-builders |
| AUDIENCE · User lookup | User Lookup | /audience/user-lookup |
| AUDIENCE · Segments | Segments, page de détail, wizard, typologie | /audience/segments |
| ACTIVATION · Feeds | Feeds, destinations, presets | /activation/feeds |
| ACTIVATION · Creatives | Creatives | /activation/creatives |
| ACTIVATION · Automations | Automations | /activation/automations |
| CONTEXTUAL · Targeting lists | Contextual | /contextual/getting-started |
| MEASUREMENT · Experiments / Campaigns / Funnel | Campaigns | /campaigns/experiments · /campaigns/display · /campaigns/funnel |
| DATA STUDIO · Query Tool | OTQL Query tool | /data-studio/query-tool |
| (Settings) | Account, Organisation, Datamart | /settings/settings |
| (hors Navigator) | Data Clean Room · Computing Console | /data-collaboration/… · /computing-console/… |

## Vocabulaire de spec → objets du DS

- « metrics panel » d'un segment → composant `Segment Header` ; « last computed » → la ligne d'horodatage du template Détail.
- « creation wizard » / « edition » → template Formulaire d'édition ; l'étape « choose your segment type » → template Choix du type (les types = typologie de segments ci-dessus, icônes `icon/user-*`).
- « add a feed » / « feed presets » → modale Create a feed (grille de `Feed Card`, logos `logo/*`) ; « feed configuration » → seconde modale (template Overlay Modale).
- « labels » → `Tag` ; « alerts » sur les feeds → `Alert Row` ; « overlap », « lookalike », « export » → actions de l'Actionbar/kebab du segment.
- « comparison panel » → template Détail en mode compare (2 colonnes).
- « standard segment builder » / « criteria group » / « audience features » → composants `Builder / Criteria Group` + `Builder / Criterion`, layout dérivé du template Analytics requêtable (éditeur FILL + panneau audience 360) ; « audience metrics panel » → Counter (Show progress=false) + dashboards.
- Un nom de destination (LinkedIn, Xandr, Kameleoon…) dans une spec = un connecteur de feed — vérifier sa page dédiée sous /activation/feeds/feed-configuration/.

## Règles de bon sens métier

- Les noms d'objets produits restent **en anglais** dans les maquettes (Segments, Feeds, User points…) — c'est la langue du produit.
- Les données de démo doivent être **plausibles métier** : un segment a des compteurs cohérents (User accounts ≤ User points), un feed référence une vraie destination, une automation a un trigger et une action.
- En cas de doute sur un comportement (que fait « Compute », quels statuts a un feed ?), lire la page du module — ne pas inventer d'états ni de libellés.

## Display Campaigns (MEASUREMENT > Campaigns)
- Liste des campagnes display d'une organisation. Métriques de colonnes : **Imp.** (impressions), **Clicks**, **Spent**, **CPM**, **CTR**, **CPC** — vides (« - ») tant que la campagne n'a pas délivré.
- Statuts observés : actif (vert) et en attente (pastille sombre en prod → traduit par `Pending`, à confirmer côté produit).
- Filtres : recherche par nom, période (« Last 30 days », relatif ou plage absolue), **Status** — multi-sélection à cases dont le déclencheur dit toujours « Status » — et **Label** — champ à loupe qui se déploie en recherche et liste les labels de l'organisation (E commerce, test…). Les valeurs choisies se rappellent dans l'Active Filter Bar ; règles complètes dans /md-template-list. Les labels sont posés sur les ressources et servent de filtre transverse.
- Sélection multiple par cases à cocher (actions de masse), export CSV, création via « New Campaign ».
