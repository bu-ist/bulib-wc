import{h as e,i as t,_ as i,e as a,f as s,g as n,j as o,k as d,l as r}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}const c={},h="wrapper";function p(e){let{components:i}=e,s=n(e,["components"]);return a(h,l({},c,s,{components:i,mdxType:"MDXLayout"}),a(o,{title:"No Javascript|layouts/general",mdxType:"Meta"}),a("h1",null,"General Layout Information"),a("h2",null,"Secondary Menu"),a("p",null,"The secondary menu is a quick way to visually distinguish a part of the page. It can be used for navigation,\nfor highlighting main calls to action, or other purposes. "),a(d,{mdxType:"Preview"},a(r,{name:"secondary-menu",mdxType:"Story"},t`
      <div class="secondary-menu max-500"> 
        <h3>Please Confirm Something</h3>
        <p>This is a sample confirmation message showing the use of both button styles</p>
        <div>
          <a class="bulib-btn" href="javascript:void()">Confirm</a>
          <a class="bulib-btn btn-secondary" href="javascript:void()">Cancel</a>
        </div>
      </div>
    `)),a("h2",null,"Main with Sidebar"),a("p",null,"The ",a("inlineCode",{parentName:"p"},".main-with-sidebar")," is a common responsive pattern that provides a core, central area with a\nsidemenu navigatior to other sites that moves to the top for smaller screens."),a(d,{mdxType:"Preview"},a(r,{name:"sidebar-layout",mdxType:"Story"},t`
      <div class="main-with-sidebar"> 
        <div class="min-400">
          <p>This is a sample confirmation message showing the use of both button styles</p>
          <div>
            <a class="bulib-btn" href="javascript:void()">Confirm</a>
            <a class="bulib-btn btn-secondary" href="javascript:void()">Cancel</a>
          </div>
        </div>
        <div class="secondary-menu">
          <ul>
            <li><a>link one</a></li>
            <li><a>link two</a></li>
            <li><a>link three</a></li>
            <li><a>link four</a></li>
          </ul>
        </div>
      </div>
    `)),a("h2",null,"Zebra Styling"),a("p",null,"Marketing-style sites often alternate between colors and having a lot of padding (e.g. ",a("inlineCode",{parentName:"p"},"bu.edu/library/firstyear"),")"),a(d,{mdxType:"Preview"},a(r,{name:"zebra",mdxType:"Story"},t`
      <div class="zebra">
        <section>section one</section>
        <section>section two</section>
        <section>section three</section>
        <section>section four</section>
        <section>section five</section>
      </div>
    `)),a("h2",null,"Percent Width Helpers"),a("p",null,"There are many times where you may want to set the width of an element with a percentage. "),a("p",null,a("em",{parentName:"p"},"NOTE: working with percentages often requires extra work to accomodate screen size")),a(d,{mdxType:"Preview"},a(r,{name:"width-helpers",mdxType:"Story"},t`
      <div class="demo">
        <div class="bordered auto-width"><code>.auto-width</code>: takes up the default width</div>
        <div class="bordered full-width"><code>.full-width</code>: takes up 100% of the parent element</div>
        <div class="bordered half-width"><code>.half-width</code>: takes up 50% of the parent element</div>
        <div class="bordered third-width"><code>.third-width</code>: takes up 33% of the parent element</div>
      </div>
    `)),a("p",null,"These are helpful when organizing a horizontal display, but must be adapted for small screens:"),a(d,{mdxType:"Preview"},a(r,{name:"width-helpers-responsive",mdxType:"Story"},t`
      <div class="flexw flex-between demo">
        <div class="bordered half-width"><code>.half-width</code>: takes up 50% of the parent element</div>
        <div class="bordered third-width"><code>.third-width</code>: takes up a third of the parent element</div>
      </div>
    `)))}p.isMDXComponent=!0;const v=e(t`
      <div class="secondary-menu max-500"> 
        <h3>Please Confirm Something</h3>
        <p>This is a sample confirmation message showing the use of both button styles</p>
        <div>
          <a class="bulib-btn" href="javascript:void()">Confirm</a>
          <a class="bulib-btn btn-secondary" href="javascript:void()">Cancel</a>
        </div>
      </div>
    `);v.story={},v.story.name="secondary-menu",v.story.parameters={mdxSource:'html`\n      <div class="secondary-menu max-500"> \n        <h3>Please Confirm Something</h3>\n        <p>This is a sample confirmation message showing the use of both button styles</p>\n        <div>\n          <a class="bulib-btn" href="javascript:void()">Confirm</a>\n          <a class="bulib-btn btn-secondary" href="javascript:void()">Cancel</a>\n        </div>\n      </div>\n    `'};const m=e(t`
      <div class="main-with-sidebar"> 
        <div class="min-400">
          <p>This is a sample confirmation message showing the use of both button styles</p>
          <div>
            <a class="bulib-btn" href="javascript:void()">Confirm</a>
            <a class="bulib-btn btn-secondary" href="javascript:void()">Cancel</a>
          </div>
        </div>
        <div class="secondary-menu">
          <ul>
            <li><a>link one</a></li>
            <li><a>link two</a></li>
            <li><a>link three</a></li>
            <li><a>link four</a></li>
          </ul>
        </div>
      </div>
    `);m.story={},m.story.name="sidebar-layout",m.story.parameters={mdxSource:'html`\n      <div class="main-with-sidebar"> \n        <div class="min-400">\n          <p>This is a sample confirmation message showing the use of both button styles</p>\n          <div>\n            <a class="bulib-btn" href="javascript:void()">Confirm</a>\n            <a class="bulib-btn btn-secondary" href="javascript:void()">Cancel</a>\n          </div>\n        </div>\n        <div class="secondary-menu">\n          <ul>\n            <li><a>link one</a></li>\n            <li><a>link two</a></li>\n            <li><a>link three</a></li>\n            <li><a>link four</a></li>\n          </ul>\n        </div>\n      </div>\n    `'};const u=e(t`
      <div class="zebra">
        <section>section one</section>
        <section>section two</section>
        <section>section three</section>
        <section>section four</section>
        <section>section five</section>
      </div>
    `);u.story={},u.story.name="zebra",u.story.parameters={mdxSource:'html`\n      <div class="zebra">\n        <section>section one</section>\n        <section>section two</section>\n        <section>section three</section>\n        <section>section four</section>\n        <section>section five</section>\n      </div>\n    `'};const b=e(t`
      <div class="demo">
        <div class="bordered auto-width"><code>.auto-width</code>: takes up the default width</div>
        <div class="bordered full-width"><code>.full-width</code>: takes up 100% of the parent element</div>
        <div class="bordered half-width"><code>.half-width</code>: takes up 50% of the parent element</div>
        <div class="bordered third-width"><code>.third-width</code>: takes up 33% of the parent element</div>
      </div>
    `);b.story={},b.story.name="width-helpers",b.story.parameters={mdxSource:'html`\n      <div class="demo">\n        <div class="bordered auto-width"><code>.auto-width</code>: takes up the default width</div>\n        <div class="bordered full-width"><code>.full-width</code>: takes up 100% of the parent element</div>\n        <div class="bordered half-width"><code>.half-width</code>: takes up 50% of the parent element</div>\n        <div class="bordered third-width"><code>.third-width</code>: takes up 33% of the parent element</div>\n      </div>\n    `'};const f=e(t`
      <div class="flexw flex-between demo">
        <div class="bordered half-width"><code>.half-width</code>: takes up 50% of the parent element</div>
        <div class="bordered third-width"><code>.third-width</code>: takes up a third of the parent element</div>
      </div>
    `);f.story={},f.story.name="width-helpers-responsive",f.story.parameters={mdxSource:'html`\n      <div class="flexw flex-between demo">\n        <div class="bordered half-width"><code>.half-width</code>: takes up 50% of the parent element</div>\n        <div class="bordered third-width"><code>.third-width</code>: takes up a third of the parent element</div>\n      </div>\n    `'};const w={title:"No Javascript|layouts/general",includeStories:["secondaryMenu","sidebarLayout","zebra","widthHelpers","widthHelpersResponsive"]},y={"secondary-menu":"no-javascript-layouts-general--secondary-menu","sidebar-layout":"no-javascript-layouts-general--sidebar-layout",zebra:"no-javascript-layouts-general--zebra","width-helpers":"no-javascript-layouts-general--width-helpers","width-helpers-responsive":"no-javascript-layouts-general--width-helpers-responsive"};w.parameters=w.parameters||{},w.parameters.docs=i({},w.parameters.docs||{},{page:()=>a(s,{mdxStoryNameToId:y},a(p,null))});export default w;export{v as secondaryMenu,m as sidebarLayout,b as widthHelpers,f as widthHelpersResponsive,u as zebra};
//# sourceMappingURL=layouts-about.stories-6be309aa.js.map
