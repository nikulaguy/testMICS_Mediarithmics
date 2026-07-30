import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{E as n,a as r,c as i,o as a,r as o,t as s}from"./iframe-BvD6eUld.js";import{n as c,t as l}from"./Icon-Mm64d0bh.js";function u({title:e,value:t,max:i,hint:o}){let s=i?Math.min(1,t/i):0;return(0,d.jsxs)(`div`,{style:{background:a.bgContainer,borderRadius:r.radiusCard,padding:r.space24,display:`flex`,flexDirection:`column`,gap:r.space16,minWidth:240},children:[(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,d.jsx)(`span`,{style:{flex:1,color:a.textNormal,fontWeight:500},children:e}),o&&(0,d.jsx)(n,{title:o,children:(0,d.jsx)(`span`,{style:{display:`inline-flex`,color:a.textLighter},tabIndex:0,"aria-label":o,children:(0,d.jsx)(l,{name:`info`,size:14})})})]}),i!==void 0&&(0,d.jsx)(`div`,{role:`progressbar`,"aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":i,"aria-label":e,style:{height:16,borderRadius:r.radiusCard,background:a.bgWindow,overflow:`hidden`},children:(0,d.jsx)(`div`,{style:{height:`100%`,width:`${s*100}%`,background:a.success}})}),(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:r.space8},children:[(0,d.jsx)(`span`,{style:{fontSize:24,lineHeight:`28px`,fontWeight:500,color:a.textDarker},children:t.toLocaleString(`fr-FR`)}),i!==void 0&&(0,d.jsxs)(`span`,{style:{color:a.textLighter},children:[`/ `,i.toLocaleString(`fr-FR`)]})]})]})}var d,f=t((()=>{i(),c(),o(),d=s(),u.__docgenInfo={description:`Counter (Figma 185:81) — carte de compteur d'un tableau de bord.
La barre n'apparaît que s'il y a un plafond : une progression sans maximum
ne veut rien dire. Le chiffre est toujours là, la barre ne fait que l'illustrer.`,methods:[],displayName:`Counter`,props:{title:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`number`},description:``},max:{required:!1,tsType:{name:`number`},description:`Plafond. Présent = barre de progression ; absent = KPI sans plafond.`},hint:{required:!1,tsType:{name:`string`},description:`Explication affichée en infobulle sur l'icône info.`}}}})),p=e({AvecPlafond:()=>_,BacASable:()=>g,PlafondAtteint:()=>b,Rangee:()=>y,SansPlafond:()=>v,__namedExportsOrder:()=>x,default:()=>h}),m,h,g,_,v,y,b,x,S=t((()=>{f(),o(),m=s(),h={title:`Composants/Counter`,component:u,argTypes:{title:{control:`text`,description:`Ce que compte la carte. Body/Medium 12.`},value:{control:`number`,description:`Valeur courante. Headline 24.`},max:{control:`number`,description:`Plafond. Présent = barre de progression ; absent = KPI sans plafond.`},hint:{control:`text`,description:`Explication en infobulle sur l’icône info. Facultative.`}},args:{title:`Number of activated segments`,value:6,max:100},decorators:[e=>(0,m.jsx)(`div`,{style:{background:a.bgWindow,padding:r.space24},children:(0,m.jsx)(e,{})})]},g={},_={args:{title:`Number of activated segments`,value:6,max:100,hint:`Segments actifs sur le quota de votre offre.`}},v={args:{title:`Executions in the last 30 days`,value:12480,max:void 0,hint:void 0}},y={render:()=>(0,m.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:r.space16},children:[(0,m.jsx)(u,{title:`Number of activated segments`,value:6,max:100,hint:`Quota de votre offre.`}),(0,m.jsx)(u,{title:`User points`,value:1284e3}),(0,m.jsx)(u,{title:`Storage used`,value:82,max:100,hint:`Espace du datamart.`})]})},b={args:{title:`Storage used`,value:100,max:100,hint:`Espace du datamart.`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Number of activated segments',
    value: 6,
    max: 100,
    hint: 'Segments actifs sur le quota de votre offre.'
  }
}`,..._.parameters?.docs?.source},description:{story:`Avec plafond : la barre illustre le rapport, le chiffre le dit.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Executions in the last 30 days',
    value: 12480,
    max: undefined,
    hint: undefined
  }
}`,...v.parameters?.docs?.source},description:{story:`Sans plafond : pas de barre. Une progression sans maximum ne veut rien dire.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: scale.space16
  }}>
      <Counter title="Number of activated segments" value={6} max={100} hint="Quota de votre offre." />
      <Counter title="User points" value={1284000} />
      <Counter title="Storage used" value={82} max={100} hint="Espace du datamart." />
    </div>
}`,...y.parameters?.docs?.source},description:{story:`En rangée sur un tableau de bord : même largeur, même hauteur, gap 16.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Storage used',
    value: 100,
    max: 100,
    hint: 'Espace du datamart.'
  }
}`,...b.parameters?.docs?.source},description:{story:`Plafond atteint : la barre est pleine, le chiffre reste la source de vérité.`,...b.parameters?.docs?.description}}},x=[`BacASable`,`AvecPlafond`,`SansPlafond`,`Rangee`,`PlafondAtteint`]}));S();export{_ as AvecPlafond,g as BacASable,b as PlafondAtteint,y as Rangee,v as SansPlafond,x as __namedExportsOrder,h as default,S as n,p as t};