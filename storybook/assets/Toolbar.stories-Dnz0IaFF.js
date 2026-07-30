import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{a as r,c as i,gt as a,h as o,o as s,r as c,t as l,w as u}from"./iframe-BvD6eUld.js";import{n as d,t as f}from"./Icon-Mm64d0bh.js";import{n as p,t as m}from"./CountBadge-61_Dwpd_.js";function h({search:e,actions:t}){return(0,_.jsxs)(`div`,{role:`toolbar`,style:{display:`flex`,alignItems:`center`,justifyContent:e?`space-between`:`flex-end`,gap:r.space12},children:[e,t&&(0,_.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:r.space12},children:t})]})}function g({value:e,onChange:t,placeholder:n=`Search`,width:r=400}){return(0,_.jsx)(o,{type:`search`,"aria-label":n,placeholder:n,suffix:(0,_.jsx)(f,{name:`magnifier`,size:14,color:s.textLighter}),value:e,onChange:e=>t(e.target.value),style:{width:r},allowClear:!0})}var _,v=t((()=>{i(),d(),c(),_=l(),h.__docgenInfo={description:`Table / Toolbar (Figma 21:65) — barre d'outils d'un tableau.
Recherche à gauche, actions à droite, ordre stable d'un écran à l'autre.

Ce qu'on y met : ce qui agit sur LE TABLEAU (recherche, filtres, Edit view,
actions de masse). Les actions de page (New …, Export, Edit) vont dans
l'ActionBar. Test : si l'action garde du sens quand le tableau est vide,
elle est de page.`,methods:[],displayName:`Toolbar`,props:{search:{required:!1,tsType:{name:`ReactNode`},description:``},actions:{required:!1,tsType:{name:`ReactNode`},description:``}}},g.__docgenInfo={description:`Champ de recherche de la Toolbar : le seul Input du DS sans label visible,
parce que la loupe et le placeholder suffisent à en dire la fonction.`,methods:[],displayName:`ToolbarSearch`,props:{value:{required:!0,tsType:{name:`string`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Search'`,computed:!1}},width:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`400`,computed:!1}}}}})),y=e({ActionsSeules:()=>D,Dont:()=>O,RechercheSeule:()=>E,Standard:()=>T,__namedExportsOrder:()=>k,default:()=>w});function b({placeholder:e=`Search segments`}){let[t,n]=(0,x.useState)(``);return(0,S.jsx)(g,{value:t,onChange:n,placeholder:e})}var x,S,C,w,T,E,D,O,k,A=t((()=>{x=n(a(),1),i(),v(),d(),p(),c(),S=l(),C=({children:e})=>(0,S.jsx)(`div`,{style:{background:s.bgContainer,borderRadius:r.radiusCard,padding:r.space20},children:e}),w={title:`Composants/Toolbar`,component:h,argTypes:{search:{control:!1,description:`Champ de recherche, à gauche. Omis = pas de recherche sur ce tableau.`},actions:{control:!1,description:`Actions sur le tableau, à droite. Jamais les actions de page.`}},args:{search:void 0,actions:void 0},decorators:[e=>(0,S.jsx)(`div`,{style:{background:s.bgWindow,padding:r.space24},children:(0,S.jsx)(C,{children:(0,S.jsx)(e,{})})})]},T={render:()=>(0,S.jsx)(h,{search:(0,S.jsx)(b,{}),actions:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(u,{icon:(0,S.jsx)(f,{name:`filter`,size:14}),children:[`Filters `,(0,S.jsx)(m,{count:2})]}),(0,S.jsx)(u,{icon:(0,S.jsx)(f,{name:`view`,size:14}),children:`Edit view`})]})})},E={render:()=>(0,S.jsx)(h,{search:(0,S.jsx)(b,{placeholder:`Search feeds`})})},D={render:()=>(0,S.jsx)(h,{actions:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u,{icon:(0,S.jsx)(f,{name:`filter`,size:14}),children:`Filters`}),(0,S.jsx)(u,{icon:(0,S.jsx)(f,{name:`view`,size:14}),children:`Edit view`})]})})},O={render:()=>(0,S.jsxs)(`div`,{style:{borderLeft:`3px solid ${s.error}`,paddingLeft:r.space12},children:[(0,S.jsx)(h,{search:(0,S.jsx)(b,{}),actions:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u,{icon:(0,S.jsx)(f,{name:`filter`,size:14}),children:`Filters`}),(0,S.jsx)(u,{icon:(0,S.jsx)(f,{name:`download`,size:14}),children:`Export`}),(0,S.jsx)(u,{type:`primary`,icon:(0,S.jsx)(f,{name:`plus`,size:14}),children:`New segment`})]})}),(0,S.jsx)(`p`,{style:{color:s.textNormal,marginTop:r.space12,maxWidth:640},children:`« Export » et « New segment » gardent leur sens quand le tableau est vide : ce sont des actions de page, leur place est dans l'ActionBar.`})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Toolbar search={<SearchDemo />} actions={<>
          <Button icon={<Icon name="filter" size={14} />}>
            Filters <CountBadge count={2} />
          </Button>
          <Button icon={<Icon name="view" size={14} />}>Edit view</Button>
        </>} />
}`,...T.parameters?.docs?.source},description:{story:`La composition standard d'une liste : recherche, Filters, Edit view.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Toolbar search={<SearchDemo placeholder="Search feeds" />} />
}`,...E.parameters?.docs?.source},description:{story:`Recherche seule : un tableau court, sans dimension à filtrer.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Toolbar actions={<>
          <Button icon={<Icon name="filter" size={14} />}>Filters</Button>
          <Button icon={<Icon name="view" size={14} />}>Edit view</Button>
        </>} />
}`,...D.parameters?.docs?.source},description:{story:`Actions seules : le tableau se lit d'un coup d'œil, la recherche serait du décor.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    borderLeft: \`3px solid \${semantic.error}\`,
    paddingLeft: scale.space12
  }}>
      <Toolbar search={<SearchDemo />} actions={<>
            <Button icon={<Icon name="filter" size={14} />}>Filters</Button>
            <Button icon={<Icon name="download" size={14} />}>Export</Button>
            <Button type="primary" icon={<Icon name="plus" size={14} />}>
              New segment
            </Button>
          </>} />
      <p style={{
      color: semantic.textNormal,
      marginTop: scale.space12,
      maxWidth: 640
    }}>
        « Export » et « New segment » gardent leur sens quand le tableau est vide : ce sont des
        actions de page, leur place est dans l'ActionBar.
      </p>
    </div>
}`,...O.parameters?.docs?.source},description:{story:`À éviter : les actions de page descendues dans la Toolbar.`,...O.parameters?.docs?.description}}},k=[`Standard`,`RechercheSeule`,`ActionsSeules`,`Dont`]}));A();export{D as ActionsSeules,O as Dont,E as RechercheSeule,T as Standard,k as __namedExportsOrder,w as default,A as n,y as t};