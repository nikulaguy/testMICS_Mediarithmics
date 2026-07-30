import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{n as c,t as l}from"./DocTable-CY3zK50_.js";import{Dont as u,Drawer as d,Footer as f,Modale as p,SansFooter as m,ThemesDeHeader as h,n as g,t as _}from"./Overlay.stories-DwNZP1Qw.js";function v(e){let t={b:`b`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o,{of:_}),`
`,(0,b.jsx)(t.h1,{id:`overlay`,children:`Overlay`}),`
`,(0,b.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`b`,{children:`Source code`}),` : `,(0,b.jsx)(`code`,{children:`mcs-modal`}),` (AntD Modal) et drawer (AntD Drawer) thémés — même structure`]}),(0,b.jsxs)(`span`,{children:[(0,b.jsx)(`b`,{children:`Maquette`}),` : Figma Container `,(0,b.jsx)(`code`,{children:`212:169`}),`, Header `,(0,b.jsx)(`code`,{children:`190:198`}),`, Footer `,(0,b.jsx)(`code`,{children:`202:198`})]})]}),`
`,(0,b.jsxs)(t.p,{children:[`Conteneur unique des surfaces superposées : il sert à la fois de `,(0,b.jsx)(t.strong,{children:`modale`}),` et de `,(0,b.jsx)(t.strong,{children:`drawer`}),`.
Structure fixe — `,(0,b.jsx)(t.code,{children:`OverlayHeader`}),` (titre + croix), contenu, `,(0,b.jsx)(t.code,{children:`OverlayFooter`}),` (actions). On ne compose
que le contenu ; header et footer sont partagés. Le mode et le thème de header se choisissent selon
le contexte.`]}),`
`,(0,b.jsx)(a,{of:p}),`
`,(0,b.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,b.jsx)(i,{of:p}),`
`,(0,b.jsx)(t.h2,{id:`choisir-la-surface--drawer-modale-ou-page`,children:`Choisir la surface : drawer, modale ou page`}),`
`,(0,b.jsxs)(t.p,{children:[`La question n'est pas esthétique. Elle porte sur `,(0,b.jsx)(t.strong,{children:`le coût de l'interruption`}),` et sur `,(0,b.jsx)(t.strong,{children:`le besoin
de contexte`}),`. Repères issus du Nielsen Norman Group (`,(0,b.jsx)(t.em,{children:`Modal & Nonmodal Dialogs`}),`, `,(0,b.jsx)(t.em,{children:`Popups: 10
Problematic Trends`}),`) et de Material 3 (`,(0,b.jsx)(t.em,{children:`Side sheets`}),`).`]}),`
`,(0,b.jsx)(l,{headers:[`Surface`,`Quand`,`Pourquoi`],rows:[[`Drawer`,`Tâche secondaire qui a besoin du contexte : consulter ou éditer un élément de la liste sans la perdre de vue, filtrer, comparer.`,`Le fond reste lisible, c'est tout l'intérêt.`],[`Modale`,`Décision courte qui doit bloquer : confirmer une action destructive, saisir l'information sans laquelle le système ne peut pas continuer.`,`On interrompt, donc il faut que ça vaille l'interruption.`],[`Page dédiée`,`Tâche longue ou structurée : création multi-étapes, formulaire dense, contenu qui scrolle.`,`Material 3 le dit explicitement pour les side sheets : pas de formulaire de création ou d’édition dans un panneau.`]]}),`
`,(0,b.jsx)(t.p,{children:`Et trois cas où la surface est le problème :`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Jamais de modale pour une décision qui dépend de ce qu'elle masque.`}),` Si l'utilisateur doit
relire le tableau derrière pour répondre, il faut un drawer ou une page.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Jamais deux surfaces empilées`}),` (modale par-dessus drawer) : plus de sortie lisible, focus
perdu. Un enchaînement d'étapes reste dans la `,(0,b.jsx)(t.strong,{children:`même`}),` surface.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Jamais d'interruption non sollicitée`}),` : information non essentielle, promotion, demande d'avis.
Ces contenus vont en ligne dans la page ou en bandeau non bloquant.`]}),`
`]}),`
`,(0,b.jsx)(a,{of:d}),`
`,(0,b.jsx)(t.h2,{id:`règles-de-contenu`,children:`Règles de contenu`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`OK`}),` : formulaire, texte, liste ou sélecteur, étapes courtes, aperçu.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`À éviter`}),` : navigation principale, tableaux très larges, parcours multi-pages — page dédiée.`]}),`
`,(0,b.jsxs)(t.li,{children:[`Le contenu scrolle `,(0,b.jsx)(t.strong,{children:`à l'intérieur`}),` ; header et footer restent fixes.`]}),`
`,(0,b.jsxs)(t.li,{children:[`Le padding de 24 est porté par le conteneur : `,(0,b.jsx)(t.strong,{children:`ne pas re-padder le contenu`}),`.`]}),`
`,(0,b.jsxs)(t.li,{children:[`Le drawer occupe toute la hauteur et coûte cher en surface. Largeur `,(0,b.jsx)(t.strong,{children:`constante dans un même
parcours`}),` (520).`]}),`
`]}),`
`,(0,b.jsx)(a,{of:m}),`
`,(0,b.jsx)(t.h2,{id:`overlayheader`,children:`OverlayHeader`}),`
`,(0,b.jsx)(t.p,{children:`Bandeau de 52 : titre à gauche (Circular Medium 16), croix à droite (20). Padding 0 / 20 / 0 / 24,
gap 12. Trois thèmes relevés en production :`}),`
`,(0,b.jsx)(l,{headers:[`Thème`,`Fond`,`Usage`],rows:[[`Blue`,(0,b.jsx)(t.code,{children:`primary`}),`Création, action forte (« Create a feed », nouveau segment)`],[`Light`,(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.code,{children:`bg/container`}),` + bordure basse`]}),`Édition, consultation, surface secondaire`],[`Dark`,(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.code,{children:`info`}),` (navy)`]}),`Configuration technique (configuration d’un feed)`]]}),`
`,(0,b.jsxs)(t.p,{children:[`Titre court décrivant l'action ou le contenu. La croix ferme `,(0,b.jsx)(t.strong,{children:`sans valider`}),`. Un seul header par
overlay, en haut.`]}),`
`,(0,b.jsx)(a,{of:h}),`
`,(0,b.jsx)(t.h2,{id:`overlayfooter`,children:`OverlayFooter`}),`
`,(0,b.jsxs)(t.p,{children:[`Barre de 52, padding 10 / 16, gap 8, actions alignées à `,(0,b.jsx)(t.strong,{children:`droite`}),`, bordure haute.`]}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[`Bouton `,(0,b.jsx)(t.strong,{children:`primaire tout à droite`}),` = action principale. `,(0,b.jsx)(t.strong,{children:`Secondaire à sa gauche`}),` = annuler.`]}),`
`,(0,b.jsxs)(t.li,{children:[`Jusqu'à `,(0,b.jsx)(t.strong,{children:`trois`}),` actions, `,(0,b.jsx)(t.strong,{children:`un seul primaire`}),`. Une troisième action se place encore à gauche
(« Save and activate later »).`]}),`
`,(0,b.jsx)(t.li,{children:`L'ordre visuel est le même partout : c'est ce qui permet de cliquer sans relire.`}),`
`]}),`
`,(0,b.jsx)(a,{of:f}),`
`,(0,b.jsx)(t.h3,{id:`à-éviter`,children:`À éviter`}),`
`,(0,b.jsx)(a,{of:u}),`
`,(0,b.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,b.jsxs)(t.ol,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Voile`}),` : `,(0,b.jsx)(t.code,{children:`bg/scrim`}),`, couvre l'écran, clic = fermeture.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Panneau`}),` : fond `,(0,b.jsx)(t.code,{children:`bg/container`}),`, ombre à trois couches. Modale : `,(0,b.jsx)(t.code,{children:`radius/card`}),`, centrée,
hauteur max 80 vh. Drawer : sans radius, collé à droite, pleine hauteur.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Header`}),` : 52, fixe.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Contenu`}),` : `,(0,b.jsx)(t.code,{children:`flex: 1`}),`, `,(0,b.jsx)(t.code,{children:`overflow-y: auto`}),`, padding 24.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Footer`}),` : 52, fixe, optionnel.`]}),`
`]}),`
`,(0,b.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,b.jsx)(l,{headers:[`Thème`,`Exigence`],rows:[[`Attribut ARIA`,(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.code,{children:`role="dialog"`}),` + `,(0,b.jsx)(t.code,{children:`aria-modal="true"`}),` + `,(0,b.jsx)(t.code,{children:`aria-labelledby`}),` `,`vers le titre du header — pour la modale `,(0,b.jsx)(t.b,{children:`et`}),` pour le drawer (RGAA 7.1).`]})],[`Comportement`,`Focus piégé dans le panneau, Échap ferme, focus rendu au déclencheur à la fermeture (WAI-APG dialog, RGAA 7.3).`],[`Sémantique`,(0,b.jsxs)(b.Fragment,{children:[`Croix = `,(0,b.jsx)(t.code,{children:`<button aria-label="Fermer">`}),`, pas une icône non focusable. Boutons du footer natifs, avec des intitulés explicites : pas « OK » seul si l'action est ambiguë (RGAA 7.1, 7.3).`]})],[`Contraste`,`Header Blue (blanc sur cyan #00a1df) : à vérifier, le rapport est sous 4,5:1 (RGAA 3.2).`]]}),`
`,(0,b.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,b.jsxs)(t.ul,{children:[`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Écart avec la production.`}),` Trois systèmes de modales coexistent (`,(0,b.jsx)(t.code,{children:`blurred-modal`}),`, `,(0,b.jsx)(t.code,{children:`mcs-modal`}),`,
`,(0,b.jsx)(t.code,{children:`modal-header`}),`). Ce conteneur les remplace, drawer compris.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`À trancher.`}),` Trois couleurs de header cohabitent en production. Il faut justifier le choix ou
trancher pour une couleur commune — noté comme évolution dans la maquette.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Écart assumé.`}),` Le piège à focus est aujourd'hui partiel : le focus part dans le panneau à
l'ouverture et revient au déclencheur à la fermeture, mais la tabulation peut encore sortir.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`Piège corrigé.`}),` L'effet qui place le focus à l'ouverture ne dépend plus de `,(0,b.jsx)(t.code,{children:`onClose`}),`.
Cette prop est presque toujours une lambda recréée à chaque rendu du parent : la garder en
dépendance rejouait l'effet à `,(0,b.jsx)(t.strong,{children:`chaque frappe`}),` dans le contenu, et un champ de saisie perdait
le focus lettre après lettre. `,(0,b.jsx)(t.code,{children:`onClose`}),` est lue via une ref, l'effet ne dépend que de `,(0,b.jsx)(t.code,{children:`open`}),`.`]}),`
`,(0,b.jsxs)(t.li,{children:[(0,b.jsx)(t.strong,{children:`À construire.`}),` Flèche retour pour les modales multi-étapes, sous-titre sous le titre, action
tertiaire alignée à gauche dans le footer, boutons pleine largeur sous un breakpoint mobile.`]}),`
`]})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=t(),s(),r(),g(),c()}))();export{y as default};