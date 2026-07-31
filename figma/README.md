# Figma — la source de vérité amont

Ce dossier rassemble tout ce qui concerne la conception : le fichier de design system, les règles
de production, et le mode d'emploi pour produire des maquettes conformes avec Claude Code.

```
figma/
  README.md              ce fichier — le fichier Figma, son contenu, l'accès
  SETUP.md               installation : Claude Code, le MCP Figma, l'aspiration, les skills
  DESKTOP-BRIDGE.md      le second accès à Figma : sans quota, API plugin complète
  skills/                les 22 skills de production + les 14 références RGAA
  variables.json         les 121 variables exportées, avec leur cible de code
  export-variables.js    le script qui régénère variables.json
  *.fig                  instantané du fichier — voir plus bas, il périme
```

**Vous n'avez encore rien installé ?** Tout est dans **[`SETUP.md`](SETUP.md)** : Claude Code, la
connexion du MCP Figma, les skills, un premier test de bout en bout et le dépannage.

**Vous produisez en lot, ou le quota vous bloque ?** Lisez
**[`DESKTOP-BRIDGE.md`](DESKTOP-BRIDGE.md)**. C'est ce qui a servi à construire l'essentiel du
fichier, et le seul chemin qui ouvre l'API plugin complète — propriétés SLOT, annotations natives,
annulation.

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
`CODE : → token.colorPrimary`. **120 sur 121** la renseignent aujourd'hui — la seule exception est
`showActionMore`, un booléen de propriété de composant rangé par erreur dans Primitives. C'est la
passerelle entre le fichier et [`src/theme/micsTheme.ts`](../src/theme/micsTheme.ts) : ne la
supprimez jamais, renseignez-la sur toute nouvelle variable.

[`variables.json`](variables.json) en est l'export : nom, type, alias, valeur finale et cible de
code, pour les trois collections (Primitives 47, Color 32, Scale 42). Contrairement au fichier
Figma, il se relit en revue et se compare d'une version à l'autre — c'est là que se voit une
dérive entre la maquette et le thème du code.

Pour le régénérer après une modification du fichier, exécutez
[`export-variables.js`](export-variables.js) dans le contexte plugin de Figma (via le MCP
`figma-console`, ou collé dans un plugin de développement) et remplacez le contenu du JSON. Le
script est en lecture seule et signale les variables sans cible de code et les alias cassés.

La table de correspondance composant Figma → composant React est dans
[`ARCHITECTURE.md`](../ARCHITECTURE.md), section 3.

## Le `.fig` versionné

`Mediarithmics - MICS DS — Rebuild.fig` est un export « Enregistrer une copie locale », déposé ici
comme instantané de référence. **Le lien ci-dessus reste la source de vérité** : le `.fig` est une
photographie, pas une copie synchronisée.

Trois choses à savoir avant de s'en servir :

- **Il périme.** Dès la première modification en ligne, il ne décrit plus le fichier réel.
  Vérifiez sa date de commit avant de conclure quoi que ce soit à partir de lui.
- **Git ne sait pas le lire.** Aucun diff, aucune fusion possible : chaque nouvelle version ajoute
  une copie entière à l'historique du dépôt. Le remplacer souvent le fait grossir vite.
- **Il ne remplace pas [`variables.json`](variables.json)**, qui lui se relit en revue et se compare
  d'une version à l'autre.

À quoi il sert : archivage, reprise hors ligne, transfert de propriété du fichier — les cas où
l'accès Figma n'est pas garanti. Pour travailler, ouvrez le lien.

Pour le remplacer : **Fichier → Enregistrer une copie locale** depuis l'application Figma, puis
écraser celui-ci en gardant le même nom (un nom stable évite d'accumuler les versions côte à côte).

## Produire une maquette

Une fois [`SETUP.md`](SETUP.md) suivi, il n'y a qu'un point d'entrée :

```bash
claude "/md-produce-screen Écran de liste des Creatives, avec recherche, filtres par statut et pagination. Fichier : https://www.figma.com/design/OnvlU9azeM4rffD83XnEGI/"
```

Claude enchaîne seul : vocabulaire métier, choix du template parmi les 9, production en instances,
puis *pre-flight check* — screenshot et auto-contrôle, zéro défaut exigé avant de rendre la main.
Les autres skills se chargent d'eux-mêmes selon le besoin.

## Les trois règles d'or du fichier

1. **Aucune valeur en dur** : toute couleur, tout radius, tout espacement vient d'une variable ;
   tout texte porte un style du fichier.
2. **Composants = instances** : on n'édite jamais un master pour un besoin d'écran, on instancie
   et on surcharge.
3. **Zéro défaut au pre-flight check** : pas de livraison sans screenshot de contrôle conforme.
