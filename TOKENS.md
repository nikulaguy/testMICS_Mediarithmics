# Tokens — aligner `mediarithmics-platform` sur la maquette

Inventaire des tokens de la maquette, leur correspondance avec le code de production, les écarts à
résorber et un découpage en tâches. Deux volets : **couleurs** et **échelle** (radius, espacements,
tailles, bordure, motion, z-index).

| | |
|---|---|
| **Public** | les développeurs front de `mediarithmics-platform` |
| **Cible v5** | `frontend/libs/advanced/src/theme/themes/defaultTheme.ts` — source de vérité du rendu |
| **Legacy** | `frontend/libs/basic/src/style/mics-theme.less` — LESS v3, à décommissionner |
| **Réf. maquette** | page 🎨 Foundations, collections Primitives, Color et Scale |
| **Export lisible** | [`figma/variables.json`](figma/variables.json) — nom, alias, valeur, cible de code |

**Règle d'architecture.** Les **primitives** portent les valeurs et ne sont nommées que par la
couleur (`blue/900`, jamais `primary`). Les **sémantiques** ne font qu'aliaser une primitive :
aucune valeur hexadécimale en dur, nulle part ailleurs qu'au module de primitives.

**Ce qui fait foi.** Pour les valeurs de la maquette : ce document et `variables.json`, tous deux
tirés du fichier Figma. Pour la colonne « équivalent code » : l'audit du dépôt de production, relevé
au moment de la rédaction — la revérifier avant d'ouvrir les tickets, la production a pu bouger.

| Statut | Ce que ça veut dire |
|---|---|
| **ISO** | déjà aligné, rien à faire |
| **À TOKENISER** | la valeur existe en dur dans le code, la sortir en token |
| **À DÉCLARER** | le code tourne sur un défaut implicite de la librairie, l'expliciter |
| **NOUVEAU** | n'existe pas en production |
| **ÉCART** | divergence réelle à arbitrer, détaillée plus bas |

---

# 1. Couleurs

## Primitives — 47 valeurs, source unique

À implémenter en variables CSS ou en objet de thème unique (`--mics-blue-900`). Les alphas sont
portés par `black/*` et `white/*`, pas recalculés à l'usage.

| Primitive | Valeur |
|---|---|
| `black/25` | `#000000 25 %` |
| `black/43` | `#000000 43 %` |
| `black/45` | `#000000 45 %` |
| `black/65` | `#000000 65 %` |
| `black/78` | `#000000 78 %` |
|  |  |
| `blue/100` | `#e8f7fc` |
| `blue/200` | `#c5efff` |
| `blue/250` | `#7ae7ff` |
| `blue/300` | `#6ed5f7` |
| `blue/500` | `#4087bf` |
| `blue/700` | `#005e91` |
| `blue/900` | `#003056` |
| `blue/950` | `#002c4f` |
| `blue/main` | `#00a1df` |
|  |  |
| `green/100` | `#d3ebdd` |
| `green/300` | `#64d19b` |
| `green/700` | `#005e3f` |
| `green/900` | `#00120d` |
| `green/main` | `#00ab67` |
|  |  |
| `grey/100` | `#f5f8f9` |
| `grey/200` | `#f0f3f5` |
| `grey/250` | `#ebeff2` |
| `grey/300` | `#e0e1e1` |
| `grey/400` | `#d3dbe1` |
| `grey/500` | `#b8c3cc` |
| `grey/600` | `#8795a1` |
| `grey/700` | `#606f7b` |
| `grey/800` | `#3d4952` |
|  |  |
| `neutral/400` | `#d9d9d9` |
|  |  |
| `orange/100` | `#fff5e6` |
| `orange/300` | `#ffcb8c` |
| `orange/700` | `#b04300` |
| `orange/900` | `#631f00` |
| `orange/main` | `#fd7c12` |
|  |  |
| `purple/100` | `#f5f0ff` |
| `purple/300` | `#beaeeb` |
| `purple/700` | `#20195e` |
| `purple/900` | `#110f38` |
| `purple/main` | `#513fab` |
|  |  |
| `red/100` | `#fff2f0` |
| `red/300` | `#ffbab5` |
| `red/700` | `#9e2e35` |
| `red/900` | `#52131b` |
| `red/main` | `#eb5c5d` |
| `red/vivid` | `#fc3f48` |
|  |  |
| `white` | `#ffffff` |
| `white/25` | `#ffffff 25 %` |

## Sémantiques — correspondance avec le code

| Token maquette | Alias | Équivalent code | Statut |
|---|---|---|---|
| `primary` | blue/main `#00a1df` | `token.colorPrimary` | ISO |
| `info` | blue/900 `#003056` | `token.colorInfo` | ISO |
| `success` | green/main `#00ab67` | `token.colorSuccess` | ISO |
| `warning` | orange/main `#fd7c12` | `token.colorWarning` | ISO |
| `error` | red/vivid `#fc3f48` | `token.colorError` | ISO |
| `text/normal` | black/65 | `token.colorText` rgba(0,0,0,.65) | ISO |
| `text/lighter` | black/43 | `token.colorTextSecondary` rgba(0,0,0,.43) | ISO |
| `text/darker` | black/78 | LESS `@heading-color` fade(#000, 85%) — v5 muet | **ÉCART** |
| `text/lightest` | black/25 | `colorTextDisabled` (défaut AntD, .25) | ISO |
| `text/on-dark` | white | `#fff` en dur un peu partout | À TOKENISER |
| `text/on-dark-disabled` | white/25 | — | NOUVEAU |
| `bg/container` | white | `token.colorBgContainer` | ISO |
| `bg/window` | grey/200 `#f0f3f5` | `colorBgLayout` `#f0f3f5` ⊕ doublon `layoutContentBackground` `#f1f1f1` | **ÉCART** |
| `bg/subtle` | grey/100 `#f5f8f9` | valeurs en dur éparses | À TOKENISER |
| `bg/selected` | blue/100 `#e8f7fc` | `Select.optionSelectedBg` `#879296` (hors palette) | **ÉCART** |
| `bg/hover` | grey/250 `#ebeff2` | `Table.rowHoverBg` + `customColors.hoverColor` | ISO |
| `bg/tooltip` | blue/950 `#002c4f` | `Tooltip.colorBgSpotlight` + `customColors.tooltipBg` | ISO |
| `bg/scrim` | black/45 | masque AntD par défaut rgba(0,0,0,.45) — implicite | À TOKENISER |
| `border/default` | grey/400 `#d3dbe1` | `token.colorBorderSecondary` (mapping croisé, écart 2) | **ÉCART** |
| `border/input` | grey/300 `#e0e1e1` | `token.colorBorder` (mapping croisé, écart 2) | **ÉCART** |
| `focus/ring` | blue/250 `#7ae7ff` | outline de `:focus-visible` — `colorPrimaryBorder` dérivé par AntD, jamais déclaré | À DÉCLARER |
| `link/default` | blue/900 `#003056` | `colorLink` jamais défini en v5 — hérite du primary | À TOKENISER |
| `link/hover` | blue/700 `#005e91` | — | NOUVEAU |
| `link/on-dark` | blue/200 `#c5efff` | en dur dans les styles (breadcrumb sur navy) | À TOKENISER |
| `chart/1` … `chart/7` | blue/main · orange/main · green/main · purple/main · red/main · blue/900 · neutral/400 | `customColors.chartColors[0..6]` — ordre identique | ISO |
| `accent/red` | red/main `#eb5c5d` | = `chartColors[4]`, usages hors graphiques | ISO |
| `accent/purple` | purple/main `#513fab` | = `chartColors[3]`, usages hors graphiques | ISO |

## Écarts et décisions

1. **Deux systèmes en doublon.** Le LESS v3 inverse `primary` et `info` (`@primary-color = #003056`).
   Le thème v5 fait foi : primary `#00a1df`, info `#003056`. Le legacy est à décommissionner (T5).
2. **Bordures : mapping croisé de NOMS, pas de valeurs.** `border/default` (`#d3dbe1`) correspond à
   `colorBorderSecondary`, et `border/input` (`#e0e1e1`) à `colorBorder`. Garder les valeurs, câbler
   la correspondance telle quelle — **ne surtout pas échanger les hexadécimaux**.
3. **Liens.** `colorLink` n'est jamais défini dans le thème v5 : il hérite donc du primary (cyan), et
   le rendu navy actuel ne tient que par le legacy. Déclarer explicitement `colorLink #003056`
   (blue/900) et `colorLinkHover #005e91` (blue/700).
4. **Liens sur fond sombre.** `#c5efff` est en dur dans les styles (breadcrumb sur Actionbar navy)
   → tokens `link/on-dark` (blue/200) et `text/on-dark-disabled` (white/25).
5. **Fond de page.** Doublon en production entre `colorBgLayout #f0f3f5` et
   `customColors.layoutContentBackground #f1f1f1`. La maquette retient `#f0f3f5` (grey/200) —
   supprimer l'autre.
6. **Select.** `optionSelectedBg #879296` est hors palette, et illisible. La maquette utilise
   `bg/selected #e8f7fc` (blue/100) — corriger le thème Select.
7. **Titres.** LESS `@heading-color = fade(#000, 85%)` ; la maquette retient black/78. Aligner le
   code sur 78 % (`text/darker`), le thème v5 ne définissant rien aujourd'hui.
8. **Breadcrumb.** Le thème v5 met les niveaux en gris (43 % / 65 %) ; la maquette les traite en
   liens navy (`link/default`), état validé sur les écrans clean. Mettre à jour le thème Breadcrumb
   (`linkColor #003056`, hover `#005e91`).
9. **Tokens de production orphelins**, sans aucun usage dans la maquette : `customColors.infoColor
   #00a1df` (nom trompeur, c'est le primary), `highlightColor #862f2f`, `loadingColor #eeeeee`,
   `secondaryColor #373737`, `colorInfoBg #e6f4ff`, `colorInfoBorder #91caff`. À statuer avec le
   produit avant décommission. À noter : `normalColor #d9d9d9` est la primitive neutral/400
   (chart/7), elle n'est pas orpheline.
10. **Scrim.** Le voile des overlays repose sur le masque AntD par défaut rgba(0,0,0,.45). Le
    déclarer en token `bg/scrim` (black/45) pour ne plus dépendre d'un défaut de librairie.

## Découpage en tâches

| | Charge | Tâche |
|---|---|---|
| **T1** | M | Créer le module de primitives : 47 variables uniques (`--mics-blue-900`…), nomenclature couleur seule, alphas dans `black/*` et `white/*`. Aucune valeur dupliquée ailleurs. |
| **T2** | M | Recâbler `defaultTheme.ts` sur les primitives selon le tableau de correspondance. Plus aucun hexadécimal littéral dans le thème. |
| **T3** | S | Ajouter les tokens absents du code : `bg/subtle`, `bg/selected`, `bg/scrim`, `link/default`, `link/hover`, `link/on-dark`, `text/on-dark`, `text/on-dark-disabled`, `text/darker`. |
| **T4** | M | Résorber les écarts 2, 5, 6, 7 et 8. |
| **T5** | L | Décommissionner le LESS v3 et remplacer les hexadécimaux en dur des `.less` / `.tsx` par les variables (l'audit initial comptait 28 fichiers LESS avec des hex bruts, et des re-typages de `#00a1df` / `#003056`). |
| **T6** | S | Statuer sur les orphelins de l'écart 9 avec le produit, puis supprimer ou mapper. |

**Critère d'acceptance.** Zéro hexadécimal littéral hors du module de primitives, et rendu des
écrans identique au pixel — sauf les écarts 6, 7 et 8, assumés ci-dessus.

---

# 2. Échelle — radius, espacements, tailles, z-index, motion

Même architecture cible : une échelle unique implémentée en tokens, plus aucun `px` littéral dans
les composants. En production, seuls le radius, les hauteurs d'input, le z-index et la motion sont
tokenisés (en LESS) ; l'audit initial comptait **478 `px` bruts** dans les `.less` et `.tsx`.

## Radius

| Token maquette | Valeur | Équivalent code | Statut |
|---|---|---|---|
| `radius/sm` | 2 | LESS `@border-radius-sm` 2px | ISO |
| `radius/base` | 3 | `token.borderRadius` 3 + `Pagination.borderRadius` 3 + LESS `@border-radius-base` | ISO |
| `radius/card` | 6 | non déclaré — cartes et modales de la maquette ; à poser en `token.borderRadiusLG: 6` | À DÉCLARER |
| `radius/max` | 100 | pills (Tag arrondi plein) — valeurs en dur éparses | À TOKENISER |

## Espacements

Échelle : **2 · 4 · 6 · 7 · 8 · 10 · 12 · 15 · 16 · 20 · 24 · 35 · 60 · 96**. Aucune échelle
d'espacement centralisée n'existe en production : tout est à tokeniser. Les cinq alias d'usage
ci-dessous nomment les cas récurrents.

| Token maquette | Valeur | Équivalent code | Statut |
|---|---|---|---|
| `space/form-item-mb` | 24 | LESS `@form-item-margin-bottom` 24 (défaut AntD) | ISO |
| `space/input-pad-h` | 7 | padding horizontal interne des champs — à expliciter (`Input.paddingInline`) | À DÉCLARER |
| `space/7` | 7 | padding horizontal des contrôles compacts : bouton taille M et Input. Même valeur que l'alias ci-dessus, sortie dans la rampe générique | À TOKENISER |
| `space/card-pad` | 20 | padding horizontal des cartes — en dur en production | À TOKENISER |
| `space/card-pad-v` | 15 | padding vertical des cartes — en dur en production | À TOKENISER |
| `space/card-title-gap` | 10 | écart titre / contenu de carte — en dur en production | À TOKENISER |
| `space/35` | 35 | padding standard du contenu de page (`main p35`) — en dur en production | À TOKENISER |
| `space/2` … `space/96` | échelle | remplacer les `px` bruts au fil des composants (T2) | À TOKENISER |

## Tailles

| Token maquette | Valeur | Équivalent code | Statut |
|---|---|---|---|
| `size/control` | 32 | `controlHeight` AntD (défaut implicite 32) — à déclarer explicitement | À DÉCLARER |
| `size/control-sm` | 24 | `controlHeightSM` — AntD le dérivait de `controlHeight × 0,75` ; mesuré à 24 dans le DOM | À DÉCLARER |
| `size/header` | 40 | `Layout.headerHeight` 40 | ISO |
| `size/input-base` | 40 | LESS `@input-height-base` 40px | ISO |
| `size/input-lg` | 32 | LESS `@input-height-lg` 32px — ⚠ « lg » < « base », nommage hérité incohérent (écart 1) | **ÉCART** |
| `size/input-sm` | 22 | LESS `@input-height-sm` 22px | ISO |
| `size/badge` | 20 | hauteur de la pastille Badge count — en dur en production | À TOKENISER |
| `size/checkbox` | 16 | défaut AntD (`controlInteractiveSize`) | ISO |
| `size/icon` | 14 | icône contextuelle dans les champs — en dur en production | À TOKENISER |
| `size/icon-lg` | 16 | icône de navigation et de menus — en dur en production | À TOKENISER |
| `size/menu-item` | 32 | hauteur d'item SideMenu / Dropdown — en dur en production | À TOKENISER |
| `size/row` | 44 | hauteur de ligne de table (padding + contenu) — implicite en production | À TOKENISER |
| `size/row-header` | 44 | hauteur d'en-tête de table — implicite en production | À TOKENISER |
| `size/tag` | 26 | hauteur du Tag, relevée sur le composant (la valeur 24 annoncée jusqu'ici était fausse) — en dur en production | À TOKENISER |
| `size/target-min` | 20 | plus petite cible de pointage acceptable — ne suit **pas** la taille du glyphe : la croix du Tag fait 8, sa cible 20 | NOUVEAU |

## Bordure, motion, z-index

| Token maquette | Valeur | Équivalent code | Statut |
|---|---|---|---|
| `border/width` | 1 | `lineWidth` AntD (défaut 1) ; override `Menu.lineWidth 0` conservé | ISO |
| `border/focus-width` | 3 | épaisseur de l'outline `:focus-visible` (3 px, offset 1 px) | À DÉCLARER |
| `motion/fast-ms` | 100 | LESS animations .1s | ISO |
| `motion/base-ms` | 200 | LESS animations .2s | ISO |
| `motion/slow-ms` | 300 | LESS animations .3s | ISO |
| `z/modal` | 1000 | `@zindex-modal` 1000 (et modal-mask) | ISO |
| `z/popover` | 1030 | `@zindex-popover` 1030 | ISO |
| `z/dropdown` | 1050 | `@zindex-dropdown` 1050 (et picker) | ISO |
| `z/tooltip` | 1060 | `@zindex-tooltip` 1060 | ISO |

Tokens de code sans équivalent en maquette, à conserver tels quels : `@zindex-notification` /
`@zindex-message` 1010, `@zindex-affix` / `@zindex-back-top` 10.

## Écarts et hors périmètre

1. **Nommage des hauteurs d'input, hérité du LESS.** « lg » (32) est plus petit que « base » (40),
   parce que la base historique est le champ de formulaire haut. Recommandation : renommer des deux
   côtés en `size/input-40` · `size/input-32` · `size/input-22` (ou default / dense / compact) lors
   de T1 — la maquette suivra.
2. **`radius/card` (6) n'existe pas en production** : les cartes héritent du radius 3 ou de valeurs
   en dur. La maquette généralise 6 pour cartes, panneaux et modales → déclarer `borderRadiusLG: 6`
   et l'utiliser.
3. **Breakpoints** `@screen-xs`…`xl` (480–1600) : hors périmètre maquette, qui ne traite que le
   desktop 1496. Les conserver côté code, ne pas les créer en Figma.
4. **Typographie.** `fontSize` 12 / `fontSizeLG` 14 / `lineHeight` 1.5 sont portés par les styles de
   texte Figma (Body/Book, Body/Large…), pas par des variables. Ticket dédié.
5. **Tokens de composant v5** (Switch 22/44/18, Badge `dotSize` 8, Modal `titleFontSize` 14…) :
   cohérents avec la maquette, à laisser en overrides de composant — ne pas les remonter dans
   l'échelle globale.
6. **Anomalie maquette.** Une variable booléenne `showActionMore` traîne dans la collection
   Primitives, résidu de construction. À supprimer côté Figma après vérification d'usage — aucune
   action côté code.

## Découpage en tâches

| | Charge | Tâche |
|---|---|---|
| **T1** | S | Déclarer l'échelle en tokens (`--mics-radius-*`, `--mics-space-*`, `--mics-size-*`, `--mics-z-*`, `--mics-motion-*`), en y incluant le renommage `input-40/32/22` (écart 1). |
| **T2** | L | Remplacer les `px` bruts des `.less` / `.tsx` par l'échelle (audit initial : 478 occurrences), composant par composant, en commençant par les cartes, les tables et les formulaires. |
| **T3** | S | Compléter `defaultTheme.ts` : `controlHeight` 32, `borderRadiusLG` 6, `Input.paddingInline` 7. Plus aucun défaut implicite porteur de rendu. |
| **T4** | S | Vérifier l'usage puis supprimer la variable parasite `showActionMore` côté Figma. |

**Critère d'acceptance.** Zéro `px` littéral hors du module d'échelle dans les composants traités,
et rendu inchangé au pixel — le renommage des inputs et `borderRadiusLG: 6` sont des clarifications,
pas des changements visuels, sauf pour les cartes qui passeraient de 3 à 6 là où la production
divergeait déjà de la maquette.

---

# 3. Une implémentation de référence existe déjà

Ce dépôt a fait le travail de T1, T2 et T3 pour son propre usage :
[`src/theme/micsTheme.ts`](src/theme/micsTheme.ts) déclare les primitives, les sémantiques qui les
aliasent et l'échelle, puis les injecte dans le `ConfigProvider` d'Ant Design. Le module se lit en
une fois et se copie — il n'y a pas de dépendance à Vite ni au reste du dépôt.

Deux réserves avant de le reprendre tel quel :

- Il couvre ce dont le prototype avait besoin, **pas les 128 variables** : la collection Scale porte
  des alias legacy (`space/card-*`, `size/input-*`) que le prototype n'utilise pas.
- **`zModal` y vaut 1200, contre 1000 dans la maquette et en production.** C'est un écart assumé du
  prototype : à 1000, un overlay passerait sous les dropdowns (1050) et les tooltips (1060) d'AntD,
  rendus dans un portail attaché au `body`. À ne pas reprendre sans avoir tranché la question du
  portail.

---

# Maintenir ce document

Il double la page **📋 Audit / Reco** du fichier Figma, qui porte les mêmes tableaux en version
présentable. **C'est ce fichier-ci qui fait foi** : il se relit en revue, se compare d'une version à
l'autre et se commente en ligne — ce qu'une frame Figma ne sait pas faire.

Quand une variable est créée, renommée ou supprimée dans la maquette :

1. Renseigner sa description `CODE : → …` dans Figma, sans quoi la passerelle vers le code est
   rompue.
2. Régénérer [`figma/variables.json`](figma/variables.json) avec
   [`figma/export-variables.js`](figma/export-variables.js).
3. Ajouter ou corriger sa ligne ici, avec son statut.
4. Reporter dans la frame Figma correspondante, ou la remplacer par un renvoi vers ce fichier.

Le processus complet de mise à jour de la documentation amont est décrit dans
[`figma/README.md`](figma/README.md), section « Maintenir les skills ».
