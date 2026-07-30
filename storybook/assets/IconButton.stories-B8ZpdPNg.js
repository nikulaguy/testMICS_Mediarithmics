import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{a as n,o as r,r as i,t as a}from"./iframe-BvD6eUld.js";import{n as o,t as s}from"./IconButton-SZxiicYr.js";var c=e({BacASable:()=>d,Etats:()=>f,RangeeTopBar:()=>p,__namedExportsOrder:()=>m,default:()=>u}),l,u,d,f,p,m,h=t((()=>{o(),i(),l=a(),u={title:`Composants/IconButton`,component:s,argTypes:{icon:{control:`select`,options:[`appstore`,`user`,`info`,`magnifier`,`options`,`dots`,`download`],description:`Nom du glyphe du set Icon.`},label:{control:`text`,description:`Intitulé accessible. Obligatoire : le bouton n'a pas de texte visible.`},expanded:{control:`boolean`,description:`Le bouton ouvre un panneau. Pilote aria-haspopup / aria-expanded et l'état visuel Pressed.`},onClick:{control:!1},onPointerDown:{control:!1}},args:{icon:`appstore`,label:`Applications`},decorators:[e=>(0,l.jsx)(`div`,{style:{background:r.info,padding:n.space16,display:`inline-flex`},children:(0,l.jsx)(e,{})})]},d={},f={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:n.space24,alignItems:`center`,color:r.textOnDark},children:[(0,l.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,l.jsx)(s,{icon:`appstore`,label:`Applications`}),(0,l.jsx)(`div`,{style:{fontSize:10,marginTop:4},children:`Default`})]}),(0,l.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,l.jsx)(s,{icon:`user`,label:`Compte`,expanded:!0}),(0,l.jsx)(`div`,{style:{fontSize:10,marginTop:4},children:`Ouvert`})]})]})},p={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:n.space8,alignItems:`center`},children:[(0,l.jsx)(s,{icon:`magnifier`,label:`Rechercher`}),(0,l.jsx)(s,{icon:`info`,label:`Aide`}),(0,l.jsx)(s,{icon:`appstore`,label:`Applications`}),(0,l.jsx)(s,{icon:`user`,label:`Compte`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source},description:{story:`Sur la navy de la TopBar, son contexte réel.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: scale.space24,
    alignItems: 'center',
    color: semantic.textOnDark
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <IconButton icon="appstore" label="Applications" />
        <div style={{
        fontSize: 10,
        marginTop: 4
      }}>Default</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <IconButton icon="user" label="Compte" expanded />
        <div style={{
        fontSize: 10,
        marginTop: 4
      }}>Ouvert</div>
      </div>
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Les trois états : Default (text/on-dark), Hover (bg/hover), Pressed / ouvert (bg/selected).`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: scale.space8,
    alignItems: 'center'
  }}>
      <IconButton icon="magnifier" label="Rechercher" />
      <IconButton icon="info" label="Aide" />
      <IconButton icon="appstore" label="Applications" />
      <IconButton icon="user" label="Compte" />
    </div>
}`,...p.parameters?.docs?.source},description:{story:`La rangée de la TopBar, telle qu'elle est rendue en production.`,...p.parameters?.docs?.description}}},m=[`BacASable`,`Etats`,`RangeeTopBar`]}));h();export{d as BacASable,f as Etats,p as RangeeTopBar,m as __namedExportsOrder,u as default,h as n,c as t};