import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{a as r,c as i,gt as a,m as o,o as s,r as c,t as l}from"./iframe-BvD6eUld.js";function u({current:e,total:t,pageSize:n,onChange:i,showSizeChanger:a=!0,pageSizeOptions:s=[10,20,50,100]}){return(0,d.jsx)(`nav`,{"aria-label":`Pagination`,style:{display:`flex`,justifyContent:`flex-end`,paddingTop:r.space16},children:(0,d.jsx)(o,{current:e,total:t,pageSize:n,onChange:i,showSizeChanger:a,pageSizeOptions:s,showLessItems:!1})})}var d,f=t((()=>{i(),c(),d=l(),u.__docgenInfo={description:`Pagination (Figma 16:34) — catégorie ENVELOPPE.
Ant Design gère déjà l'ellipsis, le clavier et les extrémités désactivées : on
garde son rendu et on impose la position et les réglages du DS.
Boutons 32×32, radius/base, page courante en primary, sélecteur « n / page ».

Toujours en bas à DROITE de la liste : c'est là que finit la lecture du tableau.`,methods:[],displayName:`Pagination`,props:{current:{required:!0,tsType:{name:`number`},description:``},total:{required:!0,tsType:{name:`number`},description:``},pageSize:{required:!0,tsType:{name:`number`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(page: number, pageSize: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`},{type:{name:`number`},name:`pageSize`}],return:{name:`void`}}},description:``},showSizeChanger:{required:!1,tsType:{name:`boolean`},description:`Sélecteur de taille de page. À activer sur les gros volumes.`,defaultValue:{value:`true`,computed:!1}},pageSizeOptions:{required:!1,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:``,defaultValue:{value:`[10, 20, 50, 100]`,computed:!1}}}}})),p=e({BacASable:()=>v,DernierePage:()=>b,PetitVolume:()=>x,PremierePage:()=>y,SousUnTableau:()=>S,__namedExportsOrder:()=>C,default:()=>_});function m({total:e,size:t=10,showSizeChanger:n=!0}){let[r,i]=(0,h.useState)(1),[a,o]=(0,h.useState)(t);return(0,g.jsx)(u,{current:r,total:e,pageSize:a,showSizeChanger:n,onChange:(e,t)=>{i(e),o(t)}})}var h,g,_,v,y,b,x,S,C,w=t((()=>{h=n(a(),1),f(),c(),g=l(),_={title:`Composants/Pagination`,component:u,argTypes:{current:{control:`number`,description:`Page courante, 1-indexée.`},total:{control:`number`,description:`Nombre total d'éléments, pas de pages.`},pageSize:{control:`number`,description:`Nombre d'éléments par page.`},showSizeChanger:{control:`boolean`,description:`Sélecteur « n / page ». À activer sur les gros volumes.`},pageSizeOptions:{control:!1},onChange:{control:!1}},args:{current:1,total:180,pageSize:10,showSizeChanger:!0,onChange:()=>{}},decorators:[e=>(0,g.jsx)(`div`,{style:{background:s.bgContainer,padding:r.space20,borderRadius:r.radiusCard},children:(0,g.jsx)(e,{})})]},v={render:()=>(0,g.jsx)(m,{total:180})},y={args:{current:1,total:180}},b={args:{current:18,total:180}},x={render:()=>(0,g.jsx)(m,{total:24,showSizeChanger:!1})},S={render:()=>(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`div`,{style:{border:`1px solid ${s.borderInput}`,borderRadius:r.radiusBase,padding:r.space16,color:s.textLighter,textAlign:`center`},children:`Tableau`}),(0,g.jsx)(m,{total:180})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Demo total={180} />
}`,...v.parameters?.docs?.source},description:{story:`18 pages : ellipsis au milieu, première et dernière toujours atteignables.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    current: 1,
    total: 180
  }
}`,...y.parameters?.docs?.source},description:{story:`Premières pages : « précédent » désactivé.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    current: 18,
    total: 180
  }
}`,...b.parameters?.docs?.source},description:{story:`Dernière page : « suivant » désactivé.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Demo total={24} showSizeChanger={false} />
}`,...x.parameters?.docs?.source},description:{story:`Petit volume : pas de sélecteur de taille, il n'apporterait rien.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <div style={{
      border: \`1px solid \${semantic.borderInput}\`,
      borderRadius: scale.radiusBase,
      padding: scale.space16,
      color: semantic.textLighter,
      textAlign: 'center'
    }}>
        Tableau
      </div>
      <Demo total={180} />
    </div>
}`,...S.parameters?.docs?.source},description:{story:`En bas d'un tableau, sa seule position : à droite, sous la dernière ligne.`,...S.parameters?.docs?.description}}},C=[`BacASable`,`PremierePage`,`DernierePage`,`PetitVolume`,`SousUnTableau`]}));w();export{v as BacASable,b as DernierePage,x as PetitVolume,y as PremierePage,S as SousUnTableau,C as __namedExportsOrder,_ as default,w as n,p as t};