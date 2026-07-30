import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{BacASable as u,DansLAppLauncher as d,DansUneListe as f,Etats as p,n as m,t as h}from"./SideMenuItem.stories-CclG0Kro.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(t.h1,{id:`sidemenuitem`,children:`SideMenuItem`}),`
`,(0,v.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Source code`}),` : `,(0,v.jsx)(`code`,{children:`SideMenu.tsx`}),` + `,(0,v.jsx)(`code`,{children:`sideMenu.less`}),` (libs/advanced)`]}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Maquette`}),` : Figma SideMenu / Item `,(0,v.jsx)(`code`,{children:`19:31`})]})]}),`
`,(0,v.jsxs)(t.p,{children:[`Entrée de navigation : icône, libellé, trois états. Elle sert à `,(0,v.jsx)(t.strong,{children:`deux endroits`}),`, comme dans la
maquette : les entrées du `,(0,v.jsx)(t.code,{children:`SideMenu`}),` et celles de l'`,(0,v.jsx)(t.code,{children:`AppLauncher`}),`. Une entrée de navigation reste
une entrée de navigation ; en refaire une variante locale pour le launcher, c'était deux survols,
deux hauteurs et deux radius à maintenir.`]}),`
`,(0,v.jsx)(a,{of:u}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(i,{of:u}),`
`,(0,v.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Un seul actif`}),` par liste. L'actif combine `,(0,v.jsx)(t.code,{children:`bg/selected`}),`, le libellé en `,(0,v.jsx)(t.code,{children:`primary`}),` et la graisse
Medium : trois signaux, dont deux qui ne dépendent pas de la couleur.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Le composant `,(0,v.jsx)(t.strong,{children:`ne porte pas sa gouttière`}),`. Le SideMenu l'encadre de 15 px horizontaux avec
2 px de gap, l'AppLauncher de 15 horizontaux et 4 verticaux. La marge appartient à la liste, pas
à l'entrée : c'est ce qui permet de la poser dans un panneau de 260 comme dans un menu de 200.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Le survol est obligatoire.`}),` Sans lui, rien ne distingue une entrée cliquable d'un intertitre.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Libellé `,(0,v.jsx)(t.strong,{children:`court`}),`, tronqué en fin de ligne plutôt que replié : une entrée de menu sur deux lignes
casse le rythme de la liste.`]}),`
`,(0,v.jsxs)(t.li,{children:[`L'icône est `,(0,v.jsx)(t.strong,{children:`décorative`}),` (`,(0,v.jsx)(t.code,{children:`aria-hidden`}),`) : c'est le libellé qui porte le sens.`]}),`
`]}),`
`,(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Dans le SideMenu`}),` : rôle `,(0,v.jsx)(t.code,{children:`link`}),`, l'actif porte `,(0,v.jsx)(t.code,{children:`aria-current="page"`}),`.`]}),`
`,(0,v.jsx)(a,{of:f}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Dans l'AppLauncher`}),` : rôle `,(0,v.jsx)(t.code,{children:`menuitem`}),`, et l'icône est une marque d'application.`]}),`
`,(0,v.jsx)(a,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,v.jsxs)(t.ol,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Entrée`}),` : hauteur 32, radius 6, padding horizontal 10, gap 10.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Icône`}),` : 16 × 16, couleur héritée du libellé.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Libellé`}),` : Body/Book 12 en `,(0,v.jsx)(t.code,{children:`text/normal`}),`. Actif : Body/Medium 12 en `,(0,v.jsx)(t.code,{children:`primary`}),`.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Fonds`}),` : Default transparent · Hover `,(0,v.jsx)(t.code,{children:`bg/hover`}),` · Active `,(0,v.jsx)(t.code,{children:`bg/selected`}),`.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,v.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Sémantique`,(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.code,{children:`role="link"`}),` dans une navigation, `,(0,v.jsx)(t.code,{children:`role="menuitem"`}),` dans un menu ouvert depuis un bouton. Le rôle suit le contexte, pas l'apparence (RGAA 7.1).`]})],[`États`,(0,v.jsxs)(v.Fragment,{children:[`L'entrée en cours porte `,(0,v.jsx)(t.code,{children:`aria-current="page"`}),` dans le SideMenu : la couleur de fond ne s'annonce pas (RGAA 9.1).`]})],[`Clavier`,`L'entrée est atteignable au clavier et s'active à Entrée comme à Espace (RGAA 7.3).`],[`Information couleur`,`L'actif ne repose pas sur la seule couleur : la graisse du libellé et le fond le doublent (RGAA 3.1).`]]}),`
`,(0,v.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Corrigé côté maquette.`}),` La variante Default portait un radius de 5 quand Hover et Active en
portaient 6 : le coin changeait au survol. Les trois états sont passés à 6.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Écart avec la production.`}),` `,(0,v.jsx)(t.code,{children:`sideMenu.less`}),` écrit ses valeurs en dur ; ici elles viennent
du module de thème.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`À construire.`}),` Le sous-menu en accordéon, le badge sur une entrée, et l'état replié
(icône seule + infobulle), tous trois listés en évolution dans la maquette.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),s(),r(),m(),c()}))();export{_ as default};