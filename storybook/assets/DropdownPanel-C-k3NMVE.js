import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{Ancre as u,BacASable as d,GroupesSepares as f,MenuCategories as p,MultiSelection as m,n as h,t as g}from"./DropdownPanel.stories-DhBjtUkC.js";function _(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(t.h1,{id:`dropdownpanel`,children:`DropdownPanel`}),`
`,(0,y.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Source code`}),` : remplace les surfaces flottantes ad hoc et les trois systèmes de modales de la lib`]}),(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`b`,{children:`Maquette`}),` : Figma Dropdown / Container `,(0,y.jsx)(`code`,{children:`145:69`})]})]}),`
`,(0,y.jsxs)(t.p,{children:[`Surface flottante blanche du design system : `,(0,y.jsx)(t.code,{children:`radius/base`}),`, une ombre, un `,(0,y.jsx)(t.code,{children:`z-index`}),`, et rien
d'autre. `,(0,y.jsx)(t.strong,{children:`Tous les panneaux du produit passent par ici`}),` (menus de la TopBar, panneau de filtres,
choix des colonnes, sélecteur d'organisation). C'est ce qui garantit qu'ils se ressemblent tous
sans que personne n'ait à retaper une ombre.`]}),`
`,(0,y.jsxs)(t.p,{children:[`Le composant ne décide pas de la mise en page de son contenu : il porte la surface. Ce qu'on y
empile vient des `,(0,y.jsx)(t.strong,{children:`items du DS`}),` (`,(0,y.jsx)(t.code,{children:`DropdownNavItem`}),`, `,(0,y.jsx)(t.code,{children:`DropdownCheckboxItem`}),`,
`,(0,y.jsx)(t.code,{children:`DropdownOptionItem`}),`, `,(0,y.jsx)(t.code,{children:`DropdownLabelItem`}),`, `,(0,y.jsx)(t.code,{children:`DropdownFooter`}),`), documentés sur leur propre page.
Pour une mise en page très spécifique, l'export `,(0,y.jsx)(t.code,{children:`panelSurface`}),` donne les seuls styles de surface
à appliquer soi-même.`]}),`
`,(0,y.jsx)(a,{of:p}),`
`,(0,y.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(i,{of:d}),`
`,(0,y.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Une seule ombre dans le produit.`}),` Ne jamais retaper un `,(0,y.jsx)(t.code,{children:`box-shadow`}),` : importer `,(0,y.jsx)(t.code,{children:`panelSurface`}),`
si le composant ne convient pas tel quel.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.code,{children:`anchored`}),` positionne le panneau en absolu sous son déclencheur, à 4 px. Le déclencheur doit
alors porter `,(0,y.jsx)(t.code,{children:`position: relative`}),`.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.code,{children:`align`}),` suit le bord de l'écran le plus proche : à droite dans la TopBar, à gauche dans une
barre d'outils, pour que le panneau ne sorte jamais du cadre.`]}),`
`,(0,y.jsxs)(t.li,{children:[`Le panneau `,(0,y.jsx)(t.strong,{children:`ne gère pas sa propre fermeture`}),` : c'est au parent de gérer le clic extérieur et
la touche Échap. Les portails d'Ant Design (calendrier, select) rendent hors du panneau, il faut
les exclure de la détection de clic extérieur.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Multi-sélection`}),` : un seul type d'items par groupe.`]}),`
`,(0,y.jsx)(a,{of:m}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Ancré`}),` sous son déclencheur. Le conteneur en `,(0,y.jsx)(t.code,{children:`position: relative`}),` doit épouser le déclencheur :
s'il est plus haut, le panneau décolle d'autant, car il se cale sur `,(0,y.jsx)(t.code,{children:`top: 100%`}),` du conteneur et non
du bouton.`]}),`
`,(0,y.jsx)(a,{of:u}),`
`,(0,y.jsxs)(t.p,{children:[(0,y.jsx)(t.strong,{children:`Groupes séparés`}),` : le séparateur marque un changement de nature d'action.`]}),`
`,(0,y.jsx)(a,{of:f}),`
`,(0,y.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,y.jsxs)(t.ol,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Surface`}),` : fond `,(0,y.jsx)(t.code,{children:`bg/container`}),`, `,(0,y.jsx)(t.code,{children:`radius/base`}),`, double ombre
(`,(0,y.jsx)(t.code,{children:`0 3px 6px -4px rgba(0,0,0,.12)`}),` + `,(0,y.jsx)(t.code,{children:`0 6px 16px 0 rgba(0,0,0,.08)`}),`).`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Contenu`}),` : libre. Les listes d'items ajoutent leur propre padding vertical de 8.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Ancrage`}),` (si `,(0,y.jsx)(t.code,{children:`anchored`}),`) : `,(0,y.jsx)(t.code,{children:`top: calc(100% + 4px)`}),`, `,(0,y.jsx)(t.code,{children:`z-index`}),` 1100.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,y.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Sémantique`,(0,y.jsxs)(y.Fragment,{children:[`Un menu d'actions porte `,(0,y.jsx)(t.code,{children:`role="menu"`}),` et ses items`,` `,(0,y.jsx)(t.code,{children:`role="menuitem"`}),`. Un panneau de formulaire garde la sémantique native de ses champs : pas de `,(0,y.jsx)(t.code,{children:`role="menu"`}),` par défaut (RGAA 7.1).`]})],[`Clavier`,`Échap ferme le panneau et rend le focus au déclencheur. Les flèches parcourent les items d'un menu (RGAA 7.3, 12.x).`],[`États`,(0,y.jsxs)(y.Fragment,{children:[`Le déclencheur porte `,(0,y.jsx)(t.code,{children:`aria-expanded`}),` et `,(0,y.jsx)(t.code,{children:`aria-controls`}),` pointant sur l'identifiant du panneau (RGAA 7.1).`]})]]}),`
`,(0,y.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`Écart avec la production.`}),` La lib empile trois systèmes de modales
(`,(0,y.jsx)(t.code,{children:`blurred-modal`}),`, `,(0,y.jsx)(t.code,{children:`mcs-modal`}),`, `,(0,y.jsx)(t.code,{children:`modal-header`}),`) et autant d'ombres. Ce composant est la surface
unique qui les remplace.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.strong,{children:`À construire.`}),` Le piège à focus (focus trap) d'un panneau modal n'est pas encore décrit :
aujourd'hui la tabulation peut sortir du panneau sans le fermer.`]}),`
`]})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),s(),r(),h(),c()}))();export{v as default};