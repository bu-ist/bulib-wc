import{h as e}from"./lit-html-2435d3b6.js";import{L as r,c as t}from"./lit-element-fdaadb84.js";import{s as o}from"./google_analytix-df42f176.js";const a=[{value:"help",name:"Help Topics",placeholder:"Search for help topics",domain:"https://askalibrarian.bu.edu/search/?t=0&q="},{value:"pardee-help",name:"Business FAQs",placeholder:"Search for business help topics",domain:"https://askalibrarian.bu.edu/businessFAQs/search/?t=0&q="},{value:"primo",name:"BU Libraries Search",placeholder:"Search library resources",domain:"https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=BU&institution=BOSU&search_scope=default_scope&highlight=true&lang=en_US&query=any,contains,"},{value:"wp",name:"Main Site",placeholder:"Search library info/services",domain:"https://search.bu.edu/?site=www.bu.edu%2Flibrary&q="},{value:"industries",name:"Industry Survey Locator",placeholder:"Search for industry surveys",domain:"https://buprimo.hosted.exlibrisgroup.com/primo-explore/search?vid=ISL&institution=BOSU&search_scope=default_scope&highlight=true&lang=en_US&query=any,contains,"},{value:"guides",name:"Research Guides",placeholder:"Search research guides",domain:"http://library.bu.edu/srch.php?q="},{value:"openbu",name:"Open BU",placeholder:"Search BU Digital Collections",domain:"https://open.bu.edu/discover?query="},{value:"db",name:"BU Databases",placeholder:"Search for databases",domain:"http://library.bu.edu/az.php?q="},{value:"worldcat",name:"OCLC WorldCat",placeholder:"BU Libraries Search",domain:"https://bu.on.worldcat.org/search?queryString="},{value:"directory",name:"Staff Directory",placeholder:"Search for people at BU",domain:"https://www.bu.edu/phpbin/directory/?q="},{value:"hgar",name:"Archival Research Center",placeholder:"Search the BU Archive",domain:"http://archives.bu.edu/search/?search=SEARCH&query="}],s=13,i=a.map(e=>e.value),n=function(e,r){if(r&&r.length||(r=a),!e&&r&&r.length>=1)return r[0];for(let t=0;t<r.length;t++){let o=r[t];if(o.value===e)return o}return r&&0==r.length?"":r[0]},l=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"primo";return e.target.defaultValue||r};window.customElements.define("bulib-search",class extends r{constructor(){super(),this._options=[],this._selected={}}static get properties(){return{str_selected:{type:String},str_options:{type:String},search_btn_classes:{type:String},debug:{type:Boolean},prevent_action:{type:Boolean}}}static get styles(){return[t`
        :host(bulib-search.secondary) { 
          --color-primary-background: var(--color-secondary-background, #eee);
          --color-primary-background-dark: var(--color-secondary-background, #eee);
          --color-primary-background-light: var(--color-secondary-background, #eee);
          --color-primary-text: var(--color-secondary-text, #333);
        }
        :host(bulib-search.secondary) input#search-query-input { 
          border: 2px solid var(--color-secondary-background-dark);
          border-right: 0px;
        }
        .bulib-search-wrapper {
          width: 100%;
          background-color: var(--color-primary-background, #212121);
          background: linear-gradient(var(--color-primary-background-dark), var(--color-primary-background-light));
          border-radius: 4px;
          font-family: 'Benton', sans-serif !important;
        }
        #bulib-search { 
          display: flex;
          flex-wrap: wrap;
        }
        .search-box, .search-options {
          margin: 0.2rem 0.4rem; 
        }
        .search-box {
          display: flex; 
          flex: auto;
          max-width: 750px;
        }
        .search-box > input {
          flex: 80%;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          border: 0px;
          padding-left: 6px;
          min-width: 200px;
        }
        .search-options {
          padding-top: var(--bulib-search-options-padding, 10px);
          color: var(--color-primary-text, white);
          flex: auto;
        }
        .search-options > label {
          margin-right: 0.5rem;
          padding-left: 0.5rem;
          font-size: var(--bulib-search-options-label-size, medium);
          cursor: pointer;
        }
        input[type=radio] {
          cursor: pointer;
          margin-right: 7px;
        }
        button {
          background-color: var(--color-button-background); 
          color: var(--color-button-text, white); 
          cursor: pointer;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          border: 0px;
          font-family: 'Source Sans Pro';
        }
        button:hover, button:focus, button:active { 
          background-color: var(--color-button-background-dark, #1B598C);
         }
        .hidden { display: none; }

        /* medium-sized screen and above */
        @media only screen and (min-width: 300px){
          #bulib-search { padding: var(--bulib-search-padding, 10px); }
          .search-box > input, input[type=radio] { 
            font-size: medium; 
          }
        }
      `]}render(){this._setSelectedOptions();let r=!this._options||this._options.length<=1?" hidden":"";return e`
      <div class="bulib-search-wrapper">
        <div id="bulib-search">
          <div class="search-box">
            <input type="text" id="search-query-input" placeholder="${this._selected.placeholder}" 
              @keypress="${e=>this._handleSearchEnter(e)}">
            <button type="submit" title="Search ${this._selected.name}" class="${this.search_btn_classes}" 
              @click="${e=>this._doSearch()}" style="margin-left: 0px;">
              <!-- material-icon svg from https://material.io/resources/icons/?icon=search&style=baseline -->
              <svg xmlns="http://www.w3.org/2000/svg" style="padding-top: 2px;" width="30" height="30" fill="white" viewBox="0 0 24 24">
                <path font-weight="bold" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </button>
          </div>
          <div class="search-options${r}">
            ${this._options.map(r=>e`
              <label>
                ${this._selected.value==r.value?e`<input type="radio" name="source" value="${r.value}" checked
                            @change="${e=>this.str_selected=l(e)}"
                            @keypress="${e=>this._handleSearchEnter(e)}">${r.name}`:e`<input type="radio" name="source" value="${r.value}"
                            @change="${e=>this.str_selected=l(e)}"
                            @keypress="${e=>this._handleSearchEnter(e)}">${r.name}`}
              </label>`)}
          </div>
        </div>
      </div>
    `}_setSelectedOptions(){let e,r,t;this._options=[],this._selected={},this.str_options&&""!==this.str_options||(this.str_options=["primo"],this.str_selected="primo");let o=this.str_options.includes(" ")?this.str_options.split(" "):[this.str_options];for(e=0;e<o.length;e++)t=o[e],t&&i.includes(t)&&(r=n(t),r&&this._options.push(r));this._selected=n(this.str_selected,this._options)}_doSearch(){let e=this.shadowRoot.querySelector("input#search-query-input"),r=e?e.value:"",t=Object.keys(this._selected).length>0?this._selected:this._options[0],a=t.value,s=t.domain||"",i=s.length>80?s.substring(0,80)+"...":s;this._logToConsole(`searching '${a}' for query: '${r}' on domain: '${i}'`),!0==!this.prevent_action&&(o("bulib-search",a,r),window.location=s+encodeURIComponent(r))}_handleSearchEnter(e){e.keyCode&&e.keyCode===s&&this._doSearch()}_logToConsole(e){this.debug&&console.log("bulib-search) "+e)}});
//# sourceMappingURL=bulib-search-d08aaee6.js.map
