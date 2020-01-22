/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function t(t,e,n,i){var s,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(o=(r<3?s(o):r>3?s(e,n,o):s(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o
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
 */}const e=new WeakMap,n=t=>"function"==typeof t&&e.has(t),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},r={},o={},a=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${a}--\x3e`,d=new RegExp(`${a}|${l}`);class c{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],s=document.createTreeWalker(e.content,133,null,!1);let r=0,o=-1,l=0;const{strings:c,values:{length:h}}=t;for(;l<h;){const t=s.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)u(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=c[l],n=m.exec(e)[2],i=n.toLowerCase()+"$lit$",s=t.getAttribute(i);t.removeAttribute(i);const r=s.split(d);this.parts.push({type:"attribute",index:o,name:n,strings:r}),l+=r.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(a)>=0){const i=t.parentNode,s=e.split(d),r=s.length-1;for(let e=0;e<r;e++){let n,r=s[e];if(""===r)n=p();else{const t=m.exec(r);null!==t&&u(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(r)}i.insertBefore(n,t),this.parts.push({type:"node",index:++o})}""===s[r]?(i.insertBefore(p(),t),n.push(t)):t.data=s[r],l+=r}}else if(8===t.nodeType)if(t.data===a){const e=t.parentNode;null!==t.previousSibling&&o!==r||(o++,e.insertBefore(p(),t)),r=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(n.push(t),o--),l++}else{let e=-1;for(;-1!==(e=t.data.indexOf(a,e+1));)this.parts.push({type:"node",index:-1}),l++}}else s.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const u=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},h=t=>-1!==t.index,p=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
 */
class f{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,l=s.nextNode();for(;o<n.length;)if(r=n[o],h(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=e.pop(),l=s.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return i&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const g=` ${a} `;class _{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let i=0;i<t;i++){const t=this.strings[i],s=t.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===t.indexOf("--\x3e",s+1);const r=m.exec(t);e+=null===r?t+(n?g:l):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+a}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
 */const y=t=>null===t||!("object"==typeof t||"function"==typeof t),v=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class w{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(y(t)||!v(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r||y(t)&&t===this.value||(this.value=t,n(t)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const t=this.value;this.value=r,t(this)}this.value!==r&&this.committer.commit()}}class b{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(p()),this.endNode=t.appendChild(p())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=p()),t.__insert(this.endNode=p())}insertAfterPart(t){t.__insert(this.startNode=p()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}const t=this.__pendingValue;t!==r&&(y(t)?t!==this.value&&this.__commitText(t):t instanceof _?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):v(t)?this.__commitIterable(t):t===o?(this.value=o,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof f&&this.value.template===e)this.value.update(t.values);else{const n=new f(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const s of t)n=e[i],void 0===n&&(n=new b(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(s),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class x{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r}}class N extends w{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends S{}let C=!1;try{const t={get capture(){return C=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class M{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;n(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=$(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const $=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;const A=new class{handleAttributeExpressions(t,e,n,i){const s=e[0];if("."===s){return new N(t,e.slice(1),n).parts}return"@"===s?[new M(t,e.slice(1),i.eventContext)]:"?"===s?[new x(t,e.slice(1),n)]:new w(t,e,n).parts}handleTextExpression(t){return new b(t)}};
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
 */function E(t){let e=T.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},T.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(a);return n=e.keyString.get(i),void 0===n&&(n=new c(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const T=new Map,V=new WeakMap;
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
 */
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
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const k=(t,...e)=>new _(t,e,"html",A)
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
 */;function O(t,e){const{element:{content:n},parts:i}=t,s=document.createTreeWalker(n,133,null,!1);let r=Y(i),o=i[r],a=-1,l=0;const d=[];let c=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(d.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,r=Y(i,r),o=i[r]}d.forEach(t=>t.parentNode.removeChild(t))}const D=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},Y=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(h(e))return n}return-1};
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
 */
const R=(t,e)=>`${t}--${e}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const U=t=>e=>{const n=R(e.type,t);let i=T.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},T.set(n,i));let s=i.stringsArray.get(e.strings);if(void 0!==s)return s;const r=e.strings.join(a);if(s=i.keyString.get(r),void 0===s){const n=e.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(n,t),s=new c(e,n),i.keyString.set(r,s)}return i.stringsArray.set(e.strings,s),s},L=["html","svg"],j=new Set,q=(t,e,n)=>{j.add(t);const i=n?n.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:r}=s;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=s[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{L.forEach(e=>{const n=T.get(R(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),O(t,n)})})})(t);const a=i.content;n?function(t,e,n=null){const{element:{content:i},parts:s}=t;if(null==n)return void i.appendChild(e);const r=document.createTreeWalker(i,133,null,!1);let o=Y(s),a=0,l=-1;for(;r.nextNode();){for(l++,r.currentNode===n&&(a=D(e),n.parentNode.insertBefore(e,n));-1!==o&&s[o].index===l;){if(a>0){for(;-1!==o;)s[o].index+=a,o=Y(s,o);return}o=Y(s,o)}}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),O(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const z={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},I=(t,e)=>e!==t&&(e==e||t==t),F={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:I},B=Promise.resolve(!0);class W extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=B,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const i=this._attributeNameForProperty(n,e);void 0!==i&&(this._attributeToPropertyMap.set(i,n),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=F){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const i=this[t];this[n]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=I){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,i=e.converter||z,s="function"==typeof i?i:i.fromAttribute;return s?s(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,i=e.converter;return(i&&i.toAttribute||z.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=F){const i=this.constructor,s=i._attributeNameForProperty(t,n);if(void 0!==s){const t=i._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n._classProperties.get(i)||F;this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const i=this.constructor,s=i._classProperties.get(t)||F;i._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const n=this._updatePromise;this._updatePromise=new Promise((n,i)=>{t=n,e=i});try{await n}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}W.finalized=!0;
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
 */
const J=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),Z=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}}:Object.assign({},e,{finisher(n){n.createProperty(e.key,t)}});function G(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):Z(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const n=e.reduce((e,n,i)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[i+1],t[0]);return new X(n,Q)};
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
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const et=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let i=0,s=e.length;i<s;i++){const s=e[i];Array.isArray(s)?t(s,n):n.push(s)}return n}(t);class nt extends W{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){et(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof _&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}nt.finalized=!0,nt.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,r=V.has(e),o=H&&11===e.nodeType&&!!e.host,a=o&&!j.has(i),l=a?document.createDocumentFragment():e;if(((t,e,n)=>{let i=V.get(e);void 0===i&&(s(e,e.firstChild),V.set(e,i=new b(Object.assign({templateFactory:E},n))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:U(i)},n)),a){const t=V.get(l);V.delete(l);const n=t.value instanceof f?t.value.template:void 0;q(i,l,n),s(e,e.firstChild),e.appendChild(l),V.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};
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
 */
const it=(t,e)=>{const n=t.startNode.parentNode,i=void 0===e?t.endNode:e.startNode,s=n.insertBefore(p(),i);n.insertBefore(p(),i);const r=new b(t.options);return r.insertAfterNode(s),r},st=(t,e)=>(t.setValue(e),t.commit(),t),rt=(t,e,n)=>{const i=t.startNode.parentNode,s=n?n.startNode:t.endNode,r=e.endNode.nextSibling;r!==s&&((t,e,n=null,i=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,i),e=n}})(i,e.startNode,r,s)},ot=t=>{s(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},at=(t,e,n)=>{const i=new Map;for(let s=e;s<=n;s++)i.set(t[s],s);return i},lt=new WeakMap,dt=new WeakMap,ct=(ut=(t,e,n)=>{let i;return void 0===n?n=e:void 0!==e&&(i=e),e=>{if(!(e instanceof b))throw new Error("repeat can only be used in text bindings");const s=lt.get(e)||[],r=dt.get(e)||[],o=[],a=[],l=[];let d,c,u=0;for(const e of t)l[u]=i?i(e,u):u,a[u]=n(e,u),u++;let h=0,p=s.length-1,m=0,f=a.length-1;for(;h<=p&&m<=f;)if(null===s[h])h++;else if(null===s[p])p--;else if(r[h]===l[m])o[m]=st(s[h],a[m]),h++,m++;else if(r[p]===l[f])o[f]=st(s[p],a[f]),p--,f--;else if(r[h]===l[f])o[f]=st(s[h],a[f]),rt(e,s[h],o[f+1]),h++,f--;else if(r[p]===l[m])o[m]=st(s[p],a[m]),rt(e,s[p],s[h]),p--,m++;else if(void 0===d&&(d=at(l,m,f),c=at(r,h,p)),d.has(r[h]))if(d.has(r[p])){const t=c.get(l[m]),n=void 0!==t?s[t]:null;if(null===n){const t=it(e,s[h]);st(t,a[m]),o[m]=t}else o[m]=st(n,a[m]),rt(e,n,s[h]),s[t]=null;m++}else ot(s[p]),p--;else ot(s[h]),h++;for(;m<=f;){const t=it(e,o[f+1]);st(t,a[m]),o[m++]=t}for(;h<=p;){const t=s[h++];null!==t&&ot(t)}lt.set(e,o),dt.set(e,l)}},(...t)=>{const n=ut(...t);return e.set(n,!0),n});var ut,ht={},pt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,mt="[^\\s]+",ft=/\[([^]*?)\]/gm,gt=function(){};function _t(t,e){for(var n=[],i=0,s=t.length;i<s;i++)n.push(t[i].substr(0,e));return n}function yt(t){return function(e,n,i){var s=i[t].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~s&&(e.month=s)}}function vt(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var wt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],St=["January","February","March","April","May","June","July","August","September","October","November","December"],bt=_t(St,3),xt=_t(wt,3);ht.i18n={dayNamesShort:xt,dayNames:wt,monthNamesShort:bt,monthNames:St,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var Nt={D:function(t){return t.getDate()},DD:function(t){return vt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return vt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return vt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return vt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return vt(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return vt(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return vt(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return vt(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return vt(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return vt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return vt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+vt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},Pt={D:["\\d\\d?",function(t,e){t.day=e}],Do:["\\d\\d?"+mt,function(t,e){t.day=parseInt(e,10)}],M:["\\d\\d?",function(t,e){t.month=e-1}],YY:["\\d\\d?",function(t,e){var n=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?n-1:n)+e}],h:["\\d\\d?",function(t,e){t.hour=e}],m:["\\d\\d?",function(t,e){t.minute=e}],s:["\\d\\d?",function(t,e){t.second=e}],YYYY:["\\d{4}",function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=100*e}],SS:["\\d{2}",function(t,e){t.millisecond=10*e}],SSS:["\\d{3}",function(t,e){t.millisecond=e}],d:["\\d\\d?",gt],ddd:[mt,gt],MMM:[mt,yt("monthNamesShort")],MMMM:[mt,yt("monthNames")],a:[mt,function(t,e,n){var i=e.toLowerCase();i===n.amPm[0]?t.isPm=!1:i===n.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var n,i=(e+"").match(/([+-]|\d\d)/gi);i&&(n=60*i[1]+parseInt(i[2],10),t.timezoneOffset="+"===i[0]?n:-n)}]};Pt.dd=Pt.d,Pt.dddd=Pt.ddd,Pt.DD=Pt.D,Pt.mm=Pt.m,Pt.hh=Pt.H=Pt.HH=Pt.h,Pt.MM=Pt.M,Pt.ss=Pt.s,Pt.A=Pt.a,ht.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},ht.format=function(t,e,n){var i=n||ht.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=ht.masks[e]||e||ht.masks.default;var s=[];return(e=(e=e.replace(ft,(function(t,e){return s.push(e),"@@@"}))).replace(pt,(function(e){return e in Nt?Nt[e](t,i):e.slice(1,e.length-1)}))).replace(/@@@/g,(function(){return s.shift()}))},ht.parse=function(t,e,n){var i=n||ht.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=ht.masks[e]||e,t.length>1e3)return null;var s={},r=[],o=[];e=e.replace(ft,(function(t,e){return o.push(e),"@@@"}));var a,l=(a=e,a.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(pt,(function(t){if(Pt[t]){var e=Pt[t];return r.push(e[1]),"("+e[0]+")"}return t}));l=l.replace(/@@@/g,(function(){return o.shift()}));var d=t.match(new RegExp(l,"i"));if(!d)return null;for(var c=1;c<d.length;c++)r[c-1](s,d[c],i);var u,h=new Date;return!0===s.isPm&&null!=s.hour&&12!=+s.hour?s.hour=+s.hour+12:!1===s.isPm&&12==+s.hour&&(s.hour=0),null!=s.timezoneOffset?(s.minute=+(s.minute||0)-+s.timezoneOffset,u=new Date(Date.UTC(s.year||h.getFullYear(),s.month||0,s.day||1,s.hour||0,s.minute||0,s.second||0,s.millisecond||0))):u=new Date(s.year||h.getFullYear(),s.month||0,s.day||1,s.hour||0,s.minute||0,s.second||0,s.millisecond||0),u};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var Ct=function(t){return void 0===t.attributes.friendly_name?function(t){return t.substr(t.indexOf(".")+1)}(t.entity_id).replace(/_/g," "):t.attributes.friendly_name||""},Mt=function(t,e,n,i){i=i||{},n=null==n?{}:n;var s=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=n,t.dispatchEvent(s),s};var $t={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},At={optional:"Optional",name:"Title",time_entity:"Time Entity",mode_entity:"Mode Entity",duration_entity:"Duration Entity",invalid_configuration:"Invalid configuration",required_entity_missing:"A required entity %entity% is not set",required_entity_not_found:"A required entity %entity% is not found"},Et={common:$t,config:At},Tt={en:Object.freeze({__proto__:null,common:$t,config:At,default:Et})};function Vt(t,e="",n=""){const i=t.split(".")[0],s=t.split(".")[1],r=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");var o;try{o=Tt[r][i][s]}catch(t){o=Tt.en[i][s]}return void 0===o&&(o=Tt.en[i][s]),""!==e&&""!==n&&(o=o.replace(e,n)),o}let kt=class extends nt{setConfig(t){this._config=t}get _title(){return this._config&&this._config.name||""}get _time_entity(){return this._config&&this._config.time_entity||""}get _mode_entity(){return this._config&&this._config.mode_entity||""}get _duration_entity(){return this._config&&this._config.duration_entity||""}render(){if(!this.hass)return k``;const t=Object.keys(this.hass.states).filter(t=>"input_datetime"===t.substr(0,t.indexOf("."))),e=Object.keys(this.hass.states).filter(t=>"input_select"===t.substr(0,t.indexOf("."))),n=Object.keys(this.hass.states).filter(t=>"input_number"===t.substr(0,t.indexOf(".")));return k`
      <div class="card-config">
        <paper-input
          label="${Vt("config.name")} (${Vt("config.optional")})"
          .value=${this._title}
          .configValue=${"name"}
          @value-changed=${this._valueChanged}
        ></paper-input>

        <div class="indent">
          <paper-dropdown-menu label="${Vt("config.time_entity")}" @value-changed=${this._valueChanged} .configValue=${"time_entity"}>
            <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._time_entity)}>
              ${t.map(t=>k`
                  <paper-item>${t}</paper-item>
                `)}
            </paper-listbox>
          </paper-dropdown-menu>
          <br />
          <paper-dropdown-menu label="${Vt("config.mode_entity")}" @value-changed=${this._valueChanged} .configValue=${"mode_entity"}>
            <paper-listbox slot="dropdown-content" .selected=${e.indexOf(this._mode_entity)}>
              ${e.map(t=>k`
                  <paper-item>${t}</paper-item>
                `)}
            </paper-listbox>
          </paper-dropdown-menu>
          <br />
          <paper-dropdown-menu
            label="${Vt("config.duration_entity")}"
            @value-changed=${this._valueChanged}
            .configValue=${"duration_entity"}
          >
            <paper-listbox slot="dropdown-content" .selected=${n.indexOf(this._duration_entity)}>
              ${n.map(t=>k`
                  <paper-item>${t}</paper-item>
                `)}
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
      </div>
    `}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),Mt(this,"config-changed",{config:this._config}))}static get styles(){return tt`
      .indent {
        padding-left: 40px;
      }
    `}};t([G()],kt.prototype,"hass",void 0),t([G()],kt.prototype,"_config",void 0),kt=t([J("lightalarm-card-editor")],kt);console.info(`%c  LIGHTALARM-CARD \n%c  ${Vt("common.version")} 1.0.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");let Ot=class extends nt{static async getConfigElement(){return document.createElement("lightalarm-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error(Vt("config.invalid_configuration"));if(!t.time_entity)throw new Error(Vt("config.required_entity_missing","%entity%",Vt("config.time_entity")));if(!t.mode_entity)throw new Error(Vt("config.required_entity_missing","%entity%",Vt("config.mode_entity")));if(!t.duration_entity)throw new Error(Vt("config.required_entity_missing","%entity%",Vt("config.duration_entity")));this._config=t}shouldUpdate(t){return function(t,e,n){if(e.has("config")||n)return!0;if(t._config.entity){var i=e.get("hass");return!i||i.states[t._config.entity]!==t.hass.states[t._config.entity]}return!1}(this,t,!1)}render(){if(!this._config||!this.hass)return k``;const t=this.hass.states[this._config.time_entity];if(!t)return k`
        <hui-warning>${this.hass.localize("config.required_entity_not_found","%entity%",this._config.time_entity)}</hui-warning>
      `;const e=this.hass.states[this._config.mode_entity];if(!e)return k`
        <hui-warning>${this.hass.localize("config.required_entity_not_found","%entity%",this._config.mode_entity)}</hui-warning>
      `;const n=this.hass.states[this._config.duration_entity];return n?k`
      <ha-card .header=${this._config.name} tabindex="0" aria-label=${`Boilerplate: ${this._config.time_entity}`}>
        <div class="lightalarm-wrapper">
          <svg viewBox="0 0 24 24" class="alarm-time-decorator">
            <path
              d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"
            />
          </svg>
          <paper-time-input
            class="alarm-time"
            .hour=${"unknown"===t.state?"":("0"+t.attributes.hour).slice(-2)}
            .min=${"unknown"===t.state?"":("0"+t.attributes.minute).slice(-2)}
            .amPm=${!1}
            @change=${this._selectedTimeValueChanged}
            @click=${this._stopEventPropagation}
            hide-label
            format="24"
          ></paper-time-input>

          <ha-paper-dropdown-menu
            class="alarm-mode"
            selected-item-label="${e.state}"
            @selected-item-label-changed="${this._selectedModeChanged}"
            label="${Ct(e)}"
          >
            <paper-listbox slot="dropdown-content" selected="${e.attributes.options.indexOf(e.state)}">
              ${ct(e.attributes.options,t=>k`
                    <paper-item>${t}</paper-item>
                  `)}
            </paper-listbox>
          </ha-paper-dropdown-menu>

          <div class="alarm-duration">
            <label slot="label" for="duration-input">${Ct(n)}</label>
            <div class="alarm-duration-slider">
              <ha-slider
                .dir="${i=this.hass,function(t){var e=t.language||"en";return t.translationMetadata.translations[e]&&t.translationMetadata.translations[e].isRTL||!1}(i)?"rtl":"ltr"}"
                .step="${Number(n.attributes.step)}"
                .min="${Number(n.attributes.min)}"
                .max="${Number(n.attributes.max)}"
                .value="${Number(n.state)}"
                pin
                @change="${this._selectedDurationValueChanged}"
                ignore-bar-touch
                id="duration-input"
              ></ha-slider>
              <span>
                ${Number(n.state)} ${n.attributes.unit_of_measurement}
              </span>
            </div>
          </div>
        </div>
      </ha-card>
    `:k`
        <hui-warning>${this.hass.localize("config.required_entity_not_found","%entity%",this._config.duration_entity)}</hui-warning>
      `;var i}_stopEventPropagation(t){t.stopPropagation()}_selectedTimeValueChanged(t){const e=this.hass.states[this._config.time_entity],n=this.shadowRoot.querySelector(".alarm-time"),i=null!==n?n.value.trim()+":00":void 0;i!==e.state&&this.hass.callService(e.entity_id.split(".",1)[0],"set_datetime",{entity_id:e.entity_id,time:i,undefined:void 0}),t.target.blur()}_selectedModeChanged(t){Mt(window,"haptic","light");const e=this.hass.states[this._config.mode_entity];t.target.selectedItem&&""!==t.target.selectedItem.innerText&&t.target.selectedItem.innerText!==e.state&&this.hass.callService("input_select","select_option",{option:t.target.selectedItem.innerText,entity_id:e.entity_id})}_selectedDurationValueChanged(){const t=this.shadowRoot.querySelector("#duration-input"),e=this.hass.states[this._config.duration_entity];t.value!==e.state&&this.hass.callService(e.entity_id.split(".",1)[0],"set_value",{value:t.value,entity_id:e.entity_id})}static get styles(){return tt`
      .lightalarm-wrapper {
        display: grid;
        grid-template-columns: 0fr 1fr;
        grid-template-rows: 1fr 1fr;
        max-width: 100%;
        padding: 5px 15px 5px 0;
        grid-gap: 0 10px;
      }
      .lightalarm-wrapper .alarm-time-decorator,
      .lightalarm-wrapper .alarm-time {
        grid-column: 1;
        grid-row: 1 / span 2;
        align-self: center;
        justify-self: center;
      }
      .lightalarm-wrapper .alarm-time-decorator {
        width: 100%;
        height: 100%;
        fill: var(--paper-item-icon-color, --text-color);
        opacity: 0.3;
      }
      .lightalarm-wrapper .alarm-time {
        // margin: 8px 35px 0 35px;
        margin: 8px 25px 0 25px;
      }

      .lightalarm-wrapper .alarm-mode {
        grid-column: 2;
        grid-row: 1;
        width: 100%;
        align-self: center;
      }

      .lightalarm-wrapper .alarm-duration {
        grid-column: 2;
        grid-row: 2;
        width: 100%;
        align-self: center;
      }
      .lightalarm-wrapper .alarm-duration label {
        font-family: var(--paper-font-subhead_-_font-family);
        -webkit-font-smoothing: var(--paper-font-subhead_-_-webkit-font-smoothing);
        font-size: calc(var(--paper-font-subhead_-_font-size) * 0.75);
        font-weight: var(--paper-font-subhead_-_font-weight);
        line-height: var(--paper-font-subhead_-_line-height);
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: scale(0.75);
        transform: scale(0.75);
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }
      .lightalarm-wrapper .alarm-duration-slider {
        display: flex;
        align-items: center;
      }
      .lightalarm-wrapper .alarm-duration-slider ha-slider {
        flex-grow: 1;
        width: auto;
        margin-left: calc(-15px - var(--calculated-paper-slider-height) / 2);
      }
    `}};t([G()],Ot.prototype,"hass",void 0),t([G()],Ot.prototype,"_config",void 0),Ot=t([J("lightalarm-card")],Ot);export{Ot as LightalarmCard};
