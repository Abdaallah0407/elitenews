!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){!function(e){"use strict";if(!e.fetch){var t="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,r="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),i="FormData"in e,s="ArrayBuffer"in e;if(s)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=function(e){return e&&DataView.prototype.isPrototypeOf(e)},u=ArrayBuffer.isView||function(e){return e&&o.indexOf(Object.prototype.toString.call(e))>-1};p.prototype.append=function(e,t){e=d(e),t=h(t);var n=this.map[e];this.map[e]=n?n+","+t:t},p.prototype.delete=function(e){delete this.map[d(e)]},p.prototype.get=function(e){return e=d(e),this.has(e)?this.map[e]:null},p.prototype.has=function(e){return this.map.hasOwnProperty(d(e))},p.prototype.set=function(e,t){this.map[d(e)]=h(t)},p.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},p.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),f(e)},p.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),f(e)},p.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),f(e)},n&&(p.prototype[Symbol.iterator]=p.prototype.entries);var l=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];T.prototype.clone=function(){return new T(this,{body:this._bodyInit})},L.call(T.prototype),L.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},E.error=function(){var e=new E(null,{status:0,statusText:""});return e.type="error",e};var c=[301,302,303,307,308];E.redirect=function(e,t){if(-1===c.indexOf(t))throw new RangeError("Invalid status code");return new E(null,{status:t,headers:{location:e}})},e.Headers=p,e.Request=T,e.Response=E,e.fetch=function(e,t){return new Promise((function(n,i){var s=new T(e,t),o=new XMLHttpRequest;o.onload=function(){var e,t,r={status:o.status,statusText:o.statusText,headers:(e=o.getAllResponseHeaders()||"",t=new p,e.split(/\r?\n/).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var i=n.join(":").trim();t.append(r,i)}})),t)};r.url="responseURL"in o?o.responseURL:r.headers.get("X-Request-URL");var i="response"in o?o.response:o.responseText;n(new E(i,r))},o.onerror=function(){i(new TypeError("Network request failed"))},o.ontimeout=function(){i(new TypeError("Network request failed"))},o.open(s.method,s.url,!0),"include"===s.credentials&&(o.withCredentials=!0),"responseType"in o&&r&&(o.responseType="blob"),s.headers.forEach((function(e,t){o.setRequestHeader(t,e)})),o.send(void 0===s._bodyInit?null:s._bodyInit)}))},e.fetch.polyfill=!0}function d(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function h(e){return"string"!=typeof e&&(e=String(e)),e}function f(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function p(e){this.map={},e instanceof p?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function y(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function b(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function v(e){var t=new FileReader,n=b(t);return t.readAsArrayBuffer(e),n}function m(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function L(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(r&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(i&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(s&&r&&a(e))this._bodyArrayBuffer=m(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!s||!ArrayBuffer.prototype.isPrototypeOf(e)&&!u(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=m(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r&&(this.blob=function(){var e=y(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?y(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(v)}),this.text=function(){var e,t,n,r=y(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=b(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(S)}),this.json=function(){return this.text().then(JSON.parse)},this}function T(e,t){var n,r,i=(t=t||{}).body;if(e instanceof T){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new p(e.headers)),this.method=e.method,this.mode=e.mode,i||null==e._bodyInit||(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new p(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),l.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i)}function S(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(i))}})),t}function E(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new p(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:this)},function(e,t,n){"use strict";var r,i=n(3),s=(r=i)&&r.__esModule?r:{default:r};document.addEventListener("DOMContentLoaded",(function(){new s.default}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.OPTIONS_FORM_SELECTOR="#ctl-options",this.HEADER_SELECTOR=this.OPTIONS_FORM_SELECTOR+" h2",this.TABLE_SELECTOR=this.OPTIONS_FORM_SELECTOR+" table",this.SUBMIT_SELECTOR=this.OPTIONS_FORM_SELECTOR+" #submit",this.CURRENT_STUB_ID="ctl-current",this.CURRENT_NAV_TAB_CLASS="nav-tab-current",this.ACTIVE_NAV_TAB_CLASS="nav-tab-active",this.ACTIVE_TABLE_CLASS="active",this.EDIT_LABEL_ID="ctl-edit-label",this.EDIT_LABEL_ERROR_CLASS="ctl-edit-label-error",this.plusButton='<button type="button" aria-haspopup="true" aria-expanded="false" class="components-button block-editor-inserter__toggle has-icon" aria-label="Добавить блок"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" role="img" aria-hidden="true" focusable="false"><path d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"></path></svg></button>',this.PLUS_CLASS="ctl-plus",this.optionsForm=document.querySelector(this.OPTIONS_FORM_SELECTOR),this.tablesData=this.getTablesData(),this.submitButton=document.querySelector(this.SUBMIT_SELECTOR),this.addWrapper(),this.addMessageLines(),this.addEditLabelInput(),this.hideTables(),this.bindEvents(),this.setSubmitStatus()}return r(e,[{key:"getHeaders",value:function(){return[].concat(i(document.querySelectorAll(this.HEADER_SELECTOR)))}},{key:"getActiveHeader",value:function(){return document.querySelector(this.HEADER_SELECTOR+"."+this.ACTIVE_NAV_TAB_CLASS)}},{key:"getActiveIndex",value:function(){return this.getActiveHeader().dataset.index}},{key:"getTables",value:function(){return[].concat(i(document.querySelectorAll(this.TABLE_SELECTOR)))}},{key:"getActiveTable",value:function(){return document.querySelector(this.TABLE_SELECTOR+"."+this.ACTIVE_TABLE_CLASS)}},{key:"getInputs",value:function(){return[].concat(i(document.querySelectorAll(this.OPTIONS_FORM_SELECTOR+" input")))}},{key:"getLabels",value:function(){return[].concat(i(document.querySelectorAll(this.OPTIONS_FORM_SELECTOR+" label")))}},{key:"getPlusButtons",value:function(){return[].concat(i(document.querySelectorAll(this.OPTIONS_FORM_SELECTOR+" ."+this.PLUS_CLASS)))}},{key:"isActiveTableChanged",value:function(){var e=this.getActiveIndex();return JSON.stringify(this.getActiveTableData())!==JSON.stringify(this.tablesData[e])}},{key:"setSubmitStatus",value:function(){this.submitButton.disabled=!this.isActiveTableChanged()}},{key:"saveActiveTable",value:function(){var e=this;if(this.isActiveTableChanged()){var t=this.getActiveTable(),n=document.createElement("form");return n.action=this.optionsForm.getAttribute("action"),n.method=this.optionsForm.method,n.appendChild(t.cloneNode(!0)),[].concat(i(t.querySelectorAll("input"))).map((function(e){n.querySelector("#"+e.id).value=e.value})),[].concat(i(this.optionsForm.querySelectorAll('input[type="hidden"]'))).map((function(e){n.appendChild(e.cloneNode(!0))})),document.body.appendChild(n),fetch(this.optionsForm.getAttribute("action"),{method:n.method,body:new URLSearchParams([].concat(i(new FormData(n))))}).then((function(t){return t.ok?(e.showMessage(e.successMessage,"Options saved."),e.tablesData=e.getTablesData()):e.showMessage(e.errorMessage,"Error saving options."),t.json()})).finally((function(){n.remove(),e.setSubmitStatus()}))}}},{key:"getTableData",value:function(e){var t=this,n=[].concat(i(e.querySelectorAll("input"))),r={};return n.forEach((function(e){var n=document.querySelector(t.OPTIONS_FORM_SELECTOR+' label[for="'+e.id+'"]');r[n.innerHTML]=e.value})),r}},{key:"getTablesData",value:function(){var e=this;return this.getTables().map((function(t){return e.getTableData(t)}))}},{key:"getActiveTableData",value:function(){return this.getTableData(this.getActiveTable())}},{key:"addWrapper",value:function(){this.wrapper=document.createElement("ul"),this.wrapper.classList.add("nav-tab-wrapper"),this.optionsForm.prepend(this.wrapper)}},{key:"addMessageLine",value:function(e){var t=document.createElement("div");return t.id=e,this.optionsForm.prepend(t),t}},{key:"addMessageLines",value:function(){this.successMessage=this.addMessageLine("ctl-success"),this.errorMessage=this.addMessageLine("ctl-error")}},{key:"addEditLabelInput",value:function(){this.editLabelInput=document.createElement("input"),this.editLabelInput.id=this.EDIT_LABEL_ID,this.editLabelInput.style.display="none",document.body.appendChild(this.editLabelInput)}},{key:"hideEditLabelInput",value:function(){this.editLabelInput.style.display="none",this.editLabelInput.classList.remove(this.EDIT_LABEL_ERROR_CLASS),document.body.appendChild(this.editLabelInput)}},{key:"getLastCell",value:function(){return document.querySelector(this.OPTIONS_FORM_SELECTOR+" ."+this.ACTIVE_TABLE_CLASS+" ."+this.PLUS_CLASS).previousElementSibling}},{key:"addCell",value:function(){var e=this.getLastCell();e.parentElement.insertBefore(e.cloneNode(!0),e.nextElementSibling);var t=(e=this.getLastCell()).querySelector("label"),n=e.querySelector("input"),r=n.id.split("-"),i=r[0]+"-"+(parseInt(r[1])+1);t.htmlFor=i,t.innerHTML="",n.id=i,n.value="",n.setAttribute("value",""),this.replaceName(n,""),this.bindEvents(),this.editLabel(t)}},{key:"hideTables",value:function(){var e=this,t=0;this.getTables().map((function(n,r){n.classList.add("ctl-table"),e.CURRENT_STUB_ID===n.previousElementSibling.id&&(t=r,n.classList.add(e.ACTIVE_TABLE_CLASS));var i=document.createElement("div");i.classList.add(e.PLUS_CLASS),i.innerHTML=e.plusButton,n.querySelector("td").appendChild(i)})),this.getHeaders().map((function(n,r){n.classList.add("nav-tab"),n.dataset.index=r,e.wrapper.appendChild(n),r===t&&n.classList.add(e.CURRENT_NAV_TAB_CLASS,e.ACTIVE_NAV_TAB_CLASS)}))}},{key:"bindEvents",value:function(){var e=this;this.getHeaders().map((function(t,n,r){t.onclick=function(t){t.preventDefault();var n=t.target.dataset.index;if(n===e.getActiveIndex())return!1;e.saveActiveTable(),r.map((function(t){t.classList.remove(e.ACTIVE_NAV_TAB_CLASS)})),r[n].classList.add(e.ACTIVE_NAV_TAB_CLASS);var i=e.getTables();return i.map((function(t){t.classList.remove(e.ACTIVE_TABLE_CLASS)})),i[n].classList.add(e.ACTIVE_TABLE_CLASS),e.setSubmitStatus(),!1}})),this.getInputs().map((function(t){t.oninput=function(){e.setSubmitStatus()}})),this.getLabels().map((function(t){t.onclick=function(t){return t.preventDefault(),e.editLabel(t.target),!1}})),this.editLabelInput.onblur=function(){e.saveLabel()},this.editLabelInput.onkeyup=function(t){"Escape"===t.key&&e.saveLabel(!0),"Enter"===t.key&&e.saveLabel()},this.getPlusButtons().map((function(t){t.onclick=function(t){return t.preventDefault(),e.addCell(t.target),!1}})),document.querySelector(this.SUBMIT_SELECTOR).onclick=function(t){return t.preventDefault(),e.saveActiveTable(),!1}}},{key:"editLabel",value:function(e){e.parentNode.appendChild(this.editLabelInput),this.editLabelInput.value=e.innerHTML,this.editLabelInput.classList.remove(this.EDIT_LABEL_ERROR_CLASS),this.editLabelInput.style.display="block",this.editLabelInput.focus()}},{key:"isUniqueLabel",value:function(e){return[].concat(i(this.getActiveTable().querySelectorAll("label"))).reduce((function(t,n){return t&&n.innerHTML!==e}),!0)}},{key:"saveLabel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("none"!==this.editLabelInput.style.display){var t=this.editLabelInput.value.trim(),n=this.editLabelInput.parentNode.querySelector("label"),r=this.editLabelInput.parentNode.querySelector("input");if(""===t){var i=document.getElementById(this.EDIT_LABEL_ID).parentElement;return this.hideEditLabelInput(),i.remove(),void this.setSubmitStatus()}e||t===n.innerHTML?this.hideEditLabelInput():this.isUniqueLabel(t)?(this.hideEditLabelInput(),n.innerHTML=t,this.replaceName(r,t),this.setSubmitStatus()):this.editLabelInput.classList.add(this.EDIT_LABEL_ERROR_CLASS)}}},{key:"replaceName",value:function(e,t){e.name=e.name.replace(/(.+\[.+])\[.*]/g,"$1["+t+"]")}},{key:"clearMessage",value:function(e){e.innerHTML="",e.classList.remove("active")}},{key:"clearMessages",value:function(){this.clearMessage(this.successMessage),this.clearMessage(this.errorMessage),clearTimeout(this.msgTimer)}},{key:"showMessage",value:function(e,t){var n=this;e.innerHTML=t,e.classList.add("active"),this.msgTimer=setTimeout((function(){n.clearMessages()}),5e3)}}]),e}();t.default=s}]);