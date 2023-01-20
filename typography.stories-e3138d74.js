import{h as t,i as e,_ as a,e as s,f as l,g as i,j as n,k as p,l as o}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t}).apply(this,arguments)}const c={},d="wrapper";function x(t){let{components:a}=t,l=i(t,["components"]);return s(d,r({},c,l,{components:a,mdxType:"MDXLayout"}),s(n,{title:"No Javascript|typography",mdxType:"Meta"}),s("h1",null,"Typography Utilities"),s("p",null,"Functional css classes that can be used practically anywhere and do the same thing"),s("h2",null,"Alignment"),s("p",null,"Use the ",s("inlineCode",{parentName:"p"},".txtl"),", ",s("inlineCode",{parentName:"p"},".txtc"),", and ",s("inlineCode",{parentName:"p"},".txtr")," classes to align text to the left, center, or right."),s(p,{mdxType:"Preview"},s(o,{name:"text-alignment",mdxType:"Story"},e`
      <div class="full-width">
        <p class="txtl">this text is left-aligned</p>
        <p class="txtc">this text is center-aligned</p>
        <p class="txtr">this text is right-aligned</p>
      </div>
    `)),s("h2",null,"Size"),s("p",null,"A quick way to change the ",s("em",{parentName:"p"},"size")," of the text is with the ",s("inlineCode",{parentName:"p"},".*-text")," classes: "),s(p,{mdxType:"Preview"},s(o,{name:"text-size",mdxType:"Story"},e`
      <ul>
        <li class="smaller-text"><code>.smaller-text</code></li>
        <li class="small-text"><code>.small-text</code></li>
        <li class="normal-text"><code>.normal-text</code></li>
        <li class="big-text"><code>.big-text</code></li>
        <li class="bigger-text"><code>.bigger-text</code></li>
      </ul>
    `)),s("h2",null,"Style"),s("p",null,"Use ",s("inlineCode",{parentName:"p"},".bold")," and ",s("inlineCode",{parentName:"p"},".underline")," to alter the ",s("inlineCode",{parentName:"p"},"font-weight")," and add ",s("inlineCode",{parentName:"p"},"text-decoration"),"."),s("p",null,s("em",{parentName:"p"},"NOTE: you should generally use ",s("inlineCode",{parentName:"em"},"<strong>")," tags for bold text, ",s("inlineCode",{parentName:"em"},"<em>")," tags for italics and these just for the ",s("inlineCode",{parentName:"em"},"!important"))),s(p,{mdxType:"Preview"},s(o,{name:"text-style",mdxType:"Story"},e`
      <div>
        <p class="bold">this text is bold</p>
        <p class="underline">this text is underligned</p>
        <p class="lowercase">THIS TEXT IS LOWERCASE</p>
        <p class="capitalize">this text has a capital on each new word</p>
        <p class="uppercase">this text is capitalized</p>
      </div>
    `)),s("h2",null,"Text Wrapping"),s(p,{mdxType:"Preview"},s(o,{name:"text-wrap",mdxType:"Story"},e`
      <div class="half-width">
        <p>this very long bit of text will wrap because that is the default behavior</p>
        <p class="txt-wrap">this very long bit of text will wrap because it has the <code>.txt-wrap</code> class added.</p>
        <p class="no-wrap">this very long bit of text will <em>NOT</em> wrap because it has the <code>.no-wrap</code> class added.</p>
      </div>
    `)))}x.isMDXComponent=!0;const h=t(e`
      <div class="full-width">
        <p class="txtl">this text is left-aligned</p>
        <p class="txtc">this text is center-aligned</p>
        <p class="txtr">this text is right-aligned</p>
      </div>
    `);h.story={},h.story.name="text-alignment",h.story.parameters={mdxSource:'html`\n      <div class="full-width">\n        <p class="txtl">this text is left-aligned</p>\n        <p class="txtc">this text is center-aligned</p>\n        <p class="txtr">this text is right-aligned</p>\n      </div>\n    `'};const m=t(e`
      <ul>
        <li class="smaller-text"><code>.smaller-text</code></li>
        <li class="small-text"><code>.small-text</code></li>
        <li class="normal-text"><code>.normal-text</code></li>
        <li class="big-text"><code>.big-text</code></li>
        <li class="bigger-text"><code>.bigger-text</code></li>
      </ul>
    `);m.story={},m.story.name="text-size",m.story.parameters={mdxSource:'html`\n      <ul>\n        <li class="smaller-text"><code>.smaller-text</code></li>\n        <li class="small-text"><code>.small-text</code></li>\n        <li class="normal-text"><code>.normal-text</code></li>\n        <li class="big-text"><code>.big-text</code></li>\n        <li class="bigger-text"><code>.bigger-text</code></li>\n      </ul>\n    `'};const g=t(e`
      <div>
        <p class="bold">this text is bold</p>
        <p class="underline">this text is underligned</p>
        <p class="lowercase">THIS TEXT IS LOWERCASE</p>
        <p class="capitalize">this text has a capital on each new word</p>
        <p class="uppercase">this text is capitalized</p>
      </div>
    `);g.story={},g.story.name="text-style",g.story.parameters={mdxSource:'html`\n      <div>\n        <p class="bold">this text is bold</p>\n        <p class="underline">this text is underligned</p>\n        <p class="lowercase">THIS TEXT IS LOWERCASE</p>\n        <p class="capitalize">this text has a capital on each new word</p>\n        <p class="uppercase">this text is capitalized</p>\n      </div>\n    `'};const y=t(e`
      <div class="half-width">
        <p>this very long bit of text will wrap because that is the default behavior</p>
        <p class="txt-wrap">this very long bit of text will wrap because it has the <code>.txt-wrap</code> class added.</p>
        <p class="no-wrap">this very long bit of text will <em>NOT</em> wrap because it has the <code>.no-wrap</code> class added.</p>
      </div>
    `);y.story={},y.story.name="text-wrap",y.story.parameters={mdxSource:'html`\n      <div class="half-width">\n        <p>this very long bit of text will wrap because that is the default behavior</p>\n        <p class="txt-wrap">this very long bit of text will wrap because it has the <code>.txt-wrap</code> class added.</p>\n        <p class="no-wrap">this very long bit of text will <em>NOT</em> wrap because it has the <code>.no-wrap</code> class added.</p>\n      </div>\n    `'};const u={title:"No Javascript|typography",includeStories:["textAlignment","textSize","textStyle","textWrap"]},w={"text-alignment":"no-javascript-typography--text-alignment","text-size":"no-javascript-typography--text-size","text-style":"no-javascript-typography--text-style","text-wrap":"no-javascript-typography--text-wrap"};u.parameters=u.parameters||{},u.parameters.docs=a({},u.parameters.docs||{},{page:()=>s(l,{mdxStoryNameToId:w},s(x,null))});export default u;export{h as textAlignment,m as textSize,g as textStyle,y as textWrap};
//# sourceMappingURL=typography.stories-e3138d74.js.map
