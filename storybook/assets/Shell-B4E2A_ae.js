import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,n as i,s as a}from"./blocks-C8yODpg3.js";import{t as o}from"./mdx-react-shim-DjgDkGvs.js";import{n as s,t as c}from"./DocTable-CY3zK50_.js";import{RechercheGlobale as l,SideMenuSeul as u,TopBarSeule as d,n as f,t as p}from"./Shell.stories-CI5PC4TM.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:p}),`
`,(0,g.jsx)(t.h1,{id:`shell--topbar-sidemenu-searchpalette`,children:`Shell : TopBar, SideMenu, SearchPalette`}),`
`,(0,g.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,g.jsxs)(`span`,{children:[(0,g.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,g.jsxs)(`span`,{children:[(0,g.jsx)(`b`,{children:`Source code`}),` : `,(0,g.jsx)(`code`,{children:`menu-list`}),` / `,(0,g.jsx)(`code`,{children:`menu-sub-list`}),` en production, sans TopBar composantisée`]}),(0,g.jsxs)(`span`,{children:[(0,g.jsx)(`b`,{children:`Maquette`}),` : Figma TopBar, SideMenu / Item `,(0,g.jsx)(`code`,{children:`19:31`}),`, AppLauncher `,(0,g.jsx)(`code`,{children:`19:148`})]})]}),`
`,(0,g.jsx)(t.p,{children:`Les trois pièces de l'ossature applicative. Elles ne portent jamais de contenu métier : elles
situent l'utilisateur (où suis-je, dans quelle organisation) et le déplacent.`}),`
`,(0,g.jsx)(t.h2,{id:`topbar`,children:`TopBar`}),`
`,(0,g.jsxs)(t.p,{children:[`Barre navy fixe. De gauche à droite : logo, sélecteur d'organisation, puis à droite la rangée de
`,(0,g.jsx)(t.code,{children:`IconButton`}),` (recherche, aide, applications, compte). Chaque icône de droite ouvre un
`,(0,g.jsx)(t.code,{children:`DropdownPanel`}),` ancré.`]}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(t.h3,{id:`règles`,children:`Règles`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`Les panneaux basculent sur `,(0,g.jsx)(t.code,{children:`onPointerDown`}),` et non `,(0,g.jsx)(t.code,{children:`onClick`}),` : avec `,(0,g.jsx)(t.code,{children:`onClick`}),`, le gestionnaire de
clic extérieur ferme le panneau dans le même cycle que son ouverture, et l'icône paraît morte
un clic sur deux.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Un seul panneau ouvert à la fois.`}),` Ouvrir le compte ferme les applications.`]}),`
`,(0,g.jsx)(t.li,{children:`Le sélecteur d'organisation est un bouton, pas un titre : changer d'organisation recharge le
datamart, c'est une action, pas une décoration.`}),`
`,(0,g.jsx)(t.li,{children:`Le lanceur d'applications fait 300 de large et porte le logo de chaque application : c'est la
seule liste de la barre où l'icône aide vraiment à reconnaître la cible.`}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`sidemenu`,children:`SideMenu`}),`
`,(0,g.jsxs)(t.p,{children:[`Navigation principale. Trois états d'item, et pas un de plus : Default transparent,
Hover `,(0,g.jsx)(t.code,{children:`bg/hover`}),`, Active `,(0,g.jsx)(t.code,{children:`bg/selected`}),`.`]}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(t.h3,{id:`règles-1`,children:`Règles`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`L'item actif est le `,(0,g.jsx)(t.strong,{children:`niveau 1 du fil d'ariane`}),`. Les deux composants ne se contredisent jamais :
si le menu montre « Segments », le fil d'ariane commence par « Segments ».`]}),`
`,(0,g.jsxs)(t.li,{children:[`Les états sont pilotés en React, pas en CSS `,(0,g.jsx)(t.code,{children:`:hover`}),`, parce que l'item est un bouton composé et
que le survol doit couvrir toute la rangée, icône comprise.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`searchpalette`,children:`SearchPalette`}),`
`,(0,g.jsxs)(t.p,{children:[`Recherche globale. Surface superposée particulière : centrée horizontalement, ancrée à 140 px du
haut, largeur 760, par-dessus un voile `,(0,g.jsx)(t.code,{children:`bg/scrim`}),`. Ni en-tête ni pied : on ferme à Échap ou au clic
sur le voile.`]}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(t.h3,{id:`règles-2`,children:`Règles`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`Les résultats sont `,(0,g.jsx)(t.strong,{children:`groupés par section`}),` (Features, Segments, Plugins) : une liste plate de
vingt résultats hétérogènes oblige à lire chaque ligne pour comprendre ce qu'elle est.`]}),`
`,(0,g.jsx)(t.li,{children:`La sous-chaîne correspondante est mise en gras : l'utilisateur voit pourquoi un résultat est là.`}),`
`,(0,g.jsxs)(t.li,{children:[`La palette n'est pas un `,(0,g.jsx)(t.code,{children:`DropdownPanel`}),` : son ancrage et son voile lui sont propres. Elle
réutilise en revanche `,(0,g.jsx)(t.code,{children:`panelSurface`}),`, donc la même ombre et le même radius que tous les panneaux.`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,g.jsx)(c,{headers:[`Thème`,`Exigence`],rows:[[`Landmarks`,(0,g.jsxs)(g.Fragment,{children:[`TopBar dans un `,(0,g.jsx)(t.code,{children:`<header>`}),`, SideMenu dans un`,` `,(0,g.jsx)(t.code,{children:`<nav aria-label="Navigation principale">`}),` (RGAA 9.2, 12.6).`]})],[`États`,(0,g.jsxs)(g.Fragment,{children:[`L'item actif du SideMenu porte `,(0,g.jsx)(t.code,{children:`aria-current="page"`}),` : la couleur de fond seule ne suffit pas (RGAA 3.1, 9.x).`]})],[`Clavier`,`La palette prend le focus à l'ouverture, le piège pendant qu'elle est ouverte, et le rend à la loupe à la fermeture. Échap ferme (RGAA 7.3, 12.x).`],[`Contenu dynamique`,(0,g.jsxs)(g.Fragment,{children:[`Le nombre de résultats de la palette est annoncé dans une zone`,` `,(0,g.jsx)(t.code,{children:`aria-live="polite"`}),` à chaque frappe (RGAA 7.4).`]})]]}),`
`,(0,g.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Ajouté en maquette.`}),` La TopBar n'est pas composantisée en production : les icônes de droite
sont posées à la main, sans états ni panneaux homogènes.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`À construire.`}),` Le sous-menu du SideMenu (`,(0,g.jsx)(t.code,{children:`menu-sub-list`}),`), le repli de la barre latérale, et
la navigation clavier complète de la palette (flèches + Entrée).`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),o(),r(),f(),s()}))();export{h as default};