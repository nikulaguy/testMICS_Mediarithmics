import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{a as n,o as r,r as i,t as a}from"./iframe-BvD6eUld.js";import{n as o,t as s}from"./Icon-Mm64d0bh.js";import{n as c,t as l}from"./AppLauncher-CrWOtOgt.js";import{n as u,t as d}from"./DropdownPanel-BhYUdyL0.js";var f=e({BacASable:()=>g,Marques:()=>v,SansComputingConsole:()=>_,__namedExportsOrder:()=>y,default:()=>h}),p,m,h,g,_,v,y,b=t((()=>{c(),u(),o(),i(),p=a(),m=[[{name:`Navigator`,icon:`app-navigator`},{name:`Computing console`,icon:`app-computing-console`}],[{name:`Developer Documentation`,icon:`app-developer-documentation`,external:!0},{name:`User Guide`,icon:`app-user-guide`,external:!0}]],h={title:`Composants/AppLauncher`,component:l,argTypes:{groups:{control:!1,description:`Groupes d’entrées, séparés par un filet : applications, puis ressources.`},onSelect:{control:!1}},args:{groups:m},decorators:[e=>(0,p.jsx)(`div`,{style:{background:r.bgWindow,padding:n.space24,display:`inline-block`},children:(0,p.jsx)(d,{width:260,children:(0,p.jsx)(e,{})})})]},g={},_={args:{groups:[[{name:`Navigator`,icon:`app-navigator`}],[{name:`Developer Documentation`,icon:`app-developer-documentation`,external:!0},{name:`User Guide`,icon:`app-user-guide`,external:!0}]]}},v={render:()=>(0,p.jsx)(`div`,{style:{display:`flex`,gap:n.space24,background:r.bgContainer},children:m.flat().map(e=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:n.space8,width:130,color:r.textNormal},children:[(0,p.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:n.space12},children:[(0,p.jsx)(s,{name:e.icon,size:40}),(0,p.jsx)(s,{name:e.icon,size:20})]}),(0,p.jsx)(`span`,{style:{fontSize:10,color:r.textLighter,textAlign:`center`},children:e.icon})]},e.name))})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source},description:{story:`Dans sa surface réelle : le panneau de 260 de la TopBar.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    groups: [[{
      name: 'Navigator',
      icon: 'app-navigator'
    }], [{
      name: 'Developer Documentation',
      icon: 'app-developer-documentation',
      external: true
    }, {
      name: 'User Guide',
      icon: 'app-user-guide',
      external: true
    }]]
  }
}`,..._.parameters?.docs?.source},description:{story:`Une organisation sans Computing Console : le groupe se réduit, il ne disparaît pas.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: scale.space24,
    background: semantic.bgContainer
  }}>
      {GROUPS.flat().map(app => <div key={app.name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: scale.space8,
      width: 130,
      color: semantic.textNormal
    }}>
          <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: scale.space12
      }}>
            <Icon name={app.icon} size={40} />
            <Icon name={app.icon} size={20} />
          </span>
          <span style={{
        fontSize: 10,
        color: semantic.textLighter,
        textAlign: 'center'
      }}>{app.icon}</span>
        </div>)}
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Les quatre marques, à leur taille de menu (20) et en grand (40).`,...v.parameters?.docs?.description}}},y=[`BacASable`,`SansComputingConsole`,`Marques`]}));b();export{g as BacASable,v as Marques,_ as SansComputingConsole,y as __namedExportsOrder,h as default,b as n,f as t};