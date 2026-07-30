import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{a as r,gt as i,o as a,r as o,s,t as c}from"./iframe-BvD6eUld.js";import{n as l,t as u}from"./Icon-Mm64d0bh.js";import{n as d,t as f}from"./Select-D8spPYFa.js";import{n as p,t as m}from"./Input-vWIz7njE.js";function h({label:e,children:t,defaultExpanded:n=!1,disabled:i}){let[o,c]=(0,g.useState)(n),l=`${(0,g.useId)()}-panel`;return(0,_.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:r.space16},children:[(0,_.jsxs)(`button`,{type:`button`,"aria-expanded":o,"aria-controls":l,disabled:i,onClick:()=>c(e=>!e),style:{display:`inline-flex`,alignItems:`center`,gap:r.space8,alignSelf:`flex-start`,height:24,background:`transparent`,border:0,padding:0,font:`inherit`,...s.bodyMedium,color:i?a.textLightest:a.primary,cursor:i?`not-allowed`:`pointer`},children:[(0,_.jsx)(u,{name:`settings`,size:16}),e,(0,_.jsx)(u,{name:o?`chevron-bottom`:`chevron-right`,size:12})]}),(0,_.jsx)(`div`,{id:l,hidden:!o,children:o&&t})]})}var g,_,v=t((()=>{g=n(i(),1),l(),o(),_=c(),h.__docgenInfo={description:`Section Toggle (Figma 111:39) — catégorie CONSTRUIT.
En-tête cliquable d'une section repliable de formulaire (« Advanced »).
Icône settings + libellé + chevron, le tout en primary.

Réservé aux champs OPTIONNELS. Un champ obligatoire ne se replie jamais : replier
ce qui doit être rempli garantit qu'il sera oublié. Un seul par groupe de champs.

Unifie les deux implémentations de production, un Button custom
(\`optional-section-title\`) et un Collapse.Panel d'Ant Design, présentes dans plus
de dix formulaires.`,methods:[],displayName:`SectionToggle`,props:{label:{required:!0,tsType:{name:`string`},description:`Court : « Advanced », « Options ». C'est un intitulé, pas une phrase.`},children:{required:!0,tsType:{name:`ReactNode`},description:``},defaultExpanded:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``}}}})),y=e({BacASable:()=>C,DansUnFormulaire:()=>E,Deplie:()=>T,Dont:()=>D,Replie:()=>w,__namedExportsOrder:()=>O,default:()=>x}),b,x,S,C,w,T,E,D,O,k=t((()=>{v(),p(),d(),o(),b=c(),x={title:`Composants/SectionToggle`,component:h,argTypes:{label:{control:`text`,description:`Court : « Advanced », « Options ». Un intitulé, pas une phrase.`},defaultExpanded:{control:`boolean`,description:`Replié par défaut : c’est tout l’intérêt du composant.`},disabled:{control:`boolean`},children:{control:!1}},args:{label:`Advanced`,defaultExpanded:!1,children:null},decorators:[e=>(0,b.jsx)(`div`,{style:{background:a.bgContainer,padding:r.space24,borderRadius:r.radiusCard,maxWidth:480},children:(0,b.jsx)(e,{})})]},S=()=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:r.space16},children:[(0,b.jsx)(m,{label:`Technical name`,placeholder:`ex. newsletter-subscribers`,width:320}),(0,b.jsx)(f,{label:`Persistance`,options:[{value:`p`,label:`Persisted`},{value:`n`,label:`Not persisted`}],defaultValue:`p`,width:320})]}),C={args:{children:(0,b.jsx)(S,{})}},w={args:{children:(0,b.jsx)(S,{})}},T={args:{defaultExpanded:!0,children:(0,b.jsx)(S,{})}},E={render:()=>(0,b.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:r.space24},children:[(0,b.jsx)(m,{label:`Segment name`,required:!0,placeholder:`ex. Newsletter subscribers`,width:320}),(0,b.jsx)(f,{label:`Segment type`,required:!0,options:[{value:`query`,label:`User query`,icon:`user-query`},{value:`list`,label:`User list`,icon:`team`}],placeholder:`Sélectionner un type`,width:320}),(0,b.jsx)(h,{label:`Advanced`,children:(0,b.jsx)(S,{})})]})},D={render:()=>(0,b.jsxs)(`div`,{style:{borderLeft:`3px solid ${a.error}`,paddingLeft:r.space12},children:[(0,b.jsx)(h,{label:`Advanced`,children:(0,b.jsx)(m,{label:`Segment name`,required:!0,placeholder:`Obligatoire, mais replié`,width:320})}),(0,b.jsx)(`p`,{style:{color:a.textNormal,marginTop:r.space12},children:`Un champ obligatoire replié ne sera rempli qu’après un message d’erreur à la soumission.`})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Champs />
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Champs />
  }
}`,...w.parameters?.docs?.source},description:{story:`Replié : l'état par défaut. Le chevron pointe à droite.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    children: <Champs />
  }
}`,...T.parameters?.docs?.source},description:{story:`Déplié : le chevron pointe vers le bas, les champs apparaissent sous l'en-tête.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: scale.space24
  }}>
      <Input label="Segment name" required placeholder="ex. Newsletter subscribers" width={320} />
      <Select label="Segment type" required options={[{
      value: 'query',
      label: 'User query',
      icon: 'user-query'
    }, {
      value: 'list',
      label: 'User list',
      icon: 'team'
    }]} placeholder="Sélectionner un type" width={320} />
      <SectionToggle label="Advanced">
        <Champs />
      </SectionToggle>
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Dans un formulaire : les champs obligatoires en haut, l'optionnel replié en bas.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    borderLeft: \`3px solid \${semantic.error}\`,
    paddingLeft: scale.space12
  }}>
      <SectionToggle label="Advanced">
        <Input label="Segment name" required placeholder="Obligatoire, mais replié" width={320} />
      </SectionToggle>
      <p style={{
      color: semantic.textNormal,
      marginTop: scale.space12
    }}>
        Un champ obligatoire replié ne sera rempli qu’après un message d’erreur à la soumission.
      </p>
    </div>
}`,...D.parameters?.docs?.source},description:{story:`À éviter : replier un champ obligatoire. Ce qui est caché sera oublié.`,...D.parameters?.docs?.description}}},O=[`BacASable`,`Replie`,`Deplie`,`DansUnFormulaire`,`Dont`]}));k();export{C as BacASable,E as DansUnFormulaire,T as Deplie,D as Dont,w as Replie,O as __namedExportsOrder,x as default,k as n,y as t};