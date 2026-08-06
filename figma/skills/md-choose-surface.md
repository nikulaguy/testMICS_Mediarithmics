---
name: md-choose-surface
description: Décider de la SURFACE avant de choisir un template — page, modale, drawer ou composant non modal. Arbre de décision en 7 étapes, adapté du modèle Carbon. Charger au début de /md-produce-screen dès qu'un contenu pourrait s'afficher en overlay.
---

# md-choose-surface — Page, modale, drawer ou composant non modal

À charger **avant** /md-ds-rules et le skill de template, dès qu'un doute existe sur la surface.
Une fois la surface décidée, poursuivre avec la matrice des templates de /md-ds-rules.

Ce skill ne dit pas *comment* construire. Il dit *quoi* construire. La construction est dans
/md-template-overlay (modale et drawer) ou dans le skill du template retenu (page).

## Le principe

**La page est le défaut.** Un overlay se justifie, une page non. Chaque étape ci-dessous cherche
une raison de ne PAS faire une page ; à la première qui manque, on retombe sur la page.

C'est volontairement asymétrique : une modale mal placée coûte cher — elle bloque, elle ne se
partage pas, elle ne se met pas en favori, elle disparaît au rechargement. Une page de trop ne
coûte qu'un clic.

## L'arbre, en 7 étapes

Répondre dans l'ordre. **Une seule réponse « oui » suffit** à valider une étape, sauf mention
contraire.

### 1 · Le contenu mérite-t-il de sortir du flux ?

- Faut-il capter l'attention de l'utilisateur ?
- Choisit-il parmi un petit nombre d'options ?
- Faut-il recueillir une petite quantité d'information avant de le laisser continuer ?
- Faut-il offrir un contenu ou une fonction supplémentaire **sans perdre le contexte** de la page ?
- Est-il urgent qu'il en prenne connaissance ?

**Aucun oui → PAGE.** Sinon, étape 2.

### 2 · Le contenu a-t-il une vie propre ?

- L'utilisateur voudra-t-il le mettre en favori ou le partager ?
- Le parcours est-il d'abord pensé pour mobile ?
- Quitte-t-il le flux courant sans qu'on attende son retour ?
- Les interactions sont-elles nombreuses et un peu complexes ?
- L'interaction demande-t-elle plusieurs étapes ?
- D'autres actions, tâches ou contenus sont-ils prévus ici plus tard ?

**Un seul oui → PAGE.** Un contenu qu'on partage ou qui va grossir n'a rien à faire dans un
overlay. Sinon, étape 3.

### 3 · Le contenu tient-il dans un overlay ?

- Cherche-t-on à faire entrer beaucoup d'éléments ?
- La hauteur dépasserait-elle celle du conteneur ?
- Faudrait-il faire défiler dans l'overlay ?
- Le contenu serait-il mieux dans un conteneur plus large ?
- Y a-t-il plus de **deux actions primaires** ?
- L'utilisateur doit-il accomplir plus d'une tâche ?

**Un seul oui → PAGE.** Sinon, étape 4.

### 4 · L'overlay a-t-il une justification positive ?

- L'utilisateur fait-il des allers-retours fréquents avec la page de fond ?
- Interagit-il peu avec ce contenu ?
- Le contenu est-il temporaire ?
- S'agit-il d'un état de transition ?
- Le focus doit-il revenir à la page d'origine ensuite ?
- A-t-on un argument **clair et défendable** pour l'overlay plutôt que la page ?
- Si c'est de la consultation, le contenu est-il court et simple ?
- Apparaît-il au niveau le plus profond de l'arborescence dans ce parcours ?

**Aucun oui → PAGE.** Sinon, étape 5.

### 5 · Faut-il bloquer, ou seulement signaler ?

- Le contenu est-il urgent, à voir tout de suite ?
- La tâche est-elle plus facile si on détourne l'attention de la page ?
- Est-elle critique pour poursuivre le processus en cours ?
- La faire maintenant réduit-elle significativement le travail de l'utilisateur ?
- L'information est-elle essentielle au flux en cours ?
- Le processus est-il **autonome** — un début et une fin clairs ?

**Aucun oui → COMPOSANT NON MODAL.** Sinon, étape 6.

### 6 · Est-ce un message d'erreur ou de succès ?

**Oui → COMPOSANT NON MODAL.** Un message ne se confirme pas, il s'affiche. Le mettre dans une
modale oblige à cliquer pour accuser réception d'une information qu'on a déjà lue.

Sinon, étape 7.

### 7 · Modale ou drawer ?

- Faut-il recueillir une information auprès de l'utilisateur ?
- Confirme-t-on une action ?
- L'action a-t-elle des conséquences sérieuses et difficiles à annuler ?
- L'utilisateur remplit-il un formulaire, ou prend-il une décision ?
- Est-ce un avertissement important qui empêche ou corrige une erreur critique ?
- Le contenu porte-t-il sur une erreur irréversible ?

**Un seul oui → MODALE** (`Overlay` Mode=Modal).
**Aucun oui → DRAWER** (`Overlay` Mode=Drawer).

## Les quatre issues, en composants MICS

| Issue | Ce qu'on construit | Skill |
|---|---|---|
| **Page** | Un des templates de la matrice | /md-ds-rules puis le skill du template |
| **Modale** | `Overlay` Mode=Modal, 960 × 692, centrée | /md-template-overlay |
| **Drawer** | `Overlay` Mode=Drawer, largeur 520, pleine hauteur, à droite | /md-template-overlay |
| **Composant non modal** | `Alert` (message dans le flux), `Tooltip` (précision contextuelle), `Dropdown / Container` (petit choix ancré), `Alert Row` (rangée dépliable) | /md-data-display, /md-overlays |

Le produit n'a **pas de toast** : un message transitoire se rend avec `Alert` posé dans le flux, à
l'endroit où l'action a eu lieu. Ne pas en inventer un sans passer par /md-new-component.

## Ce que l'arbre tranche, et qu'on se trompe souvent

- **Un drawer n'est pas une petite page.** S'il faut faire défiler beaucoup, s'il y a plusieurs
  tâches, ou si le contenu va grandir : étape 3, c'est une page.
- **Une modale n'est pas un panneau d'information.** Si l'utilisateur n'a rien à décider ni à
  saisir, on est à l'étape 6 ou 7 : c'est un composant non modal, ou un drawer.
- **« Sans perdre le contexte » n'est pas un argument suffisant.** C'est la question 1 ; l'étape 4
  redemande une justification positive, précisément parce que ce motif sert à tout justifier.
- **Deux actions primaires, c'est déjà trop.** Un overlay porte une décision, pas un arbitrage
  entre plusieurs chemins.

## Après la décision

- Un seul overlay actif à la fois : jamais une modale par-dessus un drawer.
- Un enchaînement d'étapes reste dans la **même** modale, il n'en ouvre pas une seconde.
- Si l'arbre donne PAGE alors que la spec demandait une modale : le dire, avec l'étape qui a
  tranché. La spec change plus souvent que la règle.

## Origine

Arbre adapté du modèle de décision **Carbon Design System** (« Modal vs. page vs. sheet »), dont
la structure en cinq blocs de questions est reprise telle quelle. L'adaptation MICS porte sur le
vocabulaire des issues et sur la table de correspondance ci-dessus.
