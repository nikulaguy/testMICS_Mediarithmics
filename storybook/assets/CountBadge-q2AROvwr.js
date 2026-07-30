import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{BacASable as u,SurBoutonFiltre as d,SurOnglet as f,Tons as p,n as m,t as h}from"./CountBadge.stories-CsxLpeeL.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(t.h1,{id:`countbadge`,children:`CountBadge`}),`
`,(0,v.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Source code`}),` : à ne pas confondre avec `,(0,v.jsx)(`code`,{children:`Badge`}),` d'Ant Design, qui est une pastille flottante en position absolue`]}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Maquette`}),` : Figma Badge Type=Count `,(0,v.jsx)(`code`,{children:`15:38`})]})]}),`
`,(0,v.jsxs)(t.p,{children:[`Pastille de comptage : hauteur 20, radius 6, chiffre en `,(0,v.jsx)(t.code,{children:`text/on-dark`}),`. Elle se pose `,(0,v.jsx)(t.strong,{children:`dans le flux`}),`,
à côté d'un libellé, et non en exposant sur une icône. La couleur porte le sens : `,(0,v.jsx)(t.code,{children:`info`}),` pour un
état neutre (nombre de filtres actifs), `,(0,v.jsx)(t.code,{children:`warning`}),` pour des éléments à traiter, `,(0,v.jsx)(t.code,{children:`success`}),` pour
« rien à traiter ».`]}),`
`,(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(i,{of:u}),`
`,(0,v.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Jamais la pastille seule.`}),` Elle accompagne toujours un libellé lisible : le nombre sans son
objet ne veut rien dire, et un lecteur d'écran annoncerait « 3 » sans contexte.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Le ton est `,(0,v.jsx)(t.strong,{children:`sémantique`}),`. Un compteur d'alertes non traitées est `,(0,v.jsx)(t.code,{children:`warning`}),`, pas `,(0,v.jsx)(t.code,{children:`info`}),` parce
que le bleu s'accorde mieux avec la barre.`]}),`
`,(0,v.jsxs)(t.li,{children:[`La pastille disparaît quand le compte vaut zéro, sauf si l'absence est l'information (`,(0,v.jsx)(t.code,{children:`success`}),`
sur un tableau de bord de conformité).`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`flex: 0 0 auto`}),` : la pastille ne se comprime jamais dans une rangée serrée, contrairement au
libellé qui peut être tronqué.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Nombre de filtres actifs`}),` sur le bouton Filters :`]}),`
`,(0,v.jsx)(a,{of:d}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Éléments à traiter`}),` sur un onglet :`]}),`
`,(0,v.jsx)(a,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,v.jsxs)(t.ol,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Conteneur`}),` : hauteur 20, largeur minimale 20, padding horizontal 6, radius 6, fond
sémantique selon le ton.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Chiffre`}),` : Body/Book 12 en `,(0,v.jsx)(t.code,{children:`text/on-dark`}),`, centré.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,v.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Information couleur`,`Le ton n'est jamais le seul porteur du sens : le libellé adjacent dit de quoi il s'agit (RGAA 3.1).`],[`Contraste`,`Chiffre blanc sur fond sémantique : rapport minimal 4,5:1 vérifié sur les trois tons (RGAA 3.2).`],[`Contenu dynamique`,(0,v.jsxs)(v.Fragment,{children:[`Quand le compte change sans action de l'utilisateur, la zone qui le contient porte un`,` `,(0,v.jsx)(t.code,{children:`aria-live="polite"`}),` — au niveau du conteneur, pas de la pastille (RGAA 7.4).`]})]]}),`
`,(0,v.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Écart assumé.`}),` Le `,(0,v.jsx)(t.code,{children:`Badge`}),` d'Ant Design n'a pas la même anatomie : positionnement absolu,
radius pleine hauteur, palette propre. D'où un composant construit plutôt qu'une enveloppe.
Conséquence directe : `,(0,v.jsxs)(t.strong,{children:[(0,v.jsx)(t.code,{children:`Badge`}),` n'est pas réexporté par `,(0,v.jsx)(t.code,{children:`src/ui.ts`})]}),`. Tant qu'il l'était, un
écran a rendu la pastille flottante d'AntD sur le bouton Filters au lieu du compteur dans le
flux. Un besoin, une entrée.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`À construire.`}),` Le format des grands nombres (« 99+ ») n'est pas décrit dans la maquette.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),s(),r(),m(),c()}))();export{_ as default};