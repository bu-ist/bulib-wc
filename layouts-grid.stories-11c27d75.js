import{h as e,i,_ as s,e as t,f as d,g as o,j as l,k as n,l as r}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";function a(){return(a=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e}).apply(this,arguments)}const m={},v="wrapper";function c(e){let{components:s}=e,d=o(e,["components"]);return t(v,a({},m,d,{components:s,mdxType:"MDXLayout"}),t(l,{title:"No Javascript|layouts/grid",mdxType:"Meta"}),t("h1",null,"Grid Layout"),t("p",null,"Grid layouts aligns things in a specified number of columns (determined by ",t("inlineCode",{parentName:"p"},"grid-template-layout"),").\nThe number of columns is the same regardless of the width of the page, and the content within\nthem stretches to fit. "),t("p",null,"If unspecified, ",t("inlineCode",{parentName:"p"},".grid")," defaults to a single column, which is normally not what you want:"),t(n,{mdxType:"Preview"},t(r,{name:"grid",mdxType:"Story"},i`
      <div class="grid">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is longer</div>
        <div class="demo">list item four</div>
      </div>
    `)),t("h2",null,"Specifying the Number of columns"),t("p",null,"To specify the number of columns in our helpers, use ",t("inlineCode",{parentName:"p"},".grid-2"),", ",t("inlineCode",{parentName:"p"},".grid-3"),", or ",t("inlineCode",{parentName:"p"},".grid-4"),"."),t("h3",null,"Two Columns ",t("inlineCode",{parentName:"h3"},".grid-2")),t(n,{mdxType:"Preview"},t(r,{name:"grid-2",mdxType:"Story"},i`
      <div class="grid-2">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is longer</div>
        <div class="demo">list item four</div>
        <div class="demo">list item five is even longer than item three</div>
      </div>
    `)),t("h3",null,"Three Columns ",t("inlineCode",{parentName:"h3"},".grid-3")),t(n,{mdxType:"Preview"},t(r,{name:"grid-3",mdxType:"Story"},i`
      <div class="grid-3">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is longer</div>
        <div class="demo">list item four</div>
        <div class="demo">list item five is even longer than item three</div>
      </div>
    `)),t("h3",null,"Four Columns ",t("inlineCode",{parentName:"h3"},".grid-4")),t(n,{mdxType:"Preview"},t(r,{name:"grid-4",mdxType:"Story"},i`
      <div class="grid-4">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is longer</div>
        <div class="demo">list item four is even longer than item three</div>
        <div class="demo">list item five</div>
        <div class="demo">list item six</div>
        <div class="demo">list item seven</div>
      </div>
    `)),t("h2",null,"Responsive"),t("p",null,"To make the base ",t("inlineCode",{parentName:"p"},"grid")," layout more responsive, try decreasing the number of columns you're using\nfor smaller width using ",t("inlineCode",{parentName:"p"},"grid-template-columns")," and ",t("inlineCode",{parentName:"p"},"@media")," queries in your custom css:"),t("pre",null,t("code",a({parentName:"pre"},{className:"language-css"}),"/* reduce the number of columns for a particular grid section for small screens */\n@media only screen and (max-width: 850px){\n  div.grid-4.grid-responsive { grid-template-columns: auto auto; }\n}\n")),t(n,{mdxType:"Preview"},t(r,{name:"grid-responsive",mdxType:"Story"},i`
      <style type="text/css">
        @media only screen and (max-width: 850px){
          div.grid-4.grid-responsive { grid-template-columns: auto auto; }
        }
      </style>
      <div class="grid-4 grid-responsive">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is longer</div>
        <div class="demo">list item four is even longer than item three</div>
      </div>
    `)),t("h2",null,"Advanced Layout"),t("p",null,"You can do ",t("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"}),"quite a lot"),"\nwith CSS Grid beyond just specifying columns, and even layout whole pages and complex\nUIs whose contents shift at various widths."),t("p",null,"See the ",t("a",a({parentName:"p"},{href:"?path=/story/branding-bulib-footer--default-story"}),t("inlineCode",{parentName:"a"},"bulib-footer")," web component"),"\nfor an example of this. "))}c.isMDXComponent=!0;const p=e(i`
      <div class="grid">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is longer</div>
        <div class="demo">list item four</div>
      </div>
    `);p.story={},p.story.name="grid",p.story.parameters={mdxSource:'html`\n      <div class="grid">\n        <div class="demo">list item one</div>\n        <div class="demo">list item two</div>\n        <div class="demo">list item three is longer</div>\n        <div class="demo">list item four</div>\n      </div>\n    `'};const g=e(i`
      <div class="grid-2">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is longer</div>
        <div class="demo">list item four</div>
        <div class="demo">list item five is even longer than item three</div>
      </div>
    `);g.story={},g.story.name="grid-2",g.story.parameters={mdxSource:'html`\n      <div class="grid-2">\n        <div class="demo">list item one</div>\n        <div class="demo">list item two</div>\n        <div class="demo">list item three is longer</div>\n        <div class="demo">list item four</div>\n        <div class="demo">list item five is even longer than item three</div>\n      </div>\n    `'};const u=e(i`
      <div class="grid-3">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is longer</div>
        <div class="demo">list item four</div>
        <div class="demo">list item five is even longer than item three</div>
      </div>
    `);u.story={},u.story.name="grid-3",u.story.parameters={mdxSource:'html`\n      <div class="grid-3">\n        <div class="demo">list item one</div>\n        <div class="demo">list item two</div>\n        <div class="demo">list item three is longer</div>\n        <div class="demo">list item four</div>\n        <div class="demo">list item five is even longer than item three</div>\n      </div>\n    `'};const h=e(i`
      <div class="grid-4">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is longer</div>
        <div class="demo">list item four is even longer than item three</div>
        <div class="demo">list item five</div>
        <div class="demo">list item six</div>
        <div class="demo">list item seven</div>
      </div>
    `);h.story={},h.story.name="grid-4",h.story.parameters={mdxSource:'html`\n      <div class="grid-4">\n        <div class="demo">list item one</div>\n        <div class="demo">list item two</div>\n        <div class="demo">list item three is longer</div>\n        <div class="demo">list item four is even longer than item three</div>\n        <div class="demo">list item five</div>\n        <div class="demo">list item six</div>\n        <div class="demo">list item seven</div>\n      </div>\n    `'};const y=e(i`
      <style type="text/css">
        @media only screen and (max-width: 850px){
          div.grid-4.grid-responsive { grid-template-columns: auto auto; }
        }
      </style>
      <div class="grid-4 grid-responsive">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is longer</div>
        <div class="demo">list item four is even longer than item three</div>
      </div>
    `);y.story={},y.story.name="grid-responsive",y.story.parameters={mdxSource:'html`\n      <style type="text/css">\n        @media only screen and (max-width: 850px){\n          div.grid-4.grid-responsive { grid-template-columns: auto auto; }\n        }\n      </style>\n      <div class="grid-4 grid-responsive">\n        <div class="demo">list item one</div>\n        <div class="demo">list item two</div>\n        <div class="demo">list item three is longer</div>\n        <div class="demo">list item four is even longer than item three</div>\n      </div>\n    `'};const f={title:"No Javascript|layouts/grid",includeStories:["grid","grid2","grid3","grid4","gridResponsive"]},w={grid:"no-javascript-layouts-grid--grid","grid-2":"no-javascript-layouts-grid--grid-2","grid-3":"no-javascript-layouts-grid--grid-3","grid-4":"no-javascript-layouts-grid--grid-4","grid-responsive":"no-javascript-layouts-grid--grid-responsive"};f.parameters=f.parameters||{},f.parameters.docs=s({},f.parameters.docs||{},{page:()=>t(d,{mdxStoryNameToId:w},t(c,null))});export default f;export{p as grid,g as grid2,u as grid3,h as grid4,y as gridResponsive};
//# sourceMappingURL=layouts-grid.stories-11c27d75.js.map
