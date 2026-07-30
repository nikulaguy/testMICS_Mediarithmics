# Éditer le fichier « MICS DS — Rebuild » avec Claude — guide d'installation pas à pas

Ce guide part de zéro : un compte Figma et un compte Claude qui n'ont jamais utilisé ni MCP ni skills. À la fin, vous saurez produire un écran conforme au design system depuis une simple conversation avec Claude.

---

## 0 · Prérequis

| Quoi | Détail |
|---|---|
| Compte Figma | Accès en **édition** au fichier « Mediarithmics - MICS DS — Rebuild », avec un siège payant (plan Professional, Organization ou Enterprise). Le MCP Figma refuse les comptes en lecture seule pour l'écriture. |
| Police | **Circular** (LLCircularWeb) doit être disponible pour votre compte : police d'organisation partagée, ou installée sur votre poste si vous utilisez Figma Desktop. Sans elle, toute édition de texte échouera (« Cannot load font »). |
| Compte Claude | Un compte **Claude Pro, Max ou Team** (l'accès à Claude Code est inclus). |
| Poste | macOS, Windows ou Linux, avec un terminal. |
| Ce dossier | Le package `mics-skills/` complet (21 fichiers `md-*.md` + `md-a11y-rgaa/references/`). |

---

## 1 · Installer Claude Code

macOS / Linux :

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

Windows (PowerShell) :

```powershell
irm https://claude.ai/install.ps1 | iex
```

Puis, dans un terminal :

```bash
claude
```

Au premier lancement, tapez `/login` : votre navigateur s'ouvre, connectez-vous avec votre compte Claude. Vérifiez ensuite que `claude --version` répond.

---

## 2 · Connecter le MCP Figma

Le MCP (Model Context Protocol) est le pont qui permet à Claude de lire et d'écrire dans Figma. Deux options ; l'option A suffit dans la plupart des cas.

### Option A — Serveur officiel distant (recommandée)

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

Puis ouvrez une session `claude`, tapez `/mcp`, sélectionnez **figma** → **Authenticate** : votre navigateur s'ouvre, autorisez avec votre **compte Figma** (celui qui a l'accès édition).

### Option B — Serveur local de Figma Desktop

Utile si vous travaillez toujours fichier ouvert dans l'application :

1. Ouvrez **Figma Desktop** → menu Figma → **Préférences** → activez **« Enable local MCP Server »**.
2. ```bash
   claude mcp add --transport http figma http://127.0.0.1:3845/mcp
   ```

### Vérification (obligatoire avant de continuer)

Dans une session `claude`, écrivez :

> Appelle l'outil `whoami` du serveur figma et donne-moi le résultat.

Vous devez voir votre e-mail Figma. Ensuite :

> Fais un screenshot de la page 📋 Sommaire du fichier https://www.figma.com/design/OnvlU9azeM4rffD83XnEGI/

Si l'image du sommaire s'affiche, la lecture fonctionne.

**À savoir** : le serveur officiel applique un quota d'appels par siège Figma. Une très grosse session d'écriture peut l'atteindre ; dans ce cas, reprenez un peu plus tard — rien n'est perdu, chaque opération est atomique.

---

## 3 · Installer les skills

Les skills sont les modes d'emploi que Claude charge automatiquement : règles du DS, templates d'écrans, catalogue de composants, accessibilité, pièges de l'API Figma. Sans eux, Claude ne connaît pas vos conventions.

**Choix de l'emplacement** :
- `~/.claude/skills/` → pour vous seul (rapide pour démarrer).
- `<votre-repo>/.claude/skills/` → partagé par toute l'équipe via git (**recommandé** : une seule source, versionnée).

Depuis le dossier qui contient ce README :

```bash
DEST=~/.claude/skills        # ou <repo>/.claude/skills
mkdir -p "$DEST"
for f in md-*.md; do
  name=$(basename "$f" .md)
  mkdir -p "$DEST/$name"
  cp "$f" "$DEST/$name/SKILL.md"
done
cp -R md-a11y-rgaa "$DEST/md-a11y-rgaa"
```

### Vérification

Ouvrez une session `claude` et tapez `/md-` : l'autocomplétion doit proposer les skills (`/md-produce-screen`, `/md-ds-rules`, `/md-new-component`…). Sinon, vérifiez que chaque dossier contient bien un fichier nommé exactement `SKILL.md`.

---

## 4 · Premier test de bout en bout (10 minutes)

1. **Lecture** :
   > Charge le skill md-ds-rules et résume-moi les 3 règles d'or.
2. **Écriture réversible** :
   > Dans le fichier https://www.figma.com/design/OnvlU9azeM4rffD83XnEGI/, page « Aspiration », crée un rectangle nommé test-mcp, fais un screenshot, puis supprime-le.

Si les deux passent, l'installation est complète.

---

## 5 · Produire un écran : le workflow nominal

Point d'entrée unique : **`/md-produce-screen`**, avec votre spec et l'URL du fichier. Exemple :

> /md-produce-screen Je veux l'écran de liste des Creatives, avec recherche, filtres par statut et pagination. Fichier : https://www.figma.com/design/OnvlU9azeM4rffD83XnEGI/

Ce qui va se passer, dans l'ordre — c'est normal, laissez-le dérouler :

1. **Question 0** : Claude vérifie le vocabulaire métier de votre demande (il connaît le produit via md-business et le user guide).
2. **Choix du template** parmi les 11 du fichier (liste, détail, board, édition, settings, overlay…). Il vous questionne si plusieurs choix sont possibles.
3. **Production** : uniquement des instances de composants existants, tokens liés, autolayout partout.
4. **Pre-flight check** : screenshot + auto-contrôle, zéro défaut exigé avant livraison.

Deux cas particuliers :
- **Aucun composant existant ne convient** → Claude doit passer par `/md-new-component`, dont l'étape 0 est bloquante : prouver qu'aucun composant du catalogue ne fait déjà le travail (un chip gris est un Tag, même s'il affiche une date).
- **Documenter un composant** → `/md-component-doc` (+ `/md-a11y-specs` pour le bloc accessibilité).

---

## 6 · Les 3 règles d'or (jamais négociables)

1. **Aucune valeur en dur** : toute couleur, tout radius, tout espacement vient d'une variable ; tout texte porte un style du fichier.
2. **Composants = instances** : on n'édite jamais un master pour un besoin d'écran, on instancie et on override.
3. **Zéro défaut au pre-flight check** : pas de livraison sans screenshot de contrôle conforme.

Et trois habitudes du fichier :
- Chaque variable porte en description son **token code cible** (`CODE : → token.colorPrimary`) : c'est la passerelle design ↔ dev, ne la supprimez jamais, renseignez-la pour toute nouvelle variable.
- Les **masters vivent dans la zone preview de leur frame de documentation** : toute création/extension met à jour la doc (zone ② « Ajouté en maquette ») et la description native.
- La page 📋 **Sommaire** doit rester à jour : toute création de composant ou d'écran y ajoute sa carte cliquable.

---

## 7 · Dépannage

| Symptôme | Cause / remède |
|---|---|
| `/mcp` ne liste pas figma | Refaire l'étape 2 ; vérifier `claude mcp list`. |
| Outils figma présents mais erreurs d'autorisation | Ré-authentifier via `/mcp` → figma → Authenticate ; vérifier que le compte a l'édition sur le fichier. |
| « Cannot load font Circular » | La police n'est pas disponible pour votre compte (voir Prérequis). |
| « Invalid hyperlink target node » | Il faut charger toutes les pages avant de poser un lien — Claude le sait via md-figma-api ; rappelez-lui de charger ce skill. |
| Erreur en cours d'écriture | Les appels sont **atomiques** : en cas d'erreur, rien n'a été écrit. Relancez simplement la demande. |
| Quota MCP atteint | Quota par siège Figma ; attendre puis reprendre. |
| Claude « invente » des composants | Vérifiez que les skills sont bien installés (étape 3) et exigez `/md-produce-screen` comme point d'entrée. |

---

## 8 · Check-list de fin de session

- [ ] Pre-flight passé (screenshot conforme, zéro valeur en dur, zéro calque au nom par défaut).
- [ ] Nouveaux composants : doc + description native + états complets + carte au Sommaire.
- [ ] Nouvelles variables : ligne `CODE :` en description.
- [ ] Si une correction vous a appris une règle : mettez à jour le skill correspondant (c'est ainsi que le package s'améliore).
