module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(8)()},function(e,t){e.exports=require("react")},function(e,t,n){e.exports=function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}return function t(n,r){function o(t,o,i){if("undefined"!=typeof document){"number"==typeof(i=e({},r,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var a in i)i[a]&&(c+="; "+a,!0!==i[a]&&(c+="="+i[a].split(";")[0]));return document.cookie=t+"="+n.write(o,t)+c}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],r={},o=0;o<t.length;o++){var i=t[o].split("="),c=i.slice(1).join("=");try{var a=decodeURIComponent(i[0]);if(r[a]=n.read(c,a),e===a)break}catch(e){}}return e?r[e]:r}},remove:function(t,n){o(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(c=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var c,a,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0),c=n.n(i),a=n(2),s=n.n(a);n(5);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=function(e){var t=e.children,n=e.cookies,i=e.containerClass,c=e.contentClass,a=e.cookiePrefix,l=e.buttonsClass,f=e.buttonPrimaryClass,d=e.buttonSecondaryClass,b=e.privacyWrapper,m=e.linkOne,y=e.linkTwo,k=e.linkOneText,g=e.linkTwoText,v=e.onSave,h=e.onInit,x=e.preferencesButtonText,w=e.savePreferencesButtonText,S=e.acceptAllButtonText,C=e.containerStyle,O=e.contentStyle,j=e.cookiesStyle,T=e.cookieStyle,E=e.buttonsStyle,P=e.buttonPrimaryStyle,I=e.buttonSecondaryStyle,_=e.cookieOptions,A=e.toggleVisibility,B=e.legacyCookie,M=e.legacyCookieOptions,N=e.showCookiePreferences,R={container:C,content:O,cookies:j,cookie:T,buttons:E,buttonPrimary:P,buttonSecondary:I},U=p(Object(r.useState)({visible:!1,showCookies:!1,msg:"",initial:!1}),2),D=U[0],L=U[1],F=p(Object(r.useState)({cookies:n,callback:!1}),2),W=F[0],z=F[1];Object(r.useEffect)((function(){L((function(e){return u(u({},e),{},{visible:!e.visible})}))}),[A]),Object(r.useEffect)((function(){W.callback&&v(W.cookies)}),[W]),Object(r.useEffect)((function(){if(!1===D.init){var e=function(e){var t=s.a.get(a+e,_);return void 0===t&&(t=s.a.get(a+e+"-legacy",M)),t},t=W.cookies.filter((function(e){return!0===e.default}));if(t.length>0){void 0===e(t[0].name)?L((function(e){return u(u({},e),{},{visible:!0})})):(L((function(e){return u(u({},e),{},{visible:!1})})),z((function(t){return{cookies:t.cookies.map((function(t){return t=u(u({},t),{},{checked:"true"===e(t.name)})})),callback:!1}}))),L((function(e){return u(u({},e),{},{init:!0})}));var n=W.cookies.map((function(t){return t=u(u({},t),{},{checked:"true"===e(t.name)})}));h(n)}else L((function(e){return u(u({},e),{},{msg:"Missing default cookie. A default cookie is required."})}))}}),[M,a,_,W,h,D.init]);var q=function(e,t){s.a.set(a+e,t,_),!0===B&&s.a.set(a+e+"-legacy",t,M)};return""!==D.msg?o.a.createElement("div",{className:i,style:R.container},o.a.createElement("div",{className:c,style:R.content},D.msg)):!1===D.visible?null:o.a.createElement("div",{className:i,style:R.container},o.a.createElement("div",{className:c,style:R.content},t,D.showCookies&&o.a.createElement("ul",{style:R.cookies},W.cookies.map((function(e,t){return o.a.createElement("li",{style:R.cookie,key:t},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",name:e.name,onChange:function(){var t;t=e.name,z((function(e){return{cookies:e.cookies.map((function(e){return!0===e.editable&&e.name===t?e=u(u({},e),{},{checked:!e.checked}):e})),callback:!1}}))},checked:!1===e.editable||e.checked}),o.a.createElement("strong",null,e.title),o.a.createElement("p",{style:R.cookieText},e.text)))}))),o.a.createElement("div",{className:l,style:R.buttons},N?D.showCookies?o.a.createElement("button",{className:d,style:R.buttonSecondary,onClick:function(){W.cookies.forEach((function(e){!0===e.checked||!1===e.editable?q(e.name,!0):(s.a.remove(a+e.name,_),s.a.remove(a+e.name+"-legacy",M))})),L((function(e){return u(u({},e),{},{visible:!1})})),v(W.cookies)}},w):o.a.createElement("button",{className:d,style:R.buttonSecondary,onClick:function(){L((function(e){return u(u({},e),{},{showCookies:!e.showCookies})}))}},x):null,o.a.createElement("ul",{className:b},o.a.createElement("li",null,o.a.createElement("a",{title:k,href:"/".concat(m)},k)),o.a.createElement("li",null,o.a.createElement("a",{title:g,href:"/".concat(y)},g))),o.a.createElement("button",{className:f,style:R.buttonPrimary,onClick:function(){z((function(e){return{cookies:e.cookies.map((function(e){return q(e.name,!0),e=u(u({},e),{},{checked:!0})})),callback:!0}})),L((function(e){return u(u({},e),{},{visible:!1})}))}},S))))};b.defaultProps={preferencesButtonText:"Cookie preferences",savePreferencesButtonText:"Save cookie preferences",acceptAllButtonText:"Accept all cookies",cookies:[{name:"necessary",checked:!0,editable:!1,default:!0,title:"Essential",text:"Essential cookies enable basic functions and are necessary for the proper function of the website. The website cannot function properly without these cookies."},{name:"marketing",checked:!1,editable:!0,title:"Marketing",text:"Marketing cookies are used to track visitors across websites. They are used by third-party advertisers or publishers to display personalized ads."}],cookiePrefix:"react_cookie_notice_",containerClass:"react-cookie-notice-container",contentClass:"react-cookie-notice-content",buttonsClass:"react-cookie-notice-buttons",buttonPrimaryClass:"react-cookie-notice-button-primary",buttonSecondaryClass:"react-cookie-notice-button-secondary",privacyWrapper:"react-cookie-notice-privacy-wrapper",linkOne:"",linkTwo:"",linkOneText:"",linkTwoText:"",onSave:function(e){},onInit:function(e){},containerStyle:{},contentStyle:{},cookiesStyle:{},cookieStyle:{},buttonsStyle:{},buttonPrimaryStyle:{},buttonSecondaryStyle:{},cookieOptions:{expires:365},toggleVisibility:!0,legacyCookie:!1,legacyCookieOptions:{expires:365},showCookiePreferences:!0},b.propTypes={preferencesButtonText:c.a.string,savePreferencesButtonText:c.a.string,acceptAllButtonText:c.a.string,cookies:c.a.arrayOf(c.a.object),cookiePrefix:c.a.string,containerClass:c.a.string,contentClass:c.a.string,buttonsClass:c.a.string,buttonPrimaryClass:c.a.string,buttonSecondaryClass:c.a.string,privacyWrapper:c.a.string,linkOne:c.a.string,linkTwo:c.a.string,linkOneText:c.a.string,linkTwoText:c.a.string,onSave:c.a.func,onInit:c.a.func,containerStyle:c.a.object,contentStyle:c.a.object,cookiesStyle:c.a.object,cookieStyle:c.a.object,buttonsStyle:c.a.object,buttonPrimaryStyle:c.a.object,buttonSecondaryStyle:c.a.object,cookieOptions:c.a.object,toggleVisibility:c.a.bool,legacyCookie:c.a.bool,legacyCookieOptions:c.a.object,showCookiePreferences:c.a.bool},t.default=b},function(e,t,n){var r=n(6),o=n(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var f=a(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(c[f].references++,c[f].updater(p)):c.push({identifier:u,updater:y(p,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var u,f=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,m=0;function y(e,t){var n,r,o;if(t.singleton){var i=m++;n=b||(b=l(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=l(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);c[o].references--}for(var i=s(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===c[u].references&&(c[u].updater(),c.splice(u,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r)()(!1);o.push([e.i,".react-cookie-notice-container {\r\n    background: #222222;\r\n    color: #ffffff;\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    z-index: 9999;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    line-height: 1.5rem;\r\n}\r\n\r\n.react-cookie-notice-container .react-cookie-notice-content {\r\n    max-width: 900px;\r\n    padding: 1rem 2rem;\r\n}\r\n\r\n.react-cookie-notice-container .react-cookie-notice-content ul {\r\n    background: #ffffff;\r\n    color: #000000;\r\n    list-style-type: none;\r\n    margin: 0 0 1rem 0;\r\n    padding: 1rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .react-cookie-notice-container .react-cookie-notice-content ul {\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    }\r\n}\r\n\r\n.react-cookie-notice-container .react-cookie-notice-content ul li {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 48%;\r\n    flex: 0 0 48%;\r\n}\r\n\r\n.react-cookie-notice-container .react-cookie-notice-content ul li strong {\r\n    margin-left: 0.5rem;\r\n}\r\n\r\n.react-cookie-notice-container .react-cookie-notice-content ul li p {\r\n    margin-top: 0;\r\n}\r\n\r\n.react-cookie-notice-container .react-cookie-notice-content .react-cookie-notice-buttons {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n}\r\n\r\n.react-cookie-notice-container .react-cookie-notice-content .react-cookie-notice-buttons .react-cookie-notice-button-primary {\r\n    background: #5fdafb;\r\n    color: #000;\r\n    text-decoration: none;\r\n    padding: 1rem;\r\n    text-align: center;\r\n    border: 0;\r\n    margin-left: auto;\r\n}\r\n.react-cookie-notice-button-primary {\r\n    margin-left: inherit !important;\r\n}\r\n.react-cookie-notice-container .react-cookie-notice-content .react-cookie-notice-buttons .react-cookie-notice-button-secondary {\r\n    background: none;\r\n    color: #ffffff;\r\n    padding: 0;\r\n    text-decoration: underline;\r\n    text-align: left;\r\n    border: 0;\r\n}\r\n\r\n.react-cookie-notice-privacy-wrapper {\r\n    background-color: transparent !important;\r\n    color: #ffffff !important;\r\n    display: flex !important;\r\n    justify-content: center !important;\r\n    flex-wrap: nowrap !important;\r\n    gap: 10px;\r\n    margin-top: 15px !important;\r\n    padding: 10px !important;\r\n    text-decoration: none !important;\r\n    margin-left: auto !important;\r\n    margin-right: auto !important;\r\n    text-align: center !important;\r\n}\r\n",""]),t.default=o},function(e,t,n){"use strict";var r=n(9);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);