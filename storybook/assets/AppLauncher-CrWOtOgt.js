import{i as e}from"./preload-helper-BdFrVu1K.js";import{a as t,o as n,r,t as i}from"./iframe-BvD6eUld.js";import{n as a,t as o}from"./SideMenuItem-DFlB8ifS.js";import{n as s,t as c}from"./logo-mediarithmics-CRP0D7Fq.js";function l({groups:e,onSelect:r}){return(0,u.jsxs)(`div`,{role:`menu`,"aria-label":`Applications`,children:[(0,u.jsx)(`div`,{style:{height:101,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`${t.space20}px 0 ${t.space16}px`},children:(0,u.jsx)(`img`,{src:s,alt:`mediarithmics`,style:{width:140}})}),e.map((i,a)=>(0,u.jsxs)(`div`,{role:`group`,children:[i.map(e=>(0,u.jsx)(`div`,{style:{display:`flex`,padding:`${t.space4}px 15px`},children:(0,u.jsx)(o,{role:`menuitem`,icon:e.icon,label:e.name,onSelect:()=>r?.(e.name),srSuffix:e.external?`Nouvelle fenêtre`:void 0})},e.name)),a<e.length-1&&(0,u.jsx)(`div`,{style:{paddingInline:t.space16},children:(0,u.jsx)(`div`,{style:{borderTop:`1px solid ${n.borderDefault}`}})})]},a))]})}var u,d=e((()=>{a(),c(),r(),u=i(),l.__docgenInfo={description:`AppLauncher (Figma 19:148) — contenu du panneau « Applications » de la TopBar.
Bandeau de marque, puis les entrées groupées : les applications, un filet, les
ressources documentaires.

Les entrées sont des \`SideMenuItem\`, le composant des entrées du menu latéral :
c'est le choix de la maquette, et il évite d'entretenir un second item avec son
propre survol, sa propre hauteur et son propre radius.

Chaque entrée porte la MARQUE de son application, pas un glyphe du set : c'est
le seul menu du produit où l'on quitte l'application courante, et c'est le logo
qui rend la cible reconnaissable avant même la lecture du libellé.

Le composant ne dessine pas sa surface : il se pose dans un DropdownPanel.`,methods:[],displayName:`AppLauncher`,props:{groups:{required:!0,tsType:{name:`Array`,elements:[{name:`Array`,elements:[{name:`LauncherApp`}],raw:`LauncherApp[]`}],raw:`LauncherApp[][]`},description:`Groupes d'entrées, dans l'ordre du code produit : userLinks (applications),
puis resourceLinks (documentation). Un filet sépare deux groupes.`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(name: string) => void`,signature:{arguments:[{type:{name:`string`},name:`name`}],return:{name:`void`}}},description:``}}}}));export{d as n,l as t};