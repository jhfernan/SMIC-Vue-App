(function(e){function t(t){for(var r,n,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},s={app:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0fc3b4d9":"96267d6d","chunk-10ce4a78":"c78bf126","chunk-15a4b224":"9bc78c84","chunk-2d22d746":"6e7d8737","chunk-7d796dd6":"a90970a3","chunk-4fa31366":"4a1e69b5","chunk-c050b46c":"a1623803","chunk-d85a7624":"ec42eecd","chunk-9fe0058c":"d55e0ec4"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-0fc3b4d9":1,"chunk-10ce4a78":1,"chunk-15a4b224":1,"chunk-7d796dd6":1,"chunk-4fa31366":1,"chunk-c050b46c":1,"chunk-d85a7624":1,"chunk-9fe0058c":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-0fc3b4d9":"9e540e57","chunk-10ce4a78":"7d887a01","chunk-15a4b224":"7d887a01","chunk-2d22d746":"31d6cfe0","chunk-7d796dd6":"c9f5a90d","chunk-4fa31366":"8689fec2","chunk-c050b46c":"9718664d","chunk-d85a7624":"df9d9a7c","chunk-9fe0058c":"724ff27c"}[e]+".css",s=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[e],m.parentNode.removeChild(m),a(o)},m.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("navigation"),a("v-main",[a("router-view")],1)],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.$store.getters.isLoggedIn?a("backbar"):a("navbar"),a("v-snackbar",{attrs:{color:e.$store.state.snack.color,timeout:e.$store.state.snack.timeout,top:""},scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[a("v-btn",e._b({attrs:{text:""},nativeOn:{click:function(t){return e.$store.dispatch("snack/closeSnack")}}},"v-btn",r,!1),[e._v(" Close ")])]}}]),model:{value:e.$store.state.snack.available,callback:function(t){e.$set(e.$store.state.snack,"available",t)},expression:"$store.state.snack.available"}},[e._v(" "+e._s(e.$store.state.snack.text)+" ")])],1)},i=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-toolbar-title",{staticClass:"ml-2"},[e._v("WEB APP")]),a("v-spacer"),e._l(e.links,(function(t,r){return[a("v-btn",{key:r,staticClass:"mr-2",attrs:{text:"",to:t.to}},[e._v(" "+e._s(t.name)+" ")])]}))],2)},l=[],u={data(){return{links:[{name:"Home",to:"/"},{name:"About",to:"/about"},{name:"Login",to:"/login"}]}}},d=u,m=a("2877"),h=a("6544"),p=a.n(h),f=a("40dc"),v=a("8336"),g=a("2fa4"),b=a("2a7f"),k=Object(m["a"])(d,c,l,!1,null,null,null),_=k.exports;p()(k,{VAppBar:f["a"],VBtn:v["a"],VSpacer:g["a"],VToolbarTitle:b["a"]});var y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-navigation-drawer",{attrs:{app:"",clipped:"",dark:""},scopedSlots:e._u([{key:"append",fn:function(){return[a("div",{staticClass:"pa-2"},[a("v-btn",{attrs:{block:""},on:{click:e.logout}},[e._v(" Logout ")])],1)]},proxy:!0}]),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",[a("v-list-item",{staticClass:"px-5"},[a("v-list-item-avatar",{attrs:{size:"75"}},[a("v-img",{attrs:{src:e.gravatar}})],1),a("v-spacer")],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6"},[e._v(" "+e._s(e._f("fullName")(e.$store.state.user))+" ")]),a("v-list-item-subtitle",[e._v(e._s(e.$store.state.user.email))])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:""}},[e._l(e.links,(function(t,r){return[t.title&&e.checkAuth(t)?a("v-subheader",{key:"header"+r},[e._v(e._s(t.name))]):e._e(),!t.title&&e.checkAuth(t)?a("v-list-item",{key:"item"+r,attrs:{link:"",to:t.to}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-title",[e._v(e._s(t.name))])],1):e._e()]}))],2)],1),a("v-app-bar",{attrs:{app:"","clipped-left":"",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",{staticClass:"ml-2"},[e._v(e._s(e.$route.name))]),a("v-spacer")],1)],1)},w=[],A=a("9044"),x={async asyncData({app:e,error:t}){try{let e=[],t=await fireDb.collection("users").get();return t.forEach(t=>{e.push({id:t.id,...t.data()})}),{users:e}}catch(a){t({statusCode:"404",message:`${a.code}: ${a.message}`})}},computed:{gravatar(){return A["a"].gravatar(this.$store.state.user.email)}},data(){return{drawer:!0,links:[{name:"Home",title:!0},{icon:"fas fa-sliders-h",name:"Dashboard",to:"/home"},{icon:"far fa-user",name:"My Profile",to:"/my_profile"},{icon:"fas fa-cog",name:"Settings",to:"/settings"},{name:"Admin",title:!0,auth:"admin"},{icon:"fas fa-users-cog",name:"Manage Users",to:"/manage_users",auth:"admin"},{name:"Questions",title:!0},{icon:"fas fa-question-circle",name:"Question Board",to:"/questions"}]}},methods:{checkAuth(e){return!(!e.auth||!this.$store.state.user[e.auth])||!e.auth},async logout(){try{await this.$store.dispatch("logout")}catch(e){}}}},C=x,V=a("5bc1"),$=a("ce7e"),S=a("132d"),E=a("adda"),O=a("8860"),T=a("da13"),P=a("8270"),I=a("5d23"),L=a("34c3"),q=a("f774"),U=a("e0c7"),M=Object(m["a"])(C,y,w,!1,null,null,null),j=M.exports;p()(M,{VAppBar:f["a"],VAppBarNavIcon:V["a"],VBtn:v["a"],VDivider:$["a"],VIcon:S["a"],VImg:E["a"],VList:O["a"],VListItem:T["a"],VListItemAvatar:P["a"],VListItemContent:I["a"],VListItemIcon:L["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VNavigationDrawer:q["a"],VSpacer:g["a"],VSubheader:U["a"],VToolbarTitle:b["a"]});var B={components:{Backbar:j,Navbar:_}},N=B,D=a("2db4"),z=Object(m["a"])(N,o,i,!1,null,null,null),H=z.exports;p()(z,{VBtn:v["a"],VSnackbar:D["a"]});var F={name:"App",components:{Navigation:H},data:()=>({})},R=F,J=(a("034f"),a("7496")),Q=a("f6c4"),K=Object(m["a"])(R,n,s,!1,null,null,null),W=K.exports;p()(K,{VApp:J["a"],VMain:Q["a"]});var Y=a("2f62"),G=a("8c4f"),X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{staticClass:"elevation-12 py-5",attrs:{"max-width":"500","min-width":"400"}},[a("v-card-actions",[a("v-spacer"),a("v-icon",{attrs:{color:"red","x-large":""}},[e._v("mdi-alert-octagon")]),a("v-spacer")],1),a("v-card-title",{staticClass:"justify-center py-0"},[e._v("404 Error")]),a("v-card-text",{staticClass:"text-center"},[e._v("Page not found")])],1)],1)],1)},Z=[],ee={data(){return{}},methods:{}},te=ee,ae=a("b0af"),re=a("99d9"),ne=a("a523"),se=a("a722"),oe=Object(m["a"])(te,X,Z,!1,null,null,null),ie=oe.exports;p()(oe,{VCard:ae["a"],VCardActions:re["a"],VCardText:re["c"],VCardTitle:re["d"],VContainer:ne["a"],VIcon:S["a"],VLayout:se["a"],VSpacer:g["a"]});var ce=[{path:"/",name:"Index",component:()=>a.e("chunk-10ce4a78").then(a.bind(null,"bb51"))},{path:"/about",name:"About",component:()=>a.e("chunk-2d22d746").then(a.bind(null,"f820"))},{path:"/login",name:"Login",component:()=>Promise.all([a.e("chunk-7d796dd6"),a.e("chunk-d85a7624")]).then(a.bind(null,"a55b")),meta:{requiresLoggedOut:!0}}],le=[{path:"/home",name:"Dashboard",component:()=>a.e("chunk-15a4b224").then(a.bind(null,"6d04")),meta:{requiresAuth:!0}},{path:"/my_profile",name:"Profile",component:()=>a.e("chunk-0fc3b4d9").then(a.bind(null,"7087")),meta:{requiresAuth:!0}}],ue=[{path:"/manage_users",name:"Manage Users",component:()=>a.e("chunk-9fe0058c").then(a.bind(null,"dc02")),meta:{requiresAdmin:!0}},{path:"/manage_users/create_user",name:"Create User",component:()=>Promise.all([a.e("chunk-7d796dd6"),a.e("chunk-c050b46c")]).then(a.bind(null,"9d9b")),meta:{requiresAdmin:!0}},{path:"/account_verification/:id",name:"Verify User",component:()=>Promise.all([a.e("chunk-7d796dd6"),a.e("chunk-4fa31366")]).then(a.bind(null,"0579")),meta:{requiresLoggedOut:!0}}];r["a"].use(G["a"]);let de=[...ce,...le,...ue];de.push({path:"*",name:"404",component:ie});const me=new G["a"]({mode:"history",base:"/",routes:de});me.beforeEach((e,t,a)=>{e.matched.some(e=>e.meta.requiresAdmin)&&!pe.getters.currentUser.admin?a("/home"):e.matched.some(e=>e.meta.requiresAuth)&&!pe.getters.isLoggedIn?a("/login"):e.matched.some(e=>e.meta.requiresLoggedOut)&&pe.getters.isLoggedIn?a("/home"):a()});var he=me;r["a"].use(Y["a"]);var pe=new Y["a"].Store({state:{user:{},token:null,snack:{available:!1,color:"",timeout:3e3,text:""}},getters:{isLoggedIn(e){return!!e.token},currentUser(e){return e.user?e.user:{}}},mutations:{setAuth(e,t){const{_id:a,name:r,last:n,nameAlt:s,email:o,emailVerified:i,phone:c,about:l,admin:u,developer:d,manager:m,staff:h,teacher:p,teachingAssistant:f,student:v,title:g,gender:b}=t.user;e.user={id:a,name:r,last:n,nameAlt:s||null,email:o,emailVerified:i,phone:c||null,about:l||null,admin:u,developer:d,manager:m,staff:h,teacher:p,teachingAssistant:f,student:v,gender:b,title:g||null},e.token=t.token},logout(e){e.user={},e.token=null},set_true(e,t){e.snack.text=t.text,e.snack.color=t.color,e.snack.available=!0},set_false(e){e.snack.available=!1}},actions:{async init({commit:e,dispatch:t}){let a=localStorage.getItem("token");if(a&&"undefined"!==a)try{axios.defaults.headers.common["Authorization"]=a;let{data:t}=await axios.get("/api/authenticate"),r=t.user;e("setAuth",{user:r,token:a})}catch(r){console.error("FROM STORE INIT METHOD: Error with token",r),t("resetStorage")}else t("resetStorage")},async resetStorage(){localStorage.removeItem("token"),delete axios.defaults.headers.common["Authorization"]},async login({commit:e},t){try{let a=await axios.post("/api/authenticate",t);const r=a.data.token;localStorage.setItem("token",r),axios.defaults.headers.common["Authorization"]=r;let n=await axios.get("/api/authenticate");const s=n.data.user;await e("setAuth",{user:s,token:r}),he.push("/home")}catch(a){throw a}},async logout({commit:e}){try{localStorage.removeItem("token"),delete axios.defaults.headers.common["Authorization"],await e("logout"),he.push("/login")}catch(t){throw t}},showSnack({commit:e,dispatch:t},a){let r={};a.err&&a.err.response?r.text=`${a.err.response.status||"Error"}: ${a.err.response.data}`:r.text=a.message?a.message:"Succesfully completed",r.color=a.color?a.color:"success",e("set_true",r),t("timeOut")},closeSnack({commit:e}){e("set_false")},timeOut({dispatch:e}){setTimeout(()=>{e("closeSnack")},3e3)}}}),fe=a("f309");r["a"].use(fe["a"]);var ve=new fe["a"]({});r["a"].filter("capitalize",(function(e){return e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""})),r["a"].filter("fullName",(function(e){return e&&e.name?`${e.name.charAt(0).toUpperCase()+e.name.slice(1)} ${e.last.charAt(0).toUpperCase()+e.last.slice(1)}`:""})),r["a"].filter("fullNameFormal",(function(e){return e?e.teacher?"male"==e.gender?"Mr. "+(e.last.charAt(0).toUpperCase()+e.last.slice(1)):`${e.married?"Mrs":"Ms"}. ${e.last.charAt(0).toUpperCase()+e.last.slice(1)}`:`${e.last.charAt(0).toUpperCase()+e.last.slice(1)}, ${e.name.charAt(0).toUpperCase()+e.name.slice(1)}`:""})),r["a"].filter("mainPermission",(function(e){return e?e.admin?"Admin":e.manager?"Manager":e.teacher?"Teacher":e.staff?"Staff":e.teachingAssistant?"TA":"Student":""})),r["a"].config.productionTip=!1,pe.dispatch("init").then(()=>{new r["a"]({router:he,store:pe,vuetify:ve,render:function(e){return e(W)}}).$mount("#app")})},"85ec":function(e,t,a){},9044:function(e,t,a){"use strict";var r=a("6821"),n=a.n(r);t["a"]={breadcrumbs:e=>{let t=[{text:"Dashboard",disabled:!1,href:"/home"}];return"Profile"==e.name&&t.push({text:"Profile",disabled:!1,href:"/profile"}),"Manage Users"!=e.name&&"Create User"!=e.name||t.push({text:"Manage Users",disabled:!1,href:"/manage_users"}),"Create User"==e.name&&t.push({text:"Create User",disabled:!1,href:"/manage_users/create_user"}),t[t.length-1].disabled=!0,t},gravatar:e=>{const t=n()(e);return`https://www.gravatar.com/avatar/${t}?s=150&d=mp`},handleErr:e=>e.response&&e.response.data&&e.response.status?`Error ${e.response.status}: ${e.response.data}`:"Error: Could not process the response",rules:{confirmPassword:e=>[e=>!!e||"This is required",t=>t===e||"Password does not match"],email:[e=>!!e||"E-mail is required",e=>/.+@.+/.test(e)||"E-mail must be valid"],max:e=>[t=>t&&t.length<=e||!t||`Must be less than ${e} characters`],maxRequired:e=>[e=>!!e||"This is required",t=>t&&t.length<=e||!t||`Must be less than ${e} characters`],mustBeTrue:[e=>e||"Please take a momment to read our Policies and Terms of Use."],required:[e=>!!e||"This is required"],selectOne:[e=>e&&e.length>0||"You must select at least one choice"],password:[e=>!!e||"This is required",e=>e&&e.length<=20&&e.length>=5||"Must be between 5 and 20 characters"]}}}});
//# sourceMappingURL=app.0624850e.js.map