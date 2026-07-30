import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,n as i,s as a}from"./blocks-C8yODpg3.js";import{t as o}from"./mdx-react-shim-DjgDkGvs.js";import{n as s,t as c}from"./DocTable-CY3zK50_.js";import{GroupeDeCheckbox as l,GroupeDeRadio as u,LeBonControle as d,LesTrois as f,SwitchAvecDescription as p,n as m,t as h}from"./Choice.stories-DhrXVw6k.js";function g(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:h}),`
`,(0,v.jsx)(t.h1,{id:`choix--checkbox-radio-switch`,children:`Choix : Checkbox, Radio, Switch`}),`
`,(0,v.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Catégorie`}),` : Checkbox et Radio thémés, Switch enveloppé`]}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Source code`}),` : AntD v5 Checkbox, Radio (`,(0,v.jsx)(`code`,{children:`radio-group-button`}),`), Switch`]}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`b`,{children:`Maquette`}),` : Figma Checkbox `,(0,v.jsx)(`code`,{children:`14:49`}),`, Radio `,(0,v.jsx)(`code`,{children:`14:60`}),`, Switch `,(0,v.jsx)(`code`,{children:`14:67`})]})]}),`
`,(0,v.jsxs)(t.p,{children:[`Trois contrôles pour trois questions différentes. Ils sont documentés ensemble parce que `,(0,v.jsx)(t.strong,{children:`le
choix entre eux est la seule vraie décision`}),` : une fois le bon contrôle retenu, son usage ne pose
plus de question.`]}),`
`,(0,v.jsx)(i,{of:f}),`
`,(0,v.jsx)(t.h2,{id:`choisir-le-contrôle`,children:`Choisir le contrôle`}),`
`,(0,v.jsx)(c,{headers:[`La question posée`,`Contrôle`,`Pourquoi`],rows:[[`Plusieurs réponses possibles`,`Checkbox`,`Chaque case est indépendante des autres`],[`Une seule réponse, 2 à 5 options`,`Radio`,`Toutes les options visibles : comparer ne coûte pas un clic`],[`Une seule réponse, plus de 5 options`,`Select`,`Au-delà, la liste sature la page`],[`Oui / non, effet immédiat`,`Switch`,`Le réglage s'applique en le basculant, sans validation`],[`Oui / non, soumis avec le formulaire`,`Checkbox`,`Un switch qui attend un bouton Enregistrer ment sur son effet`]]}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.strong,{children:`La distinction Switch / Checkbox est celle qui se rate le plus.`}),` Le critère n'est pas l'aspect,
c'est le moment où l'action prend effet. Un switch bascule un réglage tout de suite. Une case à
cocher enregistre une intention qui sera soumise plus tard, avec le reste du formulaire.`]}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(t.h2,{id:`checkbox`,children:`Checkbox`}),`
`,(0,v.jsxs)(t.p,{children:[`Case de 16, `,(0,v.jsx)(t.code,{children:`radius/sm`}),`, bordure `,(0,v.jsx)(t.code,{children:`border/input`}),` ; cochée, fond et coche en `,(0,v.jsx)(t.code,{children:`primary`}),`. Libellé
Body/Book 12 à droite, gap 8.`]}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Le libellé est toujours cliquable.`}),` Une case de 16 px seule est en dessous de la cible de
pointage de 24 px ; le libellé fait partie de la cible.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Indeterminate est réservé au parent d'un groupe partiellement coché.`}),` Ce n'est pas un
troisième état de valeur, c'est un résumé.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Alignement vertical dans un groupe`}),`, jamais en ligne : l'œil doit pouvoir descendre une
colonne de cases.`]}),`
`,(0,v.jsxs)(t.li,{children:[`Au-delà de cinq options, passer au `,(0,v.jsx)(t.code,{children:`Select`}),` multiple.`]}),`
`]}),`
`,(0,v.jsx)(i,{of:l}),`
`,(0,v.jsx)(t.h2,{id:`radio`,children:`Radio`}),`
`,(0,v.jsxs)(t.p,{children:[`Anneau de 16, bordure `,(0,v.jsx)(t.code,{children:`border/input`}),` ; sélectionné, anneau et point de 8 en `,(0,v.jsx)(t.code,{children:`primary`}),`.`]}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Toujours en groupe nommé`}),`, avec un défaut sensé présélectionné. Un groupe de radios sans
sélection initiale oblige l'utilisateur à choisir même quand une valeur va de soi.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Un choix exclusif ne se dé-sélectionne pas.`}),` Si l'utilisateur doit pouvoir revenir à « aucun »,
il faut une option « Aucun » explicite, pas un radio qu'on décoche.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Ordre stable`}),` d'un écran à l'autre, alignement vertical.`]}),`
`]}),`
`,(0,v.jsx)(i,{of:u}),`
`,(0,v.jsx)(t.h2,{id:`switch`,children:`Switch`}),`
`,(0,v.jsxs)(t.p,{children:[`Piste 44 × 22, `,(0,v.jsx)(t.code,{children:`radius`}),` pleine hauteur, grise à l'arrêt, `,(0,v.jsx)(t.code,{children:`primary`}),` en marche ; knob blanc de 18.`]}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsx)(t.li,{children:(0,v.jsx)(t.strong,{children:`Effet immédiat, pas de bouton Enregistrer.`})}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Toujours un libellé.`}),` Un interrupteur nu n'a pas de nom accessible, et rien ne dit ce qu'il
commande.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Le libellé décrit l'état activé et ne se retourne pas`}),` : « Recevoir les alertes », jamais
« Ne pas recevoir les alertes ». Une double négation avec un interrupteur en position basse est
illisible.`]}),`
`,(0,v.jsxs)(t.li,{children:[`La description sous le libellé sert à dire la `,(0,v.jsx)(t.strong,{children:`conséquence`}),` : portée, délai, fréquence.`]}),`
`]}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,v.jsx)(c,{headers:[`Thème`,`Exigence`],rows:[[`Formulaires`,(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.code,{children:`<input type="checkbox">`}),` / `,(0,v.jsx)(t.code,{children:`type="radio"`}),` natifs, chacun relié à son `,(0,v.jsx)(t.code,{children:`<label for>`}),`. Un groupe est un `,(0,v.jsx)(t.code,{children:`<fieldset>`}),` avec`,` `,(0,v.jsx)(t.code,{children:`<legend>`}),` (RGAA 11.1, 11.5).`]})],[`Clavier`,`Checkbox : Tab atteint chaque case, Espace coche. Radio : le groupe est UN seul arrêt de tabulation, les flèches déplacent la sélection (RGAA 7.3, 12.8).`],[`États`,(0,v.jsxs)(v.Fragment,{children:[`Indeterminate expose `,(0,v.jsx)(t.code,{children:`aria-checked="mixed"`}),`. Le Switch porte`,` `,(0,v.jsx)(t.code,{children:`role="switch"`}),` et `,(0,v.jsx)(t.code,{children:`aria-checked`}),` (RGAA 7.1).`]})],[`Information couleur`,`L'état coché ou activé n'est jamais signalé par la seule couleur : la coche, le point et la position du knob le doublent (RGAA 3.1).`],[`Cible de pointage`,`Le contrôle fait 16 px : le libellé cliquable porte la cible au-delà de 24 px (WCAG 2.5.8).`]]}),`
`,(0,v.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Écart avec la production.`}),` Le libellé et la description du Switch sont gérés hors composant
en production. L'enveloppe du DS les intègre, ce qui garantit le nom accessible.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`Ajouté au code.`}),` Les tokens de thème de ces trois contrôles étaient absents de
`,(0,v.jsx)(t.code,{children:`micsTheme.ts`}),` : ils tournaient sur les défauts d'Ant Design, qui coïncidaient par chance avec
la maquette. Une mise à jour d'AntD aurait suffi à les faire diverger. Ils sont maintenant
déclarés.`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.strong,{children:`À construire.`}),` Les états Hover (bordure `,(0,v.jsx)(t.code,{children:`primary`}),`) et Focus clavier (halo de 2 px) sur les
trois contrôles, décrits comme évolution dans la maquette. Et l'état Loading du Switch, pour
les bascules qui déclenchent un appel réseau.`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=t(),o(),r(),m(),s()}))();export{_ as default};