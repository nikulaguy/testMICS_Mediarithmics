import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{AvecLabels as u,BacASable as d,LabelsVides as f,SansLabels as p,TitreSeul as m,n as h,t as g}from"./ResourceTitleHeader.stories-BAeGmSy0.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`resourcetitleheader`,children:`ResourceTitleHeader`}),`
`,(0,y.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Source code`}),` : bloc titre refait page par page sur les écrans de détail`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Maquette`}),` : Figma Resource Title Header `,(0,y.jsx)(`code`,{children:`250:88`}),` — 5 écrans de détail de segment`]})]}),`
`,(0,y.jsxs)(t.p,{children:[`Bloc titre d'une page de détail. Ligne 1 : le nom de la ressource à gauche, ses métadonnées à
droite. Ligne 2 : les labels. Les métadonnées ne se mettent `,(0,y.jsx)(t.strong,{children:`jamais`}),` à gauche : elles y
concurrenceraient le nom, qui est la seule chose que l'utilisateur cherche en arrivant.`]}),`
`,(0,y.jsx)(a,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(i,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Un seul titre principal par écran.`}),` Le composant rend un `,(0,y.jsx)(t.code,{children:`h1`}),` par défaut ; passer `,(0,y.jsx)(t.code,{children:`as="h2"`}),`
quand il est imbriqué dans une carte, sous un titre de page.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Les métadonnées sont `,(0,y.jsx)(t.strong,{children:`secondaires`}),` : `,(0,y.jsx)(t.code,{children:`text/lighter`}),`, Body/Book 12, icône 14. Elles situent, elles
n'attirent pas.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.code,{children:`labels={undefined}`}),` masque la ligne entière ; `,(0,y.jsx)(t.code,{children:`labels={[]}`}),` la garde avec le seul bouton
d'ajout. Les deux cas existent : une ressource sans labels possibles, et une ressource qui n'en
a pas encore.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Les chips sont des `,(0,y.jsx)(t.strong,{children:`Tag`}),` du DS, fermables si `,(0,y.jsx)(t.code,{children:`onRemoveLabel`}),` est fourni. Pas de chip maison.`]}),`
`,(0,y.jsx)(t.li,{children:`Le titre est du texte, pas un lien : on y est déjà.`}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Sans labels`}),` : la ligne 2 disparaît entièrement.`]}),`
`,(0,y.jsx)(a,{of:p}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Aucun label encore posé`}),` : le bouton d'ajout reste, seul.`]}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Titre seul`}),` : le type se lit déjà dans le fil d'ariane.`]}),`
`,(0,y.jsx)(a,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,y.jsxs)(t.ol,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Ligne 1`}),` : titre Headline 4 (Circular Medium 16 / 24) en `,(0,y.jsx)(t.code,{children:`text/darker`}),`, `,(0,y.jsx)(t.code,{children:`flex: 1`}),` ; puis le
type et la date, gap 12, chacun icône 14 + libellé.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Ligne 2`}),` (si `,(0,y.jsx)(t.code,{children:`labels`}),`) : bouton « Add label » taille M avec le glyphe `,(0,y.jsx)(t.code,{children:`plus`}),`, puis les Tag,
gap 8, retour à la ligne autorisé.`]}),`
`,(0,y.jsx)(t.li,{children:`Gap 12 entre les deux lignes.`}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,y.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Structure`,(0,y.jsxs)(y.Fragment,{children:[`Le titre est un vrai niveau de titre (`,(0,y.jsx)(t.code,{children:`h1`}),` sur une page de détail), pas un`,` `,(0,y.jsx)(t.code,{children:`div`}),` stylé : c'est le repère de navigation des lecteurs d'écran (RGAA 9.1).`]})],[`Images`,`Les icônes de type et de date sont décoratives, aria-hidden : le libellé adjacent porte l'information (RGAA 1.2).`],[`Liens et boutons`,(0,y.jsxs)(y.Fragment,{children:[`« Add label » est un bouton nommé ; la croix d'un chip expose`,` `,(0,y.jsxs)(t.code,{children:[`aria-label="Retirer `,`{label}`,`"`]}),` (RGAA 7.3, 11.9).`]})],[`Contraste`,`Les métadonnées en text/lighter atteignent 4,5:1 sur bg/container (RGAA 3.2).`]]}),`
`,(0,y.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Écart avec la production.`}),` Le bloc est refait page par page sur les cinq écrans de détail de
segment, avec des alignements et des tailles qui divergent.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`À construire.`}),` Le titre éditable en ligne (renommer sans passer par un formulaire) et la
pastille de statut à côté du nom.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),s(),r(),h(),c()}))();export{v as default};