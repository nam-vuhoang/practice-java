(globalThis.webpackChunkcodility=globalThis.webpackChunkcodility||[]).push([[2584],{39255:(t,e,n)=>{"use strict";let r,i;function o(t,e,n){return{...arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},action:t,category:e,version:n}}function s(t){let{id:e,version:n,data:r}=t;return{data:r,metadata:{name:e,version:n}}}function a(t){let{id:e,version:n,data:r}=t}n.d(e,{lR:()=>o,f7:()=>s,q6:()=>a}),n(1581),r={},i=()=>null},79070:(t,e,n)=>{"use strict";n.d(e,{y:()=>r});const r="codility.integrations.pendo.ready"},69352:(t,e,n)=>{"use strict";var r=n(78619),i=n(71709);let o=!1;o||(window.config=window.config||(0,r.kL)(),(0,i.j2)(window.config),o=!0)},85126:(t,e,n)=>{"use strict";n.d(e,{v:()=>o,x:()=>a});var r=n(68929),i=n.n(r);function o(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((n=>{const r=document.createElement("script");e.hasOwnProperty("async")||(e.async=!0),e.hasOwnProperty("onload")||(e.onload=n),r.src=t,Object.keys(e).forEach((t=>{if(t.startsWith("data-")){const n=i()(t.split("data-")[1]);r.dataset[n]=e[t]}else r[t]=e[t]})),document.getElementsByTagName("script")[0].parentNode.appendChild(r)}))}const s=new Map;function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=t+JSON.stringify(e);if(s.has(n))return s.get(n);const r=o(t,e);return s.set(n,r),r}},16666:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(71709);function i(t){r.co.register(t),r.co.finishSetup()}},78619:(t,e,n)=>{"use strict";n.d(e,{ZP:()=>d,_m:()=>p,kL:()=>h});var r=n(69282),i=n.n(r),o=n(13218),s=n.n(o),a=n(78718),c=n.n(a),u=n(61217);const l=["supportEmail","upgradeEmail","isRecruiter","cacheId","logRocketId","pendo"],p={supportEmail:"support@example.com",upgradeEmail:"upgrades@codility.com",isRecruiter:!1,cacheId:"",logRocketId:"",pendo:{projectApiKey:"",includeUserPII:!1}};function h(){return(0,u.Z)("config",p)}const d=(t,e)=>function(t,e,n){try{!function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.forEach((t=>{i()(t in e,`Missing key in global config: "${t}"`)}))}(t,n)}catch(i){e({message:"Missing keys in global config:",domain:"Config",extra:{missingKeys:(r=s()(n)?Object.keys(n):[],l.filter((t=>!r.includes(t))))}});const o=c()(p,t),a=c()(n,t);return Object.assign({},o,a)}var r;return c()(n,t)}(l,t,e)},92757:(t,e,n)=>{"use strict";function r(t,e){this.refreshTime=12e4,this.level="INFO",this.logQue=[],this.logUrl=t,this.ticket=e,this.sessionId=Math.floor(1e9*Math.random()),this.startSending=function(t){void 0!==t&&(this.refreshTime=t);const e=this;setTimeout((function(){e._logRefresh()}),this.refreshTime)},this._sendLog=function(){const t={events:this.logQue};t.session=this.sessionId,t.ticket=this.ticket;const e=this;$.ajax({type:"POST",url:this.logUrl,contentType:"application/json",data:JSON.stringify(t),error(t){const n=e.logQue.length;e.log("DEBUG","cui multilog",`multilog failed. There are ${n} logs in the queue at that time`,t)},success(){e.logQue.length=0}})},this._logRefresh=function(){this.logQue.length>0&&this._sendLog();const t=this;setTimeout((function(){t._logRefresh()}),this.refreshTime)},this._levelValue=function(t){switch(t){case"ERROR":return 40;case"WARNING":return 30;case"INFO":return 20;case"DEBUG":return 10;default:return 0}},this.filter=function(t){const e=this._levelValue(this.level);return this._levelValue(t)>=e},this.log=function(t,e,n,r){if(this.filter(t)){const i={level:this._levelValue(t),type:e,msg:n,exception:this._dumpException(r),date:new Date},o="multilog";console.log(`%c${o}`,"background: #a4e5f2",t,{type:i.type,msg:i.msg,exception:i.exception}),i.exception&&console.error(i.exception),this.logQue.push(i)}},this.flush=function(){this.logQue.length>0&&this._sendLog()},this._dumpException=function(t){if(t)try{return t.toString()}catch(t){return null}return null}}n.d(e,{Zb:()=>s,ZP:()=>o,P5:()=>a});class i{constructor(t){this.Raven=t}log(t,e,n,r){const i=t.toLowerCase();if("error"!==i)return;const o={tags:{level:i,type:e,message:n},logger:"codility-javascript"};r?this.Raven.captureException(r,o):this.Raven.captureMessage(e,o)}}const o=function(t,e){},s={handlers:[],addHandler(t){for(let e=0;e<this.handlers.length;e++)if(this.handlers[e]===t)return;this.handlers.push(t)},flush(){for(let t=0;t<this.handlers.length;t++)"function"==typeof this.handlers[t].flush&&this.handlers[t].flush()},handle(t,e,n,r){for(let i=0;i<this.handlers.length;i++)this.handlers[i].log(t,e,n,r)},debug(t,e,n){this.handle("DEBUG",t,e,n)},info(t,e,n){this.handle("INFO",t,e,n)},warning(t,e,n){this.handle("WARNING",t,e,n)},error(t,e,n){this.handle("ERROR",t,e,n),this.flush()}};function a(t,e){const n=new r(t,e);n.startSending(),s.addHandler(n),window.Raven&&s.addHandler(new i(window.Raven))}},7929:(t,e,n)=>{"use strict";n.d(e,{ZP:()=>c});var r=n(52861),i=(n(13218),n(31955));const o={headers:{get:{"Content-Type":"application/json"},post:s({"Content-Type":"application/json"}),put:s({"Content-Type":"application/json"}),patch:s({"Content-Type":"application/json"})},timeout:3e4,maxContentLength:5e3};function s(t){return{...t,"X-CSRFToken":i.Z.get("csrftoken")}}const a=r.default.create(o),c={get:(t,e)=>u(a.get(t,{...e})),post:(t,e,n)=>u(a.post(t,e,{...n})),put:(t,e,n)=>u(a.put(t,e,{...n})),patch:(t,e,n)=>u(a.patch(t,e,{...n}))};async function u(t){try{return function(t){return t.data}(await t)}catch(t){return function(t){if(t.response){const{status:e,data:n,config:{method:r,url:i}}=t.response;throw Object.assign(new Error(t.message),{request:t.request,response:t.response,axiosError:t,status:e,method:r,url:i,data:n})}throw Object.assign(new Error(t.message),{...t,isTimeout:"ECONNABORTED"===t.code})}(t)}}},82200:(t,e,n)=>{"use strict";n.d(e,{bj:()=>f,J8:()=>d,Lh:()=>h});var r=n(50308),i=n.n(r);n(28341);const o=new Error('Invalid data passed to Raven. You should pass exactly one of "message" or "exception". See "Additional Data" for details.');function s(t,e){return t?{tags:{domain:t},...e}:{...e}}const a=t=>e=>n=>{try{if(function(t){let{message:e,exception:n}=t;if(!e&&!n||e&&n)throw o}({message:n.message,exception:n.exception}),n.message){const{message:r,domain:i,...o}=n,a=s(i,o);e.captureMessage(r,a),c(t,r,a)}if(n.exception){const{exception:r,domain:i,...o}=n,a=s(i,o);e.captureException(r,a),c(t,r,a)}}catch(r){const i={tags:{domain:"Raven"},extra:n};e.captureException(o,i),c(t,o,i)}};function c(t,e,n){t.error("Error captured",n),t.error(e)}var u=n(52050),l=n(45697),p=n.n(l);const h=p().shape({capture:p().func.isRequired});function d(){return(0,u.isTestingEnvironment)()?{capture:i()}:{capture(){n.g.console.error(...arguments)}}}const f=()=>window&&window.Raven?{capture:a(window.console)(window.Raven)}:d()},99063:(t,e,n)=>{"use strict";n.d(e,{h:()=>i});var r=n(7929);const i={sendEvent:t=>r.ZP.post("/internal-api/logs/store-schema-logs/",t)}},50535:(t,e,n)=>{"use strict";n.d(e,{I:()=>r.Il,X:()=>r.Xh});var r=n(1287)},1287:(t,e,n)=>{"use strict";n.d(e,{Il:()=>u,Xh:()=>c,p$:()=>l});var r=n(45697),i=n.n(r),o=n(39255),s=n(92757),a=n(99063);const c={track:n(83918).Z};function u(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.h;return{track:e=>((0,o.q6)(e),function(e){const n=(0,o.f7)(e);return(0,s.ZP)("Schema analytics tracker",n),t.sendEvent(n).then((()=>{}))}(e))}}const l=i().shape({track:i().func.isRequired})},71709:(t,e,n)=>{"use strict";n.d(e,{co:()=>E,vc:()=>w,j2:()=>k,Fz:()=>x,F2:()=>T});var r=n(69282),i=n.n(r),o=n(92757);const s={init(){x.capture({message:"Tried to fire init on uninitialized analytics",domain:"Analytics"})},register(){x.capture({message:"Tried to fire register on uninitialized analytics",domain:"Analytics"})},finishSetup(){x.capture({message:"Tried to fire finishSetup on uninitialized analytics",domain:"Analytics"})},track(){x.capture({message:"Tried to fire track on uninitialized analytics",domain:"Analytics"})}};var a=n(50308),c=n.n(a),u=n(7929);n(16666);const l=(p=[()=>({init:c(),register:c(),finishSetup:c(),track(t){!function(t){["category","action"].forEach((e=>i()(t[e],`${e} is required`)))}(t);const{category:e,action:n,...r}=t,o={type:e,event:n,json:r};u.ZP.post("/logs/_eventlog/",o)}})],t=>{const e=p.map((e=>e(t)));try{return function(t){t.forEach((t=>{["init","register","finishSetup","track"].forEach((e=>{i()("function"==typeof t[e],`${e} function required`)}))}))}(e),{init(){(0,o.ZP)("Analytics init"),e.forEach((t=>t.init()))},register(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(0,o.ZP)("Analytics register",{...n}),e.forEach((t=>t.register(...n)))},finishSetup(){(0,o.ZP)("Analytics finish setup"),e.forEach((t=>t.finishSetup()))},track(t){(0,o.ZP)("Analytics track",{event:t}),e.forEach((e=>e.track(t)))}}}catch(t){return console.warn("[Analytics] Broken provider",t),s}});var p,h=n(78619),d=n(85126);const f=async function(t){window.pendo=window.pendo||[],await(0,d.x)(`https://cdn.pendo.io/agent/static/${t}/pendo.js`,{id:"pendo",type:"text/javascript",async:!0})};var g=n(79070),v=n(82200),y=n(50535),m=n(99063);let w,x=(0,v.J8)(),E=s,T=y.X;function k(t){x=(0,v.bj)(),w=(0,h.ZP)(x.capture,t),E=l(w),E.init(),T=(0,y.I)(m.h),async function(t){let{projectApiKey:e}=t;e&&(await f(e),window.pendo.events.ready((function(){window.dispatchEvent(new Event(g.y))})),window.pendo.initialize())}(w.pendo)}},61217:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});const r=new Map,i="data-bag-";function o(t,e){if(!r.has(t)){const n=document?.getElementById(`${i}${t}`);n?r.set(t,JSON.parse(n.textContent??"null")):r.set(t,e)}return r.get(t)}},52050:t=>{t.exports={isCIEnvironment:function(){return!1},isTestingEnvironment:function(){return!1},isDevEnvironment:function(){return!1}}},83918:(t,e,n)=>{"use strict";function r(){return Promise.resolve(void 0)}function i(t){return function(){return Promise.resolve(t)}}n.d(e,{Z:()=>r,u:()=>i})},96874:t=>{t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},34865:(t,e,n)=>{var r=n(89465),i=n(77813),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var s=t[e];o.call(t,e)&&i(s,n)&&(void 0!==n||e in t)||r(t,e,n)}},21078:(t,e,n)=>{var r=n(62488),i=n(37285);t.exports=function t(e,n,o,s,a){var c=-1,u=e.length;for(o||(o=i),a||(a=[]);++c<u;){var l=e[c];n>0&&o(l)?n>1?t(l,n-1,o,s,a):r(a,l):s||(a[a.length]=l)}return a}},63012:(t,e,n)=>{var r=n(97786),i=n(10611),o=n(71811);t.exports=function(t,e,n){for(var s=-1,a=e.length,c={};++s<a;){var u=e[s],l=r(t,u);n(l,u)&&i(c,o(u,t),l)}return c}},10611:(t,e,n)=>{var r=n(34865),i=n(71811),o=n(65776),s=n(13218),a=n(40327);t.exports=function(t,e,n,c){if(!s(t))return t;for(var u=-1,l=(e=i(e,t)).length,p=l-1,h=t;null!=h&&++u<l;){var d=a(e[u]),f=n;if("__proto__"===d||"constructor"===d||"prototype"===d)return t;if(u!=p){var g=h[d];void 0===(f=c?c(g,d,h):void 0)&&(f=s(g)?g:o(e[u+1])?[]:{})}r(h,d,f),h=h[d]}return t}},56560:(t,e,n)=>{var r=n(75703),i=n(38777),o=n(6557),s=i?function(t,e){return i(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:o;t.exports=s},99021:(t,e,n)=>{var r=n(85564),i=n(45357),o=n(30061);t.exports=function(t){return o(i(t,void 0,r),t+"")}},37285:(t,e,n)=>{var r=n(62705),i=n(35694),o=n(1469),s=r?r.isConcatSpreadable:void 0;t.exports=function(t){return o(t)||i(t)||!!(s&&t&&t[s])}},45357:(t,e,n)=>{var r=n(96874),i=Math.max;t.exports=function(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var o=arguments,s=-1,a=i(o.length-e,0),c=Array(a);++s<a;)c[s]=o[e+s];s=-1;for(var u=Array(e+1);++s<e;)u[s]=o[s];return u[e]=n(c),r(t,this,u)}}},30061:(t,e,n)=>{var r=n(56560),i=n(21275)(r);t.exports=i},21275:t=>{var e=Date.now;t.exports=function(t){var n=0,r=0;return function(){var i=e(),o=16-(i-r);if(r=i,o>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}},75703:t=>{t.exports=function(t){return function(){return t}}},85564:(t,e,n)=>{var r=n(21078);t.exports=function(t){return null!=t&&t.length?r(t,1):[]}},50308:t=>{t.exports=function(){}},92703:(t,e,n)=>{"use strict";var r=n(50414);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,o,s){if(s!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},45697:(t,e,n)=>{t.exports=n(92703)()},50414:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t=>{t.O(0,[5475,2861,8341,6383],(()=>(69352,t(t.s=69352)))),t.O()}]);