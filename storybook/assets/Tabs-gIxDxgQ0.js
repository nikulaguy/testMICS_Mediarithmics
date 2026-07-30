import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{AvecBadge as u,BacASable as d,Debordement as f,Etats as p,OngletsDeDetail as m,n as h,t as g}from"./Tabs.stories-kVu1BilC.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,y.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Source code`}),` : AntD v5 Tabs (`,(0,y.jsx)(`code`,{children:`mcs-tabs`}),`)`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Maquette`}),` : Figma Tab `,(0,y.jsx)(`code`,{children:`17:61`}),`, Tab Bar `,(0,y.jsx)(`code`,{children:`249:107`})]})]}),`
`,(0,y.jsxs)(t.p,{children:[`Rangée d'onglets et sa ligne de base pleine largeur. Un onglet donne accès aux `,(0,y.jsx)(t.strong,{children:`sous-vues d'un
même contexte`}),` : les onglets d'un segment, d'un board. Ce n'est pas une navigation entre objets,
c'est le rôle du SideMenu.`]}),`
`,(0,y.jsx)(t.p,{children:`Occurrences en production : onglets de segment (4 écrans), de détail (5), de boards (9).`}),`
`,(0,y.jsx)(a,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(i,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Un seul actif`}),`, et un ordre stable d'un écran à l'autre. Un onglet qui change de place est un
onglet qu'on ne retrouve pas.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Libellés `,(0,y.jsx)(t.strong,{children:`courts`}),`, sans ponctuation. Le badge n'apparaît que s'il y a réellement quelque chose
à traiter.`]}),`
`,(0,y.jsxs)(t.li,{children:[`La ligne de base court sur `,(0,y.jsx)(t.strong,{children:`toute la largeur`}),` du conteneur, pas seulement sous les onglets :
c'est elle qui rattache la barre au contenu.`]}),`
`,(0,y.jsxs)(t.li,{children:[`L'actif n'est `,(0,y.jsx)(t.strong,{children:`pas porté par la couleur seule`}),` : le soulignement de 2 px le double.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Listes longues : `,(0,y.jsx)(t.strong,{children:`défilement horizontal`}),` plutôt qu'un retour à la ligne. Une barre d'onglets
sur deux lignes ne se lit plus comme une barre.`]}),`
`]}),`
`,(0,y.jsx)(a,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`débordement`,children:`Débordement`}),`
`,(0,y.jsxs)(t.p,{children:[`Quand les onglets ne tiennent plus, la rangée défile et un bouton « … » apparaît au bout, sur un
fond opaque et une ombre : le contenu passe visiblement `,(0,y.jsx)(t.strong,{children:`dessous`}),`, ce qui dit qu'il en reste.`]}),`
`,(0,y.jsxs)(t.p,{children:[`Sa dropdown liste les onglets `,(0,y.jsx)(t.strong,{children:`hors écran à cet instant`}),`, pas une liste figée. Au départ ce sont
ceux de droite ; après avoir défilé jusqu'au bout, ce sont ceux de gauche. Choisir une entrée
sélectionne l'onglet, affiche son contenu et le ramène dans le champ de vision.`]}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Avec badge`}),` : un nombre d'éléments à traiter.`]}),`
`,(0,y.jsx)(a,{of:u}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Onglets de détail`}),` d'un segment.`]}),`
`,(0,y.jsx)(a,{of:m}),`
`,(0,y.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,y.jsxs)(t.ol,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Onglet`}),` : hauteur 44, padding 12 haut / 10 bas, gap 6, libellé Circular Medium 14.
Défaut : libellé `,(0,y.jsx)(t.code,{children:`text/normal`}),`, trait bas transparent. Actif : libellé et trait de 2 px en
`,(0,y.jsx)(t.code,{children:`primary`}),`.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Badge`}),` : pastille ronde de 16, radius 8, fond `,(0,y.jsx)(t.code,{children:`warning`}),`, chiffre Circular Medium 10 blanc.
Anatomie distincte du `,(0,y.jsx)(t.code,{children:`CountBadge`}),` (20 de haut, radius 6) : ne pas les confondre.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Barre`}),` : gap 35 entre onglets, ligne de base de 1 px en `,(0,y.jsx)(t.code,{children:`border/input`}),`.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,y.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Sémantique`,(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(t.code,{children:`role="tablist"`}),` sur la barre, `,(0,y.jsx)(t.code,{children:`role="tab"`}),` + `,(0,y.jsx)(t.code,{children:`aria-selected`}),` `,`sur chaque onglet, `,(0,y.jsx)(t.code,{children:`role="tabpanel"`}),` sur le panneau, relié par`,` `,(0,y.jsx)(t.code,{children:`aria-controls`}),` (RGAA 7.1).`]})],[`Clavier`,`Un seul onglet dans l'ordre de tabulation (l'actif) ; les flèches gauche et droite déplacent la sélection. C'est le motif WAI-APG : Tab entre dans la barre, les flèches naviguent dedans (RGAA 7.3).`],[`Information couleur`,`L'onglet actif est signalé par le soulignement de 2 px en plus de la couleur (RGAA 3.1).`],[`Contenu dynamique`,`Le badge porte un nom accessible : « Alerts, 2 à traiter », pas « 2 » seul (RGAA 7.4).`]]}),`
`,(0,y.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Ajouté au code.`}),` L'état de survol n'est pas décrit dans la maquette. Sans lui, rien ne
distingue un onglet cliquable d'un intertitre tant qu'on n'a pas cliqué. Le libellé passe en
`,(0,y.jsx)(t.code,{children:`text/darker`}),` au survol.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Écart de mesure.`}),` La description Figma de la Tab Bar annonce un gap de 24, la géométrie du
composant en applique 35. Le code suit la géométrie ; à trancher côté maquette.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Construit.`}),` Le débordement en « … », que la maquette listait en évolution. Il était
nécessaire pour les neuf onglets de boards.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`À construire.`}),` L'onglet désactivé.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),s(),r(),h(),c()}))();export{v as default};