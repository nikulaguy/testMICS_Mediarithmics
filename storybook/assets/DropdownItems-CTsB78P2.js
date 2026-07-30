import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,n as i,s as a}from"./blocks-C8yODpg3.js";import{t as o}from"./mdx-react-shim-DjgDkGvs.js";import{n as s,t as c}from"./DocTable-CY3zK50_.js";import{Briques as l,CheckboxItem as u,Dont as d,Footer as f,LabelItem as p,NavItem as m,OptionItem as h,n as g,t as _}from"./DropdownItems.stories-q3D_56-w.js";function v(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a,{of:_}),`
`,(0,b.jsx)(t.h1,{id:`dropdown-items`,children:`Dropdown Items`}),`
`,(0,b.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`b`,{children:`Source code`}),` : `,(0,b.jsx)(`code`,{children:`multi-select`}),`, `,(0,b.jsx)(`code`,{children:`table-view-filters`}),`, `,(0,b.jsx)(`code`,{children:`labels-selector`}),` — trois implémentations d'items en production`]}),(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`b`,{children:`Maquette`}),` : Figma Nav Item `,(0,b.jsx)(`code`,{children:`142:71`}),`, Checkbox Item `,(0,b.jsx)(`code`,{children:`143:76`}),`, Option Item `,(0,b.jsx)(`code`,{children:`142:76`}),`, Label Item `,(0,b.jsx)(`code`,{children:`143:77`}),`, Clear `,(0,b.jsx)(`code`,{children:`193:2804`})]})]}),`
`,(0,b.jsxs)(t.p,{children:[`Les briques qui se composent `,(0,b.jsx)(t.strong,{children:`dans le slot`}),` d'un `,(0,b.jsx)(t.code,{children:`DropdownPanel`}),`. Un menu ne s'improvise pas
avec des `,(0,b.jsx)(t.code,{children:`div`}),` : il empile ces items. C'est ce qui garantit que deux menus du produit se
comportent pareil, y compris au clavier.`]}),`
`,(0,b.jsx)(i,{of:l}),`
`,(0,b.jsx)(t.h2,{id:`quelle-brique-pour-quel-besoin`,children:`Quelle brique pour quel besoin`}),`
`,(0,b.jsx)(c,{headers:[`Brique`,`Rôle`,`Sémantique`,`États`],rows:[[`Nav Item`,`Catégorie qui ouvre une cascade`,(0,b.jsx)(t.code,{children:`menuitem`}),`Default · Hover · Active (+ compteur)`],[`Checkbox Item`,`Multi-sélection`,(0,b.jsx)(t.code,{children:`menuitemcheckbox`}),`Unchecked · Hover · Checked`],[`Option Item`,`Sélection unique`,(0,b.jsx)(t.code,{children:`menuitemradio`}),`Default · Hover · Selected`],[`Label Item`,`Étiquette d'une liste de labels`,(0,b.jsx)(t.code,{children:`menuitem`}),`Default · Hover`],[`Footer`,`Réinitialisation, toujours en dernier`,(0,b.jsx)(t.code,{children:`button`}),`Actif · Désactivé`]]}),`
`,(0,b.jsx)(t.h2,{id:`nav-item`,children:`Nav Item`}),`
`,(0,b.jsxs)(t.p,{children:[`Catégorie de la colonne de gauche d'un filtre en cascade. Active = texte et icône en `,(0,b.jsx)(t.code,{children:`primary`}),`
sur fond `,(0,b.jsx)(t.code,{children:`bg/window`}),`. Une seule active à la fois.`]}),`
`,(0,b.jsxs)(t.p,{children:[`Le `,(0,b.jsx)(t.strong,{children:`compteur remplace la pastille verte`}),` de la production. La pastille dit qu'il y a un filtre ;
le compteur dit combien. À surface égale, le compteur porte strictement plus d'information, et il
reste lisible pour un daltonien.`]}),`
`,(0,b.jsxs)(t.p,{children:[`Le sous-panneau s'ouvre au survol `,(0,b.jsx)(t.strong,{children:`et au focus clavier`}),` : un menu qui ne réagit qu'à la souris
est inatteignable au clavier.`]}),`
`,(0,b.jsxs)(t.p,{children:[`Toutes les rangées prennent un fond `,(0,b.jsx)(t.code,{children:`bg/hover`}),` au survol. La maquette ne décrit que Default et
Actif / Sélectionné ; sans retour au survol, rien ne distingue une rangée cliquable d'une ligne de
texte tant qu'on n'a pas cliqué.`]}),`
`,(0,b.jsx)(i,{of:m}),`
`,(0,b.jsx)(t.h2,{id:`checkbox-item`,children:`Checkbox Item`}),`
`,(0,b.jsxs)(t.p,{children:[`Multi-sélection : case de 16 (radius `,(0,b.jsx)(t.code,{children:`sm`}),`, cochée = fond `,(0,b.jsx)(t.code,{children:`primary`}),` + coche blanche), icône de type
optionnelle, libellé. Le nombre de cases cochées alimente le compteur de la catégorie.`]}),`
`,(0,b.jsxs)(t.p,{children:[`Pas de `,(0,b.jsx)(t.code,{children:`<label>`}),` autour de la rangée : le Checkbox d'Ant Design rend déjà le sien, et deux labels
imbriqués avalent le clic. La rangée est un `,(0,b.jsx)(t.code,{children:`div role="menuitemcheckbox"`}),` avec `,(0,b.jsx)(t.code,{children:`aria-checked`}),`.`]}),`
`,(0,b.jsx)(i,{of:u}),`
`,(0,b.jsx)(t.h2,{id:`option-item`,children:`Option Item`}),`
`,(0,b.jsxs)(t.p,{children:[`Sélection unique, libellé seul. Sélectionné = texte `,(0,b.jsx)(t.code,{children:`primary`}),` sur fond `,(0,b.jsx)(t.code,{children:`bg/window`}),`. Pour les
valeurs mutuellement exclusives : Persisted / Not persisted, Today / Last 7 days.`]}),`
`,(0,b.jsx)(i,{of:h}),`
`,(0,b.jsx)(t.h2,{id:`label-item`,children:`Label Item`}),`
`,(0,b.jsxs)(t.p,{children:[`Étiquette de la liste des labels : icône `,(0,b.jsx)(t.code,{children:`tag`}),` + libellé. Cliquer ajoute le label aux valeurs
sélectionnées, affichées en `,(0,b.jsx)(t.strong,{children:`chips fermables`}),` au-dessus de la liste.`]}),`
`,(0,b.jsx)(i,{of:p}),`
`,(0,b.jsx)(t.h2,{id:`footer`,children:`Footer`}),`
`,(0,b.jsxs)(t.p,{children:[`Pied de menu, `,(0,b.jsx)(t.strong,{children:`toujours en dernier`}),`, pleine largeur. Le bloc lui-même n'a plus d'état : c'est le
Button Type=Link qu'il contient qui porte le survol. C'est le même bouton, icône balai comprise,
que « Clear all filters » de la barre de filtres actifs — la réinitialisation se reconnaît partout
au même signe.`]}),`
`,(0,b.jsx)(t.p,{children:`Deux compositions :`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Clear`}),` : un seul bouton centré, `,(0,b.jsx)(t.strong,{children:`taille L`}),`, sur fond `,(0,b.jsx)(t.code,{children:`bg/window`}),`. Réinitialise la dimension
courante ou tout le panneau.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Reset + OK`}),` : lien Reset à gauche, OK `,(0,b.jsx)(t.code,{children:`primary`}),` à droite, `,(0,b.jsx)(t.strong,{children:`taille M`}),`, sur fond blanc. Pour
les panneaux qui valident une saisie plutôt que d'appliquer au fil de l'eau (plage de dates).`]}),`
`]}),`
`,(0,b.jsx)(t.p,{children:`Désactivé quand il n'y a rien à réinitialiser : un bouton actif qui ne fait rien apprend à
l'utilisateur à s'en méfier.`}),`
`,(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Ces items valent pour TOUTE sélection dans une liste`}),`, y compris celles rendues par
Ant Design. Le Select, le DatePicker et le Cascader héritent des mêmes couleurs via les tokens
`,(0,b.jsx)(t.code,{children:`controlItemBgActive`}),` (sélectionné, `,(0,b.jsx)(t.code,{children:`bg/window`}),`) et `,(0,b.jsx)(t.code,{children:`controlItemBgHover`}),` (survolé, `,(0,b.jsx)(t.code,{children:`bg/hover`}),`).
Aucun écran n'invente sa couleur de sélection.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Un seul type d'items par groupe.`}),` Checkbox = multi, Option = unique. Les mêler rend le
comportement imprévisible.`]}),`
`,(0,b.jsx)(t.li,{children:`Au-delà de huit à dix items, ajouter un champ de recherche en tête plutôt que faire défiler à
l'aveugle.`}),`
`,(0,b.jsxs)(t.li,{children:[`Le pied Clear reste `,(0,b.jsx)(t.strong,{children:`fixe`}),` quand la liste défile : la sortie ne se cache pas en bas d'un scroll.`]}),`
`,(0,b.jsxs)(t.li,{children:[`Composer via le slot du `,(0,b.jsx)(t.code,{children:`DropdownPanel`}),`, jamais des frames ou des `,(0,b.jsx)(t.code,{children:`div`}),` ad hoc.`]}),`
`]}),`
`,(0,b.jsx)(t.h3,{id:`à-éviter`,children:`À éviter`}),`
`,(0,b.jsx)(i,{of:d}),`
`,(0,b.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,b.jsxs)(t.ol,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Rangée`}),` : padding 6 × 16, gap 12 (8 pour Label Item), pleine largeur, curseur pointeur.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Marqueur d'état`}),` : case à cocher (Checkbox Item), fond `,(0,b.jsx)(t.code,{children:`bg/window`}),` + texte `,(0,b.jsx)(t.code,{children:`primary`}),`
(Nav et Option Item), fond `,(0,b.jsx)(t.code,{children:`bg/hover`}),` au survol sur toutes les rangées.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Icône`}),` : 18 px, `,(0,b.jsx)(t.code,{children:`text/lighter`}),`, décorative.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Libellé`}),` : Body/Book 12, `,(0,b.jsx)(t.code,{children:`text/normal`}),` — `,(0,b.jsx)(t.code,{children:`primary`}),` à l'état actif ou sélectionné.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Compteur`}),` (Nav Item) : chiffre en `,(0,b.jsx)(t.code,{children:`primary`}),`, doublé d'un libellé lecteur d'écran.`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,b.jsx)(c,{headers:[`Thème`,`Exigence`],rows:[[`Sémantique`,(0,b.jsxs)(b.Fragment,{children:[`Un rôle par nature d'item : `,(0,b.jsx)(t.code,{children:`menuitem`}),`, `,(0,b.jsx)(t.code,{children:`menuitemcheckbox`}),`,`,` `,(0,b.jsx)(t.code,{children:`menuitemradio`}),`, avec `,(0,b.jsx)(t.code,{children:`aria-checked`}),` à jour (RGAA 7.1).`]})],[`Clavier`,(0,b.jsxs)(b.Fragment,{children:[`Entrée et Espace activent, les flèches parcourent la liste, Échap ferme et rend le focus au déclencheur. Le Nav Item s'active aussi au `,(0,b.jsx)(t.code,{children:`focus`}),`, pas seulement au survol (RGAA 7.3, 13.x).`]})],[`Cascade`,(0,b.jsxs)(b.Fragment,{children:[`Le Nav Item porte `,(0,b.jsx)(t.code,{children:`aria-haspopup="true"`}),` et `,(0,b.jsx)(t.code,{children:`aria-expanded`}),` ; le sous-panneau est un sous-menu navigable (RGAA 7.1).`]})],[`Information couleur`,`Le compteur est un chiffre, pas une pastille de couleur : l'information ne repose jamais sur la seule couleur (RGAA 3.1).`],[`Images`,`Les icônes de type sont décoratives, aria-hidden ; le libellé porte l'information (RGAA 1.2).`]]}),`
`,(0,b.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Écart avec la production.`}),` Trois implémentations d'items coexistent (`,(0,b.jsx)(t.code,{children:`multi-select`}),`,
`,(0,b.jsx)(t.code,{children:`table-view-filters`}),`, `,(0,b.jsx)(t.code,{children:`labels-selector`}),`), avec trois comportements clavier différents.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Écart assumé, Nav Item.`}),` La pastille verte de la production est remplacée par un compteur.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Ajouté au code, survol.`}),` L'état Hover (`,(0,b.jsx)(t.code,{children:`bg/hover`}),`) n'est pas décrit dans la maquette pour les
cinq items. Il l'est en code, sur toutes les rangées. À reporter côté maquette.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Écart assumé, Footer.`}),` Le bloc n'a plus d'état de survol : l'interaction est portée par le
bouton qu'il contient, comme dans la maquette mise à jour.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`À construire.`}),` L'état indéterminé du Checkbox Item (groupe partiellement coché), et le champ
de recherche en tête de liste longue.`]}),`
`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=t(),o(),r(),g(),s()}))();export{y as default};