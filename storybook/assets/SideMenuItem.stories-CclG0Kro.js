import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{a as r,gt as i,o as a,r as o,t as s}from"./iframe-BvD6eUld.js";import{n as c,t as l}from"./SideMenuItem-DFlB8ifS.js";var u=e({BacASable:()=>h,DansLAppLauncher:()=>v,DansUneListe:()=>_,Etats:()=>g,__namedExportsOrder:()=>y,default:()=>m});function d({items:e}){let[t,n]=(0,f.useState)(e[2].label);return(0,p.jsx)(`div`,{style:{width:170,display:`flex`,flexDirection:`column`,gap:2},children:e.map(e=>(0,p.jsx)(l,{label:e.label,icon:e.icon,active:e.label===t,onSelect:()=>n(e.label)},e.label))})}var f,p,m,h,g,_,v,y,b=t((()=>{f=n(i(),1),c(),o(),p=s(),m={title:`Composants/SideMenuItem`,component:l,argTypes:{label:{control:`text`,description:`Libellé de l’entrée. Court, sans ponctuation.`},icon:{control:`text`,description:"Glyphe du set, ou marque `app-*` dans l’AppLauncher."},active:{control:`boolean`,description:`Entrée en cours. Une seule par liste.`},role:{control:`inline-radio`,options:[`link`,`menuitem`],description:`link dans le SideMenu, menuitem dans un menu ouvert depuis un bouton.`,table:{defaultValue:{summary:`link`}}},srSuffix:{control:`text`,description:`Complément réservé aux lecteurs d’écran.`},onSelect:{control:!1}},args:{label:`Segments`,icon:`team`,active:!1,role:`link`},decorators:[e=>(0,p.jsx)(`div`,{style:{width:200,background:a.bgContainer,padding:`8px 15px`,display:`flex`},children:(0,p.jsx)(e,{})})]},h={},g={render:()=>(0,p.jsxs)(`div`,{style:{width:170,display:`flex`,flexDirection:`column`,gap:2},children:[(0,p.jsx)(l,{label:`Default`,icon:`team`}),(0,p.jsx)(l,{label:`Active`,icon:`team`,active:!0}),(0,p.jsx)(l,{label:`Survolez-moi`,icon:`team`})]})},_={render:()=>(0,p.jsx)(d,{items:[{label:`Builders`,icon:`cluster`},{label:`User lookup`,icon:`monitor`},{label:`Segments`,icon:`team`}]})},v={render:()=>(0,p.jsx)(`div`,{style:{width:230,display:`flex`,flexDirection:`column`},children:[{label:`Navigator`,icon:`app-navigator`},{label:`Computing console`,icon:`app-computing-console`}].map(e=>(0,p.jsx)(`div`,{style:{display:`flex`,padding:`${r.space4}px 0`},children:(0,p.jsx)(l,{role:`menuitem`,label:e.label,icon:e.icon})},e.label))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 170,
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  }}>
      <SideMenuItem label="Default" icon="team" />
      <SideMenuItem label="Active" icon="team" active />
      <SideMenuItem label="Survolez-moi" icon="team" />
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Les trois états de la maquette. Le survol est à essayer à la souris.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = [{
      label: 'Builders',
      icon: 'cluster'
    }, {
      label: 'User lookup',
      icon: 'monitor'
    }, {
      label: 'Segments',
      icon: 'team'
    }];
    return <Liste items={items} />;
  }
}`,..._.parameters?.docs?.source},description:{story:`Une liste réelle : un seul actif, gap 2, gouttière de 15.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 230,
    display: 'flex',
    flexDirection: 'column'
  }}>
      {[{
      label: 'Navigator',
      icon: 'app-navigator'
    }, {
      label: 'Computing console',
      icon: 'app-computing-console'
    }].map(a => <div key={a.label} style={{
      display: 'flex',
      padding: \`\${scale.space4}px 0\`
    }}>
          <SideMenuItem role="menuitem" label={a.label} icon={a.icon} />
        </div>)}
    </div>
}`,...v.parameters?.docs?.source},description:{story:"Les mêmes entrées dans l'AppLauncher : marques d'application, rôle `menuitem`.",...v.parameters?.docs?.description}}},y=[`BacASable`,`Etats`,`DansUneListe`,`DansLAppLauncher`]}));b();export{h as BacASable,v as DansLAppLauncher,_ as DansUneListe,g as Etats,y as __namedExportsOrder,m as default,b as n,u as t};