var Ft=(pt,rt,z)=>new Promise((_t,N)=>{var k=x=>{try{S(z.next(x))}catch(G){N(G)}},R=x=>{try{S(z.throw(x))}catch(G){N(G)}},S=x=>x.done?_t(x.value):Promise.resolve(x.value).then(k,R);S((z=z.apply(pt,rt)).next())});(function(){var pt={"./node_modules/@webcomponents/custom-elements/custom-elements.min.js":function(){(function(){"use strict";var N=window.Document.prototype.createElement,k=window.Document.prototype.createElementNS,R=window.Document.prototype.importNode,S=window.Document.prototype.prepend,x=window.Document.prototype.append,G=window.DocumentFragment.prototype.prepend,yt=window.DocumentFragment.prototype.append,st=window.Node.prototype.cloneNode,B=window.Node.prototype.appendChild,X=window.Node.prototype.insertBefore,j=window.Node.prototype.removeChild,at=window.Node.prototype.replaceChild,T=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),K=window.Element.prototype.attachShadow,Q=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Y=window.Element.prototype.getAttribute,lt=window.Element.prototype.setAttribute,v=window.Element.prototype.removeAttribute,H=window.Element.prototype.toggleAttribute,M=window.Element.prototype.getAttributeNS,I=window.Element.prototype.setAttributeNS,W=window.Element.prototype.removeAttributeNS,U=window.Element.prototype.insertAdjacentElement,L=window.Element.prototype.insertAdjacentHTML,V=window.Element.prototype.prepend,ut=window.Element.prototype.append,tt=window.Element.prototype.before,et=window.Element.prototype.after,nt=window.Element.prototype.replaceWith,P=window.Element.prototype.remove,wt=window.HTMLElement,$=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),it=window.HTMLElement.prototype.insertAdjacentElement,ct=window.HTMLElement.prototype.insertAdjacentHTML,ot=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(t){return ot.add(t)});function Z(t){var n=ot.has(t);return t=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(t),!n&&t}var gt=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);function E(t){var n=t.isConnected;if(n!==void 0)return n;if(gt(t))return!0;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function q(t){var n=t.children;if(n)return Array.prototype.slice.call(n);for(n=[],t=t.firstChild;t;t=t.nextSibling)t.nodeType===Node.ELEMENT_NODE&&n.push(t);return n}function ht(t,n){for(;n&&n!==t&&!n.nextSibling;)n=n.parentNode;return n&&n!==t?n.nextSibling:null}function mt(t,n,o){for(var a=t;a;){if(a.nodeType===Node.ELEMENT_NODE){var i=a;n(i);var s=i.localName;if(s==="link"&&i.getAttribute("rel")==="import"){if(a=i.import,o===void 0&&(o=new Set),a instanceof Node&&!o.has(a))for(o.add(a),a=a.firstChild;a;a=a.nextSibling)mt(a,n,o);a=ht(t,i);continue}else if(s==="template"){a=ht(t,i);continue}if(i=i.__CE_shadowRoot)for(i=i.firstChild;i;i=i.nextSibling)mt(i,n,o)}a=a.firstChild?a.firstChild:ht(t,a)}}function c(){var t=!(O==null||!O.noDocumentConstructionObserver),n=!(O==null||!O.shadyDomFastWalk);this.m=[],this.g=[],this.j=!1,this.shadyDomFastWalk=n,this.I=!t}function e(t,n,o,a){var i=window.ShadyDOM;if(t.shadyDomFastWalk&&i&&i.inUse){if(n.nodeType===Node.ELEMENT_NODE&&o(n),n.querySelectorAll)for(t=i.nativeMethods.querySelectorAll.call(n,"*"),n=0;n<t.length;n++)o(t[n])}else mt(n,o,a)}function r(t,n){t.j=!0,t.m.push(n)}function l(t,n){t.j=!0,t.g.push(n)}function m(t,n){t.j&&e(t,n,function(o){return p(t,o)})}function p(t,n){if(t.j&&!n.__CE_patched){n.__CE_patched=!0;for(var o=0;o<t.m.length;o++)t.m[o](n);for(o=0;o<t.g.length;o++)t.g[o](n)}}function f(t,n){var o=[];for(e(t,n,function(i){return o.push(i)}),n=0;n<o.length;n++){var a=o[n];a.__CE_state===1?t.connectedCallback(a):b(t,a)}}function y(t,n){var o=[];for(e(t,n,function(i){return o.push(i)}),n=0;n<o.length;n++){var a=o[n];a.__CE_state===1&&t.disconnectedCallback(a)}}function g(t,n,o){o=o===void 0?{}:o;var a=o.J,i=o.upgrade||function(u){return b(t,u)},s=[];for(e(t,n,function(u){if(t.j&&p(t,u),u.localName==="link"&&u.getAttribute("rel")==="import"){var h=u.import;h instanceof Node&&(h.__CE_isImportDocument=!0,h.__CE_registry=document.__CE_registry),h&&h.readyState==="complete"?h.__CE_documentLoadHandled=!0:u.addEventListener("load",function(){var d=u.import;if(!d.__CE_documentLoadHandled){d.__CE_documentLoadHandled=!0;var w=new Set;a&&(a.forEach(function(_){return w.add(_)}),w.delete(d)),g(t,d,{J:w,upgrade:i})}})}else s.push(u)},a),n=0;n<s.length;n++)i(s[n])}function b(t,n){try{var o=n.ownerDocument,a=o.__CE_registry,i=a&&(o.defaultView||o.__CE_isImportDocument)?ft(a,n.localName):void 0;if(i&&n.__CE_state===void 0){i.constructionStack.push(n);try{try{if(new i.constructorFunction!==n)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{i.constructionStack.pop()}}catch(d){throw n.__CE_state=2,d}if(n.__CE_state=1,n.__CE_definition=i,i.attributeChangedCallback&&n.hasAttributes()){var s=i.observedAttributes;for(i=0;i<s.length;i++){var u=s[i],h=n.getAttribute(u);h!==null&&t.attributeChangedCallback(n,u,null,h,null)}}E(n)&&t.connectedCallback(n)}}catch(d){A(d)}}c.prototype.connectedCallback=function(t){var n=t.__CE_definition;if(n.connectedCallback)try{n.connectedCallback.call(t)}catch(o){A(o)}},c.prototype.disconnectedCallback=function(t){var n=t.__CE_definition;if(n.disconnectedCallback)try{n.disconnectedCallback.call(t)}catch(o){A(o)}},c.prototype.attributeChangedCallback=function(t,n,o,a,i){var s=t.__CE_definition;if(s.attributeChangedCallback&&-1<s.observedAttributes.indexOf(n))try{s.attributeChangedCallback.call(t,n,o,a,i)}catch(u){A(u)}};function D(t,n,o,a){var i=n.__CE_registry;if(i&&(a===null||a==="http://www.w3.org/1999/xhtml")&&(i=ft(i,o)))try{var s=new i.constructorFunction;if(s.__CE_state===void 0||s.__CE_definition===void 0)throw Error("Failed to construct '"+o+"': The returned value was not constructed with the HTMLElement constructor.");if(s.namespaceURI!=="http://www.w3.org/1999/xhtml")throw Error("Failed to construct '"+o+"': The constructed element's namespace must be the HTML namespace.");if(s.hasAttributes())throw Error("Failed to construct '"+o+"': The constructed element must not have any attributes.");if(s.firstChild!==null)throw Error("Failed to construct '"+o+"': The constructed element must not have any children.");if(s.parentNode!==null)throw Error("Failed to construct '"+o+"': The constructed element must not have a parent node.");if(s.ownerDocument!==n)throw Error("Failed to construct '"+o+"': The constructed element's owner document is incorrect.");if(s.localName!==o)throw Error("Failed to construct '"+o+"': The constructed element's local name is incorrect.");return s}catch(u){return A(u),n=a===null?N.call(n,o):k.call(n,a,o),Object.setPrototypeOf(n,HTMLUnknownElement.prototype),n.__CE_state=2,n.__CE_definition=void 0,p(t,n),n}return n=a===null?N.call(n,o):k.call(n,a,o),p(t,n),n}function A(t){var n="",o="",a=0,i=0;t instanceof Error?(n=t.message,o=t.sourceURL||t.fileName||"",a=t.line||t.lineNumber||0,i=t.column||t.columnNumber||0):n="Uncaught "+String(t);var s=void 0;ErrorEvent.prototype.initErrorEvent===void 0?s=new ErrorEvent("error",{cancelable:!0,message:n,filename:o,lineno:a,colno:i,error:t}):(s=document.createEvent("ErrorEvent"),s.initErrorEvent("error",!1,!0,n,o,a),s.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}),s.error===void 0&&Object.defineProperty(s,"error",{configurable:!0,enumerable:!0,get:function(){return t}}),window.dispatchEvent(s),s.defaultPrevented||console.error(t)}function F(){var t=this;this.g=void 0,this.F=new Promise(function(n){t.l=n})}F.prototype.resolve=function(t){if(this.g)throw Error("Already resolved.");this.g=t,this.l(t)};function dt(t){var n=document;this.l=void 0,this.h=t,this.g=n,g(this.h,this.g),this.g.readyState==="loading"&&(this.l=new MutationObserver(this.G.bind(this)),this.l.observe(this.g,{childList:!0,subtree:!0}))}function Et(t){t.l&&t.l.disconnect()}dt.prototype.G=function(t){var n=this.g.readyState;for(n!=="interactive"&&n!=="complete"||Et(this),n=0;n<t.length;n++)for(var o=t[n].addedNodes,a=0;a<o.length;a++)g(this.h,o[a])};function C(t){this.s=new Map,this.u=new Map,this.C=new Map,this.A=!1,this.B=new Map,this.o=function(n){return n()},this.i=!1,this.v=[],this.h=t,this.D=t.I?new dt(t):void 0}C.prototype.H=function(t,n){var o=this;if(!(n instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");bt(this,t),this.s.set(t,n),this.v.push(t),this.i||(this.i=!0,this.o(function(){return Tt(o)}))},C.prototype.define=function(t,n){var o=this;if(!(n instanceof Function))throw new TypeError("Custom element constructors must be functions.");bt(this,t),Ct(this,t,n),this.v.push(t),this.i||(this.i=!0,this.o(function(){return Tt(o)}))};function bt(t,n){if(!Z(n))throw new SyntaxError("The element name '"+n+"' is not valid.");if(ft(t,n))throw Error("A custom element with name '"+(n+"' has already been defined."));if(t.A)throw Error("A custom element is already being defined.")}function Ct(t,n,o){t.A=!0;var a;try{var i=o.prototype;if(!(i instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var s=function(_){var J=i[_];if(J!==void 0&&!(J instanceof Function))throw Error("The '"+_+"' callback must be a function.");return J},u=s("connectedCallback"),h=s("disconnectedCallback"),d=s("adoptedCallback"),w=(a=s("attributeChangedCallback"))&&o.observedAttributes||[]}catch(_){throw _}finally{t.A=!1}return o={localName:n,constructorFunction:o,connectedCallback:u,disconnectedCallback:h,adoptedCallback:d,attributeChangedCallback:a,observedAttributes:w,constructionStack:[]},t.u.set(n,o),t.C.set(o.constructorFunction,o),o}C.prototype.upgrade=function(t){g(this.h,t)};function Tt(t){if(t.i!==!1){t.i=!1;for(var n=[],o=t.v,a=new Map,i=0;i<o.length;i++)a.set(o[i],[]);for(g(t.h,document,{upgrade:function(d){if(d.__CE_state===void 0){var w=d.localName,_=a.get(w);_?_.push(d):t.u.has(w)&&n.push(d)}}}),i=0;i<n.length;i++)b(t.h,n[i]);for(i=0;i<o.length;i++){for(var s=o[i],u=a.get(s),h=0;h<u.length;h++)b(t.h,u[h]);(s=t.B.get(s))&&s.resolve(void 0)}o.length=0}}C.prototype.get=function(t){if(t=ft(this,t))return t.constructorFunction},C.prototype.whenDefined=function(t){if(!Z(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var n=this.B.get(t);if(n)return n.F;n=new F,this.B.set(t,n);var o=this.u.has(t)||this.s.has(t);return t=this.v.indexOf(t)===-1,o&&t&&n.resolve(void 0),n.F},C.prototype.polyfillWrapFlushCallback=function(t){this.D&&Et(this.D);var n=this.o;this.o=function(o){return t(function(){return n(o)})}};function ft(t,n){var o=t.u.get(n);if(o)return o;if(o=t.s.get(n)){t.s.delete(n);try{return Ct(t,n,o())}catch(a){A(a)}}}C.prototype.define=C.prototype.define,C.prototype.upgrade=C.prototype.upgrade,C.prototype.get=C.prototype.get,C.prototype.whenDefined=C.prototype.whenDefined,C.prototype.polyfillDefineLazy=C.prototype.H,C.prototype.polyfillWrapFlushCallback=C.prototype.polyfillWrapFlushCallback;function vt(t,n,o){function a(i){return function(s){for(var u=[],h=0;h<arguments.length;++h)u[h]=arguments[h];h=[];for(var d=[],w=0;w<u.length;w++){var _=u[w];if(_ instanceof Element&&E(_)&&d.push(_),_ instanceof DocumentFragment)for(_=_.firstChild;_;_=_.nextSibling)h.push(_);else h.push(_)}for(i.apply(this,u),u=0;u<d.length;u++)y(t,d[u]);if(E(this))for(u=0;u<h.length;u++)d=h[u],d instanceof Element&&f(t,d)}}o.prepend!==void 0&&(n.prepend=a(o.prepend)),o.append!==void 0&&(n.append=a(o.append))}function At(t){Document.prototype.createElement=function(n){return D(t,this,n,null)},Document.prototype.importNode=function(n,o){return n=R.call(this,n,!!o),this.__CE_registry?g(t,n):m(t,n),n},Document.prototype.createElementNS=function(n,o){return D(t,this,o,n)},vt(t,Document.prototype,{prepend:S,append:x})}function Nt(t){function n(a){return function(i){for(var s=[],u=0;u<arguments.length;++u)s[u]=arguments[u];u=[];for(var h=[],d=0;d<s.length;d++){var w=s[d];if(w instanceof Element&&E(w)&&h.push(w),w instanceof DocumentFragment)for(w=w.firstChild;w;w=w.nextSibling)u.push(w);else u.push(w)}for(a.apply(this,s),s=0;s<h.length;s++)y(t,h[s]);if(E(this))for(s=0;s<u.length;s++)h=u[s],h instanceof Element&&f(t,h)}}var o=Element.prototype;tt!==void 0&&(o.before=n(tt)),et!==void 0&&(o.after=n(et)),nt!==void 0&&(o.replaceWith=function(a){for(var i=[],s=0;s<arguments.length;++s)i[s]=arguments[s];s=[];for(var u=[],h=0;h<i.length;h++){var d=i[h];if(d instanceof Element&&E(d)&&u.push(d),d instanceof DocumentFragment)for(d=d.firstChild;d;d=d.nextSibling)s.push(d);else s.push(d)}for(h=E(this),nt.apply(this,i),i=0;i<u.length;i++)y(t,u[i]);if(h)for(y(t,this),i=0;i<s.length;i++)u=s[i],u instanceof Element&&f(t,u)}),P!==void 0&&(o.remove=function(){var a=E(this);P.call(this),a&&y(t,this)})}function St(t){function n(i,s){Object.defineProperty(i,"innerHTML",{enumerable:s.enumerable,configurable:!0,get:s.get,set:function(u){var h=this,d=void 0;if(E(this)&&(d=[],e(t,this,function(J){J!==h&&d.push(J)})),s.set.call(this,u),d)for(var w=0;w<d.length;w++){var _=d[w];_.__CE_state===1&&t.disconnectedCallback(_)}return this.ownerDocument.__CE_registry?g(t,this):m(t,this),u}})}function o(i,s){i.insertAdjacentElement=function(u,h){var d=E(h);return u=s.call(this,u,h),d&&y(t,h),E(u)&&f(t,h),u}}function a(i,s){function u(h,d){for(var w=[];h!==d;h=h.nextSibling)w.push(h);for(d=0;d<w.length;d++)g(t,w[d])}i.insertAdjacentHTML=function(h,d){if(h=h.toLowerCase(),h==="beforebegin"){var w=this.previousSibling;s.call(this,h,d),u(w||this.parentNode.firstChild,this)}else if(h==="afterbegin")w=this.firstChild,s.call(this,h,d),u(this.firstChild,w);else if(h==="beforeend")w=this.lastChild,s.call(this,h,d),u(w||this.firstChild,null);else if(h==="afterend")w=this.nextSibling,s.call(this,h,d),u(this.nextSibling,w);else throw new SyntaxError("The value provided ("+String(h)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.")}}K&&(Element.prototype.attachShadow=function(i){if(i=K.call(this,i),t.j&&!i.__CE_patched){i.__CE_patched=!0;for(var s=0;s<t.m.length;s++)t.m[s](i)}return this.__CE_shadowRoot=i}),Q&&Q.get?n(Element.prototype,Q):$&&$.get?n(HTMLElement.prototype,$):l(t,function(i){n(i,{enumerable:!0,configurable:!0,get:function(){return st.call(this,!0).innerHTML},set:function(s){var u=this.localName==="template",h=u?this.content:this,d=k.call(document,this.namespaceURI,this.localName);for(d.innerHTML=s;0<h.childNodes.length;)j.call(h,h.childNodes[0]);for(s=u?d.content:d;0<s.childNodes.length;)B.call(h,s.childNodes[0])}})}),Element.prototype.setAttribute=function(i,s){if(this.__CE_state!==1)return lt.call(this,i,s);var u=Y.call(this,i);lt.call(this,i,s),s=Y.call(this,i),t.attributeChangedCallback(this,i,u,s,null)},Element.prototype.setAttributeNS=function(i,s,u){if(this.__CE_state!==1)return I.call(this,i,s,u);var h=M.call(this,i,s);I.call(this,i,s,u),u=M.call(this,i,s),t.attributeChangedCallback(this,s,h,u,i)},Element.prototype.removeAttribute=function(i){if(this.__CE_state!==1)return v.call(this,i);var s=Y.call(this,i);v.call(this,i),s!==null&&t.attributeChangedCallback(this,i,s,null,null)},H&&(Element.prototype.toggleAttribute=function(i,s){if(this.__CE_state!==1)return H.call(this,i,s);var u=Y.call(this,i),h=u!==null;return s=H.call(this,i,s),h!==s&&t.attributeChangedCallback(this,i,u,s?"":null,null),s}),Element.prototype.removeAttributeNS=function(i,s){if(this.__CE_state!==1)return W.call(this,i,s);var u=M.call(this,i,s);W.call(this,i,s);var h=M.call(this,i,s);u!==h&&t.attributeChangedCallback(this,s,u,h,i)},it?o(HTMLElement.prototype,it):U&&o(Element.prototype,U),ct?a(HTMLElement.prototype,ct):L&&a(Element.prototype,L),vt(t,Element.prototype,{prepend:V,append:ut}),Nt(t)}var Mt={};function xt(t){function n(){var o=this.constructor,a=document.__CE_registry.C.get(o);if(!a)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var i=a.constructionStack;if(i.length===0)return i=N.call(document,a.localName),Object.setPrototypeOf(i,o.prototype),i.__CE_state=1,i.__CE_definition=a,p(t,i),i;var s=i.length-1,u=i[s];if(u===Mt)throw Error("Failed to construct '"+a.localName+"': This element was already constructed.");return i[s]=Mt,Object.setPrototypeOf(u,o.prototype),p(t,u),u}n.prototype=wt.prototype,Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:n}),window.HTMLElement=n}function kt(t){function n(o,a){Object.defineProperty(o,"textContent",{enumerable:a.enumerable,configurable:!0,get:a.get,set:function(i){if(this.nodeType===Node.TEXT_NODE)a.set.call(this,i);else{var s=void 0;if(this.firstChild){var u=this.childNodes,h=u.length;if(0<h&&E(this)){s=Array(h);for(var d=0;d<h;d++)s[d]=u[d]}}if(a.set.call(this,i),s)for(i=0;i<s.length;i++)y(t,s[i])}}})}Node.prototype.insertBefore=function(o,a){if(o instanceof DocumentFragment){var i=q(o);if(o=X.call(this,o,a),E(this))for(a=0;a<i.length;a++)f(t,i[a]);return o}return i=o instanceof Element&&E(o),a=X.call(this,o,a),i&&y(t,o),E(this)&&f(t,o),a},Node.prototype.appendChild=function(o){if(o instanceof DocumentFragment){var a=q(o);if(o=B.call(this,o),E(this))for(var i=0;i<a.length;i++)f(t,a[i]);return o}return a=o instanceof Element&&E(o),i=B.call(this,o),a&&y(t,o),E(this)&&f(t,o),i},Node.prototype.cloneNode=function(o){return o=st.call(this,!!o),this.ownerDocument.__CE_registry?g(t,o):m(t,o),o},Node.prototype.removeChild=function(o){var a=o instanceof Element&&E(o),i=j.call(this,o);return a&&y(t,o),i},Node.prototype.replaceChild=function(o,a){if(o instanceof DocumentFragment){var i=q(o);if(o=at.call(this,o,a),E(this))for(y(t,a),a=0;a<i.length;a++)f(t,i[a]);return o}i=o instanceof Element&&E(o);var s=at.call(this,o,a),u=E(this);return u&&y(t,a),i&&y(t,o),u&&f(t,o),s},T&&T.get?n(Node.prototype,T):r(t,function(o){n(o,{enumerable:!0,configurable:!0,get:function(){for(var a=[],i=this.firstChild;i;i=i.nextSibling)i.nodeType!==Node.COMMENT_NODE&&a.push(i.textContent);return a.join("")},set:function(a){for(;this.firstChild;)j.call(this,this.firstChild);a!=null&&a!==""&&B.call(this,document.createTextNode(a))}})})}var O=window.customElements;function Dt(){var t=new c;xt(t),At(t),vt(t,DocumentFragment.prototype,{prepend:G,append:yt}),kt(t),St(t),window.CustomElementRegistry=C,t=new C(t),document.__CE_registry=t,Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:t})}O&&!O.forcePolyfill&&typeof O.define=="function"&&typeof O.get=="function"||Dt(),window.__CE_installPolyfill=Dt}).call(self)}},rt={};function z(N){var k=rt[N];if(k!==void 0)return k.exports;var R=rt[N]={exports:{}};return pt[N](R,R.exports,z),R.exports}var _t={};(function(){"use strict";var N=z("./node_modules/@webcomponents/custom-elements/custom-elements.min.js");try{new Intl.NumberFormat("en",{style:"unit",unit:"minute"}).format(1)}catch(c){const e=Intl.NumberFormat;Intl.NumberFormat=function(r,l){return l.style==="unit"?{format(m){return` ${m} ${l.unit}`}}:e(r,l)}}var k=function(c,e,r,l,m){if(l==="m")throw new TypeError("Private method is not writable");if(l==="a"&&!m)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?c!==e||!m:!e.has(c))throw new TypeError("Cannot write private member to an object whose class did not declare it");return l==="a"?m.call(c,r):m?m.value=r:e.set(c,r),r},R=function(c,e,r,l){if(r==="a"&&!l)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?c!==e||!l:!e.has(c))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?l:r==="a"?l.call(c):l?l.value:e.get(c)},S;class x{formatToParts(e){const r=[];for(const l of e)r.push({type:"element",value:l}),r.push({type:"literal",value:", "});return r.slice(0,-1)}}const G=typeof Intl!="undefined"&&Intl.ListFormat||x,yt=[["years","year"],["months","month"],["weeks","week"],["days","day"],["hours","hour"],["minutes","minute"],["seconds","second"],["milliseconds","millisecond"]],st={minimumIntegerDigits:2};class B{constructor(e,r={}){S.set(this,void 0);let l=String(r.style||"short");l!=="long"&&l!=="short"&&l!=="narrow"&&l!=="digital"&&(l="short");let m=l==="digital"?"numeric":l;const p=r.hours||m;m=p==="2-digit"?"numeric":p;const f=r.minutes||m;m=f==="2-digit"?"numeric":f;const y=r.seconds||m;m=y==="2-digit"?"numeric":y;const g=r.milliseconds||m;k(this,S,{locale:e,style:l,years:r.years||l==="digital"?"short":l,yearsDisplay:r.yearsDisplay==="always"?"always":"auto",months:r.months||l==="digital"?"short":l,monthsDisplay:r.monthsDisplay==="always"?"always":"auto",weeks:r.weeks||l==="digital"?"short":l,weeksDisplay:r.weeksDisplay==="always"?"always":"auto",days:r.days||l==="digital"?"short":l,daysDisplay:r.daysDisplay==="always"?"always":"auto",hours:p,hoursDisplay:r.hoursDisplay==="always"||l==="digital"?"always":"auto",minutes:f,minutesDisplay:r.minutesDisplay==="always"||l==="digital"?"always":"auto",seconds:y,secondsDisplay:r.secondsDisplay==="always"||l==="digital"?"always":"auto",milliseconds:g,millisecondsDisplay:r.millisecondsDisplay==="always"?"always":"auto"},"f")}resolvedOptions(){return R(this,S,"f")}formatToParts(e){const r=[],l=R(this,S,"f"),m=l.style,p=l.locale;for(const[f,y]of yt){const g=e[f];if(l[`${f}Display`]==="auto"&&!g)continue;const b=l[f],D=b==="2-digit"?st:b==="numeric"?{}:{style:"unit",unit:y,unitDisplay:b};r.push(new Intl.NumberFormat(p,D).format(g))}return new G(p,{type:"unit",style:m==="digital"?"short":m}).formatToParts(r)}format(e){return this.formatToParts(e).map(r=>r.value).join("")}}S=new WeakMap;const X=/^[-+]?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/,j=["year","month","week","day","hour","minute","second","millisecond"],at=c=>X.test(c);class T{constructor(e=0,r=0,l=0,m=0,p=0,f=0,y=0,g=0){this.years=e,this.months=r,this.weeks=l,this.days=m,this.hours=p,this.minutes=f,this.seconds=y,this.milliseconds=g,this.years||(this.years=0),this.sign||(this.sign=Math.sign(this.years)),this.months||(this.months=0),this.sign||(this.sign=Math.sign(this.months)),this.weeks||(this.weeks=0),this.sign||(this.sign=Math.sign(this.weeks)),this.days||(this.days=0),this.sign||(this.sign=Math.sign(this.days)),this.hours||(this.hours=0),this.sign||(this.sign=Math.sign(this.hours)),this.minutes||(this.minutes=0),this.sign||(this.sign=Math.sign(this.minutes)),this.seconds||(this.seconds=0),this.sign||(this.sign=Math.sign(this.seconds)),this.milliseconds||(this.milliseconds=0),this.sign||(this.sign=Math.sign(this.milliseconds)),this.blank=this.sign===0}abs(){return new T(Math.abs(this.years),Math.abs(this.months),Math.abs(this.weeks),Math.abs(this.days),Math.abs(this.hours),Math.abs(this.minutes),Math.abs(this.seconds),Math.abs(this.milliseconds))}static from(e){var r;if(typeof e=="string"){const l=String(e).trim(),m=l.startsWith("-")?-1:1,p=(r=l.match(X))===null||r===void 0?void 0:r.slice(1).map(f=>(Number(f)||0)*m);return p?new T(...p):new T}else if(typeof e=="object"){const{years:l,months:m,weeks:p,days:f,hours:y,minutes:g,seconds:b,milliseconds:D}=e;return new T(l,m,p,f,y,g,b,D)}throw new RangeError("invalid duration")}static compare(e,r){const l=Date.now(),m=Math.abs(K(l,T.from(e)).getTime()-l),p=Math.abs(K(l,T.from(r)).getTime()-l);return m>p?-1:m<p?1:0}toLocaleString(e,r){return new B(e,r).format(this)}}function K(c,e){const r=new Date(c);return r.setFullYear(r.getFullYear()+e.years),r.setMonth(r.getMonth()+e.months),r.setDate(r.getDate()+e.weeks*7+e.days),r.setHours(r.getHours()+e.hours),r.setMinutes(r.getMinutes()+e.minutes),r.setSeconds(r.getSeconds()+e.seconds),r}function Q(c,e="second",r=Date.now()){const l=c.getTime()-r;if(l===0)return new T;const m=Math.sign(l),p=Math.abs(l),f=Math.floor(p/1e3),y=Math.floor(f/60),g=Math.floor(y/60),b=Math.floor(g/24),D=Math.floor(b/30),A=Math.floor(D/12),F=j.indexOf(e)||j.length;return new T(F>=0?A*m:0,F>=1?(D-A*12)*m:0,0,F>=3?(b-D*30)*m:0,F>=4?(g-b*24)*m:0,F>=5?(y-g*60)*m:0,F>=6?(f-y*60)*m:0,F>=7?(p-f*1e3)*m:0)}function Y(c,{relativeTo:e=Date.now()}={}){if(e=new Date(e),c.blank)return c;const r=c.sign;let l=Math.abs(c.years),m=Math.abs(c.months),p=Math.abs(c.weeks),f=Math.abs(c.days),y=Math.abs(c.hours),g=Math.abs(c.minutes),b=Math.abs(c.seconds),D=Math.abs(c.milliseconds);D>=900&&(b+=Math.round(D/1e3)),(b||g||y||f||p||m||l)&&(D=0),b>=55&&(g+=Math.round(b/60)),(g||y||f||p||m||l)&&(b=0),g>=55&&(y+=Math.round(g/60)),(y||f||p||m||l)&&(g=0),f&&y>=12&&(f+=Math.round(y/24)),!f&&y>=21&&(f+=Math.round(y/24)),(f||p||m||l)&&(y=0);const A=e.getFullYear();let F=e.getMonth();const dt=e.getDate();return(f>=27||l+m&&f)&&(e.setDate(dt+f*r),m+=Math.abs(e.getFullYear()>=A?e.getMonth()-F:e.getMonth()-F-12),m&&(f=0),F=e.getMonth()),f>=6&&(p+=Math.round(f/7)),(p||m||l)&&(f=0),p>=4&&(m+=Math.round(p/4)),(m||l)&&(p=0),(m>=11||l&&m)&&(e.setMonth(e.getMonth()+m*r),l+=Math.abs(A-e.getFullYear())),l&&(m=0),new T(l*r,m*r,p*r,f*r,y*r,g*r,b*r,D*r)}function lt(c,e){const r=Y(c,e);if(r.blank)return[0,"second"];for(const l of j){if(l==="millisecond")continue;const m=r[`${l}s`];if(m)return[m,l]}return[0,"second"]}var v=function(c,e,r,l){if(r==="a"&&!l)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?c!==e||!l:!e.has(c))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?l:r==="a"?l.call(c):l?l.value:e.get(c)},H=function(c,e,r,l,m){if(l==="m")throw new TypeError("Private method is not writable");if(l==="a"&&!m)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?c!==e||!m:!e.has(c))throw new TypeError("Cannot write private member to an object whose class did not declare it");return l==="a"?m.call(c,r):m?m.value=r:e.set(c,r),r},M,I,W,U,L,V,ut,tt,et,nt,P;const wt=globalThis.HTMLElement||null,$=new T,it=new T(0,0,0,0,0,1);class ct extends Event{constructor(e,r,l,m){super("relative-time-updated",{bubbles:!0,composed:!0}),this.oldText=e,this.newText=r,this.oldTitle=l,this.newTitle=m}}function ot(c){if(!c.date)return 1/0;if(c.format==="duration"||c.format==="elapsed"){const r=c.precision;if(r==="second")return 1e3;if(r==="minute")return 60*1e3}const e=Math.abs(Date.now()-c.date.getTime());return e<60*1e3?1e3:e<60*60*1e3?60*1e3:60*60*1e3}const Z=new class{constructor(){this.elements=new Set,this.time=1/0,this.timer=-1}observe(c){if(this.elements.has(c))return;this.elements.add(c);const e=c.date;if(e&&e.getTime()){const r=ot(c),l=Date.now()+r;l<this.time&&(clearTimeout(this.timer),this.timer=setTimeout(()=>this.update(),r),this.time=l)}}unobserve(c){this.elements.has(c)&&this.elements.delete(c)}update(){if(clearTimeout(this.timer),!this.elements.size)return;let c=1/0;for(const e of this.elements)c=Math.min(c,ot(e)),e.update();this.time=Math.min(60*60*1e3,c),this.timer=setTimeout(()=>this.update(),this.time),this.time+=Date.now()}};class gt extends wt{constructor(){super(...arguments),M.add(this),I.set(this,!1),W.set(this,!1),L.set(this,this.shadowRoot?this.shadowRoot:this.attachShadow?this.attachShadow({mode:"open"}):this),P.set(this,null)}static define(e="relative-time",r=customElements){return r.define(e,this),this}static get observedAttributes(){return["second","minute","hour","weekday","day","month","year","time-zone-name","prefix","threshold","tense","precision","format","format-style","datetime","lang","title"]}get onRelativeTimeUpdated(){return v(this,P,"f")}set onRelativeTimeUpdated(e){v(this,P,"f")&&this.removeEventListener("relative-time-updated",v(this,P,"f")),H(this,P,typeof e=="object"||typeof e=="function"?e:null,"f"),typeof e=="function"&&this.addEventListener("relative-time-updated",e)}get second(){const e=this.getAttribute("second");if(e==="numeric"||e==="2-digit")return e}set second(e){this.setAttribute("second",e||"")}get minute(){const e=this.getAttribute("minute");if(e==="numeric"||e==="2-digit")return e}set minute(e){this.setAttribute("minute",e||"")}get hour(){const e=this.getAttribute("hour");if(e==="numeric"||e==="2-digit")return e}set hour(e){this.setAttribute("hour",e||"")}get weekday(){const e=this.getAttribute("weekday");if(e==="long"||e==="short"||e==="narrow")return e;if(this.format==="datetime"&&e!=="")return this.formatStyle}set weekday(e){this.setAttribute("weekday",e||"")}get day(){var e;const r=(e=this.getAttribute("day"))!==null&&e!==void 0?e:"numeric";if(r==="numeric"||r==="2-digit")return r}set day(e){this.setAttribute("day",e||"")}get month(){const e=this.format;let r=this.getAttribute("month");if(r!==""&&(r!=null||(r=e==="datetime"?this.formatStyle:"short"),r==="numeric"||r==="2-digit"||r==="short"||r==="long"||r==="narrow"))return r}set month(e){this.setAttribute("month",e||"")}get year(){var e;const r=this.getAttribute("year");if(r==="numeric"||r==="2-digit")return r;if(!this.hasAttribute("year")&&new Date().getUTCFullYear()!==((e=this.date)===null||e===void 0?void 0:e.getUTCFullYear()))return"numeric"}set year(e){this.setAttribute("year",e||"")}get timeZoneName(){const e=this.getAttribute("time-zone-name");if(e==="long"||e==="short"||e==="shortOffset"||e==="longOffset"||e==="shortGeneric"||e==="longGeneric")return e}set timeZoneName(e){this.setAttribute("time-zone-name",e||"")}get prefix(){var e;return(e=this.getAttribute("prefix"))!==null&&e!==void 0?e:this.format==="datetime"?"":"on"}set prefix(e){this.setAttribute("prefix",e)}get threshold(){const e=this.getAttribute("threshold");return e&&at(e)?e:"P30D"}set threshold(e){this.setAttribute("threshold",e)}get tense(){const e=this.getAttribute("tense");return e==="past"?"past":e==="future"?"future":"auto"}set tense(e){this.setAttribute("tense",e)}get precision(){const e=this.getAttribute("precision");return j.includes(e)?e:this.format==="micro"?"minute":"second"}set precision(e){this.setAttribute("precision",e)}get format(){const e=this.getAttribute("format");return e==="datetime"?"datetime":e==="relative"?"relative":e==="duration"?"duration":e==="micro"?"micro":e==="elapsed"?"elapsed":"auto"}set format(e){this.setAttribute("format",e)}get formatStyle(){const e=this.getAttribute("format-style");if(e==="long")return"long";if(e==="short")return"short";if(e==="narrow")return"narrow";const r=this.format;return r==="elapsed"||r==="micro"?"narrow":r==="datetime"?"short":"long"}set formatStyle(e){this.setAttribute("format-style",e)}get datetime(){return this.getAttribute("datetime")||""}set datetime(e){this.setAttribute("datetime",e)}get date(){const e=Date.parse(this.datetime);return Number.isNaN(e)?null:new Date(e)}set date(e){this.datetime=(e==null?void 0:e.toISOString())||""}connectedCallback(){this.update()}disconnectedCallback(){Z.unobserve(this)}attributeChangedCallback(e,r,l){r!==l&&(e==="title"&&H(this,I,l!==null&&(this.date&&v(this,M,"m",V).call(this,this.date))!==l,"f"),!v(this,W,"f")&&!(e==="title"&&v(this,I,"f"))&&H(this,W,(()=>Ft(this,null,function*(){yield Promise.resolve(),this.update()}))(),"f"))}update(){const e=v(this,L,"f").textContent||this.textContent||"",r=this.getAttribute("title")||"";let l=r;const m=this.date;if(typeof Intl=="undefined"||!Intl.DateTimeFormat||!m){v(this,L,"f").textContent=e;return}const p=Date.now();v(this,I,"f")||(l=v(this,M,"m",V).call(this,m)||"",l&&this.setAttribute("title",l));const f=Q(m,this.precision,p),y=v(this,M,"m",ut).call(this,f);let g=e;y==="duration"?g=v(this,M,"m",tt).call(this,f):y==="relative"?g=v(this,M,"m",et).call(this,f):g=v(this,M,"m",nt).call(this,m),g?v(this,L,"f").textContent=g:this.shadowRoot===v(this,L,"f")&&this.textContent&&(v(this,L,"f").textContent=this.textContent),(g!==e||l!==r)&&this.dispatchEvent(new ct(e,g,r,l)),y==="relative"||y==="duration"?Z.observe(this):Z.unobserve(this),H(this,W,!1,"f")}}I=new WeakMap,W=new WeakMap,L=new WeakMap,P=new WeakMap,M=new WeakSet,U=function(){var e;return((e=this.closest("[lang]"))===null||e===void 0?void 0:e.getAttribute("lang"))||this.ownerDocument.documentElement.getAttribute("lang")||"default"},V=function(e){return new Intl.DateTimeFormat(v(this,M,"a",U),{day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"}).format(e)},ut=function(e){const r=this.format;if(r==="datetime")return"datetime";if(r==="duration"||r==="elapsed"||r==="micro")return"duration";if((r==="auto"||r==="relative")&&typeof Intl!="undefined"&&Intl.RelativeTimeFormat){const l=this.tense;if(l==="past"||l==="future"||T.compare(e,this.threshold)===1)return"relative"}return"datetime"},tt=function(e){const r=v(this,M,"a",U),l=this.format,m=this.formatStyle,p=this.tense;let f=$;l==="micro"?(e=Y(e),f=it,(this.tense==="past"&&e.sign!==-1||this.tense==="future"&&e.sign!==1)&&(e=it)):(p==="past"&&e.sign!==-1||p==="future"&&e.sign!==1)&&(e=f);const y=`${this.precision}sDisplay`;return e.blank?f.toLocaleString(r,{style:m,[y]:"always"}):e.abs().toLocaleString(r,{style:m})},et=function(e){const r=new Intl.RelativeTimeFormat(v(this,M,"a",U),{numeric:"auto",style:this.formatStyle}),l=this.tense;l==="future"&&e.sign!==1&&(e=$),l==="past"&&e.sign!==-1&&(e=$);const[m,p]=lt(e);return p==="second"&&m<10?r.format(0,"second"):r.format(m,p)},nt=function(e){const r=new Intl.DateTimeFormat(v(this,M,"a",U),{second:this.second,minute:this.minute,hour:this.hour,weekday:this.weekday,day:this.day,month:this.month,year:this.year,timeZoneName:this.timeZoneName});return`${this.prefix} ${r.format(e)}`.trim()};var E=null;const q=typeof globalThis!="undefined"?globalThis:window;try{q.RelativeTimeElement=gt.define()}catch(c){if(!(q.DOMException&&c instanceof DOMException&&c.name==="NotSupportedError")&&!(c instanceof ReferenceError))throw c}var ht=null,mt=null;window.customElements.define("gitea-origin-url",class extends HTMLElement{connectedCallback(){const c=this.getAttribute("data-url");try{if(c.startsWith("http://")||c.startsWith("https://")||c.startsWith("/")){const e=new URL(c,window.origin);e.protocol=window.location.protocol,e.host=window.location.host,this.textContent=e.toString();return}}catch(e){}this.textContent=c}})})()})();