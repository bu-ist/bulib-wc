import{h as e,i as s,_ as a,e as r,f as t,g as i,j as l,k as n,l as o}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";function c(){return(c=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const u={},p="wrapper";function d(e){let{components:a}=e,t=i(e,["components"]);return r(p,c({},u,t,{components:a,mdxType:"MDXLayout"}),r(l,{title:"No Javascript|composites",mdxType:"Meta"}),r("h1",null,"Composites"),r("p",null,"The many helpers in this section (both functional and object-oriented), can be combined to form more complex\ncomposite elements. "),r("p",null,'The following examples contain a number of these helpers. Try pressing "Show code" on each example to find them.\nYou should be able to copy that code into anywhere that has our assets loaded and get the same result.'),r("h2",null,"Marketing Material"),r("p",null,"The following utilizes a number of utility classes to create a responsive, marketing look-and-feel that's visible\non ",r("inlineCode",{parentName:"p"},"bu.edu/library/firstyear"),". "),r(n,{mdxType:"Preview"},r(o,{name:"firstyear",mdxType:"Story"},s`
    <style type="text/css">
      div.zebra h2, div.zebra a.bulib-btn { font-family: "Benton"; }
      div.zebra h2 { color: var(--color-accent-red-background-dark, #CC0000); }
    </style>
    <div class="zebra">
      <section class="full-width flexw flex-around">
        <div class="max-500 mal">
          <h2 class="uppercase">Services</h2>
          <p>
            Get <strong>expert research help</strong> and utilize the wealth of information available to the BU Community.
            Connect with us in person, via chat, email, or text.
          </p>
          <a class="bulib-btn large" href="https://askalibrarian.bu.edu/">Connect With Us</a>
        </div>
        <img class="max-300 max-full-mobile" src="https://www.bu.edu/library/firstyear/img/service-laptop.jpg"></a>
      </section>
      <section class="full-width flexw wrap-reverse flex-around">
        <img class="max-500 max-full-mobile" src="https://www.bu.edu/library/firstyear/img/collections-mugar.jpg">
        <div class="max-300 mal">
          <h2 class="uppercase">Collections</h2>
          <p>
            BU Libraries is your portal to millions of <strong>books and ebooks</strong>, hundreds of <strong>databases</strong>, 
            and countless <strong>articles</strong>. Connect with our resources using <a href="https://www.bu.edu/library/search">BU Libraries Search</a>.
          </p>
          <a href="https://www.bu.edu/library/search" class="bulib-btn large">Search Our Resources</a>
        </div>
      </section>
    </div>
    `)),r("h2",null,"Promotional Card"),r("p",null,"The following is an example using existing helper classes to construct a sort of promotional card."),r(n,{mdxType:"Preview"},r(o,{name:"promotional-box",mdxType:"Story"},s`
      <style type="text/css">
        div.promo-boxes h2, div.promo-boxes a { font-family: "Benton"; }
      </style>
      <div class="flexw flex-evenly promo-boxes">
        <div class="secondary-menu mam" style="max-width: 350px;">
          <img class="full-width" src="https://www.bu.edu/library/firstyear/img/spaces_mugar-study.jpg">
          <h2 class="uppercase">For Grad Students</h2>
          <p class="txt-wrap">BU Libraries has a number of services particularly for graduate students working on their theses and dissertations</p>
          <ul>
            <li><a href="https://library.bu.edu/create_bibliographies">Picking a Citation Management Tool</a></li>
            <li><a href="http://sites.bu.edu/orcid/">Getting an ORCID id</a></li>
            <li>...</li>
          </ul>
          <a class="mta bulib-btn mhn full-width capitalize" href="https://www.bu.edu/library/services/for-graduate-students/">Graduate Student Resources</a>
        </div>
        <div class="secondary-menu mam" style="max-width: 350px;">
          <img class="full-width" src="https://www.bu.edu/library/files/2011/11/banner_mouse.jpg">
          <h2 class="uppercase">For Faculty</h2>
          <p>
            BU Libraries has a number of services particularly for faculty to 
            assist them with preparing classroom materials, creating reserves, etc.
          </p>
          <ul>
            <li><a href="https://www.bu.edu/library/services/for-faculty/classes-instruction/">Library Classes &amp; Instruction</a></li>
            <li><a href="https://www.bu.edu/library/services/scanning-delivery-services/">Scanning &amp; Digital Delivery</a></li>
            <li>...</li>
          </ul>
          <div class="full-width">
            <a class="bulib-btn mhn full-width capitalize" href="https://www.bu.edu/library/services/for-faculty/">Faculty Resources</a>
          </div>
        </div>
      </div>
    `)))}d.isMDXComponent=!0;const h=e(s`
    <style type="text/css">
      div.zebra h2, div.zebra a.bulib-btn { font-family: "Benton"; }
      div.zebra h2 { color: var(--color-accent-red-background-dark, #CC0000); }
    </style>
    <div class="zebra">
      <section class="full-width flexw flex-around">
        <div class="max-500 mal">
          <h2 class="uppercase">Services</h2>
          <p>
            Get <strong>expert research help</strong> and utilize the wealth of information available to the BU Community.
            Connect with us in person, via chat, email, or text.
          </p>
          <a class="bulib-btn large" href="https://askalibrarian.bu.edu/">Connect With Us</a>
        </div>
        <img class="max-300 max-full-mobile" src="https://www.bu.edu/library/firstyear/img/service-laptop.jpg"></a>
      </section>
      <section class="full-width flexw wrap-reverse flex-around">
        <img class="max-500 max-full-mobile" src="https://www.bu.edu/library/firstyear/img/collections-mugar.jpg">
        <div class="max-300 mal">
          <h2 class="uppercase">Collections</h2>
          <p>
            BU Libraries is your portal to millions of <strong>books and ebooks</strong>, hundreds of <strong>databases</strong>, 
            and countless <strong>articles</strong>. Connect with our resources using <a href="https://www.bu.edu/library/search">BU Libraries Search</a>.
          </p>
          <a href="https://www.bu.edu/library/search" class="bulib-btn large">Search Our Resources</a>
        </div>
      </section>
    </div>
    `);h.story={},h.story.name="firstyear",h.story.parameters={mdxSource:'html`\n    <style type="text/css">\n      div.zebra h2, div.zebra a.bulib-btn { font-family: "Benton"; }\n      div.zebra h2 { color: var(--color-accent-red-background-dark, #CC0000); }\n    </style>\n    <div class="zebra">\n      <section class="full-width flexw flex-around">\n        <div class="max-500 mal">\n          <h2 class="uppercase">Services</h2>\n          <p>\n            Get <strong>expert research help</strong> and utilize the wealth of information available to the BU Community.\n            Connect with us in person, via chat, email, or text.\n          </p>\n          <a class="bulib-btn large" href="https://askalibrarian.bu.edu/">Connect With Us</a>\n        </div>\n        <img class="max-300 max-full-mobile" src="https://www.bu.edu/library/firstyear/img/service-laptop.jpg"></a>\n      </section>\n      <section class="full-width flexw wrap-reverse flex-around">\n        <img class="max-500 max-full-mobile" src="https://www.bu.edu/library/firstyear/img/collections-mugar.jpg">\n        <div class="max-300 mal">\n          <h2 class="uppercase">Collections</h2>\n          <p>\n            BU Libraries is your portal to millions of <strong>books and ebooks</strong>, hundreds of <strong>databases</strong>, \n            and countless <strong>articles</strong>. Connect with our resources using <a href="https://www.bu.edu/library/search">BU Libraries Search</a>.\n          </p>\n          <a href="https://www.bu.edu/library/search" class="bulib-btn large">Search Our Resources</a>\n        </div>\n      </section>\n    </div>\n    `'};const b=e(s`
      <style type="text/css">
        div.promo-boxes h2, div.promo-boxes a { font-family: "Benton"; }
      </style>
      <div class="flexw flex-evenly promo-boxes">
        <div class="secondary-menu mam" style="max-width: 350px;">
          <img class="full-width" src="https://www.bu.edu/library/firstyear/img/spaces_mugar-study.jpg">
          <h2 class="uppercase">For Grad Students</h2>
          <p class="txt-wrap">BU Libraries has a number of services particularly for graduate students working on their theses and dissertations</p>
          <ul>
            <li><a href="https://library.bu.edu/create_bibliographies">Picking a Citation Management Tool</a></li>
            <li><a href="http://sites.bu.edu/orcid/">Getting an ORCID id</a></li>
            <li>...</li>
          </ul>
          <a class="mta bulib-btn mhn full-width capitalize" href="https://www.bu.edu/library/services/for-graduate-students/">Graduate Student Resources</a>
        </div>
        <div class="secondary-menu mam" style="max-width: 350px;">
          <img class="full-width" src="https://www.bu.edu/library/files/2011/11/banner_mouse.jpg">
          <h2 class="uppercase">For Faculty</h2>
          <p>
            BU Libraries has a number of services particularly for faculty to 
            assist them with preparing classroom materials, creating reserves, etc.
          </p>
          <ul>
            <li><a href="https://www.bu.edu/library/services/for-faculty/classes-instruction/">Library Classes &amp; Instruction</a></li>
            <li><a href="https://www.bu.edu/library/services/scanning-delivery-services/">Scanning &amp; Digital Delivery</a></li>
            <li>...</li>
          </ul>
          <div class="full-width">
            <a class="bulib-btn mhn full-width capitalize" href="https://www.bu.edu/library/services/for-faculty/">Faculty Resources</a>
          </div>
        </div>
      </div>
    `);b.story={},b.story.name="promotional-box",b.story.parameters={mdxSource:'html`\n      <style type="text/css">\n        div.promo-boxes h2, div.promo-boxes a { font-family: "Benton"; }\n      </style>\n      <div class="flexw flex-evenly promo-boxes">\n        <div class="secondary-menu mam" style="max-width: 350px;">\n          <img class="full-width" src="https://www.bu.edu/library/firstyear/img/spaces_mugar-study.jpg">\n          <h2 class="uppercase">For Grad Students</h2>\n          <p class="txt-wrap">BU Libraries has a number of services particularly for graduate students working on their theses and dissertations</p>\n          <ul>\n            <li><a href="https://library.bu.edu/create_bibliographies">Picking a Citation Management Tool</a></li>\n            <li><a href="http://sites.bu.edu/orcid/">Getting an ORCID id</a></li>\n            <li>...</li>\n          </ul>\n          <a class="mta bulib-btn mhn full-width capitalize" href="https://www.bu.edu/library/services/for-graduate-students/">Graduate Student Resources</a>\n        </div>\n        <div class="secondary-menu mam" style="max-width: 350px;">\n          <img class="full-width" src="https://www.bu.edu/library/files/2011/11/banner_mouse.jpg">\n          <h2 class="uppercase">For Faculty</h2>\n          <p>\n            BU Libraries has a number of services particularly for faculty to \n            assist them with preparing classroom materials, creating reserves, etc.\n          </p>\n          <ul>\n            <li><a href="https://www.bu.edu/library/services/for-faculty/classes-instruction/">Library Classes &amp; Instruction</a></li>\n            <li><a href="https://www.bu.edu/library/services/scanning-delivery-services/">Scanning &amp; Digital Delivery</a></li>\n            <li>...</li>\n          </ul>\n          <div class="full-width">\n            <a class="bulib-btn mhn full-width capitalize" href="https://www.bu.edu/library/services/for-faculty/">Faculty Resources</a>\n          </div>\n        </div>\n      </div>\n    `'};const m={title:"No Javascript|composites",includeStories:["firstyear","promotionalBox"]},f={firstyear:"no-javascript-composites--firstyear","promotional-box":"no-javascript-composites--promotional-box"};m.parameters=m.parameters||{},m.parameters.docs=a({},m.parameters.docs||{},{page:()=>r(t,{mdxStoryNameToId:f},r(d,null))});export default m;export{h as firstyear,b as promotionalBox};
//# sourceMappingURL=composites.stories-e3efe344.js.map
