import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{AvecAide as u,BacASable as d,Dont as f,Erreur as p,Etats as m,Obligatoire as h,Recherche as g,n as _,t as v}from"./Input.stories-DXy9_vq_.js";function y(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o,{of:v}),`
`,(0,x.jsx)(t.h1,{id:`input`,children:`Input`}),`
`,(0,x.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,x.jsxs)(`span`,{children:[(0,x.jsx)(`b`,{children:`Catégorie`}),` : enveloppé`]}),(0,x.jsxs)(`span`,{children:[(0,x.jsx)(`b`,{children:`Source code`}),` : `,(0,x.jsx)(`code`,{children:`libs/basic form/FormItem`}),` + AntD v5 Input`]}),(0,x.jsxs)(`span`,{children:[(0,x.jsx)(`b`,{children:`Maquette`}),` : Figma `,(0,x.jsx)(`code`,{children:`14:16`}),` — 6 états`]})]}),`
`,(0,x.jsxs)(t.p,{children:[`Champ de saisie complet : `,(0,x.jsx)(t.strong,{children:`label + champ + message`}),`. Ant Design rend le champ ; le DS ajoute
l'enveloppe et impose l'anatomie. En production, label et message sont portés par le `,(0,x.jsx)(t.code,{children:`FormItem`}),`
d'Ant Design, pas par le champ — la maquette les intègre au composant, et cette enveloppe fait de
même.`]}),`
`,(0,x.jsx)(a,{of:m}),`
`,(0,x.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,x.jsx)(i,{of:d}),`
`,(0,x.jsx)(t.h2,{id:`les-états-passent-par-la-bordure`,children:`Les états passent par la bordure`}),`
`,(0,x.jsx)(l,{headers:[`État`,`Bordure`,`Fond`,`Ce qui change en plus`],rows:[[`Default`,(0,x.jsx)(t.code,{children:`border/input`}),(0,x.jsx)(t.code,{children:`bg/container`}),`—`],[`Hover`,(0,x.jsx)(t.code,{children:`primary`}),(0,x.jsx)(t.code,{children:`bg/container`}),`—`],[`Focus`,(0,x.jsx)(t.code,{children:`primary`}),(0,x.jsx)(t.code,{children:`bg/container`}),`Halo de 2 px en primary à 20 %`],[`Error`,(0,x.jsx)(t.code,{children:`error`}),(0,x.jsx)(t.code,{children:`bg/container`}),`Message obligatoire sous le champ`],[`Disabled`,(0,x.jsx)(t.code,{children:`border/input`}),(0,x.jsx)(t.code,{children:`bg/window`}),`Texte en text/lightest`]]}),`
`,(0,x.jsx)(t.p,{children:`Le fond ne bouge qu'en Disabled. C'est ce qui permet de lire une colonne de champs d'un coup
d'œil : un seul signal change, toujours au même endroit.`}),`
`,(0,x.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Un label visible au-dessus du champ, toujours.`}),` Le placeholder ne remplace jamais le label :
il disparaît dès la première frappe, au moment précis où l'utilisateur en aurait besoin. Seule
exception : les patterns de recherche.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`La largeur est identique dans tout un formulaire`}),`, et ne dépasse pas 600 px. Des champs de
largeurs différentes suggèrent une longueur de saisie attendue qui n'existe pas.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`L'état Error s'accompagne toujours du message.`}),` Une bordure rouge seule ne dit ni ce qui ne va
pas, ni comment le corriger — et elle est invisible pour un daltonien.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Le placeholder illustre le format`}),` (« ex. jean@acme.com »), jamais une consigne ni la mention
d'obligation.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`L'icône est cohérente avec la donnée`}),` : loupe pour une recherche, enveloppe pour un email.
Jamais décorative. À droite par défaut ; à gauche uniquement pour la recherche.`]}),`
`]}),`
`,(0,x.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:`Avec aide`}),` : le message est relié au champ par `,(0,x.jsx)(t.code,{children:`aria-describedby`}),`.`]}),`
`,(0,x.jsx)(a,{of:u}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:`Erreur`}),` : bordure et message ensemble.`]}),`
`,(0,x.jsx)(a,{of:p}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:`Obligatoire`}),` : astérisque visible et attribut `,(0,x.jsx)(t.code,{children:`required`}),`.`]}),`
`,(0,x.jsx)(a,{of:h}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.strong,{children:`Recherche`}),` : le seul cas sans label visible.`]}),`
`,(0,x.jsx)(a,{of:g}),`
`,(0,x.jsx)(t.h3,{id:`à-éviter`,children:`À éviter`}),`
`,(0,x.jsx)(a,{of:f}),`
`,(0,x.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,x.jsxs)(t.ol,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Label`}),` : Body/Medium 12 en `,(0,x.jsx)(t.code,{children:`text/darker`}),`, au-dessus du champ, gap 4.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Champ`}),` : hauteur 32, padding horizontal 7, `,(0,x.jsx)(t.code,{children:`radius/base`}),`, fond `,(0,x.jsx)(t.code,{children:`bg/container`}),`,
bordure `,(0,x.jsx)(t.code,{children:`border/input`}),`.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Valeur`}),` : Body/Book 12 en `,(0,x.jsx)(t.code,{children:`text/normal`}),`. `,(0,x.jsx)(t.strong,{children:`Placeholder`}),` en `,(0,x.jsx)(t.code,{children:`text/lightest`}),`.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Icônes`}),` (optionnelles) : 14 × 14, `,(0,x.jsx)(t.code,{children:`text/lighter`}),`, à gauche et / ou à droite.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Message`}),` : Body/Book 12 sous le champ, `,(0,x.jsx)(t.code,{children:`text/lighter`}),` en aide, `,(0,x.jsx)(t.code,{children:`error`}),` en erreur.`]}),`
`]}),`
`,(0,x.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,x.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Formulaires`,(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.code,{children:`<input>`}),` natif relié à un `,(0,x.jsx)(t.code,{children:`<label for>`}),`. Le placeholder n'est pas un label (RGAA 11.1, 11.2).`]})],[`Erreur`,(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.code,{children:`aria-invalid="true"`}),` et message relié par `,(0,x.jsx)(t.code,{children:`aria-describedby`}),`, porté par un `,(0,x.jsx)(t.code,{children:`role="alert"`}),` pour être annoncé dès son apparition (RGAA 11.10, 11.11).`]})],[`Information couleur`,`L'erreur n'est jamais portée par la seule bordure rouge : le message texte la double (RGAA 3.1).`],[`Focus`,`Halo de 2 px visible au clavier. Jamais outline:none sans alternative (RGAA 10.7).`],[`Contraste`,`⚠ Bordure #e0e1e1 = 1,3:1, sous le seuil de 3:1 (RGAA 3.3). Placeholder ≈ 1,8:1 : acceptable uniquement comme exemple non porteur d'information. Valeur saisie 5,7:1, conforme.`]]}),`
`,(0,x.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Ajouté en maquette et en code.`}),` L'enveloppe label + message : en production, c'est le
`,(0,x.jsx)(t.code,{children:`FormItem`}),` qui les porte. Les rassembler dans le composant garantit que le lien
`,(0,x.jsx)(t.code,{children:`label for`}),` / `,(0,x.jsx)(t.code,{children:`aria-describedby`}),` ne peut pas être oublié.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`Dette héritée.`}),` Le contraste de `,(0,x.jsx)(t.code,{children:`border/input`}),` est sous le seuil. Décision produit à prendre :
la valeur vient de la production.`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.strong,{children:`À construire.`}),` Le compteur de caractères, et l'état de chargement (validation asynchrone d'un
nom déjà pris).`]}),`
`]})]})}function b(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;e((()=>{x=t(),s(),r(),_(),c()}))();export{b as default};