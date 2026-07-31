# Figma Desktop Bridge — écrire dans Figma sans quota

Ce document couvre le second chemin d'accès à Figma : `figma-console` et son plugin **Desktop
Bridge**. Le premier chemin, le serveur officiel de Figma, est décrit dans
[`SETUP.md`](SETUP.md) — commencez par lui, il suffit la plupart du temps.

Relevé au 31 juillet 2026 : serveur `figma-console-mcp` **1.38.2**, plugin **1.35.0**.

## Pourquoi

Le serveur officiel de Figma applique un **quota d'appels par siège**. En lecture on ne le voit
jamais. En écriture soutenue — construire un écran complet, nettoyer sept maquettes, poser
quelques centaines de nœuds — on l'atteint, et il n'y a alors **aucun moyen de continuer** : ni
réessai, ni changement de fichier, ni autre compte sur le même siège. C'est le seul point où le
dispositif s'arrête net.

Le Desktop Bridge contourne cela en changeant de voie d'accès. Au lieu de passer par l'API REST de
Figma depuis Internet, il exécute le code **dans le bac à sable plugin de Figma Desktop**, en
local. Les appels ne sortent pas de la machine, donc rien ne les compte.

Deux conséquences qui vont au-delà du quota :

- Vous disposez de **toute l'API plugin Figma**, pas d'un sous-ensemble. Les propriétés SLOT, les
  annotations natives, `triggerUndo()`, les descriptions de variables : tout ce qu'un plugin sait
  faire devient accessible.
- Le code s'écrit une fois et s'exécute en un seul aller-retour. Pour une opération en lot — poser
  400 nœuds, relire toute une page — c'est l'écart entre quelques secondes et plusieurs minutes.

## Comment ça marche

```
Claude Code
   │  stdio
   ▼
serveur figma-console-mcp        (npx, sur votre machine)
   │  WebSocket, port 9223 (repli 9224–9232)
   ▼
plugin « Figma Desktop Bridge »  (tourne dans Figma Desktop)
   │  API plugin
   ▼
le fichier ouvert
```

Le plugin est le seul à parler à Figma. Le serveur ne fait que lui transmettre du code et lui
reprendre le résultat. D'où deux conditions permanentes : **Figma Desktop ouvert sur le bon
fichier**, et **le plugin lancé** — sa fenêtre fermée, le WebSocket tombe.

Un jeton d'accès personnel reste nécessaire en parallèle, pour les outils qui passent par l'API
REST (historique de versions, bibliothèques d'équipe).

## Installer

### 1. Créer un jeton d'accès personnel

Dans Figma : **Paramètres → Sécurité → Personal access tokens**. Portées à cocher :

| Portée | Accès |
|---|---|
| File content | Read |
| File versions | Read |
| Variables | Read |
| Comments | Read and write |

Le jeton s'affiche **une seule fois**. C'est un secret personnel qui ouvre tous vos fichiers : ne
le commitez jamais, ne le collez pas dans un ticket.

### 2. Déclarer le serveur

```bash
claude mcp add figma-console --env FIGMA_ACCESS_TOKEN=votre_jeton -- npx -y figma-console-mcp@latest
```

### 3. Matérialiser le plugin

Le paquet npm dépose le plugin sur votre disque au premier lancement du serveur. Ouvrez une
session `claude` et demandez n'importe quoi au serveur (`figma_diagnose` fait l'affaire), puis
vérifiez :

```bash
ls ~/.figma-console-mcp/plugin/manifest.json
```

### 4. Importer le plugin dans Figma

Dans **Figma Desktop** : **Plugins → Development → Import plugin from manifest…**, puis
sélectionnez `~/.figma-console-mcp/plugin/manifest.json`.

Le chemin ne change jamais d'une version à l'autre : les mises à jour du serveur qui touchent au
plugin se réimportent au même endroit, en un clic.

### 5. Lancer le plugin

Ouvrez votre fichier, puis **Plugins → Development → Figma Desktop Bridge**. La connexion est
automatique.

## Vérifier

```
Appelle figma_diagnose et donne-moi le rapport.
```

Le rapport doit annoncer le plugin connecté, le port, **le fichier actif** et la page courante :

```
✅ Desktop Bridge plugin connected on port 9223.
   Active file: Mediarithmics - MICS DS — Rebuild (page: 🖥 Screens)
✅ Figma access token detected (source: env).
```

Lisez le nom du fichier actif à chaque fois. Le plugin agit sur **le fichier au premier plan**,
pas sur celui dont vous avez donné l'URL : c'est la confusion la plus coûteuse du dispositif.

## Ce qu'il faut savoir avant de s'en servir

**Les opérations ne sont pas atomiques.** C'est la différence de fond avec le serveur officiel, où
un appel qui échoue n'a rien écrit. Ici, un script qui plante à mi-parcours laisse le fichier dans
un état intermédiaire — des nœuds créés, d'autres non, parfois des originaux déjà supprimés.

`figma.triggerUndo()` fonctionne depuis l'API plugin et rattrape la plupart des cas. On s'en est
servi deux fois sur ce projet, dont une pour restaurer 643 nœuds effacés par un script de nettoyage
qui supprimait les originaux avant d'avoir vérifié les copies. Ça a marché, mais c'est un filet,
pas une garantie.

Trois habitudes qui évitent d'en arriver là :

1. **Créer avant de supprimer**, et vérifier le résultat entre les deux. Jamais l'inverse.
2. **Relever les positions** (`x`, `y`) au début d'un script qui réorganise, et les restaurer à la
   fin — sinon les écrans se déplacent sur le canevas.
3. **Un screenshot après**, systématiquement. C'est la seule façon de voir qu'un lot s'est mal
   passé : le code peut réussir et le rendu être vide.

**Charger les pages avant de les parcourir.** `figma.loadAllPagesAsync()` est nécessaire avant
toute recherche globale ou toute pose de lien inter-pages. Sans lui, `findAll` ne voit que la page
courante et poser un lien échoue avec « Invalid hyperlink target node ».

## Quand utiliser lequel

| | Serveur officiel | Desktop Bridge |
|---|---|---|
| Lecture, captures, inspection | ✅ le plus simple | possible |
| Édition ponctuelle | ✅ atomique, donc sûr | possible |
| Production en lot | quota atteint rapidement | ✅ |
| API plugin complète (SLOT, annotations, undo) | non | ✅ |
| Figma Desktop requis | non | ✅ oui |
| Échec en cours de route | rien n'est écrit | état intermédiaire possible |

En pratique : **officiel par défaut, Desktop Bridge pour les gros lots**. Les deux peuvent être
déclarés en même temps, Claude choisit l'outil selon la demande.

## Dépannage

| Symptôme | Cause / remède |
|---|---|
| « Desktop Bridge plugin not connected » | Le plugin n'est pas lancé, ou sa fenêtre a été fermée. Le relancer depuis Plugins → Development. |
| Le plugin agit sur le mauvais fichier | Il suit le fichier au premier plan dans Figma Desktop. Mettre le bon au premier plan, puis relancer `figma_diagnose`. |
| `manifest.json` introuvable | Le serveur n'a jamais tourné. Lancer une session `claude` et appeler `figma_diagnose` une fois. |
| Port occupé | Repli automatique sur 9224–9232. Forcer avec la variable d'environnement `FIGMA_WS_PORT`. |
| « API token has expired » alors que `figma_diagnose` dit le jeton bon | L'erreur vient d'un **autre** serveur MCP — souvent le MCP Figma officiel dont la session OAuth a expiré. Se ré-authentifier via `/mcp`. |
| Le plugin s'est mis à jour côté serveur | Réimporter le manifeste, même chemin. |
| Un script a laissé le fichier à mi-chemin | `figma.triggerUndo()`, puis vérifier visuellement avant de relancer. |
