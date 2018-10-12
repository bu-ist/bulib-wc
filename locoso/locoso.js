import {LitElement, html} from '@polymer/lit-element';

class BULoco extends LitElement {

  constructor() {
    super();
    this.locoso = {"mugar-memorial":{"location":{"bu-maps-marker":296,"address":["771 Commonwealth Avenue","Boston, MA 02215"]},"contacts":[{"name":"Reference","phone":"617-353-2700","email":"ask@bu.edu"},{"name":"Circulation","phone":"617-353-3732","email":"mugcirc@bu.edu"},{"name":"Reservation","phone":"617-353-3739","email":"mugarres@bu.edu"}],"social":{"facebook":"mugarlib","twitter":"mugarlib","instagram":"mugarlib"}},"african-studies":{"location":{"bu-maps-marker":240,"address":["771 Commonwealth Avenue, 6th Floor","Boston, MA, 02215"]},"contacts":[{"name":"African Studies","phone":"617-353-3726"}]},"medlib":{"location":{"address":["BU Alumni Medical Library","72 E Concord, L-12","Boston, MA 02118"]},"contacts":[{"name":"Main Number","phone":"617-358-2350","fax":"617-358-2347","email":"refquest@bu.edu"},{"name":"Circulation","phone":"617-358-4902"},{"name":"Interlibrary Loan","phone":"617-358-2352"},{"name":"Reference","phone":"617-358-4810"},{"name":"Computer Lab","phone":"617-358-2344","email":"mugarres@bu.edu"}]},"astronomy":{"location":{"bu-maps-marker":241,"address":["Astronomy Library","725 Commonwealth Avenue","Boston, MA 02445"]},"contacts":[{"name":"Astronomy Library","phone":"617-353-2625"}]},"lawlibrary":{"location":{"address":["765 Commonwealth Avenue, 2nd Floor","Boston, MA 02215"]},"contacts":[{"name":"Reference Desk","phone":"617-353-8411","text":"1-617-997-4475"}]},"hgar":{"location":{"address":["Howard Gotlieb Archival Research Center","771 Commonwealth Avenue, 5th Floor","Boston, MA 02215"]},"contacts":[{"phone":"617-353-3696","fax":"617-353-2838","email":"archives@bu.edu"}],"social":{"facebook":"hgarc","twitter":"BUHGARC"}},"music":{"location":{"bu-maps-marker":255,"address":["771 Commonwealth Avenue, Floor 2","Boston, MA 02215"]},"contacts":[{"name":"General Inquiries","phone":"617-353-3705","email":"musiclib@bu.edu"}],"social":{"twitter":"BUMusicLib","facebook":"bumusiclib"}},"pardee":{"location":{"bu-maps-marker":252,"address":["595 Commonwealth Avenue","Boston, MA 02215"]},"contacts":[{"name":"General Inquiries","phone":"617-353-4301","fax":"617-353-4307","email":"pardstf@bu.edu"},{"name":"Reference","phone":"617-353-4304","email":"pardstf@bu.edu"},{"name":"Circulation","phone":"617-353-4301","email":"pardedoc@bu.edu"},{"name":"Reserves","phone":"617-353-4301","email":"pardres@bu.edu"}],"social":{"twitter":"BUpardeelibrary","facebook":"pardeelibrary"}},"pickering":{"location":{"bu-maps-marker":256,"address":["2 Silber Way","Boston, MA 02215"]},"contacts":[{"name":"General Inquiries","phone":"617-353-3734"}],"social":{"twitter":"BUPickeringLib","facebook":"BUPickeringLibrary"}},"sel":{"location":{"bu-maps-marker":257,"address":["38 Cummington Mall","Boston, MA 02215"]},"contacts":[{"name":"General Inquiries","phone":"617-353-3733","fax":"617-353-3470"},{"name":"Library Hours","phone":"617-358-4125"},{"name":"Reference","phone":"617-353-9454","email":"ask@bu.edu"},{"name":"Circulation","phone":"617-353-3733","email":"selcirc@bu.edu"},{"name":"Reserves","phone":"617-353-3733","email":"selresrv@bu.edu"}],"social":{"twitter":"BUSciEngLib","tumblr":"buscienglib","instagram":"buscienglib"}},"stone":{"location":{"bu-maps-marker":258,"address":["675 Commonwealth Avenue, Floor 2","Boston, MA 02445"]},"contacts":[{"name":"General Inquiries","phone":"617-353-5679"}]},"theology":{"location":{"address":["745 Commonwealth Avenue, Floor 2","Boston, MA 02215"]},"contacts":[{"name":"General Inquiries","phone":"617-353-3034","fax":"617-358-0698","email":"sthlib@bu.edu"},{"name":"Reference","phone":"617-353-3034","email":"sthref@bu.edu"}],"social":{"twitter":"BUSTHLibrary","facebook":"busthlibrary","instagram":"butheologylibrary"}}};
  }

  static get properties() {
    return {
      library: {type: String, notify:true}
    }
  }

  render() {
    let path = window.location.pathname;
    let myLocoso = this.locoso[this.library];

    this.contacts = this._prepareContacts(myLocoso["contacts"][0] || {});
    this.address = myLocoso["location"]["address"] || [];
    this.social = myLocoso["social"] || {};

    return html`
      <style> .no-bullet { list-style:none; } </style>
      <div class="white">
        <strong>Library</strong>:
        <select id="libhours-input" @input=${(e) => this.library = e.currentTarget.value}}>
          <option value="african-studies">African Studies</option>
          <option value="astronomy">Astronomy</option>
          <option value="pickering">Pickering</option>
          <option value="mugar-memorial">Mugar</option>
        </select>
      </div>
      <div class="container">
        <div class="left">
          <h3>Come and Visit!</h3>
          <ol class="no-bullet" aria-label="address">
            ${this.address.map((l) => html`<li>${l}</li>`)}
          </ol>
        </div>
        <div class="right">
          <h3>Contact Us</h3>
          <ul class="no-bullet" aria-label="contact-links">
            ${this.contacts.map((c) => html`<li><a href="${c.url}">${c.text}</a></li>`)}
          </ul>
        </div>
      </div>
    `;
  }

  _prepareContacts(rawContacts){
    let contacts = [];
    if(rawContacts["phone"]){
      contacts.push( {"text":"call", "url":"tel:"+rawContacts["phone"]} );
    }
    if(rawContacts["fax"]){
      contacts.push( {"text":"fax", "url":"fax:"+rawContacts["fax"] } );
    }
    if(rawContacts["text"]){
      contacts.push( {"text":"text", "url":"sms:"+rawContacts["text"] } );
    }
    if(rawContacts["email"]){
      contacts.push( {"text":"email", "url":"mailto:"+rawContacts["email"] } );
    }
    return contacts;
  }

}

customElements.define('bu-loco', BULoco);
