import{h as e,i,_ as d,e as t,f as s,g as o,j as l,k as r,l as a}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";function n(){return(n=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var d=arguments[i];for(var t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t])}return e}).apply(this,arguments)}const m={},v="wrapper";function c(e){let{components:d}=e,s=o(e,["components"]);return t(v,n({},m,s,{components:d,mdxType:"MDXLayout"}),t(l,{title:"No Javascript|layouts/responsive",mdxType:"Meta"}),t("h1",null,"General Layout Information"),t("h2",null,"Deciding Between Flex and Grid"),t("p",null,"Here's a side-by-side comparison of flex and grid. Change the size of the page to\nnotice how the layouts differ in response to the screen width."),t("p",null,"Particularly important is that ",t("inlineCode",{parentName:"p"},"grid")," does additional work to align items by column,\nwhereas the items in ",t("inlineCode",{parentName:"p"},"flex")," are simply placed next to each other."),t(r,{mdxType:"Preview"},t(a,{name:"flex-vs-grid",mdxType:"Story"},i`
      <h3><code>flex</code></h3>
      <div class="flexw bordered">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is very long</div>
        <div class="demo">list item four</div>
        <div class="demo">list item five is even longer than item three</div>
      </div>
      <h3><code>grid</code></h3>
      <div class="grid-3 bordered">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is very long</div>
        <div class="demo">list item four</div>
        <div class="demo">list item five is even longer than item three</div>
      </div>
    `)),t("h3",null,"Min-Width Helpers"),t("p",null,"The ",t("inlineCode",{parentName:"p"},"min-width")," helpers resolve the percentage problem by specifying a minimum bound for\nhow wide the pixel width or responding to screen size.\nThey are very useful for quick-and-dirty responsive design:"),t("p",null,t("em",{parentName:"p"},"NOTE: use ",t("inlineCode",{parentName:"em"},".fill")," to take up 100% of the available horizontal and vertical space of the parent")),t(r,{mdxType:"Preview"},t(a,{name:"min-width-helpers",mdxType:"Story"},i`
      <div class="flexw flex-between demo">
        <div class="bordered half-width min-300"><code>.half-width.min-300</code>: expands to take up to 500px of screen width</div>
        <div class="bordered third-width min-200"><code>.third-width.min-200</code>: takes up 100% of the parent element</div>
      </div>
    `)),t("h3",null,"Max-Width Helpers"),t("p",null,"The ",t("inlineCode",{parentName:"p"},"max-width"),' helpers solve the "percentage problem" for large screens, by specifying a pixel width\nor responding to screen size. They are very useful for quick-and-dirty responsive design.'),t("p",null,"Here, without specifying a percentage of the page, we're able to display these side by side until they collide."),t("p",null,t("em",{parentName:"p"},"NOTE: use ",t("inlineCode",{parentName:"em"},".fill")," to take up 100% of the available horizontal and vertical space of the parent")),t(r,{mdxType:"Preview"},t(a,{name:"max-width-helpers",mdxType:"Story"},i`
      <div class="flexw flex-between demo">
        <div class="bordered fill max-500"><code>.max-500</code>: expands to take up to 500px of screen width</div>
        <div class="bordered fill max-300"><code>.max-300</code>: takes up to 300px of screen width</div>
      </div>
    `)))}c.isMDXComponent=!0;const p=e(i`
      <h3><code>flex</code></h3>
      <div class="flexw bordered">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is very long</div>
        <div class="demo">list item four</div>
        <div class="demo">list item five is even longer than item three</div>
      </div>
      <h3><code>grid</code></h3>
      <div class="grid-3 bordered">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is very long</div>
        <div class="demo">list item four</div>
        <div class="demo">list item five is even longer than item three</div>
      </div>
    `);p.story={},p.story.name="flex-vs-grid",p.story.parameters={mdxSource:'html`\n      <h3><code>flex</code></h3>\n      <div class="flexw bordered">\n        <div class="demo">list item one</div>\n        <div class="demo">list item two</div>\n        <div class="demo">list item three is very long</div>\n        <div class="demo">list item four</div>\n        <div class="demo">list item five is even longer than item three</div>\n      </div>\n      <h3><code>grid</code></h3>\n      <div class="grid-3 bordered">\n        <div class="demo">list item one</div>\n        <div class="demo">list item two</div>\n        <div class="demo">list item three is very long</div>\n        <div class="demo">list item four</div>\n        <div class="demo">list item five is even longer than item three</div>\n      </div>\n    `'};const h=e(i`
      <div class="flexw flex-between demo">
        <div class="bordered half-width min-300"><code>.half-width.min-300</code>: expands to take up to 500px of screen width</div>
        <div class="bordered third-width min-200"><code>.third-width.min-200</code>: takes up 100% of the parent element</div>
      </div>
    `);h.story={},h.story.name="min-width-helpers",h.story.parameters={mdxSource:'html`\n      <div class="flexw flex-between demo">\n        <div class="bordered half-width min-300"><code>.half-width.min-300</code>: expands to take up to 500px of screen width</div>\n        <div class="bordered third-width min-200"><code>.third-width.min-200</code>: takes up 100% of the parent element</div>\n      </div>\n    `'};const f=e(i`
      <div class="flexw flex-between demo">
        <div class="bordered fill max-500"><code>.max-500</code>: expands to take up to 500px of screen width</div>
        <div class="bordered fill max-300"><code>.max-300</code>: takes up to 300px of screen width</div>
      </div>
    `);f.story={},f.story.name="max-width-helpers",f.story.parameters={mdxSource:'html`\n      <div class="flexw flex-between demo">\n        <div class="bordered fill max-500"><code>.max-500</code>: expands to take up to 500px of screen width</div>\n        <div class="bordered fill max-300"><code>.max-300</code>: takes up to 300px of screen width</div>\n      </div>\n    `'};const x={title:"No Javascript|layouts/responsive",includeStories:["flexVsGrid","minWidthHelpers","maxWidthHelpers"]},w={"flex-vs-grid":"no-javascript-layouts-responsive--flex-vs-grid","min-width-helpers":"no-javascript-layouts-responsive--min-width-helpers","max-width-helpers":"no-javascript-layouts-responsive--max-width-helpers"};x.parameters=x.parameters||{},x.parameters.docs=d({},x.parameters.docs||{},{page:()=>t(s,{mdxStoryNameToId:w},t(c,null))});export default x;export{p as flexVsGrid,f as maxWidthHelpers,h as minWidthHelpers};
//# sourceMappingURL=responsive.stories-ce60e26e.js.map
