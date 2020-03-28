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
function t(t,e,i,n){var r,s=arguments.length,a=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(s<3?r(a):s>3?r(e,i,a):r(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a
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
 */}const e=new WeakMap,i=t=>"function"==typeof t&&e.has(t),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},s={},a={},o=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${o}--\x3e`,c=new RegExp(`${o}|${l}`);class u{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],r=document.createTreeWalker(e.content,133,null,!1);let s=0,a=-1,l=0;const{strings:u,values:{length:h}}=t;for(;l<h;){const t=r.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let n=0;for(let t=0;t<i;t++)d(e[t].name,"$lit$")&&n++;for(;n-- >0;){const e=u[l],i=m.exec(e)[2],n=i.toLowerCase()+"$lit$",r=t.getAttribute(n);t.removeAttribute(n);const s=r.split(c);this.parts.push({type:"attribute",index:a,name:i,strings:s}),l+=s.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(o)>=0){const n=t.parentNode,r=e.split(c),s=r.length-1;for(let e=0;e<s;e++){let i,s=r[e];if(""===s)i=p();else{const t=m.exec(s);null!==t&&d(t[2],"$lit$")&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(s)}n.insertBefore(i,t),this.parts.push({type:"node",index:++a})}""===r[s]?(n.insertBefore(p(),t),i.push(t)):t.data=r[s],l+=s}}else if(8===t.nodeType)if(t.data===o){const e=t.parentNode;null!==t.previousSibling&&a!==s||(a++,e.insertBefore(p(),t)),s=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(i.push(t),a--),l++}else{let e=-1;for(;-1!==(e=t.data.indexOf(o,e+1));)this.parts.push({type:"node",index:-1}),l++}}else r.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const d=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},h=t=>-1!==t.index,p=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class f{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let s,a=0,o=0,l=r.nextNode();for(;a<i.length;)if(s=i[a],h(s)){for(;o<s.index;)o++,"TEMPLATE"===l.nodeName&&(e.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=e.pop(),l=r.nextNode());if("node"===s.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,s.name,s.strings,this.options));a++}else this.__parts.push(void 0),a++;return n&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */const g=` ${o} `;class _{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let n=0;n<t;n++){const t=this.strings[n],r=t.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===t.indexOf("--\x3e",r+1);const s=m.exec(t);e+=null===s?t+(i?g:l):t.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+o}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
 */const y=t=>null===t||!("object"==typeof t||"function"==typeof t),v=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class w{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new b(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(y(t)||!v(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===s||y(t)&&t===this.value||(this.value=t,i(t)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const t=this.value;this.value=s,t(this)}this.value!==s&&this.committer.commit()}}class S{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(p()),this.endNode=t.appendChild(p())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=p()),t.__insert(this.endNode=p())}insertAfterPart(t){t.__insert(this.startNode=p()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=s,t(this)}const t=this.__pendingValue;t!==s&&(y(t)?t!==this.value&&this.__commitText(t):t instanceof _?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):v(t)?this.__commitIterable(t):t===a?(this.value=a,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof f&&this.value.template===e)this.value.update(t.values);else{const i=new f(e,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const r of t)i=e[n],void 0===i&&(i=new S(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(r),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class x{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=s,t(this)}if(this.__pendingValue===s)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=s}}class k extends w{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends b{}let N=!1;try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class C{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;i(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=s,t(this)}if(this.__pendingValue===s)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=T(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=s}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;const M=new class{handleAttributeExpressions(t,e,i,n){const r=e[0];if("."===r){return new k(t,e.slice(1),i).parts}return"@"===r?[new C(t,e.slice(1),n.eventContext)]:"?"===r?[new x(t,e.slice(1),i)]:new w(t,e,i).parts}handleTextExpression(t){return new S(t)}};
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
 */function E(t){let e=$.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(o);return i=e.keyString.get(n),void 0===i&&(i=new u(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const $=new Map,V=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const A=(t,...e)=>new _(t,e,"html",M)
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
 */;function I(t,e){const{element:{content:i},parts:n}=t,r=document.createTreeWalker(i,133,null,!1);let s=D(n),a=n[s],o=-1,l=0;const c=[];let u=null;for(;r.nextNode();){o++;const t=r.currentNode;for(t.previousSibling===u&&(u=null),e.has(t)&&(c.push(t),null===u&&(u=t)),null!==u&&l++;void 0!==a&&a.index===o;)a.index=null!==u?-1:a.index-l,s=D(n,s),a=n[s]}c.forEach(t=>t.parentNode.removeChild(t))}const O=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},D=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(h(e))return i}return-1};
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
const R=(t,e)=>`${t}--${e}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const Y=t=>e=>{const i=R(e.type,t);let n=$.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},$.set(i,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const s=e.strings.join(o);if(r=n.keyString.get(s),void 0===r){const i=e.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(i,t),r=new u(e,i),n.keyString.set(s,r)}return n.stringsArray.set(e.strings,r),r},L=["html","svg"],q=new Set,z=(t,e,i)=>{q.add(t);const n=i?i.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:s}=r;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(n,t);const a=document.createElement("style");for(let t=0;t<s;t++){const e=r[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{L.forEach(e=>{const i=$.get(R(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),I(t,i)})})})(t);const o=n.content;i?function(t,e,i=null){const{element:{content:n},parts:r}=t;if(null==i)return void n.appendChild(e);const s=document.createTreeWalker(n,133,null,!1);let a=D(r),o=0,l=-1;for(;s.nextNode();){for(l++,s.currentNode===i&&(o=O(e),i.parentNode.insertBefore(e,i));-1!==a&&r[a].index===l;){if(o>0){for(;-1!==a;)r[a].index+=o,a=D(r,a);return}a=D(r,a)}}}(i,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){o.insertBefore(a,o.firstChild);const t=new Set;t.add(a),I(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const H={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},U=(t,e)=>e!==t&&(e==e||t==t),j={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:U},F=Promise.resolve(!0);class W extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=F,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const n=this._attributeNameForProperty(i,e);void 0!==n&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=j){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(e){const n=this[t];this[i]=e,this._requestUpdate(t,n)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=U){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,n=e.converter||H,r="function"==typeof n?n:n.fromAttribute;return r?r(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,n=e.converter;return(n&&n.toAttribute||H.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=j){const n=this.constructor,r=n._attributeNameForProperty(t,i);if(void 0!==r){const t=n._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i._classProperties.get(n)||j;this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const n=this.constructor,r=n._classProperties.get(t)||j;n._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):i=!1}!this._hasRequestedUpdate&&i&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const i=this._updatePromise;this._updatePromise=new Promise((i,n)=>{t=i,e=n});try{await i}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}W.finalized=!0;
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
const J=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),Z=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:Object.assign({},e,{finisher(i){i.createProperty(e.key,t)}});function G(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Z(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const K="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class X{constructor(t,e){if(e!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...e)=>{const i=e.reduce((e,i,n)=>e+(t=>{if(t instanceof X)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[n+1],t[0]);return new X(i,Q)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const et=t=>t.flat?t.flat(1/0):function t(e,i=[]){for(let n=0,r=e.length;n<r;n++){const r=e[n];Array.isArray(r)?t(r,i):i.push(r)}return i}(t);class it extends W{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){et(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof _&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}it.finalized=!0,it.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,s=V.has(e),a=B&&11===e.nodeType&&!!e.host,o=a&&!q.has(n),l=o?document.createDocumentFragment():e;if(((t,e,i)=>{let n=V.get(e);void 0===n&&(r(e,e.firstChild),V.set(e,n=new S(Object.assign({templateFactory:E},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:Y(n)},i)),o){const t=V.get(l);V.delete(l);const i=t.value instanceof f?t.value.template:void 0;z(n,l,i),r(e,e.firstChild),e.appendChild(l),V.set(e,t)}!s&&a&&window.ShadyCSS.styleElement(e.host)};
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
const nt=(t,e)=>{const i=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,r=i.insertBefore(p(),n);i.insertBefore(p(),n);const s=new S(t.options);return s.insertAfterNode(r),s},rt=(t,e)=>(t.setValue(e),t.commit(),t),st=(t,e,i)=>{const n=t.startNode.parentNode,r=i?i.startNode:t.endNode,s=e.endNode.nextSibling;s!==r&&((t,e,i=null,n=null)=>{for(;e!==i;){const i=e.nextSibling;t.insertBefore(e,n),e=i}})(n,e.startNode,s,r)},at=t=>{r(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},ot=(t,e,i)=>{const n=new Map;for(let r=e;r<=i;r++)n.set(t[r],r);return n},lt=new WeakMap,ct=new WeakMap,ut=(dt=(t,e,i)=>{let n;return void 0===i?i=e:void 0!==e&&(n=e),e=>{if(!(e instanceof S))throw new Error("repeat can only be used in text bindings");const r=lt.get(e)||[],s=ct.get(e)||[],a=[],o=[],l=[];let c,u,d=0;for(const e of t)l[d]=n?n(e,d):d,o[d]=i(e,d),d++;let h=0,p=r.length-1,m=0,f=o.length-1;for(;h<=p&&m<=f;)if(null===r[h])h++;else if(null===r[p])p--;else if(s[h]===l[m])a[m]=rt(r[h],o[m]),h++,m++;else if(s[p]===l[f])a[f]=rt(r[p],o[f]),p--,f--;else if(s[h]===l[f])a[f]=rt(r[h],o[f]),st(e,r[h],a[f+1]),h++,f--;else if(s[p]===l[m])a[m]=rt(r[p],o[m]),st(e,r[p],r[h]),p--,m++;else if(void 0===c&&(c=ot(l,m,f),u=ot(s,h,p)),c.has(s[h]))if(c.has(s[p])){const t=u.get(l[m]),i=void 0!==t?r[t]:null;if(null===i){const t=nt(e,r[h]);rt(t,o[m]),a[m]=t}else a[m]=rt(i,o[m]),st(e,i,r[h]),r[t]=null;m++}else at(r[p]),p--;else at(r[h]),h++;for(;m<=f;){const t=nt(e,a[f+1]);rt(t,o[m]),a[m++]=t}for(;h<=p;){const t=r[h++];null!==t&&at(t)}lt.set(e,a),ct.set(e,l)}},(...t)=>{const i=dt(...t);return e.set(i,!0),i});var dt,ht={},pt=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,mt="[^\\s]+",ft=/\[([^]*?)\]/gm,gt=function(){};function _t(t,e){for(var i=[],n=0,r=t.length;n<r;n++)i.push(t[n].substr(0,e));return i}function yt(t){return function(e,i,n){var r=n[t].indexOf(i.charAt(0).toUpperCase()+i.substr(1).toLowerCase());~r&&(e.month=r)}}function vt(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}var wt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],bt=["January","February","March","April","May","June","July","August","September","October","November","December"],St=_t(bt,3),xt=_t(wt,3);ht.i18n={dayNamesShort:xt,dayNames:wt,monthNamesShort:St,monthNames:bt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10)*t%10]}};var kt={D:function(t){return t.getDate()},DD:function(t){return vt(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return t.getDay()},dd:function(t){return vt(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return vt(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return vt(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return vt(t.getFullYear(),4)},h:function(t){return t.getHours()%12||12},hh:function(t){return vt(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return vt(t.getHours())},m:function(t){return t.getMinutes()},mm:function(t){return vt(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return vt(t.getSeconds())},S:function(t){return Math.round(t.getMilliseconds()/100)},SS:function(t){return vt(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return vt(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+vt(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)}},Pt={D:["\\d\\d?",function(t,e){t.day=e}],Do:["\\d\\d?"+mt,function(t,e){t.day=parseInt(e,10)}],M:["\\d\\d?",function(t,e){t.month=e-1}],YY:["\\d\\d?",function(t,e){var i=+(""+(new Date).getFullYear()).substr(0,2);t.year=""+(e>68?i-1:i)+e}],h:["\\d\\d?",function(t,e){t.hour=e}],m:["\\d\\d?",function(t,e){t.minute=e}],s:["\\d\\d?",function(t,e){t.second=e}],YYYY:["\\d{4}",function(t,e){t.year=e}],S:["\\d",function(t,e){t.millisecond=100*e}],SS:["\\d{2}",function(t,e){t.millisecond=10*e}],SSS:["\\d{3}",function(t,e){t.millisecond=e}],d:["\\d\\d?",gt],ddd:[mt,gt],MMM:[mt,yt("monthNamesShort")],MMMM:[mt,yt("monthNames")],a:[mt,function(t,e,i){var n=e.toLowerCase();n===i.amPm[0]?t.isPm=!1:n===i.amPm[1]&&(t.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(t,e){var i,n=(e+"").match(/([+-]|\d\d)/gi);n&&(i=60*n[1]+parseInt(n[2],10),t.timezoneOffset="+"===n[0]?i:-i)}]};Pt.dd=Pt.d,Pt.dddd=Pt.ddd,Pt.DD=Pt.D,Pt.mm=Pt.m,Pt.hh=Pt.H=Pt.HH=Pt.h,Pt.MM=Pt.M,Pt.ss=Pt.s,Pt.A=Pt.a,ht.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},ht.format=function(t,e,i){var n=i||ht.i18n;if("number"==typeof t&&(t=new Date(t)),"[object Date]"!==Object.prototype.toString.call(t)||isNaN(t.getTime()))throw new Error("Invalid Date in fecha.format");e=ht.masks[e]||e||ht.masks.default;var r=[];return(e=(e=e.replace(ft,(function(t,e){return r.push(e),"@@@"}))).replace(pt,(function(e){return e in kt?kt[e](t,n):e.slice(1,e.length-1)}))).replace(/@@@/g,(function(){return r.shift()}))},ht.parse=function(t,e,i){var n=i||ht.i18n;if("string"!=typeof e)throw new Error("Invalid format in fecha.parse");if(e=ht.masks[e]||e,t.length>1e3)return null;var r={},s=[],a=[];e=e.replace(ft,(function(t,e){return a.push(e),"@@@"}));var o,l=(o=e,o.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(pt,(function(t){if(Pt[t]){var e=Pt[t];return s.push(e[1]),"("+e[0]+")"}return t}));l=l.replace(/@@@/g,(function(){return a.shift()}));var c=t.match(new RegExp(l,"i"));if(!c)return null;for(var u=1;u<c.length;u++)s[u-1](r,c[u],n);var d,h=new Date;return!0===r.isPm&&null!=r.hour&&12!=+r.hour?r.hour=+r.hour+12:!1===r.isPm&&12==+r.hour&&(r.hour=0),null!=r.timezoneOffset?(r.minute=+(r.minute||0)-+r.timezoneOffset,d=new Date(Date.UTC(r.year||h.getFullYear(),r.month||0,r.day||1,r.hour||0,r.minute||0,r.second||0,r.millisecond||0))):d=new Date(r.year||h.getFullYear(),r.month||0,r.day||1,r.hour||0,r.minute||0,r.second||0,r.millisecond||0),d};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var Nt=function(t){return void 0===t.attributes.friendly_name?function(t){return t.substr(t.indexOf(".")+1)}(t.entity_id).replace(/_/g," "):t.attributes.friendly_name||""},Ct=function(t,e,i,n){n=n||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return r.detail=i,t.dispatchEvent(r),r};var Tt={optional:"Optional",name:"Title",time_entity:"Time Entity",mode_entity:"Mode Entity",duration_entity:"Duration Entity",invalid_configuration:"Invalid configuration",required_entity_missing:"A required entity %entity% is not set",required_entity_not_found:"A required entity %entity% is not found",force_native_time_picker_for_device:"Force the native time picker in this browser"},Mt={config:Tt},Et={en:Object.freeze({__proto__:null,config:Tt,default:Mt})};function $t(t,e="",i=""){const n=t.split(".")[0],r=t.split(".")[1],s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");var a;try{a=Et[s][n][r]}catch(t){a=Et.en[n][r]}return void 0===a&&(a=Et.en[n][r]),""!==e&&""!==i&&(a=a.replace(e,i)),a}let Vt=class extends it{setConfig(t){this._config=t}get _title(){return this._config&&this._config.name||""}get _time_entity(){return this._config&&this._config.time_entity||""}get _mode_entity(){return this._config&&this._config.mode_entity||""}get _duration_entity(){return this._config&&this._config.duration_entity||""}get _force_native_time_picker_for_device(){return"true"===localStorage.getItem("lightalarmCard.forceNativePicker")}render(){if(!this.hass)return A``;const t=Object.keys(this.hass.states).filter(t=>"input_datetime"===t.substr(0,t.indexOf("."))),e=Object.keys(this.hass.states).filter(t=>"input_select"===t.substr(0,t.indexOf("."))),i=Object.keys(this.hass.states).filter(t=>"input_number"===t.substr(0,t.indexOf(".")));return A`
      <div class="card-config">
        <paper-input
          label="${$t("config.name")} (${$t("config.optional")})"
          .value=${this._title}
          .configValue=${"name"}
          @value-changed=${this._valueChanged}
        ></paper-input>

        <paper-dropdown-menu label="${$t("config.time_entity")}" @value-changed=${this._valueChanged} .configValue=${"time_entity"}>
          <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._time_entity)}>
            ${t.map(t=>A`
                <paper-item>${t}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
        <br />
        <paper-dropdown-menu label="${$t("config.mode_entity")}" @value-changed=${this._valueChanged} .configValue=${"mode_entity"}>
          <paper-listbox slot="dropdown-content" .selected=${e.indexOf(this._mode_entity)}>
            ${e.map(t=>A`
                <paper-item>${t}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
        <br />
        <paper-dropdown-menu
          label="${$t("config.duration_entity")}"
          @value-changed=${this._valueChanged}
          .configValue=${"duration_entity"}
        >
          <paper-listbox slot="dropdown-content" .selected=${i.indexOf(this._duration_entity)}>
            ${i.map(t=>A`
                <paper-item>${t}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
        <br />
        <br />
        <ha-switch
          .checked=${this._force_native_time_picker_for_device}
          .configValue=${"force_native_time_picker_for_device"}
          @change=${this._valueChanged}
        >
          ${$t("config.force_native_time_picker_for_device")}
        </ha-switch>
      </div>
    `}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&("force_native_time_picker_for_device"===e.configValue?localStorage.setItem("lightalarmCard.forceNativePicker",e.checked?"true":"false"):""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),Ct(this,"config-changed",{config:this._config}))}static get styles(){return tt`
      .indent {
        padding-left: 40px;
      }
    `}};t([G()],Vt.prototype,"hass",void 0),t([G()],Vt.prototype,"_config",void 0),Vt=t([J("lightalarm-card-editor")],Vt);console.info("%c LIGHTALARM-CARD %c 2.0.0 ","color: cornsilk; font-weight: bold; background: firebrick","color: firebrick; font-weight: bold; background: cornsilk");let At=class extends it{constructor(){super(...arguments),this.timeInputStatus="none"}static async getConfigElement(){return document.createElement("lightalarm-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t)throw new Error($t("config.invalid_configuration"));if(!t.time_entity)throw new Error($t("config.required_entity_missing","%entity%",$t("config.time_entity")));if(!t.mode_entity)throw new Error($t("config.required_entity_missing","%entity%",$t("config.mode_entity")));if(!t.duration_entity)throw new Error($t("config.required_entity_missing","%entity%",$t("config.duration_entity")));this._config=t}shouldUpdate(t){const e=function(t,e,i){if(e.has("config")||i)return!0;if(t._config.entity){var n=e.get("hass");return!n||n.states[t._config.entity]!==t.hass.states[t._config.entity]}return!1}(this,t,!1);if(!e){const e=t.hass;return!e||e.states[this._config.time_entity]!==this.hass.states[this._config.time_entity]||e.states[this._config.mode_entity]!==this.hass.states[this._config.mode_entity]||e.states[this._config.duration_entity]!==this.hass.states[this._config.duration_entity]}return e}render(){if(!this._config||!this.hass)return A``;const t=this.hass.states[this._config.time_entity];if(!t)return A`
        <hui-warning>${this.hass.localize("config.required_entity_not_found","%entity%",this._config.time_entity)}</hui-warning>
      `;const e=this.hass.states[this._config.mode_entity];if(!e)return A`
        <hui-warning>${this.hass.localize("config.required_entity_not_found","%entity%",this._config.mode_entity)}</hui-warning>
      `;const i=this.hass.states[this._config.duration_entity];return i?A`
      <ha-card .header=${this._config.name} tabindex="0">
        <div class="lightalarm-wrapper" id="lightalarm-wrapper">
          <div class="alarm-time-and-decorator-wrap">
            <svg viewBox="0 0 24 24" class="alarm-time-decorator">
              <path
                d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"
              />
            </svg>
            <div class="alarm-time-wrap">
              <span class="alarm-time-display">
                ${"unknown"===t.state?"07:00":("0"+t.attributes.hour).slice(-2)+":"+("0"+t.attributes.minute).slice(-2)}
              </span>
              <input
                type="time"
                class="alarm-time-picker alarm-time-picker-left"
                required="required"
                value="${"unknown"===t.state?"07:00":("0"+t.attributes.hour).slice(-2)+":"+("0"+t.attributes.minute).slice(-2)}"
                id="lightalarm-time-picker-left"
                @input=${this._selectedTimeValueChangedPicker}
                @blur=${this._timePickerBlur}
                @click=${this._timePickerLeftClick}
              />
              <input
                type="time"
                class="alarm-time-picker alarm-time-picker-right"
                required="required"
                value="${"unknown"===t.state?"07:00":("0"+t.attributes.hour).slice(-2)+":"+("0"+t.attributes.minute).slice(-2)}"
                id="lightalarm-time-picker-right"
                @input=${this._selectedTimeValueChangedPicker}
                @blur=${this._timePickerBlur}
                @click=${this._timePickerRightClick}
              />
              <div class="alarm-time-input">
                <input
                  type="number"
                  required="required"
                  min="0"
                  max="23"
                  value="${"unknown"===t.state?"07":("0"+t.attributes.hour).slice(-2)}"
                  id="lightalarm-time-input-hour"
                  @input=${this._selectedTimeValueChangedInput}
                  @blur=${this._timeInputsBlur}
                /><span>:</span
                ><input
                  type="number"
                  required="required"
                  min="0"
                  max="59"
                  value="${"unknown"===t.state?"00":("0"+t.attributes.minute).slice(-2)}"
                  id="lightalarm-time-input-minute"
                  @input=${this._selectedTimeValueChangedInput}
                  @blur=${this._timeInputsBlur}
                />
              </div>
            </div>
          </div>

          <div class="alarm-properties-wrap">
            <ha-paper-dropdown-menu
              class="alarm-mode"
              selected-item-label="${e.state}"
              @selected-item-label-changed="${this._selectedModeChanged}"
              label="${Nt(e)}"
            >
              <paper-listbox slot="dropdown-content" selected="${e.attributes.options.indexOf(e.state)}">
                ${ut(e.attributes.options,t=>A`
                      <paper-item>${t}</paper-item>
                    `)}
              </paper-listbox>
            </ha-paper-dropdown-menu>

            <div class="alarm-duration">
              <label slot="label" for="duration-input">${Nt(i)}</label>
              <div class="alarm-duration-slider">
                <ha-slider
                  .dir="${n=this.hass,function(t){var e=t.language||"en";return t.translationMetadata.translations[e]&&t.translationMetadata.translations[e].isRTL||!1}(n)?"rtl":"ltr"}"
                  .step="${Number(i.attributes.step)}"
                  .min="${Number(i.attributes.min)}"
                  .max="${Number(i.attributes.max)}"
                  .value="${Number(i.state)}"
                  pin
                  @change="${this._selectedDurationValueChanged}"
                  ignore-bar-touch
                  id="duration-input"
                ></ha-slider>
                <span>
                  ${Number(i.state)} ${i.attributes.unit_of_measurement}
                </span>
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `:A`
        <hui-warning>${this.hass.localize("config.required_entity_not_found","%entity%",this._config.duration_entity)}</hui-warning>
      `;var n}static get styles(){return tt`
      ha-card:focus {
        outline: none;
      }
      ha-card::-moz-focus-inner {
        border: 0;
      }

      .lightalarm-wrapper {
        max-width: 100%;
        padding: 5px 15px 5px 0;
        display: flex;
        align-items: stretch;
      }
      .lightalarm-wrapper .alarm-time-and-decorator-wrap {
        flex-basis: auto;
        flex-basis: content;
        position: relative;
        margin-right: 5px;
      }
      .lightalarm-wrapper .alarm-properties-wrap {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }

      .lightalarm-wrapper .alarm-time-decorator {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 100%;
        fill: var(--paper-item-icon-color, --text-color);
        opacity: 0.3;
        transition: opacity 150ms ease-in-out;
      }

      .lightalarm-wrapper.show-input .alarm-time-decorator,
      .lightalarm-wrapper.force-native-input-hour .alarm-time-decorator,
      .lightalarm-wrapper.force-native-input-minute .alarm-time-decorator {
        opacity: 0.07;
      }

      .lightalarm-wrapper .alarm-time-wrap {
        position: relative;
        font-size: 1.4rem;
        line-height: 1em;
        text-align: center;
        z-index: 2;
        top: 50%;
        margin-top: -0.2em;
      }
      .lightalarm-wrapper .alarm-time-display {
        box-sizing: border-box;
        position: relative;
        margin: 0 2.5rem;
      }
      .lightalarm-wrapper.show-input .alarm-time-display,
      .lightalarm-wrapper.force-native-input-hour .alarm-time-display,
      .lightalarm-wrapper.force-native-input-minute .alarm-time-display {
        opacity: 0;
      }
      .lightalarm-wrapper .alarm-time-picker {
        position: absolute;
        opacity: 0;
        width: 42%;
        top: 0;
        border: 0;
        padding: 0;
        margin: 0;
        margin-top: -0.7em;
        line-height: 3em;
        font-family: inherit;
        z-index: 2;
      }

      .lightalarm-wrapper .alarm-time-picker-left {
        left: 8%;
      }
      .lightalarm-wrapper .alarm-time-picker-right {
        left: 50%;
      }

      .lightalarm-wrapper.force-native-input-hour .alarm-time-picker-left {
        opacity: 1;
        width: 84%;
        left: 50%;
        transform: translate(-50%, 0);
      }
      .lightalarm-wrapper.force-native-input-minute .alarm-time-picker-right {
        opacity: 1;
        width: 84%;
        left: 50%;
        transform: translate(-50%, 0);
      }

      .lightalarm-wrapper .alarm-time-input {
        position: absolute;
        display: none;
        top: -0.4rem;
        left: 8%;
        width: 84%;
        opacity: 1;
      }
      .lightalarm-wrapper.show-input .alarm-time-input {
        display: block;
      }
      .lightalarm-wrapper .alarm-time-input input {
        width: 1.5em;
        width: 2.3ch;
        box-sizing: content-box;
        display: inline-block;
        padding: 2px;
        background: none;
        border: none;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        color: inherit;
        font-family: inherit;
        text-align: center;
        font-size: inherit;
      }
      .lightalarm-wrapper .alarm-time-input span {
        margin: 0 1px;
      }
      .lightalarm-wrapper .alarm-time-input input:focused {
        border-bottom: 1px solid var(--paper-input-container-focus-color, var(--primary-color));
      }
      .lightalarm-wrapper .alarm-time-input input[type='number'] {
        -moz-appearance: textfield;
      }
      .lightalarm-wrapper .alarm-time-input input::-webkit-outer-spin-button,
      .lightalarm-wrapper .alarm-time-input input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      .lightalarm-wrapper .alarm-mode {
        margin-bottom: 8px;
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
    `}_showTimeInputs(){const t=this.shadowRoot.getElementById("lightalarm-wrapper");t&&"shown"!==this.timeInputStatus&&(t.classList.add("show-input"),this.timeInputStatus="shown")}_selectedTimeValueChangedPicker(t){const e=t.target.value;if("true"===localStorage.getItem("lightalarmCard.forceNativePicker"))this._debounce("saveTimePickerValue",3e3,!1,e);else{this._saveTimePickerValue(e);const t=this.shadowRoot.getElementById("lightalarm-time-input-hour");t.value=e.split(":")[0],null==t||t.blur(),clearTimeout(this.inputBlurTimer);const i=this.shadowRoot.getElementById("lightalarm-time-input-minute");i.value=e.split(":")[1],null==i||i.blur(),clearTimeout(this.inputBlurTimer);const n=this.shadowRoot.getElementById("lightalarm-wrapper");if(!n)return;n.classList.remove("show-input","force-native-input-hour","force-native-input-minute"),this.timeInputStatus="none"}}_selectedTimeValueChangedInput(){this._debounce("saveTimeInputValue",3e3)}_saveTimePickerValue(t){const e=this.hass.states[this._config.time_entity];""!==t&&(this.shadowRoot.getElementById("lightalarm-time-picker-left").value=t,this.shadowRoot.getElementById("lightalarm-time-picker-right").value=t,t!==e.state&&this.hass.callService(e.entity_id.split(".",1)[0],"set_datetime",{entity_id:e.entity_id,time:t}))}_saveTimeInputValue(){const t=this.hass.states[this._config.time_entity],e=this.shadowRoot.getElementById("lightalarm-time-input-hour"),i=this.shadowRoot.getElementById("lightalarm-time-input-minute"),n=Number(e.value),r=Number(i.value);if(isNaN(n)||isNaN(r)||n<0||n>23||r<0||r>59)return void console.error(`Values for lightalarm time of '${e.value}' hours and '${i.value}' is not a valid time!`);const s=("0"+n).slice(-2)+":"+("0"+r).slice(-2);this.shadowRoot.getElementById("lightalarm-time-picker-left").value=s,this.shadowRoot.getElementById("lightalarm-time-picker-right").value=s,s!==t.state&&this.hass.callService(t.entity_id.split(".",1)[0],"set_datetime",{entity_id:t.entity_id,time:s})}_timePickerLeftClick(){this._timePickerClick(!0)}_timePickerRightClick(){this._timePickerClick(!1)}_timePickerClick(t){if("true"===localStorage.getItem("lightalarmCard.forceNativePicker")){const e=this.shadowRoot.getElementById("lightalarm-wrapper");if(!e)return;t?e.classList.add("force-native-input-hour"):e.classList.add("force-native-input-minute")}else if(this._showTimeInputs(),clearTimeout(this.inputBlurTimer),t){const t=this.shadowRoot.getElementById("lightalarm-time-input-hour");null==t||t.focus(),this._moveCursorToEnd(t)}else{const t=this.shadowRoot.getElementById("lightalarm-time-input-minute");null==t||t.focus(),this._moveCursorToEnd(t)}}_timePickerBlur(t){if("true"===localStorage.getItem("lightalarmCard.forceNativePicker")){this._debounce("saveTimePickerValue",0,!0,t.target.value);const e=this.shadowRoot.getElementById("lightalarm-wrapper");if(!e)return;e.classList.remove("force-native-input-hour","force-native-input-minute")}}_timeInputsBlur(){this.inputBlurTimer=setTimeout(()=>{this._debounce("saveTimeInputValue",0,!0);const t=this.shadowRoot.getElementById("lightalarm-wrapper");t&&(t.classList.remove("show-input"),this.timeInputStatus="none")},20)}_selectedModeChanged(t){Ct(window,"haptic","light");const e=this.hass.states[this._config.mode_entity];t.target.selectedItem&&""!==t.target.selectedItem.innerText&&t.target.selectedItem.innerText!==e.state&&this.hass.callService("input_select","select_option",{option:t.target.selectedItem.innerText,entity_id:e.entity_id})}_selectedDurationValueChanged(){const t=this.shadowRoot.querySelector("#duration-input"),e=this.hass.states[this._config.duration_entity];t.value!==e.state&&this.hass.callService(e.entity_id.split(".",1)[0],"set_value",{value:t.value,entity_id:e.entity_id})}_moveCursorToEnd(t){if(!t)return;t.focus();const e=t.value;t.value="",t.value=e}_debounce(t,e,i=!1,n=""){switch(clearTimeout(this.debounceTimer),t){case"saveTimeInputValue":i?this._saveTimeInputValue():this.debounceTimer=setTimeout(()=>this._saveTimeInputValue(),e);break;case"saveTimePickerValue":i?this._saveTimePickerValue(n):this.debounceTimer=setTimeout(()=>this._saveTimePickerValue(n),e)}}};t([G()],At.prototype,"hass",void 0),t([G()],At.prototype,"_config",void 0),At=t([J("lightalarm-card")],At);export{At as LightalarmCard};
