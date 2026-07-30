import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{AvecPlafond as u,BacASable as d,PlafondAtteint as f,Rangee as p,SansPlafond as m,n as h,t as g}from"./Counter.stories-Cwhk_ygI.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`counter`,children:`Counter`}),`
`,(0,y.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Source code`}),` : `,(0,y.jsx)(`code`,{children:`libs/basic/counter`}),` + `,(0,y.jsx)(`code`,{children:`counter-dashboard`})]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Maquette`}),` : Figma Counter `,(0,y.jsx)(`code`,{children:`185:81`})]})]}),`
`,(0,y.jsxs)(t.p,{children:[`Carte de compteur d'un tableau de bord : intitulé, barre optionnelle, valeur. La barre n'apparaît
`,(0,y.jsx)(t.strong,{children:`que s'il y a un plafond`}),` : une progression sans maximum ne veut rien dire. Le chiffre est
toujours là, la barre ne fait que l'illustrer.`]}),`
`,(0,y.jsx)(a,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(i,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsxs)(t.strong,{children:[`La barre suit `,(0,y.jsx)(t.code,{children:`max`}),`.`]}),` Passer `,(0,y.jsx)(t.code,{children:`max`}),` affiche la barre et le « / N » ; l'omettre donne un KPI
simple. Pas de booléen séparé : deux sources de vérité pour une même chose finissent par diverger.`]}),`
`,(0,y.jsxs)(t.li,{children:[`La couleur de la barre est `,(0,y.jsx)(t.strong,{children:`doublée par le chiffre`}),`. Un utilisateur qui ne perçoit pas le vert
lit quand même « 82 / 100 ».`]}),`
`,(0,y.jsxs)(t.li,{children:[`L'infobulle porte `,(0,y.jsx)(t.strong,{children:`ce que le titre ne peut pas dire`}),` en trois mots : la période, le périmètre,
la règle de calcul. Pas une paraphrase du titre.`]}),`
`,(0,y.jsxs)(t.li,{children:[`En rangée, tous les Counters ont la `,(0,y.jsx)(t.strong,{children:`même largeur et la même hauteur`}),`. Un seul avec barre dans
une rangée sans barres décale les valeurs et casse la lecture en colonne.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Sans plafond`}),` : pas de barre.`]}),`
`,(0,y.jsx)(a,{of:m}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`En rangée`}),` sur un tableau de bord :`]}),`
`,(0,y.jsx)(a,{of:p}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Plafond atteint`}),` :`]}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,y.jsxs)(t.ol,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Carte`}),` : fond `,(0,y.jsx)(t.code,{children:`bg/container`}),`, `,(0,y.jsx)(t.code,{children:`radius/card`}),`, padding 24, gap 16.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Intitulé`}),` : Body/Medium 12 en `,(0,y.jsx)(t.code,{children:`text/normal`}),`, icône info 14 en `,(0,y.jsx)(t.code,{children:`text/lighter`}),` à droite.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Barre`}),` (si `,(0,y.jsx)(t.code,{children:`max`}),`) : hauteur 16, `,(0,y.jsx)(t.code,{children:`radius/card`}),`, piste `,(0,y.jsx)(t.code,{children:`bg/window`}),`, remplissage `,(0,y.jsx)(t.code,{children:`success`}),`.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Valeur`}),` : Headline (Circular Medium 24 / 28) en `,(0,y.jsx)(t.code,{children:`text/darker`}),`, suivie de « / N » en
Body/Book 12 `,(0,y.jsx)(t.code,{children:`text/lighter`}),`.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,y.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Sémantique`,(0,y.jsxs)(y.Fragment,{children:[`La barre porte `,(0,y.jsx)(t.code,{children:`role="progressbar"`}),` avec `,(0,y.jsx)(t.code,{children:`aria-valuenow`}),`,`,` `,(0,y.jsx)(t.code,{children:`aria-valuemin`}),`, `,(0,y.jsx)(t.code,{children:`aria-valuemax`}),` et `,(0,y.jsx)(t.code,{children:`aria-label`}),` = le titre (RGAA 7.1).`]})],[`Information couleur`,`Le remplissage vert est doublé par la valeur chiffrée : la couleur n'est jamais le seul porteur (RGAA 3.1).`],[`Contraste`,`Le remplissage success sur la piste bg/window atteint 3:1 ; la valeur en text/darker dépasse 4,5:1 (RGAA 3.2).`],[`Aide`,(0,y.jsxs)(y.Fragment,{children:[`L'icône info est atteignable au clavier (`,(0,y.jsx)(t.code,{children:`tabIndex`}),`) et porte le texte de l'infobulle en `,(0,y.jsx)(t.code,{children:`aria-label`}),` : une infobulle au survol seul est inaccessible (RGAA 7.3, 10.7).`]})]]}),`
`,(0,y.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Écart assumé.`}),` La maquette expose une prop `,(0,y.jsx)(t.code,{children:`Show progress`}),` distincte de `,(0,y.jsx)(t.code,{children:`Max`}),`. Le code déduit
la barre de la présence de `,(0,y.jsx)(t.code,{children:`max`}),` : un seul champ, pas d'état incohérent possible
(barre affichée sans plafond).`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`À construire.`}),` Les seuils colorés (vert / orange / rouge selon le taux de remplissage) et
l'indicateur de tendance (delta par rapport à la période précédente).`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),s(),r(),h(),c()}))();export{v as default};