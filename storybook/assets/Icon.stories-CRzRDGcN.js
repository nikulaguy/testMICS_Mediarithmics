import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{a as n,o as r,r as i,t as a}from"./iframe-BvD6eUld.js";import{n as o,t as s}from"./Icon-Mm64d0bh.js";var c=e({BacASable:()=>p,Bibliotheque:()=>m,Couleur:()=>_,MarquesApplication:()=>h,Tailles:()=>g,__namedExportsOrder:()=>v,default:()=>f}),l,u,d,f,p,m,h,g,_,v,y=t((()=>{o(),i(),l=a(),u=`appstore.automation.automations.broom.calendar.campaigns.chart-bar.chart-line.chevron-bottom.chevron-right.close.cloud.cluster.database.display.download.feeds.file-image.file-import.filter.funnel.inbox.info.magnifier.monitor.options.plug.plus.dots.query.save.server.settings.table.tag.target.team.terminal.tree.user.users.user-lookalike.user-pixel.user-query.view`.split(`.`),d=[`app-navigator`,`app-computing-console`,`app-developer-documentation`,`app-user-guide`],f={title:`Composants/Icon`,component:s,argTypes:{name:{control:`select`,options:[...u,...d],description:`Nom du glyphe dans le set exporté de Figma.`},size:{control:{type:`number`,min:8,max:64},description:`Côté en px. Pilote aussi la font-size.`},color:{control:`color`,description:`Par défaut : hérite de la couleur du parent (currentColor).`},style:{control:!1}},args:{name:`team`,size:20}},p={},m={render:()=>(0,l.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(6, 1fr)`,gap:n.space16},children:u.map(e=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:n.space8,padding:n.space8,color:r.textNormal},children:[(0,l.jsx)(s,{name:e,size:20}),(0,l.jsx)(`span`,{style:{fontSize:10,color:r.textLighter,textAlign:`center`},children:e})]},e))})},h={render:()=>(0,l.jsx)(`div`,{style:{display:`flex`,gap:n.space24},children:d.map(e=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:n.space8,width:150,color:r.textNormal},children:[(0,l.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:n.space12},children:[(0,l.jsx)(s,{name:e,size:40}),(0,l.jsx)(s,{name:e,size:20})]}),(0,l.jsx)(`span`,{style:{fontSize:10,color:r.textLighter,textAlign:`center`},children:e})]},e))})},g={render:()=>(0,l.jsx)(`div`,{style:{display:`flex`,gap:n.space24,alignItems:`center`},children:[14,16,20,24,40].map(e=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:4},children:[(0,l.jsx)(s,{name:`team`,size:e}),(0,l.jsx)(`span`,{style:{fontSize:10,color:r.textLighter},children:e})]},e))})},_={render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:n.space24,alignItems:`center`},children:[(0,l.jsxs)(`span`,{style:{color:r.textNormal,display:`inline-flex`,alignItems:`center`,gap:6},children:[(0,l.jsx)(s,{name:`info`,size:16}),` hérité`]}),(0,l.jsxs)(`span`,{style:{color:r.primary,display:`inline-flex`,alignItems:`center`,gap:6},children:[(0,l.jsx)(s,{name:`info`,size:16}),` primary`]}),(0,l.jsxs)(`span`,{style:{color:r.error,display:`inline-flex`,alignItems:`center`,gap:6},children:[(0,l.jsx)(s,{name:`info`,size:16}),` error`]}),(0,l.jsxs)(`span`,{style:{background:r.info,color:r.textOnDark,padding:`4px 8px`,display:`inline-flex`,alignItems:`center`,gap:6},children:[(0,l.jsx)(s,{name:`info`,size:16}),` sur fond sombre`]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: scale.space16
  }}>
      {NAMES.map(name => <div key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: scale.space8,
      padding: scale.space8,
      color: semantic.textNormal
    }}>
          <Icon name={name} size={20} />
          <span style={{
        fontSize: 10,
        color: semantic.textLighter,
        textAlign: 'center'
      }}>{name}</span>
        </div>)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Les glyphes du set, exportés de la page « 🖼 Icons » du fichier Figma.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: scale.space24
  }}>
      {APP_MARKS.map(name => <div key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: scale.space8,
      width: 150,
      color: semantic.textNormal
    }}>
          <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: scale.space12
      }}>
            <Icon name={name} size={40} />
            <Icon name={name} size={20} />
          </span>
          <span style={{
        fontSize: 10,
        color: semantic.textLighter,
        textAlign: 'center'
      }}>{name}</span>
        </div>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:"Marques d'application, préfixées `app-`. Ce ne sont pas des glyphes mais des logos :\nils portent leurs couleurs de marque et ignorent la prop `color`.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: scale.space24,
    alignItems: 'center'
  }}>
      {[14, 16, 20, 24, 40].map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }}>
          <Icon name="team" size={size} />
          <span style={{
        fontSize: 10,
        color: semantic.textLighter
      }}>{size}</span>
        </div>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:"La taille suit la prop `size` ; le glyphe reste centré sur sa boîte.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: scale.space24,
    alignItems: 'center'
  }}>
      <span style={{
      color: semantic.textNormal,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }}>
        <Icon name="info" size={16} /> hérité
      </span>
      <span style={{
      color: semantic.primary,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }}>
        <Icon name="info" size={16} /> primary
      </span>
      <span style={{
      color: semantic.error,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }}>
        <Icon name="info" size={16} /> error
      </span>
      <span style={{
      background: semantic.info,
      color: semantic.textOnDark,
      padding: '4px 8px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }}>
        <Icon name="info" size={16} /> sur fond sombre
      </span>
    </div>
}`,..._.parameters?.docs?.source},description:{story:"Sans prop `color`, le glyphe prend la couleur du texte parent : un seul glyphe pour tous les états.",..._.parameters?.docs?.description}}},v=[`BacASable`,`Bibliotheque`,`MarquesApplication`,`Tailles`,`Couleur`]}));y();export{p as BacASable,m as Bibliotheque,_ as Couleur,h as MarquesApplication,g as Tailles,v as __namedExportsOrder,f as default,y as n,c as t};