import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{a as n,c as r,o as i,r as a,t as o,w as s}from"./iframe-BvD6eUld.js";import{n as c,t as l}from"./Icon-Mm64d0bh.js";function u({title:e,description:t,action:r}){return(0,d.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:n.space12,padding:`${n.space35}px ${n.space24}px`,textAlign:`center`},children:[(0,d.jsx)(l,{name:`inbox`,size:44,color:i.textLightest}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:n.space4,color:i.textLighter},children:[(0,d.jsx)(`p`,{style:{margin:0,fontSize:16,lineHeight:`24px`,fontWeight:500},children:e}),t&&(0,d.jsx)(`p`,{style:{margin:0,fontSize:12,lineHeight:`20px`},children:t})]}),r]})}var d,f=t((()=>{c(),a(),d=o(),u.__docgenInfo={description:`Empty State (Figma 285:151) : illustration 44, titre, description optionnelle,
action optionnelle. Centré dans son conteneur, jamais aligné à gauche.
Gap 12 entre les blocs, 4 entre titre et description, padding 35×24.`,methods:[],displayName:`EmptyBlock`,props:{title:{required:!0,tsType:{name:`string`},description:`Titre : Headline 4 (16/24). Prop « Message » de la maquette.`},description:{required:!1,tsType:{name:`string`},description:`Texte secondaire optionnel : Body/Book 12. Prop « Show description ».`},action:{required:!1,tsType:{name:`ReactNode`},description:`Action de sortie optionnelle. Prop « Show button ».`}}}})),p=e({BacASable:()=>_,Compositions:()=>v,FiltreTropRestrictif:()=>y,PremiereCreation:()=>x,RienATraiter:()=>b,__namedExportsOrder:()=>S,default:()=>g}),m,h,g,_,v,y,b,x,S,C=t((()=>{r(),f(),a(),m=o(),h=({children:e})=>(0,m.jsx)(`div`,{style:{background:i.bgContainer,borderRadius:n.radiusCard,minHeight:260,display:`flex`,flexDirection:`column`},children:e}),g={title:`Composants/EmptyBlock`,component:u,argTypes:{title:{control:`text`,description:`Titre, Headline 4 (16/24). Correspond à la prop « Message » de la maquette.`},description:{control:`text`,description:`Texte secondaire, Body/Book 12. Prop « Show description ». Facultatif.`},action:{control:!1,description:`Action de sortie. Prop « Show button ». Facultative, un seul bouton.`}},args:{title:`No segment matches your filters`},decorators:[e=>(0,m.jsx)(h,{children:(0,m.jsx)(e,{})})]},_={},v={render:()=>(0,m.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:n.space16},children:[(0,m.jsx)(h,{children:(0,m.jsx)(u,{title:`No alert triggered`})}),(0,m.jsx)(h,{children:(0,m.jsx)(u,{title:`No alert triggered`,description:`There are no alerts at the moment.`})}),(0,m.jsx)(h,{children:(0,m.jsx)(u,{title:`No segment yet`,description:`Create your first segment to start building audiences.`,action:(0,m.jsx)(s,{type:`primary`,children:`New segment`})})})]}),decorators:[e=>(0,m.jsx)(e,{})]},y={args:{title:`No segment matches your filters`,description:`Try removing one of the active filters to widen the results.`,action:(0,m.jsx)(s,{children:`Clear all filters`})}},b={args:{title:`No alert triggered`,description:`There are no alerts at the moment.`,action:void 0}},x={args:{title:`No segment yet`,description:`Create your first segment to start building audiences.`,action:(0,m.jsx)(s,{type:`primary`,children:`New segment`})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: scale.space16
  }}>
      <Card>
        <EmptyBlock title="No alert triggered" />
      </Card>
      <Card>
        <EmptyBlock title="No alert triggered" description="There are no alerts at the moment." />
      </Card>
      <Card>
        <EmptyBlock title="No segment yet" description="Create your first segment to start building audiences." action={<Button type="primary">New segment</Button>} />
      </Card>
    </div>,
  decorators: [Story => <Story />]
}`,...v.parameters?.docs?.source},description:{story:`Les trois compositions de la maquette : titre seul, titre + description, tout.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No segment matches your filters',
    description: 'Try removing one of the active filters to widen the results.',
    action: <Button>Clear all filters</Button>
  }
}`,...y.parameters?.docs?.source},description:{story:`Cas 1 : filtre trop restrictif. L'action ramène l'utilisateur à un état utile.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No alert triggered',
    description: 'There are no alerts at the moment.',
    action: undefined
  }
}`,...b.parameters?.docs?.source},description:{story:`Cas 2 : rien à traiter. C'est une bonne nouvelle, pas une erreur : pas d'action.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No segment yet',
    description: 'Create your first segment to start building audiences.',
    action: <Button type="primary">New segment</Button>
  }
}`,...x.parameters?.docs?.source},description:{story:`Cas 3 : ressource jamais créée. L'action est la création.`,...x.parameters?.docs?.description}}},S=[`BacASable`,`Compositions`,`FiltreTropRestrictif`,`RienATraiter`,`PremiereCreation`]}));C();export{_ as BacASable,v as Compositions,y as FiltreTropRestrictif,x as PremiereCreation,b as RienATraiter,S as __namedExportsOrder,g as default,C as n,p as t};