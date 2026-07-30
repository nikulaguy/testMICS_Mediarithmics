import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{BacASable as u,Compositions as d,FiltreTropRestrictif as f,PremiereCreation as p,RienATraiter as m,n as h,t as g}from"./EmptyBlock.stories-D5FGpFBp.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`emptyblock`,children:`EmptyBlock`}),`
`,(0,y.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Catégorie`}),` : enveloppé`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Source code`}),` : remplace `,(0,y.jsx)(`code`,{children:`empty-records`}),`, `,(0,y.jsx)(`code`,{children:`empty-table-view`}),` et `,(0,y.jsx)(`code`,{children:`Empty`}),` d'AntD, trois états vides différents en production`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Maquette`}),` : Figma Empty State `,(0,y.jsx)(`code`,{children:`285:151`})]})]}),`
`,(0,y.jsxs)(t.p,{children:[`État vide : illustration, `,(0,y.jsx)(t.strong,{children:`titre`}),`, description optionnelle, action optionnelle. `,(0,y.jsx)(t.strong,{children:`Centré dans
son conteneur`}),`, jamais aligné à gauche : un état vide aligné en haut à gauche se lit comme un
contenu qui a raté son chargement.`]}),`
`,(0,y.jsx)(t.p,{children:`Trois compositions, du plus sobre au plus complet :`}),`
`,(0,y.jsx)(a,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(i,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Le `,(0,y.jsx)(t.strong,{children:`titre`}),` dit ce qui est vide, en une ligne : « No segment matches your filters » plutôt que
« Aucune donnée », qui laisse l'utilisateur chercher la cause.`]}),`
`,(0,y.jsxs)(t.li,{children:[`La `,(0,y.jsx)(t.strong,{children:`description`}),` est facultative et n'est là que si elle ajoute quelque chose : le détail, ou
la marche à suivre. Répéter le titre en plus long est du bruit.`]}),`
`,(0,y.jsxs)(t.li,{children:[`L'action est `,(0,y.jsx)(t.strong,{children:`la sortie du vide`}),` : effacer les filtres, créer la première ressource. S'il n'y a
pas de sortie utile, il n'y a pas d'action.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Un vide qui est une `,(0,y.jsx)(t.strong,{children:`bonne nouvelle`}),` (aucune alerte à traiter) n'est ni une erreur ni un appel
à l'action : titre et description, pas de bouton.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Le composant remplit son conteneur (`,(0,y.jsx)(t.code,{children:`flex: 1`}),`) et se centre dedans. Le conteneur porte la carte,
pas l'état vide : celui-ci ne dessine ni fond ni bordure.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Filtre trop restrictif`}),` : l'action ramène à un état utile.`]}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Rien à traiter`}),`, sans action :`]}),`
`,(0,y.jsx)(a,{of:m}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Première création`}),`, l'action est la création :`]}),`
`,(0,y.jsx)(a,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,y.jsxs)(t.ol,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Illustration`}),` : icône de 44 px en `,(0,y.jsx)(t.code,{children:`text/lightest`}),`. Discrète : elle situe, elle n'alerte pas.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Titre`}),` : Headline 4 (Circular Medium 16 / 24) en `,(0,y.jsx)(t.code,{children:`text/lighter`}),`, centré.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Description`}),` (optionnelle) : Body/Book 12 / 20, même couleur, gap 4 sous le titre.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Action`}),` (optionnelle) : un Button, jamais plus d'un, gap 12 sous le bloc de texte.`]}),`
`]}),`
`,(0,y.jsx)(t.p,{children:`Padding 35 vertical, 24 horizontal, gap 12 entre les trois blocs.`}),`
`,(0,y.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,y.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Images`,(0,y.jsxs)(y.Fragment,{children:[`L'icône est décorative : `,(0,y.jsx)(t.code,{children:`aria-hidden`}),`, l'information est dans le message (RGAA 1.2).`]})],[`Contenu dynamique`,(0,y.jsxs)(y.Fragment,{children:[`Quand le vide résulte d'un filtrage, le message apparaît dans une zone`,` `,(0,y.jsx)(t.code,{children:`aria-live="polite"`}),` pour être annoncé sans déplacer le focus (RGAA 7.4).`]})],[`Contraste`,`Le message est en text/lighter : contraste vérifié à 4,5:1 sur bg/container. L'icône, décorative, n'est pas soumise au seuil (RGAA 3.2).`]]}),`
`,(0,y.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Écart avec la production.`}),` Trois états vides coexistent (`,(0,y.jsx)(t.code,{children:`empty-records`}),`, `,(0,y.jsx)(t.code,{children:`empty-table-view`}),`,
`,(0,y.jsx)(t.code,{children:`Empty`}),` d'AntD) avec trois illustrations et trois alignements. Le composant les unifie.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Écart de nommage.`}),` La maquette appelle « Message » ce qui est visuellement un titre
(Headline 4). Le code expose `,(0,y.jsx)(t.code,{children:`title`}),` et `,(0,y.jsx)(t.code,{children:`description`}),` : deux textes de niveaux différents
méritent deux noms qui le disent. À arbitrer côté maquette.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`À construire.`}),` L'état vide `,(0,y.jsx)(t.strong,{children:`de chargement`}),` (squelette) est un composant distinct, non
encore décrit dans la maquette.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),s(),r(),h(),c()}))();export{v as default};