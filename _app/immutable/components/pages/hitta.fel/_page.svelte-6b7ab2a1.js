import{S as D,i as G,s as N,k as d,l as m,m as v,h as _,n as p,b as q,E as u,B as k,M as P,a as y,c as E,J as g,P as I,L as b,N as V}from"../../../chunks/index-1b13165a.js";function M(n,t,a){const r=n.slice();return r[5]=t[a],r[7]=a,r}function C(n){let t,a,r,l,e,c,i,s,o;function w(){return n[2](n[5])}function B(){return n[3](n[5])}return{c(){t=d("div"),a=d("img"),l=y(),e=d("img"),i=y(),this.h()},l(h){t=m(h,"DIV",{class:!0});var f=v(t);a=m(f,"IMG",{class:!0,src:!0,alt:!0}),l=E(f),e=m(f,"IMG",{class:!0,src:!0,alt:!0}),i=E(f),f.forEach(_),this.h()},h(){p(a,"class","front svelte-1m3ikd2"),g(a.src,r=n[5].img)||p(a,"src",r),p(a,"alt",""),p(e,"class","back svelte-1m3ikd2"),g(e.src,c="https://previews.123rf.com/images/tigatelu/tigatelu1802/tigatelu180200045/96522532-osterhase-aus-einem-ei-geschl%C3%BCpft.jpg")||p(e,"src",c),p(e,"alt",""),p(t,"class","card svelte-1m3ikd2"),I(t,"flipped",n[5].flipped)},m(h,f){q(h,t,f),u(t,a),u(t,l),u(t,e),u(t,i),s||(o=[b(t,"click",w),b(t,"keypress",B)],s=!0)},p(h,f){n=h,f&1&&!g(a.src,r=n[5].img)&&p(a,"src",r),f&1&&I(t,"flipped",n[5].flipped)},d(h){h&&_(t),s=!1,V(o)}}}function $(n){let t,a,r=n[0],l=[];for(let e=0;e<r.length;e+=1)l[e]=C(M(n,r,e));return{c(){t=d("main"),a=d("div");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=m(e,"MAIN",{class:!0});var c=v(t);a=m(c,"DIV",{class:!0});var i=v(a);for(let s=0;s<l.length;s+=1)l[s].l(i);i.forEach(_),c.forEach(_),this.h()},h(){p(a,"class","row svelte-1m3ikd2"),p(t,"class","svelte-1m3ikd2")},m(e,c){q(e,t,c),u(t,a);for(let i=0;i<l.length;i+=1)l[i].m(a,null)},p(e,[c]){if(c&3){r=e[0];let i;for(i=0;i<r.length;i+=1){const s=M(e,r,i);l[i]?l[i].p(s,c):(l[i]=C(s),l[i].c(),l[i].m(a,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=r.length}},i:k,o:k,d(e){e&&_(t),P(l,e)}}}let S=8;function j(n,t,a){let r=[];for(let s=0;s<S*2;s++)r.push({id:s,img:"https://picsum.photos/id/"+(s%S).toString()+"/200/300",flipped:!1,completed:!1});let l=0;function e(s){s.flipped=!0,l++,console.log(l),s.flipped&&l<=2?(l==2&&(r.forEach(o=>{s.img==o.img&&o.flipped&&s.id!=o.id&&(o.completed=!0,s.completed=!0)}),setTimeout(()=>{r.forEach(o=>{o.flipped=o.completed}),l=0,a(0,r)},1e3)),a(0,r)):alert("vänta ett litet tag till")}return[r,e,s=>{e(s)},s=>{e(s)}]}class J extends D{constructor(t){super(),G(this,t,j,$,N,{})}}export{J as default};
