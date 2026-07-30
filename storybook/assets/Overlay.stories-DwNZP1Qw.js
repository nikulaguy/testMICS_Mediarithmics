import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{a as r,c as i,gt as a,h as o,i as s,n as c,o as l,r as u,t as d,w as f}from"./iframe-BvD6eUld.js";import{n as p,t as m}from"./Icon-Mm64d0bh.js";function h({title:e,theme:t=`blue`,onClose:n,id:i}){let a=b[t];return(0,y.jsxs)(`div`,{style:{height:52,flex:`0 0 auto`,display:`flex`,alignItems:`center`,gap:r.space12,padding:`0 ${r.space20}px 0 ${r.space24}px`,background:a.bg,color:a.color,borderBottom:a.borderBottom?`1px solid ${a.borderBottom}`:void 0},children:[(0,y.jsx)(`h2`,{id:i,style:{margin:0,flex:1,fontSize:16,lineHeight:`24px`,fontWeight:500,color:`inherit`},children:e}),n&&(0,y.jsx)(`button`,{type:`button`,"aria-label":`Fermer`,onClick:n,style:{width:20,height:20,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,background:`transparent`,border:0,padding:0,color:`inherit`,cursor:`pointer`},children:(0,y.jsx)(m,{name:`close`,size:18})})]})}function g({children:e}){return(0,y.jsx)(`div`,{style:{height:52,flex:`0 0 auto`,display:`flex`,alignItems:`center`,justifyContent:`flex-end`,gap:r.space8,padding:`10px ${r.space16}px`,background:l.bgContainer,borderTop:`1px solid ${l.borderDefault}`},children:e})}function _({open:e,mode:t=`modal`,title:n,headerTheme:i=`blue`,onClose:a,children:o,footer:s,width:u}){let d=(0,v.useRef)(null),f=`overlay-title-${n.replace(/\W+/g,`-`).toLowerCase()}`,p=(0,v.useRef)(a);if(p.current=a,(0,v.useEffect)(()=>{if(!e)return;let t=document.activeElement;d.current?.focus();let n=e=>{e.key===`Escape`&&p.current()};return document.addEventListener(`keydown`,n),()=>{document.removeEventListener(`keydown`,n),t?.focus()}},[e]),!e)return null;let m=t===`drawer`,_=u??(m?520:600);return(0,y.jsx)(`div`,{style:{position:`fixed`,inset:0,zIndex:r.zModal,background:l.bgScrim,display:`flex`,alignItems:m?`stretch`:`center`,justifyContent:m?`flex-end`:`center`},onClick:e=>{e.target===e.currentTarget&&a()},children:(0,y.jsxs)(`div`,{ref:d,role:`dialog`,"aria-modal":`true`,"aria-labelledby":f,tabIndex:-1,style:{width:_,maxWidth:`100%`,maxHeight:m?`100%`:`80vh`,display:`flex`,flexDirection:`column`,background:l.bgContainer,borderRadius:m?0:r.radiusCard,boxShadow:c.overlay,outline:`none`,overflow:`hidden`},children:[(0,y.jsx)(h,{id:f,title:n,theme:i,onClose:a}),(0,y.jsx)(`div`,{style:{flex:1,minHeight:0,overflowY:`auto`,padding:r.space24},children:o}),s&&(0,y.jsx)(g,{children:s})]})})}var v,y,b,x=t((()=>{v=n(a(),1),p(),u(),y=d(),b={blue:{bg:l.primary,color:l.textOnDark},light:{bg:l.bgContainer,color:l.textNormal,borderBottom:l.borderDefault},dark:{bg:l.info,color:l.textOnDark}},s.black43,h.__docgenInfo={description:`Overlay / Header (Figma 190:198) — bandeau d'en-tête de modale et de drawer.
Titre à gauche, croix à droite. Trois thèmes relevés en production :
Blue (création, action forte), Light (édition, consultation), Dark (configuration
technique). Le titre nomme la dialog : c'est lui que pointe l'aria-labelledby.`,methods:[],displayName:`OverlayHeader`,props:{title:{required:!0,tsType:{name:`string`},description:``},theme:{required:!1,tsType:{name:`union`,raw:`'blue' | 'light' | 'dark'`,elements:[{name:`literal`,value:`'blue'`},{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:``,defaultValue:{value:`'blue'`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},id:{required:!1,tsType:{name:`string`},description:``}}},g.__docgenInfo={description:`Overlay / Footer (Figma 202:198) — barre d'actions en pied de modale et de drawer.
Actions alignées à DROITE, le bouton primaire tout à droite, le secondaire à sa
gauche. Jusqu'à trois actions, un seul primaire. L'ordre visuel est le même
partout : c'est ce qui permet de cliquer sans relire.`,methods:[],displayName:`OverlayFooter`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}}},_.__docgenInfo={description:`Overlay / Container (Figma 212:169) — conteneur unique des surfaces superposées.
Il sert à la fois de MODALE et de DRAWER : même structure Header + contenu + Footer,
seuls la forme et la position changent. Header et footer sont fixes, le contenu
scrolle à l'intérieur.

Le choix de la surface n'est pas esthétique : il porte sur le coût de l'interruption
et sur le besoin de contexte. Voir la page de documentation.`,methods:[],displayName:`Overlay`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},mode:{required:!1,tsType:{name:`union`,raw:`'modal' | 'drawer'`,elements:[{name:`literal`,value:`'modal'`},{name:`literal`,value:`'drawer'`}]},description:`Modale = tâche courte qui doit bloquer. Drawer = tâche secondaire qui a besoin du contexte.`,defaultValue:{value:`'modal'`,computed:!1}},title:{required:!0,tsType:{name:`string`},description:``},headerTheme:{required:!1,tsType:{name:`union`,raw:`'blue' | 'light' | 'dark'`,elements:[{name:`literal`,value:`'blue'`},{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:``,defaultValue:{value:`'blue'`,computed:!1}},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},footer:{required:!1,tsType:{name:`ReactNode`},description:`Actions du pied. Omis = variante sans footer (sélecteurs sans validation).`},width:{required:!1,tsType:{name:`number`},description:`Modale : 420–600. Drawer : largeur constante dans un même parcours (520).`}}}})),S=e({Dont:()=>N,Drawer:()=>k,Footer:()=>M,Modale:()=>O,SansFooter:()=>A,ThemesDeHeader:()=>j,__namedExportsOrder:()=>P,default:()=>E});function C({mode:e=`modal`,headerTheme:t=`blue`,withFooter:n=!0,label:i=`Ouvrir`}){let[a,s]=(0,w.useState)(!1);return(0,T.jsxs)(D,{children:[(0,T.jsx)(f,{type:`primary`,onClick:()=>s(!0),children:i}),(0,T.jsx)(`p`,{style:{color:l.textLighter,marginTop:r.space16},children:`Échap ferme, le clic sur le voile aussi. À la fermeture, le focus revient sur le bouton.`}),(0,T.jsx)(_,{open:a,mode:e,headerTheme:t,title:e===`drawer`?`Segment details`:`Create a feed`,onClose:()=>s(!1),footer:n?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(f,{onClick:()=>s(!1),children:`Cancel`}),(0,T.jsx)(f,{type:`primary`,onClick:()=>s(!1),children:`Create`})]}):void 0,children:(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:r.space16},children:[(0,T.jsxs)(`label`,{style:{display:`flex`,flexDirection:`column`,gap:r.space4},children:[(0,T.jsx)(`span`,{style:{color:l.textDarker,fontWeight:500},children:`Name`}),(0,T.jsx)(o,{placeholder:`ex. linkedin-ads-user-list-feed`})]}),(0,T.jsx)(`p`,{style:{color:l.textNormal,margin:0},children:`Le contenu défile à l’intérieur du slot ; header et footer restent fixes. Le padding de 24 est porté par le conteneur, le contenu ne se re-padde jamais.`})]})})]})}var w,T,E,D,O,k,A,j,M,N,P,F=t((()=>{w=n(a(),1),i(),x(),u(),T=d(),E={title:`Composants/Overlay`,component:_,parameters:{layout:`fullscreen`},argTypes:{open:{control:`boolean`},mode:{control:`inline-radio`,options:[`modal`,`drawer`],description:`Modale = tâche courte qui doit bloquer. Drawer = tâche secondaire qui a besoin du contexte.`},title:{control:`text`,description:`Titre du header. C’est lui que pointe aria-labelledby.`},headerTheme:{control:`inline-radio`,options:[`blue`,`light`,`dark`],description:`Blue = création. Light = édition, consultation. Dark = configuration technique.`},width:{control:`number`,description:`Modale 420–600. Drawer 520, constant dans un même parcours.`},footer:{control:!1,description:`Actions du pied. Omis = variante sans footer.`},children:{control:!1},onClose:{control:!1}},args:{open:!1,mode:`modal`,title:`Create a feed`,headerTheme:`blue`,children:null,onClose:()=>{}}},D=({children:e})=>(0,T.jsx)(`div`,{style:{background:l.bgWindow,minHeight:420,padding:r.space24},children:e}),O={render:()=>(0,T.jsx)(C,{})},k={render:()=>(0,T.jsx)(C,{mode:`drawer`,headerTheme:`light`,label:`Ouvrir le drawer`})},A={render:()=>(0,T.jsx)(C,{withFooter:!1,label:`Ouvrir sans footer`})},j={render:()=>(0,T.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:r.space16,padding:r.space24,background:l.bgWindow},children:[`blue`,`light`,`dark`].map(e=>(0,T.jsx)(`div`,{style:{borderRadius:r.radiusCard,overflow:`hidden`,boxShadow:`0 3px 6px -4px rgba(0,0,0,.12)`},children:(0,T.jsx)(h,{title:`Titre de la modale — ${e}`,theme:e,onClose:()=>{}})},e))})},M={render:()=>(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:r.space16,padding:r.space24,background:l.bgWindow},children:[(0,T.jsx)(`div`,{style:{background:l.bgContainer,borderRadius:r.radiusCard,overflow:`hidden`},children:(0,T.jsxs)(g,{children:[(0,T.jsx)(f,{children:`Cancel`}),(0,T.jsx)(f,{type:`primary`,children:`Create`})]})}),(0,T.jsx)(`div`,{style:{background:l.bgContainer,borderRadius:r.radiusCard,overflow:`hidden`},children:(0,T.jsxs)(g,{children:[(0,T.jsx)(f,{children:`Save and activate later`}),(0,T.jsx)(f,{children:`Cancel`}),(0,T.jsx)(f,{type:`primary`,children:`Create`})]})})]})},N={render:()=>(0,T.jsxs)(`div`,{style:{padding:r.space24,background:l.bgWindow},children:[(0,T.jsx)(`div`,{style:{borderLeft:`3px solid ${l.error}`,paddingLeft:r.space12,background:l.bgContainer,borderRadius:r.radiusCard,overflow:`hidden`},children:(0,T.jsxs)(g,{children:[(0,T.jsx)(f,{type:`primary`,children:`Save`}),(0,T.jsx)(f,{type:`primary`,children:`Save and activate`})]})}),(0,T.jsx)(`p`,{style:{color:l.textNormal,marginTop:r.space12,maxWidth:560},children:`Deux boutons primaires côte à côte : plus rien n’indique l’action attendue, et l’utilisateur doit lire les deux libellés pour trancher.`})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Demo />
}`,...O.parameters?.docs?.source},description:{story:`Mode modale : centrée sur un voile, largeur 600.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Demo mode="drawer" headerTheme="light" label="Ouvrir le drawer" />
}`,...k.parameters?.docs?.source},description:{story:`Mode drawer : collé au bord droit, pleine hauteur, largeur 520. La page reste lisible.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Demo withFooter={false} label="Ouvrir sans footer" />
}`,...A.parameters?.docs?.source},description:{story:`Sans footer : les sélecteurs qui n’ont rien à valider.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: scale.space16,
    padding: scale.space24,
    background: semantic.bgWindow
  }}>
      {(['blue', 'light', 'dark'] as const).map(t => <div key={t} style={{
      borderRadius: scale.radiusCard,
      overflow: 'hidden',
      boxShadow: '0 3px 6px -4px rgba(0,0,0,.12)'
    }}>
          <OverlayHeader title={\`Titre de la modale — \${t}\`} theme={t} onClose={() => {}} />
        </div>)}
    </div>
}`,...j.parameters?.docs?.source},description:{story:`Les trois thèmes de header relevés en production.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: scale.space16,
    padding: scale.space24,
    background: semantic.bgWindow
  }}>
      <div style={{
      background: semantic.bgContainer,
      borderRadius: scale.radiusCard,
      overflow: 'hidden'
    }}>
        <OverlayFooter>
          <Button>Cancel</Button>
          <Button type="primary">Create</Button>
        </OverlayFooter>
      </div>
      <div style={{
      background: semantic.bgContainer,
      borderRadius: scale.radiusCard,
      overflow: 'hidden'
    }}>
        <OverlayFooter>
          <Button>Save and activate later</Button>
          <Button>Cancel</Button>
          <Button type="primary">Create</Button>
        </OverlayFooter>
      </div>
    </div>
}`,...M.parameters?.docs?.source},description:{story:`Le footer seul : jusqu’à trois actions, un seul primaire, tout à droite.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: scale.space24,
    background: semantic.bgWindow
  }}>
      <div style={{
      borderLeft: \`3px solid \${semantic.error}\`,
      paddingLeft: scale.space12,
      background: semantic.bgContainer,
      borderRadius: scale.radiusCard,
      overflow: 'hidden'
    }}>
        <OverlayFooter>
          <Button type="primary">Save</Button>
          <Button type="primary">Save and activate</Button>
        </OverlayFooter>
      </div>
      <p style={{
      color: semantic.textNormal,
      marginTop: scale.space12,
      maxWidth: 560
    }}>
        Deux boutons primaires côte à côte : plus rien n’indique l’action attendue, et l’utilisateur
        doit lire les deux libellés pour trancher.
      </p>
    </div>
}`,...N.parameters?.docs?.source},description:{story:`À éviter : plusieurs actions primaires, ou une modale pour un parcours long.`,...N.parameters?.docs?.description}}},P=[`Modale`,`Drawer`,`SansFooter`,`ThemesDeHeader`,`Footer`,`Dont`]}));F();export{N as Dont,k as Drawer,M as Footer,O as Modale,A as SansFooter,j as ThemesDeHeader,P as __namedExportsOrder,E as default,F as n,S as t};