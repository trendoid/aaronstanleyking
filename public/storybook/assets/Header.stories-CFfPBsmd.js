import{j as e}from"./jsx-runtime-vMd2sqjC.js";import{c as a,L as i,U as h}from"./user-Dnz6Blrx.js";import{r as u}from"./iframe-Dlo-1D_s.js";import"./use-merged-ref-AItUOgO3.js";import"./preload-helper-PPVm8Dsz.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],m=a("book-open",x);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],f=a("house",b);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],g=a("mail",y);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],j=a("menu",v);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],N=a("x",w);function p(){const[o,d]=u.useState(!1),l=[{name:"Home",href:"/",icon:f},{name:"Blog",href:"/blog",icon:m},{name:"About",href:"/about",icon:h},{name:"Contact",href:"/contact",icon:g}];return e.jsx("header",{className:"bg-white shadow-sm border-b border-gray-200",children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsxs(i,{href:"/",className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center",children:e.jsx(m,{className:"w-5 h-5 text-white"})}),e.jsx("span",{className:"font-bold text-xl text-gray-900",children:"Aaron Stanley King"})]})}),e.jsx("nav",{className:"hidden md:flex space-x-8",children:l.map(s=>{const c=s.icon;return e.jsxs(i,{href:s.href,className:"flex items-center space-x-1 text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:[e.jsx(c,{className:"w-4 h-4"}),e.jsx("span",{children:s.name})]},s.name)})}),e.jsx("div",{className:"md:hidden",children:e.jsxs("button",{onClick:()=>d(!o),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500","aria-expanded":"false",children:[e.jsx("span",{className:"sr-only",children:"Open main menu"}),o?e.jsx(N,{className:"block h-6 w-6","aria-hidden":"true"}):e.jsx(j,{className:"block h-6 w-6","aria-hidden":"true"})]})})]}),o&&e.jsx("div",{className:"md:hidden",children:e.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2 mb-4",children:l.map(s=>{const c=s.icon;return e.jsxs(i,{href:s.href,className:"flex items-center space-x-2 text-gray-600 hover:text-blue-600 hover:bg-white block px-3 py-2 rounded-md text-base font-medium transition-colors",onClick:()=>d(!1),children:[e.jsx(c,{className:"w-5 h-5"}),e.jsx("span",{children:s.name})]},s.name)})})})]})})}p.__docgenInfo={description:"",methods:[],displayName:"Header"};const L={title:"Layout/Header",component:p,parameters:{layout:"fullscreen",docs:{description:{component:"The main navigation header component with responsive mobile menu."}}},tags:["autodocs"]},n={},t={parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Header displayed on mobile devices with hamburger menu."}}}},r={parameters:{viewport:{defaultViewport:"tablet"},docs:{description:{story:"Header displayed on tablet devices."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Header displayed on mobile devices with hamburger menu.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    },
    docs: {
      description: {
        story: 'Header displayed on tablet devices.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const O=["Default","Mobile","Tablet"];export{n as Default,t as Mobile,r as Tablet,O as __namedExportsOrder,L as default};
