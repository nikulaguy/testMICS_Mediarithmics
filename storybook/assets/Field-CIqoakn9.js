import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{a as n,gt as r,o as i,r as a,s as o,t as s}from"./iframe-BvD6eUld.js";function c({label:e,message:t,state:r=`default`,required:a,width:s,children:c}){let d=(0,l.useId)(),f=`${d}-message`,p=r===`error`;return(0,u.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:n.space4,width:s},children:[e&&(0,u.jsxs)(`label`,{htmlFor:d,style:{...o.bodyMedium,color:i.textDarker},children:[e,a&&(0,u.jsx)(`span`,{"aria-hidden":!0,style:{color:i.error,marginInlineStart:2},children:`*`})]}),c({id:d,"aria-describedby":t?f:void 0,"aria-invalid":p||void 0,disabled:r===`disabled`,required:a||void 0,status:p?`error`:void 0}),t&&(0,u.jsx)(`span`,{id:f,role:p?`alert`:void 0,style:{...o.body,color:p?i.error:i.textLighter},children:t})]})}var l,u,d=e((()=>{l=t(r(),1),a(),u=s(),c.__docgenInfo={description:`Enveloppe de champ : label + contrôle + message (Figma Input 14:16, Select 14:30).

En production, label et message sont portés par le FormItem d'Ant Design, pas par
le champ. La maquette les intègre au composant ; cette enveloppe fait de même, et
c'est elle qui garantit que le label est un vrai <label for> et que le message est
relié au contrôle par aria-describedby.

Elle prend une fonction en enfant pour transmettre au contrôle les identifiants et
les attributs ARIA calculés — un champ ne les recompose jamais lui-même.`,methods:[],displayName:`Field`,props:{label:{required:!1,tsType:{name:`string`},description:`Libellé visible au-dessus du champ. Obligatoire, sauf pattern de recherche.`},message:{required:!1,tsType:{name:`string`},description:`Texte d'aide sous le champ. Remplacé par le message d'erreur en état error.`},state:{required:!1,tsType:{name:`union`,raw:`'default' | 'error' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'disabled'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},required:{required:!1,tsType:{name:`boolean`},description:"Champ obligatoire : ajoute l'astérisque et l'attribut `required` du contrôle."},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Largeur du champ. Identique dans tout un formulaire, 600 au maximum.`},children:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(control: {
  id: string;
  'aria-describedby': string | undefined;
  'aria-invalid': true | undefined;
  disabled: boolean;
  required: boolean | undefined;
  status: 'error' | undefined;
}) => ReactNode`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{
  id: string;
  'aria-describedby': string | undefined;
  'aria-invalid': true | undefined;
  disabled: boolean;
  required: boolean | undefined;
  status: 'error' | undefined;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`aria-describedby`,value:{name:`union`,raw:`string | undefined`,elements:[{name:`string`},{name:`undefined`}],required:!0}},{key:`aria-invalid`,value:{name:`union`,raw:`true | undefined`,elements:[{name:`literal`,value:`true`},{name:`undefined`}],required:!0}},{key:`disabled`,value:{name:`boolean`,required:!0}},{key:`required`,value:{name:`union`,raw:`boolean | undefined`,elements:[{name:`boolean`},{name:`undefined`}],required:!0}},{key:`status`,value:{name:`union`,raw:`'error' | undefined`,elements:[{name:`literal`,value:`'error'`},{name:`undefined`}],required:!0}}]}},name:`control`}],return:{name:`ReactNode`}}},description:``}}}}));export{d as n,c as t};