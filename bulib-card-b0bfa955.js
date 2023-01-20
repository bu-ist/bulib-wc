import{h as i}from"./lit-html-2435d3b6.js";import{L as t}from"./lit-element-fdaadb84.js";import{s as e}from"./google_analytix-df42f176.js";window.customElements.define("bulib-card",class extends t{createRenderRoot(){return this}static get properties(){return{title:{type:String},description:{type:String},icon:{type:String},link:{type:String},small:{type:Boolean},debug:{type:Boolean}}}render(){let t=this.action||!this.link?"javascript:void(0);":this.link;return i`
      <div class="card${!0===this.small?" small":""}">
        <i class="material-icons" @click="${i=>this._clickAction()}">${this.icon}</i>
        <div class="inline">
          <h3><a @click="${i=>this._clickAction()}" href="${t}">${this.title}</a></h3>
          <p>${this.description}</p>
        </div>
      </div>
    `}_clickAction(i){e("bulib-card",this.title.toLowerCase(),window.location.pathname),this.link&&(window.location=this.link)}_logToConsole(i){this.debug&&console.log("bulib-card) "+i)}});
//# sourceMappingURL=bulib-card-b0bfa955.js.map
