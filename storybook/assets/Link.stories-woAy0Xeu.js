import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{a as n,o as r,r as i,t as a}from"./iframe-BvD6eUld.js";import{n as o,t as s}from"./Link-C5vjU2c-.js";var c=e({AvecIcones:()=>m,Defaut:()=>d,Desactive:()=>h,SurFondSombre:()=>p,Tailles:()=>f,__namedExportsOrder:()=>g,default:()=>u}),l,u,d,f,p,m,h,g,_=t((()=>{o(),i(),l=a(),u={title:`Composants/Link`,component:s,parameters:{docs:{description:{component:[`**Catégorie : construit.** Ant Design n'a pas d'équivalent : son lien de typographie`,`ne connaît ni les deux tailles, ni le thème sur fond sombre, ni l'état désactivé.`,``,`C'est le SEUL atome de lien du système : niveaux du fil d'ariane, liens de tableau,`,`actions légères. Une action principale reste un Button.`].join(` `)}}},argTypes:{size:{control:`inline-radio`,options:[`L`,`M`]},theme:{control:`inline-radio`,options:[`onLight`,`onDark`]},disabled:{control:`boolean`},children:{control:`text`}},args:{children:`See more`,size:`M`,theme:`onLight`,disabled:!1}},d={},f={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:n.space24,alignItems:`baseline`},children:[(0,l.jsx)(s,{size:`M`,children:`Taille M, 12 px`}),(0,l.jsx)(s,{size:`L`,children:`Taille L, 14 px`})]})},p={render:()=>(0,l.jsxs)(`div`,{style:{background:r.info,padding:n.space20,display:`flex`,gap:n.space24},children:[(0,l.jsx)(s,{theme:`onDark`,children:`Lien normal`}),(0,l.jsx)(s,{theme:`onDark`,disabled:!0,children:`Lien désactivé`})]})},m={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:n.space24},children:[(0,l.jsx)(s,{leftIcon:`download`,children:`Export`}),(0,l.jsx)(s,{rightIcon:`chart-line`,children:`Voir les statistiques`})]})},h={args:{disabled:!0,children:`Action indisponible`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: scale.space24,
    alignItems: 'baseline'
  }}>
      <Link size="M">Taille M, 12 px</Link>
      <Link size="L">Taille L, 14 px</Link>
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Deux tailles : M (12) dans les composants et le corps de texte, L (14) pour un lien isolé.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: semantic.info,
    padding: scale.space20,
    display: 'flex',
    gap: scale.space24
  }}>
      <Link theme="onDark">Lien normal</Link>
      <Link theme="onDark" disabled>
        Lien désactivé
      </Link>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Sur fond sombre : obligatoire dans l'Actionbar d'édition et les surfaces navy.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: scale.space24
  }}>
      <Link leftIcon="download">Export</Link>
      <Link rightIcon="chart-line">Voir les statistiques</Link>
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Avec icônes, calées sur la taille du texte.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Action indisponible'
  }
}`,...h.parameters?.docs?.source},description:{story:`Désactivé : text/lightest, curseur interdit, aria-disabled.`,...h.parameters?.docs?.description}}},g=[`Defaut`,`Tailles`,`SurFondSombre`,`AvecIcones`,`Desactive`]}));_();export{m as AvecIcones,d as Defaut,h as Desactive,p as SurFondSombre,f as Tailles,g as __namedExportsOrder,u as default,_ as n,c as t};