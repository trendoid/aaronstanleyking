import{B as i}from"./button-Cfx4id3J.js";import"./jsx-runtime-BaIkynOJ.js";import"./iframe-D9riDlGJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DaoXhp0R.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,g={title:"UI/Button",component:i,parameters:{layout:"centered",docs:{description:{component:"A versatile button component with multiple variants and sizes."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline","ghost","link"],description:"Visual style variant of the button"},size:{control:"select",options:["default","sm","lg"],description:"Size of the button"},disabled:{control:"boolean",description:"Whether the button is disabled"}},args:{onClick:c()}},e={args:{children:"Button",variant:"default",size:"default"}},r={args:{children:"Outline Button",variant:"outline"}},t={args:{children:"Ghost Button",variant:"ghost"}},a={args:{children:"Link Button",variant:"link"}},s={args:{children:"Small Button",size:"sm"}},n={args:{children:"Large Button",size:"lg"}},o={args:{children:"Disabled Button",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outline Button',
    variant: 'outline'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Link Button',
    variant: 'link'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'sm'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'lg'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};const h=["Default","Outline","Ghost","Link","Small","Large","Disabled"];export{e as Default,o as Disabled,t as Ghost,n as Large,a as Link,r as Outline,s as Small,h as __namedExportsOrder,g as default};
