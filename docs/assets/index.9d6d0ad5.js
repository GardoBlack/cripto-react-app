import{j as h,n as c,r as d,R as v,a as C}from"./vendor.31f1c47f.js";const w=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}};w();const e=h.exports.jsx,o=h.exports.jsxs,b=h.exports.Fragment,F=c.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`,N=({children:s})=>e(F,{children:s}),L=c.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`,I=c.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`,k=(s,n)=>{const[i,a]=d.exports.useState("");return[i,()=>o(b,{children:[e(L,{children:s}),o(I,{value:i,onChange:t=>a(t.target.value),children:[e("option",{value:"",children:"Select"}),n.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})]})]},E=[{id:"USD",nombre:"USD"},{id:"MXN",nombre:"Peso Mexicano"},{id:"EUR",nombre:"Euro"},{id:"GBP",nombre:"Libra Esterlina"}],P=c.input`
    background-color: green;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color:#009f4d;
        cursor: pointer;
        color: yellow;
        border: red solid 5px;
    }
`,j=({setMonedas:s})=>{const[n,i]=d.exports.useState([]),[a,r]=d.exports.useState(!1),[t,l]=k("Select Currency",E),[p,u]=k("Select Cripto",n);return d.exports.useEffect(()=>{(async()=>{const S=(await(await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD")).json()).Data.map(y=>({id:y.CoinInfo.Name,nombre:y.CoinInfo.FullName}));i(S)})()},[]),o(b,{children:[a&&e(N,{children:"Please Select a Coin and currency"}),o("form",{onSubmit:f=>{if(f.preventDefault(),[t,p].includes("")){r(!0);return}r(!1),s({moneda:t,criptomoneda:p})},children:[e(l,{}),e(u,{}),e(P,{type:"submit",value:"Submit"})]})]})},D=c.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`,M=c.img`
    display: block;
    width: 120px;
`,m=c.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`,A=c.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`,R=({resultado:s})=>{const{PRICE:n,HIGHDAY:i,LOWDAY:a,CHANGEPCT24HOUR:r,IMAGEURL:t,LASTUPDATE:l}=s;return o(D,{children:[e(M,{src:`https://cryptocompare.com/${t}`,alt:"imagen cripto"}),o("div",{children:[o(A,{children:["The Current Value: ",e("span",{children:n})]}),o(m,{children:["Hight/Day: ",e("span",{children:i})]}),o(m,{children:["Low/Day: ",e("span",{children:a})]}),o(m,{children:["Change 24 hour: ",e("span",{children:r})]}),o(m,{children:["Last update: ",e("span",{children:l})]})]})]})};const z=()=>o("div",{className:"sk-circle",children:[e("div",{className:"sk-circle1 sk-child"}),e("div",{className:"sk-circle2 sk-child"}),e("div",{className:"sk-circle3 sk-child"}),e("div",{className:"sk-circle4 sk-child"}),e("div",{className:"sk-circle5 sk-child"}),e("div",{className:"sk-circle6 sk-child"}),e("div",{className:"sk-circle7 sk-child"}),e("div",{className:"sk-circle8 sk-child"}),e("div",{className:"sk-circle9 sk-child"}),e("div",{className:"sk-circle10 sk-child"}),e("div",{className:"sk-circle11 sk-child"}),e("div",{className:"sk-circle12 sk-child"})]});var O="/assets/btc3.0d2a4dbe.png";const T=c.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`,U=c.img`
  max-width: 600px;
  width: 90%;
  margin: 100px auto 0 auto;
  display: block;
`,$=c.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: green;
    display: block;
    margin: 10px auto 0 auto;
  }
`;function H(){const[s,n]=d.exports.useState({}),[i,a]=d.exports.useState({}),[r,t]=d.exports.useState(!1);return d.exports.useEffect(()=>{Object.keys(s).length>0&&(async()=>{t(!0),a({});const{moneda:p,criptomoneda:u}=s,g=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${u}&tsyms=${p}`,x=await(await fetch(g)).json();a(x.DISPLAY[u][p]),t(!1)})()},[s]),o(T,{children:[e(U,{src:O,alt:"imagenes criptomonedas"}),o("div",{children:[e($,{children:"Cripto Currency Market Value"}),e(j,{setMonedas:n}),r&&e(z,{}),i.PRICE&&e(R,{resultado:i})]})]})}v.render(e(C.StrictMode,{children:e(H,{})}),document.getElementById("root"));
