import{S as pe,i as ye,s as we,k as m,a as S,q as O,l as _,m as p,h as f,c as V,r as j,C as ve,n as d,b as K,E as i,u as Be,B as ne,o as tt,A as fe,_ as Q,p as de,X as We,F as oe,Y as it,R as ot,$ as Ye,w as he,T as ct,x as ge,y as me,f as q,t as U,d as He,a0 as Ke,z as _e,G as ut,e as be,g as Ne,P as dt,a2 as Ae}from"../../../chunks/index-07efb363.js";import{S as ft}from"../../../chunks/SvelteSeo-94b937d8.js";import{w as vt}from"../../../chunks/index-fd57063c.js";import{a as ht}from"../../../chunks/axios-aba6f0e0.js";const gt=!0,mt=gt,st=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"],lt=["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅘ","ㅙ","ㅚ","ㅛ","ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ","ㅢ","ㅣ"],at=["","ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];function _t(l){const t=l.charCodeAt(0)-44032,a=parseInt(t/588),u=parseInt((t-a*588)/28),n=parseInt(t%28);return[st[a],lt[u],at[n]]}function bt(l){let e=["ㅏ","ㅐ","ㅗ","ㅚ","ㅜ","ㅡ"];l[0]==="ㄹ"&&e.indexOf(l[1])!==-1&&(l[0]="ㄴ");let s=["ㅑ","ㅕ","ㅛ","ㅠ","ㅣ"];return(l[0]==="ㄴ"||l[0]==="ㄹ")&&s.indexOf(l[1])!==-1&&(l[0]="ㅇ"),l}function Xe(l,e){e&&(l=bt(l));let s=st.indexOf(l[0]);const t=lt.indexOf(l[1]);let a=at.indexOf(l[2]);return l[2]===""&&(a=0),s===-1||t===-1?"":String.fromCharCode(44032+s*588+t*28+a)}function pt(l){let e=[],s="";for(let t=0;t<l.length;t++){let a=_t(l.charAt(t));t>0&&(s+=l.charAt(t-1)),a[0]===void 0&&a[1]===void 0&&a[2]===void 0?e.push(s+l.charAt(t)):(a[0]!==""&&e.push(s+a[0]),a[1]!==""&&e.push(s+Xe([a[0],a[1],""])),a[2]!==""&&e.push(s+Xe([a[0],a[1],a[2]])))}return e}function yt(l){let e,s,t,a,u,n,o,r,v,g,y,w,k,h=l[3].replace(/\n/g,"<br />")+"",I,c,T,E,C,b,z,N,L,J;return{c(){e=m("div"),s=m("div"),t=m("img"),u=S(),n=m("div"),o=m("div"),r=O(l[1]),v=S(),g=m("div"),y=m("div"),w=m("div"),k=m("div"),I=S(),c=m("div"),T=S(),E=m("div"),C=S(),b=m("div"),z=S(),N=m("div"),L=m("div"),J=O(l[2]),this.h()},l(B){e=_(B,"DIV",{class:!0});var A=p(e);s=_(A,"DIV",{class:!0});var Z=p(s);t=_(Z,"IMG",{src:!0,class:!0,alt:!0}),Z.forEach(f),u=V(A),n=_(A,"DIV",{class:!0});var P=p(n);o=_(P,"DIV",{class:!0});var W=p(o);r=j(W,l[1]),W.forEach(f),v=V(P),g=_(P,"DIV",{});var $=p(g);y=_($,"DIV",{class:!0});var ee=p(y);w=_(ee,"DIV",{class:!0});var H=p(w);k=_(H,"DIV",{style:!0});var re=p(k);re.forEach(f),I=V(H),c=_(H,"DIV",{class:!0}),p(c).forEach(f),T=V(H),E=_(H,"DIV",{class:!0}),p(E).forEach(f),C=V(H),b=_(H,"DIV",{class:!0}),p(b).forEach(f),H.forEach(f),ee.forEach(f),$.forEach(f),z=V(P),N=_(P,"DIV",{});var te=p(N);L=_(te,"DIV",{class:!0});var Y=p(L);J=j(Y,l[2]),Y.forEach(f),te.forEach(f),P.forEach(f),A.forEach(f),this.h()},h(){ve(t.src,a=l[0])||d(t,"src",a),d(t,"class","img-fluid rounded-circle svelte-fr2hyb"),d(t,"alt",""),d(s,"class","avatar svelte-fr2hyb"),d(o,"class","nick-text px-2 pt-0 svelte-fr2hyb"),d(k,"style",""),d(c,"class","dot-ani me-1 my-auto svelte-fr2hyb"),d(E,"class","dot-ani me-1 my-auto svelte-fr2hyb"),d(b,"class","dot-ani me-2 my-auto svelte-fr2hyb"),d(w,"class","d-flex svelte-fr2hyb"),d(y,"class","card-text-bot bot-message-box-layout svelte-fr2hyb"),d(L,"class","bot-date px-2 svelte-fr2hyb"),d(n,"class","pe-5"),d(e,"class","bot-message-box svelte-fr2hyb")},m(B,A){K(B,e,A),i(e,s),i(s,t),i(e,u),i(e,n),i(n,o),i(o,r),i(n,v),i(n,g),i(g,y),i(y,w),i(w,k),k.innerHTML=h,i(w,I),i(w,c),l[12](c),i(w,T),i(w,E),l[13](E),i(w,C),i(w,b),l[14](b),i(n,z),i(n,N),i(N,L),i(L,J)},p(B,[A]){A&1&&!ve(t.src,a=B[0])&&d(t,"src",a),A&2&&Be(r,B[1]),A&8&&h!==(h=B[3].replace(/\n/g,"<br />")+"")&&(k.innerHTML=h),A&4&&Be(J,B[2])},i:ne,o:ne,d(B){B&&f(e),l[12](null),l[13](null),l[14](null)}}}function wt(l,e,s){let{profile_img:t="/bot/wrs.png"}=e,{botNick:a="WRSTORY"}=e,{dotRepeat:u=0}=e,{completeCallback:n}=e,{startCallback:o}=e,r="입력하는 중",v="&nbsp;",g,y,w,k={value:0},{data:h}=e,{readed:I=!1}=e;function c(){console.log(h);let b=pt(h.message.trim()),z=b.length*.01;gsap.to(k,{ease:Power1.easeIn,duration:z,value:b.length,onUpdate:()=>{let N=Math.floor(k.value)-1;N<0&&(N=0),s(3,v=String(b[N])),n()},onComplete:()=>{b=null,n()}}),s(2,r=h.date),s(4,g.style.display="none",g),s(5,y.style.display="none",y),s(6,w.style.display="none",w),n!==void 0&&n()}tt(async()=>{await fe(),I===!1?c():(h!==void 0&&h.message!==void 0&&s(3,v=h.message.trim()),n()),o()});function T(b){Q[b?"unshift":"push"](()=>{g=b,s(4,g)})}function E(b){Q[b?"unshift":"push"](()=>{y=b,s(5,y)})}function C(b){Q[b?"unshift":"push"](()=>{w=b,s(6,w)})}return l.$$set=b=>{"profile_img"in b&&s(0,t=b.profile_img),"botNick"in b&&s(1,a=b.botNick),"dotRepeat"in b&&s(7,u=b.dotRepeat),"completeCallback"in b&&s(8,n=b.completeCallback),"startCallback"in b&&s(9,o=b.startCallback),"data"in b&&s(10,h=b.data),"readed"in b&&s(11,I=b.readed)},[t,a,r,v,g,y,w,u,n,o,h,I,T,E,C]}class Dt extends pe{constructor(e){super(),ye(this,e,wt,yt,we,{profile_img:0,botNick:1,dotRepeat:7,completeCallback:8,startCallback:9,data:10,readed:11})}}function It(l){let e,s,t,a=l[0]+`
`,u,n,o,r,v,g,y,w,k,h;return{c(){e=m("div"),s=m("div"),t=m("pre"),u=O(a),n=S(),o=m("textarea"),r=S(),v=m("div"),g=m("button"),y=m("img"),this.h()},l(I){e=_(I,"DIV",{class:!0});var c=p(e);s=_(c,"DIV",{class:!0});var T=p(s);t=_(T,"PRE",{class:!0,"aria-hidden":!0,style:!0});var E=p(t);u=j(E,a),E.forEach(f),n=V(T),o=_(T,"TEXTAREA",{autocomplete:!0,autocorrect:!0,type:!0,class:!0,placeholder:!0}),p(o).forEach(f),T.forEach(f),r=V(c),v=_(c,"DIV",{class:!0});var C=p(v);g=_(C,"BUTTON",{class:!0});var b=p(g);y=_(b,"IMG",{src:!0,alt:!0}),b.forEach(f),C.forEach(f),c.forEach(f),this.h()},h(){d(t,"class","pre-textarea svelte-3pcvzn"),d(t,"aria-hidden","true"),de(t,"min-height",l[4]),de(t,"max-height",l[3]),d(o,"autocomplete","off"),d(o,"autocorrect","off"),d(o,"type","text"),d(o,"class","chat-input svelte-3pcvzn"),d(o,"placeholder","메시지 보내기"),d(s,"class","container svelte-3pcvzn"),ve(y.src,w="/bot/up.png")||d(y,"src",w),d(y,"alt","send"),d(g,"class",""),d(v,"class","chat-bt-send svelte-3pcvzn"),d(e,"class","chat-input-container svelte-3pcvzn")},m(I,c){K(I,e,c),i(e,s),i(s,t),i(t,u),i(s,n),i(s,o),We(o,l[0]),l[11](o),i(e,r),i(e,v),i(v,g),i(g,y),k||(h=[oe(window,"keydown",l[6]),oe(window,"keyup",l[7]),oe(o,"input",l[10]),oe(o,"keypress",l[5]),oe(g,"click",function(){it(l[2])&&l[2].apply(this,arguments)})],k=!0)},p(I,[c]){l=I,c&1&&a!==(a=l[0]+`
`)&&Be(u,a),c&16&&de(t,"min-height",l[4]),c&8&&de(t,"max-height",l[3]),c&1&&We(o,l[0])},i:ne,o:ne,d(I){I&&f(e),l[11](null),k=!1,ot(h)}}}function kt(l,e,s){let t,a,{value:u=""}=e,{minRows:n=1}=e,{maxRows:o}=e,{sendMessage:r}=e,{refTA:v}=e,g=[];function y(c){g[c.keyCode]=!0,c.code==="Enter"&&g[16]!==!0&&(r(),c.preventDefault())}function w(c){g[c.keyCode]=!0}function k(c){g[c.keyCode]=!1}function h(){u=this.value,s(0,u)}function I(c){Q[c?"unshift":"push"](()=>{v=c,s(1,v)})}return l.$$set=c=>{"value"in c&&s(0,u=c.value),"minRows"in c&&s(8,n=c.minRows),"maxRows"in c&&s(9,o=c.maxRows),"sendMessage"in c&&s(2,r=c.sendMessage),"refTA"in c&&s(1,v=c.refTA)},l.$$.update=()=>{l.$$.dirty&256&&s(4,t=`${1+n*1.2}em`),l.$$.dirty&512&&s(3,a=o?`${1+o*1.2}em`:"auto")},[u,v,r,a,t,y,w,k,n,o,h,I]}class Et extends pe{constructor(e){super(),ye(this,e,kt,It,we,{value:0,minRows:8,maxRows:9,sendMessage:2,refTA:1})}}function St(l){let e,s,t,a=l[0].replace(/\n/g,"<br />")+"",u,n,o,r=Vt()+"",v;return{c(){e=m("div"),s=m("div"),t=m("div"),u=S(),n=m("div"),o=m("div"),v=O(r),this.h()},l(g){e=_(g,"DIV",{class:!0});var y=p(e);s=_(y,"DIV",{class:!0});var w=p(s);t=_(w,"DIV",{class:!0});var k=p(t);k.forEach(f),u=V(w),n=_(w,"DIV",{});var h=p(n);o=_(h,"DIV",{class:!0});var I=p(o);v=j(I,r),I.forEach(f),h.forEach(f),w.forEach(f),y.forEach(f),this.h()},h(){d(t,"class","card-text user-message-text svelte-qxv2z9"),d(o,"class","user-message-date svelte-qxv2z9"),d(s,"class","user-message svelte-qxv2z9"),d(e,"class","user-message-all text-end mb-1 svelte-qxv2z9")},m(g,y){K(g,e,y),i(e,s),i(s,t),t.innerHTML=a,i(s,u),i(s,n),i(n,o),i(o,v)},p(g,[y]){y&1&&a!==(a=g[0].replace(/\n/g,"<br />")+"")&&(t.innerHTML=a)},i:ne,o:ne,d(g){g&&f(e)}}}function Vt(l){let e;l?e=new Date(l):e=new Date;let s=e.getHours(),t=s<12?"오전 ":"오후 ";s=s<13?t+s:t+(s-12);let a=e.getMinutes(),u=a<10?`0${a}`:`${a}`,n=e.getSeconds(),o=n<10?`0${n}`:`${n}`;return`${s}:${u}:${o}`}function Tt(l,e,s){let{message:t}=e;return l.$$set=a=>{"message"in a&&s(0,t=a.message)},[t]}class Mt extends pe{constructor(e){super(),ye(this,e,Tt,St,we,{message:0})}}function Qe(l){let e;l?e=new Date(l):e=new Date;let s=e.getHours(),t=s<12?"오전 ":"오후 ";s=s<13?t+s:t+(s-12);let a=e.getMinutes(),u=a<10?`0${a}`:`${a}`,n=e.getSeconds(),o=n<10?`0${n}`:`${n}`;return`${s}:${u}:${o}`}const ae=vt([]);ae.subscribe(l=>{console.log("subscribe"),console.log(l[0]),l[0]!==void 0&&localStorage.setItem("chatDatStore",JSON.stringify(l))});function Rt(){console.log("getLocalStore > browser : ",mt);let l=JSON.parse(localStorage.getItem("chatDatStore"));for(let e=0;e<l.length;e++)l[e].readed=!0;console.log(l),ae.set(l)}function Ct(){localStorage.setItem("chatDatStore",JSON.stringify([]))}function Ze(l,e,s){const t=l.slice();return t[15]=e[s],t}function $e(l){let e,s,t=l[3],a=[];for(let n=0;n<t.length;n+=1)a[n]=et(Ze(l,t,n));const u=n=>U(a[n],1,1,()=>{a[n]=null});return{c(){for(let n=0;n<a.length;n+=1)a[n].c();e=be()},l(n){for(let o=0;o<a.length;o+=1)a[o].l(n);e=be()},m(n,o){for(let r=0;r<a.length;r+=1)a[r].m(n,o);K(n,e,o),s=!0},p(n,o){if(o&104){t=n[3];let r;for(r=0;r<t.length;r+=1){const v=Ze(n,t,r);a[r]?(a[r].p(v,o),q(a[r],1)):(a[r]=et(v),a[r].c(),q(a[r],1),a[r].m(e.parentNode,e))}for(Ne(),r=t.length;r<a.length;r+=1)u(r);He()}},i(n){if(!s){for(let o=0;o<t.length;o+=1)q(a[o]);s=!0}},o(n){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)U(a[o]);s=!1},d(n){dt(a,n),n&&f(e)}}}function At(l){let e,s;return e=new Dt({props:{data:l[15],startCallback:l[6],completeCallback:l[5],readed:l[15].readed}}),{c(){he(e.$$.fragment)},l(t){ge(e.$$.fragment,t)},m(t,a){me(e,t,a),s=!0},p(t,a){const u={};a&8&&(u.data=t[15]),a&8&&(u.readed=t[15].readed),e.$set(u)},i(t){s||(q(e.$$.fragment,t),s=!0)},o(t){U(e.$$.fragment,t),s=!1},d(t){_e(e,t)}}}function Bt(l){let e,s;return e=new Mt({props:{message:l[15].message}}),{c(){he(e.$$.fragment)},l(t){ge(e.$$.fragment,t)},m(t,a){me(e,t,a),s=!0},p(t,a){const u={};a&8&&(u.message=t[15].message),e.$set(u)},i(t){s||(q(e.$$.fragment,t),s=!0)},o(t){U(e.$$.fragment,t),s=!1},d(t){_e(e,t)}}}function et(l){let e,s,t,a;const u=[Bt,At],n=[];function o(r,v){return r[15].type==="u"?0:1}return e=o(l),s=n[e]=u[e](l),{c(){s.c(),t=be()},l(r){s.l(r),t=be()},m(r,v){n[e].m(r,v),K(r,t,v),a=!0},p(r,v){let g=e;e=o(r),e===g?n[e].p(r,v):(Ne(),U(n[g],1,1,()=>{n[g]=null}),He(),s=n[e],s?s.p(r,v):(s=n[e]=u[e](r),s.c()),q(s,1),s.m(t.parentNode,t))},i(r){a||(q(s),a=!0)},o(r){U(s),a=!1},d(r){n[e].d(r),r&&f(t)}}}function Ht(l){let e,s,t,a,u,n,o,r,v,g,y,w,k,h,I,c,T,E,C,b,z,N,L,J,B,A,Z,P,W,$,ee,H,re,te,Y,De,Ie,ie,ke,Ee,X,Oe=Ot()+"",Se,Ve,Te,se,G,Me,Re,ce;t=new ft({props:{title:"화이트래빗스토리-Contact",description:"챗봇 개발이 필요하신가요! 화이트래빗스토리와 함께 하세요. 문의 사항은 웹챗봇을 이용해 주세요.",openGraph:{title:"화이트래빗스토리-Contact",description:"챗봇 개발이 필요하신가요! 화이트래빗스토리와 함께 하세요. 문의 사항은 웹챗봇을 이용해 주세요.",url:"https://www.wrstory.com/contact",type:"website",images:[{url:"https://www.wrstory.com/wrstory-title.png",width:850,height:650,alt:"화이트래빗스토리"}]}}});let M=l[3].length>0&&$e(l);function nt(D){l[8](D)}function rt(D){l[9](D)}let Ce={minRows:1,maxRows:5,sendMessage:l[4]};return l[1]!==void 0&&(Ce.refTA=l[1]),l[0]!==void 0&&(Ce.value=l[0]),G=new Et({props:Ce}),Q.push(()=>Ye(G,"refTA",nt,l[1])),Q.push(()=>Ye(G,"value",rt,l[0])),{c(){e=m("meta"),s=S(),he(t.$$.fragment),a=S(),u=m("div"),n=m("div"),o=S(),r=m("div"),v=m("div"),g=m("div"),y=m("img"),k=S(),h=m("div"),I=O("안녕하세요!"),c=m("br"),T=S(),E=m("h1"),C=O("화이트래빗스토리 상담 챗봇입니다."),b=S(),z=m("h2"),N=O("상담 내용을 보내주시면 확인 후 연락드리겠습니다."),L=S(),J=m("br"),B=S(),A=m("div"),Z=O("1:1 상담은?"),P=S(),W=m("div"),$=O("상담시간 평일 오전 9시 ~ 오후 5시"),ee=S(),H=m("div"),re=O("이메일 : yh.kim@wrstory.com"),te=S(),Y=m("div"),De=O("전화 : 010-5527-0494"),Ie=S(),ie=m("div"),ke=O("담당자 : 김윤형 실장"),Ee=S(),X=m("div"),Se=O(Oe),Ve=S(),M&&M.c(),Te=S(),se=m("div"),he(G.$$.fragment),this.h()},l(D){const x=ct("svelte-mrpa02",document.head);e=_(x,"META",{name:!0,content:!0}),x.forEach(f),s=V(D),ge(t.$$.fragment,D),a=V(D),u=_(D,"DIV",{class:!0,id:!0});var F=p(u);n=_(F,"DIV",{class:!0}),p(n).forEach(f),o=V(F),r=_(F,"DIV",{id:!0,class:!0});var ue=p(r);v=_(ue,"DIV",{class:!0});var le=p(v);g=_(le,"DIV",{class:!0});var je=p(g);y=_(je,"IMG",{src:!0,class:!0,alt:!0}),je.forEach(f),k=V(le),h=_(le,"DIV",{class:!0});var R=p(h);I=j(R,"안녕하세요!"),c=_(R,"BR",{}),T=V(R),E=_(R,"H1",{class:!0});var ze=p(E);C=j(ze,"화이트래빗스토리 상담 챗봇입니다."),ze.forEach(f),b=V(R),z=_(R,"H2",{class:!0});var xe=p(z);N=j(xe,"상담 내용을 보내주시면 확인 후 연락드리겠습니다."),xe.forEach(f),L=V(R),J=_(R,"BR",{}),B=V(R),A=_(R,"DIV",{});var qe=p(A);Z=j(qe,"1:1 상담은?"),qe.forEach(f),P=V(R),W=_(R,"DIV",{});var Le=p(W);$=j(Le,"상담시간 평일 오전 9시 ~ 오후 5시"),Le.forEach(f),ee=V(R),H=_(R,"DIV",{});var Pe=p(H);re=j(Pe,"이메일 : yh.kim@wrstory.com"),Pe.forEach(f),te=V(R),Y=_(R,"DIV",{});var Ge=p(Y);De=j(Ge,"전화 : 010-5527-0494"),Ge.forEach(f),Ie=V(R),ie=_(R,"DIV",{});var Fe=p(ie);ke=j(Fe,"담당자 : 김윤형 실장"),Fe.forEach(f),R.forEach(f),Ee=V(le),X=_(le,"DIV",{id:!0,class:!0});var Ue=p(X);Se=j(Ue,Oe),Ue.forEach(f),le.forEach(f),Ve=V(ue),M&&M.l(ue),ue.forEach(f),Te=V(F),se=_(F,"DIV",{class:!0});var Je=p(se);ge(G.$$.fragment,Je),Je.forEach(f),F.forEach(f),this.h()},h(){document.title="Contact",d(e,"name","description"),d(e,"content","contact 연락하기"),d(n,"class","chat-margin svelte-r807ej"),ve(y.src,w="bot/wrs.png")||d(y,"src",w),d(y,"class",""),d(y,"alt",""),d(g,"class","avatar-cover svelte-r807ej"),d(E,"class","svelte-r807ej"),d(z,"class","svelte-r807ej"),d(h,"class","chat_desc svelte-r807ej"),d(X,"id","dateBoxMain"),d(X,"class","dateBox svelte-r807ej"),d(v,"class","chat-info svelte-r807ej"),d(r,"id","cardBody"),d(r,"class","card-body p-1 svelte-r807ej"),d(se,"class","chat-footer svelte-r807ej"),d(u,"class","containerCard svelte-r807ej"),d(u,"id","containerCard")},m(D,x){i(document.head,e),K(D,s,x),me(t,D,x),K(D,a,x),K(D,u,x),i(u,n),i(u,o),i(u,r),i(r,v),i(v,g),i(g,y),i(v,k),i(v,h),i(h,I),i(h,c),i(h,T),i(h,E),i(E,C),i(h,b),i(h,z),i(z,N),i(h,L),i(h,J),i(h,B),i(h,A),i(A,Z),i(h,P),i(h,W),i(W,$),i(h,ee),i(h,H),i(H,re),i(h,te),i(h,Y),i(Y,De),i(h,Ie),i(h,ie),i(ie,ke),i(v,Ee),i(v,X),i(X,Se),i(r,Ve),M&&M.m(r,null),l[7](r),i(u,Te),i(u,se),me(G,se,null),ce=!0},p(D,[x]){D[3].length>0?M?(M.p(D,x),x&8&&q(M,1)):(M=$e(D),M.c(),q(M,1),M.m(r,null)):M&&(Ne(),U(M,1,1,()=>{M=null}),He());const F={};!Me&&x&2&&(Me=!0,F.refTA=D[1],Ke(()=>Me=!1)),!Re&&x&1&&(Re=!0,F.value=D[0],Ke(()=>Re=!1)),G.$set(F)},i(D){ce||(q(t.$$.fragment,D),q(M),q(G.$$.fragment,D),ce=!0)},o(D){U(t.$$.fragment,D),U(M),U(G.$$.fragment,D),ce=!1},d(D){f(e),D&&f(s),_e(t,D),D&&f(a),D&&f(u),M&&M.d(),l[7](null),_e(G)}}}const Nt="https://talk.wrstory.com/search";function Ot(){let l=new Date;return`${l.getFullYear()}년 ${l.getMonth()+1}월 ${l.getDate()}일`}function jt(l,e,s){let t;ut(l,ae,c=>s(3,t=c)),console.log("!컨택페이지");let a="",u;async function n(c){console.log("서버호출",c);let T,E="데이터가 없습니다.";try{const C=await ht.post(Nt,{q:c});console.log("response.data "+C.data),E=C.data,T=null}catch(C){T=C}return console.log(T),console.log({resultResponse:E}),E}async function o(c){if(a.trim()!==""){if(a==="초기화"){Ct(),Ae(ae,t=[],t),s(0,a="");return}console.log("send"),console.log({userInput:a}),t.push({type:"u",message:a.trim(),readed:!0}),Ae(ae,t=[...t],t)}let T=a.trim();s(0,a=""),u.focus(),await fe(),w(),console.log("메시지 보내기.--->");let E=await n(T);t.push({type:"b",message:E,date:Qe(),readed:!1}),console.log("메시지 보내기.<---"),console.log(t),Ae(ae,t=[...t],t),console.log(t)}let r,v;async function g(){await fe(),w()}async function y(){await fe(),w()}function w(){r!==void 0&&(v=r.scrollHeight-r.clientHeight,gsap.to(r,{duration:.3,scrollTop:v,ease:"sine.out",onStart:()=>{},onComplete:()=>{}}))}console.log(t),tt(async()=>{Rt(),t.length===0&&t.push({type:"b",message:"챗봇 강의 신청과 제작 문의를 하실 수 있습니다. 무엇을 도와드릴까요?",date:Qe(),readed:!1})});function k(c){Q[c?"unshift":"push"](()=>{r=c,s(2,r)})}function h(c){u=c,s(1,u)}function I(c){a=c,s(0,a)}return[a,u,r,t,o,g,y,k,h,I]}class Pt extends pe{constructor(e){super(),ye(this,e,jt,Ht,we,{})}}export{Pt as default};
