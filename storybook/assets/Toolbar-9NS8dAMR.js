import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{ActionsSeules as u,Dont as d,RechercheSeule as f,Standard as p,n as m,t as h}from"./Toolbar.stories-Dnz0IaFF.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(t.h1,{id:`toolbar`,children:`Toolbar`}),`
`,(0,v.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Source code`}),` : `,(0,v.jsx)(`code`,{children:`libs/basic/table-view-filters`})]}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Maquette`}),` : Figma Table / Toolbar `,(0,v.jsx)(`code`,{children:`21:65`}),`, règle ActionBar/Toolbar `,(0,v.jsx)(`code`,{children:`617:2`})]})]}),`
`,(0,v.jsxs)(t.p,{children:[`Barre d'outils d'un tableau. Recherche à gauche, actions à droite, `,(0,v.jsx)(t.strong,{children:`ordre stable d'un écran à
l'autre`}),`. Elle se pose en haut du panneau qui contient le tableau, jamais ailleurs.`]}),`
`,(0,v.jsx)(a,{of:p}),`
`,(0,v.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsxs)(t.p,{children:[`Les booléens de visibilité de la maquette (`,(0,v.jsx)(t.code,{children:`Show search`}),`, `,(0,v.jsx)(t.code,{children:`Show filter`}),`, `,(0,v.jsx)(t.code,{children:`Show edit view`}),`,
`,(0,v.jsx)(t.code,{children:`Show export`}),`, `,(0,v.jsx)(t.code,{children:`Show primary`}),`) deviennent en code deux emplacements que la page remplit ou non :
`,(0,v.jsx)(t.code,{children:`search`}),` et `,(0,v.jsx)(t.code,{children:`actions`}),`. Ne pas passer un emplacement revient à mettre son booléen à `,(0,v.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`ce-qui-va-dans-la-toolbar-et-ce-qui-ny-va-pas`,children:`Ce qui va dans la Toolbar, et ce qui n'y va pas`}),`
`,(0,v.jsx)(l,{headers:[``,`Toolbar`,`ActionBar`],rows:[[`Portée`,`Le tableau et son contenu`,`La page ou la ressource entière`],[`Exemples`,`Recherche, Filters, Edit view, actions de sélection`,`New segment, Export, Edit, Delete`],[`Position`,`Au-dessus du tableau`,`En haut de l'écran, à droite du fil d'ariane`]]}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Le test qui tranche`}),` : si l'action garde du sens quand le tableau est vide, elle est de page.
« New segment » crée une ressource indépendante de tout filtre : sa place est dans l'ActionBar.
« Edit view » configure les colonnes du tableau : sa place est ici, à côté de ce qu'elle modifie.`]}),`
`,(0,v.jsxs)(t.p,{children:[`Sur une liste standard, cela veut dire `,(0,v.jsx)(t.code,{children:`Show export`}),` et `,(0,v.jsx)(t.code,{children:`Show primary`}),` à `,(0,v.jsx)(t.strong,{children:`false`}),`.`]}),`
`,(0,v.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Ordre fixe`}),` : recherche à gauche, puis Filters, puis Edit view. Une action au même endroit
d'un écran à l'autre s'atteint sans la chercher.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Jeu d'icônes normé`}),` : Filters = `,(0,v.jsx)(t.code,{children:`filter`}),`, Edit view = `,(0,v.jsx)(t.code,{children:`view`}),`, Export = `,(0,v.jsx)(t.code,{children:`download`}),`, création =
`,(0,v.jsx)(t.code,{children:`plus`}),`. Pas de substitution.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Icônes sur tous les boutons de la rangée, ou sur aucun.`}),` Un mélange donne une rangée bancale.`]}),`
`,(0,v.jsxs)(t.li,{children:[`La Toolbar se `,(0,v.jsx)(t.strong,{children:`dose par module`}),` : Experiments n'a pas d'action primaire, Feeds Overview n'a
qu'une recherche. Un emplacement vide se retire, il ne se remplit pas pour faire symétrique.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Le champ de recherche est `,(0,v.jsx)(t.strong,{children:`le seul Input du DS sans label visible`}),` : la loupe et le placeholder
suffisent à en dire la fonction. Il porte quand même un `,(0,v.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Recherche seule`}),` : un tableau court, sans dimension à filtrer.`]}),`
`,(0,v.jsx)(a,{of:f}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`Actions seules`}),` : le tableau se lit d'un coup d'œil, la recherche serait du décor.`]}),`
`,(0,v.jsx)(a,{of:u}),`
`,(0,v.jsx)(t.h3,{id:`à-éviter`,children:`À éviter`}),`
`,(0,v.jsx)(a,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,v.jsxs)(t.ol,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Rangée`}),` : `,(0,v.jsx)(t.code,{children:`space-between`}),`, gap 12, alignée sur la largeur du tableau.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Recherche`}),` : Input de 400, suffixe loupe 14 en `,(0,v.jsx)(t.code,{children:`text/lighter`}),`, effaçable.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Actions`}),` : Buttons `,(0,v.jsx)(t.code,{children:`Default`}),` de 32, gap 12, icône 14 à gauche du libellé.`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,v.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Sémantique`,(0,v.jsxs)(v.Fragment,{children:[`La rangée porte `,(0,v.jsx)(t.code,{children:`role="toolbar"`}),` ; la recherche est un`,` `,(0,v.jsx)(t.code,{children:`<input type="search">`}),` avec `,(0,v.jsx)(t.code,{children:`aria-label`}),`, le placeholder ne tenant pas lieu de label (RGAA 11.1).`]})],[`Navigation`,`Ordre de tabulation identique à l'ordre visuel : recherche, puis actions de gauche à droite (RGAA 12.8).`],[`Contenu dynamique`,(0,v.jsxs)(v.Fragment,{children:[`La recherche filtre au fil de la frappe : le nombre de résultats est annoncé dans une zone`,` `,(0,v.jsx)(t.code,{children:`aria-live="polite"`}),` (RGAA 7.4).`]})],[`Images`,`Les icônes des boutons sont décoratives : le libellé texte porte l'information (RGAA 1.2).`]]}),`
`,(0,v.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Écart avec la production.`}),` Les actions de page et les actions de tableau sont mélangées écran
par écran. La règle de portée est la réponse à l'incohérence remontée par le client ; l'avant /
après est dans la page Audit du fichier Figma.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`À construire.`}),` La barre d'actions groupées qui remplace la Toolbar quand des lignes sont
sélectionnées (« 3 sélectionnés · Supprimer · Exporter »).`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),s(),r(),m(),c()}))();export{_ as default};