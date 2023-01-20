import{h as t,i as a,_ as n,e,f as o,g as r,j as s,k as b,l as i}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";function l(){return(l=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t}).apply(this,arguments)}const u={},c="wrapper";function h(t){let{components:n}=t,o=r(t,["components"]);return e(c,l({},u,o,{components:n,mdxType:"MDXLayout"}),e(s,{title:"No Javascript|buttons",mdxType:"Meta"}),e("h1",null,"Buttons"),e("p",null,"Display a link as if it were a button to highlight it as the main call-to-action."),e("h2",null,"Usage"),e("h3",null,"Default/Primary Button"),e("p",null,"The primary button should highlight the main call-to-action. "),e("p",null,"Given this, there should (generally) only be one of them per page."),e(b,{mdxType:"Preview"},e(i,{name:"button-default",mdxType:"Story"},a`
      <a class="bulib-btn" href="javascript:void()">Primary (a)</a>
      <button class="bulib-btn" action="javascript:void()">Primary (button)</a>
    `)),e("h3",null,"Secondary Button"),e("p",null,"The secondary button is for main calls-to-action that may be less important\nor an alternative to the main one."),e(b,{mdxType:"Preview"},e(i,{name:"button-secondary",mdxType:"Story"},a`
      <a class="bulib-btn btn-secondary" href="javascript:void()">Secondary (a)</a>
      <button class="bulib-btn btn-secondary" href="javascript:void()">Secondary (button)</button>
    `)),e("h3",null,"Light Button"),e("p",null,"The light button is for calls-to-action that are in the in-between of the primary CTA and secondary."),e(b,{mdxType:"Preview"},e(i,{name:"button-light",mdxType:"Story"},a`
      <a class="bulib-btn btn-light" href="javascript:void()">Light (a)</a>
      <button class="bulib-btn btn-light" href="javascript:void()">Light (button)</button> 
    `)),e("h3",null,"Large Buttons"),e("p",null,"Add the ",e("inlineCode",{parentName:"p"},".large")," class to make the buttons a little bigger."),e(b,{mdxType:"Preview"},e(i,{name:"button-together-large",mdxType:"Story"},a`
      <a class="bulib-btn large">Primary (a.large)</a>
      <a class="bulib-btn large btn-secondary">Secondary (a.large)</a>
      <a class="bulib-btn large btn-light">Light (a.large)</a>
    `)),e("p",null,"This works on ",e("inlineCode",{parentName:"p"},"button")," tags as well."),e(b,{mdxType:"Preview"},e(i,{name:"button-together-button",mdxType:"Story"},a`
      <button class="bulib-btn large">Primary (.large)</button>
      <button class="bulib-btn large btn-secondary">Secondary (.large)</button>
      <button class="bulib-btn large btn-light">Light (.large)</button>
    `)),e("h3",null,"Using Multiple Buttons in Context"),e("p",null,"These styles should be used in the following way when they're together."),e(b,{mdxType:"Preview"},e(i,{name:"button-together-with-context",mdxType:"Story"},a`
    <div class="secondary-menu"> 
      <h3>Please Confirm Something</h3>
      <p>This is a sample confirmation message showing the use of both button styles</p>
      <div>
        <a class="bulib-btn" href="javascript:void()">Confirm</a>
        <a class="bulib-btn btn-secondary" href="javascript:void()">Cancel</a>
      </div>
    </div>
    `)))}h.isMDXComponent=!0;const g=t(a`
      <a class="bulib-btn" href="javascript:void()">Primary (a)</a>
      <button class="bulib-btn" action="javascript:void()">Primary (button)</a>
    `);g.story={},g.story.name="button-default",g.story.parameters={mdxSource:'html`\n      <a class="bulib-btn" href="javascript:void()">Primary (a)</a>\n      <button class="bulib-btn" action="javascript:void()">Primary (button)</a>\n    `'};const d=t(a`
      <a class="bulib-btn btn-secondary" href="javascript:void()">Secondary (a)</a>
      <button class="bulib-btn btn-secondary" href="javascript:void()">Secondary (button)</button>
    `);d.story={},d.story.name="button-secondary",d.story.parameters={mdxSource:'html`\n      <a class="bulib-btn btn-secondary" href="javascript:void()">Secondary (a)</a>\n      <button class="bulib-btn btn-secondary" href="javascript:void()">Secondary (button)</button>\n    `'};const y=t(a`
      <a class="bulib-btn btn-light" href="javascript:void()">Light (a)</a>
      <button class="bulib-btn btn-light" href="javascript:void()">Light (button)</button> 
    `);y.story={},y.story.name="button-light",y.story.parameters={mdxSource:'html`\n      <a class="bulib-btn btn-light" href="javascript:void()">Light (a)</a>\n      <button class="bulib-btn btn-light" href="javascript:void()">Light (button)</button> \n    `'};const m=t(a`
      <a class="bulib-btn large">Primary (a.large)</a>
      <a class="bulib-btn large btn-secondary">Secondary (a.large)</a>
      <a class="bulib-btn large btn-light">Light (a.large)</a>
    `);m.story={},m.story.name="button-together-large",m.story.parameters={mdxSource:'html`\n      <a class="bulib-btn large">Primary (a.large)</a>\n      <a class="bulib-btn large btn-secondary">Secondary (a.large)</a>\n      <a class="bulib-btn large btn-light">Light (a.large)</a>\n    `'};const p=t(a`
      <button class="bulib-btn large">Primary (.large)</button>
      <button class="bulib-btn large btn-secondary">Secondary (.large)</button>
      <button class="bulib-btn large btn-light">Light (.large)</button>
    `);p.story={},p.story.name="button-together-button",p.story.parameters={mdxSource:'html`\n      <button class="bulib-btn large">Primary (.large)</button>\n      <button class="bulib-btn large btn-secondary">Secondary (.large)</button>\n      <button class="bulib-btn large btn-light">Light (.large)</button>\n    `'};const v=t(a`
    <div class="secondary-menu"> 
      <h3>Please Confirm Something</h3>
      <p>This is a sample confirmation message showing the use of both button styles</p>
      <div>
        <a class="bulib-btn" href="javascript:void()">Confirm</a>
        <a class="bulib-btn btn-secondary" href="javascript:void()">Cancel</a>
      </div>
    </div>
    `);v.story={},v.story.name="button-together-with-context",v.story.parameters={mdxSource:'html`\n    <div class="secondary-menu"> \n      <h3>Please Confirm Something</h3>\n      <p>This is a sample confirmation message showing the use of both button styles</p>\n      <div>\n        <a class="bulib-btn" href="javascript:void()">Confirm</a>\n        <a class="bulib-btn btn-secondary" href="javascript:void()">Cancel</a>\n      </div>\n    </div>\n    `'};const f={title:"No Javascript|buttons",includeStories:["buttonDefault","buttonSecondary","buttonLight","buttonTogetherLarge","buttonTogetherButton","buttonTogetherWithContext"]},j={"button-default":"no-javascript-buttons--button-default","button-secondary":"no-javascript-buttons--button-secondary","button-light":"no-javascript-buttons--button-light","button-together-large":"no-javascript-buttons--button-together-large","button-together-button":"no-javascript-buttons--button-together-button","button-together-with-context":"no-javascript-buttons--button-together-with-context"};f.parameters=f.parameters||{},f.parameters.docs=n({},f.parameters.docs||{},{page:()=>e(o,{mdxStoryNameToId:j},e(h,null))});export default f;export{g as buttonDefault,y as buttonLight,d as buttonSecondary,p as buttonTogetherButton,m as buttonTogetherLarge,v as buttonTogetherWithContext};
//# sourceMappingURL=buttons.stories-0c79a3d0.js.map
