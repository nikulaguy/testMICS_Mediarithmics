import{i as e}from"./preload-helper-BdFrVu1K.js";import{a as t,i as n,o as r,r as i,t as a}from"./iframe-BvD6eUld.js";function o({name:e,value:n}){return(0,l.jsxs)(`div`,{style:{width:168},children:[(0,l.jsx)(`div`,{style:{height:48,borderRadius:t.radiusBase,background:n,border:`1px solid ${r.borderInput}`}}),(0,l.jsx)(`div`,{style:{marginTop:6,color:r.textDarker},children:e}),(0,l.jsx)(`div`,{style:{color:r.textLighter},children:n})]})}function s({children:e}){return(0,l.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:t.space16},children:e})}function c({children:e,sub:n}){return(0,l.jsxs)(`div`,{style:{margin:`${t.space24}px 0 ${t.space12}px`},children:[(0,l.jsx)(`div`,{style:{fontSize:16,fontWeight:500,color:r.textDarker},children:e}),n&&(0,l.jsx)(`div`,{style:{color:r.textLighter,marginTop:4},children:n})]})}var l,u,d,f,p,m,h;e((()=>{i(),l=a(),u={title:`Design System/Tokens`,parameters:{docs:{description:{component:`Les tokens sont la seule source de valeurs du projet. Les primitives portent les valeurs et ne nomment que des couleurs ; les sémantiques ne sont que des alias de primitives et nomment des usages. Un composant n'utilise jamais une primitive directement.`}}}},d={render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{sub:`Ce que les composants utilisent. Chaque sémantique est un alias d'une primitive.`,children:`Couleurs sémantiques`}),(0,l.jsx)(s,{children:[[`primary`,r.primary],[`info`,r.info],[`success`,r.success],[`warning`,r.warning],[`error`,r.error],[`link/default`,r.linkDefault],[`link/hover`,r.linkHover],[`link/on-dark`,r.linkOnDark],[`text/darker`,r.textDarker],[`text/normal`,r.textNormal],[`text/lighter`,r.textLighter],[`text/lightest`,r.textLightest],[`bg/container`,r.bgContainer],[`bg/window`,r.bgWindow],[`bg/subtle`,r.bgSubtle],[`bg/hover`,r.bgHover],[`bg/selected`,r.bgSelected],[`bg/tooltip`,r.bgTooltip],[`border/default`,r.borderDefault],[`border/input`,r.borderInput]].map(([e,t])=>(0,l.jsx)(o,{name:e,value:t},e))})]})},f={render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{sub:`Les valeurs. Nommées par couleur, jamais par usage. Réservées aux sémantiques.`,children:`Primitives`}),(0,l.jsx)(s,{children:Object.entries(n).map(([e,t])=>(0,l.jsx)(o,{name:e,value:t},e))})]})},p={render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{sub:`Tous les gaps et paddings du produit sortent de cette échelle.`,children:`Espacements`}),(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:t.space8},children:[`space4`,`space8`,`space12`,`space16`,`space20`,`space24`,`space35`].map(e=>(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:t.space16},children:[(0,l.jsx)(`span`,{style:{width:90,color:r.textNormal},children:e.replace(`space`,`space/`)}),(0,l.jsx)(`div`,{style:{height:12,width:t[e],background:r.primary,borderRadius:2}}),(0,l.jsxs)(`span`,{style:{color:r.textLighter},children:[t[e],` px`]})]},e))}),(0,l.jsx)(c,{sub:`radius/base pour les contrôles, radius/card pour les cartes et les overlays.`,children:`Radius`}),(0,l.jsx)(`div`,{style:{display:`flex`,gap:t.space16},children:[[`radius/base`,t.radiusBase],[`radius/card`,t.radiusCard]].map(([e,t])=>(0,l.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,l.jsx)(`div`,{style:{width:96,height:64,borderRadius:t,background:r.bgSubtle,border:`1px solid ${r.borderDefault}`}}),(0,l.jsxs)(`div`,{style:{marginTop:6,color:r.textNormal},children:[e,` (`,t,`)`]})]},e))}),(0,l.jsx)(c,{sub:`Hauteurs fixes de la coque et des contrôles.`,children:`Tailles`}),(0,l.jsxs)(`div`,{style:{color:r.textNormal,display:`flex`,flexDirection:`column`,gap:4},children:[(0,l.jsxs)(`span`,{children:[`TopBar : `,t.sizeHeader,` · Actionbar : `,t.actionBarHeight,` · SideMenu : `,t.sideMenuWidth]}),(0,l.jsxs)(`span`,{children:[`Contrôle (bouton, champ, select) : `,t.sizeControl,` · Ligne de tableau : `,t.sizeRow]})]})]})},m={render:()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{sub:`Police unique Circular, deux graisses : Book et Medium.`,children:`Styles de texte`}),(0,l.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:t.space12},children:[[`Headline`,24,500],[`Headline 3`,20,500],[`Headline 4`,16,500],[`Body/Large`,14,400],[`Body/Book`,12,400],[`Body/Medium`,12,500],[`Caption/Main`,10,400]].map(([e,n,i])=>(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:t.space24},children:[(0,l.jsx)(`span`,{style:{width:120,color:r.textLighter},children:e}),(0,l.jsx)(`span`,{style:{fontSize:n,fontWeight:i,color:r.textDarker},children:`Segment name example`}),(0,l.jsxs)(`span`,{style:{color:r.textLighter},children:[n,` px`]})]},e))})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Title sub="Ce que les composants utilisent. Chaque sémantique est un alias d'une primitive.">
        Couleurs sémantiques
      </Title>
      <Grid>
        {([['primary', semantic.primary], ['info', semantic.info], ['success', semantic.success], ['warning', semantic.warning], ['error', semantic.error], ['link/default', semantic.linkDefault], ['link/hover', semantic.linkHover], ['link/on-dark', semantic.linkOnDark], ['text/darker', semantic.textDarker], ['text/normal', semantic.textNormal], ['text/lighter', semantic.textLighter], ['text/lightest', semantic.textLightest], ['bg/container', semantic.bgContainer], ['bg/window', semantic.bgWindow], ['bg/subtle', semantic.bgSubtle], ['bg/hover', semantic.bgHover], ['bg/selected', semantic.bgSelected], ['bg/tooltip', semantic.bgTooltip], ['border/default', semantic.borderDefault], ['border/input', semantic.borderInput]] as const).map(([name, value]) => <Swatch key={name} name={name} value={value} />)}
      </Grid>
    </>
}`,...d.parameters?.docs?.source},description:{story:`Sémantiques : ce que les composants utilisent réellement.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Title sub="Les valeurs. Nommées par couleur, jamais par usage. Réservées aux sémantiques.">
        Primitives
      </Title>
      <Grid>
        {Object.entries(primitives).map(([name, value]) => <Swatch key={name} name={name} value={value as string} />)}
      </Grid>
    </>
}`,...f.parameters?.docs?.source},description:{story:`Primitives : les valeurs, nommées par couleur uniquement.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Title sub="Tous les gaps et paddings du produit sortent de cette échelle.">Espacements</Title>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: scale.space8
    }}>
        {(['space4', 'space8', 'space12', 'space16', 'space20', 'space24', 'space35'] as const).map(k => <div key={k} style={{
        display: 'flex',
        alignItems: 'center',
        gap: scale.space16
      }}>
            <span style={{
          width: 90,
          color: semantic.textNormal
        }}>{k.replace('space', 'space/')}</span>
            <div style={{
          height: 12,
          width: scale[k],
          background: semantic.primary,
          borderRadius: 2
        }} />
            <span style={{
          color: semantic.textLighter
        }}>{scale[k]} px</span>
          </div>)}
      </div>

      <Title sub="radius/base pour les contrôles, radius/card pour les cartes et les overlays.">Radius</Title>
      <div style={{
      display: 'flex',
      gap: scale.space16
    }}>
        {([['radius/base', scale.radiusBase], ['radius/card', scale.radiusCard]] as const).map(([name, r]) => <div key={name} style={{
        textAlign: 'center'
      }}>
            <div style={{
          width: 96,
          height: 64,
          borderRadius: r,
          background: semantic.bgSubtle,
          border: \`1px solid \${semantic.borderDefault}\`
        }} />
            <div style={{
          marginTop: 6,
          color: semantic.textNormal
        }}>
              {name} ({r})
            </div>
          </div>)}
      </div>

      <Title sub="Hauteurs fixes de la coque et des contrôles.">Tailles</Title>
      <div style={{
      color: semantic.textNormal,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
        <span>TopBar : {scale.sizeHeader} · Actionbar : {scale.actionBarHeight} · SideMenu : {scale.sideMenuWidth}</span>
        <span>Contrôle (bouton, champ, select) : {scale.sizeControl} · Ligne de tableau : {scale.sizeRow}</span>
      </div>
    </>
}`,...p.parameters?.docs?.source},description:{story:`Échelle : espacements, radius, tailles de contrôle.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Title sub="Police unique Circular, deux graisses : Book et Medium.">Styles de texte</Title>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: scale.space12
    }}>
        {([['Headline', 24, 500], ['Headline 3', 20, 500], ['Headline 4', 16, 500], ['Body/Large', 14, 400], ['Body/Book', 12, 400], ['Body/Medium', 12, 500], ['Caption/Main', 10, 400]] as const).map(([name, size, weight]) => <div key={name} style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: scale.space24
      }}>
            <span style={{
          width: 120,
          color: semantic.textLighter
        }}>{name}</span>
            <span style={{
          fontSize: size,
          fontWeight: weight,
          color: semantic.textDarker
        }}>
              Segment name example
            </span>
            <span style={{
          color: semantic.textLighter
        }}>{size} px</span>
          </div>)}
      </div>
    </>
}`,...m.parameters?.docs?.source},description:{story:`Typographie : une seule police, une échelle courte.`,...m.parameters?.docs?.description}}},h=[`Semantiques`,`Primitives`,`Echelle`,`Typographie`]}))();export{p as Echelle,f as Primitives,d as Semantiques,m as Typographie,h as __namedExportsOrder,u as default};