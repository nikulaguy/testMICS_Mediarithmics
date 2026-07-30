import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{BacASable as u,DansUnFormulaire as d,Deplie as f,Dont as p,Replie as m,n as h,t as g}from"./SectionToggle.stories-ZLUmBChS.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`sectiontoggle`,children:`SectionToggle`}),`
`,(0,y.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Source code`}),` : `,(0,y.jsx)(`code`,{children:`Button.optional-section-title`}),` (navigator) et `,(0,y.jsx)(`code`,{children:`Collapse.Panel`}),` (NewPluginForm) — deux implémentations`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Maquette`}),` : Figma `,(0,y.jsx)(`code`,{children:`111:39`})]})]}),`
`,(0,y.jsxs)(t.p,{children:[`En-tête cliquable d'une section repliable de formulaire (« Advanced »). Icône `,(0,y.jsx)(t.code,{children:`settings`}),`, libellé
et chevron, le tout en `,(0,y.jsx)(t.code,{children:`primary`}),`. Le pattern existe dans `,(0,y.jsx)(t.strong,{children:`plus de dix formulaires`}),` du produit —
segment, campaign, creative, settings, datastore — avec deux implémentations différentes. Ce
composant les unifie.`]}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(i,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Réservé aux champs optionnels.`}),` Un champ obligatoire ne se replie jamais : ce qui est caché
sera rempli après un message d'erreur à la soumission, pas avant.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Un seul par groupe de champs.`}),` Deux sections repliables côte à côte transforment le
formulaire en jeu de piste.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Libellé court`}),`, un mot ou deux. C'est un intitulé de section, pas une phrase.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Le chevron porte l'état`}),` : `,(0,y.jsx)(t.code,{children:`chevron-right`}),` replié, `,(0,y.jsx)(t.code,{children:`chevron-bottom`}),` déplié. Il double
`,(0,y.jsx)(t.code,{children:`aria-expanded`}),`, il ne le remplace pas.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Replié par défaut.`}),` Si la section doit être ouverte à l'arrivée, c'est qu'elle n'a pas à être
repliable.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Replié`}),` — l'état par défaut :`]}),`
`,(0,y.jsx)(a,{of:m}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Dans un formulaire`}),` — obligatoires en haut, optionnel replié en bas :`]}),`
`,(0,y.jsx)(a,{of:d}),`
`,(0,y.jsx)(t.h3,{id:`à-éviter`,children:`À éviter`}),`
`,(0,y.jsx)(a,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,y.jsxs)(t.ol,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`En-tête`}),` : bouton en ligne, hauteur 24, gap 8, tout en `,(0,y.jsx)(t.code,{children:`primary`}),`.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Icône`}),` `,(0,y.jsx)(t.code,{children:`settings`}),` de 16, `,(0,y.jsx)(t.strong,{children:`libellé`}),` Body/Medium 12, `,(0,y.jsx)(t.strong,{children:`chevron`}),` de 12.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Panneau`}),` : le contenu, sous l'en-tête, à 16 d'écart. Masqué par `,(0,y.jsx)(t.code,{children:`hidden`}),` quand replié —
pas seulement par `,(0,y.jsx)(t.code,{children:`display: none`}),` en CSS, pour qu'il sorte aussi de l'ordre de tabulation.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,y.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Sémantique`,(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(t.code,{children:`<button type="button">`}),` natif, avec `,(0,y.jsx)(t.code,{children:`aria-expanded`}),` et`,` `,(0,y.jsx)(t.code,{children:`aria-controls`}),` pointant sur l'identifiant du panneau (RGAA 7.1).`]})],[`Images`,`Icône settings et chevron décoratifs : aria-hidden. L'état est porté par aria-expanded, pas par le chevron (RGAA 1.2).`],[`Navigation`,`Le contenu replié est retiré de l’ordre de tabulation : on ne tabule pas dans un panneau invisible (RGAA 12.8).`],[`Contraste`,`⚠ primary #00a1df sur blanc = 2,9:1, sous le seuil de 4,5:1 pour du texte (RGAA 3.2). Dette héritée de la production, à arbitrer.`]]}),`
`,(0,y.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Écart avec la production.`}),` Deux implémentations coexistent : un `,(0,y.jsx)(t.code,{children:`Button`}),` custom stylé par
`,(0,y.jsx)(t.code,{children:`common/form.less`}),`, et un `,(0,y.jsx)(t.code,{children:`Collapse.Panel`}),` d'Ant Design. Ce composant les remplace toutes les
deux.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`À construire.`}),` L'état désactivé pour une section non ouvrable, décrit comme évolution dans la
maquette. Le code l'accepte déjà (`,(0,y.jsx)(t.code,{children:`disabled`}),`), la maquette ne le dessine pas.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),s(),r(),h(),c()}))();export{v as default};