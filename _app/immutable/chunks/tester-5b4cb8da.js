import{S as I,i as L,s as M,k as i,q as j,a as f,l as c,m as u,r as _,h as s,c as g,n as T,b as e,E as P,B as E}from"./index-e70a49d7.js";function R(x){let t,y,k,p,D=`<code class="language-js"><span class="token operator">&lt;</span>script<span class="token operator">></span>
  <span class="token keyword">import</span> AudioPlayer<span class="token punctuation">,</span> <span class="token punctuation">&#123;</span> stopAll <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'./AudioPlayer.svelte'</span>

  <span class="token keyword">let</span> audioTracks <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">'https://sveltejs.github.io/assets/music/strauss.mp3'</span><span class="token punctuation">,</span>
    <span class="token string">'https://sveltejs.github.io/assets/music/holst.mp3'</span><span class="token punctuation">,</span>
    <span class="token string">'https://sveltejs.github.io/assets/music/satie.mp3'</span>
  <span class="token punctuation">]</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></code>`,d,l,h,m,o,S=`<code class="language-js">
<span class="token operator">&lt;</span>button on<span class="token operator">:</span>click<span class="token operator">=</span><span class="token punctuation">&#123;</span>stopAll<span class="token punctuation">&#125;</span><span class="token operator">></span>
  stopppa all musik<span class="token operator">!</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token punctuation">&#123;</span>#each audioTracks <span class="token keyword">as</span> src<span class="token punctuation">&#125;</span>
  <span class="token operator">&lt;</span>AudioPlayer <span class="token punctuation">&#123;</span>src<span class="token punctuation">&#125;</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">&#123;</span><span class="token operator">/</span>each<span class="token punctuation">&#125;</span>
</code>`,v,r,b;return{c(){t=i("p"),y=j(`Idag la jag in en audio player på min hemsida. Det gjorde vi genom att hämta en bit kod från sveles egna sida och lägga in en
del av koden inom script där koden import AudioPlayer och audioTracks av den valda musiken.`),k=f(),p=i("pre"),d=f(),l=i("p"),h=j(`Den andra delen av audioplayer koden la jag in efter script den koden lägger in en button som säger
om man trycker på button kommer all musik som spelas/körs att stoppas. Skapade även en fil med namnet AudioPlayer.svelte.`),m=f(),o=i("pre"),v=f(),r=i("p"),b=j("Efter audio var inlagt på webbsidan lade jag in"),this.h()},l(a){t=c(a,"P",{});var n=u(t);y=_(n,`Idag la jag in en audio player på min hemsida. Det gjorde vi genom att hämta en bit kod från sveles egna sida och lägga in en
del av koden inom script där koden import AudioPlayer och audioTracks av den valda musiken.`),n.forEach(s),k=g(a),p=c(a,"PRE",{class:!0});var q=u(p);q.forEach(s),d=g(a),l=c(a,"P",{});var A=u(l);h=_(A,`Den andra delen av audioplayer koden la jag in efter script den koden lägger in en button som säger
om man trycker på button kommer all musik som spelas/körs att stoppas. Skapade även en fil med namnet AudioPlayer.svelte.`),A.forEach(s),m=g(a),o=c(a,"PRE",{class:!0});var H=u(o);H.forEach(s),v=g(a),r=c(a,"P",{});var w=u(r);b=_(w,"Efter audio var inlagt på webbsidan lade jag in"),w.forEach(s),this.h()},h(){T(p,"class","language-js"),T(o,"class","language-js")},m(a,n){e(a,t,n),P(t,y),e(a,k,n),e(a,p,n),p.innerHTML=D,e(a,d,n),e(a,l,n),P(l,h),e(a,m,n),e(a,o,n),o.innerHTML=S,e(a,v,n),e(a,r,n),P(r,b)},p:E,i:E,o:E,d(a){a&&s(t),a&&s(k),a&&s(p),a&&s(d),a&&s(l),a&&s(m),a&&s(o),a&&s(v),a&&s(r)}}}const C={title:"Onsdag",date:"2023-01-25"};class O extends I{constructor(t){super(),L(this,t,null,R,M,{})}}export{O as default,C as metadata};
