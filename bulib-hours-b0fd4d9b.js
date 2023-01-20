import{d as e,e as t,h as s}from"./lit-html-2435d3b6.js";import{L as l}from"./lit-element-fdaadb84.js";import{s as i}from"./google_analytix-df42f176.js";import{g as o}from"./lib_info_helper-f3dcb385.js";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const n=new WeakMap,r=e((function(){for(var e=arguments.length,s=new Array(e),l=0;l<e;l++)s[l]=arguments[l];return e=>{let l=n.get(e);void 0===l&&(l={lastRenderedIndex:2147483647,values:[]},n.set(e,l));const i=l.values;let o=i.length;l.values=s;for(let n=0;n<s.length&&!(n>l.lastRenderedIndex);n++){const r=s[n];if(t(r)||"function"!=typeof r.then){e.setValue(r),l.lastRenderedIndex=n;break}n<o&&r===i[n]||(l.lastRenderedIndex=2147483647,o=0,Promise.resolve(r).then(t=>{const s=l.values.indexOf(r);s>-1&&s<l.lastRenderedIndex&&(l.lastRenderedIndex=s,e.setValue(t),e.commit())}))}}})),a="https://www.bu.edu/library/about/hours/",d="https://api3.libcal.com/api_hours_today.php";window.customElements.define("bulib-hours",class extends l{createRenderRoot(){return this}static get properties(){return{library:{type:String},short:{type:Boolean},link_class:{type:String},icon:{type:String},debug:{type:Boolean}}}_fetchHoursData(e,t){t||(t=1475);let s=`${d}?format=json&systemTime=0&iid=1740&lid=${t}`;return this._logToConsole("calling 'libcal' with lid: '"+t+"'."),this._logGAEvent("api-call",e),fetch(s,{method:"GET",mode:"cors"}).then(e=>e.json()).then(e=>e.locations[0].rendered)}render(){let e=this.library||"mugar-memorial",t=o(e),l=t.short||t.name,i=t.libcal_lid;l.includes("BU Librar")&&(l="Mugar Library"),this._logToConsole(`rendering hours for ${l} (code:'${e}').`);let n=s`
      <span id="hours-display" class="inline" aria-label="today's hours for ${l}">
        <a href="${a}" class="${this.link_class}">
          ${r(this._fetchHoursData(e,i),s`<small> loading hours...</small>`)}
        </a>
      </span>
    `,d=s`<img alt="clock-icon" id="clock-icon" src="https://cdn.jsdelivr.net/npm/bulib-wc@latest/dist/icons/clock-icon-24px.svg">`;this.icon&&(d=s`<i class="material-icons" style="width: 24px">${this.icon}</i>`);let c,h=s``,u=s`
      <a title="today's hours for ${l}" class="${this.link_class}"
         @click="${t=>{this._logGAEvent("clicked",e)}}" href="${a}">${n}</a>`,b=s`<div class="txtv center">${d}&nbsp;&nbsp;<strong>${l}:</strong>&nbsp;${n}</div>`;return i||(c=h),c=this.short?u:b,s`
      <style> 
        bulib-hours:host { color: white; } 
        a > span { text-decoration: underline; }
        .txtv { display: flex; align-items: center; text-align: center; }
      </style>
      <div class="libhours">${c}</div>
    `}_logGAEvent(e,t){i("bulib-hours",e,t||this.library)}_logToConsole(e){this.debug&&console.log("bulib-hours) "+e)}});
//# sourceMappingURL=bulib-hours-b0fd4d9b.js.map
