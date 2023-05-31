import{S as Ms,i as Ss,s as Ns,k as a,a as i,q as c,l as n,m as r,h as s,c as o,r as d,J as I,n as t,p as qe,b as _,E as e,Q as Is,L as Ts,u as Vs,B as Ds}from"../../../chunks/index-1b13165a.js";function Cs(me){let P,m,D,G,kn,At,fe,ge,Pn,It,ve,we,An,Dt,be,ye,In,Mt,xe,_e,Dn,St,O,ee,Nt,Tt,te,Vt,Ct,v,Ee,Wt,ke,jt,Pe,zt,Ae,Bt,Ie,Ht,Le,Rt,ct,q,Ue,Gt,Fe,Ot,dt,ae,T,ne,qt,Lt,M,se,Ut,Ft,re,Kt,Xt,ie,Yt,pt,E,V,Mn,$t,De,Me,Jt,ut,f,C,L,W,Sn,Qt,j,Nn,Zt,b,Se,ea,ta,aa,Ne,na,sa,U,ra,Te,ia,oa,la,Ve,ca,da,pa,ua,z,p,Ce,ha,ma,fa,Ke,ga,va,oe,wa,We,ba,ya,xa,Xe,_a,Ea,le,ka,je,Pa,Aa,Ia,Ye,Da,Ma,ce,Sa,ze,Na,Ta,Va,$e,Ca,Wa,de,ja,Be,za,Ba,Ha,Je,Ra,Ga,pe,Oa,He,qa,La,F,K,Tn,Ua,X,Vn,Fa,Ka,Xa,g,Qe,Ya,$a,Ja,Ze,Qa,Za,Re,et,en,tn,tt,an,nn,y,at,k,sn,nt,Y,rn,st,B,on,rt,$,ht,H,J,ln,cn,x,it,Cn,dn,Ge,pn,mt,un,ot,hn,mn,ue,fn,ft,he,lt,gn,vn,Wn;return{c(){P=a("body"),m=a("div"),D=a("div"),G=a("img"),At=i(),fe=a("div"),ge=a("img"),It=i(),ve=a("div"),we=a("img"),Dt=i(),be=a("div"),ye=a("img"),Mt=i(),xe=a("div"),_e=a("img"),St=i(),O=a("div"),ee=a("a"),Nt=c("❮"),Tt=i(),te=a("a"),Vt=c("❯"),Ct=i(),v=a("div"),Ee=a("span"),Wt=i(),ke=a("span"),jt=i(),Pe=a("span"),zt=i(),Ae=a("span"),Bt=i(),Ie=a("span"),Ht=i(),Le=a("script"),Rt=c(`letpopup = document.getElementById("popup");

      function openPopup(){
          popup.classList.add("open-popup");
      }

      function closePopup(){
        popup.classList.remove("open-popup");
      }
      

        var imageno =1;
        displayimg(imageno);

        function nextimg(n){
            displayimg(imageno += n)
        }

        function currentSlide(n){
            displayimg(imageno = n)
        }

        function displayimg(n){
            var i;
            var image = document.getElementsByClassName("image");
            var dots = document.getElementsByClassName("dot");

            if(n > image.length){
                imageno = 1;
            }

            if(n < 1){
                imageno = image.length;
            }

            for(i=0; i < image.length; i++){
                image[i].style.display = "none";
            }

            for(i=0; i < dots.length; i++){
                dots[i].className = dots[i].className.replace(" active", "");
            }

            image[imageno - 1].style.display ="block";
            dots[imageno - 1].className += " active";

        }`),ct=i(),q=a("main"),Ue=a("link"),Gt=i(),Fe=a("style"),Ot=c(`body {font-family: "Times New Roman", Georgia, Serif;}
h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display";
  letter-spacing: 5px;
}

.container{
    width: 100%;
    height: 50vh;
    position: relative;
}

.container .image img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}

.container .button{
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 5;
}

.container .button a{
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    vertical-align: middle;
    align-items: center;
    cursor: pointer;
    color: white;
    background: rgba(0, 0, 0, 0.8);
    font-size: 20px;
    user-select: none;
}

.dots{
    text-align: center;
    position: absolute;
    bottom: 8px;
    left: 45%;
    padding: 5px 10px;
    height: 30px;
    border-radius: 15px;
}

.dot{
    cursor: pointer;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #bbb;
    display: inline-block;
    margin: 0 2px;
}

.active, .dot:hover{
    background: yellow;
}

.popup{
  width: 400px;
  background:#fff;
  border-radius:6px;
  position:absolute;
  top:0;
  left:50%;
  transform:translate(-50%, -50%) scale(0.1);
  text-align:center;
  padding:0 30px 30px;
  color:#333;
  visibility: hidden;
  transition: transform 0.4s, top 0.4s;
}

.open-popup{
  visibility: visible;
  top:50%;
  transform:translate(-50%, -50%) scale(1);
}

.popup img{
  width:100px;
  margin-top:-50px;
  border-radius: 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)
}

.popup h2{
  font-size:38px;
  font-weight:500;
  margin: 30px 0 10px;
}

.popup button{
  width:100%;
  margin-top:50px;
  padding: 10px 0;
  background: #6fd649;
  color:#fff;
  border:0;
  outline:none;
  font-size:18px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2)
}`),dt=i(),ae=a("div"),T=a("div"),ne=a("a"),qt=c("dartW"),Lt=i(),M=a("div"),se=a("a"),Ut=c("About"),Ft=i(),re=a("a"),Kt=c("Menu"),Xt=i(),ie=a("a"),Yt=c("Contact"),pt=i(),E=a("header"),V=a("img"),$t=i(),De=a("div"),Me=a("h1"),Jt=c("dartW"),ut=i(),f=a("div"),C=a("div"),L=a("div"),W=a("img"),Qt=i(),j=a("img"),Zt=i(),b=a("div"),Se=a("h1"),ea=c("About dartW"),ta=a("br"),aa=i(),Ne=a("h5"),na=c("Tradition since 1889"),sa=i(),U=a("p"),ra=c("dartW was founded in Taormina and is based on fresh herbs, organic plants and an exceptional selection of meat and fish. dartW has continuously won many international awards for its cuisine, whose success the trio believes comes from using selected "),Te=a("span"),ia=c("Mediterranean"),oa=c(" products, a thorough research and testing process for the dishes, and the excitement for constant change and innovation."),la=i(),Ve=a("p"),ca=c("Mateu Casañas, Oriol Castro and Eduard Xatruch show no signs of stopping, with a genuine desire to share their passion for food and their ingrained enjoyment of the Mediterranean. With constant new ideas and a willingness to change and adapt to their environment, the only thing they are determined to do is improve their kitchen to be the best it can be."),da=i(),pa=a("hr"),ua=i(),z=a("div"),p=a("div"),Ce=a("h1"),ha=c("Our Menu"),ma=a("br"),fa=i(),Ke=a("h4"),ga=c("Filetto di Tonno"),va=i(),oe=a("p"),wa=c("Seared tuna fillet (300gr approx.), with a garnish of baked baby potatoes, sautéed asparagus, Kalamata olives, cherry tomatoes, mussels, and Cassis liquid reduction. "),We=a("span"),ba=c("-  20€"),ya=a("br"),xa=i(),Xe=a("h4"),_a=c("Tagliata di Picaña"),Ea=i(),le=a("p"),ka=c("A typical plate of Picaña slices beef (300gr approx.) served on a bed of rocket salad and delicious slices of Grana Padano D.O.P. "),je=a("span"),Pa=c("-  35€"),Aa=a("br"),Ia=i(),Ye=a("h4"),Da=c("Tagliatelle all' Aragosta"),Ma=i(),ce=a("p"),Sa=c("Homemade fresh pasta served with the star of the crustaceans, Caribbean lobster, bisque sauce with chardonnay, cherry tomato, and fresh basil. "),ze=a("span"),Na=c("-  20€"),Ta=a("br"),Va=i(),$e=a("h4"),Ca=c("Mediterránea"),Wa=i(),de=a("p"),ja=c('Pure Mediterranean ingredients; romaine lettuce, kalamata olives, tomato, cucumber, grapefruit, feta cheese, and "tzatziki" dressing (Greek yogurt, mint, cucumber, and lemon). '),Be=a("span"),za=c("-  17€"),Ba=a("br"),Ha=i(),Je=a("h4"),Ra=c("Aragosta"),Ga=i(),pe=a("p"),Oa=c("Salsa de tomate, mozzarella, langosta marinada con hierbas finas, pimiento asado y tomate deshidratados. "),He=a("span"),qa=c("-  24€"),La=i(),F=a("div"),K=a("img"),Ua=i(),X=a("img"),Fa=i(),Ka=a("hr"),Xa=i(),g=a("div"),Qe=a("h1"),Ya=c("Contact"),$a=a("br"),Ja=i(),Ze=a("p"),Qa=c("We offer full-service for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us."),Za=i(),Re=a("p"),et=a("b"),en=c("dartW, 12 Via dei Due Allori Lazio Rom"),tn=i(),tt=a("p"),an=c("You can also contact us by phone 072-534 78 18 or email dartW@resturant.com, or you can send us a message here:"),nn=i(),y=a("form"),at=a("p"),k=a("input"),sn=i(),nt=a("p"),Y=a("input"),rn=i(),st=a("p"),B=a("input"),on=i(),rt=a("p"),$=a("input"),ht=i(),H=a("div"),J=a("button"),ln=c("submit"),cn=i(),x=a("div"),it=a("img"),dn=i(),Ge=a("h2"),pn=c("Thank you "),mt=c(me[0]),un=i(),ot=a("p"),hn=c("We have successfully received your information"),mn=i(),ue=a("button"),fn=c("OK"),ft=i(),he=a("footer"),lt=a("p"),gn=c("monday - friday 17-02 | sunday - saturday 17-03"),this.h()},l(l){P=n(l,"BODY",{});var h=r(P);m=n(h,"DIV",{class:!0});var w=r(m);D=n(w,"DIV",{class:!0});var jn=r(D);G=n(jn,"IMG",{src:!0,alt:!0}),jn.forEach(s),At=o(w),fe=n(w,"DIV",{class:!0});var zn=r(fe);ge=n(zn,"IMG",{src:!0,alt:!0}),zn.forEach(s),It=o(w),ve=n(w,"DIV",{class:!0});var Bn=r(ve);we=n(Bn,"IMG",{src:!0,alt:!0}),Bn.forEach(s),Dt=o(w),be=n(w,"DIV",{class:!0});var Hn=r(be);ye=n(Hn,"IMG",{src:!0,alt:!0}),Hn.forEach(s),Mt=o(w),xe=n(w,"DIV",{class:!0});var Rn=r(xe);_e=n(Rn,"IMG",{src:!0,alt:!0}),Rn.forEach(s),St=o(w),O=n(w,"DIV",{class:!0});var gt=r(O);ee=n(gt,"A",{onclick:!0,class:!0});var Gn=r(ee);Nt=d(Gn,"❮"),Gn.forEach(s),Tt=o(gt),te=n(gt,"A",{onclick:!0,class:!0});var On=r(te);Vt=d(On,"❯"),On.forEach(s),gt.forEach(s),Ct=o(w),v=n(w,"DIV",{class:!0});var S=r(v);Ee=n(S,"SPAN",{class:!0,onclick:!0}),r(Ee).forEach(s),Wt=o(S),ke=n(S,"SPAN",{class:!0,onclick:!0}),r(ke).forEach(s),jt=o(S),Pe=n(S,"SPAN",{class:!0,onclick:!0}),r(Pe).forEach(s),zt=o(S),Ae=n(S,"SPAN",{class:!0,onclick:!0}),r(Ae).forEach(s),Bt=o(S),Ie=n(S,"SPAN",{class:!0,onclick:!0}),r(Ie).forEach(s),S.forEach(s),w.forEach(s),Ht=o(h),Le=n(h,"SCRIPT",{});var qn=r(Le);Rt=d(qn,`letpopup = document.getElementById("popup");

      function openPopup(){
          popup.classList.add("open-popup");
      }

      function closePopup(){
        popup.classList.remove("open-popup");
      }
      

        var imageno =1;
        displayimg(imageno);

        function nextimg(n){
            displayimg(imageno += n)
        }

        function currentSlide(n){
            displayimg(imageno = n)
        }

        function displayimg(n){
            var i;
            var image = document.getElementsByClassName("image");
            var dots = document.getElementsByClassName("dot");

            if(n > image.length){
                imageno = 1;
            }

            if(n < 1){
                imageno = image.length;
            }

            for(i=0; i < image.length; i++){
                image[i].style.display = "none";
            }

            for(i=0; i < dots.length; i++){
                dots[i].className = dots[i].className.replace(" active", "");
            }

            image[imageno - 1].style.display ="block";
            dots[imageno - 1].className += " active";

        }`),qn.forEach(s),h.forEach(s),ct=o(l),q=n(l,"MAIN",{});var vt=r(q);Ue=n(vt,"LINK",{rel:!0,href:!0}),Gt=o(vt),Fe=n(vt,"STYLE",{});var Ln=r(Fe);Ot=d(Ln,`body {font-family: "Times New Roman", Georgia, Serif;}
h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display";
  letter-spacing: 5px;
}

.container{
    width: 100%;
    height: 50vh;
    position: relative;
}

.container .image img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
}

.container .button{
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 5;
}

.container .button a{
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    vertical-align: middle;
    align-items: center;
    cursor: pointer;
    color: white;
    background: rgba(0, 0, 0, 0.8);
    font-size: 20px;
    user-select: none;
}

.dots{
    text-align: center;
    position: absolute;
    bottom: 8px;
    left: 45%;
    padding: 5px 10px;
    height: 30px;
    border-radius: 15px;
}

.dot{
    cursor: pointer;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #bbb;
    display: inline-block;
    margin: 0 2px;
}

.active, .dot:hover{
    background: yellow;
}

.popup{
  width: 400px;
  background:#fff;
  border-radius:6px;
  position:absolute;
  top:0;
  left:50%;
  transform:translate(-50%, -50%) scale(0.1);
  text-align:center;
  padding:0 30px 30px;
  color:#333;
  visibility: hidden;
  transition: transform 0.4s, top 0.4s;
}

.open-popup{
  visibility: visible;
  top:50%;
  transform:translate(-50%, -50%) scale(1);
}

.popup img{
  width:100px;
  margin-top:-50px;
  border-radius: 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)
}

.popup h2{
  font-size:38px;
  font-weight:500;
  margin: 30px 0 10px;
}

.popup button{
  width:100%;
  margin-top:50px;
  padding: 10px 0;
  background: #6fd649;
  color:#fff;
  border:0;
  outline:none;
  font-size:18px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2)
}`),Ln.forEach(s),vt.forEach(s),dt=o(l),ae=n(l,"DIV",{class:!0});var Un=r(ae);T=n(Un,"DIV",{class:!0,style:!0});var wt=r(T);ne=n(wt,"A",{href:!0,class:!0});var Fn=r(ne);qt=d(Fn,"dartW"),Fn.forEach(s),Lt=o(wt),M=n(wt,"DIV",{class:!0});var Oe=r(M);se=n(Oe,"A",{href:!0,class:!0});var Kn=r(se);Ut=d(Kn,"About"),Kn.forEach(s),Ft=o(Oe),re=n(Oe,"A",{href:!0,class:!0});var Xn=r(re);Kt=d(Xn,"Menu"),Xn.forEach(s),Xt=o(Oe),ie=n(Oe,"A",{href:!0,class:!0});var Yn=r(ie);Yt=d(Yn,"Contact"),Yn.forEach(s),Oe.forEach(s),wt.forEach(s),Un.forEach(s),pt=o(l),E=n(l,"HEADER",{class:!0,style:!0,id:!0});var bt=r(E);V=n(bt,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),$t=o(bt),De=n(bt,"DIV",{class:!0});var $n=r(De);Me=n($n,"H1",{class:!0});var Jn=r(Me);Jt=d(Jn,"dartW"),Jn.forEach(s),$n.forEach(s),bt.forEach(s),ut=o(l),f=n(l,"DIV",{class:!0,style:!0});var N=r(f);C=n(N,"DIV",{class:!0,id:!0});var yt=r(C);L=n(yt,"DIV",{class:!0});var xt=r(L);W=n(xt,"IMG",{src:!0,class:!0,alt:!0,width:!0,height:!0}),Qt=o(xt),j=n(xt,"IMG",{src:!0,class:!0,alt:!0,width:!0,height:!0}),xt.forEach(s),Zt=o(yt),b=n(yt,"DIV",{class:!0});var R=r(b);Se=n(R,"H1",{class:!0});var Qn=r(Se);ea=d(Qn,"About dartW"),Qn.forEach(s),ta=n(R,"BR",{}),aa=o(R),Ne=n(R,"H5",{class:!0});var Zn=r(Ne);na=d(Zn,"Tradition since 1889"),Zn.forEach(s),sa=o(R),U=n(R,"P",{class:!0});var _t=r(U);ra=d(_t,"dartW was founded in Taormina and is based on fresh herbs, organic plants and an exceptional selection of meat and fish. dartW has continuously won many international awards for its cuisine, whose success the trio believes comes from using selected "),Te=n(_t,"SPAN",{class:!0});var es=r(Te);ia=d(es,"Mediterranean"),es.forEach(s),oa=d(_t," products, a thorough research and testing process for the dishes, and the excitement for constant change and innovation."),_t.forEach(s),la=o(R),Ve=n(R,"P",{class:!0});var ts=r(Ve);ca=d(ts,"Mateu Casañas, Oriol Castro and Eduard Xatruch show no signs of stopping, with a genuine desire to share their passion for food and their ingrained enjoyment of the Mediterranean. With constant new ideas and a willingness to change and adapt to their environment, the only thing they are determined to do is improve their kitchen to be the best it can be."),ts.forEach(s),R.forEach(s),yt.forEach(s),da=o(N),pa=n(N,"HR",{}),ua=o(N),z=n(N,"DIV",{class:!0,id:!0});var Et=r(z);p=n(Et,"DIV",{class:!0});var u=r(p);Ce=n(u,"H1",{class:!0});var as=r(Ce);ha=d(as,"Our Menu"),as.forEach(s),ma=n(u,"BR",{}),fa=o(u),Ke=n(u,"H4",{});var ns=r(Ke);ga=d(ns,"Filetto di Tonno"),ns.forEach(s),va=o(u),oe=n(u,"P",{class:!0});var wn=r(oe);wa=d(wn,"Seared tuna fillet (300gr approx.), with a garnish of baked baby potatoes, sautéed asparagus, Kalamata olives, cherry tomatoes, mussels, and Cassis liquid reduction. "),We=n(wn,"SPAN",{class:!0});var ss=r(We);ba=d(ss,"-  20€"),ss.forEach(s),wn.forEach(s),ya=n(u,"BR",{}),xa=o(u),Xe=n(u,"H4",{});var rs=r(Xe);_a=d(rs,"Tagliata di Picaña"),rs.forEach(s),Ea=o(u),le=n(u,"P",{class:!0});var bn=r(le);ka=d(bn,"A typical plate of Picaña slices beef (300gr approx.) served on a bed of rocket salad and delicious slices of Grana Padano D.O.P. "),je=n(bn,"SPAN",{class:!0});var is=r(je);Pa=d(is,"-  35€"),is.forEach(s),bn.forEach(s),Aa=n(u,"BR",{}),Ia=o(u),Ye=n(u,"H4",{});var os=r(Ye);Da=d(os,"Tagliatelle all' Aragosta"),os.forEach(s),Ma=o(u),ce=n(u,"P",{class:!0});var yn=r(ce);Sa=d(yn,"Homemade fresh pasta served with the star of the crustaceans, Caribbean lobster, bisque sauce with chardonnay, cherry tomato, and fresh basil. "),ze=n(yn,"SPAN",{class:!0});var ls=r(ze);Na=d(ls,"-  20€"),ls.forEach(s),yn.forEach(s),Ta=n(u,"BR",{}),Va=o(u),$e=n(u,"H4",{});var cs=r($e);Ca=d(cs,"Mediterránea"),cs.forEach(s),Wa=o(u),de=n(u,"P",{class:!0});var xn=r(de);ja=d(xn,'Pure Mediterranean ingredients; romaine lettuce, kalamata olives, tomato, cucumber, grapefruit, feta cheese, and "tzatziki" dressing (Greek yogurt, mint, cucumber, and lemon). '),Be=n(xn,"SPAN",{class:!0});var ds=r(Be);za=d(ds,"-  17€"),ds.forEach(s),xn.forEach(s),Ba=n(u,"BR",{}),Ha=o(u),Je=n(u,"H4",{});var ps=r(Je);Ra=d(ps,"Aragosta"),ps.forEach(s),Ga=o(u),pe=n(u,"P",{class:!0});var _n=r(pe);Oa=d(_n,"Salsa de tomate, mozzarella, langosta marinada con hierbas finas, pimiento asado y tomate deshidratados. "),He=n(_n,"SPAN",{class:!0});var us=r(He);qa=d(us,"-  24€"),us.forEach(s),_n.forEach(s),u.forEach(s),La=o(Et),F=n(Et,"DIV",{class:!0});var kt=r(F);K=n(kt,"IMG",{src:!0,class:!0,alt:!0,style:!0}),Ua=o(kt),X=n(kt,"IMG",{src:!0,class:!0,alt:!0,style:!0}),kt.forEach(s),Et.forEach(s),Fa=o(N),Ka=n(N,"HR",{}),Xa=o(N),g=n(N,"DIV",{class:!0,id:!0});var A=r(g);Qe=n(A,"H1",{});var hs=r(Qe);Ya=d(hs,"Contact"),hs.forEach(s),$a=n(A,"BR",{}),Ja=o(A),Ze=n(A,"P",{});var ms=r(Ze);Qa=d(ms,"We offer full-service for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us."),ms.forEach(s),Za=o(A),Re=n(A,"P",{class:!0});var fs=r(Re);et=n(fs,"B",{});var gs=r(et);en=d(gs,"dartW, 12 Via dei Due Allori Lazio Rom"),gs.forEach(s),fs.forEach(s),tn=o(A),tt=n(A,"P",{});var vs=r(tt);an=d(vs,"You can also contact us by phone 072-534 78 18 or email dartW@resturant.com, or you can send us a message here:"),vs.forEach(s),nn=o(A),y=n(A,"FORM",{action:!0,target:!0});var Q=r(y);at=n(Q,"P",{});var ws=r(at);k=n(ws,"INPUT",{class:!0,type:!0,placeholder:!0,name:!0}),ws.forEach(s),sn=o(Q),nt=n(Q,"P",{});var bs=r(nt);Y=n(bs,"INPUT",{class:!0,type:!0,placeholder:!0,name:!0}),bs.forEach(s),rn=o(Q),st=n(Q,"P",{});var ys=r(st);B=n(ys,"INPUT",{class:!0,type:!0,placeholder:!0,name:!0}),ys.forEach(s),on=o(Q),rt=n(Q,"P",{});var xs=r(rt);$=n(xs,"INPUT",{class:!0,type:!0,placeholder:!0,name:!0}),xs.forEach(s),Q.forEach(s),A.forEach(s),N.forEach(s),ht=o(l),H=n(l,"DIV",{class:!0});var Pt=r(H);J=n(Pt,"BUTTON",{type:!0,class:!0,onclick:!0});var _s=r(J);ln=d(_s,"submit"),_s.forEach(s),cn=o(Pt),x=n(Pt,"DIV",{class:!0,id:!0});var Z=r(x);it=n(Z,"IMG",{src:!0}),dn=o(Z),Ge=n(Z,"H2",{});var En=r(Ge);pn=d(En,"Thank you "),mt=d(En,me[0]),En.forEach(s),un=o(Z),ot=n(Z,"P",{});var Es=r(ot);hn=d(Es,"We have successfully received your information"),Es.forEach(s),mn=o(Z),ue=n(Z,"BUTTON",{type:!0,onclick:!0});var ks=r(ue);fn=d(ks,"OK"),ks.forEach(s),Z.forEach(s),Pt.forEach(s),ft=o(l),he=n(l,"FOOTER",{class:!0});var Ps=r(he);lt=n(Ps,"P",{});var As=r(lt);gn=d(As,"monday - friday 17-02 | sunday - saturday 17-03"),As.forEach(s),Ps.forEach(s),this.h()},h(){I(G.src,kn="https://static.standard.co.uk/2022/06/29/15/newFile-9.jpg?width=1200")||t(G,"src",kn),t(G,"alt",""),t(D,"class","image"),I(ge.src,Pn="https://www.travelandleisure.com/thmb/c-nuaEqUffHAByhV7Ls6iDEeXwc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-header-atrani-italy-amalfi-coast-AMALFITOWNS0223-c516bc91bb434e19b5ec6e2fb50cb9eb.jpg")||t(ge,"src",Pn),t(ge,"alt",""),t(fe,"class","image"),I(we.src,An="https://cdn.vox-cdn.com/thumbor/Xsto91sF4Cq3-j0D0-e9w-jUe64=/0x0:6720x4480/1200x675/filters:focal(2823x1703:3897x2777)/cdn.vox-cdn.com/uploads/chorus_image/image/71783393/shutterstock_1927957934.0.jpg")||t(we,"src",An),t(we,"alt",""),t(ve,"class","image"),I(ye.src,In="https://images.ctfassets.net/3s5io6mnxfqz/1rpUj0lbF4UraDAIt1eXjr/fbfa8beb2fde3a2686020165e983a7af/AdobeStock_357911175_2.jpeg")||t(ye,"src",In),t(ye,"alt",""),t(be,"class","image"),I(_e.src,Dn="https://www.theculinaryacademy.org/wp-content/uploads/2020/02/shutterstock_562219663.jpg")||t(_e,"src",Dn),t(_e,"alt",""),t(xe,"class","image"),t(ee,"onclick","nextimg(-1)"),t(ee,"class","prev"),t(te,"onclick","nextimg(1)"),t(te,"class","next"),t(O,"class","button"),t(Ee,"class","dot"),t(Ee,"onclick","currentSlide(1)"),t(ke,"class","dot"),t(ke,"onclick","currentSlide(2)"),t(Pe,"class","dot"),t(Pe,"onclick","currentSlide(3)"),t(Ae,"class","dot"),t(Ae,"onclick","currentSlide(4)"),t(Ie,"class","dot"),t(Ie,"onclick","currentSlide(5)"),t(v,"class","dots"),t(m,"class","container"),t(Ue,"rel","stylesheet"),t(Ue,"href","https://www.w3schools.com/w3css/4/w3.css"),t(ne,"href","#home"),t(ne,"class","w3-bar-item w3-button"),t(se,"href","#about"),t(se,"class","w3-bar-item w3-button"),t(re,"href","#menu"),t(re,"class","w3-bar-item w3-button"),t(ie,"href","#contact"),t(ie,"class","w3-bar-item w3-button"),t(M,"class","w3-left"),t(T,"class","w3-bar w3-white w3-padding w3-card"),qe(T,"letter-spacing","3px"),t(ae,"class","w3-top"),t(V,"class","w3-image"),I(V.src,Mn="https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/11/bigstock-Grilled-Marbled-Meat-Steak-Fil-268244788.jpg")||t(V,"src",Mn),t(V,"alt","stek Catering"),t(V,"width","1600"),t(V,"height","800"),t(Me,"class","w3-xxlarge w3-text-white"),t(De,"class","w3-display-bottomleft w3-padding-large w3-opacity"),t(E,"class","w3-display-container w3-content w3-wide"),qe(E,"max-width","1600px"),qe(E,"min-width","500px"),t(E,"id","home"),I(W.src,Sn="https://www.luxuryrestaurantawards.com/wp-content/uploads/sites/9/2019/02/SoleRestaurant_2018.03.21A-13.jpg")||t(W,"src",Sn),t(W,"class","w3-round w3-image w3-opacity-min"),t(W,"alt","resturangen"),t(W,"width","600"),t(W,"height","750"),I(j.src,Nn="https://www.rucksack.se/wp-content/uploads/2019/05/Sestri-Levante-utsikt.jpg")||t(j,"src",Nn),t(j,"class","w3-round w3-image w3-opacity-min"),t(j,"alt","resturangen"),t(j,"width","600"),t(j,"height","750"),t(L,"class","w3-col m6 w3-padding-large"),t(Se,"class","w3-center"),t(Ne,"class","w3-center"),t(Te,"class","w3-tag w3-light-grey"),t(U,"class","w3-large"),t(Ve,"class","w3-large w3-text-grey"),t(b,"class","w3-col m6 w3-padding-large"),t(C,"class","w3-row w3-padding-64"),t(C,"id","about"),t(Ce,"class","w3-center"),t(We,"class","w3-light-grey"),t(oe,"class","w3-text-grey"),t(je,"class","w3-light-grey"),t(le,"class","w3-text-grey"),t(ze,"class","w3-light-grey"),t(ce,"class","w3-text-grey"),t(Be,"class","w3-light-grey"),t(de,"class","w3-text-grey"),t(He,"class","w3-light-grey"),t(pe,"class","w3-text-grey"),t(p,"class","w3-col l6 w3-padding-large"),I(K.src,Tn="https://www.lux-review.com/wp-content/uploads/2020/08/caviar.jpg")||t(K,"src",Tn),t(K,"class","w3-round w3-image w3-opacity-min"),t(K,"alt","Menu"),qe(K,"width","100%"),I(X.src,Vn="https://4.bp.blogspot.com/--uywtjwW7U4/T6JHxuT8DJI/AAAAAAAADYI/zou3OeUM2RM/s1600/Ska%CC%88rbra%CC%88da+stor+(1+av+1).jpg")||t(X,"src",Vn),t(X,"class","w3-round w3-image w3-opacity-min"),t(X,"alt","Menu"),qe(X,"width","100%"),t(F,"class","w3-col l6 w3-padding-large"),t(z,"class","w3-row w3-padding-64"),t(z,"id","menu"),t(Re,"class","w3-text-blue-grey w3-large"),t(k,"class","w3-input w3-padding-16"),t(k,"type","text"),t(k,"placeholder","Name"),k.required=!0,t(k,"name","Name"),t(Y,"class","w3-input w3-padding-16"),t(Y,"type","number"),t(Y,"placeholder","How many people"),Y.required=!0,t(Y,"name","People"),t(B,"class","w3-input w3-padding-16"),t(B,"type","datetime-local"),t(B,"placeholder","Date and time"),B.required=!0,t(B,"name","date"),B.value="2020-11-16T20:00",t($,"class","w3-input w3-padding-16"),t($,"type","text"),t($,"placeholder","Message \\ Special requirements"),$.required=!0,t($,"name","Message"),t(y,"action","/action_page.php"),t(y,"target","_blank"),t(g,"class","w3-container w3-padding-64"),t(g,"id","contact"),t(f,"class","w3-content"),qe(f,"max-width","1100px"),t(J,"type","submit"),t(J,"class","btn"),t(J,"onclick","openPopup()"),I(it.src,Cn="https://static.vecteezy.com/system/resources/thumbnails/017/197/461/small/green-check-mark-icon-on-transparent-background-free-png.png")||t(it,"src",Cn),t(ue,"type","button"),t(ue,"onclick","closePopup()"),t(x,"class","popup"),t(x,"id","popup"),t(H,"class","container"),t(he,"class","w3-center w3-light-grey w3-padding-32")},m(l,h){_(l,P,h),e(P,m),e(m,D),e(D,G),e(m,At),e(m,fe),e(fe,ge),e(m,It),e(m,ve),e(ve,we),e(m,Dt),e(m,be),e(be,ye),e(m,Mt),e(m,xe),e(xe,_e),e(m,St),e(m,O),e(O,ee),e(ee,Nt),e(O,Tt),e(O,te),e(te,Vt),e(m,Ct),e(m,v),e(v,Ee),e(v,Wt),e(v,ke),e(v,jt),e(v,Pe),e(v,zt),e(v,Ae),e(v,Bt),e(v,Ie),e(P,Ht),e(P,Le),e(Le,Rt),_(l,ct,h),_(l,q,h),e(q,Ue),e(q,Gt),e(q,Fe),e(Fe,Ot),_(l,dt,h),_(l,ae,h),e(ae,T),e(T,ne),e(ne,qt),e(T,Lt),e(T,M),e(M,se),e(se,Ut),e(M,Ft),e(M,re),e(re,Kt),e(M,Xt),e(M,ie),e(ie,Yt),_(l,pt,h),_(l,E,h),e(E,V),e(E,$t),e(E,De),e(De,Me),e(Me,Jt),_(l,ut,h),_(l,f,h),e(f,C),e(C,L),e(L,W),e(L,Qt),e(L,j),e(C,Zt),e(C,b),e(b,Se),e(Se,ea),e(b,ta),e(b,aa),e(b,Ne),e(Ne,na),e(b,sa),e(b,U),e(U,ra),e(U,Te),e(Te,ia),e(U,oa),e(b,la),e(b,Ve),e(Ve,ca),e(f,da),e(f,pa),e(f,ua),e(f,z),e(z,p),e(p,Ce),e(Ce,ha),e(p,ma),e(p,fa),e(p,Ke),e(Ke,ga),e(p,va),e(p,oe),e(oe,wa),e(oe,We),e(We,ba),e(p,ya),e(p,xa),e(p,Xe),e(Xe,_a),e(p,Ea),e(p,le),e(le,ka),e(le,je),e(je,Pa),e(p,Aa),e(p,Ia),e(p,Ye),e(Ye,Da),e(p,Ma),e(p,ce),e(ce,Sa),e(ce,ze),e(ze,Na),e(p,Ta),e(p,Va),e(p,$e),e($e,Ca),e(p,Wa),e(p,de),e(de,ja),e(de,Be),e(Be,za),e(p,Ba),e(p,Ha),e(p,Je),e(Je,Ra),e(p,Ga),e(p,pe),e(pe,Oa),e(pe,He),e(He,qa),e(z,La),e(z,F),e(F,K),e(F,Ua),e(F,X),e(f,Fa),e(f,Ka),e(f,Xa),e(f,g),e(g,Qe),e(Qe,Ya),e(g,$a),e(g,Ja),e(g,Ze),e(Ze,Qa),e(g,Za),e(g,Re),e(Re,et),e(et,en),e(g,tn),e(g,tt),e(tt,an),e(g,nn),e(g,y),e(y,at),e(at,k),Is(k,me[0]),e(y,sn),e(y,nt),e(nt,Y),e(y,rn),e(y,st),e(st,B),e(y,on),e(y,rt),e(rt,$),_(l,ht,h),_(l,H,h),e(H,J),e(J,ln),e(H,cn),e(H,x),e(x,it),e(x,dn),e(x,Ge),e(Ge,pn),e(Ge,mt),e(x,un),e(x,ot),e(ot,hn),e(x,mn),e(x,ue),e(ue,fn),_(l,ft,h),_(l,he,h),e(he,lt),e(lt,gn),vn||(Wn=Ts(k,"input",me[1]),vn=!0)},p(l,[h]){h&1&&k.value!==l[0]&&Is(k,l[0]),h&1&&Vs(mt,l[0])},i:Ds,o:Ds,d(l){l&&s(P),l&&s(ct),l&&s(q),l&&s(dt),l&&s(ae),l&&s(pt),l&&s(E),l&&s(ut),l&&s(f),l&&s(ht),l&&s(H),l&&s(ft),l&&s(he),vn=!1,Wn()}}}function Ws(me,P,m){let D="";function G(){D=this.value,m(0,D)}return[D,G]}class zs extends Ms{constructor(P){super(),Ss(this,P,Ws,Cs,Ns,{})}}export{zs as default};
