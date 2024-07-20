import{a as S,i as f,S as w}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const n={key:"44940230-793e0fb44ed42533ed2f4cfc1",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15};async function y(e,r=1){const a=`https://pixabay.com/api/?key=${n.key}&q=${e}&image_type=${n.image_type}&orientation=${n.orientation}&safesearch=${n.safesearch}&per_page=${n.per_page}&page=${r}`;try{return(await S.get(a)).data}catch(s){throw new Error(s.response.status)}}function u(){f.error({title:"Error",backgroundColor:"#ef4040",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fff",messageSize:"16px",position:"topRight"})}const d=document.querySelector(".js-markup-list");let $=new w(".js-markup-list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function P(e){return e.map(({webformatURL:r,largeImageURL:a,tags:s,likes:t,views:o,comments:i,downloads:L})=>`
        <li class="gallery-item">
          <div class="list">
            <a class="gallery-link" href="${a}">
              <img
                class="gallery-image"
                src="${r}" 
                alt="${s}"
              />
            </a>
            <ul class="adds-list">
              <li class="info-item">
                <p class="text-item text-item-name">Likes</p>
                <p class="text-item">${t}</p>
              </li>
              <li class="info-item">
                <p class="text-item text-item-name">Views</p>
                <p class="text-item">${o}</p>
              </li>
              <li class="info-item">
                <p class="text-item text-item-name">Comments</p>
                <p class="text-item">${i}</p>
              </li>
              <li class="info-item">
                <p class="text-item text-item-name">Downloads</p>
                <p class="text-item">${L}</p>
              </li>
            </ul>
          </div>
        </li>`).join("")}function g(e){d.insertAdjacentHTML("beforeend",P(e.hits)),$.refresh(),v()}function h(){d.innerHTML=""}const v=async()=>{const e=document.querySelector(".gallery-item");if(e){const{height:r}=e.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}},m=document.querySelector(".loader"),b=document.querySelector(".my-input"),q=document.querySelector(".form-btn"),c=document.querySelector(".load-more-btn");let l=1,p="";c.addEventListener("click",async()=>{l+=1,await k()});q.addEventListener("click",async e=>{if(e.preventDefault(),m.style.display="inline-block",p=b.value.trim().replace(/\s+/g,"+").toLowerCase(),p===""){m.style.display="none",h(),f.error({title:"Error",backgroundColor:"#ef4040",message:"Please enter a valid search query.",messageColor:"#fff",messageSize:"16px",position:"topRight"});return}l=1,await C()});async function C(){try{const e=await y(p,l);m.style.display="none",h(),e.totalHits===0?(u(),c.style.display="none"):(g(e),x(e))}catch{u()}finally{b.value=""}}async function k(){try{const e=await y(p,l);g(e),x(e)}catch{u()}}function x(e){const r=Math.ceil(e.totalHits/15);l>=r?(c.style.display="none",f.info({title:"Info",backgroundColor:"#f39c12",message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",messageSize:"16px",position:"topRight"})):c.style.display="inline-block"}
//# sourceMappingURL=commonHelpers.js.map
