import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{a as r,gt as i,o as a,r as o,t as s}from"./iframe-BvD6eUld.js";import{n as c,t as l}from"./Input-vWIz7njE.js";var u=e({AvecAide:()=>g,BacASable:()=>m,Dont:()=>b,Erreur:()=>_,Etats:()=>h,Obligatoire:()=>v,Recherche:()=>y,__namedExportsOrder:()=>x,default:()=>p}),d,f,p,m,h,g,_,v,y,b,x,S=t((()=>{d=n(i(),1),c(),o(),f=s(),p={title:`Composants/Input`,component:l,argTypes:{label:{control:`text`,description:`Libellé visible au-dessus. Obligatoire, sauf pattern de recherche.`},placeholder:{control:`text`,description:`Illustre le format attendu, jamais une consigne.`},message:{control:`text`,description:`Aide sous le champ. Remplacée par le message d’erreur en état error.`},state:{control:`inline-radio`,options:[`default`,`error`,`disabled`]},required:{control:`boolean`,description:"Astérisque + attribut `required` sur le champ."},width:{control:`number`,description:`Identique dans tout un formulaire, 600 au maximum.`},leftIcon:{control:`text`,description:`Réservée aux patterns de recherche (prefix AntD).`},rightIcon:{control:`text`,description:`Cohérente avec la donnée saisie. Jamais décorative.`},type:{control:`inline-radio`,options:[`text`,`search`,`email`,`url`,`password`]},onChange:{control:!1}},args:{label:`Segment name`,placeholder:`ex. Newsletter subscribers`,width:320},decorators:[e=>(0,f.jsx)(`div`,{style:{background:a.bgContainer,padding:r.space24,borderRadius:r.radiusCard},children:(0,f.jsx)(e,{})})]},m={},h={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:r.space16},children:[(0,f.jsx)(l,{label:`Default`,placeholder:`ex. Newsletter subscribers`,width:320}),(0,f.jsx)(l,{label:`Rempli`,defaultValue:`Newsletter subscribers`,width:320}),(0,f.jsx)(l,{label:`Erreur`,defaultValue:`Newsletter`,state:`error`,message:`Ce nom est déjà utilisé.`,width:320}),(0,f.jsx)(l,{label:`Désactivé`,defaultValue:`Newsletter subscribers`,state:`disabled`,width:320})]})},g={args:{label:`Technical name`,message:`Utilisé dans les exports. Modifiable une seule fois.`,width:320}},_={args:{label:`Email`,defaultValue:`nguy@`,state:`error`,message:`Adresse incomplète : il manque le domaine.`,width:320}},v={args:{label:`Segment name`,required:!0,placeholder:`ex. Newsletter subscribers`,width:320}},y={render:()=>{let[e,t]=(0,d.useState)(``);return(0,f.jsx)(l,{type:`search`,placeholder:`Search segments`,leftIcon:`magnifier`,value:e,onChange:t,width:320})}},b={render:()=>(0,f.jsxs)(`div`,{style:{borderLeft:`3px solid ${a.error}`,paddingLeft:r.space12},children:[(0,f.jsx)(l,{placeholder:`Nom du segment`,width:320}),(0,f.jsx)(`p`,{style:{color:a.textNormal,marginTop:r.space12,maxWidth:420},children:`Sans label, l’utilisateur qui a commencé à taper ne peut plus vérifier ce qu’on lui demande, et le lecteur d’écran n’annonce aucun nom de champ.`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: scale.space16
  }}>
      <Input label="Default" placeholder="ex. Newsletter subscribers" width={320} />
      <Input label="Rempli" defaultValue="Newsletter subscribers" width={320} />
      <Input label="Erreur" defaultValue="Newsletter" state="error" message="Ce nom est déjà utilisé." width={320} />
      <Input label="Désactivé" defaultValue="Newsletter subscribers" state="disabled" width={320} />
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Les états passent tous par la bordure. Le fond ne change qu'en Disabled.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Technical name',
    message: 'Utilisé dans les exports. Modifiable une seule fois.',
    width: 320
  }
}`,...g.parameters?.docs?.source},description:{story:`Avec aide : le message est relié au champ par aria-describedby.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    defaultValue: 'nguy@',
    state: 'error',
    message: 'Adresse incomplète : il manque le domaine.',
    width: 320
  }
}`,..._.parameters?.docs?.source},description:{story:`Erreur : la bordure rouge ne suffit jamais, le message est obligatoire.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Segment name',
    required: true,
    placeholder: 'ex. Newsletter subscribers',
    width: 320
  }
}`,...v.parameters?.docs?.source},description:{story:"Obligatoire : astérisque visible et attribut `required` sur le champ.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v, setV] = useState('');
    return <Input type="search" placeholder="Search segments" leftIcon="magnifier" value={v} onChange={setV} width={320} />;
  }
}`,...y.parameters?.docs?.source},description:{story:`Recherche : le seul cas sans label visible. La loupe est à gauche.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    borderLeft: \`3px solid \${semantic.error}\`,
    paddingLeft: scale.space12
  }}>
      <Input placeholder="Nom du segment" width={320} />
      <p style={{
      color: semantic.textNormal,
      marginTop: scale.space12,
      maxWidth: 420
    }}>
        Sans label, l’utilisateur qui a commencé à taper ne peut plus vérifier ce qu’on lui
        demande, et le lecteur d’écran n’annonce aucun nom de champ.
      </p>
    </div>
}`,...b.parameters?.docs?.source},description:{story:`À éviter : le placeholder utilisé comme label. Il disparaît à la saisie.`,...b.parameters?.docs?.description}}},x=[`BacASable`,`Etats`,`AvecAide`,`Erreur`,`Obligatoire`,`Recherche`,`Dont`]}));S();export{g as AvecAide,m as BacASable,b as Dont,_ as Erreur,h as Etats,v as Obligatoire,y as Recherche,x as __namedExportsOrder,p as default,S as n,u as t};