import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{AvecFiltresActifs as u,Vierge as d,n as f,t as p}from"./FilterPanel.stories-6A9P8-Nl.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o,{of:p}),`
`,(0,g.jsx)(t.h1,{id:`filterpanel`,children:`FilterPanel`}),`
`,(0,g.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,g.jsxs)(`span`,{children:[(0,g.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,g.jsxs)(`span`,{children:[(0,g.jsx)(`b`,{children:`Source code`}),` : remplace huit « selectors » sans primitive partagée`]}),(0,g.jsxs)(`span`,{children:[(0,g.jsx)(`b`,{children:`Maquette`}),` : Figma `,(0,g.jsx)(`code`,{children:`145:73`}),`, test de filtres `,(0,g.jsx)(`code`,{children:`631:1093`})]})]}),`
`,(0,g.jsxs)(t.p,{children:[`Panneau de filtres en `,(0,g.jsx)(t.strong,{children:`cascade à deux niveaux`}),` : le niveau 1 liste les dimensions, le niveau 2
affiche les valeurs de la dimension survolée. C'est le modèle `,(0,g.jsx)(t.strong,{children:`panneau`}),`, réservé aux listes à
nombreuses dimensions.`]}),`
`,(0,g.jsx)(t.h2,{id:`les-deux-modèles-de-filtrage-du-produit`,children:`Les deux modèles de filtrage du produit`}),`
`,(0,g.jsx)(t.p,{children:`Le choix ne se discute pas écran par écran, il découle du nombre de dimensions.`}),`
`,(0,g.jsx)(l,{headers:[``,`Modèle panneau`,`Modèle exposé`],rows:[[`Quand`,`4 dimensions ou plus`,`3 dimensions ou moins`],[`Déclencheur`,`Un bouton « Filters » unique, avec CountBadge`,`Un sélecteur par dimension dans la barre d'outils`],[`Barre de chips`,`Obligatoire`,`Seulement si un filtre actif n'est pas lisible dans la barre`],[`Pourquoi`,`Aligner huit sélecteurs sature la barre et rend la lecture impossible`,`Ouvrir un panneau pour deux cases coûte deux clics de trop`]]}),`
`,(0,g.jsx)(a,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Compteurs, pas de pastilles colorées.`}),` Le niveau 1 affiche « 2 » à côté de la dimension
filtrée. Une pastille dit qu'il y a un filtre ; un compteur dit combien : à surface égale, le
compteur porte strictement plus d'information.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Choix multiple par défaut, choix unique pour les périodes.`}),` Une période cumulée
(« Today » + « Last 7 days ») n'a pas de sens : choisir un préréglage efface la plage absolue,
et inversement. D'où `,(0,g.jsx)(t.code,{children:`onSet`}),` en plus de `,(0,g.jsx)(t.code,{children:`onToggle`}),`.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Application immédiate.`}),` Cocher filtre. Pas de bouton « Appliquer » : le résultat sous les yeux
vaut mieux qu'une confirmation à l'aveugle, et l'utilisateur peut décocher aussitôt.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Chaque dimension a son `,(0,g.jsx)(t.strong,{children:`pied « CLEAR »`}),` ; le panneau a le sien pour tout vider. Les deux
portent l'icône balai, sur fond `,(0,g.jsx)(t.code,{children:`bg/window`}),` qui blanchit au survol.`]}),`
`,(0,g.jsxs)(t.li,{children:[`Le calendrier d'Ant Design est `,(0,g.jsx)(t.strong,{children:`ancré dans le panneau`}),` (`,(0,g.jsx)(t.code,{children:`getPopupContainer`}),`) : sans cela il se
rend dans un portail à la racine du document et le clic sur une date est traité comme un clic
extérieur, qui referme tout avant la sélection de la date de fin.`]}),`
`]}),`
`,(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,g.jsxs)(t.ol,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Niveau 1`}),` : liste des dimensions, icône + libellé + compteur de valeurs cochées.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Niveau 2`}),` : valeurs de la dimension survolée. Cases à cocher, ou sélecteur de période.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Pied de dimension`}),` : « CLEAR `,`{DIMENSION}`,` », icône balai, fond `,(0,g.jsx)(t.code,{children:`bg/window`}),` → `,(0,g.jsx)(t.code,{children:`bg/hover`}),`.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Pied de panneau`}),` : « CLEAR ALL FILTERS ».`]}),`
`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,g.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Sémantique`,(0,g.jsxs)(g.Fragment,{children:[`Les rangées de valeurs sont des `,(0,g.jsx)(t.code,{children:`div role="checkbox"`}),` avec`,` `,(0,g.jsx)(t.code,{children:`aria-checked`}),` : un `,(0,g.jsx)(t.code,{children:`label`}),` imbriqué dans une rangée cliquable avale le clic sur la case (RGAA 7.1, 11.x).`]})],[`Clavier`,`Le niveau 2 s'ouvre au survol ET au focus clavier : un panneau qui ne réagit qu'à la souris est inatteignable au clavier (RGAA 7.3, 13.x).`],[`Contenu dynamique`,(0,g.jsxs)(g.Fragment,{children:[`Le nombre de résultats est annoncé après chaque bascule dans une zone`,` `,(0,g.jsx)(t.code,{children:`aria-live="polite"`}),` (RGAA 7.4).`]})],[`Information couleur`,`Une dimension filtrée est signalée par un compteur chiffré, pas par une simple pastille de couleur (RGAA 3.1).`]]}),`
`,(0,g.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Ajouté en maquette.`}),` En production, chaque écran de liste filtre à sa façon : positions,
affichages et comportements diffèrent d'un écran à l'autre. Ce composant est la réponse à
l'incohérence remontée par le client.`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`À construire.`}),` La recherche dans les valeurs d'une dimension très longue (labels, owners) et
l'enregistrement d'un jeu de filtres en vue nommée.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),s(),r(),f(),c()}))();export{h as default};