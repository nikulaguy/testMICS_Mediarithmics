import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{BacASable as u,SurFondSombre as d,TroisNiveaux as f,UnNiveau as p,n as m,t as h}from"./Breadcrumb.stories-GIc7F6kR.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(t.h1,{id:`breadcrumb`,children:`Breadcrumb`}),`
`,(0,v.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Source code`}),` : AntD v5 Breadcrumb (ActionBar + sous-header navy New Segment)`]}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Maquette`}),` : Figma `,(0,v.jsx)(`code`,{children:`29:22142`}),` — 2 thèmes × 3 niveaux`]})]}),`
`,(0,v.jsxs)(t.p,{children:[`Fil d'Ariane : les parents en liens, un séparateur `,(0,v.jsx)(t.code,{children:`›`}),`, la page courante en texte.
C'est une `,(0,v.jsx)(t.strong,{children:`hiérarchie, pas un historique`}),` : il dit où l'on est dans la structure, pas par où
l'on est passé.`]}),`
`,(0,v.jsx)(a,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(i,{of:u}),`
`,(0,v.jsx)(t.h2,{id:`les-trois-niveaux`,children:`Les trois niveaux`}),`
`,(0,v.jsx)(l,{headers:[`Niveau`,`Contenu`,`Rendu`],rows:[[`1`,`Item actif du SideMenu`,`Link taille M, cliquable`],[`2`,`Onglet actif`,`Link taille M, cliquable`],[`3`,`Ressource ouverte`,`Texte, non cliquable`]]}),`
`,(0,v.jsx)(t.h2,{id:`les-deux-thèmes`,children:`Les deux thèmes`}),`
`,(0,v.jsx)(l,{headers:[`Thème`,`Liens`,`Courant`,`Contexte`],rows:[[`onLight`,(0,v.jsx)(t.code,{children:`link/default`}),(0,v.jsx)(t.code,{children:`text/normal`}),`ActionBar sur fond clair`],[`onDark`,(0,v.jsx)(t.code,{children:`link/on-dark`}),(0,v.jsx)(t.code,{children:`text/on-dark`}),`Bandeau navy (New Segment)`]]}),`
`,(0,v.jsx)(a,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`Le thème suit `,(0,v.jsx)(t.strong,{children:`le fond`}),`, pas la préférence : jamais un lien navy sur un bandeau navy.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Le `,(0,v.jsx)(t.code,{children:`level`}),` reflète la `,(0,v.jsx)(t.strong,{children:`profondeur réelle`}),`, trois au maximum. Un fil d'ariane à cinq niveaux
ne se lit plus.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Le dernier niveau est `,(0,v.jsx)(t.strong,{children:`toujours`}),` du texte. Un lien vers la page où l'on se trouve n'a pas de
destination.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Les parents utilisent le composant `,(0,v.jsxs)(t.strong,{children:[(0,v.jsx)(t.code,{children:`Link`}),` du DS`]}),`, pas le lien natif d'Ant Design, qui rend en
gris et casse la couleur de lien du produit.`]}),`
`,(0,v.jsx)(t.li,{children:`Le premier niveau et l'item actif du SideMenu désignent la même chose. Les faire diverger fait
mentir l'un des deux.`}),`
`]}),`
`,(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,v.jsxs)(t.ol,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Liste ordonnée`}),` `,(0,v.jsx)(t.code,{children:`<ol>`}),` horizontale, gap 8.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Parents`}),` : `,(0,v.jsx)(t.code,{children:`Link`}),` taille M (Body/Book 12), couleur selon le thème.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Séparateur`}),` : `,(0,v.jsx)(t.code,{children:`›`}),` en `,(0,v.jsx)(t.code,{children:`text/lighter`}),` (onLight) ou `,(0,v.jsx)(t.code,{children:`link/on-dark`}),` (onDark), décoratif.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Courant`}),` : texte simple, `,(0,v.jsx)(t.code,{children:`text/normal`}),` ou `,(0,v.jsx)(t.code,{children:`text/on-dark`}),`.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,v.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Navigation`,(0,v.jsxs)(v.Fragment,{children:[`L'ensemble est dans un `,(0,v.jsx)(t.code,{children:`<nav aria-label="Fil d'Ariane">`}),`, structuré en`,` `,(0,v.jsx)(t.code,{children:`<ol>`}),` : l'ordre des niveaux porte du sens (RGAA 9.3, 12.6).`]})],[`États`,(0,v.jsxs)(v.Fragment,{children:[`Le dernier niveau porte `,(0,v.jsx)(t.code,{children:`aria-current="page"`}),` et n'est pas un lien (RGAA 9.x).`]})],[`Images`,(0,v.jsxs)(v.Fragment,{children:[`Le séparateur `,(0,v.jsx)(t.code,{children:`›`}),` est décoratif : `,(0,v.jsx)(t.code,{children:`aria-hidden`}),`, il n'est pas lu entre chaque niveau (RGAA 1.2).`]})],[`Contraste`,`onDark : link/on-dark (#c5efff) sur navy — rapport à vérifier, il est proche du seuil de 4,5:1 (RGAA 3.2).`]]}),`
`,(0,v.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Écart avec la production.`}),` Le fil d'ariane navy utilisait un bleu clair codé en dur ; le
token `,(0,v.jsx)(t.code,{children:`link/on-dark`}),` a été créé pour lui.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`À construire.`}),` Le repli des niveaux au-delà de trois (« … »), et la troncature des libellés
longs avec infobulle.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),s(),r(),m(),c()}))();export{_ as default};