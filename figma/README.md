# Figma — la source de vérité amont

Ce dossier rassemble tout ce qui concerne la conception : le fichier de design system, les règles
de production, et le mode d'emploi pour produire des maquettes conformes avec Claude Code.

```
figma/
  README.md      ce fichier — le fichier, son contenu, l'accès
  skills/        les 22 skills de production + le guide d'installation pas à pas
```

La moitié aval — les composants React, leur documentation, les écrans — est à la racine du dépôt.
Voir le [README principal](../README.md).

## Le fichier

**Mediarithmics - MICS DS — Rebuild**
→ https://www.figma.com/design/OnvlU9azeM4rffD83XnEGI/

Relevé au 31 juillet 2026 : **19 pages, 45 sets de variantes, 446 composants, 121 variables,
12 styles de texte.**

| Section | Pages |
|---|---|
| Entrée | 📕 Cover · 📋 Sommaire · 🎛️ General Rules |
| Fondations | 🎨 Foundations · 🖼 Icons · 🎼 Layout |
| Composants | 🧭 Navigation & Shell · 🔘 Button · 📝 Form Inputs · 🏷 Data Display · 💬 Feedback & Overlays · 📊 Table & Lists · 📊 Charts |
| Produit | 🖥 Screens · 📋 Audit |
| Travail | Aspiration · Test Skills |

Commencez par **📋 Sommaire** : chaque composant et chaque écran y a une carte cliquable. C'est la
page qui doit rester à jour, toute création y ajoute la sienne.

### Accès

Lecture : le lien ci-dessus suffit. **Édition** : il faut un siège payant Figma (Professional,
Organization ou Enterprise) et la police **Circular** (LLCircularWeb) disponible pour votre compte,
sinon toute édition de texte échoue avec « Cannot load font ».

### Le passage design → code

Les 121 variables portent leur cible de code dans leur description, sous la forme
`CODE : → token.colorPrimary`. **120 sur 121** la renseignent aujourd'hui. C'est la passerelle
entre le fichier et [`src/theme/micsTheme.ts`](../src/theme/micsTheme.ts) : ne la supprimez jamais,
renseignez-la sur toute nouvelle variable.

La table de correspondance composant Figma → composant React est dans
[`ARCHITECTURE.md`](../ARCHITECTURE.md), section 3.

## Pourquoi le `.fig` n'est pas versionné ici

Un export « Save local copy » est un binaire opaque : git ne sait ni le différencier ni le
fusionner, chaque version en rajoute une copie entière dans l'historique, et un fichier de cette
taille approche la limite de 100 Mo par fichier de GitHub. Surtout, il périme dès la première
modification en ligne, et un dépôt qui contient une copie périmée d'une source vivante fait
travailler quelqu'un sur la mauvaise version.

Le lien ci-dessus est donc la référence. Si vous voulez malgré tout un instantané — archivage,
reprise hors ligne, transfert de propriété — l'export se fait à la main depuis l'application Figma
(menu **Fichier → Enregistrer une copie locale**), et se dépose dans `figma/snapshot/`, en datant
le nom : `MICS-DS-Rebuild-2026-07-31.fig`.

## Produire une maquette

Tout est dans **[`skills/`](skills/)**. En résumé : installer les skills, connecter le MCP Figma,
puis un seul point d'entrée.

```bash
claude "/md-produce-screen Écran de liste des Creatives, avec recherche, filtres par statut et pagination. Fichier : https://www.figma.com/design/OnvlU9azeM4rffD83XnEGI/"
```

Le guide complet — installation, connexion du MCP, premier test de bout en bout, dépannage — est
dans **[`skills/README.md`](skills/README.md)**.

## Les trois règles d'or du fichier

1. **Aucune valeur en dur** : toute couleur, tout radius, tout espacement vient d'une variable ;
   tout texte porte un style du fichier.
2. **Composants = instances** : on n'édite jamais un master pour un besoin d'écran, on instancie
   et on surcharge.
3. **Zéro défaut au pre-flight check** : pas de livraison sans screenshot de contrôle conforme.
