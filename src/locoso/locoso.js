import {LitElement, html} from 'lit-element/lit-element';
import {getLibraryInfoFromCode} from '../_helpers/lib_info_helper.js';

import {sendGAEvent} from '../_helpers/google_analytix';

const ALLOW_HOURS_DISPLAY = true;

/**
 * display the *LO*cation, *CO*ntact, and *SO*cial media information for
 *    a given library within the Boston Universities System.
 */
export default class Locoso extends LitElement {

  static get properties() {
    return {
      /** optional additional class added to each link in the rendered HTML */
      link_class: {type: String},
      /** current library code used as the key to swap between locoso data entries */
      library: {type: String, notify:true},
      
      /** [debugging] log events to console */
      debug: {type: Boolean}
    };
  }

  render() {
    let myLocoso = getLibraryInfoFromCode(this.library) || {};
    this._logToConsole("raw lib_data from lib_info_helper: \n" + JSON.stringify(myLocoso));

    let lib_name = myLocoso["name"] || "BU Libraries";
    let address = myLocoso["address"] || ["771 Commonwealth Avenue","Boston, MA 02215"];
    let website = myLocoso["website"] || "https://www.bu.edu/library/about";

    let raw_contacts = myLocoso["contacts"] || {"phone":"617-353-2700","email":"ask@bu.edu","text":"617-431-2427"};
    let contacts = this._prepareContacts(raw_contacts);
    
    let include_libhours = ALLOW_HOURS_DISPLAY && this.library && this.library != "help";
    this._logToConsole("lib_name: " + lib_name + ", include_libhours: " + include_libhours);
    
    let socialDisplay = html`
        <h3>Follow Us</h3>
        <ul aria-description="list of social media accounts" class="no-bullet inline-list plm">
          <li><a target="_blank" title="twitter" class="white-link" href="http://twitter.com/bulibraries"><img alt="twitter icon" class="sm-icon white-link" src="https://cdn.jsdelivr.net/npm/@bostonuniversity/bulib-wc@latest/dist/icons/icons8-twitter-48.png"></a></li>
          <li><a target="_blank" title="facebook" class="white-link" href="http://facebook.com/bostonulibraries"><img alt="facebook icon" class="sm-icon white-link" src="https://cdn.jsdelivr.net/npm/@bostonuniversity/bulib-wc@latest/dist/icons/icons8-facebook-48.png"></a></li>
          <li><a target="_blank" title="instagram" class="white-link" href="https://instagram.com/bulibraries"><img alt="instagram icon" class="sm-icon white-link" src="https://cdn.jsdelivr.net/npm/@bostonuniversity/bulib-wc@latest/dist/icons/icons8-instagram-48.png"></a></li>
        </ul>
      `;
    
    return html`
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@bostonuniversity/bulib-wc@latest/dist/bundle.css">
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
            ${include_libhours 
              ? html`-&nbsp;<bulib-hours class="inline" link_class="${this.link_class}" library="${this.library}" short></bulib-hours>` 
              : html``
            }
          </div>
          <ol class="no-bullet" aria-label="address">
            <li>${lib_name}</li>
            ${address.map((l) => html`<li>${l}</li>`)}
            <li>
              <small>
                <a title="${lib_name} website" class="${this.link_class}" @click="${(ev) => {this._logGAEvent('website');}}"
                   aria-label="Open library site" href="${website}">website</a>
                <a title="get directions" class="${this.link_class}" @click="${(ev) => {this._logGAEvent('directions');}}"
                   aria-label="Directions to the Library" href="${'https://google.com/maps/search/' + encodeURI("Boston University " + lib_name)}" 
                   target="_blank">directions &raquo;</a>
              </small>
            </li>
          </ol>
        </div>
        <div class="locoso-right">
          <h3 class="inline">Contact Us</h3>
          <ul class="no-bullet" aria-label="contact-links">
            ${contacts.map((c) => html`
              <li>${c.text} <a class="${this.link_class}" href="${c.url}" 
                               @click="${(ev) => {this._logGAEvent(c.text);}}">${c.val}</a>
              </li>`
             )}
          </ul>
          ${socialDisplay}
        </div>
      </div>
    `;
  }

  /** use the raw 'contacts' data to populate a basic list that can more easily displayed as a list of links */
  _prepareContacts(rawContacts){
    if(Object.keys(rawContacts).length < 1){ return {}; }
    
    let contacts = [];
    if(rawContacts["phone"]){
      contacts.push( {"text":"call", "url":"tel:"+rawContacts["phone"], "val":rawContacts["phone"]} );
    }
    if(rawContacts["email"]){
      contacts.push( {"text":"email", "url":"mailto:"+rawContacts["email"], "val":rawContacts["email"] } );
    }
    if(rawContacts["text"]){
      contacts.push( {"text":"text", "url":"sms:"+rawContacts["text"], "val":rawContacts["text"] } );
    }
    if(rawContacts["fax"]){
      contacts.push( {"text":"fax", "url":"fax:"+rawContacts["fax"], "val":rawContacts["fax"] } );
    }
    this._logToConsole(`${contacts.length.toString()} items found for 'contacts'.`);
    return contacts;
  }

  _logGAEvent(clickedContent){
    sendGAEvent('bulib-locoso', clickedContent, this.library);
  }
  
  _logToConsole(message){
    if(this.debug){ console.log("bulib-locoso) " + message); }
  }

}
