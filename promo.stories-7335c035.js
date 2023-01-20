import{h as o,i as e,m as i,n as t,_ as a,e as l,f as r,g as n,j as s,k as b,l as m,o as p}from"./preview-bc6c89ca.js";import"./lit-html-2435d3b6.js";import"./lit-element-fdaadb84.js";import"./bulib-promo-95a3ebfa.js";function u(){return(u=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(o[t]=i[t])}return o}).apply(this,arguments)}const c={},h="wrapper";function d(o){let{components:a}=o,r=n(o,["components"]);return l(h,u({},c,r,{components:a,mdxType:"MDXLayout"}),l(s,{title:"Web Components|bulib-promo",decorators:[i,t],parameters:{component:"bulib-promo",options:{selectedPanel:"storybookjs/knobs/panel"}},mdxType:"Meta"}),l("h1",null,"Promo Component"),l("p",null,"Provide an advanced marketing-style box with a background image and some surrounding content."),l("p",null,l("em",{parentName:"p"},"NOTE: can be used individually or in a group")),l("h2",null,"Usages"),l("h3",null,"Empty"),l("p",null,"This element is not meant to be used empty, but it's here to show you where everything goes.\nSo long as the ",l("inlineCode",{parentName:"p"},"debug")," attribute is present, it'll give you some information about what goes where."),l(b,{withToolbar:!0,mdxType:"Preview"},l(m,{name:"default",mdxType:"Story"},e`<bulib-promo debug></bulib-promo>`)),l("h3",null,"Customization"),l("p",null,"You can fill in particular parts of the display by specifying the following:"),l("ul",null,l("li",{parentName:"ul"},l("em",{parentName:"li"},"any")," element with ",l("inlineCode",{parentName:"li"},'slot="top"')," will show up in the section above the image (great for a heading, label, or preface)"),l("li",{parentName:"ul"},"an ",l("inlineCode",{parentName:"li"},"<img>")," with ",l("inlineCode",{parentName:"li"},'slot="main"')," dropped inside, will be used to set the ",l("inlineCode",{parentName:"li"},"background-image")," of the ",l("inlineCode",{parentName:"li"},".main")," section via the ",l("inlineCode",{parentName:"li"},"src")," attribute"),l("li",{parentName:"ul"},l("em",{parentName:"li"},"any")," element with ",l("inlineCode",{parentName:"li"},'slot="bottom"')," will appear below the image (great for description, calls to action, more information, etc.)")),l(b,{withToolbar:!0,mdxType:"Preview"},l(m,{name:"example",mdxType:"Story"},e`
      <bulib-promo>
        <div slot="top">
          <h2>high-level label</h2>
        </div>
        <img slot="main" src="https://via.placeholder.com/500x350">
        <div slot="bottom">
          <h3>maybe our secondary label or heading</h3>
          <p>this is the description explaining the image and/or calls to action</p>
          <div class="flexnw flex-around">
            <a class="bulib-btn mhn">primary call-to-action</a>
            <a class="bulib-btn secondary mhn">secondary call-to-action</a>
          </div>
        </div>
      </bulib-promo>
    `)),l("h3",null,"Optional Parts"),l("p",null,"If you decide you only want the top or only the bottom, feel free to leave either empty and it'll be left blank."),l("h4",null,"No '",l("inlineCode",{parentName:"h4"},"top"),"' Section"),l(b,{withToolbar:!0,mdxType:"Preview"},l(m,{name:"no-top",mdxType:"Story"},e`
      <bulib-promo>
        <img slot="main" src="https://via.placeholder.com/500x350?text=this+is+a+custom+'<img>'">
        <div slot="bottom">
          <h3>this is a custom heading</h3>
          <p>this is a custom description</p>
          <a class="bulib-btn mhn">no secondary option this time</a>
        </div>
      </bulib-promo>
    `)),l("h4",null,"No '",l("inlineCode",{parentName:"h4"},"bottom"),"' Section"),l(b,{withToolbar:!0,mdxType:"Preview"},l(m,{name:"no-bottom-heading",mdxType:"Story"},e`
      <bulib-promo>
        <div slot="top">
          <h3>this is a custom '<code>top heading</code>'</h3>
          <p>we'll even add a bit of a description here to explain the image, (we'll opt to not have a cta in this example)</p>
        </div>
        <img slot="main" src="https://via.placeholder.com/750x300?text=this+is+a+different+custom+img">
      </bulib-promo>
    `)),l("h3",null,"Unconventional Customization"),l("p",null,"Technically, you can put pretty much anything in either ",l("inlineCode",{parentName:"p"},"slot='top'")," or ",l("inlineCode",{parentName:"p"},'slot="bottom"'),". The component is just to\nstandardize the look & feel of multiples of them in place. "),l("p",null,l("em",{parentName:"p"},"NOTE: in this example, we used a square image and set the height manually. This expanded the ",l("inlineCode",{parentName:"em"},".main")," area to that height")),l(b,{withToolbar:!0,mdxType:"Preview"},l(m,{name:"unconventional",mdxType:"Story"},e`
      <bulib-promo>
        <h2 slot="top">Library Hours</h2>
        <img slot="main" height="450px" src="https://i.pinimg.com/originals/c8/1e/14/c81e1445f01e19c6fd7dfb0b0ba4e359.jpg" >
        <div slot="bottom" class="flexw flex-center">
          <div class="half-width">
            <p class="big-text">
              Different libraries are open at different times. We use LibCal and 
              <code>bulib-hours</code> to manage that.
            </p>
            <a href="https://www.bu.edu/library/about/hours/" class="bulib-btn bigger-text bold">see all location hours</a>
          </div>
          <ul>
            <li><bulib-hours icon="local_library" library="mugar-memorial"></bulib-hours></li>
            <li><bulib-hours icon="business" library="pardee"></bulib-hours></li>
            <li><bulib-hours icon="school" library="pickering"></bulib-hours></li>
            <li><bulib-hours icon="science" library="sel"></bulib-hours></li>
            <li><bulib-hours icon="cloud_upload" library="astronomy"></bulib-hours></li>
          </li>
        </p>
      </bulib-promo>
    `)),l("h3",null,"Multiple Promotions"),l("p",null,"Arrange multiple promotional boxes into a row using ",l("inlineCode",{parentName:"p"},"display: flex"),", ",l("inlineCode",{parentName:"p"},"display: grid"),", or other layout helpers..."),l(b,{withToolbar:!0,mdxType:"Preview"},l(m,{name:"unison",mdxType:"Story"},e`
      <style type="text/css">
        div.promo-row { display: flex; grid-gap: 20px; }
        div.promo-row > bulib-promo { flex: 1; }
      </style>
      <div class="promo-row">
        <bulib-promo class="auto-height">
          <h2 slot="top">Library Hours</h2>
          <img slot="main" src="https://www.bu.edu/library/files/2012/04/mugar_small-150x115.jpg"
          <a slot="bottom" class="bulib-btn mhn">All Location Hours</a>
        </bulib-promo>
        <bulib-promo>
          <h2 slot="bottom">Howard Gotlieb Archival Research Center</h2>
          <img slot="main" src="http://archives.bu.edu/documents/10184/15899/about-hgarc.jpg/9b958872-9fde-482f-a579-113efacc2f2c?t=1397674399156">
        </bulib-promo>
        <bulib-promo>
          <h2 slot="top">Library Locations</h2>
          <img slot="main" src="https://www.bu.edu/library/files/2012/04/astronomy_small-150x115.jpg">
          <ul slot="bottom">
            <li><a href="">Mugar Memorial</li>
            <li><a href="">Music Library</li>
            <li><a href="">...</li>
            <li><a href="">Science and Engineering Library</li>
          </ul>
        </bulib-promo>
      </div>
    `)),l("h3",null,"Using CSS Variables to Adjust Colors"),l("p",null,"There are a number of CSS Variables (see ",l("inlineCode",{parentName:"p"},"bulib-promo.css"),") that you can customize to adjust the color, padding, and size."),l("p",null,"The ones for color are particularly useful:"),l("pre",null,l("code",u({parentName:"pre"},{className:"language-css"}),"/* make the `top` black with orange letters */\n--bulib-promo-top-text: orange;\n--bulib-promo-top-background: black;\n\n/* make the `bottom` orange with black letters */\n--bulib-promo-bottom-text: black;\n--bulib-promo-bottom-background: orange;\n")),l(b,{withToolbar:!0,mdxType:"Preview"},l(m,{name:"variability",mdxType:"Story"},e`
      <style type="text/css">
        div.custom-variables { 
          /* general */
          --bulib-promo-max-width: 550px;
          --bulib-promo-border-radius: 15px;
          --bulib-promo-padding-horizontal: 30px;
          --bulib-promo-padding-vertical: 15px;
          /* top */ 
          --bulib-promo-top-text: orange;
          --bulib-promo-top-background: black;
          /* main */ 
          --bulib-promo-main-background: var(--color-primary-background-dark, black);
          /* bottom */
          --bulib-promo-bottom-text: black;
          --bulib-promo-bottom-background: orange;
        }
      </style>
      <div class="custom-variables">
        <bulib-promo>
          <div slot="top" class="flexnw flex-between">
            <h2 class="mvn">Happy Fall!</h2>
            <small><em>(and go RIT Tigers)</em></small>
          </div>
          <img slot="main" height="350px" src="https://www.bu.edu/usc/files/2014/05/banner9.jpg">
          <div slot="bottom" class="big-text">
            <strong>Customizing CSS Variables</strong>
            <p>css variables control a number of aspects of many of our variables across our sites</p>
            <p>
              if ever you get bored, pick a web component or an active page any of our sites 
              and start fiddling with the css variables in the <code>body</code> section of the 
              chrome 'elements' inspector under the 'styles' tab. 
            </p>
            <a class="bulib-btn secondary mhn" href="https://dev.to/samanthaming/css-variables-8di">learn more about css variables</a>
          </div>
        </bulib-promo>
      </div>
    `)),l("h2",null,"A Brief Note About How it Works"),l("p",null,"Unlike many of our other elements that use ",l("em",{parentName:"p"},"attributes")," to control the look of the behavior (like you would with ",l("inlineCode",{parentName:"p"},"class"),")..."),l("pre",null,l("code",u({parentName:"pre"},{className:"language-html"}),'<bulib-component attribute_1="value1" attribute_2="value2"></bulib-component>\n')),l("p",null,"...this component looks for entire elements that have been plopped ",l("em",{parentName:"p"},"inside")," of it with particular ",l("inlineCode",{parentName:"p"},"slot")," names:"),l("pre",null,l("code",u({parentName:"pre"},{className:"language-html"}),'<bulib-promo>\n  <div slot="top">....</div>\n  <img slot="main" src="...">\n  <div slot="bottom"></div>\n</bulib-promo>\n')),l("p",null,"This allows for greater customization and flexibility, while ensuring that a fallback exists, should the web component fail."),l("h2",null,"API - Properties"),l(p,{of:"bulib-promo",mdxType:"Props"}))}d.isMDXComponent=!0;const g=o(e`<bulib-promo debug></bulib-promo>`);g.story={},g.story.name="default",g.story.parameters={mdxSource:"html`<bulib-promo debug></bulib-promo>`"};const y=o(e`
      <bulib-promo>
        <div slot="top">
          <h2>high-level label</h2>
        </div>
        <img slot="main" src="https://via.placeholder.com/500x350">
        <div slot="bottom">
          <h3>maybe our secondary label or heading</h3>
          <p>this is the description explaining the image and/or calls to action</p>
          <div class="flexnw flex-around">
            <a class="bulib-btn mhn">primary call-to-action</a>
            <a class="bulib-btn secondary mhn">secondary call-to-action</a>
          </div>
        </div>
      </bulib-promo>
    `);y.story={},y.story.name="example",y.story.parameters={mdxSource:'html`\n      <bulib-promo>\n        <div slot="top">\n          <h2>high-level label</h2>\n        </div>\n        <img slot="main" src="https://via.placeholder.com/500x350">\n        <div slot="bottom">\n          <h3>maybe our secondary label or heading</h3>\n          <p>this is the description explaining the image and/or calls to action</p>\n          <div class="flexnw flex-around">\n            <a class="bulib-btn mhn">primary call-to-action</a>\n            <a class="bulib-btn secondary mhn">secondary call-to-action</a>\n          </div>\n        </div>\n      </bulib-promo>\n    `'};const v=o(e`
      <bulib-promo>
        <img slot="main" src="https://via.placeholder.com/500x350?text=this+is+a+custom+'<img>'">
        <div slot="bottom">
          <h3>this is a custom heading</h3>
          <p>this is a custom description</p>
          <a class="bulib-btn mhn">no secondary option this time</a>
        </div>
      </bulib-promo>
    `);v.story={},v.story.name="no-top",v.story.parameters={mdxSource:'html`\n      <bulib-promo>\n        <img slot="main" src="https://via.placeholder.com/500x350?text=this+is+a+custom+\'<img>\'">\n        <div slot="bottom">\n          <h3>this is a custom heading</h3>\n          <p>this is a custom description</p>\n          <a class="bulib-btn mhn">no secondary option this time</a>\n        </div>\n      </bulib-promo>\n    `'};const f=o(e`
      <bulib-promo>
        <div slot="top">
          <h3>this is a custom '<code>top heading</code>'</h3>
          <p>we'll even add a bit of a description here to explain the image, (we'll opt to not have a cta in this example)</p>
        </div>
        <img slot="main" src="https://via.placeholder.com/750x300?text=this+is+a+different+custom+img">
      </bulib-promo>
    `);f.story={},f.story.name="no-bottom-heading",f.story.parameters={mdxSource:'html`\n      <bulib-promo>\n        <div slot="top">\n          <h3>this is a custom \'<code>top heading</code>\'</h3>\n          <p>we\'ll even add a bit of a description here to explain the image, (we\'ll opt to not have a cta in this example)</p>\n        </div>\n        <img slot="main" src="https://via.placeholder.com/750x300?text=this+is+a+different+custom+img">\n      </bulib-promo>\n    `'};const x=o(e`
      <bulib-promo>
        <h2 slot="top">Library Hours</h2>
        <img slot="main" height="450px" src="https://i.pinimg.com/originals/c8/1e/14/c81e1445f01e19c6fd7dfb0b0ba4e359.jpg" >
        <div slot="bottom" class="flexw flex-center">
          <div class="half-width">
            <p class="big-text">
              Different libraries are open at different times. We use LibCal and 
              <code>bulib-hours</code> to manage that.
            </p>
            <a href="https://www.bu.edu/library/about/hours/" class="bulib-btn bigger-text bold">see all location hours</a>
          </div>
          <ul>
            <li><bulib-hours icon="local_library" library="mugar-memorial"></bulib-hours></li>
            <li><bulib-hours icon="business" library="pardee"></bulib-hours></li>
            <li><bulib-hours icon="school" library="pickering"></bulib-hours></li>
            <li><bulib-hours icon="science" library="sel"></bulib-hours></li>
            <li><bulib-hours icon="cloud_upload" library="astronomy"></bulib-hours></li>
          </li>
        </p>
      </bulib-promo>
    `);x.story={},x.story.name="unconventional",x.story.parameters={mdxSource:'html`\n      <bulib-promo>\n        <h2 slot="top">Library Hours</h2>\n        <img slot="main" height="450px" src="https://i.pinimg.com/originals/c8/1e/14/c81e1445f01e19c6fd7dfb0b0ba4e359.jpg" >\n        <div slot="bottom" class="flexw flex-center">\n          <div class="half-width">\n            <p class="big-text">\n              Different libraries are open at different times. We use LibCal and \n              <code>bulib-hours</code> to manage that.\n            </p>\n            <a href="https://www.bu.edu/library/about/hours/" class="bulib-btn bigger-text bold">see all location hours</a>\n          </div>\n          <ul>\n            <li><bulib-hours icon="local_library" library="mugar-memorial"></bulib-hours></li>\n            <li><bulib-hours icon="business" library="pardee"></bulib-hours></li>\n            <li><bulib-hours icon="school" library="pickering"></bulib-hours></li>\n            <li><bulib-hours icon="science" library="sel"></bulib-hours></li>\n            <li><bulib-hours icon="cloud_upload" library="astronomy"></bulib-hours></li>\n          </li>\n        </p>\n      </bulib-promo>\n    `'};const w=o(e`
      <style type="text/css">
        div.promo-row { display: flex; grid-gap: 20px; }
        div.promo-row > bulib-promo { flex: 1; }
      </style>
      <div class="promo-row">
        <bulib-promo class="auto-height">
          <h2 slot="top">Library Hours</h2>
          <img slot="main" src="https://www.bu.edu/library/files/2012/04/mugar_small-150x115.jpg"
          <a slot="bottom" class="bulib-btn mhn">All Location Hours</a>
        </bulib-promo>
        <bulib-promo>
          <h2 slot="bottom">Howard Gotlieb Archival Research Center</h2>
          <img slot="main" src="http://archives.bu.edu/documents/10184/15899/about-hgarc.jpg/9b958872-9fde-482f-a579-113efacc2f2c?t=1397674399156">
        </bulib-promo>
        <bulib-promo>
          <h2 slot="top">Library Locations</h2>
          <img slot="main" src="https://www.bu.edu/library/files/2012/04/astronomy_small-150x115.jpg">
          <ul slot="bottom">
            <li><a href="">Mugar Memorial</li>
            <li><a href="">Music Library</li>
            <li><a href="">...</li>
            <li><a href="">Science and Engineering Library</li>
          </ul>
        </bulib-promo>
      </div>
    `);w.story={},w.story.name="unison",w.story.parameters={mdxSource:'html`\n      <style type="text/css">\n        div.promo-row { display: flex; grid-gap: 20px; }\n        div.promo-row > bulib-promo { flex: 1; }\n      </style>\n      <div class="promo-row">\n        <bulib-promo class="auto-height">\n          <h2 slot="top">Library Hours</h2>\n          <img slot="main" src="https://www.bu.edu/library/files/2012/04/mugar_small-150x115.jpg"\n          <a slot="bottom" class="bulib-btn mhn">All Location Hours</a>\n        </bulib-promo>\n        <bulib-promo>\n          <h2 slot="bottom">Howard Gotlieb Archival Research Center</h2>\n          <img slot="main" src="http://archives.bu.edu/documents/10184/15899/about-hgarc.jpg/9b958872-9fde-482f-a579-113efacc2f2c?t=1397674399156">\n        </bulib-promo>\n        <bulib-promo>\n          <h2 slot="top">Library Locations</h2>\n          <img slot="main" src="https://www.bu.edu/library/files/2012/04/astronomy_small-150x115.jpg">\n          <ul slot="bottom">\n            <li><a href="">Mugar Memorial</li>\n            <li><a href="">Music Library</li>\n            <li><a href="">...</li>\n            <li><a href="">Science and Engineering Library</li>\n          </ul>\n        </bulib-promo>\n      </div>\n    `'};const k=o(e`
      <style type="text/css">
        div.custom-variables { 
          /* general */
          --bulib-promo-max-width: 550px;
          --bulib-promo-border-radius: 15px;
          --bulib-promo-padding-horizontal: 30px;
          --bulib-promo-padding-vertical: 15px;
          /* top */ 
          --bulib-promo-top-text: orange;
          --bulib-promo-top-background: black;
          /* main */ 
          --bulib-promo-main-background: var(--color-primary-background-dark, black);
          /* bottom */
          --bulib-promo-bottom-text: black;
          --bulib-promo-bottom-background: orange;
        }
      </style>
      <div class="custom-variables">
        <bulib-promo>
          <div slot="top" class="flexnw flex-between">
            <h2 class="mvn">Happy Fall!</h2>
            <small><em>(and go RIT Tigers)</em></small>
          </div>
          <img slot="main" height="350px" src="https://www.bu.edu/usc/files/2014/05/banner9.jpg">
          <div slot="bottom" class="big-text">
            <strong>Customizing CSS Variables</strong>
            <p>css variables control a number of aspects of many of our variables across our sites</p>
            <p>
              if ever you get bored, pick a web component or an active page any of our sites 
              and start fiddling with the css variables in the <code>body</code> section of the 
              chrome 'elements' inspector under the 'styles' tab. 
            </p>
            <a class="bulib-btn secondary mhn" href="https://dev.to/samanthaming/css-variables-8di">learn more about css variables</a>
          </div>
        </bulib-promo>
      </div>
    `);k.story={},k.story.name="variability",k.story.parameters={mdxSource:'html`\n      <style type="text/css">\n        div.custom-variables { \n          /* general */\n          --bulib-promo-max-width: 550px;\n          --bulib-promo-border-radius: 15px;\n          --bulib-promo-padding-horizontal: 30px;\n          --bulib-promo-padding-vertical: 15px;\n          /* top */ \n          --bulib-promo-top-text: orange;\n          --bulib-promo-top-background: black;\n          /* main */ \n          --bulib-promo-main-background: var(--color-primary-background-dark, black);\n          /* bottom */\n          --bulib-promo-bottom-text: black;\n          --bulib-promo-bottom-background: orange;\n        }\n      </style>\n      <div class="custom-variables">\n        <bulib-promo>\n          <div slot="top" class="flexnw flex-between">\n            <h2 class="mvn">Happy Fall!</h2>\n            <small><em>(and go RIT Tigers)</em></small>\n          </div>\n          <img slot="main" height="350px" src="https://www.bu.edu/usc/files/2014/05/banner9.jpg">\n          <div slot="bottom" class="big-text">\n            <strong>Customizing CSS Variables</strong>\n            <p>css variables control a number of aspects of many of our variables across our sites</p>\n            <p>\n              if ever you get bored, pick a web component or an active page any of our sites \n              and start fiddling with the css variables in the <code>body</code> section of the \n              chrome \'elements\' inspector under the \'styles\' tab. \n            </p>\n            <a class="bulib-btn secondary mhn" href="https://dev.to/samanthaming/css-variables-8di">learn more about css variables</a>\n          </div>\n        </bulib-promo>\n      </div>\n    `'};const T={title:"Web Components|bulib-promo",parameters:{component:"bulib-promo",options:{selectedPanel:"storybookjs/knobs/panel"}},decorators:[i,t],includeStories:["defaultStory","example","noTop","noBottomHeading","unconventional","unison","variability"]},C={default:"web-components-bulib-promo--default-story",example:"web-components-bulib-promo--example","no-top":"web-components-bulib-promo--no-top","no-bottom-heading":"web-components-bulib-promo--no-bottom-heading",unconventional:"web-components-bulib-promo--unconventional",unison:"web-components-bulib-promo--unison",variability:"web-components-bulib-promo--variability"};T.parameters=T.parameters||{},T.parameters.docs=a({},T.parameters.docs||{},{page:()=>l(r,{mdxStoryNameToId:C},l(d,null))});export default T;export{g as defaultStory,y as example,f as noBottomHeading,v as noTop,x as unconventional,w as unison,k as variability};
//# sourceMappingURL=promo.stories-7335c035.js.map
