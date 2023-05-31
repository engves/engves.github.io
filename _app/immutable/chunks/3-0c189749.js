import{S as G,i as O,s as Q,k as l,q as E,a as u,l as p,m as o,r as w,h as a,c as m,n as N,b as t,E as P,B as J}from"./index-1b13165a.js";function V(B){let e,A,v,d,L,b,i,H=`<code class="language-js">
  <span class="token comment">// sleep time expects milliseconds</span>
  <span class="token keyword">function</span> <span class="token function">sleep</span> <span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> time<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    clicks <span class="token operator">=</span> clicks <span class="token operator">+</span> multiplier<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"click"</span> <span class="token operator">+</span> clicks<span class="token punctuation">)</span><span class="token punctuation">;</span>
    banana_img <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">url("https://i.pinimg.com/originals/1f/89/2a/1f892af76f0511ac0cc2028156a12676.gif")</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>
    <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">&#123;</span>
        banana_img<span class="token operator">=</span><span class="token keyword">null</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span></code>`,_,c,M=`<code class="language-css"> &lt;div class = <span class="token selector">"banana" style="background-image:</span><span class="token punctuation">&#123;</span>banana_img<span class="token punctuation">&#125;</span>">&lt;/div>
</code>`,j,f,C,x,r,I=`<code class="language-css">   <span class="token selector">&lt;button on:click=</span><span class="token punctuation">&#123;</span>increment<span class="token punctuation">&#125;</span> <span class="token selector">class="clicker">
      &lt;div class = "banana">&lt;/div>
      &lt;div style="display:flex; flex-direction:column;">
      &lt;span class="clicks"></span><span class="token punctuation">&#123;</span>clicks<span class="token punctuation">&#125;</span><span class="token selector">&lt;/span>
      &lt;span class="pointtext">BANANAS PER CLICK:</span> <span class="token punctuation">&#123;</span>multiplier<span class="token punctuation">&#125;</span>&lt;/span>
    &lt;/div>
      &lt;div class = <span class="token selector">"banana" style="background-image:</span><span class="token punctuation">&#123;</span>banana_img<span class="token punctuation">&#125;</span>">&lt;/div>
    &lt;/button></code>`,h,g,R,y,k,K=`<code class="language-js">  <span class="token punctuation">.</span>info<span class="token punctuation">&#123;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">251</span><span class="token punctuation">,</span> <span class="token number">238</span><span class="token punctuation">,</span> <span class="token number">122</span><span class="token punctuation">,</span> <span class="token number">0.993</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 25px<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
  </code>`;return{c(){e=l("p"),A=E(`Under dagens lektion har jag fokuserat på animation när man klickar på cliker knappen (gorilla bilden).
Jag gjorde en klass “banana” som innehåller information om vart den ska sättas ut på skärmen. La även till variabeln banana_img som orginellt är null aka finns ej/tom.`),v=u(),d=l("p"),L=E(`När man klickar på clickern ändras banana_img till en gif och sedan kallas en sleep function som väntar i 1000ms och sedan sätter tillbaka banana_img till null.
Jag gjorde en div som stylades av banana classen samt fick sin backgrunds bild från banana_img. När banana_img är null så har diven ingen bakgrund men när man klickat på knappen så kommer banana_img få ett värde och div:en kommer då få detta som bakgrundsbild.
Denna bakgrundsbild kommer då att visas i 1000ms, tiden sleep funktoinen väntar.`),b=u(),i=l("pre"),_=u(),c=l("pre"),j=u(),f=l("p"),C=E(`För att detta skulle se bra ut inom min clicker knapp ändrade jag så att flex riktningen blev radvis,vänster till höger, istället för kolumn men för att antal klicks och ppc fortfarande skulle vara under varandra så satte jag dessa inom en egen div med flex riktning kolumn, uppfrån och ner.
För att banana clicker fortfarnde skulle vara i mitten satte jag två div med klassen banana på vardera sida, men enbart den högra var stylad enligt ovan.`),x=u(),r=l("pre"),h=u(),g=l("p"),R=E("Jag lade även till mer text för infons skull. Skapade en klass som heter info lade in färg på texten och px storlek som jag gjorde snäppet mindre järmfört med BANANA CLICKER texten."),y=u(),k=l("pre"),this.h()},l(n){e=p(n,"P",{});var s=o(e);A=w(s,`Under dagens lektion har jag fokuserat på animation när man klickar på cliker knappen (gorilla bilden).
Jag gjorde en klass “banana” som innehåller information om vart den ska sättas ut på skärmen. La även till variabeln banana_img som orginellt är null aka finns ej/tom.`),s.forEach(a),v=m(n),d=p(n,"P",{});var F=o(d);L=w(F,`När man klickar på clickern ändras banana_img till en gif och sedan kallas en sleep function som väntar i 1000ms och sedan sätter tillbaka banana_img till null.
Jag gjorde en div som stylades av banana classen samt fick sin backgrunds bild från banana_img. När banana_img är null så har diven ingen bakgrund men när man klickat på knappen så kommer banana_img få ett värde och div:en kommer då få detta som bakgrundsbild.
Denna bakgrundsbild kommer då att visas i 1000ms, tiden sleep funktoinen väntar.`),F.forEach(a),b=m(n),i=p(n,"PRE",{class:!0});var q=o(i);q.forEach(a),_=m(n),c=p(n,"PRE",{class:!0});var D=o(c);D.forEach(a),j=m(n),f=p(n,"P",{});var S=o(f);C=w(S,`För att detta skulle se bra ut inom min clicker knapp ändrade jag så att flex riktningen blev radvis,vänster till höger, istället för kolumn men för att antal klicks och ppc fortfarande skulle vara under varandra så satte jag dessa inom en egen div med flex riktning kolumn, uppfrån och ner.
För att banana clicker fortfarnde skulle vara i mitten satte jag två div med klassen banana på vardera sida, men enbart den högra var stylad enligt ovan.`),S.forEach(a),x=m(n),r=p(n,"PRE",{class:!0});var U=o(r);U.forEach(a),h=m(n),g=p(n,"P",{});var T=o(g);R=w(T,"Jag lade även till mer text för infons skull. Skapade en klass som heter info lade in färg på texten och px storlek som jag gjorde snäppet mindre järmfört med BANANA CLICKER texten."),T.forEach(a),y=m(n),k=p(n,"PRE",{class:!0});var z=o(k);z.forEach(a),this.h()},h(){N(i,"class","language-js"),N(c,"class","language-css"),N(r,"class","language-css"),N(k,"class","language-js")},m(n,s){t(n,e,s),P(e,A),t(n,v,s),t(n,d,s),P(d,L),t(n,b,s),t(n,i,s),i.innerHTML=H,t(n,_,s),t(n,c,s),c.innerHTML=M,t(n,j,s),t(n,f,s),P(f,C),t(n,x,s),t(n,r,s),r.innerHTML=I,t(n,h,s),t(n,g,s),P(g,R),t(n,y,s),t(n,k,s),k.innerHTML=K},p:J,i:J,o:J,d(n){n&&a(e),n&&a(v),n&&a(d),n&&a(b),n&&a(i),n&&a(_),n&&a(c),n&&a(j),n&&a(f),n&&a(x),n&&a(r),n&&a(h),n&&a(g),n&&a(y),n&&a(k)}}}const X={title:"Fredag",date:"2023-01-20"};class Y extends G{constructor(e){super(),O(this,e,null,V,Q,{})}}export{Y as default,X as metadata};