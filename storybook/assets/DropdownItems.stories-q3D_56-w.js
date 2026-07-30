import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{a as r,gt as i,o as a,r as o,t as s}from"./iframe-BvD6eUld.js";import{n as c,t as l}from"./Tag-Bwdv1cnz.js";import{n as u,t as d}from"./DropdownPanel-BhYUdyL0.js";import{a as f,c as p,i as m,n as h,o as g,r as _,s as v,t as y}from"./DropdownItems-DRc4HP8i.js";var b=e({Briques:()=>T,CheckboxItem:()=>D,Dont:()=>j,Footer:()=>A,LabelItem:()=>k,NavItem:()=>E,OptionItem:()=>O,__namedExportsOrder:()=>M,default:()=>C}),x,S,C,w,T,E,D,O,k,A,j,M,N=t((()=>{x=n(i(),1),p(),u(),c(),o(),S=s(),C={title:`Composants/DropdownItems`,parameters:{layout:`padded`},decorators:[e=>(0,S.jsx)(`div`,{style:{background:a.bgWindow,padding:r.space24},children:(0,S.jsx)(e,{})})]},w=({children:e,label:t})=>(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:r.space8},children:[(0,S.jsx)(`span`,{style:{fontSize:10,letterSpacing:r.trackingCaps,textTransform:`uppercase`,color:a.textLighter},children:t}),(0,S.jsx)(d,{width:260,children:e})]}),T={render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,gap:r.space24,alignItems:`flex-start`,flexWrap:`wrap`},children:[(0,S.jsx)(w,{label:`Nav Item`,children:(0,S.jsxs)(m,{children:[(0,S.jsx)(g,{icon:`tag`,label:`Segment type`,onActivate:()=>{}}),(0,S.jsx)(g,{icon:`cluster`,label:`Datamart`,count:2,active:!0,onActivate:()=>{}})]})}),(0,S.jsx)(w,{label:`Checkbox Item`,children:(0,S.jsxs)(m,{children:[(0,S.jsx)(y,{label:`Automation`,icon:`automation`,checked:!1,onToggle:()=>{}}),(0,S.jsx)(y,{label:`User query`,icon:`user-query`,checked:!0,onToggle:()=>{}})]})}),(0,S.jsx)(w,{label:`Option Item`,children:(0,S.jsxs)(m,{children:[(0,S.jsx)(v,{label:`Persisted`,selected:!1,onSelect:()=>{}}),(0,S.jsx)(v,{label:`Not persisted`,selected:!0,onSelect:()=>{}})]})}),(0,S.jsx)(w,{label:`Label Item`,children:(0,S.jsxs)(m,{children:[(0,S.jsx)(f,{label:`Test1`}),(0,S.jsx)(f,{label:`e-commerce`})]})}),(0,S.jsx)(w,{label:`Footer`,children:(0,S.jsx)(_,{label:`Clear all filters`,onClick:()=>{}})})]})},E={render:()=>(0,S.jsx)(d,{width:240,children:(0,S.jsxs)(m,{children:[(0,S.jsx)(g,{icon:`tag`,label:`Segment type`,onActivate:()=>{}}),(0,S.jsx)(g,{icon:`cluster`,label:`Datamart`,active:!0,onActivate:()=>{}}),(0,S.jsx)(g,{icon:`calendar`,label:`Creation date`,count:3,active:!0,onActivate:()=>{}})]})})},D={render:()=>{let[e,t]=(0,x.useState)([`User query`]);return(0,S.jsxs)(d,{width:270,children:[(0,S.jsx)(m,{children:[{label:`User query`,icon:`user-query`},{label:`User list`,icon:`team`},{label:`User pixel`,icon:`user-pixel`},{label:`User lookalike`,icon:`user-lookalike`}].map(n=>(0,S.jsx)(y,{label:n.label,icon:n.icon,checked:e.includes(n.label),onToggle:()=>t(e=>e.includes(n.label)?e.filter(e=>e!==n.label):[...e,n.label])},n.label))}),(0,S.jsx)(_,{label:`Clear segment type`,disabled:!e.length,onClick:()=>t([])})]})}},O={render:()=>{let[e,t]=(0,x.useState)(`Today`);return(0,S.jsx)(d,{width:220,children:(0,S.jsx)(m,{children:[`Today`,`Yesterday`,`Last 7 days`,`Last 30 days`].map(n=>(0,S.jsx)(v,{label:n,selected:e===n,onSelect:()=>t(n)},n))})})}},k={render:()=>{let[e,t]=(0,x.useState)([`test_max_260526`]);return(0,S.jsxs)(d,{width:320,children:[e.length>0&&(0,S.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:r.space8,padding:r.space16},children:e.map(e=>(0,S.jsx)(l,{closable:!0,onClose:()=>t(t=>t.filter(t=>t!==e)),children:e},e))}),(0,S.jsx)(h,{inset:r.space16}),(0,S.jsx)(m,{children:[`test_max_260526`,`test_max_260526_2`,`Test2`,`e-commerce`].filter(t=>!e.includes(t)).map(e=>(0,S.jsx)(f,{label:e,onSelect:()=>t(t=>[...t,e])},e))}),(0,S.jsx)(_,{label:`Clear labels`,disabled:!e.length,onClick:()=>t([])})]})}},A={render:()=>(0,S.jsxs)(`div`,{style:{display:`flex`,gap:r.space24,alignItems:`flex-start`},children:[(0,S.jsx)(w,{label:`Clear (taille L)`,children:(0,S.jsx)(_,{label:`Clear all filters`,onClick:()=>{}})}),(0,S.jsx)(w,{label:`Clear désactivé`,children:(0,S.jsx)(_,{label:`Clear all filters`,disabled:!0,onClick:()=>{}})}),(0,S.jsx)(w,{label:`Reset + OK (taille M)`,children:(0,S.jsx)(_,{label:`Reset`,onClick:()=>{},onOk:()=>{}})})]})},j={render:()=>(0,S.jsxs)(`div`,{style:{borderLeft:`3px solid ${a.error}`,paddingLeft:r.space12},children:[(0,S.jsx)(d,{width:260,children:(0,S.jsxs)(m,{children:[(0,S.jsx)(y,{label:`User query`,checked:!0,onToggle:()=>{}}),(0,S.jsx)(v,{label:`Persisted`,selected:!0,onSelect:()=>{}}),(0,S.jsx)(y,{label:`User list`,checked:!1,onToggle:()=>{}})]})}),(0,S.jsx)(`p`,{style:{color:a.textNormal,marginTop:r.space8,maxWidth:420},children:`Case à cocher et sélection unique dans la même liste : l'utilisateur ne peut pas prévoir si cliquer ajoute une valeur ou remplace la précédente.`})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: scale.space24,
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  }}>
      <Legend label="Nav Item">
        <DropdownGroup>
          <DropdownNavItem icon="tag" label="Segment type" onActivate={() => {}} />
          <DropdownNavItem icon="cluster" label="Datamart" count={2} active onActivate={() => {}} />
        </DropdownGroup>
      </Legend>
      <Legend label="Checkbox Item">
        <DropdownGroup>
          <DropdownCheckboxItem label="Automation" icon="automation" checked={false} onToggle={() => {}} />
          <DropdownCheckboxItem label="User query" icon="user-query" checked onToggle={() => {}} />
        </DropdownGroup>
      </Legend>
      <Legend label="Option Item">
        <DropdownGroup>
          <DropdownOptionItem label="Persisted" selected={false} onSelect={() => {}} />
          <DropdownOptionItem label="Not persisted" selected onSelect={() => {}} />
        </DropdownGroup>
      </Legend>
      <Legend label="Label Item">
        <DropdownGroup>
          <DropdownLabelItem label="Test1" />
          <DropdownLabelItem label="e-commerce" />
        </DropdownGroup>
      </Legend>
      <Legend label="Footer">
        <DropdownFooter label="Clear all filters" onClick={() => {}} />
      </Legend>
    </div>
}`,...T.parameters?.docs?.source},description:{story:`Les cinq briques, avec leurs états.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownPanel width={240}>
      <DropdownGroup>
        <DropdownNavItem icon="tag" label="Segment type" onActivate={() => {}} />
        <DropdownNavItem icon="cluster" label="Datamart" active onActivate={() => {}} />
        <DropdownNavItem icon="calendar" label="Creation date" count={3} active onActivate={() => {}} />
      </DropdownGroup>
    </DropdownPanel>
}`,...E.parameters?.docs?.source},description:{story:`Nav Item : Default, Active, et Active avec compteur de valeurs cochées.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState<string[]>(['User query']);
    const VALUES = [{
      label: 'User query',
      icon: 'user-query'
    }, {
      label: 'User list',
      icon: 'team'
    }, {
      label: 'User pixel',
      icon: 'user-pixel'
    }, {
      label: 'User lookalike',
      icon: 'user-lookalike'
    }];
    return <DropdownPanel width={270}>
        <DropdownGroup>
          {VALUES.map(v => <DropdownCheckboxItem key={v.label} label={v.label} icon={v.icon} checked={checked.includes(v.label)} onToggle={() => setChecked(c => c.includes(v.label) ? c.filter(x => x !== v.label) : [...c, v.label])} />)}
        </DropdownGroup>
        <DropdownFooter label="Clear segment type" disabled={!checked.length} onClick={() => setChecked([])} />
      </DropdownPanel>;
  }
}`,...D.parameters?.docs?.source},description:{story:`Checkbox Item : multi-sélection, l'icône dit le type de la valeur.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Today');
    return <DropdownPanel width={220}>
        <DropdownGroup>
          {['Today', 'Yesterday', 'Last 7 days', 'Last 30 days'].map(v => <DropdownOptionItem key={v} label={v} selected={value === v} onSelect={() => setValue(v)} />)}
        </DropdownGroup>
      </DropdownPanel>;
  }
}`,...O.parameters?.docs?.source},description:{story:`Option Item : sélection unique. Choisir une valeur désélectionne la précédente.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>(['test_max_260526']);
    const LABELS = ['test_max_260526', 'test_max_260526_2', 'Test2', 'e-commerce'];
    return <DropdownPanel width={320}>
        {selected.length > 0 && <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: scale.space8,
        padding: scale.space16
      }}>
            {selected.map(l => <Tag key={l} closable onClose={() => setSelected(s => s.filter(x => x !== l))}>
                {l}
              </Tag>)}
          </div>}
        <DropdownDivider inset={scale.space16} />
        <DropdownGroup>
          {LABELS.filter(l => !selected.includes(l)).map(l => <DropdownLabelItem key={l} label={l} onSelect={() => setSelected(s => [...s, l])} />)}
        </DropdownGroup>
        <DropdownFooter label="Clear labels" disabled={!selected.length} onClick={() => setSelected([])} />
      </DropdownPanel>;
  }
}`,...k.parameters?.docs?.source},description:{story:`Label Item : la liste des labels, avec les valeurs choisies en chips fermables au-dessus.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: scale.space24,
    alignItems: 'flex-start'
  }}>
      <Legend label="Clear (taille L)">
        <DropdownFooter label="Clear all filters" onClick={() => {}} />
      </Legend>
      <Legend label="Clear désactivé">
        <DropdownFooter label="Clear all filters" disabled onClick={() => {}} />
      </Legend>
      <Legend label="Reset + OK (taille M)">
        <DropdownFooter label="Reset" onClick={() => {}} onOk={() => {}} />
      </Legend>
    </div>
}`,...A.parameters?.docs?.source},description:{story:`Footer : deux compositions. « Clear » centré taille L, « Reset + OK » réparti taille M.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    borderLeft: \`3px solid \${semantic.error}\`,
    paddingLeft: scale.space12
  }}>
      <DropdownPanel width={260}>
        <DropdownGroup>
          <DropdownCheckboxItem label="User query" checked onToggle={() => {}} />
          <DropdownOptionItem label="Persisted" selected onSelect={() => {}} />
          <DropdownCheckboxItem label="User list" checked={false} onToggle={() => {}} />
        </DropdownGroup>
      </DropdownPanel>
      <p style={{
      color: semantic.textNormal,
      marginTop: scale.space8,
      maxWidth: 420
    }}>
        Case à cocher et sélection unique dans la même liste : l'utilisateur ne peut pas prévoir si
        cliquer ajoute une valeur ou remplace la précédente.
      </p>
    </div>
}`,...j.parameters?.docs?.source},description:{story:`À éviter : mêler multi-sélection et sélection unique dans un même groupe.`,...j.parameters?.docs?.description}}},M=[`Briques`,`NavItem`,`CheckboxItem`,`OptionItem`,`LabelItem`,`Footer`,`Dont`]}));N();export{T as Briques,D as CheckboxItem,j as Dont,A as Footer,k as LabelItem,E as NavItem,O as OptionItem,M as __namedExportsOrder,C as default,N as n,b as t};