import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{a as r,gt as i,o as a,r as o,t as s}from"./iframe-BvD6eUld.js";import{n as c,t as l}from"./Select-D8spPYFa.js";import{n as u,t as d}from"./Input-vWIz7njE.js";var f=e({AvecIcones:()=>y,AvecRecherche:()=>x,BacASable:()=>_,DansUnFormulaire:()=>S,Etats:()=>v,Multiple:()=>b,__namedExportsOrder:()=>C,default:()=>g}),p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{p=n(i(),1),c(),u(),o(),m=s(),h=[{value:`query`,label:`User query`,icon:`user-query`},{value:`list`,label:`User list`,icon:`team`},{value:`pixel`,label:`User pixel`,icon:`user-pixel`},{value:`lookalike`,label:`User lookalike`,icon:`user-lookalike`}],g={title:`Composants/Select`,component:l,argTypes:{label:{control:`text`},placeholder:{control:`text`,description:`Le choix attendu, pas une consigne.`},message:{control:`text`},state:{control:`inline-radio`,options:[`default`,`error`,`disabled`]},required:{control:`boolean`},width:{control:`number`,description:`Alignée sur les autres champs du formulaire.`},multiple:{control:`boolean`,description:`Les valeurs choisies s’affichent en Tags retirables.`},allowClear:{control:`boolean`},showSearch:{control:`boolean`,description:`À activer au-delà d’une dizaine d’options.`},loading:{control:`boolean`},options:{control:!1},onChange:{control:!1}},args:{label:`Segment type`,placeholder:`Sélectionner un type`,options:h,width:320},decorators:[e=>(0,m.jsx)(`div`,{style:{background:a.bgContainer,padding:r.space24,borderRadius:r.radiusCard},children:(0,m.jsx)(e,{})})]},_={},v={render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:r.space16},children:[(0,m.jsx)(l,{label:`Default`,placeholder:`Sélectionner un type`,options:h,width:320}),(0,m.jsx)(l,{label:`Rempli`,defaultValue:`query`,options:h,width:320}),(0,m.jsx)(l,{label:`Erreur`,state:`error`,message:`Ce champ est obligatoire.`,placeholder:`Sélectionner un type`,options:h,width:320}),(0,m.jsx)(l,{label:`Désactivé`,state:`disabled`,defaultValue:`query`,options:h,width:320})]})},y={args:{defaultValue:`query`}},b={render:()=>{let[e,t]=(0,p.useState)([`query`,`list`]);return(0,m.jsx)(l,{label:`Segment types`,multiple:!0,allowClear:!0,options:h,value:e,onChange:e=>t(e),width:420})}},x={args:{label:`Datamart`,showSearch:!0,placeholder:`Rechercher un datamart`,options:Array.from({length:18},(e,t)=>({value:`dm${t}`,label:`Datamart ${t+1}`}))}},S={render:()=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:r.space16},children:[(0,m.jsx)(d,{label:`Segment name`,placeholder:`ex. Newsletter subscribers`,width:320,required:!0}),(0,m.jsx)(l,{label:`Segment type`,placeholder:`Sélectionner un type`,options:h,width:320,required:!0}),(0,m.jsx)(l,{label:`Datamart`,placeholder:`Sélectionner un datamart`,options:[{value:`p`,label:`mediarithmics - product`}],width:320})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: scale.space16
  }}>
      <Select label="Default" placeholder="Sélectionner un type" options={TYPES} width={320} />
      <Select label="Rempli" defaultValue="query" options={TYPES} width={320} />
      <Select label="Erreur" state="error" message="Ce champ est obligatoire." placeholder="Sélectionner un type" options={TYPES} width={320} />
      <Select label="Désactivé" state="disabled" defaultValue="query" options={TYPES} width={320} />
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Mêmes états que l'Input, portés par la bordure. Les deux champs sont indiscernables au repos.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'query'
  }
}`,...y.parameters?.docs?.source},description:{story:`Avec icônes : l'icône dit le type de la valeur, elle ne décore pas.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v, setV] = useState<string[]>(['query', 'list']);
    return <Select label="Segment types" multiple allowClear options={TYPES} value={v} onChange={next => setV(next)} width={420} />;
  }
}`,...b.parameters?.docs?.source},description:{story:`Sélection multiple : les valeurs choisies deviennent des tags retirables.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Datamart',
    showSearch: true,
    placeholder: 'Rechercher un datamart',
    options: Array.from({
      length: 18
    }, (_, i) => ({
      value: \`dm\${i}\`,
      label: \`Datamart \${i + 1}\`
    }))
  }
}`,...x.parameters?.docs?.source},description:{story:`Avec recherche : au-delà d'une dizaine d'options, faire défiler ne suffit plus.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: scale.space16
  }}>
      <Input label="Segment name" placeholder="ex. Newsletter subscribers" width={320} required />
      <Select label="Segment type" placeholder="Sélectionner un type" options={TYPES} width={320} required />
      <Select label="Datamart" placeholder="Sélectionner un datamart" options={[{
      value: 'p',
      label: 'mediarithmics - product'
    }]} width={320} />
    </div>
}`,...S.parameters?.docs?.source},description:{story:`Aligné sur un Input : même hauteur, même largeur, même position de label.`,...S.parameters?.docs?.description}}},C=[`BacASable`,`Etats`,`AvecIcones`,`Multiple`,`AvecRecherche`,`DansUnFormulaire`]}));w();export{y as AvecIcones,x as AvecRecherche,_ as BacASable,S as DansUnFormulaire,v as Etats,b as Multiple,C as __namedExportsOrder,g as default,w as n,f as t};