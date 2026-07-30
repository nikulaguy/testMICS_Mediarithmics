import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{a as r,gt as i,o as a,r as o,t as s}from"./iframe-BvD6eUld.js";import{n as c,t as l}from"./Tag-Bwdv1cnz.js";import{n as u,t as d}from"./logo-mediarithmics-CRP0D7Fq.js";var f=e({AvecLogo:()=>x,BacASable:()=>_,ChipsDeFiltre:()=>b,Couleurs:()=>v,Do:()=>S,Dont:()=>C,StatutsEtCategories:()=>y,__namedExportsOrder:()=>w,default:()=>h}),p,m,h,g,_,v,y,b,x,S,C,w,T=t((()=>{p=n(i(),1),c(),d(),o(),m=s(),h={title:`Composants/Tag`,component:l,argTypes:{color:{control:`select`,options:[`default`,`blue`,`green`,`orange`,`purple`,`red`],description:`Rampe de couleur. Porte un sens, jamais décorative.`,table:{defaultValue:{summary:`default`}}},closable:{control:`boolean`,description:`Affiche la croix de retrait.`},children:{control:`text`,description:`Libellé court, 1 à 2 mots, sans ponctuation.`},logo:{control:!1,description:`Logo 16×16 optionnel (prop « Show logo » de la maquette).`},onClose:{control:!1}},args:{children:`Label`,color:`default`,closable:!1},parameters:{docs:{description:{component:`La page de documentation principale est \`Tag.mdx\` : elle reprend la doc Figma
(description, props, règles, do/don't, anatomie, accessibilité, évolutions).
Les stories ci-dessous en sont les illustrations vivantes.`}}}},g=({children:e})=>(0,m.jsx)(`div`,{style:{display:`flex`,gap:r.space8,flexWrap:`wrap`,alignItems:`center`},children:e}),_={},v={render:()=>(0,m.jsxs)(g,{children:[(0,m.jsx)(l,{children:`Default`}),(0,m.jsx)(l,{color:`blue`,children:`Blue`}),(0,m.jsx)(l,{color:`green`,children:`Green`}),(0,m.jsx)(l,{color:`orange`,children:`Orange`}),(0,m.jsx)(l,{color:`purple`,children:`Purple`}),(0,m.jsx)(l,{color:`red`,children:`Red`})]})},y={render:()=>(0,m.jsxs)(g,{children:[(0,m.jsx)(l,{color:`green`,children:`Actif`}),(0,m.jsx)(l,{color:`red`,children:`Erreur`}),(0,m.jsx)(l,{color:`orange`,children:`En attente`}),(0,m.jsx)(l,{children:`Volume Drop Alerts Disabled`})]})},b={render:()=>{let[e,t]=(0,p.useState)([`test_max_260526`,`test_max_260526_2`,`Test2`]);return(0,m.jsxs)(g,{children:[e.map(e=>(0,m.jsx)(l,{closable:!0,onClose:()=>t(t=>t.filter(t=>t!==e)),children:e},e)),e.length===0&&(0,m.jsx)(`span`,{style:{color:a.textLighter},children:`Toutes les chips ont été retirées.`})]})}},x={render:()=>{let e=(0,m.jsx)(`img`,{src:u,alt:``,style:{width:16,objectFit:`contain`}});return(0,m.jsxs)(g,{children:[(0,m.jsx)(l,{closable:!0,logo:e,children:`test_max_260526`}),(0,m.jsx)(l,{closable:!0,logo:e,children:`Test2`})]})}},S={render:()=>(0,m.jsxs)(`div`,{style:{borderLeft:`3px solid ${a.success}`,paddingLeft:r.space12},children:[(0,m.jsxs)(g,{children:[(0,m.jsx)(l,{color:`green`,children:`Actif`}),(0,m.jsx)(l,{color:`red`,children:`Erreur`}),(0,m.jsx)(l,{color:`orange`,children:`En attente`})]}),(0,m.jsx)(`p`,{style:{color:a.textNormal,marginTop:r.space8},children:`Vert = succès, rouge = erreur, orange = en attente. Le même statut garde la même couleur partout.`})]})},C={render:()=>(0,m.jsxs)(`div`,{style:{borderLeft:`3px solid ${a.error}`,paddingLeft:r.space12},children:[(0,m.jsxs)(g,{children:[(0,m.jsx)(l,{color:`purple`,children:`Actif`}),(0,m.jsx)(l,{color:`blue`,children:`Actif`})]}),(0,m.jsx)(`p`,{style:{color:a.textNormal,marginTop:r.space8},children:`Le même statut change de couleur d'un écran à l'autre : l'utilisateur ne peut plus rien en déduire.`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source},description:{story:`Bac à sable : jouer avec les contrôles pour explorer toutes les combinaisons.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
      <Tag>Default</Tag>
      <Tag color="blue">Blue</Tag>
      <Tag color="green">Green</Tag>
      <Tag color="orange">Orange</Tag>
      <Tag color="purple">Purple</Tag>
      <Tag color="red">Red</Tag>
    </Row>
}`,...v.parameters?.docs?.source},description:{story:`Les six rampes du composant.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Row>
      <Tag color="green">Actif</Tag>
      <Tag color="red">Erreur</Tag>
      <Tag color="orange">En attente</Tag>
      <Tag>Volume Drop Alerts Disabled</Tag>
    </Row>
}`,...y.parameters?.docs?.source},description:{story:`Cas d'usage 1 : statuts et catégories, non fermables.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [chips, setChips] = useState(['test_max_260526', 'test_max_260526_2', 'Test2']);
    return <Row>
        {chips.map(c => <Tag key={c} closable onClose={() => setChips(v => v.filter(x => x !== c))}>
            {c}
          </Tag>)}
        {chips.length === 0 && <span style={{
        color: semantic.textLighter
      }}>Toutes les chips ont été retirées.</span>}
      </Row>;
  }
}`,...b.parameters?.docs?.source},description:{story:`Cas d'usage 2 : chips de filtre sélectionnés, fermables (menu Labels). Cliquer la croix retire réellement la chip.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const logo = <img src={logoUrl} alt="" style={{
      width: 16,
      objectFit: 'contain'
    }} />;
    return <Row>
        <Tag closable logo={logo}>
          test_max_260526
        </Tag>
        <Tag closable logo={logo}>
          Test2
        </Tag>
      </Row>;
  }
}`,...x.parameters?.docs?.source},description:{story:`Cas d'usage 3 : avec logo de société.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    borderLeft: \`3px solid \${semantic.success}\`,
    paddingLeft: scale.space12
  }}>
      <Row>
        <Tag color="green">Actif</Tag>
        <Tag color="red">Erreur</Tag>
        <Tag color="orange">En attente</Tag>
      </Row>
      <p style={{
      color: semantic.textNormal,
      marginTop: scale.space8
    }}>
        Vert = succès, rouge = erreur, orange = en attente. Le même statut garde la même couleur partout.
      </p>
    </div>
}`,...S.parameters?.docs?.source},description:{story:`À faire : des couleurs sémantiques stables d'un écran à l'autre.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    borderLeft: \`3px solid \${semantic.error}\`,
    paddingLeft: scale.space12
  }}>
      <Row>
        <Tag color="purple">Actif</Tag>
        <Tag color="blue">Actif</Tag>
      </Row>
      <p style={{
      color: semantic.textNormal,
      marginTop: scale.space8
    }}>
        Le même statut change de couleur d'un écran à l'autre : l'utilisateur ne peut plus rien en déduire.
      </p>
    </div>
}`,...C.parameters?.docs?.source},description:{story:`À éviter : la couleur décorative, qui ne veut plus rien dire.`,...C.parameters?.docs?.description}}},w=[`BacASable`,`Couleurs`,`StatutsEtCategories`,`ChipsDeFiltre`,`AvecLogo`,`Do`,`Dont`]}));T();export{x as AvecLogo,_ as BacASable,b as ChipsDeFiltre,v as Couleurs,S as Do,C as Dont,y as StatutsEtCategories,w as __namedExportsOrder,h as default,T as n,f as t};