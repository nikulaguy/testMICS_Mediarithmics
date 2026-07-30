import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{BacASable as u,DernierePage as d,PetitVolume as f,PremierePage as p,SousUnTableau as m,n as h,t as g}from"./Pagination.stories-BOaBC6ZN.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,y.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Catégorie`}),` : enveloppé`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Source code`}),` : AntD v5 Pagination (`,(0,y.jsx)(`code`,{children:`table-view`}),`, `,(0,y.jsx)(`code`,{children:`collection-view`}),`)`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Maquette`}),` : Figma Pagination `,(0,y.jsx)(`code`,{children:`16:34`})]})]}),`
`,(0,y.jsxs)(t.p,{children:[`Navigation de pages. Ant Design gère déjà l'ellipsis, le clavier et les extrémités désactivées :
le DS garde son rendu et impose la `,(0,y.jsx)(t.strong,{children:`position`}),` et les réglages. Structure : précédent · pages ·
ellipsis · dernière · suivant · sélecteur de taille.`]}),`
`,(0,y.jsx)(a,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(i,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`En bas à droite de la liste`}),`, toujours. C'est là que finit la lecture du tableau ; la
pagination y est sur le chemin du regard, nulle part ailleurs.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Sélecteur de taille `,(0,y.jsx)(t.strong,{children:`si les volumes le justifient`}),`. Sur 24 éléments, il ajoute un contrôle
pour rien.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Précédent et suivant `,(0,y.jsx)(t.strong,{children:`désactivés aux extrémités`}),` plutôt que masqués : la barre garde la même
largeur d'une page à l'autre, les autres contrôles ne bougent pas.`]}),`
`,(0,y.jsxs)(t.li,{children:[`La page courante est `,(0,y.jsx)(t.strong,{children:`conservée au tri`}),` et `,(0,y.jsx)(t.strong,{children:`réinitialisée au filtre`}),` : trier ne change pas
l'ensemble des résultats, filtrer si.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.code,{children:`total`}),` compte des `,(0,y.jsx)(t.strong,{children:`éléments`}),`, pas des pages. C'est l'erreur la plus fréquente sur ce composant.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Première page`}),` : « précédent » désactivé.`]}),`
`,(0,y.jsx)(a,{of:p}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Dernière page`}),` : « suivant » désactivé.`]}),`
`,(0,y.jsx)(a,{of:d}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Petit volume`}),` : pas de sélecteur de taille.`]}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Sous un tableau`}),`, sa seule position.`]}),`
`,(0,y.jsx)(a,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,y.jsxs)(t.ol,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Boutons de page`}),` : 32 × 32, `,(0,y.jsx)(t.code,{children:`radius/base`}),`, fond `,(0,y.jsx)(t.code,{children:`bg/container`}),`, bordure `,(0,y.jsx)(t.code,{children:`border/input`}),`.
Page courante : bordure et chiffre en `,(0,y.jsx)(t.code,{children:`primary`}),`, Circular Medium 12.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Ellipsis`}),` : « ••• » en `,(0,y.jsx)(t.code,{children:`text/lighter`}),`, non cliquable.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Sélecteur de taille`}),` : hauteur 32, padding horizontal 10, « n / page ».`]}),`
`,(0,y.jsx)(t.li,{children:`Gap 8 entre tous les éléments.`}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,y.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Navigation`,(0,y.jsxs)(y.Fragment,{children:[`L'ensemble est dans un `,(0,y.jsx)(t.code,{children:`<nav aria-label="Pagination">`}),` : c'est un repère de navigation à part entière (RGAA 12.6).`]})],[`États`,(0,y.jsxs)(y.Fragment,{children:[`La page courante porte `,(0,y.jsx)(t.code,{children:`aria-current="page"`}),` ; la bordure colorée seule ne l'annonce pas (RGAA 3.1, 9.x).`]})],[`Liens et boutons`,`Précédent et suivant ont un intitulé explicite (« Page précédente »), pas un chevron nu (RGAA 6.1, 7.3).`],[`Contenu dynamique`,(0,y.jsxs)(y.Fragment,{children:[`Le changement de page met à jour le tableau sans recharger : annoncer le nouvel intervalle dans une zone `,(0,y.jsx)(t.code,{children:`aria-live="polite"`}),` (RGAA 7.4).`]})]]}),`
`,(0,y.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Conforme à la production.`}),` Le composant reprend le rendu AntD thémé, sans écart de maquette.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`À construire.`}),` Le saut direct « Aller à la page », utile au-delà d'une vingtaine de pages.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),s(),r(),h(),c()}))();export{v as default};