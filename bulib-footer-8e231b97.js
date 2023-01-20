import{h as t}from"./lit-html-2435d3b6.js";import{L as r,c as e}from"./lit-element-fdaadb84.js";import{a as i}from"./google_analytix-df42f176.js";import{a as l,b as s}from"./lib_info_helper-f3dcb385.js";const a={wordpress:{header:"About the Libraries",links:[{title:"About Us",href:"https://www.bu.edu/library/about/"},{title:"Location Hours",href:"https://www.bu.edu/library/about/hours/"},{title:"Visiting the Libraries",href:"https://www.bu.edu/library/help/visiting-the-libraries/"},{title:"Course Materials (Reserves)",href:"https://www.bu.edu/library/services/reserves/"},{title:"Research Guides",href:"https://library.bu.edu/guides/"},{title:"Staff Directory",href:"https://www.bu.edu/library/about/who-we-are/staff-directory/"}]},askalibrarian:{header:"Ask A Librarian",links:[{title:"Subject Guides",href:"https://library.bu.edu/guides/"},{title:"Course Guides",href:"https://www.bu.edu/library/research/guides/course-guides/"},{title:"How-To Guides",href:"https://www.bu.edu/library/help/how-to/"},{title:"Business FAQs",href:"https://askalibrarian.bu.edu/businessFAQs/"},{title:"Make an Appointment",href:"https://www.bu.edu/library/services/reference/appointments/"},{title:"General Help",href:"https://www.bu.edu/library/help/"}]},guides:{header:"Library Guides",links:[{title:"Subject Guides",href:"https://library.bu.edu/guides/"},{title:"Course Guides",href:"https://www.bu.edu/library/research/guides/course-guides/"},{title:"How-To Guides",href:"https://www.bu.edu/library/help/how-to/"},{title:"Make an Appointment",href:"https://www.bu.edu/library/services/reference/appointments/"}]},primo:{header:"BU Libraries Search",links:[{title:"My Library Account",href:"https://www.bu.edu/library/account/"},{title:"Advanced Search",href:"https://www.bu.edu/library/advancedsearch/"},{title:"Browse Search",href:"https://buprimo.hosted.exlibrisgroup.com/primo-explore/browse?vid=BU&lang=en_US"},{title:"Databases List ",href:"https://library.bu.edu/az.php"},{title:"Search Help",href:"https://www.bu.edu/library/help/bu-libraries-search/"},{title:"What's New",href:"https://www.bu.edu/library/help/bu-libraries-search/new-bu-libraries-search-features/"}]}};window.customElements.define("bulib-footer",class extends r{constructor(){super(),this.library="help"}static get styles(){return[e`
        .flex-evenly { justify-content: space-evenly; }
        /* footer grid and colors */
        footer {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          grid-auto-rows: minmax(50px, auto);
          grid-template-areas:
            "ftr-md ftr-md ftr-md ftr-md ftr-md ftr-md ftr-md ftr-md"
            "ftr-rt ftr-rt ftr-rt ftr-rt ftr-rt ftr-rt ftr-rt ftr-rt"
            "ftr-lt ftr-lt ftr-lt ftr-lt ftr-lt ftr-lt ftr-lt ftr-lt";
          grid-gap: 10px;
        }
        .ftr-middle ul { margin-top: 0px; }
        .ftr-middle > div, .ftr-right > div, .ftr-left > div { 
          width: 95%; 
          margin: 0 auto; 
        }
        .ftr-right { padding-bottom: 0px; }

        /* medium-sized screen */
        @media only screen and (min-width: 850px) and (max-width: 1200px){
          footer {
            grid-template-areas:
              "ftr-md ftr-md ftr-md ftr-md ftr-md ftr-md ftr-md ftr-md"
              "ftr-lt ftr-lt ftr-lt ftr-rt ftr-rt ftr-rt ftr-rt ftr-rt";
          }
          .ftr-middle { border-bottom: solid transparent 1px; }
          .ftr-right  { 
            border-bottom: solid transparent 1px !important; 
            padding-bottom: 60px;
          }
          .ftr-middle > div { width: 75%; }
          .ftr-left > div, .ftr-right > div { width: 95%; }
        }
      
        /* large-sized screen */ 
        @media only screen and (min-width: 1100px) and (max-width: 1400px){
          footer {
            grid-template-areas: "ftr-lt ftr-lt ftr-md ftr-md ftr-md ftr-rt ftr-rt ftr-rt";
          }
          .ftr-middle { border-bottom: solid transparent 1px !important; }
          .ftr-middle > div { width: 85%; margin: 0 auto; }
          .ftr-right  { 
            border-bottom: solid transparent 1px !important; 
            padding-bottom: 60px;
          } 
        }

        /* x-large-sized screen */
        @media only screen and (min-width: 1400px){
          footer {
            grid-template-areas: "ftr-lt ftr-lt ftr-md ftr-md ftr-md ftr-rt ftr-rt ftr-rt";
          }
          .ftr-middle { border-bottom: solid transparent 1px !important; }
          .ftr-middle > div { width: 85%; margin: 0 auto; }
          .ftr-right  { 
            border-bottom: solid transparent 1px !important; 
            padding-bottom: 0px !important;
          }
        }

        /* map classes to grid areas */
        .ftr-left   { grid-area: ftr-lt; border-bottom: solid transparent 1px; padding-bottom: 20px; }
        .ftr-middle { grid-area: ftr-md; border-bottom: solid lightgrey 1px; }
        .ftr-right  { grid-area: ftr-rt; border-bottom: solid lightgrey 1px; }

        /* '*Boston University* Libraries' styling */
        .bulib-typeface h3 a > span { font-weight: 400; }
        .bulib-typeface a { 
          text-decoration: none !important; 
          font-size: large; 
          color: var(--color-primary-text-light, white);
        }

        /* firefox fix to stop the 'Follow Us' from becoming centered */
        ::slotted(h3) { text-align: left; }
      `]}static get properties(){return{library:{type:String},host_site:{type:String},debug:{type:Boolean},curr_url:{type:String}}}connectedCallback(){super.connectedCallback();let t=this.curr_url?this.curr_url:window.location.href||"",r=l(t);this._logToConsole("selected library code: "+r),this.library=r}updated(){let t=this.curr_url?this.curr_url:window.location.href,r=this.host_site,e=s(t);["about","research","services"].includes(e)?this.host_site="wordpress":this.host_site="help"==e?"askalibrarian":"guides"==e?"guides":"search"==e||"primo"==e?"primo":"askalibrarian",r!=this.host_site&&this._logToConsole(`'host_site' changed from '${r}' to '${this.host_site}'`);let i=this.library,a=this.curr_url?l(t):this.library;this.library=a,i!=this.library&&this._logToConsole(`library changed from '${i}' to '${this.library}'.`)}render(){let r=a[this.host_site]||a.askalibrarian,e=r.links,l=parseInt(e.length/2),s=e.slice(0,l),o=e.slice(l,e.length),d=t`
      <h3 class="txtc">${r.header}</h3>
      <div class="flexnw flex-evenly txtl">
        <ul class="no-bullet">
          ${s.map(r=>t`<li class="mbm mla">
            <a class="white-link" href="${r.href}" @click="${t=>{i(t,"bulib-footer")}}">${r.title}</a>
          </li>`)}
        </ul>
        <ul class="no-bullet">
          ${o.map(r=>t`<li class="mbm mla">
            <a class="white-link" href="${r.href}" @click="${t=>{i(t,"bulib-footer")}}">${r.title}</a>
          </li>`)}
        </ul>
      </div>
    `;return t`
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/bundle.min.css">
      <div class="footer-wrapper">
        <footer>
          <div class="ftr-left">
            <div class="txtc">
              <div class="bulib-typeface">
                <h3>
                  <a @click="${t=>{i(t,"bulib-footer")}}" href="https://www.bu.edu/library">
                    <strong>Boston University</strong> <span>Libraries</span>
                  </a>
                </h3>
              </div>
            
              <div style="font-size: small;">
                <small>
                  <a title="Copyright" class="white-link prs" href="https://www.bu.edu/copyright" target="_blank"
                    @click="${t=>{i(t,"bulib-footer")}}">&copy; Copyright ${(new Date).getFullYear()}</a>
                </small>
                <small>
                  <a title="Privacy Statement" class="white-link" target="_blank" 
                    href="https://www.bu.edu/policies/information-security-home/digital-privacy-statement/"
                    @click="${t=>{i(t,"bulib-footer")}}">Privacy Statement</a>
                </small>
              </div>
              <div>
                <ul class="no-bullet inline-list ptl">
                  <li><a title="Boston University Home Page" class="white-link" href="https://www.bu.edu/"
                          @click="${t=>{i(t,"bulib-footer")}}">BU Home</a></li>
                  <li><a title="Search available/licensed content" class="white-link" href="https://www.bu.edu/library/search"
                          @click="${t=>{i(t,"bulib-footer")}}">Search</a></li>
                  <li><a title="Information regarding various BU Libraries" class="white-link" href="https://www.bu.edu/library/about"
                          @click="${t=>{i(t,"bulib-footer")}}">Locations</a></li>
                  <li><a title="Help" class="white-link" href="https://askalibrarian.bu.edu/"
                          @click="${t=>{i(t,"bulib-footer")}}">Help</a></li>
                </ul>
              </div>

            </div>
          </div>
          <div class="ftr-middle txtc">
            <div id="sitemap"><slot name="sitemap">${d}</slot></div>
          </div>
          <div class="ftr-right">
            <div id="ftr-locoso">
              <bulib-locoso library="${this.library}" link_class="white-link"></bulib-locoso>
            </div>
          </div>
        </footer>
      </div>
    `}_logToConsole(t){this.debug&&console.log("bulib-footer) "+t)}});
//# sourceMappingURL=bulib-footer-8e231b97.js.map
