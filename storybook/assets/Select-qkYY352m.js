import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{AvecIcones as u,AvecRecherche as d,BacASable as f,DansUnFormulaire as p,Etats as m,Multiple as h,n as g,t as _}from"./Select.stories-Dt0qloFY.js";function v(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o,{of:_}),`
`,(0,b.jsx)(t.h1,{id:`select`,children:`Select`}),`
`,(0,b.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`b`,{children:`Catégorie`}),` : enveloppé`]}),(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`b`,{children:`Source code`}),` : `,(0,b.jsx)(`code`,{children:`libs/basic popup-container`}),` + AntD v5 Select`]}),(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`b`,{children:`Maquette`}),` : Figma `,(0,b.jsx)(`code`,{children:`14:30`}),` — 7 états`]})]}),`
`,(0,b.jsxs)(t.p,{children:[`Sélecteur dans une liste fermée de valeurs. Même enveloppe que l'`,(0,b.jsx)(t.code,{children:`Input`}),` — label, champ, message —
et la même anatomie : hauteur 32, `,(0,b.jsx)(t.code,{children:`radius/base`}),`, bordure `,(0,b.jsx)(t.code,{children:`border/input`}),`, états portés par la
bordure. `,(0,b.jsx)(t.strong,{children:`Les deux champs doivent être indiscernables au repos`}),` : c'est ce qui fait qu'un
formulaire se lit comme une colonne et non comme une collection de contrôles.`]}),`
`,(0,b.jsx)(a,{of:m}),`
`,(0,b.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(t.h2,{id:`quel-contrôle-pour-quel-choix`,children:`Quel contrôle pour quel choix`}),`
`,(0,b.jsx)(t.p,{children:`C'est la question qui revient à chaque formulaire. Elle se tranche sur le nombre d'options et sur
l'exclusivité, pas sur la place disponible.`}),`
`,(0,b.jsx)(l,{headers:[`Choix`,`2 à 5 options`,`Plus de 5 options`],rows:[[`Un seul (exclusif)`,`Radio`,`Select`],[`Plusieurs`,`Checkbox`,`Select multiple`],[`Oui / non à effet immédiat`,`Switch`,`—`]]}),`
`,(0,b.jsx)(t.p,{children:`Sous cinq options, les afficher toutes coûte moins cher qu'un clic pour les découvrir. Au-delà,
la liste déroulée sature la page et le Select reprend l'avantage.`}),`
`,(0,b.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Largeur alignée sur les autres champs`}),` du formulaire, 600 px au maximum.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Le placeholder annonce le choix attendu`}),` (« Sélectionner un datamart »), pas une consigne
(« Veuillez choisir »).`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Le panneau fait la largeur du déclencheur.`}),` Une liste plus large déborde de la colonne du
formulaire et se lit comme un élément détaché du champ.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Recherche au-delà d'une dizaine d'options.`}),` Faire défiler à l'aveugle une liste de trente
datamarts n'est pas une navigation.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`L'ouverture se fait au clic sur toute la surface`}),`, pas seulement sur le caret.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`La sélection dans une liste passe toujours par les items du Dropdown.`}),` Le Select, le menu
Dropdown, le DatePicker et le Cascader partagent les mêmes tokens `,(0,b.jsx)(t.code,{children:`controlItemBgActive`}),` et
`,(0,b.jsx)(t.code,{children:`controlItemBgHover`}),` : un seul endroit à changer, et aucun écran ne peut inventer sa propre
couleur de sélection.`]}),`
`,(0,b.jsxs)(t.li,{children:[`En `,(0,b.jsx)(t.strong,{children:`multiple`}),`, les valeurs choisies s'affichent en `,(0,b.jsx)(t.code,{children:`Tag`}),` retirables : mêmes chips que partout
ailleurs dans le produit.`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.strong,{children:`Avec icônes`}),` : l'icône dit le type de la valeur.`]}),`
`,(0,b.jsx)(a,{of:u}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.strong,{children:`Sélection multiple`}),` :`]}),`
`,(0,b.jsx)(a,{of:h}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.strong,{children:`Avec recherche`}),` :`]}),`
`,(0,b.jsx)(a,{of:d}),`
`,(0,b.jsxs)(t.p,{children:[(0,b.jsx)(t.strong,{children:`Dans un formulaire`}),`, aligné sur les Inputs :`]}),`
`,(0,b.jsx)(a,{of:p}),`
`,(0,b.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,b.jsxs)(t.ol,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Label`}),` : Body/Medium 12 en `,(0,b.jsx)(t.code,{children:`text/darker`}),`, gap 4.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Déclencheur fermé`}),` : hauteur 32, padding horizontal 7, `,(0,b.jsx)(t.code,{children:`radius/base`}),`,
bordure `,(0,b.jsx)(t.code,{children:`border/input`}),`.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Valeur / placeholder`}),` : Body/Book 12, `,(0,b.jsx)(t.code,{children:`text/normal`}),` / `,(0,b.jsx)(t.code,{children:`text/lightest`}),`.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Caret`}),` : `,(0,b.jsx)(t.code,{children:`chevron-bottom`}),` de 10 px en `,(0,b.jsx)(t.code,{children:`text/lighter`}),`, à droite.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Panneau ouvert`}),` : les options reprennent les `,(0,b.jsx)(t.strong,{children:`items du Dropdown`}),` du DS.
Sélection simple = Option Item (fond `,(0,b.jsx)(t.code,{children:`bg/window`}),`, libellé `,(0,b.jsx)(t.code,{children:`primary`}),`). Sélection multiple =
Checkbox Item, case à cocher `,(0,b.jsx)(t.strong,{children:`à gauche`}),` — pas la coche à droite d'Ant Design. Survol
`,(0,b.jsx)(t.code,{children:`bg/hover`}),` dans les deux cas.`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,b.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Sémantique`,(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.code,{children:`<select>`}),` natif ou combobox WAI-APG (`,(0,b.jsx)(t.code,{children:`role="combobox"`}),` +`,` `,(0,b.jsx)(t.code,{children:`aria-expanded`}),` + `,(0,b.jsx)(t.code,{children:`listbox`}),`). Jamais une `,(0,b.jsx)(t.code,{children:`div`}),` cliquable (RGAA 7.1, 11.1).`]})],[`Clavier`,`Les flèches parcourent les options, Entrée valide, Échap ferme et rend le focus au déclencheur (RGAA 7.3).`],[`Formulaires`,(0,b.jsxs)(b.Fragment,{children:[`Label relié par `,(0,b.jsx)(t.code,{children:`<label for>`}),` ; en erreur,`,` `,(0,b.jsx)(t.code,{children:`aria-invalid`}),` et message relié par `,(0,b.jsx)(t.code,{children:`aria-describedby`}),` (RGAA 11.1, 11.10).`]})],[`Images`,`Les icônes d'option sont décoratives : le libellé porte l'information (RGAA 1.2).`]]}),`
`,(0,b.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Ajouté en maquette et en code.`}),` L'enveloppe label + message, les états Hover et Error pour
aligner sur l'Input, et le caret pris dans le set d'icônes officiel plutôt qu'un vecteur brut.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Corrigé.`}),` Les couleurs de sélection étaient celles d'Ant Design (cyan clair) au lieu de
celles du Dropdown / Option Item. Elles sont désormais pilotées par `,(0,b.jsx)(t.code,{children:`controlItemBgActive`}),` et
`,(0,b.jsx)(t.code,{children:`controlItemBgHover`}),` au niveau du thème, donc communes à tous les composants à liste.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`À construire.`}),` L'état ouvert documenté avec son panneau, et le `,(0,b.jsx)(t.code,{children:`clearable`}),` / `,(0,b.jsx)(t.code,{children:`loading`}),` natifs
d'Ant Design décrits en maquette.`]}),`
`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=t(),s(),r(),g(),c()}))();export{y as default};