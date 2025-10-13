import{j as h}from"./jsx-runtime-vMd2sqjC.js";import{e as b}from"./iframe-Dlo-1D_s.js";import{c as v}from"./utils-DaoXhp0R.js";import"./preload-helper-PPVm8Dsz.js";const i=b.forwardRef(({className:l,variant:u="default",size:c="default",...d},m)=>{const p="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",g={default:"bg-blue-600 text-white hover:bg-blue-700",outline:"border border-gray-300 bg-white hover:bg-gray-50 text-gray-900",ghost:"hover:bg-gray-100 text-gray-900",link:"text-blue-600 underline-offset-4 hover:underline"},f={default:"h-10 px-4 py-2",sm:"h-8 px-3 text-xs",lg:"h-12 px-8 text-base"};return h.jsx("button",{className:v(p,g[u],f[c],l),ref:m,...d})});i.displayName="Button";i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outline' | 'ghost' | 'link'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'link'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'default' | 'sm' | 'lg'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const{fn:B}=__STORYBOOK_MODULE_TEST__,z={title:"UI/Button",component:i,parameters:{layout:"centered",docs:{description:{component:"A versatile button component with multiple variants and sizes."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline","ghost","link"],description:"Visual style variant of the button"},size:{control:"select",options:["default","sm","lg"],description:"Size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"}},args:{onClick:B()}},e={args:{children:"Button",variant:"default",size:"default"}},t={args:{children:"Outline Button",variant:"outline"}},a={args:{children:"Ghost Button",variant:"ghost"}},r={args:{children:"Link Button",variant:"link"}},n={args:{children:"Small Button",size:"sm"}},s={args:{children:"Large Button",size:"lg"}},o={args:{children:"Disabled Button",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outline Button',
    variant: 'outline'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Link Button',
    variant: 'link'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'sm'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'lg'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};const _=["Default","Outline","Ghost","Link","Small","Large","Disabled"];export{e as Default,o as Disabled,a as Ghost,s as Large,r as Link,t as Outline,n as Small,_ as __namedExportsOrder,z as default};
