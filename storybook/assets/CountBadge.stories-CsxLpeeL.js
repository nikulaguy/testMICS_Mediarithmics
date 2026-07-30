import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{a as n,o as r,r as i,t as a}from"./iframe-BvD6eUld.js";import{n as o,t as s}from"./Icon-Mm64d0bh.js";import{n as c,t as l}from"./CountBadge-61_Dwpd_.js";var u=e({BacASable:()=>p,SurBoutonFiltre:()=>h,SurOnglet:()=>g,Tons:()=>m,__namedExportsOrder:()=>_,default:()=>f}),d,f,p,m,h,g,_,v=t((()=>{c(),o(),i(),d=a(),f={title:`Composants/CountBadge`,component:l,argTypes:{count:{control:{type:`number`,min:0},description:`Nombre affiché.`},tone:{control:`inline-radio`,options:[`info`,`warning`,`success`],description:`info = état neutre · warning = à traiter · success = rien à traiter.`,table:{defaultValue:{summary:`info`}}}},args:{count:3,tone:`info`}},p={},m={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,gap:n.space24,alignItems:`center`},children:[(0,d.jsxs)(`span`,{style:{display:`inline-flex`,gap:6,alignItems:`center`},children:[(0,d.jsx)(l,{count:3}),` info`]}),(0,d.jsxs)(`span`,{style:{display:`inline-flex`,gap:6,alignItems:`center`},children:[(0,d.jsx)(l,{count:12,tone:`warning`}),` warning`]}),(0,d.jsxs)(`span`,{style:{display:`inline-flex`,gap:6,alignItems:`center`},children:[(0,d.jsx)(l,{count:0,tone:`success`}),` success`]})]})},h={render:()=>(0,d.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:n.space8,height:32,paddingInline:n.space12,border:`1px solid ${r.borderInput}`,borderRadius:n.radiusBase,background:r.bgContainer,color:r.textNormal},children:[(0,d.jsx)(s,{name:`filter`,size:14}),` Filters `,(0,d.jsx)(l,{count:3})]})},g={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:n.space24,borderBottom:`1px solid ${r.borderInput}`,paddingBottom:n.space8},children:[(0,d.jsx)(`span`,{style:{color:r.textLighter},children:`Usage overview`}),(0,d.jsxs)(`span`,{style:{display:`inline-flex`,gap:n.space8,alignItems:`center`,color:r.primary},children:[`Alerts `,(0,d.jsx)(l,{count:2,tone:`warning`})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: scale.space24,
    alignItems: 'center'
  }}>
      <span style={{
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }}>
        <CountBadge count={3} /> info
      </span>
      <span style={{
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }}>
        <CountBadge count={12} tone="warning" /> warning
      </span>
      <span style={{
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }}>
        <CountBadge count={0} tone="success" /> success
      </span>
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Les trois tons. Le ton porte le sens, jamais l'esthétique.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <span style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: scale.space8,
    height: 32,
    paddingInline: scale.space12,
    border: \`1px solid \${semantic.borderInput}\`,
    borderRadius: scale.radiusBase,
    background: semantic.bgContainer,
    color: semantic.textNormal
  }}>
      <Icon name="filter" size={14} /> Filters <CountBadge count={3} />
    </span>
}`,...h.parameters?.docs?.source},description:{story:`Cas d'usage 1 : nombre de filtres actifs sur le bouton Filters.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => (
  /*
    alignItems: center sur la rangée. Sans lui les items s'étirent (align-items: stretch par
    défaut) : l'onglet sans badge fait la hauteur de sa ligne de texte, celui qui en a un fait
    20 px, et les deux libellés ne tombent plus sur la même ligne.
  */
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: scale.space24,
    borderBottom: \`1px solid \${semantic.borderInput}\`,
    paddingBottom: scale.space8
  }}>
      <span style={{
      color: semantic.textLighter
    }}>Usage overview</span>
      <span style={{
      display: 'inline-flex',
      gap: scale.space8,
      alignItems: 'center',
      color: semantic.primary
    }}>
        Alerts <CountBadge count={2} tone="warning" />
      </span>
    </div>)
}`,...g.parameters?.docs?.source},description:{story:`Cas d'usage 2 : alertes à traiter sur un onglet.`,...g.parameters?.docs?.description}}},_=[`BacASable`,`Tons`,`SurBoutonFiltre`,`SurOnglet`]}));v();export{p as BacASable,h as SurBoutonFiltre,g as SurOnglet,m as Tons,_ as __namedExportsOrder,f as default,v as n,u as t};