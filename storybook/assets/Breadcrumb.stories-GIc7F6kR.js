import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{a as n,o as r,r as i,t as a}from"./iframe-BvD6eUld.js";import{n as o,t as s}from"./Breadcrumb-nKVO6E0T.js";var c=e({BacASable:()=>d,SurFondSombre:()=>m,TroisNiveaux:()=>f,UnNiveau:()=>p,__namedExportsOrder:()=>h,default:()=>u}),l,u,d,f,p,m,h,g=t((()=>{o(),i(),l=a(),u={title:`Composants/Breadcrumb`,component:s,argTypes:{items:{control:!1,description:`Niveaux, du plus général au plus précis. Trois au maximum.`},theme:{control:`inline-radio`,options:[`onLight`,`onDark`],description:`Selon le fond : onLight sur bg/container, onDark sur un bandeau navy.`}},args:{items:[{label:`Segments`,onClick:()=>{}},{label:`Segments`}],theme:`onLight`},decorators:[(e,t)=>(0,l.jsx)(`div`,{style:{background:t.args.theme===`onDark`?r.info:r.bgContainer,padding:n.space20,borderRadius:n.radiusCard},children:(0,l.jsx)(e,{})})]},d={},f={args:{items:[{label:`Segments`,onClick:()=>{}},{label:`Segments`,onClick:()=>{}},{label:`Copy of Copy of Test_max_230426`}]}},p={args:{items:[{label:`Campaigns`}]}},m={args:{theme:`onDark`,items:[{label:`Segments`,onClick:()=>{}},{label:`New segment`,onClick:()=>{}},{label:`Query`}]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Segments',
      onClick: () => {}
    }, {
      label: 'Segments',
      onClick: () => {}
    }, {
      label: 'Copy of Copy of Test_max_230426'
    }]
  }
}`,...f.parameters?.docs?.source},description:{story:`Les trois niveaux : item du SideMenu, onglet actif, ressource ouverte.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Campaigns'
    }]
  }
}`,...p.parameters?.docs?.source},description:{story:`Un seul niveau : le fil d'ariane reste, il situe même sans parent.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'onDark',
    items: [{
      label: 'Segments',
      onClick: () => {}
    }, {
      label: 'New segment',
      onClick: () => {}
    }, {
      label: 'Query'
    }]
  }
}`,...m.parameters?.docs?.source},description:{story:`Sur bandeau navy : liens en link/on-dark, courant en blanc.`,...m.parameters?.docs?.description}}},h=[`BacASable`,`TroisNiveaux`,`UnNiveau`,`SurFondSombre`]}));g();export{d as BacASable,m as SurFondSombre,f as TroisNiveaux,p as UnNiveau,h as __namedExportsOrder,u as default,g as n,c as t};