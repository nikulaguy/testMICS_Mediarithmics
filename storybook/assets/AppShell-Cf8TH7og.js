import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{Detail as u,Liste as d,n as f,t as p}from"./AppShell.stories-NbgIsfqS.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(t.h1,{id:`appshell`,children:`AppShell`}),`
`,(0,g.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,g.jsxs)(`span`,{children:[(0,g.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,g.jsxs)(`span`,{children:[(0,g.jsx)(`b`,{children:`Source code`}),` : `,(0,g.jsx)(`code`,{children:`action-bar`}),` + mise en page d'écran refaite page par page en production`]}),(0,g.jsxs)(`span`,{children:[(0,g.jsx)(`b`,{children:`Maquette`}),` : Figma ActionBar, règle ActionBar / Toolbar `,(0,g.jsx)(`code`,{children:`617:2`})]})]}),`
`,(0,g.jsx)(t.p,{children:`Ossature de tout écran : TopBar, SideMenu, ActionBar (fil d'ariane + actions de page), zone de
contenu défilante. Une page ne construit jamais sa propre mise en page : elle fournit un fil
d'ariane, des actions, un contenu.`}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`la-règle-actionbar--toolbar`,children:`La règle ActionBar / Toolbar`}),`
`,(0,g.jsx)(t.p,{children:`C'est la règle qui a motivé ce composant, et elle ne souffre pas d'exception.`}),`
`,(0,g.jsx)(l,{headers:[``,`ActionBar`,`Toolbar`],rows:[[`Portée`,`La page ou la ressource entière`,`Le tableau et son contenu`],[`Exemples`,`Export, New segment, Edit, Delete`,`Recherche, Filters, Edit view, Colonnes, actions de sélection`],[`Position`,`En haut de l'écran, à droite du fil d'ariane`,`Au-dessus du tableau`]]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Pourquoi.`}),` Une action de page rangée dans la barre d'outils du tableau perd sa portée : « New
segment » posé à côté de « Filters » se lit comme une action sur la liste filtrée, alors qu'il crée
une ressource indépendante de tout filtre. Inversement, remonter « Edit view » dans l'ActionBar
l'éloigne du tableau qu'il configure et oblige l'œil à faire l'aller-retour. La position `,(0,g.jsx)(t.strong,{children:`est`}),` la
portée : deux zones, deux niveaux de conséquence, aucun arbitrage au cas par cas.`]}),`
`,(0,g.jsx)(t.h2,{id:`le-fil-dariane-à-trois-niveaux`,children:`Le fil d'ariane à trois niveaux`}),`
`,(0,g.jsx)(l,{headers:[`Niveau`,`Contenu`,`Rendu`],rows:[[`1`,`Item actif du SideMenu`,`Link taille M, cliquable`],[`2`,`Onglet actif`,`Link taille M, cliquable`],[`3`,`Ressource ouverte`,`Texte, non cliquable`]]}),`
`,(0,g.jsxs)(t.p,{children:[`Les niveaux parents utilisent le composant `,(0,g.jsx)(t.code,{children:`Link`}),` du DS, pas le lien natif d'Ant Design qui rend
en gris et casse la couleur de lien du produit. Le niveau courant reste du texte : un lien vers la
page où l'on se trouve déjà n'a pas de destination.`]}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`L'ActionBar `,(0,g.jsx)(t.strong,{children:`n'a pas de bordure basse`}),`. La séparation vient du fond : `,(0,g.jsx)(t.code,{children:`bg/container`}),` pour la
barre, `,(0,g.jsx)(t.code,{children:`bg/window`}),` pour la zone de contenu.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Le contenu défile, l'ossature non : `,(0,g.jsx)(t.code,{children:`overflow: auto`}),` sur la seule zone de contenu, hauteur
`,(0,g.jsx)(t.code,{children:`100vh`}),` sur le conteneur.`]}),`
`,(0,g.jsxs)(t.li,{children:[`La page fournit `,(0,g.jsx)(t.code,{children:`actions`}),` déjà ordonnées : action secondaire à gauche, action principale
(`,(0,g.jsx)(t.code,{children:`type="primary"`}),`) à droite, une seule primaire par écran.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`menuActive`}),` et le premier niveau du fil d'ariane désignent la même chose. Les faire diverger
fait mentir l'un des deux.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,g.jsxs)(t.ol,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`TopBar`}),` : hauteur fixe, navy, en dehors du défilement.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`SideMenu`}),` : colonne gauche, pleine hauteur sous la TopBar.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`ActionBar`}),` : hauteur `,(0,g.jsx)(t.code,{children:`actionBarHeight`}),`, fond `,(0,g.jsx)(t.code,{children:`bg/container`}),`, padding horizontal 24 ;
fil d'ariane à gauche, actions à droite, gap 8.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Contenu`}),` : `,(0,g.jsx)(t.code,{children:`bg/window`}),`, padding 35, seule zone défilante.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,g.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Landmarks`,(0,g.jsxs)(g.Fragment,{children:[`Le contenu est dans un `,(0,g.jsx)(t.code,{children:`<main>`}),` unique ; le fil d'ariane dans un`,` `,(0,g.jsx)(t.code,{children:`<nav aria-label="Fil d'Ariane">`}),` (RGAA 9.2, 12.6).`]})],[`Structure`,`Le fil d'ariane est une liste ordonnée ; le niveau courant n'est pas un lien (RGAA 9.3, 12.x).`],[`Navigation`,`Un lien d'évitement mène de la TopBar au contenu principal, première cible de tabulation de la page (RGAA 12.7).`],[`Titre de page`,`Le titre du document reflète le niveau courant du fil d'ariane, et change à chaque navigation (RGAA 8.5, 8.6).`]]}),`
`,(0,g.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Écart avec la production.`}),` `,(0,g.jsx)(t.code,{children:`action-bar`}),` existe mais n'impose ni la règle de portée ni le fil
d'ariane à trois niveaux : chaque écran place ses actions où il veut.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`À construire.`}),` Le lien d'évitement, et l'ActionBar en mode édition (fond navy, actions
Sauvegarder / Annuler), décrite en maquette mais non développée.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),s(),r(),f(),c()}))();export{h as default};