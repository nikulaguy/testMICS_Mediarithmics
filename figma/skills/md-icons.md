---
name: md-icons
description: Icônes et logos MICS — inventaire complet à jour (175 icônes + 5 logos), conventions, règles de choix et d'usage. Page 🖼 Icons.
---

# md-icons — Icônes et logos

Appliquer /md-ds-rules. Source : page 🖼 Icons (frames « Icons » et « Logos »). Inventaire extrait du fichier — si une icône citée ici manque, re-vérifier sur la page avant d'en conclure quoi que ce soit.

## Conventions de la librairie

- Composant **24 × 24**, contenu clippé, contraintes SCALE, proportions verrouillées.
- **Un seul calque nommé `vector`** : jamais de frame ni de groupe interne.
- Glyphe centré avec ≥ 1 px de marge.
- **Taille d'affichage réglée sur l'instance** (12, 14, 16, 18…), jamais en modifiant le composant.
- **Couleur portée par l'instance** via un token (défaut : `text/normal`) — jamais figée dans le composant.
- Nom : `icon/nom-en-kebab-case`.
- **Interdit** : dessiner une forme à la main pour faire office d'icône, aplatir/modifier un maître, détourner une icône de son sens (le broom est un pinceau de nettoyage, pas un marteau).

## Inventaire (175 icônes)

### Navigation & flèches
arrow-down · arrow-left · arrow-up · caret-down · caret-up · chevron · chevron-bottom · chevron-left · chevron-left-rounded · chevron-right · chevron-right-rounded · chevron-up · double-chevron-left · double-chevron-right · rollback · swap-right · undo · redo · menu-close · home

### Actions
check · check-rounded · check-rounded-inverted · close · close-big · close-rounded · plus · plus-rounded · minus · minus-rounded · delete · pen · save · copy · cut · select · download · cloud-download · cloud-upload · refresh · loading · share · send · extend · reorder · filter · filters · magnifier · broom (nettoyer) · view · eye · eye-invisible

### États & feedback
info · info-rounded · question · question-rounded · exclamation-rounded · warning · warning-outlined · flag · flag-filled · bell · notification · status · pause · pause-rounded · pause-rounded-filled · play · play-rounded-filled · clock · history · hourglass · carry-out · like · dislike · lock · unlock · safety · safety-certificate · key

### Données & graphiques
chart-area · chart-bar · chart-dot · chart-line · chart-metric · chart-pie · trending-down · stock · table · database · data · cloud-data · funnel · query · intersection · partitions · cluster · tree · apartment · node-index · activity-analyzer

### Ressources produit
segments (user-*) : user · users · user-add · user-list · user-activation · user-list-file-import · user-list-scenario · user-lookalike · user-pixel · user-query · full-users · team
feeds & activation : feeds · plug · campaigns · ads · adGroups · creative · automation · automations · goals · goals-rounded · target · optimization · display
autres : dashboards · docs · library · file · file-image · image · video · email · email-inverted · inbox · message · audio · calendar · tag · tags · credit-card · dollar-rounded · id-card · batchs *(voir la page si absent)*

### Technique & système
code · code-sandbox · terminal · graphql · function · robot · bug · gears · settings · options · sliders · tools · server · server-outlined · cloud · globe · external-access · link · appstore · layout · dots · monitor · laptop · smartphone · tablet · phone · chrome · apple · bolt · rocket · pushpin · dashboards

## Logos de connecteurs (5)

`logo/amazon-ads` · `logo/kameleoon` · `logo/linkedin` · `logo/parrot` · `logo/snapchat`
- 32 × 32, **images bitmap** (exception assumée : ni vecteur, ni token de couleur, ne pas recolorer).
- Usage : prop `Logo` (instance-swap) de `Feed Card` — cartes de presets de la modale Create a feed.

## Règles de choix

- Choisir l'icône par le **sens produit**, pas par la forme : `plug` = feed/connecteur, `database` = segment type liste, `funnel` = funnel, `broom` = nettoyage.
- Singulier vs pluriel : le singulier désigne UNE ressource (`automation` = icône de type d'une ligne), le pluriel désigne la SECTION (`automations` = item du SideMenu). Même logique pour `user`/`users`, `filter`/`filters`, `goal`/`goals`.
- Paires pleine/contour : `warning`/`warning-outlined`, `flag`/`flag-filled`, `info` (pleine)/`info-rounded` (cerclée), `server` (pleine)/`server-outlined`. La version pleine est l'état accentué.
- Icône décorative à côté d'un texte : elle sera `aria-hidden` en dev — le texte doit être autonome (RGAA 1.1).
- Icône seule (bouton kebab, croix) : prévoir le nom accessible dans la spec.
- Il manque une icône ? Ne pas la dessiner : la demander (ajout au set via /md-new-component, en respectant les conventions ci-dessus).
