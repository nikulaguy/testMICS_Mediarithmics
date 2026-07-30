import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{a as r,gt as i,o as a,r as o,t as s}from"./iframe-BvD6eUld.js";import{n as c,t as l}from"./DropdownPanel-BhYUdyL0.js";import{c as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./DropdownItems-DRc4HP8i.js";var _=e({Ancre:()=>E,BacASable:()=>C,GroupesSepares:()=>D,MenuCategories:()=>w,MultiSelection:()=>T,__namedExportsOrder:()=>O,default:()=>S});function v(){let[e,t]=(0,b.useState)(`type`);return(0,x.jsxs)(l,{width:240,children:[(0,x.jsxs)(d,{children:[(0,x.jsx)(p,{icon:`tag`,label:`Segment type`,count:2,active:e===`type`,onActivate:()=>t(`type`)}),(0,x.jsx)(p,{icon:`cluster`,label:`Datamart`,active:e===`datamart`,onActivate:()=>t(`datamart`)}),(0,x.jsx)(p,{icon:`calendar`,label:`Creation date`,count:1,active:e===`date`,onActivate:()=>t(`date`)})]}),(0,x.jsx)(m,{label:`Clear all filters`,onClick:()=>{}})]})}function y(){let[e,t]=(0,b.useState)([`User query`]),n=e=>t(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return(0,x.jsxs)(l,{width:270,children:[(0,x.jsx)(d,{children:[`User query`,`User list`,`User pixel`,`User lookalike`].map(t=>(0,x.jsx)(g,{label:t,icon:`team`,checked:e.includes(t),onToggle:()=>n(t)},t))}),(0,x.jsx)(m,{label:`Clear segment type`,disabled:!e.length,onClick:()=>t([])})]})}var b,x,S,C,w,T,E,D,O,k=t((()=>{b=n(i(),1),c(),u(),o(),x=s(),S={title:`Composants/DropdownPanel`,component:l,argTypes:{width:{control:{type:`number`,min:120,max:480},description:`Largeur fixe en px. Sinon le panneau épouse son contenu.`},anchored:{control:`boolean`,description:`Positionne le panneau en absolu sous son déclencheur.`},align:{control:`inline-radio`,options:[`left`,`right`],description:`Bord d'ancrage quand anchored.`},children:{control:!1},style:{control:!1}},args:{width:240,children:null},decorators:[e=>(0,x.jsx)(`div`,{style:{background:a.bgWindow,padding:r.space24},children:(0,x.jsx)(e,{})})]},C={args:{children:(0,x.jsxs)(d,{children:[(0,x.jsx)(h,{label:`Persisted`,selected:!0,onSelect:()=>{}}),(0,x.jsx)(h,{label:`Not persisted`,selected:!1,onSelect:()=>{}})]})}},w={render:()=>(0,x.jsx)(v,{})},T={render:()=>(0,x.jsx)(y,{})},E={render:()=>(0,x.jsx)(`div`,{style:{height:220},children:(0,x.jsxs)(`div`,{style:{position:`relative`,display:`inline-block`},children:[(0,x.jsx)(`button`,{type:`button`,style:{height:r.sizeControl,paddingInline:r.space12,border:`1px solid ${a.borderInput}`,borderRadius:r.radiusBase,background:a.bgContainer,color:a.textNormal,font:`inherit`,cursor:`pointer`},children:`Edit view`}),(0,x.jsx)(l,{anchored:!0,align:`left`,width:220,children:(0,x.jsxs)(d,{children:[(0,x.jsx)(g,{label:`Name`,icon:`tag`,checked:!0,onToggle:()=>{}}),(0,x.jsx)(g,{label:`Type`,icon:`cluster`,checked:!0,onToggle:()=>{}}),(0,x.jsx)(g,{label:`Owner`,icon:`user`,checked:!1,onToggle:()=>{}})]})})]})})},D={render:()=>(0,x.jsxs)(l,{width:240,children:[(0,x.jsxs)(d,{title:`Vue`,children:[(0,x.jsx)(h,{label:`Columns`,selected:!1,onSelect:()=>{}}),(0,x.jsx)(h,{label:`Density`,selected:!1,onSelect:()=>{}})]}),(0,x.jsx)(f,{}),(0,x.jsx)(d,{title:`Export`,children:(0,x.jsx)(h,{label:`Download as CSV`,selected:!1,onSelect:()=>{}})})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: <DropdownGroup>
        <DropdownOptionItem label="Persisted" selected onSelect={() => {}} />
        <DropdownOptionItem label="Not persisted" selected={false} onSelect={() => {}} />
      </DropdownGroup>
  }
}`,...C.parameters?.docs?.source},description:{story:`Le panneau nu : une surface. Ce qu'il contient vient des items du DS.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <CategoriesDemo />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <MultiDemo />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 220
  }}>
      <div style={{
      position: 'relative',
      display: 'inline-block'
    }}>
        <button type="button" style={{
        height: scale.sizeControl,
        paddingInline: scale.space12,
        border: \`1px solid \${semantic.borderInput}\`,
        borderRadius: scale.radiusBase,
        background: semantic.bgContainer,
        color: semantic.textNormal,
        font: 'inherit',
        cursor: 'pointer'
      }}>
          Edit view
        </button>
        <DropdownPanel anchored align="left" width={220}>
          <DropdownGroup>
            <DropdownCheckboxItem label="Name" icon="tag" checked onToggle={() => {}} />
            <DropdownCheckboxItem label="Type" icon="cluster" checked onToggle={() => {}} />
            <DropdownCheckboxItem label="Owner" icon="user" checked={false} onToggle={() => {}} />
          </DropdownGroup>
        </DropdownPanel>
      </div>
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Cas 3 : ancré sous son déclencheur. Le conteneur relatif épouse le bouton —
un conteneur plus haut que le déclencheur décollerait le panneau d'autant.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownPanel width={240}>
      <DropdownGroup title="Vue">
        <DropdownOptionItem label="Columns" selected={false} onSelect={() => {}} />
        <DropdownOptionItem label="Density" selected={false} onSelect={() => {}} />
      </DropdownGroup>
      <DropdownDivider />
      <DropdownGroup title="Export">
        <DropdownOptionItem label="Download as CSV" selected={false} onSelect={() => {}} />
      </DropdownGroup>
    </DropdownPanel>
}`,...D.parameters?.docs?.source},description:{story:`Cas 4 : groupes séparés. Le séparateur marque un changement de nature d'action.`,...D.parameters?.docs?.description}}},O=[`BacASable`,`MenuCategories`,`MultiSelection`,`Ancre`,`GroupesSepares`]}));k();export{E as Ancre,C as BacASable,D as GroupesSepares,w as MenuCategories,T as MultiSelection,O as __namedExportsOrder,S as default,k as n,_ as t};