import{h as t}from"./lit-html-2435d3b6.js";import{L as i}from"./lit-element-fdaadb84.js";import{s as l}from"./google_analytix-df42f176.js";import{g as s}from"./lib_info_helper-f3dcb385.js";window.customElements.define("bulib-locoso",class extends i{static get properties(){return{link_class:{type:String},library:{type:String,notify:!0},debug:{type:Boolean}}}render(){let i=s(this.library)||{};this._logToConsole("raw lib_data from lib_info_helper: \n"+JSON.stringify(i));let l=i.name||"BU Libraries",e=i.address||["771 Commonwealth Avenue","Boston, MA 02215"],a=i.website||"https://www.bu.edu/library/about",o=i.contacts||{phone:"617-353-2700",email:"ask@bu.edu",text:"617-431-2427"},n=this._prepareContacts(o),r=this.library&&"help"!=this.library;this._logToConsole("lib_name: "+l+", include_libhours: "+r);let c=t`
        <h3>Follow Us</h3>
        <ul aria-description="list of social media accounts" class="no-bullet inline-list plm">
          <li><a target="_blank" title="twitter" class="white-link" href="http://twitter.com/bulibraries"><img alt="twitter icon" class="sm-icon white-link" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/icons8-twitter-48.png"></a></li>
          <li><a target="_blank" title="facebook" class="white-link" href="http://facebook.com/bostonulibraries"><img alt="facebook icon" class="sm-icon white-link" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/icons8-facebook-48.png"></a></li>
          <li><a target="_blank" title="instagram" class="white-link" href="https://instagram.com/bulibraries"><img alt="instagram icon" class="sm-icon white-link" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/icons8-instagram-48.png"></a></li>
        </ul>
      `;return t`
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/bundle.css">
      <style>
        /* layout and responsiveness */
        .locoso-wrapper { 
          display: flex; 
          justify-content: space-between; 
          padding-left: var(--padding-small, 5px); 
          padding-right: var(--padding-small, 5px);
        }

        /* list styles, */
        .locoso-left ul, .locoso-left ol { margin: 5px 0px; padding-left: 0; padding-bottom: 10px; }

        /* padding and margins */
        .prm { margin-right: 10px; padding-right: 10px; }
        .sm-icon { width: 30px; height: 30px; border: solid transparent 1px; }
        .sm-icon:hover { width: 30px; height: 30px; border: solid white 1px; }
      </style>
      <div class="locoso-wrapper">
        <div class="locoso-left">
          <div class="txtv">
            <h3 class="inline">Visit Us</h3>&nbsp;
            ${r?t`-&nbsp;<bulib-hours class="inline" link_class="${this.link_class}" library="${this.library}" short></bulib-hours>`:t``}
          </div>
          <ol class="no-bullet" aria-label="address">
            <li>${l}</li>
            ${e.map(i=>t`<li>${i}</li>`)}
            <li>
              <small>
                <a title="${l} website" class="${this.link_class}" @click="${t=>{this._logGAEvent("website")}}"
                   aria-label="Open library site" href="${a}">website</a>
                <a title="get directions" class="${this.link_class}" @click="${t=>{this._logGAEvent("directions")}}"
                   aria-label="Directions to the Library" href="${"https://google.com/maps/search/"+encodeURI("Boston University "+l)}" 
                   target="_blank">directions &raquo;</a>
              </small>
            </li>
          </ol>
        </div>
        <div class="locoso-right">
          <h3 class="inline">Contact Us</h3>
          <ul class="no-bullet" aria-label="contact-links">
            ${n.map(i=>t`
              <li>${i.text} <a class="${this.link_class}" href="${i.url}" 
                               @click="${t=>{this._logGAEvent(i.text)}}">${i.val}</a>
              </li>`)}
          </ul>
          ${c}
        </div>
      </div>
    `}_prepareContacts(t){if(Object.keys(t).length<1)return{};let i=[];return t.phone&&i.push({text:"call",url:"tel:"+t.phone,val:t.phone}),t.email&&i.push({text:"email",url:"mailto:"+t.email,val:t.email}),t.text&&i.push({text:"text",url:"sms:"+t.text,val:t.text}),t.fax&&i.push({text:"fax",url:"fax:"+t.fax,val:t.fax}),this._logToConsole(`${i.length.toString()} items found for 'contacts'.`),i}_logGAEvent(t){l("bulib-locoso",t,this.library)}_logToConsole(t){this.debug&&console.log("bulib-locoso) "+t)}});
//# sourceMappingURL=bulib-locoso-b78c45e3.js.map
