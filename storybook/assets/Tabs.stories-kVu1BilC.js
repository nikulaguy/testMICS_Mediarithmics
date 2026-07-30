import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{a as r,gt as i,n as a,o,r as s,t as c}from"./iframe-BvD6eUld.js";import{n as l,t as u}from"./Icon-Mm64d0bh.js";import{n as d,t as f}from"./DropdownPanel-BhYUdyL0.js";import{c as p,i as m,s as h}from"./DropdownItems-DRc4HP8i.js";function g({label:e,badge:t,active:n,onSelect:r,panelId:i}){let[a,s]=(0,y.useState)(!1),c=n?o.primary:a?o.textDarker:o.textNormal;return(0,b.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":n,"aria-controls":i,tabIndex:n?0:-1,onClick:r,onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),style:{display:`inline-flex`,alignItems:`center`,gap:6,height:44,padding:`12px 0 10px`,background:`transparent`,border:0,borderBottom:`2px solid ${n?o.primary:`transparent`}`,color:c,font:`inherit`,fontSize:14,fontWeight:500,lineHeight:`22px`,cursor:`pointer`},children:[e,t!==void 0&&t>0&&(0,b.jsx)(`span`,{style:{minWidth:16,height:16,paddingInline:4,borderRadius:8,background:o.warning,color:o.textOnDark,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,fontSize:10,fontWeight:500,flex:`0 0 auto`},children:t})]})}function _({items:e,active:t,onChange:n,idPrefix:i=`tab`}){let s=(0,y.useRef)(null),c=(0,y.useRef)(new Map),l=(0,y.useRef)(null),[d,p]=(0,y.useState)([]),[_,v]=(0,y.useState)(!1),S=(0,y.useCallback)(()=>{let t=s.current;if(!t||!t.clientWidth)return;let n=t.scrollWidth>t.clientWidth+1,r=t.scrollLeft,i=r+t.clientWidth-(n?x:0),a=[];for(let t of e){let e=c.current.get(t.key);e&&(e.offsetLeft<r-1||e.offsetLeft+e.offsetWidth>i+1)&&a.push(t.key)}p(e=>e.length===a.length&&e.every((e,t)=>e===a[t])?e:a)},[e]);(0,y.useLayoutEffect)(()=>{S();let e=s.current;if(!e)return;let t=new ResizeObserver(S);return t.observe(e),()=>t.disconnect()},[S]);let C=(0,y.useCallback)(e=>{requestAnimationFrame(()=>{let t=s.current,n=c.current.get(e);if(!t||!n||!t.clientWidth)return;let r=n.offsetLeft,i=r+n.offsetWidth,a=t.scrollLeft,o=a+t.clientWidth-x;r<a?t.scrollTo({left:r}):i>o&&t.scrollTo({left:i-t.clientWidth+x})})},[]);(0,y.useEffect)(()=>{C(t)},[t,C]),(0,y.useEffect)(()=>{if(!_)return;let e=e=>{l.current&&!l.current.contains(e.target)&&v(!1)},t=e=>{e.key===`Escape`&&v(!1)};return document.addEventListener(`pointerdown`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`pointerdown`,e),document.removeEventListener(`keydown`,t)}},[_]);let w=r=>{n(e[(e.findIndex(e=>e.key===t)+r+e.length)%e.length].key)};return(0,b.jsxs)(`div`,{style:{position:`relative`,borderBottom:`1px solid ${o.borderInput}`},children:[(0,b.jsx)(`div`,{ref:s,onScroll:S,className:`mics-tabbar-scroller`,style:{overflowX:`auto`,overflowY:`hidden`},children:(0,b.jsxs)(`div`,{role:`tablist`,onKeyDown:e=>{e.key===`ArrowRight`&&(e.preventDefault(),w(1)),e.key===`ArrowLeft`&&(e.preventDefault(),w(-1))},style:{display:`flex`,alignItems:`flex-end`,gap:r.space35,width:`max-content`},children:[e.map(e=>(0,b.jsx)(`span`,{ref:t=>{t?c.current.set(e.key,t):c.current.delete(e.key)},style:{display:`inline-flex`},children:(0,b.jsx)(g,{label:e.label,badge:e.badge,active:e.key===t,onSelect:()=>n(e.key),panelId:`${i}-panel-${e.key}`})},e.key)),d.length>0&&(0,b.jsx)(`span`,{"aria-hidden":!0,style:{width:x,flex:`0 0 auto`}})]})}),d.length>0&&(0,b.jsxs)(`div`,{ref:l,style:{position:`absolute`,right:0,top:0,height:44},children:[(0,b.jsx)(`button`,{type:`button`,"aria-label":`Autres onglets (${d.length})`,"aria-haspopup":`true`,"aria-expanded":_,onClick:()=>v(e=>!e),style:{width:x,height:44,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,border:0,background:o.bgSubtle,boxShadow:a.panel,color:o.textNormal,cursor:`pointer`},children:(0,b.jsx)(u,{name:`dots`,size:16})}),_&&(0,b.jsx)(f,{anchored:!0,align:`right`,width:240,children:(0,b.jsx)(m,{children:e.filter(e=>d.includes(e.key)).map(e=>(0,b.jsx)(h,{label:e.label,selected:e.key===t,onSelect:()=>{n(e.key),v(!1),C(e.key)}},e.key))})})]})]})}function v({tabKey:e,idPrefix:t=`tab`,children:n}){return(0,b.jsx)(`div`,{id:`${t}-panel-${e}`,role:`tabpanel`,tabIndex:0,children:n})}var y,b,x,S=t((()=>{y=n(i(),1),d(),p(),l(),s(),b=c(),x=48,g.__docgenInfo={description:`Tab (Figma 17:61) — un onglet. Libellé Circular Medium 14, hauteur 44,
padding 12 haut / 10 bas, soulignement de 2 px.
Actif = trait et libellé en primary. Défaut = trait transparent, libellé text/normal.
Le survol éclaircit le libellé : sans lui, rien ne dit que la zone est cliquable.`,methods:[],displayName:`Tab`,props:{label:{required:!0,tsType:{name:`string`},description:``},badge:{required:!1,tsType:{name:`number`},description:``},active:{required:!0,tsType:{name:`boolean`},description:``},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},panelId:{required:!1,tsType:{name:`string`},description:``}}},_.__docgenInfo={description:``,methods:[],displayName:`TabBar`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`TabItem`}],raw:`TabItem[]`},description:``},active:{required:!0,tsType:{name:`string`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:``},idPrefix:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'tab'`,computed:!1}}}},v.__docgenInfo={description:`Panneau associé à un onglet. À rendre sous la TabBar, un seul à la fois.`,methods:[],displayName:`TabPanel`,props:{tabKey:{required:!0,tsType:{name:`string`},description:``},idPrefix:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'tab'`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}}}})),C=e({AvecBadge:()=>j,BacASable:()=>k,Debordement:()=>M,Etats:()=>A,OngletsDeDetail:()=>N,__namedExportsOrder:()=>P,default:()=>O});function w({items:e=D}){let[t,n]=(0,T.useState)(e[0].key);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(_,{items:e,active:t,onChange:n,idPrefix:`demo`}),(0,E.jsx)(v,{tabKey:t,idPrefix:`demo`,children:(0,E.jsxs)(`p`,{style:{color:o.textNormal,paddingTop:r.space16},children:[`Contenu de l’onglet « `,e.find(e=>e.key===t)?.label,` ».`]})})]})}var T,E,D,O,k,A,j,M,N,P,F=t((()=>{T=n(i(),1),S(),s(),E=c(),D=[{key:`segments`,label:`Segments`},{key:`usage`,label:`Usage overview`},{key:`alerts`,label:`Alerts`,badge:1}],O={title:`Composants/Tabs`,component:_,argTypes:{items:{control:!1,description:`Onglets : key, label, badge optionnel.`},active:{control:!1,description:`Clé de l’onglet actif. Un seul à la fois.`},onChange:{control:!1},idPrefix:{control:`text`,description:`Préfixe des id, pour relier chaque onglet à son panneau.`}},args:{items:D,active:`segments`,onChange:()=>{},idPrefix:`demo`},decorators:[e=>(0,E.jsx)(`div`,{style:{background:o.bgContainer,padding:r.space24,borderRadius:r.radiusCard},children:(0,E.jsx)(e,{})})]},k={render:()=>(0,E.jsx)(w,{})},A={render:()=>(0,E.jsxs)(`div`,{style:{display:`flex`,gap:r.space35,borderBottom:`1px solid ${o.borderInput}`},children:[(0,E.jsx)(g,{label:`Default`,active:!1,onSelect:()=>{}}),(0,E.jsx)(g,{label:`Actif`,active:!0,onSelect:()=>{}}),(0,E.jsx)(g,{label:`Avec badge`,badge:3,active:!1,onSelect:()=>{}})]})},j={render:()=>(0,E.jsx)(w,{items:[{key:`stats`,label:`Stats`},{key:`alerts`,label:`Alerts`,badge:2},{key:`exports`,label:`Exports`}]})},M={render:()=>(0,E.jsx)(`div`,{style:{maxWidth:520},children:(0,E.jsx)(w,{items:[{key:`stats`,label:`Stats`},{key:`overlap`,label:`Overlap`},{key:`exports`,label:`Exports`},{key:`features`,label:`Features and adoption`},{key:`targeting`,label:`Contextual Targeting`},{key:`timeline`,label:`Timeline`},{key:`alerts`,label:`Alerts`,badge:2},{key:`feeds`,label:`Feeds`},{key:`audit`,label:`Audit log`}]})})},N={render:()=>(0,E.jsx)(w,{items:[{key:`stats`,label:`Stats`},{key:`overlap`,label:`Overlap`},{key:`exports`,label:`Exports`},{key:`features`,label:`Features and adoption`},{key:`targeting`,label:`Contextual Targeting`}]})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Demo />
}`,...k.parameters?.docs?.source},description:{story:`La barre complète, avec son panneau. Les flèches gauche / droite naviguent.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: scale.space35,
    borderBottom: \`1px solid \${semantic.borderInput}\`
  }}>
      <Tab label="Default" active={false} onSelect={() => {}} />
      <Tab label="Actif" active onSelect={() => {}} />
      <Tab label="Avec badge" badge={3} active={false} onSelect={() => {}} />
    </div>
}`,...A.parameters?.docs?.source},description:{story:`Les deux états d’un onglet : Default et Actif. Le survol éclaircit le libellé.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Demo items={[{
    key: 'stats',
    label: 'Stats'
  }, {
    key: 'alerts',
    label: 'Alerts',
    badge: 2
  }, {
    key: 'exports',
    label: 'Exports'
  }]} />
}`,...j.parameters?.docs?.source},description:{story:`Le badge annonce un nombre d’éléments à traiter, pas une décoration.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 520
  }}>
      <Demo items={[{
      key: 'stats',
      label: 'Stats'
    }, {
      key: 'overlap',
      label: 'Overlap'
    }, {
      key: 'exports',
      label: 'Exports'
    }, {
      key: 'features',
      label: 'Features and adoption'
    }, {
      key: 'targeting',
      label: 'Contextual Targeting'
    }, {
      key: 'timeline',
      label: 'Timeline'
    }, {
      key: 'alerts',
      label: 'Alerts',
      badge: 2
    }, {
      key: 'feeds',
      label: 'Feeds'
    }, {
      key: 'audit',
      label: 'Audit log'
    }]} />
    </div>
}`,...M.parameters?.docs?.source},description:{story:`Débordement : la barre défile et le bouton «\xA0…\xA0» liste les onglets hors écran.
Défiler à droite change la liste — ce sont ceux de gauche qui deviennent invisibles.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Demo items={[{
    key: 'stats',
    label: 'Stats'
  }, {
    key: 'overlap',
    label: 'Overlap'
  }, {
    key: 'exports',
    label: 'Exports'
  }, {
    key: 'features',
    label: 'Features and adoption'
  }, {
    key: 'targeting',
    label: 'Contextual Targeting'
  }]} />
}`,...N.parameters?.docs?.source},description:{story:`Onglets de détail d’un segment : cinq sous-vues d’un même objet.`,...N.parameters?.docs?.description}}},P=[`BacASable`,`Etats`,`AvecBadge`,`Debordement`,`OngletsDeDetail`]}));F();export{j as AvecBadge,k as BacASable,M as Debordement,A as Etats,N as OngletsDeDetail,P as __namedExportsOrder,O as default,F as n,C as t};