import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,s as i}from"./blocks-C8yODpg3.js";import{t as a}from"./mdx-react-shim-DjgDkGvs.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Design System/Introduction`}),`
`,(0,c.jsx)(t.h1,{id:`design-system-mics`,children:`Design System MICS`}),`
`,(0,c.jsxs)(t.p,{children:[`Cette documentation est le pendant développement du fichier Figma
`,(0,c.jsx)(t.strong,{children:`« Mediarithmics - MICS DS — Rebuild »`}),`. Elle sert de référence commune entre design et
développement : ce qui est montré ici est rendu avec le thème réel du produit, tokens compris.`]}),`
`,(0,c.jsx)(t.h2,{id:`le-principe--ant-design-encadré-pas-remplacé`,children:`Le principe : Ant Design encadré, pas remplacé`}),`
`,(0,c.jsxs)(t.p,{children:[`Le produit repose sur `,(0,c.jsx)(t.strong,{children:`Ant Design v5`}),` et continue de le faire. Le tableau, le sélecteur de dates
et les composants de formulaire représentent des années de comportements clavier, de gestion des
locales et d'accessibilité qu'il serait déraisonnable de réécrire.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Ce que le design system apporte par-dessus : `,(0,c.jsx)(t.strong,{children:`une couche unique par laquelle les écrans passent`}),`.
Un écran n'importe jamais `,(0,c.jsx)(t.code,{children:`antd`}),` directement, il importe `,(0,c.jsx)(t.code,{children:`src/ui.ts`}),`. C'est ce qui permet de
remplacer l'implémentation d'un composant sans toucher une seule page.`]}),`
`,(0,c.jsx)(t.h2,{id:`la-règle-des-trois-catégories`,children:`La règle des trois catégories`}),`
`,(0,c.jsxs)(t.p,{children:[`Pour chaque composant de la maquette, un seul critère décide de son sort côté code :
`,(0,c.jsx)(t.em,{children:`Ant Design a-t-il la même anatomie et les mêmes états ?`})]}),`
`,(0,c.jsxs)(`table`,{children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{children:`Réponse`}),(0,c.jsx)(`th`,{children:`Traitement`}),(0,c.jsx)(`th`,{children:`Exemples`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`Oui`}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`b`,{children:`Thémé`}),` : AntD tel quel, habillé par les tokens`]}),(0,c.jsx)(`td`,{children:`Button, Input, Select, Checkbox, Table, Tabs, Pagination, DatePicker`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`Presque`}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`b`,{children:`Enveloppé`}),` : un composant maison rend l'AntD en dessous, avec l'API du DS`]}),(0,c.jsx)(`td`,{children:`Tag, Empty State`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:`Non`}),(0,c.jsxs)(`td`,{children:[(0,c.jsx)(`b`,{children:`Construit`}),` : composant maison`]}),(0,c.jsx)(`td`,{children:`Link, buttonIcon, Dropdown / Container, Badge Count, TopBar, SideMenu, palette de recherche`})]})]})]}),`
`,(0,c.jsx)(t.p,{children:`Trois corollaires, valables en maquette comme en code :`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Un composant Figma doit exister comme composant côté code, dans l'une des trois catégories.
Une composition d'écran répétée deux fois est un composant qui s'ignore.`}),`
`,(0,c.jsxs)(t.li,{children:[`Aucune valeur en dur. Couleurs, espacements, radius et ombres viennent de `,(0,c.jsx)(t.code,{children:`src/theme/micsTheme.ts`}),`,
seule source de valeurs du projet.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`Un besoin = une entrée dans `,(0,c.jsx)(t.code,{children:`src/ui.ts`}),`.`]}),` Dès que le DS construit ou enveloppe un composant,
l'équivalent Ant Design `,(0,c.jsx)(t.strong,{children:`n'est plus réexporté`}),` : `,(0,c.jsx)(t.code,{children:`Badge`}),` d'AntD a disparu de la surface publique
le jour où `,(0,c.jsx)(t.code,{children:`CountBadge`}),` est né. Deux portes d'entrée pour le même besoin, et un écran finit par
prendre la mauvaise — c'est exactement ce qui a produit une pastille flottante sur le bouton
Filters là où la maquette montre un compteur dans le flux.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`les-trois-règles-dor-du-ds`,children:`Les trois règles d'or du DS`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Aucune valeur en dur`}),` : tout passe par un token ou un style.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Composants = instances`}),` : on n'improvise pas une variante, on étend le composant.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Zéro défaut au contrôle visuel`}),` avant livraison.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`le-modèle-dune-page-composant`,children:`Le modèle d'une page composant`}),`
`,(0,c.jsxs)(t.p,{children:[`Chaque composant a `,(0,c.jsx)(t.strong,{children:`une page principale`}),` qui reprend sa documentation Figma, dans cet ordre :`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`Titre, catégorie (thémé / enveloppé / construit), source code et référence de maquette`}),`
`,(0,c.jsx)(t.li,{children:`Description et aperçu des variantes`}),`
`,(0,c.jsx)(t.li,{children:`Props`}),`
`,(0,c.jsx)(t.li,{children:`Règles d'usage, avec les paires « à faire / à éviter » quand elles existent`}),`
`,(0,c.jsx)(t.li,{children:`Exemples d'usage : les cas réels du produit`}),`
`,(0,c.jsx)(t.li,{children:`Anatomie`}),`
`,(0,c.jsx)(t.li,{children:`Accessibilité (RGAA), une ligne par exigence testable`}),`
`,(0,c.jsx)(t.li,{children:`Écarts et évolutions : ce qui diverge de la maquette et ce qui reste à construire`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Les sections 1 à 7 sont la transposition de la frame « `,`{Composant}`,` — Documentation » du fichier
Figma. La section 8 est le lieu où l'on assume les écarts plutôt que de les masquer.`]}),`
`,(0,c.jsx)(t.h2,{id:`deux-règles-qui-évitent-les-bugs-silencieux`,children:`Deux règles qui évitent les bugs silencieux`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Composant passé en slot à Ant Design : transmettre les props DOM.`}),` AntD `,(0,c.jsx)(t.strong,{children:`clone`}),` les nœuds
qu'on lui donne en `,(0,c.jsx)(t.code,{children:`closeIcon`}),`, `,(0,c.jsx)(t.code,{children:`suffix`}),`, `,(0,c.jsx)(t.code,{children:`prefix`}),`, `,(0,c.jsx)(t.code,{children:`icon`}),`, `,(0,c.jsx)(t.code,{children:`addonAfter`}),` pour y injecter `,(0,c.jsx)(t.code,{children:`onClick`}),`,
`,(0,c.jsx)(t.code,{children:`onKeyDown`}),`, `,(0,c.jsx)(t.code,{children:`role`}),`, `,(0,c.jsx)(t.code,{children:`tabIndex`}),` et `,(0,c.jsx)(t.code,{children:`className`}),`. Un composant React qui ne fait pas
`,(0,c.jsx)(t.code,{children:`{...rest}`}),` sur son élément racine les avale sans erreur : l'icône s'affiche, elle ne réagit à
rien. Tous les composants du DS destinés à ces emplacements (`,(0,c.jsx)(t.code,{children:`Icon`}),`, la croix de `,(0,c.jsx)(t.code,{children:`Tag`}),`) étendent
`,(0,c.jsx)(t.code,{children:`React.HTMLAttributes`}),` et spreadent le reste.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Vérifier le rendu à côté de la maquette, pas de mémoire.`}),` Les deux erreurs corrigées le
2026-07-29 (pastille AntD au lieu du CountBadge, croix muette) se voyaient toutes les deux à
l'écran. Comparer la story Storybook et l'écran réel côte à côte est la façon la plus rapide de
les attraper.`]}),`
`,(0,c.jsx)(t.h2,{id:`comment-lire-cette-documentation`,children:`Comment lire cette documentation`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tokens`}),` : les fondations (couleurs, échelle, typographie). Tout le reste en découle.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Composants`}),` : un composant par page, avec ses variantes et ses états. La catégorie
(thémé, enveloppé, construit) est rappelée en tête de chaque page.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Pour l'architecture complète, les pièges rencontrés et la correspondance Figma → code,
voir `,(0,c.jsx)(t.code,{children:`ARCHITECTURE.md`}),` à la racine du dépôt.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};