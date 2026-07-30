import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{AvecLogo as u,BacASable as d,ChipsDeFiltre as f,Couleurs as p,Do as m,Dont as h,StatutsEtCategories as g,n as _,t as v}from"./Tag.stories-q59Rfrhi.js";function y(e){let t={b:`b`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o,{of:v}),`
`,(0,x.jsx)(t.h1,{id:`tag`,children:`Tag`}),`
`,(0,x.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,x.jsxs)(`span`,{children:[(0,x.jsx)(`b`,{children:`Catégorie`}),` : enveloppé (rend un Tag Ant Design en dessous)`]}),(0,x.jsxs)(`span`,{children:[(0,x.jsx)(`b`,{children:`Source code`}),` : `,(0,x.jsx)(`code`,{children:`frontend/libs/basic`}),` + AntD v5 Tag (mention-tag, labels-selector, statuts de liste)`]}),(0,x.jsxs)(`span`,{children:[(0,x.jsx)(`b`,{children:`Maquette`}),` : Figma `,(0,x.jsx)(`code`,{children:`15:18`}),`, doc `,(0,x.jsx)(`code`,{children:`90:8`})]})]}),`
`,(0,x.jsxs)(t.p,{children:[`Étiquette compacte. Affiche un statut, une catégorie ou un label. Fond rampe/100, bordure
rampe/300, texte rampe/700 ; radius `,(0,x.jsx)(t.code,{children:`radius/base`}),`, padding 2×8, texte Body/Book 12.
Les couleurs sont les rampes de marque.`]}),`
`,(0,x.jsx)(a,{of:p}),`
`,(0,x.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,x.jsx)(i,{of:d}),`
`,(0,x.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[`La couleur `,(0,x.jsx)(t.strong,{children:`porte un sens`}),` (statut, catégorie) et reste cohérente dans toute l'application.
Jamais décorative, jamais aléatoire.`]}),`
`,(0,x.jsxs)(t.li,{children:[`Le sens ne repose `,(0,x.jsx)(t.strong,{children:`pas sur la seule couleur`}),` : le texte du tag est explicite (« Actif », « Erreur »).`]}),`
`,(0,x.jsx)(t.li,{children:`Texte court, un à deux mots, sans ponctuation.`}),`
`,(0,x.jsx)(t.li,{children:`Limiter le nombre de couleurs simultanées dans une même vue pour préserver la lisibilité.`}),`
`]}),`
`,(0,x.jsx)(t.h3,{id:`à-faire`,children:`À faire`}),`
`,(0,x.jsx)(a,{of:m}),`
`,(0,x.jsx)(t.h3,{id:`à-éviter`,children:`À éviter`}),`
`,(0,x.jsx)(a,{of:h}),`
`,(0,x.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,x.jsx)(t.p,{children:`Les trois cas réels rencontrés dans le produit.`}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:`Statuts et catégories`}),`, non fermables :`]}),`
`,(0,x.jsx)(a,{of:g}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:`Chips de filtre sélectionnés`}),`, fermables (menu Labels, barre de filtres actifs) :`]}),`
`,(0,x.jsx)(a,{of:f}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:`Avec logo de société`}),` :`]}),`
`,(0,x.jsx)(a,{of:u}),`
`,(0,x.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,x.jsxs)(t.ol,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Conteneur`}),` : fond rampe/100, bordure 1 px rampe/300, radius `,(0,x.jsx)(t.code,{children:`radius/base`}),`, padding 2×8,
hauteur 26, gap 4.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Libellé`}),` : Body/Book 12 en rampe/700, contraste suffisant sur le fond /100.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Croix de retrait`}),` (si `,(0,x.jsx)(t.code,{children:`closable`}),`) : glyphe `,(0,x.jsx)(t.code,{children:`icon/close`}),` de `,(0,x.jsx)(t.strong,{children:`8 px`}),`, comme dans la maquette.
La cible de pointage fait 20 px grâce à un calque transparent en position absolue : hors flux,
il n'élargit pas le tag. Confort de pointage sans écart visuel.`]}),`
`]}),`
`,(0,x.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,x.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Sémantique`,(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.code,{children:`<span>`}),` pour l'étiquette ; la version fermable expose un`,` `,(0,x.jsxs)(t.code,{children:[`<button aria-label="Retirer `,`{label}`,`">`]}),`.`]})],[`Information couleur`,(0,x.jsxs)(x.Fragment,{children:[`La couleur porte une catégorie : elle est `,(0,x.jsx)(t.b,{children:`toujours`}),` doublée par le libellé texte (RGAA 3.1).`]})],[`Contraste`,`Le rapport texte/fond de chaque rampe est d'au moins 4,5:1 (RGAA 3.2).`]]}),`
`,(0,x.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Résolu, croix de retrait.`}),` Le glyphe est à 8 px comme dans la maquette ; la cible de pointage
de 20 px est obtenue par un calque transparent hors flux. Il n'y a plus d'écart à arbitrer.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Piège corrigé.`}),` Ant Design `,(0,x.jsx)(t.strong,{children:`clone`}),` le nœud passé en `,(0,x.jsx)(t.code,{children:`closeIcon`}),` pour y injecter `,(0,x.jsx)(t.code,{children:`onClick`}),`,
`,(0,x.jsx)(t.code,{children:`onKeyDown`}),`, `,(0,x.jsx)(t.code,{children:`role`}),`, `,(0,x.jsx)(t.code,{children:`tabIndex`}),` et `,(0,x.jsx)(t.code,{children:`className`}),`. Un composant React qui ne transmet pas ses props
DOM restantes les avale en silence : la croix s'affiche, et ne ferme rien. La règle générale est
dans « Le modèle d'une page composant » et dans `,(0,x.jsx)(t.code,{children:`ARCHITECTURE.md`}),`.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`À construire : tag à point de statut.`}),` Variante avec pastille de couleur et texte neutre,
pour les statuts où le fond coloré est trop présent.`]}),`
`]})]})}function b(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=t(),s(),r(),_(),c()}))();export{b as default};