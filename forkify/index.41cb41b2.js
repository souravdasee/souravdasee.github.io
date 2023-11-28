var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,g,v=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=function(e){return e&&e.Math===Math&&e};b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||_("object"==typeof self&&self)||_("object"==typeof v&&v)||_("object"==typeof b&&b)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var j=Function.prototype.call;E=S?j.bind(j):function(){return j.apply(j,arguments)};var $={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor;n=O&&!$.call({1:2},1)?function(e){var t=O(this,e);return!!t&&t.enumerable}:$;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},x={},M={},T=Function.prototype,H=T.call,A=S&&T.bind.bind(H,H),F={},I=(M=S?A:function(e){return function(){return H.apply(e,arguments)}})({}.toString),q=M("".slice);F=function(e){return q(I(e),8,-1)};var C=Object,D=M("".split);x=k(function(){return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===F(e)?D(e,""):C(e)}:C;var N={},R={};R=function(e){return null==e};var W=TypeError;N=function(e){if(R(e))throw new W("Can't call method on "+e);return e},P=function(e){return x(N(e))};var G={},U={},z={},B={},J={},Y="object"==typeof document&&document.all,Q=(J={all:Y,IS_HTMLDDA:void 0===Y&&void 0!==Y}).all;B=J.IS_HTMLDDA?function(e){return"function"==typeof e||e===Q}:function(e){return"function"==typeof e};var V=J.all;z=J.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:B(e)||e===V}:function(e){return"object"==typeof e?null!==e:B(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=b[e],B(r)?r:void 0):b[e]&&b[e][t]};var Z={};Z=M({}.isPrototypeOf);var ee={},et={},er={},en={};en="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ei=b.process,eo=b.Deno,ea=ei&&ei.versions||eo&&eo.version,es=ea&&ea.v8;es&&(o=(i=es.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&en&&(!(i=en.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=en.match(/Chrome\/(\d+)/))&&(o=+i[1]),er=o;var ec=b.String;ee=(et=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!ec(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eu=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return B(t)&&Z(t.prototype,eu(e))};var el={},ed={},ep={},ef=String;ep=function(e){try{return ef(e)}catch(e){return"Object"}};var eh=TypeError;ed=function(e){if(B(e))return e;throw new eh(ep(e)+" is not a function")},el=function(e,t){var r=e[t];return R(r)?void 0:ed(r)};var eg={},ev=TypeError;eg=function(e,t){var r,n;if("string"===t&&B(r=e.toString)&&!z(n=E(r,e))||B(r=e.valueOf)&&!z(n=E(r,e))||"string"!==t&&B(r=e.toString)&&!z(n=E(r,e)))return n;throw new ev("Can't convert object to primitive value")};var ey={},em={};em=!1;var eb={},e_={},ew=Object.defineProperty;e_=function(e,t){try{ew(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var ek="__core-js_shared__";eb=b[ek]||e_(ek,{}),(ey=function(e,t){return eb[e]||(eb[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.3",mode:em?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE",source:"https://github.com/zloirock/core-js"});var eE={},eS={},ej=Object;eS=function(e){return ej(N(e))};var e$=M({}.hasOwnProperty);eE=Object.hasOwn||function(e,t){return e$(eS(e),t)};var eO={},eL=0,eP=Math.random(),ex=M(1..toString);eO=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++eL+eP,36)};var eM=b.Symbol,eT=ey("wks"),eH=ee?eM.for||eM:eM&&eM.withoutSetter||eO,eA=TypeError,eF=(eE(eT,e="toPrimitive")||(eT[e]=et&&eE(eM,e)?eM[e]:eH("Symbol."+e)),eT[e]);U=function(e,t){if(!z(e)||K(e))return e;var r,n=el(e,eF);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!z(r)||K(r))return r;throw new eA("Can't convert object to primitive value")}return void 0===t&&(t="number"),eg(e,t)},G=function(e){var t=U(e,"string");return K(t)?t:t+""};var eI={},eq={},eC=b.document,eD=z(eC)&&z(eC.createElement);eq=function(e){return eD?eC.createElement(e):{}},eI=!w&&!k(function(){return 7!==Object.defineProperty(eq("div"),"a",{get:function(){return 7}}).a});var eN=Object.getOwnPropertyDescriptor;r=w?eN:function(e,t){if(e=P(e),t=G(t),eI)try{return eN(e,t)}catch(e){}if(eE(e,t))return L(!E(n,e,t),e[t])};var eR={},eW={};eW=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eG={},eU=String,ez=TypeError;eG=function(e){if(z(e))return e;throw new ez(eU(e)+" is not an object")};var eB=TypeError,eJ=Object.defineProperty,eY=Object.getOwnPropertyDescriptor,eQ="enumerable",eV="configurable",eK="writable";a=w?eW?function(e,t,r){if(eG(e),t=G(t),eG(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eY(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eV in r?r[eV]:n[eV],enumerable:eQ in r?r[eQ]:n[eQ],writable:!1})}return eJ(e,t,r)}:eJ:function(e,t,r){if(eG(e),t=G(t),eG(r),eI)try{return eJ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eB("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eR=w?function(e,t,r){return a(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0=Function.prototype,e1=w&&Object.getOwnPropertyDescriptor,e2=eE(e0,"name")&&(!w||w&&e1(e0,"name").configurable),e3={},e4=M(Function.toString);B(eb.inspectSource)||(eb.inspectSource=function(e){return e4(e)}),e3=eb.inspectSource;var e5={},e7={},e8=b.WeakMap;e7=B(e8)&&/native code/.test(String(e8));var e9={},e6=ey("keys");e9=function(e){return e6[e]||(e6[e]=eO(e))};var te={};te={};var tt="Object already initialized",tr=b.TypeError,tn=b.WeakMap;if(e7||eb.state){var ti=eb.state||(eb.state=new tn);ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,s=function(e,t){if(ti.has(e))throw new tr(tt);return t.facade=e,ti.set(e,t),t},c=function(e){return ti.get(e)||{}},u=function(e){return ti.has(e)}}else{var to=e9("state");te[to]=!0,s=function(e,t){if(eE(e,to))throw new tr(tt);return t.facade=e,eR(e,to,t),t},c=function(e){return eE(e,to)?e[to]:{}},u=function(e){return eE(e,to)}}var ta=(e5={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!z(t)||(r=c(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return r}}}).enforce,ts=e5.get,tc=String,tu=Object.defineProperty,tl=M("".slice),td=M("".replace),tp=M([].join),tf=w&&!k(function(){return 8!==tu(function(){},"length",{value:8}).length}),th=String(String).split("String"),tg=eZ=function(e,t,r){"Symbol("===tl(tc(t),0,7)&&(t="["+td(tc(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e2&&e.name!==t)&&(w?tu(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&eE(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?w&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ta(e);return eE(n,"source")||(n.source=tp(th,"string"==typeof t?t:"")),e};Function.prototype.toString=tg(function(){return B(this)&&ts(this).source||e3(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(B(r)&&eZ(r,o,n),n.global)i?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tv={},ty={},tm={},tb={},t_={},tw={},tk=Math.ceil,tE=Math.floor;tw=Math.trunc||function(e){var t=+e;return(t>0?tE:tk)(t)},t_=function(e){var t=+e;return t!=t||0===t?0:tw(t)};var tS=Math.max,tj=Math.min;tb=function(e,t){var r=t_(e);return r<0?tS(r+t,0):tj(r,t)};var t$={},tO={},tL=Math.min;tO=function(e){return e>0?tL(t_(e),9007199254740991):0},t$=function(e){return tO(e.length)};var tP=function(e){return function(t,r,n){var i,o=P(t),a=t$(o),s=tb(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tx={includes:tP(!0),indexOf:tP(!1)}.indexOf,tM=M([].push);tm=function(e,t){var r,n=P(e),i=0,o=[];for(r in n)!eE(te,r)&&eE(n,r)&&tM(o,r);for(;t.length>i;)eE(n,r=t[i++])&&(~tx(o,r)||tM(o,r));return o};var tT=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tm(e,tT)},d=Object.getOwnPropertySymbols;var tH=M([].concat);ty=X("Reflect","ownKeys")||function(e){var t=l(eG(e));return d?tH(t,d(e)):t},tv=function(e,t,n){for(var i=ty(t),o=0;o<i.length;o++){var s=i[o];eE(e,s)||n&&eE(n,s)||a(e,s,r(t,s))}};var tA={},tF=/#|\.prototype\./,tI=function(e,t){var r=tC[tq(e)];return r===tN||r!==tD&&(B(t)?k(t):!!t)},tq=tI.normalize=function(e){return String(e).replace(tF,".").toLowerCase()},tC=tI.data={},tD=tI.NATIVE="N",tN=tI.POLYFILL="P";tA=tI,m=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[c]||e_(c,{}):(b[c]||{}).prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tA(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tv(a,o)}(e.sham||o&&o.sham)&&eR(a,"sham",!0),eX(n,i,a,e)}};var tR={},tW={},tG=Function.prototype,tU=tG.apply,tz=tG.call;tW="object"==typeof Reflect&&Reflect.apply||(S?tz.bind(tU):function(){return tz.apply(tU,arguments)});var tB={},tJ={},tY=(tJ=function(e){if("Function"===F(e))return M(e)})(tJ.bind);tB=function(e,t){return ed(e),void 0===t?e:S?tY(e,t):function(){return e.apply(t,arguments)}};var tQ={};tQ=X("document","documentElement");var tV={};tV=M([].slice);var tK={},tX=TypeError;tK=function(e,t){if(e<t)throw new tX("Not enough arguments");return e};var tZ={};tZ=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t0={};t0="process"===F(b.process);var t1=b.setImmediate,t2=b.clearImmediate,t3=b.process,t4=b.Dispatch,t5=b.Function,t7=b.MessageChannel,t8=b.String,t9=0,t6={},re="onreadystatechange";k(function(){p=b.location});var rt=function(e){if(eE(t6,e)){var t=t6[e];delete t6[e],t()}},rr=function(e){return function(){rt(e)}},rn=function(e){rt(e.data)},ri=function(e){b.postMessage(t8(e),p.protocol+"//"+p.host)};t1&&t2||(t1=function(e){tK(arguments.length,1);var t=B(e)?e:t5(e),r=tV(arguments,1);return t6[++t9]=function(){tW(t,void 0,r)},f(t9),t9},t2=function(e){delete t6[e]},t0?f=function(e){t3.nextTick(rr(e))}:t4&&t4.now?f=function(e){t4.now(rr(e))}:t7&&!tZ?(g=(h=new t7).port2,h.port1.onmessage=rn,f=tB(g.postMessage,g)):b.addEventListener&&B(b.postMessage)&&!b.importScripts&&p&&"file:"!==p.protocol&&!k(ri)?(f=ri,b.addEventListener("message",rn,!1)):f=re in eq("script")?function(e){tQ.appendChild(eq("script"))[re]=function(){tQ.removeChild(this),rt(e)}}:function(e){setTimeout(rr(e),0)});var ro=(tR={set:t1,clear:t2}).clear;m({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==ro},{clearImmediate:ro});var ra=tR.set,rs={},rc={};rc="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ru=b.Function,rl=/MSIE .\./.test(en)||rc&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rs=function(e,t){var r=t?2:1;return rl?function(n,i){var o=tK(arguments.length,1)>r,a=B(n)?n:ru(n),s=o?tV(arguments,r):[],c=o?function(){tW(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rd=b.setImmediate?rs(ra,!1):ra;m({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==rd},{setImmediate:rd});const rp="https://forkify-api.herokuapp.com/api/v2/recipes/",rf="b9cbca63-5052-4b1b-8ff2-bf533387c28a",rh=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rg={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rv=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},ry=async function(e){try{let t=await rh(`${rp}${e}?key=${rf}`);rg.recipe=rv(t),rg.bookmarks.some(t=>t.id===e)?rg.recipe.bookmarked=!0:rg.recipe.bookmarked=!1,console.log(rg.recipe)}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rm=async function(e){try{rg.search.query=e;let t=await rh(`${rp}?search=${e}&key=${rf}`);console.log(t),rg.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rg.search.page=1}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rb=function(e=rg.search.page){rg.search.page=e;let t=(e-1)*rg.search.resultsPerPage,r=e*rg.search.resultsPerPage;return rg.search.results.slice(t,r)},r_=function(e){rg.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rg.recipe.servings}),rg.recipe.servings=e},rw=function(){localStorage.setItem("bookmarks",JSON.stringify(rg.bookmarks))},rk=function(e){rg.bookmarks.push(e),e.id===rg.recipe.id&&(rg.recipe.bookmarked=!0),rw()},rE=function(e){let t=rg.bookmarks.findIndex(t=>t.id===e);rg.bookmarks.splice(t,1),e===rg.recipe.id&&(rg.recipe.bookmarked=!1),rw()};!function(){let e=localStorage.getItem("bookmarks");e&&(rg.bookmarks=JSON.parse(e))}();const rS=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rh(`${rp}?key=${rf}`,r);rg.recipe=rv(n),rk(rg.recipe)}catch(e){throw e}};var rj={};rj=new URL("../icons.c14567a0.svg",import.meta.url).toString();class r${_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="spinner">
        <svg>
          <use href="${y(rj)}#icon-loader"></use>
        </svg>
      </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
        <div class="error">
          <div>
            <svg>
              <use href="${y(rj)}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
        <div class="message">
          <div>
            <svg>
              <use href="${y(rj)}#icon-smile"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class rO extends r${_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${y(rj)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${y(rj)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
            <svg>
              <use href="${y(rj)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
            <svg>
              <use href="${y(rj)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
        <svg>
          <use href="${y(rj)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${y(rj)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}

        

    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${y(rj)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `}_generateMarkupIngredient(e){return`
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${y(rj)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${e.quantity?e.quantity:""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
          </div>
        </li>
      `}}var rL=new rO;class rP{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rx=new rP,rM=new class extends r${_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
    <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
        <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
        </figure>
         <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${y(rj)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
    </li>
`}};class rT extends r${_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>rM.render(e,!1)).join("")}}var rH=new rT;class rA extends r${_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(console.log(r),!r)return;let n=+r.dataset.goto;console.log(n),e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(console.log(t),1===e&&t>1)?`
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${y(rj)}#icon-arrow-right"></use>
          </svg>
      </button>
      `:e===t&&t>1?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${y(rj)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
      </button>
    `:e<t?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${y(rj)}#icon-arrow-left"></use>
        </svg>
        <span>Page ${e-1}</span>
      </button>
    
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${y(rj)}#icon-arrow-right"></use>
          </svg>
      </button>
      `:""}}var rF=new rA;class rI extends r${_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rM.render(e,!1)).join("")}}var rq=new rI;class rC extends r${_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rD=new rC,rN=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return i(c,"_invoke",{value:(a=new O(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function L(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rN}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rN:Function("r","regeneratorRuntime = r")(rN)}const rR=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rL.renderSpinner(),rH.update(rb()),rq.update(rg.bookmarks),await ry(e),rL.render(rg.recipe)}catch(e){rL.renderError(),console.error(e)}},rW=async function(){try{rH.renderSpinner();let e=rx.getQuery();if(!e)return;await rm(e),rH.render(rb()),rF.render(rg.search)}catch(e){console.log(e)}},rG=async function(e){try{rD.renderSpinner(),await rS(e),console.log(rg.recipe),rL.render(rg.recipe),rD.renderMessage(),rq.render(rg.bookmarks),window.history.pushState(null,"","#{model.state.recipe.id}"),setTimeout(function(){rD.toggleWindow()},2500)}catch(e){console.error("\uD83D\uDCA5",e),rD.renderError(e.message)}};rq.addHandlerRender(function(){rq.render(rg.bookmarks)}),rL.addHandlerRender(rR),rL.addHandlerUpdateServings(function(e){r_(e),rL.update(rg.recipe)}),rL.addHandlerAddBookmark(function(){rg.recipe.bookmarked?rE(rg.recipe.id):rk(rg.recipe),rL.update(rg.recipe),rq.render(rg.bookmarks)}),rx.addHandlerSearch(rW),rF.addHandlerClick(function(e){rH.render(rb(e)),rF.render(rg.search)}),rD.addHandlerUpload(rG);
//# sourceMappingURL=index.41cb41b2.js.map
