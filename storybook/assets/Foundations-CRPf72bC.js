import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,n as i,s as a}from"./blocks-C8yODpg3.js";import{t as o}from"./mdx-react-shim-DjgDkGvs.js";import{n as s,t as c}from"./DocTable-CY3zK50_.js";import{Effets as l,Espacements as u,HierarchieDeTexte as d,NiveauxDeSurface as f,RolesDeCouleur as p,RythmeVertical as m,SurvolEtSelection as h,Typographie as g,n as _,t as v}from"./Foundations.stories-DQ_wYJ5U.js";function y(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a,{of:v}),`
`,(0,x.jsx)(t.h1,{id:`fondations`,children:`Fondations`}),`
`,(0,x.jsxs)(t.p,{children:[`Les tokens sont dans la page `,(0,x.jsx)(t.strong,{children:`Tokens`}),` : voici ce qu'ils veulent dire et quand les employer.
Chaque règle ci-dessous vient soit d'un `,(0,x.jsx)(t.strong,{children:`usage relevé dans le produit`}),`, soit d'une `,(0,x.jsx)(t.strong,{children:`règle
générale du web`}),` qui s'applique ici. Les deux sont signalées.`]}),`
`,(0,x.jsxs)(t.p,{children:[`Source de valeurs unique : `,(0,x.jsx)(t.code,{children:`src/theme/micsTheme.ts`}),`. Aucun composant n'écrit un hex, un px ou une
ombre en dur.`]}),`
`,(0,x.jsx)(t.hr,{}),`
`,(0,x.jsx)(t.h2,{id:`couleurs`,children:`Couleurs`}),`
`,(0,x.jsx)(t.h3,{id:`ce-que-chaque-couleur-veut-dire`,children:`Ce que chaque couleur veut dire`}),`
`,(0,x.jsx)(i,{of:p}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:`Une couleur porte un rôle, pas une humeur.`}),` `,(0,x.jsx)(t.code,{children:`primary`}),` n'est pas « le bleu de la marque » : c'est
l'action principale, l'état actif et la sélection. Si un élément est en `,(0,x.jsx)(t.code,{children:`primary`}),` sans être l'un
des trois, il ment sur son importance.`]}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:`Les cinq couleurs de sens ne se mélangent pas aux rampes de Tag.`}),` `,(0,x.jsx)(t.code,{children:`success`}),` (`,(0,x.jsx)(t.code,{children:`#00ab67`}),`) signale
un résultat ; `,(0,x.jsx)(t.code,{children:`green/100-300-700`}),` habille une étiquette. Deux verts, deux usages, jamais l'un pour
l'autre.`]}),`
`,(0,x.jsx)(t.h3,{id:`la-rampe-de-texte-est-une-hiérarchie-pas-une-palette`,children:`La rampe de texte est une hiérarchie, pas une palette`}),`
`,(0,x.jsxs)(t.p,{children:[`Relevé dans le code : `,(0,x.jsx)(t.code,{children:`text/lighter`}),` est la couleur de texte `,(0,x.jsx)(t.strong,{children:`la plus utilisée`}),` du produit
(55 occurrences contre 38 pour `,(0,x.jsx)(t.code,{children:`text/normal`}),`). C'est normal et c'est voulu : une interface de
données est faite en majorité de métadonnées, d'en-têtes de colonne et de libellés secondaires.
Le corps de texte en `,(0,x.jsx)(t.code,{children:`text/normal`}),` est le plus rare des trois premiers niveaux.`]}),`
`,(0,x.jsx)(c,{headers:[`Niveau`,`Quand`,`Ce qu'il ne faut pas en faire`],rows:[[`text/darker`,`Titres, valeur chiffrée mise en avant`,`Pas pour du corps de texte : tout paraîtrait titre`],[`text/normal`,`Corps de texte, libellés cliquables`,`—`],[`text/lighter`,`Métadonnées, en-têtes de colonne, aide`,`Pas pour une information dont dépend une décision`],[`text/lightest`,`Placeholder, désactivé, illustration`,`Jamais pour un texte à lire : il est sous le seuil de contraste`]]}),`
`,(0,x.jsx)(t.h3,{id:`deux-niveaux-de-surface-et-un-demi`,children:`Deux niveaux de surface, et un demi`}),`
`,(0,x.jsx)(i,{of:f}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.code,{children:`bg/window`}),` est le fond de page, `,(0,x.jsx)(t.code,{children:`bg/container`}),` la carte posée dessus, `,(0,x.jsx)(t.code,{children:`bg/subtle`}),` une zone
secondaire `,(0,x.jsx)(t.strong,{children:`à l'intérieur`}),` d'une carte. On s'arrête là : un quatrième gris ne se distingue plus
du troisième, et l'utilisateur cesse de lire la profondeur.`]}),`
`,(0,x.jsx)(t.h3,{id:`survol-et-sélection-sont-deux-choses-différentes`,children:`Survol et sélection sont deux choses différentes`}),`
`,(0,x.jsx)(i,{of:h}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.code,{children:`bg/hover`}),` est `,(0,x.jsx)(t.strong,{children:`transitoire`}),` : il disparaît quand le pointeur part, il n'existe pas au clavier
seul. `,(0,x.jsx)(t.code,{children:`bg/selected`}),` est `,(0,x.jsx)(t.strong,{children:`persistant`}),` : il survit au départ du pointeur parce qu'il décrit un
état, pas un geste. Utiliser l'un pour l'autre fait croire qu'une ligne est sélectionnée alors
qu'elle est seulement survolée.`]}),`
`,(0,x.jsx)(t.h3,{id:`règles-générales-du-web`,children:`Règles générales du web`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`La couleur n'est jamais le seul porteur d'une information`}),` (RGAA 3.1, WCAG 1.4.1). Un statut
coloré est doublé d'un libellé, un onglet actif d'un soulignement, une dimension filtrée d'un
compteur. C'est la règle qui a fait remplacer la pastille verte du filtre par un chiffre.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Contraste minimal 4,5:1`}),` pour le texte, `,(0,x.jsx)(t.strong,{children:`3:1`}),` pour un composant d'interface ou un contour
(WCAG 1.4.3, 1.4.11). Deux dettes héritées de la production sont assumées et documentées :
blanc sur `,(0,x.jsx)(t.code,{children:`primary`}),` = 2,9:1, et `,(0,x.jsx)(t.code,{children:`border/input`}),` = 1,3:1.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Ne pas coder une valeur en dur`}),`, même « juste une fois ». Un hex écrit dans un composant
échappe au thème multi-tenant : les six thèmes clients n'overrident que des tokens.`]}),`
`]}),`
`,(0,x.jsx)(t.hr,{}),`
`,(0,x.jsx)(t.h2,{id:`espacements`,children:`Espacements`}),`
`,(0,x.jsx)(i,{of:u}),`
`,(0,x.jsx)(t.h3,{id:`léchelle-réellement-utilisée`,children:`L'échelle réellement utilisée`}),`
`,(0,x.jsxs)(t.p,{children:[`Relevé dans le code : `,(0,x.jsx)(t.strong,{children:`16 · 8 · 24 · 12`}),` couvrent 90 % des espacements
(55, 50, 38 et 31 occurrences). Puis 20 (padding de carte), 4 (titre / description) et 35 (marge
de page). C'est la vraie échelle de travail.`]}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:`Utiliser l'échelle 4 · 8 · 12 · 16 · 24 pour tout ce qu'on met en page.`}),` Les valeurs 6, 7, 10 et
15 existent dans les tokens Figma parce qu'elles décrivent l'intérieur des composants Ant Design
(padding de bouton, de champ) : elles appartiennent au thème, pas aux écrans.`]}),`
`,(0,x.jsx)(t.h3,{id:`lespace-dit-le-groupement`,children:`L'espace dit le groupement`}),`
`,(0,x.jsx)(i,{of:m}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:`Loi de proximité`}),` (Gestalt) : ce qui est proche est perçu comme lié. Un titre et sa description
sont à 4 ; deux blocs d'une même carte à 16 ; deux sections à 24. Un espace uniforme partout ne dit
rien, et l'utilisateur doit lire pour comprendre la structure au lieu de la voir.`]}),`
`,(0,x.jsxs)(t.p,{children:[`Corollaire : `,(0,x.jsx)(t.strong,{children:`l'espace avant une bordure`}),`. Si deux blocs sont assez espacés, la ligne de
séparation devient du bruit. Le DS n'en met que là où l'espace ne suffit pas (pied d'overlay,
ligne de base d'onglets).`]}),`
`,(0,x.jsx)(t.h3,{id:`règles-générales-du-web-1`,children:`Règles générales du web`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Un seul axe de padding par conteneur.`}),` Le conteneur padde, l'enfant ne se re-padde pas. C'est
la règle écrite sur `,(0,x.jsx)(t.code,{children:`Overlay`}),` : padding 24 porté par le conteneur.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Le gap plutôt que la marge.`}),` Un `,(0,x.jsx)(t.code,{children:`gap`}),` de flex ou de grid ne fuit pas, ne s'effondre pas et ne
laisse pas d'espace résiduel quand un enfant disparaît. Aucun composant du DS n'utilise
`,(0,x.jsx)(t.code,{children:`margin-bottom`}),` pour espacer une liste.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Cible de pointage 24 × 24 minimum`}),` (WCAG 2.5.8). Quand le visuel est plus petit, la cible
s'élargit sans déformer la mise en page : la croix d'un Tag fait 8 px de glyphe dans 20 px de
cible, l'IconButton 20 px dans 32.`]}),`
`]}),`
`,(0,x.jsx)(t.hr,{}),`
`,(0,x.jsx)(t.h2,{id:`typographie`,children:`Typographie`}),`
`,(0,x.jsx)(i,{of:g}),`
`,(0,x.jsx)(t.h3,{id:`neuf-styles-et-pas-un-de-plus`,children:`Neuf styles, et pas un de plus`}),`
`,(0,x.jsxs)(t.p,{children:[`Une taille absente de cette liste est une dérive, pas une nuance. L'audit du code en a trouvé
six occurrences de `,(0,x.jsx)(t.code,{children:`fontSize: 11`}),` et une de 13 : toutes ramenées sur l'échelle. La police est
`,(0,x.jsx)(t.strong,{children:`Circular`}),`, en Book (400) et Medium (500) ; il n'y a pas d'autre graisse.`]}),`
`,(0,x.jsxs)(t.p,{children:[`Relevé dans le code : `,(0,x.jsx)(t.strong,{children:`12 px est la taille dominante`}),` (23 occurrences), suivie de 10 (10) puis
16 (5). C'est une interface dense de données, pas un site éditorial — la taille de base y est
petite, ce qui rend la hiérarchie d'autant plus dépendante de la graisse et de la couleur.`]}),`
`,(0,x.jsx)(t.h3,{id:`la-hiérarchie-ne-se-fait-pas-par-la-taille-seule`,children:`La hiérarchie ne se fait pas par la taille seule`}),`
`,(0,x.jsx)(i,{of:d}),`
`,(0,x.jsxs)(t.p,{children:[`Trois leviers, dans cet ordre : `,(0,x.jsx)(t.strong,{children:`la couleur`}),` (`,(0,x.jsx)(t.code,{children:`text/darker`}),` contre `,(0,x.jsx)(t.code,{children:`text/lighter`}),`), `,(0,x.jsx)(t.strong,{children:`la graisse`}),`
(Medium contre Book), `,(0,x.jsx)(t.strong,{children:`la taille`}),`. Augmenter la taille est le levier le plus coûteux en place et
le moins précis ; il est réservé aux vraies ruptures de niveau.`]}),`
`,(0,x.jsx)(t.h3,{id:`règles-générales-du-web-2`,children:`Règles générales du web`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Hiérarchie sémantique et hiérarchie visuelle sont indépendantes.`}),` Un `,(0,x.jsx)(t.code,{children:`h2`}),` peut être en
Headline 4, et un texte en Headline 4 peut ne pas être un titre. Ne jamais choisir un niveau de
titre pour sa taille (RGAA 9.1).`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Interligne d'au moins 1,5 fois la taille`}),` pour un paragraphe (WCAG 1.4.12). Les styles du DS
respectent ce rapport : 12/20, 14/22, 16/24.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Pas de texte en capitales pour du contenu.`}),` Les capitales ralentissent la lecture et sont
épelées par certains lecteurs d'écran. Elles sont réservées aux micro-libellés de 10 px, avec
l'interlettrage `,(0,x.jsx)(t.code,{children:`trackingCaps`}),`.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Longueur de ligne`}),` : viser 45 à 75 caractères. Dans une carte large, c'est la largeur du
bloc de texte qu'on limite, pas la taille de la police.`]}),`
`]}),`
`,(0,x.jsx)(t.hr,{}),`
`,(0,x.jsx)(t.h2,{id:`effets`,children:`Effets`}),`
`,(0,x.jsx)(i,{of:l}),`
`,(0,x.jsx)(t.h3,{id:`élévation--deux-niveaux-une-signification`,children:`Élévation : deux niveaux, une signification`}),`
`,(0,x.jsxs)(t.p,{children:[`L'ombre ne décore pas, elle `,(0,x.jsx)(t.strong,{children:`dit qu'une surface flotte au-dessus du contenu et qu'elle va
disparaître`}),`. Une carte ne flotte pas : elle est dans le flux, elle n'a pas d'ombre. Un menu
flotte au-dessus de la page. Une modale flotte au-dessus de tout.`]}),`
`,(0,x.jsxs)(t.p,{children:[`Avant cette passe, les deux ombres étaient écrites en dur à trois endroits, avec trois valeurs
différentes, et aucune ne correspondait aux styles d'effet du fichier Figma. Elles sont maintenant
dans `,(0,x.jsx)(t.code,{children:`elevation`}),`, alignées sur Figma.`]}),`
`,(0,x.jsx)(t.h3,{id:`rayons`,children:`Rayons`}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.code,{children:`radius/sm`}),` (2) pour la case à cocher, `,(0,x.jsx)(t.code,{children:`radius/base`}),` (3) pour tout ce qui est un contrôle,
`,(0,x.jsx)(t.code,{children:`radius/card`}),` (6) pour tout ce qui est une surface. `,(0,x.jsx)(t.strong,{children:`Le rayon dit la nature de l'élément`}),` : un
bouton et une carte ne doivent pas avoir le même.`]}),`
`,(0,x.jsx)(t.h3,{id:`bordures`,children:`Bordures`}),`
`,(0,x.jsx)(c,{headers:[`Token`,`Rôle`,`Exemple`],rows:[[`border/input`,`Contour d'un contrôle, séparateur d'une liste`,`Champ, bouton Default, ligne de base des onglets`],[`border/default`,`Séparateur de structure`,`Lignes de tableau, pied et en-tête Light d'overlay`]]}),`
`,(0,x.jsx)(t.h3,{id:`mouvement`,children:`Mouvement`}),`
`,(0,x.jsxs)(t.p,{children:[`Trois durées : `,(0,x.jsx)(t.strong,{children:`100 ms`}),` pour un changement d'état local (survol, focus), `,(0,x.jsx)(t.strong,{children:`200 ms`}),` pour une
apparition de surface (menu, panneau), `,(0,x.jsx)(t.strong,{children:`300 ms`}),` pour un déplacement ample (drawer).`]}),`
`,(0,x.jsx)(t.h3,{id:`règles-générales-du-web-3`,children:`Règles générales du web`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsxs)(t.strong,{children:[`Respecter `,(0,x.jsx)(t.code,{children:`prefers-reduced-motion`}),`.`]}),` Toute transition supérieure à 100 ms doit être
neutralisée quand l'utilisateur le demande (RGAA 13.8, WCAG 2.3.3).`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Une ombre ne remplace pas un contour.`}),` Elle n'est pas perceptible en contraste élevé ni en
impression. Une surface flottante garde un fond franc et, si nécessaire, une bordure.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`z-index par paliers nommés`}),`, jamais de nombre improvisé : `,(0,x.jsx)(t.code,{children:`zPopover`}),` 1030, `,(0,x.jsx)(t.code,{children:`zDropdown`}),` 1050,
`,(0,x.jsx)(t.code,{children:`zTooltip`}),` 1060, `,(0,x.jsx)(t.code,{children:`zModal`}),` 1200. Une valeur inventée finit toujours par passer sous ou par-dessus
la mauvaise chose.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Pas d'animation sur ce qui bloque la lecture.`}),` Un contenu qui apparaît en fondu pendant que
l'utilisateur lit déjà est une gêne, pas une transition.`]}),`
`]}),`
`,(0,x.jsx)(t.hr,{}),`
`,(0,x.jsx)(t.h2,{id:`ce-qui-reste-à-faire`,children:`Ce qui reste à faire`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Contrastes hérités`}),` : blanc sur `,(0,x.jsx)(t.code,{children:`primary`}),` (2,9:1) et `,(0,x.jsx)(t.code,{children:`border/input`}),` (1,3:1) sont sous les
seuils. Décision produit à prendre — ces deux valeurs viennent de la production.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:(0,x.jsx)(t.code,{children:`prefers-reduced-motion`})}),` n'est pas encore implémenté.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Les tokens de mouvement`}),` existent dans Figma (`,(0,x.jsx)(t.code,{children:`motion/fast-ms`}),`, `,(0,x.jsx)(t.code,{children:`base`}),`, `,(0,x.jsx)(t.code,{children:`slow`}),`) mais ne sont
pas encore repris dans `,(0,x.jsx)(t.code,{children:`micsTheme.ts`}),` : les transitions viennent aujourd'hui d'Ant Design.`]}),`
`]})]})}function b(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=t(),o(),r(),_(),s()}))();export{b as default};