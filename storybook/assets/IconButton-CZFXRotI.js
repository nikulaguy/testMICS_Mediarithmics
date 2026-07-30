import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{BacASable as u,Etats as d,RangeeTopBar as f,n as p,t as m}from"./IconButton.stories-B8ZpdPNg.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(t.h1,{id:`iconbutton`,children:`IconButton`}),`
`,(0,_.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`b`,{children:`Source code`}),` : icônes posées à la main dans la TopBar en production, sans état ni cible de pointage`]}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`b`,{children:`Maquette`}),` : Figma `,(0,_.jsx)(`code`,{children:`666:110318`}),`, doc `,(0,_.jsx)(`code`,{children:`669:71`})]})]}),`
`,(0,_.jsxs)(t.p,{children:[`Bouton icône sans fond ni bordure. `,(0,_.jsx)(t.strong,{children:`Seule la couleur du glyphe change selon l'état`}),` :
`,(0,_.jsx)(t.code,{children:`text/on-dark`}),` au repos, `,(0,_.jsx)(t.code,{children:`bg/hover`}),` au survol, `,(0,_.jsx)(t.code,{children:`bg/selected`}),` pressé ou panneau ouvert.
C'est le bouton des barres denses, TopBar en tête, là où un Button à paddings serait trop lourd.`]}),`
`,(0,_.jsx)(a,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`label`}),` est `,(0,_.jsx)(t.strong,{children:`obligatoire`}),` : sans texte visible, c'est le seul intitulé accessible du bouton.`]}),`
`,(0,_.jsxs)(t.li,{children:[`La cible cliquable fait `,(0,_.jsx)(t.strong,{children:`32 × 32`}),` alors que le glyphe visible fait 20 : le confort de pointage
ne se négocie pas contre la densité visuelle.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Quand le bouton ouvre un panneau, passer `,(0,_.jsx)(t.code,{children:`expanded`}),` plutôt que gérer l'état visuel à la main :
la prop pilote à la fois l'apparence et `,(0,_.jsx)(t.code,{children:`aria-haspopup`}),` / `,(0,_.jsx)(t.code,{children:`aria-expanded`}),`.`]}),`
`,(0,_.jsxs)(t.li,{children:[`La bascule d'un panneau se fait sur `,(0,_.jsx)(t.code,{children:`onPointerDown`}),`, pas sur `,(0,_.jsx)(t.code,{children:`onClick`}),` : sinon la fermeture au
clic extérieur et l'ouverture au clic se marchent dessus, et le panneau clignote.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Variante `,(0,_.jsx)(t.strong,{children:`onLight`}),` pour les surfaces claires : mêmes états, rampe de texte inversée.`]}),`
`]}),`
`,(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,_.jsxs)(t.ol,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Cible`}),` : 32 × 32, fond transparent, sans bordure ni padding. Aucun fond, même au survol.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Glyphe`}),` : `,(0,_.jsx)(t.code,{children:`Icon`}),` de 20 px, centré, couleur pilotée par l'état.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,_.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Sémantique`,(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(t.code,{children:`<button type="button">`}),` natif, jamais un `,(0,_.jsx)(t.code,{children:`span`}),` cliquable (RGAA 7.1).`]})],[`Intitulé`,(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(t.code,{children:`aria-label`}),` explicite et unique dans la barre : « Applications », « Compte », « Rechercher » (RGAA 7.3, 11.9).`]})],[`États`,(0,_.jsxs)(_.Fragment,{children:[`Bouton déclencheur de panneau : `,(0,_.jsx)(t.code,{children:`aria-haspopup="true"`}),` et`,` `,(0,_.jsx)(t.code,{children:`aria-expanded`}),` à jour à chaque ouverture et fermeture (RGAA 7.1).`]})],[`Contraste`,`Le glyphe atteint 3:1 avec le fond navy dans les trois états, y compris au survol (RGAA 3.2).`]]}),`
`,(0,_.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Ajouté en maquette.`}),` En production, ces icônes sont posées sans état ni cible élargie.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`À construire.`}),` L'anneau de focus clavier, distinct du survol, reste à décrire côté maquette :
aujourd'hui l'utilisateur au clavier ne distingue pas le bouton ciblé.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),s(),r(),p(),c()}))();export{g as default};