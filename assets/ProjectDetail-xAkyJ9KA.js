import{p as j}from"./projects-Cz_ZGjiu.js";import{u as f,r as g,d as h,c as n,a as e,t as r,i as s,b as u,F as b,f as v,w as k,e as d,o as i,h as w}from"./index-eqAG-JJA.js";function x(){const a=f(),t=Number(a.params.id);return g(j.filter(l=>l.id===t)).value[0]}const y={class:"project-detail"},C=["src"],N={class:"project-description"},V={class:"project-info"},T=h({__name:"ProjectDetail",setup(a){const t=x(),c=()=>{window.open("https://github.com/example/project-one","_blank")};return(l,o)=>{const m=d("el-divider"),_=d("el-button");return i(),n("div",y,[e("header",null,[e("h1",null,r(s(t).title),1)]),e("img",{src:s(t).image,alt:"Project image",class:"project-image"},null,8,C),e("p",N,r(s(t).description),1),u(m),e("div",V,[o[0]||(o[0]=e("h3",null,"Technologies Used:",-1)),e("ul",null,[(i(!0),n(b,null,v(s(t).technologies,p=>(i(),n("li",{key:p},r(p),1))),128))])]),u(_,{type:"primary",onClick:c},{default:k(()=>o[1]||(o[1]=[w("View on GitHub")])),_:1})])}}});export{T as default};
