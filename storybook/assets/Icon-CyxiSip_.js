import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{BacASable as u,Bibliotheque as d,Couleur as f,MarquesApplication as p,Tailles as m,n as h,t as g}from"./Icon.stories-CRzRDGcN.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`icon`,children:`Icon`}),`
`,(0,y.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Source code`}),` : remplace `,(0,y.jsx)(`code`,{children:`McsIcon`}),`, qui mélange mcsfont, les icônes AntD et des SVG inline`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Maquette`}),` : page « 🖼 Icons » du fichier Figma`]})]}),`
`,(0,y.jsxs)(t.p,{children:[`Glyphe du design system. Les icônes sont `,(0,y.jsx)(t.strong,{children:`exportées du fichier Figma`}),`, pas de la librairie
Ant Design : ce sont les glyphes du produit. À l'export, les `,(0,y.jsx)(t.code,{children:`fill`}),` sont remplacés par
`,(0,y.jsx)(t.code,{children:`currentColor`}),` et les dimensions par `,(0,y.jsx)(t.code,{children:`1em`}),`, si bien que couleur et taille se pilotent en CSS
comme pour un caractère de police.`]}),`
`,(0,y.jsx)(a,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`marques-dapplication`,children:`Marques d'application`}),`
`,(0,y.jsxs)(t.p,{children:[`Le set contient aussi quatre entrées préfixées `,(0,y.jsx)(t.code,{children:`app-`}),` qui ne sont pas des glyphes mais des `,(0,y.jsx)(t.strong,{children:`logos
produit`}),`. Elles gardent leurs couleurs de marque et `,(0,y.jsxs)(t.strong,{children:[`ignorent la prop `,(0,y.jsx)(t.code,{children:`color`})]}),` : un logo qui
change de couleur n'est plus un logo. Elles ne servent que dans l'`,(0,y.jsx)(t.code,{children:`AppLauncher`}),`.`]}),`
`,(0,y.jsx)(a,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(i,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Le glyphe est `,(0,y.jsx)(t.strong,{children:`toujours décoratif`}),` : il porte `,(0,y.jsx)(t.code,{children:`aria-hidden`}),`. Une icône seule dans un contrôle
exige un `,(0,y.jsx)(t.code,{children:`aria-label`}),` sur le contrôle, pas sur l'icône (voir `,(0,y.jsx)(t.code,{children:`IconButton`}),`).`]}),`
`,(0,y.jsx)(t.li,{children:`La couleur n'est jamais imposée sans raison : par défaut l'icône hérite de la couleur du texte
parent, ce qui la fait suivre gratuitement les états (survol, sélection, désactivé).`}),`
`,(0,y.jsx)(t.li,{children:`Tailles usuelles : 14 dans le corps de texte, 16 dans les menus et les champs, 20 dans la TopBar,
40 pour un état vide.`}),`
`,(0,y.jsxs)(t.li,{children:[`Un glyphe manquant rend `,(0,y.jsx)(t.code,{children:`null`}),` plutôt qu'un carré vide : pas de bloc fantôme dans la mise en page.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Les props DOM restantes sont `,(0,y.jsxs)(t.strong,{children:[`transmises au `,(0,y.jsx)(t.code,{children:`<span>`})]}),`. C'est indispensable dans un slot
Ant Design (`,(0,y.jsx)(t.code,{children:`closeIcon`}),`, `,(0,y.jsx)(t.code,{children:`suffix`}),`, `,(0,y.jsx)(t.code,{children:`prefix`}),`) : AntD clone le nœud pour y injecter `,(0,y.jsx)(t.code,{children:`onClick`}),` et
`,(0,y.jsx)(t.code,{children:`className`}),`, et un composant qui n'accepte que ses propres props avale l'injection en silence.`]}),`
`]}),`
`,(0,y.jsx)(a,{of:m}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,y.jsxs)(t.ol,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Boîte`}),` : `,(0,y.jsx)(t.code,{children:`inline-flex`}),` carrée de `,(0,y.jsx)(t.code,{children:`size`}),` × `,(0,y.jsx)(t.code,{children:`size`}),`, `,(0,y.jsx)(t.code,{children:`flex: 0 0 auto`}),` pour ne jamais se
déformer dans une rangée.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Glyphe`}),` : SVG inline, `,(0,y.jsx)(t.code,{children:`viewBox`}),` carré normalisé avec une marge de 1,10, sans
`,(0,y.jsx)(t.code,{children:`preserveAspectRatio`}),`, tous les fills en `,(0,y.jsx)(t.code,{children:`currentColor`}),`.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,y.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Images`,(0,y.jsxs)(y.Fragment,{children:[`Icône décorative : `,(0,y.jsx)(t.code,{children:`aria-hidden="true"`}),`, aucune alternative (RGAA 1.2). Elle ne doit jamais être le seul porteur d'une information.`]})],[`Couleurs`,`Une icône ne code jamais un statut à elle seule : elle accompagne un libellé ou un intitulé accessible (RGAA 3.1).`]]}),`
`,(0,y.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Écart avec la production.`}),` `,(0,y.jsx)(t.code,{children:`McsIcon`}),` mélange trois systèmes d'icônes (mcsfont, AntD,
SVG inline). Le set exporté de Figma les remplace par une source unique.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`À construire.`}),` Le set couvre les écrans traités ; il sera complété au fil des écrans
suivants, glyphe par glyphe, depuis la même page Figma.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),s(),r(),h(),c()}))();export{v as default};