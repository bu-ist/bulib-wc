import{h as e,i,_ as s,e as t,f as d,g as l,j as o,k as a,l as v}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";function n(){return(n=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e}).apply(this,arguments)}const r={},m="wrapper";function c(e){let{components:s}=e,d=l(e,["components"]);return t(m,n({},r,d,{components:s,mdxType:"MDXLayout"}),t(o,{title:"No Javascript|layouts/flex",mdxType:"Meta"}),t("h1",null,"Flex layouts"),t("p",null,"The ",t("inlineCode",{parentName:"p"},"display: flex")," layout is best for when you want to display things horizontally, or\nfor all-purpose responsive behavior where you want to have things wrap when their ",t("inlineCode",{parentName:"p"},"max-width"),"s collide."),t("h2",null,"Flex-Wrap"),t("p",null,"The default behavior for ",t("inlineCode",{parentName:"p"},"display: flex")," is to wrap (move to the next line when it overflows). You can activate\nthis style using ",t("inlineCode",{parentName:"p"},".flexw"),". "),t("p",null,t("em",{parentName:"p"},"NOTE: as items are moved to the next line, they are not automatically aligned for you, just shifted to the next row")),t(a,{mdxType:"Preview"},t(v,{name:"flex-wrap",mdxType:"Story"},i`
      <div class="flexw bordered">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is very long</div>
        <div class="demo">list item four</div>
        <div class="demo">list item five is even longer than item three</div>
      </div>
    `)),t("h2",null,"Preventing Wrapping"),t("p",null,"If you want to display things horizontally, but to prevent them from wrapping, use ",t("inlineCode",{parentName:"p"},".flexnw")," instead to add the ",t("inlineCode",{parentName:"p"},"flex-wrap: no-wrap"),"."),t("p",null,t("em",{parentName:"p"},"NOTE: if you do this, you'll have to make sure to account for the overflow and/or any responsive behavior")),t(a,{mdxType:"Preview"},t(v,{name:"flex-no-wrap",mdxType:"Story"},i`
      <div class="flexnw bordered">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is very long</div>
        <div class="demo">list item four</div>
        <div class="demo">list item five is even longer than item three</div>
        <div class="demo">list item six</div>
      </div>
    `)),t("h3",null,"Arranging Flex Items"),t("p",null,"Items that have the ",t("inlineCode",{parentName:"p"},"flex")," display can be horizontally aligned with the ",t("inlineCode",{parentName:"p"},"justify-content")," classes.\nThere are a number of options to choose from:"),t(a,{mdxType:"Preview"},t(v,{name:"flex-center",mdxType:"Story"},i`
      <code>.flex-center</code>
      <div class="flexw flex-center">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three</div>
      </div>
      <code>.flex-between</code>
      <div class="flexw flex-between">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three</div>
      </div>
      <code>.flex-evenly</code>
      <div class="flexw flex-evenly">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three</div>
      </div>
      <code>.flex-around</code>
      <div class="flexw flex-around">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three</div>
      </div>
    `)),t("h3",null,"Wrap-Direction"),t("p",null,"By default, flex will wrap in the order of the list from left to write. You can reverse the order of this\nby adding ",t("inlineCode",{parentName:"p"},".wrap-reverse")," to your ",t("inlineCode",{parentName:"p"},"div.flexw")),t(a,{mdxType:"Preview"},t(v,{name:"wrap-reverse",mdxType:"Story"},i`
      <div class="flexw wrap-reverse">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is very long</div>
        <div class="demo">list item four</div>
        <div class="demo">list item five is even longer than item three</div>
      </div>
    `)))}c.isMDXComponent=!0;const f=e(i`
      <div class="flexw bordered">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is very long</div>
        <div class="demo">list item four</div>
        <div class="demo">list item five is even longer than item three</div>
      </div>
    `);f.story={},f.story.name="flex-wrap",f.story.parameters={mdxSource:'html`\n      <div class="flexw bordered">\n        <div class="demo">list item one</div>\n        <div class="demo">list item two</div>\n        <div class="demo">list item three is very long</div>\n        <div class="demo">list item four</div>\n        <div class="demo">list item five is even longer than item three</div>\n      </div>\n    `'};const p=e(i`
      <div class="flexnw bordered">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is very long</div>
        <div class="demo">list item four</div>
        <div class="demo">list item five is even longer than item three</div>
        <div class="demo">list item six</div>
      </div>
    `);p.story={},p.story.name="flex-no-wrap",p.story.parameters={mdxSource:'html`\n      <div class="flexnw bordered">\n        <div class="demo">list item one</div>\n        <div class="demo">list item two</div>\n        <div class="demo">list item three is very long</div>\n        <div class="demo">list item four</div>\n        <div class="demo">list item five is even longer than item three</div>\n        <div class="demo">list item six</div>\n      </div>\n    `'};const x=e(i`
      <code>.flex-center</code>
      <div class="flexw flex-center">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three</div>
      </div>
      <code>.flex-between</code>
      <div class="flexw flex-between">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three</div>
      </div>
      <code>.flex-evenly</code>
      <div class="flexw flex-evenly">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three</div>
      </div>
      <code>.flex-around</code>
      <div class="flexw flex-around">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three</div>
      </div>
    `);x.story={},x.story.name="flex-center",x.story.parameters={mdxSource:'html`\n      <code>.flex-center</code>\n      <div class="flexw flex-center">\n        <div class="demo">list item one</div>\n        <div class="demo">list item two</div>\n        <div class="demo">list item three</div>\n      </div>\n      <code>.flex-between</code>\n      <div class="flexw flex-between">\n        <div class="demo">list item one</div>\n        <div class="demo">list item two</div>\n        <div class="demo">list item three</div>\n      </div>\n      <code>.flex-evenly</code>\n      <div class="flexw flex-evenly">\n        <div class="demo">list item one</div>\n        <div class="demo">list item two</div>\n        <div class="demo">list item three</div>\n      </div>\n      <code>.flex-around</code>\n      <div class="flexw flex-around">\n        <div class="demo">list item one</div>\n        <div class="demo">list item two</div>\n        <div class="demo">list item three</div>\n      </div>\n    `'};const w=e(i`
      <div class="flexw wrap-reverse">
        <div class="demo">list item one</div>
        <div class="demo">list item two</div>
        <div class="demo">list item three is very long</div>
        <div class="demo">list item four</div>
        <div class="demo">list item five is even longer than item three</div>
      </div>
    `);w.story={},w.story.name="wrap-reverse",w.story.parameters={mdxSource:'html`\n      <div class="flexw wrap-reverse">\n        <div class="demo">list item one</div>\n        <div class="demo">list item two</div>\n        <div class="demo">list item three is very long</div>\n        <div class="demo">list item four</div>\n        <div class="demo">list item five is even longer than item three</div>\n      </div>\n    `'};const h={title:"No Javascript|layouts/flex",includeStories:["flexWrap","flexNoWrap","flexCenter","wrapReverse"]},y={"flex-wrap":"no-javascript-layouts-flex--flex-wrap","flex-no-wrap":"no-javascript-layouts-flex--flex-no-wrap","flex-center":"no-javascript-layouts-flex--flex-center","wrap-reverse":"no-javascript-layouts-flex--wrap-reverse"};h.parameters=h.parameters||{},h.parameters.docs=s({},h.parameters.docs||{},{page:()=>t(d,{mdxStoryNameToId:y},t(c,null))});export default h;export{x as flexCenter,p as flexNoWrap,f as flexWrap,w as wrapReverse};
//# sourceMappingURL=layouts-flex.stories-286d09e6.js.map
