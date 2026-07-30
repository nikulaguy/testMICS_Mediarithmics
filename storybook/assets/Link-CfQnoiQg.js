import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{AvecIcones as u,Defaut as d,Desactive as f,SurFondSombre as p,Tailles as m,n as h,t as g}from"./Link.stories-woAy0Xeu.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`link`,children:`Link`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Catégorie`}),` : construit. Ant Design n'a pas d'équivalent : son lien de typographie ne connaît ni
les deux tailles, ni le thème sur fond sombre, ni l'état désactivé.`]}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Source code`}),` : `,(0,y.jsx)(t.code,{children:`<a>`}),` / `,(0,y.jsx)(t.code,{children:`Typography.Link`}),` stylés au cas par cas en production. Le composant
unifie ces usages. `,(0,y.jsx)(t.strong,{children:`Maquette`}),` : Figma `,(0,y.jsx)(t.code,{children:`567:140`}),`, doc `,(0,y.jsx)(t.code,{children:`572:2`}),`.`]}),`
`,(0,y.jsxs)(t.p,{children:[`Lien textuel cliquable, seul ou en fin de phrase, avec icônes optionnelles de part et d'autre.
C'est le `,(0,y.jsx)(t.strong,{children:`seul atome de lien du système`}),` : niveaux du fil d'ariane, liens de tableau, actions
légères. Une action principale d'écran reste un Button.`]}),`
`,(0,y.jsx)(a,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(i,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`couleurs-par-thème-et-par-état`,children:`Couleurs par thème et par état`}),`
`,(0,y.jsx)(l,{headers:[`Thème`,`Défaut`,`Survol`,`Désactivé`],rows:[[`onLight`,(0,y.jsx)(t.code,{children:`link/default`}),(0,y.jsx)(t.code,{children:`link/hover`}),(0,y.jsx)(t.code,{children:`text/lightest`})],[`onDark`,(0,y.jsx)(t.code,{children:`link/on-dark`}),(0,y.jsx)(t.code,{children:`text/on-dark`}),(0,y.jsx)(t.code,{children:`text/on-dark-disabled`})]]}),`
`,(0,y.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[`Action légère ou navigation inline (Refresh, See more, niveaux du fil d'ariane). L'action
principale d'un écran reste un `,(0,y.jsx)(t.strong,{children:`Button`}),`.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`M (12)`}),` par défaut dans les composants et le corps de texte ; `,(0,y.jsx)(t.strong,{children:`L (14)`}),` pour un lien isolé
ou mis en avant.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Sur une surface navy (Actionbar d'édition, tooltip), le thème `,(0,y.jsx)(t.strong,{children:`onDark est obligatoire`}),` :
jamais le navy `,(0,y.jsx)(t.code,{children:`link/default`}),` sur fond sombre.`]}),`
`,(0,y.jsxs)(t.li,{children:[`À ne pas confondre avec `,(0,y.jsx)(t.code,{children:`Button type="link"`}),`, qui est un bouton à paddings pour les zones
d'action. Link est l'atome texte nu, sans padding.`]}),`
`]}),`
`,(0,y.jsx)(a,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,y.jsxs)(t.ol,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Libellé`}),` : Body/Book 12 en taille M, Body/Large 14 en taille L. La couleur dépend du thème
et de l'état.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Icônes optionnelles`}),` (swap) de part et d'autre, calées sur la taille du texte, même couleur
que le libellé, gap 4.`]}),`
`]}),`
`,(0,y.jsx)(a,{of:u}),`
`,(0,y.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,y.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Sémantique`,(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(t.code,{children:`<a href>`}),` si le lien navigue, `,(0,y.jsx)(t.code,{children:`<button>`}),` s'il agit dans la page (ex. Refresh). Jamais une `,(0,y.jsx)(t.code,{children:`div`}),` cliquable (RGAA 7.1, 7.3).`]})],[`Liens`,`Intitulé explicite hors contexte : pas de « cliquez ici », et l'icône seule ne suffit pas (RGAA 6.1, 6.2).`],[`Information couleur`,`Dans un paragraphe, distinguer le lien autrement que par la couleur seule (soulignement au survol) et garantir un contraste de 4,5:1 (RGAA 3.1, 3.2).`]]}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Ajouté en maquette.`}),` En production, les liens sont des `,(0,y.jsx)(t.code,{children:`<a>`}),` ou des `,(0,y.jsx)(t.code,{children:`Typography.Link`}),` stylés
au cas par cas. Le composant unifie tailles, thèmes et états. Les tokens `,(0,y.jsx)(t.code,{children:`link/on-dark`}),` et
`,(0,y.jsx)(t.code,{children:`text/on-dark-disabled`}),` ont été créés pour le fond sombre : l'ancien fil d'ariane utilisait un
bleu clair codé en dur.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`À construire.`}),` L'état Focus visible au clavier, distinct du survol, n'est pas encore décrit
dans la maquette.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),s(),r(),h(),c()}))();export{v as default};