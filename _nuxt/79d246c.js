(window.webpackJsonp=window.webpackJsonp||[]).push([[25,8,10,11,12,14],{383:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,required:!0}}},o=r(21),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("h1",{staticClass:"-ml-1.5 mb-4 p-1 text-4xl sm:text-5xl lg:text-6xl font-bold"},[e._v("\n  "+e._s(e.$props.title)+"\n")])}),[],!1,null,null,null);t.default=component.exports},384:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"limit":"You\'ve exceeded the request count for the Github API, please retry {0)"},"de":{"limit":"Sie haben die Anzahl der Anfragen für die Github-API überschritten, bitte versuchen Sie es erneut {0}"}}'),delete e.options._Ctor}},386:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"released":"released {date}"},"de":{"released":"{date} veröffentlicht"}}'),delete e.options._Ctor}},387:function(e,t,r){"use strict";var n=r(384),o=r.n(n);t.default=o.a},388:function(e,t,r){r(15),r(10),r(17),r(5),r(19),r(14),r(20);var n=r(45),o=r(46),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(18),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),f=t.children,d=void 0===f?[]:f,h=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,_=data.attrs,y=void 0===_?{}:_,O=o(data,l);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[h,v],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},y)},O),d.concat([r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),r("path",{attrs:{d:"M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z",fill:"currentColor"}})]))}}},389:function(e,t,r){"use strict";r.r(t);var n={props:{error:{type:Object,default:function(){}}}},o=r(21),l=r(387),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$props.error?r("div",{staticClass:"bg-linked-600 text-white p-12 mt-12"},[r("h1",{staticClass:"text-6xl font-black mb-4 block"},[e._v("Oops.")]),e._v(" "),r("i18n",{staticClass:"mb-8 text-2xl",attrs:{path:"limit",tag:"p"}},[e._v("\n    "+e._s(e.$props.error.resettingIn)+"\n  ")])],1):e._e()}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);t.default=component.exports},390:function(e,t,r){r(15),r(10),r(17),r(5),r(19),r(14),r(20);var n=r(45),o=r(46),l=["class","staticClass","style","staticStyle","attrs"];function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}r(18),e.exports={functional:!0,render:function(e,t){var r=t._c,data=(t._v,t.data),f=t.children,d=void 0===f?[]:f,h=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,_=data.attrs,y=void 0===_?{}:_,O=o(data,l);return r("svg",function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({class:[h,v],style:[style,m],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},y)},O),d.concat([r("path",{attrs:{fill:"none",d:"M0 0h24v24H0z"}}),r("path",{attrs:{d:"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z",fill:"currentColor"}})]))}}},391:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d}));var n=r(7),o=(r(49),r(392),r(5),r(385)),l="latest",c=function(e){var t=Number(e.headers.get("x-ratelimit-used"));if(!e.ok&&60===t){var r=o.DateTime.fromSeconds(Number(e.headers.get("x-ratelimit-reset"))).toRelative({locale:"en-US"});return{error:!0,resettingIn:r,message:"You've exceeded the request count for the Github API, please retry ".concat(r,".")}}return{error:!1}},f=function(e){return e===l?l:"tags/v".concat(e)},d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,n,o,d,h,v=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.length>0&&void 0!==v[0]?v[0]:l,r=null,n="https://github.com/lostdesign/linked/releases/".concat(f(t)),o="https://api.github.com/repos/lostdesign/linked/releases/".concat(f(t)),e.prev=4,e.next=7,fetch(o);case 7:if(d=e.sent,!(h=c(d)).error){e.next=12;break}throw r=h,new Error(h.message);case 12:return e.next=14,d.json();case 14:return e.t0=e.sent,e.t1=r,e.t2=n,e.abrupt("return",{release:e.t0,error:e.t1,fallbackUrl:e.t2});case 20:return e.prev=20,e.t3=e.catch(4),e.abrupt("return",{release:null,error:r,fallbackUrl:n});case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(){return e.apply(this,arguments)}}()},392:function(e,t,r){"use strict";var n=r(22),o=r(2),l=r(4),c=r(95),f=r(36),d=r(28),h=r(168),v=r(63),m=r(129),_=r(244),y=r(6),O=r(82).f,w=r(57).f,x=r(30).f,j=r(393),S=r(245).trim,C="Number",k=o.Number,I=k.prototype,E=o.TypeError,N=l("".slice),P=l("".charCodeAt),B=function(e){var t=_(e,"number");return"bigint"==typeof t?t:$(t)},$=function(e){var t,r,n,o,l,c,f,code,d=_(e,"number");if(m(d))throw E("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=S(d),43===(t=P(d,0))||45===t){if(88===(r=P(d,2))||120===r)return NaN}else if(48===t){switch(P(d,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(c=(l=N(d,2)).length,f=0;f<c;f++)if((code=P(l,f))<48||code>o)return NaN;return parseInt(l,n)}return+d};if(c(C,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var A,D=function(e){var t=arguments.length<1?0:k(B(e)),r=this;return v(I,r)&&y((function(){j(r)}))?h(Object(t),r,D):t},M=n?O(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;M.length>F;F++)d(k,A=M[F])&&!d(D,A)&&x(D,A,w(k,A));D.prototype=I,I.constructor=D,f(o,C,D)}},394:function(e,t,r){"use strict";r.r(t);var n=r(169),o=r.n(n),l=r(388),c=r.n(l),f={props:{page:{type:String,default:"https://github.com/lostdesign/linked"}},components:{IconGithub:o.a,IconExternal:c.a}},d=r(21),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{ref:"norel noopener",staticClass:"flex items-center space-x-2 link-hover",attrs:{href:e.$props.page,target:"_blank"}},[r("icon-github",{staticClass:"w-5 h-5"}),e._v(" "),r("span",[e._v("Check on Github")]),e._v(" "),r("icon-external",{staticClass:"w-4 h-4"})],1)}),[],!1,null,null,null);t.default=component.exports},401:function(e,t,r){"use strict";var n=r(3),o=r(2),l=r(4),c=r(68),f=r(393),d=r(246),h=r(6),v=o.RangeError,m=o.String,_=Math.floor,y=l(d),O=l("".slice),w=l(1..toFixed),x=function(e,t,r){return 0===t?r:t%2==1?x(e,t-1,r*e):x(e*e,t/2,r)},j=function(data,e,t){for(var r=-1,n=t;++r<6;)n+=e*data[r],data[r]=n%1e7,n=_(n/1e7)},S=function(data,e){for(var t=6,r=0;--t>=0;)r+=data[t],data[t]=_(r/e),r=r%e*1e7},C=function(data){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var t=m(data[e]);s=""===s?t:s+y("0",7-t.length)+t}return s};n({target:"Number",proto:!0,forced:h((function(){return"0.000"!==w(8e-5,3)||"1"!==w(.9,0)||"1.25"!==w(1.255,2)||"1000000000000000128"!==w(0xde0b6b3a7640080,0)}))||!h((function(){w({})}))},{toFixed:function(e){var t,r,n,o,l=f(this),d=c(e),data=[0,0,0,0,0,0],h="",_="0";if(d<0||d>20)throw v("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return m(l);if(l<0&&(h="-",l=-l),l>1e-21)if(r=(t=function(e){for(var t=0,r=e;r>=4096;)t+=12,r/=4096;for(;r>=2;)t+=1,r/=2;return t}(l*x(2,69,1))-69)<0?l*x(2,-t,1):l/x(2,t,1),r*=4503599627370496,(t=52-t)>0){for(j(data,0,r),n=d;n>=7;)j(data,1e7,0),n-=7;for(j(data,x(10,n,1),0),n=t-1;n>=23;)S(data,1<<23),n-=23;S(data,1<<n),j(data,1,1),S(data,2),_=C(data)}else j(data,0,r),j(data,1<<-t,0),_=C(data)+y("0",d);return _=d>0?h+((o=_.length)<=d?"0."+y("0",d-o)+_:O(_,0,o-d)+"."+O(_,o-d)):h+_}})},402:function(e,t,r){"use strict";var n=r(386),o=r.n(n);t.default=o.a},403:function(e,t,r){"use strict";r.r(t);r(401),r(27),r(69),r(47),r(50),r(5),r(17),r(25);var n=r(385),o=r(390),l={props:{release:{type:Object,required:!0}},methods:{getHumanFileSize:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=t?1e3:1024;if(Math.abs(e)<n)return e+" B";var o=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],u=-1,l=Math.pow(10,r);do{e/=n,++u}while(Math.round(Math.abs(e)*l)/l>=n&&u<o.length-1);return e.toFixed(r)+" "+o[u]},getOperatingSystemName:function(e){var t=e.split(".");return t[0].includes("Setup")?"Windows Installer":{dmg:"MacOS",exe:"Windows Portable",deb:"Debian",AppImage:"Linux",rpm:"Fedora",pacman:"Arch"}[t[t.length-1]]},sumArray:function(e){return 0===e.length?0:e.reduce((function(e,t){return e+t}))},daysSince:function(e){return n.DateTime.fromISO(e).toRelative({locale:this.$i18n.locale})},localeDate:function(e){return n.DateTime.fromISO(e).setLocale(this.$i18n.locale).toLocaleString({day:"numeric",month:"long",year:"numeric"})},getFilteredAssets:function(e){return e.filter((function(e){return!e.name.includes(".yml")})).filter((function(e){return!e.name.includes(".blockmap")})).filter((function(e){return!e.name.includes(".zip")}))}},components:{DownloadIcon:r.n(o).a}},c=l,f=r(21),d=r(402),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"block space-y-4 md:space-y-0 md:flex justify-between items-center mb-12"},[r("p",[r("span",{staticClass:"text-md rounded bg-linked text-white py-1 px-2 mr-4"},[e._v("Version "+e._s(e.$props.release.name))]),e._v(" "),r("i18n",{staticClass:"text-gray-600",attrs:{path:"released",tag:"span"},scopedSlots:e._u([{key:"date",fn:function(){return[e._v("\n          "+e._s(e.daysSince(e.$props.release.published_at))+"\n        ")]},proxy:!0}])})],1),e._v(" "),r("goto-github",{attrs:{page:e.$props.release.html_url}})],1),e._v(" "),r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6"},[e._l(e.getFilteredAssets(e.$props.release.assets),(function(t){return[r("a",{key:t.id,staticClass:"bg-gray-50 border-gray-200 border-2 p-4 md:p-8 rounded-lg flex items-center space-x-4 group hover:border-linked hover:text-bright-pink",attrs:{href:t.browser_download_url}},[r("download-icon",{staticClass:"w-5 h-5"}),e._v(" "),r("div",[r("h2",{staticClass:"text-xl"},[e._v(e._s(e.getOperatingSystemName(t.name)))]),e._v(" "),r("p",{staticClass:"text-xs"},[e._v(e._s(e.getHumanFileSize(t.size))+" • "+e._s(t.name))])])],1)]}))],2)])}),[],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(component);t.default=component.exports;installComponents(component,{GotoGithub:r(394).default})},404:function(e,t,r){"use strict";r.r(t);var n={props:{release:{type:Object,required:!0},error:{type:Object,default:function(){}}}},o=r(21),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("content-wrapper",{staticClass:"pt-16 mb-24"},[r("page-heading",{attrs:{title:"Download"}}),e._v(" "),e.$props.release?r("download-cards",{attrs:{release:e.$props.release}}):e._e(),e._v(" "),r("github-error",{attrs:{error:e.$props.error}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PageHeading:r(383).default,DownloadCards:r(403).default,GithubError:r(389).default,ContentWrapper:r(243).default})},467:function(e,t,r){"use strict";r.r(t);var n=r(7),o=(r(49),r(391)),l={asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l,c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,t.next=3,Object(o.b)(r.params.version);case 3:return n=t.sent,l=n.release,c=n.error,f=n.fallbackUrl,t.abrupt("return",{release:l,error:c,fallbackUrl:f});case 8:case"end":return t.stop()}}),t)})))()}},c=r(21),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("download-page",{attrs:{release:e.release,error:e.error}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DownloadPage:r(404).default})}}]);