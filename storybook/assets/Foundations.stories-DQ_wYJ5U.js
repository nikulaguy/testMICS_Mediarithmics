import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{a as n,n as r,o as i,r as a,s as o,t as s}from"./iframe-BvD6eUld.js";var c=e({Effets:()=>O,Espacements:()=>C,HierarchieDeTexte:()=>D,NiveauxDeSurface:()=>b,RolesDeCouleur:()=>y,RythmeVertical:()=>w,SurvolEtSelection:()=>x,Typographie:()=>E,__namedExportsOrder:()=>k,default:()=>f});function l({value:e,size:t=40,border:r}){return(0,d.jsx)(`span`,{style:{width:t,height:t,borderRadius:n.radiusBase,background:e,border:r?`1px solid ${i.borderInput}`:void 0,flex:`0 0 auto`}})}function u({token:e,value:t,role:r,border:a}){return(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:n.space12,padding:`${n.space8}px 0`},children:[(0,d.jsx)(l,{value:t,border:a}),(0,d.jsxs)(`div`,{style:{minWidth:130},children:[(0,d.jsx)(`div`,{style:{...o.bodyMedium},children:e}),(0,d.jsx)(`div`,{style:{...o.caption,color:i.textLighter},children:t})]}),(0,d.jsx)(`div`,{style:{color:i.textNormal},children:r})]})}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{a(),d=s(),f={title:`Design System/Tokens/Fondations`},p=({children:e})=>(0,d.jsx)(`div`,{style:{background:i.bgWindow,padding:n.space24,color:i.textNormal},children:e}),m=({children:e})=>(0,d.jsx)(`div`,{style:{background:i.bgContainer,borderRadius:n.radiusCard,padding:n.space20},children:e}),h=({children:e})=>(0,d.jsx)(`div`,{style:{...o.captionMedium,letterSpacing:n.trackingCaps,textTransform:`uppercase`,color:i.textLighter,marginBottom:n.space8},children:e}),g=[{token:`primary`,value:i.primary,role:`Action principale, état actif, sélection`,onDark:!0},{token:`info`,value:i.info,role:`Surfaces navy : TopBar, tooltip, header technique`,onDark:!0},{token:`success`,value:i.success,role:`Résultat positif, rien à traiter`,onDark:!0},{token:`warning`,value:i.warning,role:`À traiter, sans gravité`,onDark:!0},{token:`error`,value:i.error,role:`Échec, action destructive`,onDark:!0}],_=[{token:`text/darker`,value:i.textDarker,role:`Titres, valeurs chiffrées mises en avant`},{token:`text/normal`,value:i.textNormal,role:`Corps de texte, libellés`},{token:`text/lighter`,value:i.textLighter,role:`Métadonnées, en-têtes de colonne, aide`},{token:`text/lightest`,value:i.textLightest,role:`Placeholder, désactivé, illustration`}],v=[{token:`bg/window`,value:i.bgWindow,role:`Fond de page. Le niveau du dessous.`},{token:`bg/container`,value:i.bgContainer,role:`Carte, panneau, tableau. Le niveau du dessus.`,border:!0},{token:`bg/subtle`,value:i.bgSubtle,role:`Zone secondaire DANS une carte (barre de filtres actifs)`},{token:`bg/hover`,value:i.bgHover,role:`Survol. Transitoire, disparaît quand le pointeur part.`},{token:`bg/selected`,value:i.bgSelected,role:`Sélection. Persistante, elle reste après le clic.`}],y={render:()=>(0,d.jsx)(p,{children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:n.space16},children:[(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{children:`Couleurs de sens`}),g.map(e=>(0,d.jsx)(u,{...e},e.token))]}),(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{children:`Rampe de texte`}),_.map(e=>(0,d.jsx)(u,{...e},e.token))]}),(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{children:`Surfaces`}),v.map(e=>(0,d.jsx)(u,{...e},e.token))]})]})})},b={render:()=>(0,d.jsxs)(p,{children:[(0,d.jsx)(h,{children:`bg/window — fond de page`}),(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{children:`bg/container — la carte`}),(0,d.jsx)(`div`,{style:{background:i.bgSubtle,borderRadius:n.radiusCard,padding:n.space16},children:(0,d.jsx)(`span`,{style:{color:i.textNormal},children:`bg/subtle — zone secondaire dans la carte. On s'arrête là : un quatrième niveau de gris ne se distingue plus du troisième.`})})]})]})},x={render:()=>(0,d.jsx)(p,{children:(0,d.jsx)(m,{children:(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`},children:[{label:`Ligne au repos`,bg:`transparent`,note:`transparent`},{label:`Ligne survolée`,bg:i.bgHover,note:`bg/hover — transitoire`},{label:`Ligne sélectionnée`,bg:i.bgSelected,note:`bg/selected — persistante`,primary:!0}].map(e=>(0,d.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,padding:`${n.space8}px ${n.space16}px`,background:e.bg,color:e.primary?i.primary:i.textNormal},children:[(0,d.jsx)(`span`,{children:e.label}),(0,d.jsx)(`span`,{style:{...o.caption,color:i.textLighter},children:e.note})]},e.label))})})})},S=[{name:`space/4`,v:n.space4,use:`Titre et sa description, icône collée à son libellé`},{name:`space/8`,v:n.space8,use:`Entre éléments d’un même groupe : boutons, chips, gap d’un item`},{name:`space/12`,v:n.space12,use:`Icône et libellé d’une rangée, éléments d’une barre`},{name:`space/16`,v:n.space16,use:`Entre blocs d’une même carte. La valeur par défaut.`},{name:`space/20`,v:n.space20,use:`Padding intérieur d’une carte`},{name:`space/24`,v:n.space24,use:`Entre sections, padding d’un overlay`},{name:`space/35`,v:n.space35,use:`Marge de contenu de page (valeur héritée de la prod)`}],C={render:()=>(0,d.jsx)(p,{children:(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{children:`Échelle`}),(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:n.space12},children:S.map(e=>(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:n.space16},children:[(0,d.jsx)(`span`,{style:{...o.bodyMedium,minWidth:80},children:e.name}),(0,d.jsx)(`span`,{style:{height:16,width:e.v,background:i.primary,borderRadius:2,flex:`0 0 auto`}}),(0,d.jsx)(`span`,{style:{...o.caption,color:i.textLighter,minWidth:28},children:e.v}),(0,d.jsx)(`span`,{children:e.use})]},e.name))})]})})},w={render:()=>(0,d.jsx)(p,{children:(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:n.space24},children:[(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{children:`À faire — espaces contrastés`}),(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:n.space24},children:[`Section A`,`Section B`].map(e=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:n.space4},children:[(0,d.jsx)(`span`,{style:{...o.bodyMedium,color:i.textDarker},children:e}),(0,d.jsx)(`span`,{style:{color:i.textLighter},children:`Sa description, collée à son titre.`})]},e))})]}),(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{children:`À éviter — espace uniforme`}),(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:n.space12},children:[`Section A`,`Section B`].map(e=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:n.space12},children:[(0,d.jsx)(`span`,{style:{...o.bodyMedium,color:i.textDarker},children:e}),(0,d.jsx)(`span`,{style:{color:i.textLighter},children:`Rien ne dit ce qui va avec quoi.`})]},e))})]})]})})},T=[{name:`Headline · 24/28 Medium`,style:o.headline,use:`Valeur d’un Counter. Un seul par carte.`},{name:`Headline 3 · 20/24 Medium`,style:o.headline3,use:`Titre de section dans une page`},{name:`Headline 4 · 16/24 Medium`,style:o.headline4,use:`Titre de ressource, titre d’overlay, état vide`},{name:`Body Large · 14/22 Book`,style:o.bodyLarge,use:`Onglet, lien isolé`},{name:`Body · 12/20 Book`,style:o.body,use:`Corps de texte. Le défaut de l’interface.`},{name:`Body Medium · 12/20 Medium`,style:o.bodyMedium,use:`Libellé de bouton, intitulé de champ`},{name:`Caption · 10/14 Book`,style:o.caption,use:`Métadonnée, légende`},{name:`Caption Medium · 10/14 Medium`,style:o.captionMedium,use:`Micro-libellé en capitales, bouton dense`}],E={render:()=>(0,d.jsx)(p,{children:(0,d.jsx)(m,{children:(0,d.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:n.space16},children:T.map(e=>(0,d.jsxs)(`div`,{style:{display:`flex`,alignItems:`baseline`,gap:n.space24},children:[(0,d.jsxs)(`span`,{style:{...e.style,color:i.textDarker,minWidth:320},children:[`Aa — `,e.name.split(` · `)[0]]}),(0,d.jsx)(`span`,{style:{...o.caption,color:i.textLighter,minWidth:150},children:e.name.split(` · `)[1]}),(0,d.jsx)(`span`,{children:e.use})]},e.name))})})})},D={render:()=>(0,d.jsx)(p,{children:(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:n.space24},children:[(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{children:`À faire`}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:n.space4},children:[(0,d.jsx)(`span`,{style:{...o.bodyMedium,color:i.textDarker},children:`Number of segments`}),(0,d.jsx)(`span`,{style:{...o.headline,color:i.textDarker},children:`1 284`}),(0,d.jsx)(`span`,{style:{...o.caption,color:i.textLighter},children:`Sur les 30 derniers jours`})]})]}),(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{children:`À éviter`}),(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:n.space4},children:[(0,d.jsx)(`span`,{style:{...o.body,color:i.textNormal},children:`Number of segments`}),(0,d.jsx)(`span`,{style:{...o.body,color:i.textNormal},children:`1 284`}),(0,d.jsx)(`span`,{style:{...o.body,color:i.textNormal},children:`Sur les 30 derniers jours`})]}),(0,d.jsx)(`p`,{style:{color:i.textLighter,marginTop:n.space12},children:`Trois lignes de même poids : l’œil doit tout lire pour trouver le chiffre.`})]})]})})},O={render:()=>(0,d.jsx)(p,{children:(0,d.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:n.space24},children:[(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{children:`Élévation`}),(0,d.jsx)(`div`,{style:{display:`flex`,gap:n.space24,paddingBlock:n.space16},children:[{name:`aucune`,shadow:`none`,use:`Carte, tableau, barre : dans le flux`},{name:`elevation.panel`,shadow:r.panel,use:`Menu, dropdown, popover`},{name:`elevation.overlay`,shadow:r.overlay,use:`Modale, drawer`}].map(e=>(0,d.jsxs)(`div`,{style:{flex:1},children:[(0,d.jsx)(`div`,{style:{height:72,background:i.bgContainer,borderRadius:n.radiusCard,boxShadow:e.shadow,border:e.shadow===`none`?`1px solid ${i.borderInput}`:void 0,marginBottom:n.space8}}),(0,d.jsx)(`div`,{style:{...o.bodyMedium},children:e.name}),(0,d.jsx)(`div`,{style:{...o.caption,color:i.textLighter},children:e.use})]},e.name))})]}),(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{children:`Rayons`}),(0,d.jsx)(`div`,{style:{display:`flex`,gap:n.space24,paddingBlock:n.space16},children:[{name:`radius/sm · 2`,v:n.radiusSm,use:`Case à cocher`},{name:`radius/base · 3`,v:n.radiusBase,use:`Bouton, champ, tag, bouton de page`},{name:`radius/card · 6`,v:n.radiusCard,use:`Carte, panneau, overlay, badge`},{name:`pleine hauteur`,v:999,use:`Pastille ronde d’un onglet`}].map(e=>(0,d.jsxs)(`div`,{style:{flex:1},children:[(0,d.jsx)(`div`,{style:{height:56,background:i.bgWindow,border:`1px solid ${i.borderInput}`,borderRadius:e.v,marginBottom:n.space8}}),(0,d.jsx)(`div`,{style:{...o.bodyMedium},children:e.name}),(0,d.jsx)(`div`,{style:{...o.caption,color:i.textLighter},children:e.use})]},e.name))})]}),(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{children:`Bordures`}),(0,d.jsx)(`div`,{style:{display:`flex`,gap:n.space24,paddingBlock:n.space8},children:[{name:`border/input`,v:i.borderInput,use:`Contour d’un contrôle, séparateur de liste`},{name:`border/default`,v:i.borderDefault,use:`Séparateur de structure : lignes de tableau, pied d’overlay`}].map(e=>(0,d.jsxs)(`div`,{style:{flex:1},children:[(0,d.jsx)(`div`,{style:{height:40,border:`1px solid ${e.v}`,borderRadius:n.radiusBase,marginBottom:n.space8}}),(0,d.jsx)(`div`,{style:{...o.bodyMedium},children:e.name}),(0,d.jsx)(`div`,{style:{...o.caption,color:i.textLighter},children:e.use})]},e.name))})]})]})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: scale.space16
    }}>
        <Card>
          <Caption>Couleurs de sens</Caption>
          {ROLES.map(r => <Row key={r.token} {...r} />)}
        </Card>
        <Card>
          <Caption>Rampe de texte</Caption>
          {TEXTS.map(r => <Row key={r.token} {...r} />)}
        </Card>
        <Card>
          <Caption>Surfaces</Caption>
          {SURFACES.map(r => <Row key={r.token} {...r} />)}
        </Card>
      </div>
    </Frame>
}`,...y.parameters?.docs?.source},description:{story:`Les rôles sémantiques : ce que chaque couleur veut dire, pas à quoi elle ressemble.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Caption>bg/window — fond de page</Caption>
      <Card>
        <Caption>bg/container — la carte</Caption>
        <div style={{
        background: semantic.bgSubtle,
        borderRadius: scale.radiusCard,
        padding: scale.space16
      }}>
          <span style={{
          color: semantic.textNormal
        }}>
            bg/subtle — zone secondaire dans la carte. On s'arrête là : un quatrième niveau de gris
            ne se distingue plus du troisième.
          </span>
        </div>
      </Card>
    </Frame>
}`,...b.parameters?.docs?.source},description:{story:`Les deux niveaux de surface, et pourquoi il n'en faut pas un troisième.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Card>
        <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
          {[{
          label: 'Ligne au repos',
          bg: 'transparent',
          note: 'transparent'
        }, {
          label: 'Ligne survolée',
          bg: semantic.bgHover,
          note: 'bg/hover — transitoire'
        }, {
          label: 'Ligne sélectionnée',
          bg: semantic.bgSelected,
          note: 'bg/selected — persistante',
          primary: true
        }].map(r => <div key={r.label} style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: \`\${scale.space8}px \${scale.space16}px\`,
          background: r.bg,
          color: r.primary ? semantic.primary : semantic.textNormal
        }}>
              <span>{r.label}</span>
              <span style={{
            ...typography.caption,
            color: semantic.textLighter
          }}>{r.note}</span>
            </div>)}
        </div>
      </Card>
    </Frame>
}`,...x.parameters?.docs?.source},description:{story:`Survol contre sélection : deux gris, deux durées de vie.`,...x.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Card>
        <Caption>Échelle</Caption>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: scale.space12
      }}>
          {SPACES.map(s => <div key={s.name} style={{
          display: 'flex',
          alignItems: 'center',
          gap: scale.space16
        }}>
              <span style={{
            ...typography.bodyMedium,
            minWidth: 80
          }}>{s.name}</span>
              <span style={{
            height: 16,
            width: s.v,
            background: semantic.primary,
            borderRadius: 2,
            flex: '0 0 auto'
          }} />
              <span style={{
            ...typography.caption,
            color: semantic.textLighter,
            minWidth: 28
          }}>{s.v}</span>
              <span>{s.use}</span>
            </div>)}
        </div>
      </Card>
    </Frame>
}`,...C.parameters?.docs?.source},description:{story:`L'échelle réellement utilisée, et ce que chaque cran veut dire.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: scale.space24
    }}>
        <Card>
          <Caption>À faire — espaces contrastés</Caption>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: scale.space24
        }}>
            {['Section A', 'Section B'].map(s => <div key={s} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: scale.space4
          }}>
                <span style={{
              ...typography.bodyMedium,
              color: semantic.textDarker
            }}>{s}</span>
                <span style={{
              color: semantic.textLighter
            }}>Sa description, collée à son titre.</span>
              </div>)}
          </div>
        </Card>
        <Card>
          <Caption>À éviter — espace uniforme</Caption>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: scale.space12
        }}>
            {['Section A', 'Section B'].map(s => <div key={s} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: scale.space12
          }}>
                <span style={{
              ...typography.bodyMedium,
              color: semantic.textDarker
            }}>{s}</span>
                <span style={{
              color: semantic.textLighter
            }}>Rien ne dit ce qui va avec quoi.</span>
              </div>)}
          </div>
        </Card>
      </div>
    </Frame>
}`,...w.parameters?.docs?.source},description:{story:`Le rythme vertical : l'espace dit le groupement avant toute bordure.`,...w.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <Card>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: scale.space16
      }}>
          {TYPE.map(t => <div key={t.name} style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: scale.space24
        }}>
              <span style={{
            ...t.style,
            color: semantic.textDarker,
            minWidth: 320
          }}>Aa — {t.name.split(' · ')[0]}</span>
              <span style={{
            ...typography.caption,
            color: semantic.textLighter,
            minWidth: 150
          }}>
                {t.name.split(' · ')[1]}
              </span>
              <span>{t.use}</span>
            </div>)}
        </div>
      </Card>
    </Frame>
}`,...E.parameters?.docs?.source},description:{story:`Neuf styles, pas un de plus. Une taille absente de la liste est une dérive.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: scale.space24
    }}>
        <Card>
          <Caption>À faire</Caption>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: scale.space4
        }}>
            <span style={{
            ...typography.bodyMedium,
            color: semantic.textDarker
          }}>Number of segments</span>
            <span style={{
            ...typography.headline,
            color: semantic.textDarker
          }}>1 284</span>
            <span style={{
            ...typography.caption,
            color: semantic.textLighter
          }}>Sur les 30 derniers jours</span>
          </div>
        </Card>
        <Card>
          <Caption>À éviter</Caption>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: scale.space4
        }}>
            <span style={{
            ...typography.body,
            color: semantic.textNormal
          }}>Number of segments</span>
            <span style={{
            ...typography.body,
            color: semantic.textNormal
          }}>1 284</span>
            <span style={{
            ...typography.body,
            color: semantic.textNormal
          }}>Sur les 30 derniers jours</span>
          </div>
          <p style={{
          color: semantic.textLighter,
          marginTop: scale.space12
        }}>
            Trois lignes de même poids : l’œil doit tout lire pour trouver le chiffre.
          </p>
        </Card>
      </div>
    </Frame>
}`,...D.parameters?.docs?.source},description:{story:`La hiérarchie se fait par la graisse et la couleur, pas par la taille seule.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: scale.space24
    }}>
        <Card>
          <Caption>Élévation</Caption>
          <div style={{
          display: 'flex',
          gap: scale.space24,
          paddingBlock: scale.space16
        }}>
            {[{
            name: 'aucune',
            shadow: 'none',
            use: 'Carte, tableau, barre : dans le flux'
          }, {
            name: 'elevation.panel',
            shadow: elevation.panel,
            use: 'Menu, dropdown, popover'
          }, {
            name: 'elevation.overlay',
            shadow: elevation.overlay,
            use: 'Modale, drawer'
          }].map(e => <div key={e.name} style={{
            flex: 1
          }}>
                <div style={{
              height: 72,
              background: semantic.bgContainer,
              borderRadius: scale.radiusCard,
              boxShadow: e.shadow,
              border: e.shadow === 'none' ? \`1px solid \${semantic.borderInput}\` : undefined,
              marginBottom: scale.space8
            }} />
                <div style={{
              ...typography.bodyMedium
            }}>{e.name}</div>
                <div style={{
              ...typography.caption,
              color: semantic.textLighter
            }}>{e.use}</div>
              </div>)}
          </div>
        </Card>

        <Card>
          <Caption>Rayons</Caption>
          <div style={{
          display: 'flex',
          gap: scale.space24,
          paddingBlock: scale.space16
        }}>
            {[{
            name: 'radius/sm · 2',
            v: scale.radiusSm,
            use: 'Case à cocher'
          }, {
            name: 'radius/base · 3',
            v: scale.radiusBase,
            use: 'Bouton, champ, tag, bouton de page'
          }, {
            name: 'radius/card · 6',
            v: scale.radiusCard,
            use: 'Carte, panneau, overlay, badge'
          }, {
            name: 'pleine hauteur',
            v: 999,
            use: 'Pastille ronde d’un onglet'
          }].map(r => <div key={r.name} style={{
            flex: 1
          }}>
                <div style={{
              height: 56,
              background: semantic.bgWindow,
              border: \`1px solid \${semantic.borderInput}\`,
              borderRadius: r.v,
              marginBottom: scale.space8
            }} />
                <div style={{
              ...typography.bodyMedium
            }}>{r.name}</div>
                <div style={{
              ...typography.caption,
              color: semantic.textLighter
            }}>{r.use}</div>
              </div>)}
          </div>
        </Card>

        <Card>
          <Caption>Bordures</Caption>
          <div style={{
          display: 'flex',
          gap: scale.space24,
          paddingBlock: scale.space8
        }}>
            {[{
            name: 'border/input',
            v: semantic.borderInput,
            use: 'Contour d’un contrôle, séparateur de liste'
          }, {
            name: 'border/default',
            v: semantic.borderDefault,
            use: 'Séparateur de structure : lignes de tableau, pied d’overlay'
          }].map(b => <div key={b.name} style={{
            flex: 1
          }}>
                <div style={{
              height: 40,
              border: \`1px solid \${b.v}\`,
              borderRadius: scale.radiusBase,
              marginBottom: scale.space8
            }} />
                <div style={{
              ...typography.bodyMedium
            }}>{b.name}</div>
                <div style={{
              ...typography.caption,
              color: semantic.textLighter
            }}>{b.use}</div>
              </div>)}
          </div>
        </Card>
      </div>
    </Frame>
}`,...O.parameters?.docs?.source},description:{story:`Deux élévations et quatre rayons. Rien d'autre ne flotte, rien d'autre n'est arrondi.`,...O.parameters?.docs?.description}}},k=[`RolesDeCouleur`,`NiveauxDeSurface`,`SurvolEtSelection`,`Espacements`,`RythmeVertical`,`Typographie`,`HierarchieDeTexte`,`Effets`]}));A();export{O as Effets,C as Espacements,D as HierarchieDeTexte,b as NiveauxDeSurface,y as RolesDeCouleur,w as RythmeVertical,x as SurvolEtSelection,E as Typographie,k as __namedExportsOrder,f as default,A as n,c as t};