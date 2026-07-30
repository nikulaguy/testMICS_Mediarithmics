import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{BacASable as u,Marques as d,SansComputingConsole as f,n as p,t as m}from"./AppLauncher.stories-DQpe7TDc.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(t.h1,{id:`applauncher`,children:`AppLauncher`}),`
`,(0,_.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`b`,{children:`Source code`}),` : panneau posé à la main dans la TopBar en production`]}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`b`,{children:`Maquette`}),` : Figma AppLauncher `,(0,_.jsx)(`code`,{children:`19:148`})]})]}),`
`,(0,_.jsx)(t.p,{children:`Contenu du panneau « Applications » de la TopBar : bandeau de marque, puis les entrées groupées —
les applications de la plateforme, un filet, les ressources documentaires. C'est le seul endroit du
produit où l'on change d'application, donc le seul endroit où la marque est rappelée en grand.`}),`
`,(0,_.jsxs)(t.p,{children:[`Le composant `,(0,_.jsx)(t.strong,{children:`ne dessine pas sa surface`}),` : il se pose dans un `,(0,_.jsx)(t.code,{children:`DropdownPanel`}),`, comme tous les
panneaux du produit. Une ombre et un radius de plus seraient une ombre et un radius à maintenir.`]}),`
`,(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`Les entrées sont des `,(0,_.jsx)(t.strong,{children:(0,_.jsx)(t.code,{children:`SideMenuItem`})}),`, le composant des entrées du menu latéral. C'est le choix
de la maquette, et il évite d'entretenir un second item avec son propre survol, sa propre hauteur
et son propre radius. Seul le rôle change : `,(0,_.jsx)(t.code,{children:`menuitem`}),` ici, `,(0,_.jsx)(t.code,{children:`link`}),` dans le SideMenu.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Chaque entrée porte la `,(0,_.jsx)(t.strong,{children:`marque de son application`}),`, pas un glyphe du set. C'est le seul menu du
produit qui fait quitter l'application courante : le logo rend la cible reconnaissable avant même
la lecture du libellé. Les marques gardent leurs couleurs, la prop `,(0,_.jsx)(t.code,{children:`color`}),` de l'`,(0,_.jsx)(t.code,{children:`Icon`}),` n'a aucun
effet dessus — un logo qui change de couleur n'est plus un logo.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Deux groupes, un filet.`}),` Les applications d'abord, les ressources documentaires ensuite. Les
premières changent de contexte, les secondes ouvrent un autre site : ce ne sont pas les mêmes
conséquences, elles ne se mélangent pas dans une liste plate.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Le `,(0,_.jsx)(t.strong,{children:`filet est en retrait de 16`}),` de chaque côté, en `,(0,_.jsx)(t.code,{children:`border/default`}),`. Pas de filet sous le
dernier groupe : il ferait un trait au ras du bord du panneau, qui doublerait son contour.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Les groupes viennent du `,(0,_.jsx)(t.strong,{children:`code produit`}),` (`,(0,_.jsx)(t.code,{children:`getAppMenuSections`}),`), pas d'une liste figée : Computing
Console n'apparaît que sur une organisation `,(0,_.jsx)(t.code,{children:`core_cdp`}),`, Platform Admin que sur l'organisation mics.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Changer d'application `,(0,_.jsx)(t.strong,{children:`recharge le contexte`}),` : ce n'est pas une navigation interne, ne pas la
mélanger avec les entrées du SideMenu.`]}),`
`]}),`
`,(0,_.jsx)(a,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Sans Computing Console`}),` : le groupe se réduit, il ne disparaît pas.`]}),`
`,(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,_.jsxs)(t.ol,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Panneau`}),` : largeur 260, surface du `,(0,_.jsx)(t.code,{children:`DropdownPanel`}),` (fond `,(0,_.jsx)(t.code,{children:`bg/container`}),`, radius/base, ombre
Dropdown).`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Bandeau de marque`}),` : hauteur 101, padding 20 haut / 16 bas, logo de 140 centré.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Entrée`}),` : un `,(0,_.jsx)(t.code,{children:`SideMenuItem`}),` (hauteur 32, radius 6, padding horizontal 10, gap 10, marque
16 × 16, libellé Body/Book 12), dans une gouttière de 15 horizontaux et 4 verticaux.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Filet`}),` : 1 px `,(0,_.jsx)(t.code,{children:`border/default`}),` en retrait de 16, entre deux groupes seulement.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,_.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Sémantique`,(0,_.jsxs)(_.Fragment,{children:[`Le panneau porte `,(0,_.jsx)(t.code,{children:`role="menu"`}),` et `,(0,_.jsx)(t.code,{children:`aria-label="Applications"`}),` ; chaque application est un `,(0,_.jsx)(t.code,{children:`menuitem`}),` atteignable au clavier (RGAA 7.1).`]})],[`Groupes`,(0,_.jsxs)(_.Fragment,{children:[`Chaque groupe porte `,(0,_.jsx)(t.code,{children:`role="group"`}),` : le filet est une information visuelle, il doit exister aussi dans l'arbre d'accessibilité (RGAA 9.1).`]})],[`Liens externes`,(0,_.jsxs)(_.Fragment,{children:[`La documentation et le guide ouvrent un autre site : l'entrée porte un texte`,(0,_.jsx)(t.code,{children:`.mics-sr-only`}),` « Nouvelle fenêtre ». Sans lui, le retour arrière du lecteur d'écran ne ramène nulle part (RGAA 13.2).`]})],[`Information couleur`,`La marque double le nom de l'application, elle ne le remplace jamais (RGAA 3.1).`],[`Images`,`Le logo porte une alternative « mediarithmics » : c'est le nom de la plateforme, pas une décoration (RGAA 1.1).`]]}),`
`,(0,_.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Écart avec la production.`}),` Le panneau est posé à la main dans la TopBar, sans composant ni
états d'items homogènes avec le reste des menus.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Écart résolu.`}),` Le dev affichait une ligne « application courante » en tête, absente de la
maquette : la production liste Navigator et Computing Console comme des cibles, l'application
courante n'est pas répétée. La ligne a été retirée, et la prop `,(0,_.jsx)(t.code,{children:`current`}),` avec elle.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Marques redessinées.`}),` La maquette ne fournit les icônes qu'en capture d'écran. Les quatre
marques ont été retracées en vectoriel dans `,(0,_.jsx)(t.code,{children:`assets/icons/app-*.svg`}),`, couleurs relevées sur la
capture (`,(0,_.jsx)(t.code,{children:`#479fda`}),`, `,(0,_.jsx)(t.code,{children:`#6c58c9`}),`, `,(0,_.jsx)(t.code,{children:`#4ca86d`}),`). À remplacer par les sources officielles quand elles
seront disponibles.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`À construire.`}),` La navigation clavier complète (flèches) et la recherche d'application, utile
seulement si la liste s'allonge.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),s(),r(),p(),c()}))();export{g as default};