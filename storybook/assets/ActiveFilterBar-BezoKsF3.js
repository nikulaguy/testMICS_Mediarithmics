import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BvD6eUld.js";import{b as n,c as r,i,n as a,s as o}from"./blocks-C8yODpg3.js";import{t as s}from"./mdx-react-shim-DjgDkGvs.js";import{AvecDebordement as c,Repliee as l,Vide as u,n as d,t as f}from"./ActiveFilterBar.stories-CHlI4hyR.js";import{n as p,t as m}from"./DocTable-CY3zK50_.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{of:f}),`
`,(0,_.jsx)(t.h1,{id:`activefilterbar`,children:`ActiveFilterBar`}),`
`,(0,_.jsxs)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,margin:`16px 0 24px`,fontSize:12},children:[(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`b`,{children:`Catégorie`}),` : construit`]}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`b`,{children:`Source code`}),` : n'existe pas en production, d'où l'incohérence de filtrage relevée par le client`]}),(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`b`,{children:`Maquette`}),` : Figma, test de filtres `,(0,_.jsx)(`code`,{children:`631:1093`})]})]}),`
`,(0,_.jsxs)(t.p,{children:[`Barre de rappel des filtres appliqués : fond `,(0,_.jsx)(t.code,{children:`bg/subtle`}),`, `,(0,_.jsx)(t.code,{children:`radius/card`}),`, padding 8. `,(0,_.jsx)(t.strong,{children:`Une chip par
valeur appliquée`}),`, jamais de regroupement du type « Labels (3) ». Le regroupement économise de la
place au prix de la seule chose que cette barre sert à faire : dire ce qui est filtré, et permettre
de retirer une valeur précise sans rouvrir un panneau.`]}),`
`,(0,_.jsxs)(t.p,{children:[`Elle n'apparaît que `,(0,_.jsx)(t.strong,{children:`s'il existe au moins un filtre actif non lisible dans la barre d'outils`}),`.
Un filtre déjà visible dans un sélecteur exposé n'a pas besoin d'être rappelé : le répéter apprend
à l'utilisateur que la barre est du bruit.`]}),`
`,(0,_.jsx)(a,{of:l}),`
`,(0,_.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(t.h2,{id:`deux-modes-décidés-par-la-mesure`,children:`Deux modes, décidés par la mesure`}),`
`,(0,_.jsxs)(t.p,{children:[`Par défaut la barre tient `,(0,_.jsx)(t.strong,{children:`sur une ligne`}),`. Le dépliage n'apparaît que si ça déborde vraiment : la
largeur réelle de chaque chip est mesurée dans une rangée hors écran avant de décider combien en
afficher. Un seuil arbitraire (« au-delà de 5 chips ») afficherait « +0 autres » sur des libellés
courts et tronquerait des libellés longs bien avant le débordement.`]}),`
`,(0,_.jsx)(a,{of:c}),`
`,(0,_.jsx)(t.h2,{id:`règles-dusage`,children:`Règles d'usage`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Une chip = une valeur.`}),` Trois labels sélectionnés donnent trois chips, pas une chip « Labels (3) ».`]}),`
`,(0,_.jsxs)(t.li,{children:[`La chip porte `,(0,_.jsx)(t.strong,{children:`la dimension et la valeur`}),` (« Type : User query »). Une chip « User query » seule
oblige à deviner à quelle colonne elle se rapporte.`]}),`
`,(0,_.jsxs)(t.li,{children:[`« Clear all filters » reste `,(0,_.jsx)(t.strong,{children:`toujours visible`}),`, à droite, hors de la zone qui se replie : c'est
la sortie de secours, elle ne se cache pas derrière un dépliage.`]}),`
`,(0,_.jsx)(t.li,{children:`Retirer une chip applique le filtre immédiatement. Pas de bouton « Appliquer » : la barre montre
l'état courant, elle n'édite pas un brouillon.`}),`
`,(0,_.jsxs)(t.li,{children:[`Zéro filtre actif : le composant rend `,(0,_.jsx)(t.code,{children:`null`}),`. Il ne laisse pas une bande vide qui décale la page
à chaque filtrage.`]}),`
`]}),`
`,(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`anatomie`,children:`Anatomie`}),`
`,(0,_.jsxs)(t.ol,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Conteneur`}),` : fond `,(0,_.jsx)(t.code,{children:`bg/subtle`}),`, `,(0,_.jsx)(t.code,{children:`radius/card`}),`, padding 8, gap 12.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Rangée de chips`}),` : `,(0,_.jsx)(t.code,{children:`Tag`}),` fermables, gap 8, `,(0,_.jsx)(t.code,{children:`nowrap`}),` replié, `,(0,_.jsx)(t.code,{children:`wrap`}),` déplié.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Bascule`}),` : lien « +n autres » / « Réduire », affiché seulement en cas de débordement réel.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Sortie`}),` : lien « Clear all filters », toujours à droite, jamais compressé.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Rangée de mesure`}),` : copie invisible des chips, hors flux, qui sert au calcul de débordement.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`accessibilité-rgaa`,children:`Accessibilité (RGAA)`}),`
`,(0,_.jsx)(m,{headers:[`Thème`,`Exigence`],rows:[[`Sémantique`,(0,_.jsxs)(_.Fragment,{children:[`Chaque chip expose un bouton de retrait avec un intitulé explicite :`,` `,(0,_.jsx)(t.code,{children:`aria-label="Retirer Type : User query"`}),`, pas « Fermer » (RGAA 7.3, 11.9).`]})],[`Contenu dynamique`,(0,_.jsxs)(_.Fragment,{children:[`La bascule porte `,(0,_.jsx)(t.code,{children:`aria-expanded`}),`. Le résultat filtré est annoncé dans une zone`,` `,(0,_.jsx)(t.code,{children:`aria-live="polite"`}),` : « 12 segments » (RGAA 7.4).`]})],[`Focus`,`Retirer la dernière chip fait disparaître la barre : le focus est replacé sur le bouton Filters, jamais perdu sur le body (RGAA 7.3).`],[`Images`,`La rangée de mesure porte aria-hidden : elle est invisible pour tous, y compris les technologies d'assistance (RGAA 10.13).`]]}),`
`,(0,_.jsx)(t.h2,{id:`écarts-et-évolutions`,children:`Écarts et évolutions`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`Ajouté en maquette.`}),` En production, aucun rappel des filtres appliqués : l'utilisateur doit
rouvrir chaque panneau pour savoir ce qui filtre sa liste. C'est la cause directe de
l'incohérence remontée par le client.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.strong,{children:`À construire.`}),` L'enregistrement d'un jeu de filtres en vue nommée, évoqué mais non spécifié.`]}),`
`]})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),s(),r(),d(),p()}))();export{g as default};