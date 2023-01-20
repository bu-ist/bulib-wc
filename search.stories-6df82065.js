import{h as e,i as t,m as o,n as s,_ as r,e as a,f as n,g as i,j as l,k as p,l as b,o as c}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";import"./lit-element-fdaadb84.js";import"./google_analytix-df42f176.js";import"./bulib-search-d08aaee6.js";function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e}).apply(this,arguments)}const u={},d="wrapper";function m(e){let{components:r}=e,n=i(e,["components"]);return a(d,h({},u,n,{components:r,mdxType:"MDXLayout"}),a(l,{title:"Web Components|bulib-search",decorators:[o,s],parameters:{component:"bulib-search",options:{selectedPanel:"storybookjs/knobs/accessibility"}},mdxType:"Meta"}),a("h1",null,"Search Component"),a("p",null,"Provide a simple, analytics-enabled search form over a variety of ",a("inlineCode",{parentName:"p"},"search_options"),"."),a("h2",null,"Usages"),a("h3",null,"Default (empty)"),a("p",null,"When not given any extra attributes, ",a("inlineCode",{parentName:"p"},"bulib-search")," defaults to searching over ",a("inlineCode",{parentName:"p"},"primo"),"."),a(p,{withToolbar:!0,mdxType:"Preview"},a(b,{name:"default",mdxType:"Story"},t`
      <h4>default styling</h4>
      <bulib-search></bulib-search>
      <br><hr />
      <h4>secondary styling <code>.secondary</code></h4>
      <bulib-search class="secondary"></bulib-search>
    `)),a("h3",null,"Two options without default"),a("p",null,"If you provide it with multile ",a("inlineCode",{parentName:"p"},"str_options"),", it will default to searching over the first one."),a(p,{withToolbar:!0,mdxType:"Preview"},a(b,{name:"options-no-default",mdxType:"Story"},t`
      <h4>default styling</h4>
      <bulib-search str_options="primo wp" debug></bulib-search>
      <br><hr>
      <h4>secondary styling <code>.secondary</code></h4>
      <bulib-search str_options="primo wp" debug class="secondary"></bulib-search>
    `)),a("h3",null,"Multiple Options with ",a("inlineCode",{parentName:"h3"},"str_selected")),a("p",null,"You can manually set which of the ",a("inlineCode",{parentName:"p"},"str_options")," is selected by using the ",a("inlineCode",{parentName:"p"},"str_selected")," attribute."),a(p,{withToolbar:!0,mdxType:"Preview"},a(b,{name:"options-with-default",mdxType:"Story"},t`
      <bulib-search str_options="primo wp help" str_selected="wp" debug></bulib-search>
    `)),a("h3",null,"Fallback Example"),a("p",null,"To provide a fallback (for browsers that don't support web components), insert a traditional ",a("inlineCode",{parentName:"p"},"form")," (with action) inside\noff the ",a("inlineCode",{parentName:"p"},"<bulib-search>")," tag."),a("p",null,a("em",{parentName:"p"},"note: you won't be able to tell the difference between this and the first in this view, but click 'Show code'\nto see the difference in the markup")),a(p,{withToolbar:!0,mdxType:"Preview"},a(b,{name:"options-with-fallback",mdxType:"Story"},t`
      <bulib-search str_options="guides wp">
        <form action="http://library.bu.edu/srch.php" method="get">
          <input name="q" type="text" /><button type="submit">Search</button>
        </form>
      </bulib-search>
    `)),a("h2",null,"API - Properties"),a(c,{of:"bulib-search",mdxType:"Props"}))}m.isMDXComponent=!0;const y=e(t`
      <h4>default styling</h4>
      <bulib-search></bulib-search>
      <br><hr />
      <h4>secondary styling <code>.secondary</code></h4>
      <bulib-search class="secondary"></bulib-search>
    `);y.story={},y.story.name="default",y.story.parameters={mdxSource:'html`\n      <h4>default styling</h4>\n      <bulib-search></bulib-search>\n      <br><hr />\n      <h4>secondary styling <code>.secondary</code></h4>\n      <bulib-search class="secondary"></bulib-search>\n    `'};const f=e(t`
      <h4>default styling</h4>
      <bulib-search str_options="primo wp" debug></bulib-search>
      <br><hr>
      <h4>secondary styling <code>.secondary</code></h4>
      <bulib-search str_options="primo wp" debug class="secondary"></bulib-search>
    `);f.story={},f.story.name="options-no-default",f.story.parameters={mdxSource:'html`\n      <h4>default styling</h4>\n      <bulib-search str_options="primo wp" debug></bulib-search>\n      <br><hr>\n      <h4>secondary styling <code>.secondary</code></h4>\n      <bulib-search str_options="primo wp" debug class="secondary"></bulib-search>\n    `'};const w=e(t`
      <bulib-search str_options="primo wp help" str_selected="wp" debug></bulib-search>
    `);w.story={},w.story.name="options-with-default",w.story.parameters={mdxSource:'html`\n      <bulib-search str_options="primo wp help" str_selected="wp" debug></bulib-search>\n    `'};const g=e(t`
      <bulib-search str_options="guides wp">
        <form action="http://library.bu.edu/srch.php" method="get">
          <input name="q" type="text" /><button type="submit">Search</button>
        </form>
      </bulib-search>
    `);g.story={},g.story.name="options-with-fallback",g.story.parameters={mdxSource:'html`\n      <bulib-search str_options="guides wp">\n        <form action="http://library.bu.edu/srch.php" method="get">\n          <input name="q" type="text" /><button type="submit">Search</button>\n        </form>\n      </bulib-search>\n    `'};const x={title:"Web Components|bulib-search",parameters:{component:"bulib-search",options:{selectedPanel:"storybookjs/knobs/accessibility"}},decorators:[o,s],includeStories:["defaultStory","optionsNoDefault","optionsWithDefault","optionsWithFallback"]},_={default:"web-components-bulib-search--default-story","options-no-default":"web-components-bulib-search--options-no-default","options-with-default":"web-components-bulib-search--options-with-default","options-with-fallback":"web-components-bulib-search--options-with-fallback"};x.parameters=x.parameters||{},x.parameters.docs=r({},x.parameters.docs||{},{page:()=>a(n,{mdxStoryNameToId:_},a(m,null))});export default x;export{y as defaultStory,f as optionsNoDefault,w as optionsWithDefault,g as optionsWithFallback};
//# sourceMappingURL=search.stories-6df82065.js.map
