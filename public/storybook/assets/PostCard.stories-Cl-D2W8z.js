import{j as e}from"./jsx-runtime-BaIkynOJ.js";import{c as d,L as a,U as x}from"./user-CLdJ1Sga.js";import{n as u}from"./image-sTH8Jfnp.js";import{f as h}from"./utils-DaoXhp0R.js";import"./iframe-D9riDlGJ.js";import"./preload-helper-PPVm8Dsz.js";import"./use-merged-ref-kMSNbEDn.js";/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],f=d("calendar",g);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],j=d("clock",y);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],b=d("tag",v);function m({post:s,featured:t=!1}){const p=t?"rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300":"rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300";return e.jsxs("article",{className:p,children:[s.image&&e.jsx("div",{className:"relative",children:e.jsx(a,{href:`/blog/${s.slug}`,children:e.jsx("div",{className:`relative ${t?"h-48":"h-32"} w-full`,children:e.jsx(u,{src:s.image,alt:s.title,fill:!0,className:"object-cover hover:scale-105 transition-transform duration-300",sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"})})})}),e.jsxs("div",{className:s.image?"p-6":"space-y-3 p-6",children:[t&&e.jsx("div",{className:"flex items-center",children:e.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800",children:"Featured"})}),e.jsxs("div",{children:[e.jsx(a,{href:`/blog/${s.slug}`,children:e.jsx("h2",{className:`font-bold text-gray-900 hover:text-blue-600 transition-colors ${t?"text-2xl":"text-xl"}`,children:s.title})}),e.jsx("p",{className:"mt-2 text-gray-600 leading-relaxed",children:s.excerpt})]}),e.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-500",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(f,{className:"w-4 h-4"}),e.jsx("span",{children:h(s.date)})]}),e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(x,{className:"w-4 h-4"}),e.jsx("span",{children:s.author})]}),e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(j,{className:"w-4 h-4"}),e.jsx("span",{children:"5 min read"})]})]}),s.tags&&s.tags.length>0&&e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(b,{className:"w-4 h-4 text-gray-400"}),e.jsx("div",{className:"flex flex-wrap gap-1",children:s.tags.map(i=>e.jsx(a,{href:`/blog/tags/${i.toLowerCase()}`,className:"inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors",children:i},i))})]}),e.jsx("div",{className:"pt-2",children:e.jsx(a,{href:`/blog/${s.slug}`,className:"inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors",children:"Read more →"})})]})]})}m.__docgenInfo={description:"",methods:[],displayName:"PostCard",props:{post:{required:!0,tsType:{name:"BlogPostMetadata"},description:""},featured:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const c={slug:"sample-post",title:"Building Modern Web Apps with Next.js",excerpt:"Learn how to build scalable, performant web applications using Next.js 14 and the App Router.",date:"2024-10-11",author:"Aaron Stanley King",tags:["nextjs","react","web-development","tutorial"],featured:!1},w={...c,title:"Welcome to My Blog",excerpt:"This is the first post on my new Next.js blog hosted on Azure Static Web Apps.",featured:!0,tags:["welcome","nextjs","azure","storybook"]},W={title:"Components/PostCard",component:m,parameters:{layout:"padded",docs:{description:{component:"A card component for displaying blog post summaries with metadata, tags, and navigation."}}},argTypes:{featured:{control:"boolean",description:"Whether this is a featured post with enhanced styling"}}},r={args:{post:c,featured:!1}},o={args:{post:w,featured:!0}},n={args:{post:{...c,tags:["nextjs","react","typescript","storybook","azure","web-development","tutorial","frontend"]},featured:!1}},l={args:{post:{...c,tags:[]},featured:!1}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    post: mockPost,
    featured: false
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    post: mockFeaturedPost,
    featured: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    post: {
      ...mockPost,
      tags: ['nextjs', 'react', 'typescript', 'storybook', 'azure', 'web-development', 'tutorial', 'frontend']
    },
    featured: false
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    post: {
      ...mockPost,
      tags: []
    },
    featured: false
  }
}`,...l.parameters?.docs?.source}}};const $=["Default","Featured","WithManyTags","WithoutTags"];export{r as Default,o as Featured,n as WithManyTags,l as WithoutTags,$ as __namedExportsOrder,W as default};
