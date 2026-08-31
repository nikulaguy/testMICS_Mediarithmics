# Figma — la source de vérité amont

Ce dossier rassemble tout ce qui concerne la conception : le fichier de design system, les règles
de production, et le mode d'emploi pour produire des maquettes conformes avec Claude Code.

```
figma/
  README.md              ce fichier — le fichier Figma, son contenu, l'accès
  SETUP.md               installation : Claude Code, le MCP Figma, l'aspiration, les skills
  DESKTOP-BRIDGE.md      le second accès à Figma : sans quota, API plugin complète
  skills/                les 23 skills de production + les 14 références RGAA
  variables.json         les 123 variables exportées, avec leur cible de code
  export-variables.js    le script qui régénère variables.json
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

Relevé au 7 août 2026 : **19 pages (dont 2 séparateurs), 46 sets de variantes, 449 composants,
123 variables, 12 styles de texte.**

| Section | Pages |
|---|---|
| Entrée | 📕 Cover · 📋 Sommaire · 🎛️ General Rules |
| Fondations | 🎨 Foundations · 🖼 Icons · 🎼 Layout |
| Composants | 📊 Charts · 🧭 Navigation & Shell · 🔘 Button · 📝 Form Inputs · 🏷 Data Display · 💬 Feedback & Overlays · 📊 Table & Lists |
| Produit | 🖥 Screens · 📋 Audit / Reco |
| Travail | 🤖 Test Skills · 💨 Aspiration |

Commencez par **📋 Sommaire** : chaque composant et chaque écran y a une carte cliquable. C'est la
page qui doit rester à jour, toute création y ajoute la sienne.

### Accès

Le fichier vit dans un **projet connecté** (*connected project*) entre Frontguys et mediarithmics :
les deux organisations éditent le **même** fichier, chacune avec ses propres sièges, jusqu'à la
livraison. Il n'y a donc rien à transmettre ni à resynchroniser pendant la mission.

Lecture : le lien ci-dessus suffit. **Édition** : il faut un siège payant Figma (Professional,
Organization ou Enterprise) et la police **Circular** (LLCircularWeb) disponible pour votre compte,
sinon toute édition de texte échoue avec « Cannot load font ».

### Le passage design → code

Les 123 variables portent leur cible de code dans leur description, sous la forme
`CODE : → token.colorPrimary`. **122 sur 123** la renseignent aujourd'hui — la seule exception est
`showActionMore`, un booléen de propriété de composant rangé par erreur dans Primitives. C'est la
passerelle entre le fichier et [`src/theme/micsTheme.ts`](../src/theme/micsTheme.ts) : ne la
supprimez jamais, renseignez-la sur toute nouvelle variable.

[`variables.json`](variables.json) en est l'export : nom, type, alias, valeur finale et cible de
code, pour les trois collections (Primitives 47, Color 32, Scale 44). Contrairement au fichier
Figma, il se relit en revue et se compare d'une version à l'autre — c'est là que se voit une
dérive entre la maquette et le thème du code.

Pour le régénérer après une modification du fichier, exécutez
[`export-variables.js`](export-variables.js) dans le contexte plugin de Figma (via le MCP
`figma-console`, ou collé dans un plugin de développement) et remplacez le contenu du JSON. Le
script est en lecture seule et signale les variables sans cible de code et les alias cassés.

La table de correspondance composant Figma → composant React est dans
[`ARCHITECTURE.md`](../ARCHITECTURE.md), section 3.

## Travailler à deux organisations, et transmettre

Le projet connecté est en place : **le fichier est édité des deux côtés en même temps**. Trois
conséquences pratiques.

- **On n'est jamais seul dans le fichier.** Relever un identifiant de nœud, une largeur ou un
  nombre de variantes, puis produire une heure plus tard, c'est risquer de travailler sur un état
  périmé. Relire juste avant d'écrire, et se méfier des relevés chiffrés de ce README, qui datent
  de leur dernière vérification.
- **Les skills deviennent le contrat commun.** Ils sont ce qui empêche deux équipes de diverger sur
  les mêmes composants. Une règle apprise en revue et non écrite se perd deux fois plus vite à
  deux.
- **Chacun paie ses sièges**, et c'est le plan de l'organisation **hôte** qui détermine les
  fonctionnalités disponibles dans le projet connecté.

À la livraison, le fichier reste chez l'hôte du projet connecté. S'il doit changer de mains, la
voie propre est de **partager le lien** et de laisser le destinataire faire **Dupliquer dans ses
brouillons** : la copie est intégrale, elle emporte variables, composants et bibliothèques liées.

**Le dépôt ne versionne plus de `.fig`.** Un export local est une photographie : il périme dès la
première modification en ligne, git ne sait ni le lire ni le fusionner, et chaque remplacement
ajoutait quatre mégaoctets à l'historique. Il ne remplaçait pas non plus
[`variables.json`](variables.json), qui lui se relit en revue et se compare d'une version à
l'autre. L'export `.fig` reste un dernier recours, quand l'accès Figma n'est pas possible : lire
alors la section suivante avant d'exporter.

### « Some content didn't import, could be due to restricted access »

Message affiché quand quelqu'un importe un `.fig` exporté d'ici. Il ne parle **pas** des polices :
il signale que le fichier référence du contenu **hébergé dans un autre fichier Figma** — composant,
style ou variable venu d'une bibliothèque publiée ailleurs. Un `.fig` n'embarque pas ces
références ; il ne garde que le lien, et le lien tombe chez qui n'a pas accès à la bibliothèque
d'origine.

Le fichier n'a plus aucune référence de ce type — deux styles de peinture hérités d'une
bibliothèque externe traînaient sur la page 📊 Charts, ils ont été détachés. **Avant chaque export,
relancer le contrôle** (via le MCP `figma-console`, ou collé dans un plugin de développement) :

```js
await figma.loadAllPagesAsync();
const distants = new Set(); const vus = new Set();
for (const page of figma.root.children)
  for (const node of page.findAll(function () { return true; })) {
    for (const k of ['fillStyleId','strokeStyleId','textStyleId','effectStyleId','gridStyleId'])
      if (k in node && node[k] && !vus.has(node[k])) { vus.add(node[k]);
        const s = await figma.getStyleByIdAsync(node[k]);
        if (s && s.remote) distants.add('style · ' + s.name); }
    if (node.type === 'INSTANCE') { const m = await node.getMainComponentAsync();
      if (!m) distants.add('composant introuvable · ' + node.name);
      else if (m.remote) distants.add('composant · ' + m.name); }
    if (node.boundVariables) for (const k of Object.keys(node.boundVariables)) {
      const b = node.boundVariables[k];
      for (const x of (Array.isArray(b) ? b : [b])) if (x && x.id && !vus.has(x.id)) { vus.add(x.id);
        const v = await figma.variables.getVariableByIdAsync(x.id);
        if (v && v.remote) distants.add('variable · ' + v.name); } }
  }
return [...distants];   // doit renvoyer []
```

Ce qui **n'est pas** couvert par ce message, et qu'il ne faut pas confondre :

- **La police Circular.** Elle est licenciée et n'est jamais embarquée dans un `.fig`. Chez qui ne
  l'a pas, les textes se rendent dans une police de repli et l'édition échoue avec « Cannot load
  font ». Symptôme différent, cause différente.
- **Les images.** Elles sont embarquées dans le `.fig`, elles ne sont pas concernées.

## Produire une maquette

Une fois [`SETUP.md`](SETUP.md) suivi, il n'y a qu'un point d'entrée :

```bash
claude "/md-produce-screen Écran de liste des Creatives, avec recherche, filtres par statut et pagination. Fichier : https://www.figma.com/design/OnvlU9azeM4rffD83XnEGI/"
```

Claude enchaîne seul : vocabulaire métier, choix du template parmi les 9, production en instances,
puis *pre-flight check* — screenshot et auto-contrôle, zéro défaut exigé avant de rendre la main.
Les autres skills se chargent d'eux-mêmes selon le besoin.

## Maintenir les skills — la partie qu'on oublie

Un skill est une **photographie du fichier à un instant donné**. Il cite des identifiants de nœuds,
des noms de variantes, des largeurs, des règles. Le jour où le fichier bouge et que le skill ne
bouge pas, Claude produit avec application quelque chose de faux — et il le produit vite, donc
l'erreur se répand plus vite qu'avant.

C'est le seul vrai coût d'entretien du dispositif, et il est faible : quelques lignes de texte à
chaque évolution. Mais il n'est pas optionnel.

### Quand mettre un skill à jour

| Ce qui change dans le fichier | Ce qu'il faut toucher |
|---|---|
| Un composant créé | Sa fiche dans le skill de sa famille (`md-data-display`, `md-forms`, `md-navigation`, `md-overlays`, `md-charts`), la description native, le Sommaire |
| Une variante ou une prop ajoutée | La fiche du composant : variantes, props, et la règle d'usage si elle change |
| Un composant renommé ou supprimé | Toutes les mentions — un `grep` sur l'ancien nom dans `skills/` |
| Une variable ajoutée | Sa ligne `CODE :`, puis régénérer [`variables.json`](variables.json) |
| Une règle d'écran tranchée en revue | Le skill du template concerné, ou `md-ds-rules` si elle vaut partout |
| Un piège d'API rencontré | `md-figma-api`, avec le symptôme ET le remède |

### Le processus, en cinq gestes

1. **Relever le fait, pas l'impression.** Ouvrir le composant et lire ses variantes, ses props, sa
   géométrie. Ne jamais écrire un skill de mémoire : c'est ainsi qu'on se retrouve avec un Tag
   annoncé à 24 de haut alors qu'il en fait 26.
2. **Trouver le bon skill.** Un fait ne va qu'à **un seul** endroit. S'il vaut pour tous les écrans,
   il va dans `md-ds-rules` ; s'il vaut pour une famille, dans le skill de la famille ; s'il vaut
   pour un template, dans ce template. Le répéter aux trois endroits garantit qu'ils divergeront.
3. **Écrire la règle et sa raison.** « Prendre `Size=L` dès qu'il faut une icône » ne se retient
   pas ; « les variantes `Size=M` n'ont pas de nœud icon » se retient, parce qu'on comprend
   pourquoi. Un skill sans le pourquoi se fait contourner à la première contrainte.
4. **Chercher les mentions périmées.** Un renommage touche plusieurs fichiers :

   ```bash
   grep -rn "AncienNom" figma/skills/
   ```

5. **Commiter avec le fait qui l'a déclenché.** Le message dit ce qui a changé dans le fichier, pas
   seulement ce qui a changé dans le texte. C'est ce qui permet, six mois plus tard, de savoir si la
   règle tient encore.

### Le bon moment

**Juste après la correction, pas à la fin du projet.** Une règle apprise en revue et notée le soir
même coûte deux minutes ; la même règle retrouvée trois semaines plus tard coûte une enquête, et
souvent elle est perdue.

Le signal le plus fiable : **si vous corrigez Claude sur le même point une deuxième fois, c'est un
skill qui manque ou qui ment.** Ne corrigez pas une troisième fois — écrivez-le.

## Les trois règles d'or du fichier

1. **Aucune valeur en dur** : toute couleur, tout radius, tout espacement vient d'une variable ;
   tout texte porte un style du fichier.
2. **Composants = instances** : on n'édite jamais un master pour un besoin d'écran, on instancie
   et on surcharge.
3. **Zéro défaut au pre-flight check** : pas de livraison sans screenshot de contrôle conforme.
