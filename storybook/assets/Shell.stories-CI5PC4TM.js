import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{a as r,gt as i,o as a,r as o,t as s}from"./iframe-BvD6eUld.js";import{a as c,i as l,n as u,r as d,t as f}from"./SearchPalette-CRmGouNj.js";var p=e({RechercheGlobale:()=>y,SideMenuSeul:()=>v,TopBarSeule:()=>_,__namedExportsOrder:()=>b,default:()=>g}),m,h,g,_,v,y,b,x=t((()=>{m=n(i(),1),c(),u(),o(),h=s(),g={title:`Composants/Shell`,parameters:{layout:`fullscreen`}},_={render:()=>{let[e,t]=(0,m.useState)(!1);return(0,h.jsxs)(`div`,{style:{minHeight:420,position:`relative`},children:[(0,h.jsx)(l,{onOpenSearch:()=>t(!0)}),(0,h.jsx)(f,{open:e,onClose:()=>t(!1)})]})}},v={render:()=>{let[e,t]=(0,m.useState)(`Segments`);return(0,h.jsxs)(`div`,{style:{display:`flex`,minHeight:480,background:a.bgWindow},children:[(0,h.jsx)(d,{active:e,onSelect:t}),(0,h.jsxs)(`div`,{style:{padding:r.space24,color:a.textLighter},children:[`Entrée active : `,(0,h.jsx)(`b`,{style:{color:a.textNormal},children:e})]})]})}},y={render:()=>{let[e,t]=(0,m.useState)(!0);return(0,h.jsxs)(`div`,{style:{minHeight:520,background:a.bgWindow},children:[(0,h.jsx)(l,{onOpenSearch:()=>t(!0)}),(0,h.jsx)(f,{open:e,onClose:()=>t(!1)})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={{
      minHeight: 420,
      position: 'relative'
    }}>
        <TopBar onOpenSearch={() => setOpen(true)} />
        <SearchPalette open={open} onClose={() => setOpen(false)} />
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:`TopBar : logo, sélecteur d'organisation, recherche, aide, applications, compte.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState('Segments');
    return <div style={{
      display: 'flex',
      minHeight: 480,
      background: semantic.bgWindow
    }}>
        <SideMenu active={active} onSelect={setActive} />
        <div style={{
        padding: scale.space24,
        color: semantic.textLighter
      }}>
          Entrée active : <b style={{
          color: semantic.textNormal
        }}>{active}</b>
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:`SideMenu : navigation principale. Trois états d'item, Default / Hover / Active.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <div style={{
      minHeight: 520,
      background: semantic.bgWindow
    }}>
        <TopBar onOpenSearch={() => setOpen(true)} />
        <SearchPalette open={open} onClose={() => setOpen(false)} />
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:`Palette de recherche globale, ouverte par la loupe de la TopBar.`,...y.parameters?.docs?.description}}},b=[`TopBarSeule`,`SideMenuSeul`,`RechercheGlobale`]}));x();export{y as RechercheGlobale,v as SideMenuSeul,_ as TopBarSeule,b as __namedExportsOrder,g as default,x as n,p as t};