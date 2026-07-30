import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{a as r,c as i,d as a,gt as o,o as s,r as c,s as l,t as u,x as d,y as f}from"./iframe-BvD6eUld.js";import{n as p,t as m}from"./Select-D8spPYFa.js";function h({checked:e,onChange:t,label:n,description:i,disabled:o,loading:c}){let u=(0,g.useId)(),d=i?`${u}-description`:void 0;return(0,_.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:r.space12},children:[(0,_.jsx)(a,{id:u,checked:e,onChange:t,disabled:o,loading:c,"aria-describedby":d,style:{marginTop:1,flex:`0 0 auto`}}),(0,_.jsxs)(`label`,{htmlFor:u,style:{display:`flex`,flexDirection:`column`,gap:2,cursor:o?`not-allowed`:`pointer`},children:[(0,_.jsx)(`span`,{style:{...l.body,color:o?s.textLightest:s.textNormal},children:n}),i&&(0,_.jsx)(`span`,{id:d,style:{...l.caption,color:s.textLighter},children:i})]})]})}var g,_,v=t((()=>{g=n(o(),1),i(),c(),_=u(),h.__docgenInfo={description:`Switch (Figma 14:67) — catégorie ENVELOPPE.
Ant Design rend l'interrupteur (piste 44×22, knob 18) ; le DS ajoute le libellé et
la description, que la production gère aujourd'hui hors du composant.

Un switch a un EFFET IMMÉDIAT : il n'attend pas de bouton « Enregistrer ». Si le
choix doit être soumis avec le reste d'un formulaire, c'est une Checkbox.`,methods:[],displayName:`Switch`,props:{checked:{required:!0,tsType:{name:`boolean`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},label:{required:!0,tsType:{name:`string`},description:`Décrit l'état ACTIVÉ et ne se retourne pas : « Recevoir les alertes », jamais
« Ne pas recevoir les alertes ». Obligatoire — un interrupteur nu n'a pas de nom.`},description:{required:!1,tsType:{name:`string`},description:`Précision sous le libellé : conséquence, portée, délai d'application.`},disabled:{required:!1,tsType:{name:`boolean`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``}}}})),y=e({GroupeDeCheckbox:()=>T,GroupeDeRadio:()=>E,LeBonControle:()=>O,LesTrois:()=>w,SwitchAvecDescription:()=>D,__namedExportsOrder:()=>k,default:()=>S}),b,x,S,C,w,T,E,D,O,k,A=t((()=>{b=n(o(),1),i(),v(),p(),c(),x=u(),S={title:`Composants/Choix (Checkbox, Radio, Switch)`,parameters:{layout:`padded`},decorators:[e=>(0,x.jsx)(`div`,{style:{background:s.bgContainer,padding:r.space24,borderRadius:r.radiusCard},children:(0,x.jsx)(e,{})})]},C=({label:e,children:t})=>(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:r.space8},children:[(0,x.jsx)(`span`,{style:{...l.captionMedium,letterSpacing:r.trackingCaps,textTransform:`uppercase`,color:s.textLighter},children:e}),t]}),w={render:()=>(0,x.jsxs)(`div`,{style:{display:`flex`,gap:r.space35,alignItems:`flex-start`,flexWrap:`wrap`},children:[(0,x.jsx)(C,{label:`Checkbox — choix multiple`,children:(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:r.space8},children:[(0,x.jsx)(f,{children:`Non cochée`}),(0,x.jsx)(f,{defaultChecked:!0,children:`Cochée`}),(0,x.jsx)(f,{indeterminate:!0,children:`Indéterminée`}),(0,x.jsx)(f,{disabled:!0,children:`Désactivée`})]})}),(0,x.jsx)(C,{label:`Radio — choix unique`,children:(0,x.jsxs)(d.Group,{defaultValue:`b`,style:{display:`flex`,flexDirection:`column`,gap:r.space8},children:[(0,x.jsx)(d,{value:`a`,children:`Non sélectionné`}),(0,x.jsx)(d,{value:`b`,children:`Sélectionné`}),(0,x.jsx)(d,{value:`c`,disabled:!0,children:`Désactivé`})]})}),(0,x.jsx)(C,{label:`Switch — effet immédiat`,children:(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:r.space12},children:[(0,x.jsx)(h,{checked:!1,onChange:()=>{},label:`Désactivé`}),(0,x.jsx)(h,{checked:!0,onChange:()=>{},label:`Activé`}),(0,x.jsx)(h,{checked:!1,onChange:()=>{},label:`Non modifiable`,disabled:!0})]})})]})},T={render:()=>{let e=[`User query`,`User list`,`User pixel`,`User lookalike`],[t,n]=(0,b.useState)([`User query`]),i=t.length===e.length;return(0,x.jsxs)(`fieldset`,{style:{border:0,padding:0,margin:0},children:[(0,x.jsx)(`legend`,{style:{...l.bodyMedium,color:s.textDarker,marginBottom:r.space8},children:`Segment types`}),(0,x.jsx)(f,{indeterminate:t.length>0&&!i,checked:i,onChange:t=>n(t.target.checked?e:[]),style:{marginBottom:r.space8},children:`Tout sélectionner`}),(0,x.jsx)(f.Group,{value:t,onChange:e=>n(e),options:e,style:{display:`flex`,flexDirection:`column`,gap:r.space8,paddingInlineStart:r.space24}})]})}},E={render:()=>{let[e,t]=(0,b.useState)(`persisted`);return(0,x.jsxs)(`fieldset`,{style:{border:0,padding:0,margin:0},children:[(0,x.jsx)(`legend`,{style:{...l.bodyMedium,color:s.textDarker,marginBottom:r.space8},children:`Persistance`}),(0,x.jsxs)(d.Group,{value:e,onChange:e=>t(e.target.value),style:{display:`flex`,flexDirection:`column`,gap:r.space8},children:[(0,x.jsx)(d,{value:`persisted`,children:`Persisted`}),(0,x.jsx)(d,{value:`not-persisted`,children:`Not persisted`})]})]})}},D={render:()=>{let[e,t]=(0,b.useState)(!0),[n,i]=(0,b.useState)(!1);return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:r.space16,maxWidth:420},children:[(0,x.jsx)(h,{checked:e,onChange:t,label:`Synchroniser avec le datamart`,description:`La synchronisation démarre immédiatement et se répète toutes les heures.`}),(0,x.jsx)(h,{checked:n,onChange:i,label:`Recevoir les alertes de chute de volume`,description:`Un email par jour au maximum.`})]})}},O={render:()=>(0,x.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:r.space24},children:[(0,x.jsx)(`div`,{style:{borderLeft:`3px solid ${s.success}`,paddingLeft:r.space12},children:(0,x.jsx)(C,{label:`À faire — 2 options exclusives`,children:(0,x.jsxs)(d.Group,{defaultValue:`p`,style:{display:`flex`,flexDirection:`column`,gap:r.space8},children:[(0,x.jsx)(d,{value:`p`,children:`Persisted`}),(0,x.jsx)(d,{value:`n`,children:`Not persisted`})]})})}),(0,x.jsx)(`div`,{style:{borderLeft:`3px solid ${s.error}`,paddingLeft:r.space12},children:(0,x.jsx)(C,{label:`À éviter — un Select pour 2 options`,children:(0,x.jsx)(m,{options:[{value:`p`,label:`Persisted`},{value:`n`,label:`Not persisted`}],defaultValue:`p`,width:200})})}),(0,x.jsx)(`div`,{style:{borderLeft:`3px solid ${s.error}`,paddingLeft:r.space12},children:(0,x.jsx)(C,{label:`À éviter — un Switch dans un formulaire`,children:(0,x.jsx)(h,{checked:!0,onChange:()=>{},label:`Persisted`})})})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: scale.space35,
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }}>
      <Legend label="Checkbox — choix multiple">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: scale.space8
      }}>
          <Checkbox>Non cochée</Checkbox>
          <Checkbox defaultChecked>Cochée</Checkbox>
          <Checkbox indeterminate>Indéterminée</Checkbox>
          <Checkbox disabled>Désactivée</Checkbox>
        </div>
      </Legend>
      <Legend label="Radio — choix unique">
        <Radio.Group defaultValue="b" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: scale.space8
      }}>
          <Radio value="a">Non sélectionné</Radio>
          <Radio value="b">Sélectionné</Radio>
          <Radio value="c" disabled>
            Désactivé
          </Radio>
        </Radio.Group>
      </Legend>
      <Legend label="Switch — effet immédiat">
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: scale.space12
      }}>
          <Switch checked={false} onChange={() => {}} label="Désactivé" />
          <Switch checked onChange={() => {}} label="Activé" />
          <Switch checked={false} onChange={() => {}} label="Non modifiable" disabled />
        </div>
      </Legend>
    </div>
}`,...w.parameters?.docs?.source},description:{story:`Les trois contrôles côte à côte, avec leurs états.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ALL = ['User query', 'User list', 'User pixel', 'User lookalike'];
    const [checked, setChecked] = useState<string[]>(['User query']);
    const allChecked = checked.length === ALL.length;
    return <fieldset style={{
      border: 0,
      padding: 0,
      margin: 0
    }}>
        <legend style={{
        ...typography.bodyMedium,
        color: semantic.textDarker,
        marginBottom: scale.space8
      }}>
          Segment types
        </legend>
        <Checkbox indeterminate={checked.length > 0 && !allChecked} checked={allChecked} onChange={e => setChecked(e.target.checked ? ALL : [])} style={{
        marginBottom: scale.space8
      }}>
          Tout sélectionner
        </Checkbox>
        <Checkbox.Group value={checked} onChange={v => setChecked(v as string[])} options={ALL} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: scale.space8,
        paddingInlineStart: scale.space24
      }} />
      </fieldset>;
  }
}`,...T.parameters?.docs?.source},description:{story:`Checkbox : groupe nommé, alignement vertical, libellé cliquable.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('persisted');
    return <fieldset style={{
      border: 0,
      padding: 0,
      margin: 0
    }}>
        <legend style={{
        ...typography.bodyMedium,
        color: semantic.textDarker,
        marginBottom: scale.space8
      }}>
          Persistance
        </legend>
        <Radio.Group value={value} onChange={e => setValue(e.target.value)} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: scale.space8
      }}>
          <Radio value="persisted">Persisted</Radio>
          <Radio value="not-persisted">Not persisted</Radio>
        </Radio.Group>
      </fieldset>;
  }
}`,...E.parameters?.docs?.source},description:{story:`Radio : deux à cinq options exclusives, avec un défaut sensé présélectionné.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [on, setOn] = useState(true);
    const [alerts, setAlerts] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: scale.space16,
      maxWidth: 420
    }}>
        <Switch checked={on} onChange={setOn} label="Synchroniser avec le datamart" description="La synchronisation démarre immédiatement et se répète toutes les heures." />
        <Switch checked={alerts} onChange={setAlerts} label="Recevoir les alertes de chute de volume" description="Un email par jour au maximum." />
      </div>;
  }
}`,...D.parameters?.docs?.source},description:{story:`Switch : le libellé décrit l'état activé et ne se retourne pas.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: scale.space24
  }}>
      <div style={{
      borderLeft: \`3px solid \${semantic.success}\`,
      paddingLeft: scale.space12
    }}>
        <Legend label="À faire — 2 options exclusives">
          <Radio.Group defaultValue="p" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: scale.space8
        }}>
            <Radio value="p">Persisted</Radio>
            <Radio value="n">Not persisted</Radio>
          </Radio.Group>
        </Legend>
      </div>
      <div style={{
      borderLeft: \`3px solid \${semantic.error}\`,
      paddingLeft: scale.space12
    }}>
        <Legend label="À éviter — un Select pour 2 options">
          <Select options={[{
          value: 'p',
          label: 'Persisted'
        }, {
          value: 'n',
          label: 'Not persisted'
        }]} defaultValue="p" width={200} />
        </Legend>
      </div>
      <div style={{
      borderLeft: \`3px solid \${semantic.error}\`,
      paddingLeft: scale.space12
    }}>
        <Legend label="À éviter — un Switch dans un formulaire">
          <Switch checked onChange={() => {}} label="Persisted" />
        </Legend>
      </div>
    </div>
}`,...O.parameters?.docs?.source},description:{story:`Le même choix, rendu par les trois contrôles. Un seul est correct.`,...O.parameters?.docs?.description}}},k=[`LesTrois`,`GroupeDeCheckbox`,`GroupeDeRadio`,`SwitchAvecDescription`,`LeBonControle`]}));A();export{T as GroupeDeCheckbox,E as GroupeDeRadio,O as LeBonControle,w as LesTrois,D as SwitchAvecDescription,k as __namedExportsOrder,S as default,A as n,y as t};