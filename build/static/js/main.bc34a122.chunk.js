(this.webpackJsonpmarkdownloader=this.webpackJsonpmarkdownloader||[]).push([[0],{59:function(e,t,n){},70:function(e,t){},90:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(27),s=n.n(c),o=(n(59),n(15)),i=n.n(o),l=n(23),u=n(13),d=n(5),b=n(26),f=n(40),m=n(49),h=n(50),p=n.n(h),j=n(51),x=n(41),v=n(52),g=n.n(v),O=n(34),y=n.n(O),w=n(53),k=n.n(w),S=n(54),N=n.n(S),L=n.p+"static/media/logo.1406ea11.svg",A=n(3),T=function(e){var t=e.setParentValue,n=e.onSubmit,a=e.value,c=e.isLoading,s=e.handleExample,o=Object(r.useRef)(null),i=Object(r.useState)(!0),l=Object(d.a)(i,2),u=l[0],b=l[1],f=Object(r.useState)(""),m=Object(d.a)(f,2),h=m[0],p=m[1],j=function(e){e.preventDefault(),/(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi.test(a)?(b(!0),n(a)):(b(!1),p(" url-invalid-shake"),setTimeout((function(){p("")}),500))};return Object(A.jsx)(A.Fragment,{children:c?Object(A.jsx)(y.a,{style:{height:"100vh"},className:" d-flex flex-justify-center flex-items-center",children:Object(A.jsx)(g.a,{size:"large"})}):Object(A.jsxs)(y.a,{className:"wrapper",children:[Object(A.jsx)("img",{src:L}),Object(A.jsx)(k.a,{as:"p",m:3,textAlign:"center",children:"Download & read articles as Markdown"}),Object(A.jsxs)("form",{onSubmit:function(e){return j(e)},children:[Object(A.jsx)("div",{ref:o,className:"input-container"+h,children:Object(A.jsx)("div",{className:"link",children:Object(A.jsx)(N.a,{mt:"4",className:u?"source-input":"source-input input-invalid","aria-label":"url",onChange:function(e){return function(e){b(!0),t(e)}(e.target.value)},type:"text",value:a,autoFocus:!0,name:"title",variant:"large",minWidth:"300px",placeholder:"Enter Article URL..."})})}),Object(A.jsx)(x.ButtonPrimary,{variant:"large",children:"Create Markdown"}),Object(A.jsx)(x.ButtonInvisible,{mt:3,onClick:function(){return s()},children:"See an example \u203a"})]})]})})},I=n(2),C=n(12);var E=function(e){var t=Object(r.useState)(),n=Object(d.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(),o=Object(d.a)(s,2),i=o[0],l=o[1];return Object(r.useEffect)((function(){var t,n=document.getElementById("content").querySelectorAll("h1, h2, h3"),r=[],a=function(e){var t=e.offsetHeight,n=getComputedStyle(e);return t+(parseInt(n.marginTop)+parseInt(n.marginBottom))}(e.current),s=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&l(e.target.id)}))}),{root:null,rootMargin:a+"px",threshold:0}),o=Object(u.a)(n);try{for(o.s();!(t=o.n()).done;){var i=t.value,d=i.id,b=i.innerText,f=i.tagName;console.log({heading:i});var m={title:b,hash:d,tagName:f};r.push(m),s.observe(i)}}catch(h){o.e(h)}finally{o.f()}c(r),window.addEventListener("hashchange",(function(e){e.preventDefault();var t=document.getElementById(window.location.hash.substring(1));console.log({target:t}),window.scrollTo(0,t.offsetTop-a)}),!1)}),[e]),Object(r.useEffect)((function(){var e=document.querySelector("a[href='#".concat(i,"']"));if(e){var t=e.closest("div");t.scrollTop=e.offsetTop-parseInt(getComputedStyle(t).paddingTop)}}),[i]),[a,i]},B=function(e){var t=e.article,n=e.close,a=e.title,c=(e.author,e.siteName,e.getTextbundle),s=e.setIsLoading,o=(e.siteUrl,Object(r.useRef)(null)),i=E(o),l=Object(d.a)(i,2),u=l[0],f=l[1];return Object(r.useEffect)((function(){return s()}),[s]),Object(A.jsxs)("div",{className:"container-lg clearfix new-discussion-timeline px-3 px-md-4 px-lg-5 mt-3",children:[Object(A.jsxs)("nav",{className:"file-navigation mb-3 d-flex flex-items-start",children:[Object(A.jsx)(b.c,{onClick:function(){return n()},children:"Go Home"}),Object(A.jsx)("div",{className:"flex-auto"}),Object(A.jsxs)(b.d,{onClick:function(){return c()},children:[Object(A.jsx)(C.DownloadIcon,{size:16})," Download"]})]}),Object(A.jsxs)(b.b,{className:"Box md js-code-block-container Box--responsive",children:[Object(A.jsx)("div",{className:"d-flex js-sticky js-position-sticky top-0 border-top-0 border-bottom p-2 flex-items-center flex-justify-between color-bg-primary rounded-top-2",ref:o,style:{position:"sticky",zIndex:"90",top:"0px !important"},children:Object(A.jsxs)("div",{className:"d-flex flex-items-center",children:[Object(A.jsxs)("details",{className:"details-reset details-overlay",children:[Object(A.jsx)("summary",{role:"button",className:"btn btn-octicon m-0 mr-2 p-2",children:Object(A.jsx)(C.ListUnorderedIcon,{size:16,className:"octicon octicon-list-unordered"})}),Object(A.jsx)("div",{className:"SelectMenu",children:Object(A.jsx)("div",{className:"SelectMenu-modal rounded-3 mt-1",style:{maxHeight:"340px"},children:Object(A.jsx)("div",{className:"SelectMenu-list SelectMenu-list--borderless p-2",style:{overscrollBehavior:"contain"},children:u&&u.map((function(e,t){return Object(r.createElement)("a",Object(I.a)(Object(I.a)({className:"filter-item py-1 ".concat(0===t?"text-emphasized":""),style:"H1"===e.tagName?{paddingLeft:"12px"}:"H1"===e.tagName?{paddingLeft:"24px"}:"H3"===e.tagName?{paddingLeft:"36px"}:{},role:"menuitem"},f===e.hash?{"aria-current":"page"}:{}),{},{href:"#"+e.hash,key:t}),e.title)}))})})})]}),Object(A.jsx)("h2",{className:"Box-title",children:Object(A.jsxs)("a",{className:"Link--primary",href:"#".concat(a.toLowerCase().replace(/ |\?|:/g,"_")),children:[a,".md"]})})]})}),Object(A.jsx)("div",{className:"Box-body",children:Object(A.jsxs)("article",{className:"markdown-body entry-content container-lg",id:"content",children:[Object(A.jsx)("h1",{id:a.toLowerCase().replace(/ |\?|:/g,"_"),children:a}),Object(A.jsx)("div",{dangerouslySetInnerHTML:t})]})})]})]})};function M(e){return(e||document).getElementsByClassName("meteredContent")[0]}var _=function(){var e=Object(r.useState)({__html:""}),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(d.a)(c,2),o=s[0],h=s[1],x=Object(r.useState)(""),v=Object(d.a)(x,2),g=v[0],O=v[1],y=Object(r.useState)(""),w=Object(d.a)(y,2),k=w[0],S=w[1],N=Object(r.useState)(""),L=Object(d.a)(N,2),I=L[0],C=L[1],E=Object(r.useState)(""),_=Object(d.a)(E,2),F=_[0],R=_[1],P=Object(r.useState)(!1),U=Object(d.a)(P,2),H=U[0],q=U[1],z={serializer:function(e){var t,n=e.querySelectorAll("h2, h3"),r=Object(u.a)(n);try{for(r.s();!(t=r.n()).done;){var a=t.value,c=a.innerText.toLowerCase().replace(/ |\?|:/g,"_");a.setAttribute("id",c)}}catch(s){r.e(s)}finally{r.f()}return e.innerHTML}},D=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,q(!0),e.next=4,W(I);case 4:return n=e.sent,a(n),e.next=8,K();case 8:V(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://medium.com/hackernoon/boost-your-productivity-using-markdown-b8a84fc2a089",e.prev=1,q(!0),e.next=5,W("https://medium.com/hackernoon/boost-your-productivity-using-markdown-b8a84fc2a089");case 5:return n=e.sent,a(n),e.next=9,K();case 9:V(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=document.querySelectorAll("iframe");console.log(e);var t,n=Object(u.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.parentNode.removeChild(r)}}catch(a){n.e(a)}finally{n.f()}},G=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/.netlify/functions/getRedirectUrl",{method:"POST",body:t}).then((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r,a,c,s,o,l,u,d,b,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new DOMParser,R(t),e.prev=2,e.next=5,fetch("/cors-proxy/".concat(t));case 5:return r=e.sent,e.next=8,r.text();case 8:if(a=e.sent,c=n.parseFromString(a,"text/html"),!M(c)){e.next=16;break}return e.next=14,fetch("/.netlify/functions/getMeteredContent",{method:"POST",body:I}).then((function(e){return e.json()}));case 14:a=e.sent,c=n.parseFromString(a,"text/html");case 16:if(409!==r.status){e.next=23;break}return e.next=19,fetch("http://localhost:8888/.netlify/functions/getContent",{method:"POST",body:I});case 19:return s=e.sent,e.next=22,s.json();case 22:a=e.sent;case 23:return o=new f.Readability(c,z),l=o.parse(),h(l.title),O(l.byline),S(l.siteName),e.abrupt("return",{__html:l.content});case 31:return e.prev=31,e.t0=e.catch(2),e.next=35,G(t);case 35:return u=e.sent,d=n.parseFromString(u,"text/html"),b=new f.Readability(d,z),m=b.parse(),h(m.title),O(m.byline),S(m.siteName),e.abrupt("return",{__html:m.content});case 43:case"end":return e.stop()}}),e,null,[[2,31]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,a,c,s,o,l,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.querySelectorAll("img"),n=Object(u.a)(t),e.prev=2,n.s();case 4:if((r=n.n()).done){e.next=41;break}return a=r.value,e.prev=6,e.next=9,fetch("/cors-proxy/".concat(a.src)).then((function(e){return e.blob()}));case 9:c=e.sent,s=URL.createObjectURL(c),a.setAttribute("data-orgsrc",a.src),a.src=s,a.srcset="",a.removeAttribute("height"),a.removeAttribute("width"),e.next=39;break;case 18:return e.prev=18,e.t0=e.catch(6),e.prev=20,console.log(e.t0),e.next=24,fetch("http://localhost:8888/.netlify/functions/getProxiedImageUrl",{method:"POST",body:a.src}).then((function(e){return e.json()}));case 24:return o=e.sent,a.setAttribute("data-orgsrc",o),e.next=28,fetch("/cors-proxy/".concat(o)).then((function(e){return e.blob()}));case 28:l=e.sent,d=URL.createObjectURL(l),a.src=d,a.srcset="",a.removeAttribute("height"),a.removeAttribute("width"),e.next=39;break;case 36:e.prev=36,e.t1=e.catch(20),console.log(e.t1);case 39:e.next=4;break;case 41:e.next=46;break;case 43:e.prev=43,e.t2=e.catch(2),n.e(e.t2);case 46:return e.prev=46,n.f(),e.finish(46);case 49:case"end":return e.stop()}}),e,null,[[2,43,46,49],[6,18],[20,36]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e,t=document.querySelectorAll("img"),n=Object(u.a)(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;"A"===r.parentElement.tagName&&(r.parentElement.outerHTML=r.parentElement.innerHTML)}}catch(o){n.e(o)}finally{n.f()}var a=new m.a;function c(e){return e?e.replace(/(\n+\s*)+/g,"\n"):""}a.addRule("image",{filter:["img"],replacement:function(e,t){var n=c(t.getAttribute("alt")),r=t.getAttribute("data-mdsrc")||"",a=c(t.getAttribute("title")),s=a?' "'+a+'"':"";return r?"![".concat(n,"](").concat(r+s,")"):""}});var s=a.turndown(document.getElementById("readability-page-1"));return new Blob([s],{type:"text/csv"})},X=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r,a,c,s,l,d,b,f,m,h,x;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new p.a,n=t.folder("/assets"),r=document.querySelectorAll("img"),a=Object(u.a)(r),e.prev=4,a.s();case 6:if((c=a.n()).done){e.next=19;break}return s=c.value,l="/cors-proxy/".concat(s.dataset.orgsrc),d=l.substr(l.lastIndexOf("/")),b=decodeURI(d),e.next=13,fetch(l).then((function(e){return e.blob()}));case 13:f=e.sent,m=new File([f],b),s.setAttribute("data-mdsrc","assets".concat(b)),n.file(b,m);case 17:e.next=6;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(4),a.e(e.t0);case 24:return e.prev=24,a.f(),e.finish(24);case 27:h=Q(),x=new File([h],"text.md"),t.file("".concat(o,".md"),x),t.generateAsync({type:"blob"}).then((function(e){Object(j.saveAs)(e,"".concat(o,".zip"))}));case 31:case"end":return e.stop()}}),e,null,[[4,21,24,27]])})));return function(){return e.apply(this,arguments)}}();return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(b.a,{children:n.__html.length<1?Object(A.jsx)(T,{onSubmit:D,value:I,setParentValue:C,isLoading:H,handleExample:J}):Object(A.jsx)(B,{article:n,close:function(){a({__html:""}),C("")},title:o,author:g,siteName:k,siteUrl:F,getTextbundle:function(){return X()},setIsLoading:function(){return q(!1)}})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(b.e,{children:Object(A.jsx)(_,{})})}),document.getElementById("root")),F()}},[[90,1,2]]]);
//# sourceMappingURL=main.bc34a122.chunk.js.map