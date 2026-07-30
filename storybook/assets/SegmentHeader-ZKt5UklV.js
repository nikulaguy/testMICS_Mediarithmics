import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{AZero as u,BacASable as d,GrandeAudience as f,n as p,t as m}from"./SegmentHeader.stories-csod0zFK.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(t.h1,{id:`segmentheader`,children:`SegmentHeader`}),`
`,(0,_.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`b`,{children:`Source code`}),` : `,(0,_.jsx)(`code`,{children:`libs/basic/counter-dashboard`}),` + `,(0,_.jsx)(`code`,{children:`dashboard-header`})]}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`b`,{children:`Maquette`}),` : Figma « Segment Header », écran `,(0,_.jsx)(`code`,{children:`239:3843`})]})]}),`
`,(0,_.jsxs)(t.p,{children:[`En-tête du tableau de bord d'un segment. Carte navy à gauche pour la métrique principale, liste
des métriques secondaires à droite. `,(0,_.jsx)(t.strong,{children:`La hiérarchie est le message`}),` : le UserPoint est la seule
valeur qui dit la taille de l'audience, les cinq autres disent par quels chemins on y accède.`]}),`
`,(0,_.jsx)(a,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(t.h2,{id:`ce-que-comptent-les-métriques`,children:`Ce que comptent les métriques`}),`
`,(0,_.jsx)(t.p,{children:`Définitions de la documentation développeur mediarithmics. Elles sont reprises en infobulle sur
chaque libellé, parce qu'aucun de ces termes ne se devine.`}),`
`,(0,_.jsx)(l,{headers:[`Métrique`,`Ce qu’elle compte`],rows:[[`UserPoint`,`L'entité sur laquelle l'appartenance au segment est évaluée. C'est la taille de l'audience.`],[`User Accounts`,`Utilisateurs identifiés dans vos systèmes (CRM, fidélité, authentification), toujours rattachés à un compartiment.`],[`User Profiles`,`Données de profil attachées à un UserPoint. Pas un identifiant autonome : elles s'accrochent à un compte, un email haché ou un user agent.`],[`User Device Points`,`Appareils rattachés au UserPoint. Un UserPoint peut en avoir plusieurs, chacun avec plusieurs identifiants techniques.`],[`Installation IDs`,`Cookies first-party générés par mediarithmics, au format ins:<registry>:<valeur>.`],[`Vector IDs`,`Cookies third-party mediarithmics, au format vec:<valeur> ou mum:<valeur>.`]]}),`
`,(0,_.jsxs)(t.p,{children:[`Chaque identifiant est `,(0,_.jsx)(t.strong,{children:`un chemin différent vers le même UserPoint`}),`. Les additionner n'a pas de
sens : c'est pour cela qu'ils sont listés et non totalisés.`]}),`
`,(0,_.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Les valeurs sont celles du dernier calcul`}),`, pas du temps réel. La date sous la carte n'est pas
décorative : c'est elle qui dit à quel point le chiffre est frais. Ne jamais la masquer.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Zéro s'affiche.`}),` Une métrique à zéro est une information — aucun Installation ID veut dire que
le segment ne touche personne par ce canal.`]}),`
`,(0,_.jsxs)(t.li,{children:[`La métrique principale reste `,(0,_.jsx)(t.strong,{children:`seule`}),` dans la carte navy. Y en ajouter une seconde détruit la
hiérarchie.`]}),`
`,(0,_.jsxs)(t.li,{children:[`Les icônes sont `,(0,_.jsx)(t.strong,{children:`décoratives`}),` : le libellé porte l'information.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`exemples-dusage`,children:`Exemples d'usage`}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Grande audience`}),` :`]}),`
`,(0,_.jsx)(a,{of:f}),`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Métriques à zéro`}),` :`]}),`
`,(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,_.jsxs)(t.ol,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Carte principale`}),` : 500 de large, fond `,(0,_.jsx)(t.code,{children:`info`}),` (navy), icône `,(0,_.jsx)(t.code,{children:`server`}),` de 60, « UserPoint » en
Headline 3, valeur en Headline. Gap 12, centré.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Liste`}),` : fond `,(0,_.jsx)(t.code,{children:`bg/container`}),`, padding 24, gap 12. Chaque rangée fait 24 : icône 20 en
`,(0,_.jsx)(t.code,{children:`primary`}),`, libellé et valeur en Headline 4 `,(0,_.jsx)(t.code,{children:`text/normal`}),`, valeur alignée à droite.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Date de calcul`}),` : Caption en `,(0,_.jsx)(t.code,{children:`text/lighter`}),`, alignée à droite sous la carte.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,_.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Images`,`Les icônes sont décoratives : aria-hidden. Le libellé porte l’information (RGAA 1.2).`],[`Aide`,`Les infobulles de définition sont atteignables au clavier : le libellé porte tabIndex, une infobulle au survol seul est inaccessible (RGAA 10.7).`],[`Contraste`,`Blanc sur navy : 12,6:1. Conforme (RGAA 3.2).`],[`Contenu dynamique`,`Après un recalcul, la nouvelle valeur et sa date sont annoncées dans une zone aria-live="polite" (RGAA 7.4).`]]}),`
`,(0,_.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Ajouté au code.`}),` Les infobulles de définition n'existent ni en production ni en maquette. Sans
elles, « Vector IDs » ne veut rien dire pour un utilisateur métier.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`À construire.`}),` La tendance (delta par rapport au calcul précédent) et l'état de chargement en
squelette, tous deux décrits comme évolutions dans la maquette.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),s(),r(),p(),c()}))();export{g as default};