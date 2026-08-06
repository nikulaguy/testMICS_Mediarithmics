---
name: md-ds-rules
description: Fondation du DS mediarithmics (fichier « MICS DS — Rebuild »). 3 règles d'or, variables, typographie, nomenclature, coque, matrice des templates. Charger AVANT toute production.
---

# md-ds-rules — Règles fondamentales du DS MICS

Ces règles sont agnostiques : elles valent que vous construisiez à la main dans Figma ou via un agent. Les IDs de nœuds (ex. `17:26`) sont des aides de ciblage dans le fichier `Mediarithmics - MICS DS — Rebuild` (fileKey `OnvlU9azeM4rffD83XnEGI`) ; le nom du composant fait foi si un ID a bougé.

## Les 3 règles d'or

1. **Aucune valeur en dur.** Couleur, spacing, radius, font : tout est lié à une variable ou un style du fichier. Jamais de hex libre, jamais de nombre libre, jamais de calque vide pour espacer (padding/gap uniquement).
   **La règle vaut aussi pour la documentation.** Une doc qui écrit « padding 8 » apprend à recopier 8 ; une doc qui écrit `space/8` apprend à chercher le token. On nomme la variable, pas sa valeur — y compris dans les skills. Deux exceptions, à signaler comme telles : les conventions de canevas (largeur d'écran 1496, gap de 120 entre écrans) et les valeurs héritées qu'on n'a pas tokenisées, qui se citent avec la mention « hors échelle ».
2. **Composants = instances.** Jamais reconstruits à la main. Toujours instanciés depuis la librairie du fichier ; on swappe les variantes et on override les textes. Si aucun composant ne convient : voir /md-new-component, on n'improvise pas.
3. **Zéro défaut au pre-flight check.** Après production, prendre un screenshot de ce qui a été produit, le vérifier visuellement, et corriger soi-même ses erreurs (alignement, débordement, composant manquant, couleur hors palette) avant de livrer.

## Typographie

Police unique : **Circular** (styles de fonte : Book et Medium — pas de Regular/Bold).
Toujours passer par les styles de texte du fichier :

| Style | Usage |
|---|---|
| Headline | Titre de page / valeur forte |
| Headline 3 | Titre de bloc |
| Headline 4 | Titre de ressource, sous-bloc |
| Subtitle 1 / Subtitle 2 | Sous-titres, titres de section (Subtitle 2 en capitales pour les sections de board) |
| Body/Book | Texte courant |
| Body/Large | Texte 14 sans capitales (Link L) — ⚠ Subtitle 2 met tout en capitales, ne pas l'utiliser pour du texte courant |
| Body/Medium | Texte courant accentué, noms de props |
| Caption/Main | Méta, légendes, axes de graphique |
| Caption/Medium | Labels, chips, en-têtes de colonnes |

## Variables — carte de référence

### Architecture des variables (règle absolue)
- **Primitives** = uniquement des noms de couleur (`blue/900`, `grey/250`, `red/vivid`, `black/65`, `neutral/400`, `white`) — jamais un nom d'usage.
- **Sémantiques (collection Color)** = uniquement des **alias vers une primitive** — jamais une valeur hexa en dur. Une nouvelle sémantique sans primitive correspondante ⇒ créer la primitive d'abord.
- Les alphas vivent dans les primitives (`black/78|65|43|25`) : les text/* (black/78…25) et bg/scrim (black/45) les aliasent.
- **Chaque variable porte en description son token code cible** (ligne `CODE : → token.colorPrimary` / `--mics-space-24`…) : lire la description avant tout arbitrage design↔dev ; toute nouvelle variable doit recevoir la sienne. Le mapping complet vit dans les tickets de la page 📋 Audit.

### Couleurs (collection Color)
| Token | Usage |
|---|---|
| primary | CTA, liens actifs, onglets actifs (cyan #00a1df) |
| info | Navy profond #003056 (fonds de doc, header sombre) |
| text/darker · text/normal · text/lighter · text/lightest | Titres · courant · secondaire · placeholder (alias black/78·65·43·25) |
| text/on-dark | Texte sur fond sombre ou primary |
| text/on-dark-disabled | Texte désactivé sur fond sombre (alias white/25) |
| link/default · link/hover · link/on-dark | Liens : navy (blue/900) · hover (blue/700) · sur fond sombre (blue/200) — voir le composant Link |
| bg/container | Fond de carte / panneau (blanc) |
| bg/window | Fond de page (gris) |
| bg/subtle | Fond de section, zébrage |
| bg/selected · bg/hover | Ligne sélectionnée · survol |
| bg/tooltip | Navy tooltip (alias blue/950) |
| **bg/scrim** | Voile sous les overlays (alias black/45) — TOUS les calques `scrim` le portent |
| border/default · border/input | Bordures générales · bordures de champs |
| success · error · warning | États fonctionnels |
| chart/1 … chart/7 | Séries de graphiques, dans cet ordre strict (voir /md-charts) |

### Échelle (collection Scale)
| Token | Valeur | Usage principal |
|---|---|---|
| space/2…space/96 | 2,4,6,8,10,12,15,16,20,24,35,60,96 | Tous les gaps et paddings |
| space/35 | 35 | **Padding standard de `content`** |
| radius/sm · radius/base · radius/card | 2 · 3 · 6 | Tags · contrôles · cartes/overlays |
| border/width | 1 | Épaisseur standard |

La collection Scale contient aussi des alias legacy (`space/card-pad`, `size/input-*`…) : ne pas les utiliser dans de nouvelles maquettes — toujours les tokens `space/N` génériques.

## Nomenclature (obligatoire, vérifiée au pre-flight)

- Composant : Title Case « Famille / Nom » — ex. `Dropdown / Nav Item`, `Table / Header Row`.
- Propriété : Sentence case — ex. `Show icon`, `Show 3rd action`. Les acronymes gardent leur casse (`Installation IDs`).
- Valeur de variante : Sentence case — ex. `Has alerts`, `Validated + Current`. Les numériques restent numériques.
- Calque : camelCase — ex. `valueRow`, `shell-row` accepté pour la coque. **Jamais** de nom par défaut (`Frame 12`, `Rectangle Copy`).
- Slot : Sentence case — ex. `Content`, `Tabs`.
- Icône : `icon/kebab-case` (24×24, calque unique `vector`) ; logo de marque : `logo/kebab-case` (32×32, bitmap accepté, exception documentée).

## Coque commune (constantes)

Largeur de référence d'un écran : **1496 px**. La coque est fluide, seules ces valeurs sont fixes :

| Élément | Composant | Constante |
|---|---|---|
| TopBar | `TopBar` (17:26) | hauteur `size/header`, pleine largeur, **toujours premier enfant** |
| SideMenu | `SideMenu` (19:32) | l 200 fixe, hauteur FILL |
| Actionbar | `Actionbar` (245:4156) | hauteur `actionBarHeight` (52) ; dans `main` s'il y a un SideMenu, pleine largeur sinon |
| Settings Bar | `Settings Bar` (309:161) | hauteur `size/row`, pleine largeur |
| step-nav / subnav | — | l 200 |
| content | — | padding `space/35`, gap `space/16` (données) ou `space/35` (réglages/tunnels) |
| Drawer | `Overlay` Mode=Drawer | l 520, pleine hauteur, collé à droite |
| Modale | `Overlay` Mode=Modal | 960 × 692, centrée ; scrim = `bg/scrim` |

## Matrice des templates (aiguillage)

Avant de choisir un template, s'assurer qu'on construit bien une **page** : /md-choose-surface tranche entre page, modale, drawer et composant non modal.

Tout écran du produit se rattache à **un et un seul** de ces templates (page 🎼 Layout, section « ✅ Templates — Clean », pour les références visuelles) :

| # | Template | Skill | SideMenu | Actionbar | Autre navigation |
|---|---|---|---|---|---|
| 1 | Liste | /md-template-list | oui | oui, dans main | Tab Bar |
| 2 | Détail de ressource | /md-template-detail | oui | oui, dans main | Tab Bar |
| 3 | Board | /md-template-board | oui | **aucune** | Tab Bar + Board Action Bar |
| 4 | Formulaire d'édition | /md-template-edition | **non** | pleine largeur, Type=Edition | step-nav 200 |
| 5 | Choix du type | /md-template-selection | **non** | pleine largeur, Type=Light | aucune |
| 6 | Settings | /md-template-settings | **non** | aucune (Settings Bar) | subnav 200 |
| 7 | État vide | — état du template hôte | hérité | hérité | hérité |
| 8 | Overlay Drawer | /md-template-overlay | hérité | hérité | aucune |
| 9 | Overlay Modale | /md-template-overlay | hérité | hérité | aucune |
| 10 | Analytics requêtable | /md-template-analytics | oui | **Analytics Action Bar** | aucune |
| 11 | Fiche 3 colonnes (lookup) | /md-template-lookup | oui | oui, dans main | rail de timeline |

L'« État vide » n'est pas un template : c'est le composant `Empty State` (285:151) centré sur les deux axes dans la coque du template hôte, panel blanc retiré.

## Passerelle vers le développement (règle des trois catégories)

Le produit est bâti sur **Ant Design v5** : le DS ne le remplace pas, il l'encadre. Pour chaque
composant de la maquette, un seul critère décide de son sort côté code : *AntD a-t-il la même
anatomie et les mêmes états ?*

| Réponse | Traitement | Exemples |
|---|---|---|
| Oui | **Thémé** : AntD tel quel, habillé par les tokens | Button, Input, Select, Checkbox, Table, Tabs, Pagination, DatePicker |
| Presque | **Enveloppé** : composant maison qui rend l'AntD en dessous, avec l'API du DS | Tag, Empty State |
| Non | **Construit** : composant maison | Link, buttonIcon, Dropdown / Container, Badge Count, TopBar, SideMenu, Search / Modal |

Deux conséquences à respecter en maquette comme en dev :
- Un composant Figma doit exister comme composant côté code, dans l'une des trois catégories. Une composition d'écran répétée deux fois est un composant qui s'ignore.
- Les écrans n'importent jamais `antd` directement : tout passe par la couche DS, sinon chaque décision de design se paie en refactoring dans tout le code.

## Règles d'interface transverses (source : page 🎛️ General Rules)
- **Actions de page vs actions de tableau** : les actions qui portent sur la page ou la ressource (New …, Export, Edit, menu ⋮) vivent dans l'**Actionbar** ; la **Table / Toolbar** ne porte que ce qui agit sur le tableau (recherche, filtres, Edit view, actions de masse). Test : si l'action garde du sens quand le tableau est vide, elle est de page.

### Actions et validation
- Actions de validation : **bas-droite du contenu** (secondaire à gauche du primaire — le primaire est la dernière chose que l'œil rencontre). Un seul bouton Primary par zone, jamais deux côte à côte.
- **Jamais de séparateur entre les boutons** : les espaces suffisent à hiérarchiser.
- Jusqu'à 3 actions dans un pied d'overlay (ex. Close / Save and activate later / Save and activate) ; au-delà, repenser le parcours.
- Une action **destructive** ne prend jamais la place du primaire : secondaire ou isolée à gauche, et elle demande confirmation.
- Sur un écran d'édition, l'action principale vit dans l'**Actionbar en haut** (Save), pas en bas.
- Une action impossible est **désactivée, pas masquée** (sauf si elle n'a aucun sens dans le contexte).
- Pendant une soumission : bouton en Loading, formulaire non re-soumissible, focus conservé.
- Le libellé décrit l'action (« Save and activate »), jamais « OK » seul quand l'effet est ambigu.

### Surfaces superposées
- Un seul overlay actif à la fois, jamais deux empilés. Modale = tâche courte qui interrompt ; Drawer = contenu long ou consultation en parallèle, page de fond visible.
- Structure imposée : header (titre + croix) / contenu / pied d'actions ; padding interne 24.
- Fermeture par la croix, l'action secondaire, le clic sur le voile **et** la touche Échap ; le focus revient au déclencheur.
- Le contenu défile **à l'intérieur** de la surface ; header et pied restent fixes.

### Contenu et états
- Toujours prévoir 3 états : **vide** (`Empty State`, message qui explique l'absence de données — pas une erreur), **chargement** (squelette ou `Spin`, avec `aria-busy`, jamais une zone vide sans explication), **erreur** (message explicite + moyen de réessayer — la bordure rouge seule ne suffit pas).
- Padding de contenu d'une carte ou d'un overlay : 24. Gouttière entre blocs : 16 ou 24. Toujours des tokens Scale.

### Accessibilité (socle non négociable)
- La couleur n'est jamais seule porteuse d'information : doubler par texte, icône ou forme (RGAA 3.1). Contrastes : 4.5:1 texte, 3:1 composants et graphiques (RGAA 3.2/3.3).
- Tout élément interactif est un élément natif (`button`, `a`, `input`) avec un nom accessible explicite, atteignable au clavier, focus visible (RGAA 10.7).
- Icône décorative masquée aux TA (`aria-hidden`) ; icône seule porteuse de sens = nom accessible (RGAA 1.1/1.2).
- Un graphique porteur d'information a une alternative : description ou table de données équivalente.
- La doc a11y d'un composant se produit avec **/md-a11y-specs** et se rattache à un critère RGAA ; la doc complète avec **/md-component-doc**.

### Données de démonstration (maquettes)
- IDs : 8 chiffres (ex. 18280553). Technical names : kebab-case (ex. georgia-pizza-winner-ack). Dates : relatives (« 8 days ago »). Noms de ressources : réalistes et variés, jamais « Lorem » ni « Test 1/2/3 ».
- Le maître reste générique (« Label », « Segment name ») : les données réalistes sont des overrides d'écran.

### Structure des frames (leçons des revues d'écrans)
- **Aucun frame de contenu en hauteur fixe.** Tout wrapper créé (rangée de méta, groupe de textes) est en HUG vertical ; seuls la racine d'écran et les éléments de coque à hauteur constante (TopBar, Actionbar…) sont fixes. Une hauteur figée crée des espaces sans signification dès que le contenu change.
- **Un texte accolé à une icône prend la couleur de l'icône** (et réciproquement) : la paire icône + libellé est UN objet visuel — jamais icône text/normal avec libellé text/lighter.
- Les petits gaps aussi se bindent (space/2, space/4, space/8) : « zéro valeur en dur » n'a pas de seuil.

### Divers
- Le SideMenu ne disparaît que dans les tunnels (Édition, Choix du type) et les réglages (Settings).
- Un élément qui se répète sur plusieurs écrans se composante — on ne duplique pas des groupes.
- Exception de nomenclature : les frames de structure des pages de documentation gardent leur préfixe de zone (`existant/props`, `a11y/Sémantique`, `case/…`, `évo/…`) — c'est un espace de noms, pas un nom de calque produit.

## Icônes et logos

Inventaire complet et règles de choix : **/md-icons**. En bref : 175 icônes `icon/*` (24×24, calque unique `vector`, couleur et taille réglées sur l'instance) + 5 logos `logo/*` (32×32, bitmaps). Jamais de forme dessinée à la main : instancier, ou demander l'ajout au set.
