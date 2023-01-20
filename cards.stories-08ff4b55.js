import{h as i,i as a,_ as l,e,f as n,g as s,j as o,k as c,l as r}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";function d(){return(d=Object.assign||function(i){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var e in l)Object.prototype.hasOwnProperty.call(l,e)&&(i[e]=l[e])}return i}).apply(this,arguments)}const t={},h="wrapper";function u(i){let{components:l}=i,n=s(i,["components"]);return e(h,d({},t,n,{components:l,mdxType:"MDXLayout"}),e(o,{title:"No Javascript|cards",mdxType:"Meta"}),e("h1",null,"Cards (nojs)"),e("p",null,"Present a more human-readable a prominent, visual call to action, with Material icons ","[https://material.io/tools/icons/]","."),e("h2",null,"Usages"),e("h3",null,"Alone"),e(c,{mdxType:"Preview"},e(r,{name:"alone-default",mdxType:"Story"},a`
      <div class="card">
        <i class="material-icons" onclick="window.open('/form.php?quid=511','_self')">email</i>
        <div>
          <h3><a href="/form.php?quid=511">Email</a></h3>
          <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>
        </div>
      </div>
    `)),e("p",null,e("em",{parentName:"p"},"add ",e("inlineCode",{parentName:"em"},".small")," class to the card for a little more room")),e(c,{mdxType:"Preview"},e(r,{name:"alone-small",mdxType:"Story"},a`
      <div class="card small">
        <i class="material-icons" onclick="window.open('/form.php?quid=511','_self')">email</i>
        <div class="inline">
          <h3><a href="/form.php?quid=511">Email</a></h3>
          <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>
        </div>
      </div>
    `)),e("h3",null,"Deck"),e("p",null,"Arrange multiple cards using ",e("inlineCode",{parentName:"p"},".deck"),", which will ensure they're equally laid out."),e(c,{mdxType:"Preview"},e(r,{name:"deck-small",mdxType:"Story"},a`
      <div class="deck">
        <div class="card small">
          <i class="material-icons" onclick="window.open('/form.php?quid=511','_self')">email</i>
          <div class="inline">
            <h3><a href="/form.php?quid=511">Email</a></h3>
            <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>
          </div>
        </div>
        <div class="card small">
          <i class="material-icons" onclick="document.querySelector('button.s-lch-widget-float-btn').click();">question_answer</i>  
          <div class="inline">
            <h3><a onclick="document.querySelector('button.s-lch-widget-float-btn').click();" href="javascript:void(0)">Chat</a></h3>
            <p>Talk online to a research librarian on weekdays and Sundays</p>
          </div>
        </div>
        <div class="card small">
          <i class="material-icons" onclick="window.open('tel:6173532700','_self')">phone</i>
          <div class="inline">
            <h3><a href="tel:6173532700">Call</a></h3>
            <p>Call us at 617-353-2700 during our open hours</p>
          </div>
        </div>
      </div>
    `)),e("h3",null,"Customization: Aligning the Icon"),e("p",null,"The icon on the left can be controlled with the css-variable ",e("inlineCode",{parentName:"p"},"--bulib-card-icon-vertical"),". When\nset to ",e("inlineCode",{parentName:"p"},"auto"),", the icon is centered. When set to ",e("inlineCode",{parentName:"p"},"0px"),", it sticks to the top. "),e(c,{mdxType:"Preview"},e(r,{name:"verticality",mdxType:"Story"},a`
      <h4>vertically centered: <code>auto</code></h4>
      <div class="flexnw" style="--bulib-card-icon-vertical: auto;">
        <div class="card small">
          <i class="material-icons" onclick="window.open('/form.php?quid=511','_self')">email</i>
          <div class="inline">
            <h3><a href="/form.php?quid=511">Email</a></h3>
            <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>
          </div>
        </div>
        <div class="card small">
          <i class="material-icons" onclick="document.querySelector('button.s-lch-widget-float-btn').click();">question_answer</i>  
          <div class="inline">
            <h3><a onclick="document.querySelector('button.s-lch-widget-float-btn').click();" href="javascript:void(0)">Chat</a></h3>
            <p>Talk online to a research librarian on weekdays and Sundays</p>
          </div>
        </div>
        <div class="card small">
          <i class="material-icons" onclick="window.open('tel:6173532700','_self')">phone</i>
          <div class="inline">
            <h3><a href="tel:6173532700">Call</a></h3>
            <p>Call us at 617-353-2700 during our open hours</p>
          </div>
        </div>
      </div>
      <hr />
      <h4>top: <code>0px</code></h4>
      <div class="flexnw" style="--bulib-card-icon-vertical: 0px;">
        <div class="card small">
          <i class="material-icons" onclick="window.open('/form.php?quid=511','_self')">email</i>
          <div class="inline">
            <h3><a href="/form.php?quid=511">Email</a></h3>
            <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>
          </div>
        </div>
        <div class="card small">
          <i class="material-icons" onclick="document.querySelector('button.s-lch-widget-float-btn').click();">question_answer</i>  
          <div class="inline">
            <h3><a onclick="document.querySelector('button.s-lch-widget-float-btn').click();" href="javascript:void(0)">Chat</a></h3>
            <p>Talk online to a research librarian on weekdays and Sundays</p>
          </div>
        </div>
        <div class="card small">
          <i class="material-icons" onclick="window.open('tel:6173532700','_self')">phone</i>
          <div class="inline">
            <h3><a href="tel:6173532700">Call</a></h3>
            <p>Call us at 617-353-2700 during our open hours</p>
          </div>
        </div>
      </div>
    `)))}u.isMDXComponent=!0;const p=i(a`
      <div class="card">
        <i class="material-icons" onclick="window.open('/form.php?quid=511','_self')">email</i>
        <div>
          <h3><a href="/form.php?quid=511">Email</a></h3>
          <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>
        </div>
      </div>
    `);p.story={},p.story.name="alone-default",p.story.parameters={mdxSource:'html`\n      <div class="card">\n        <i class="material-icons" onclick="window.open(\'/form.php?quid=511\',\'_self\')">email</i>\n        <div>\n          <h3><a href="/form.php?quid=511">Email</a></h3>\n          <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>\n        </div>\n      </div>\n    `'};const m=i(a`
      <div class="card small">
        <i class="material-icons" onclick="window.open('/form.php?quid=511','_self')">email</i>
        <div class="inline">
          <h3><a href="/form.php?quid=511">Email</a></h3>
          <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>
        </div>
      </div>
    `);m.story={},m.story.name="alone-small",m.story.parameters={mdxSource:'html`\n      <div class="card small">\n        <i class="material-icons" onclick="window.open(\'/form.php?quid=511\',\'_self\')">email</i>\n        <div class="inline">\n          <h3><a href="/form.php?quid=511">Email</a></h3>\n          <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>\n        </div>\n      </div>\n    `'};const v=i(a`
      <div class="deck">
        <div class="card small">
          <i class="material-icons" onclick="window.open('/form.php?quid=511','_self')">email</i>
          <div class="inline">
            <h3><a href="/form.php?quid=511">Email</a></h3>
            <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>
          </div>
        </div>
        <div class="card small">
          <i class="material-icons" onclick="document.querySelector('button.s-lch-widget-float-btn').click();">question_answer</i>  
          <div class="inline">
            <h3><a onclick="document.querySelector('button.s-lch-widget-float-btn').click();" href="javascript:void(0)">Chat</a></h3>
            <p>Talk online to a research librarian on weekdays and Sundays</p>
          </div>
        </div>
        <div class="card small">
          <i class="material-icons" onclick="window.open('tel:6173532700','_self')">phone</i>
          <div class="inline">
            <h3><a href="tel:6173532700">Call</a></h3>
            <p>Call us at 617-353-2700 during our open hours</p>
          </div>
        </div>
      </div>
    `);v.story={},v.story.name="deck-small",v.story.parameters={mdxSource:'html`\n      <div class="deck">\n        <div class="card small">\n          <i class="material-icons" onclick="window.open(\'/form.php?quid=511\',\'_self\')">email</i>\n          <div class="inline">\n            <h3><a href="/form.php?quid=511">Email</a></h3>\n            <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>\n          </div>\n        </div>\n        <div class="card small">\n          <i class="material-icons" onclick="document.querySelector(\'button.s-lch-widget-float-btn\').click();">question_answer</i>  \n          <div class="inline">\n            <h3><a onclick="document.querySelector(\'button.s-lch-widget-float-btn\').click();" href="javascript:void(0)">Chat</a></h3>\n            <p>Talk online to a research librarian on weekdays and Sundays</p>\n          </div>\n        </div>\n        <div class="card small">\n          <i class="material-icons" onclick="window.open(\'tel:6173532700\',\'_self\')">phone</i>\n          <div class="inline">\n            <h3><a href="tel:6173532700">Call</a></h3>\n            <p>Call us at 617-353-2700 during our open hours</p>\n          </div>\n        </div>\n      </div>\n    `'};const w=i(a`
      <h4>vertically centered: <code>auto</code></h4>
      <div class="flexnw" style="--bulib-card-icon-vertical: auto;">
        <div class="card small">
          <i class="material-icons" onclick="window.open('/form.php?quid=511','_self')">email</i>
          <div class="inline">
            <h3><a href="/form.php?quid=511">Email</a></h3>
            <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>
          </div>
        </div>
        <div class="card small">
          <i class="material-icons" onclick="document.querySelector('button.s-lch-widget-float-btn').click();">question_answer</i>  
          <div class="inline">
            <h3><a onclick="document.querySelector('button.s-lch-widget-float-btn').click();" href="javascript:void(0)">Chat</a></h3>
            <p>Talk online to a research librarian on weekdays and Sundays</p>
          </div>
        </div>
        <div class="card small">
          <i class="material-icons" onclick="window.open('tel:6173532700','_self')">phone</i>
          <div class="inline">
            <h3><a href="tel:6173532700">Call</a></h3>
            <p>Call us at 617-353-2700 during our open hours</p>
          </div>
        </div>
      </div>
      <hr />
      <h4>top: <code>0px</code></h4>
      <div class="flexnw" style="--bulib-card-icon-vertical: 0px;">
        <div class="card small">
          <i class="material-icons" onclick="window.open('/form.php?quid=511','_self')">email</i>
          <div class="inline">
            <h3><a href="/form.php?quid=511">Email</a></h3>
            <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>
          </div>
        </div>
        <div class="card small">
          <i class="material-icons" onclick="document.querySelector('button.s-lch-widget-float-btn').click();">question_answer</i>  
          <div class="inline">
            <h3><a onclick="document.querySelector('button.s-lch-widget-float-btn').click();" href="javascript:void(0)">Chat</a></h3>
            <p>Talk online to a research librarian on weekdays and Sundays</p>
          </div>
        </div>
        <div class="card small">
          <i class="material-icons" onclick="window.open('tel:6173532700','_self')">phone</i>
          <div class="inline">
            <h3><a href="tel:6173532700">Call</a></h3>
            <p>Call us at 617-353-2700 during our open hours</p>
          </div>
        </div>
      </div>
    `);w.story={},w.story.name="verticality",w.story.parameters={mdxSource:'html`\n      <h4>vertically centered: <code>auto</code></h4>\n      <div class="flexnw" style="--bulib-card-icon-vertical: auto;">\n        <div class="card small">\n          <i class="material-icons" onclick="window.open(\'/form.php?quid=511\',\'_self\')">email</i>\n          <div class="inline">\n            <h3><a href="/form.php?quid=511">Email</a></h3>\n            <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>\n          </div>\n        </div>\n        <div class="card small">\n          <i class="material-icons" onclick="document.querySelector(\'button.s-lch-widget-float-btn\').click();">question_answer</i>  \n          <div class="inline">\n            <h3><a onclick="document.querySelector(\'button.s-lch-widget-float-btn\').click();" href="javascript:void(0)">Chat</a></h3>\n            <p>Talk online to a research librarian on weekdays and Sundays</p>\n          </div>\n        </div>\n        <div class="card small">\n          <i class="material-icons" onclick="window.open(\'tel:6173532700\',\'_self\')">phone</i>\n          <div class="inline">\n            <h3><a href="tel:6173532700">Call</a></h3>\n            <p>Call us at 617-353-2700 during our open hours</p>\n          </div>\n        </div>\n      </div>\n      <hr />\n      <h4>top: <code>0px</code></h4>\n      <div class="flexnw" style="--bulib-card-icon-vertical: 0px;">\n        <div class="card small">\n          <i class="material-icons" onclick="window.open(\'/form.php?quid=511\',\'_self\')">email</i>\n          <div class="inline">\n            <h3><a href="/form.php?quid=511">Email</a></h3>\n            <p>Email us your research questions and we&rsquo;ll respond within 24 hours.</p>\n          </div>\n        </div>\n        <div class="card small">\n          <i class="material-icons" onclick="document.querySelector(\'button.s-lch-widget-float-btn\').click();">question_answer</i>  \n          <div class="inline">\n            <h3><a onclick="document.querySelector(\'button.s-lch-widget-float-btn\').click();" href="javascript:void(0)">Chat</a></h3>\n            <p>Talk online to a research librarian on weekdays and Sundays</p>\n          </div>\n        </div>\n        <div class="card small">\n          <i class="material-icons" onclick="window.open(\'tel:6173532700\',\'_self\')">phone</i>\n          <div class="inline">\n            <h3><a href="tel:6173532700">Call</a></h3>\n            <p>Call us at 617-353-2700 during our open hours</p>\n          </div>\n        </div>\n      </div>\n    `'};const f={title:"No Javascript|cards",includeStories:["aloneDefault","aloneSmall","deckSmall","verticality"]},y={"alone-default":"no-javascript-cards--alone-default","alone-small":"no-javascript-cards--alone-small","deck-small":"no-javascript-cards--deck-small",verticality:"no-javascript-cards--verticality"};f.parameters=f.parameters||{},f.parameters.docs=l({},f.parameters.docs||{},{page:()=>e(n,{mdxStoryNameToId:y},e(u,null))});export default f;export{p as aloneDefault,m as aloneSmall,v as deckSmall,w as verticality};
//# sourceMappingURL=cards.stories-08ff4b55.js.map
