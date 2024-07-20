import{i as f,S as y}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a={key:"44940230-793e0fb44ed42533ed2f4cfc1",image_type:"photo",orientation:"horizontal",safesearch:"true"};function g(i){const r=`https://pixabay.com/api/?key=${a.key}&q=${i}&image_type=${a.image_type}&orientation=${a.orientation}&safesearch=${a.safesearch}`;return fetch(r).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function m(){f.error({title:"Error",backgroundColor:"#ef4040",message:"Sorry, there are no images matching </br> your search query. Please, try again!",messageColor:"#fff",messageSize:"16px",position:"topRight"})}const c=document.querySelector(".js-markup-list");let h=new y(".js-markup-list a",{captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function x(i){return i.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:s,downloads:d})=>`
        <li class="gallery-item">
          <div class="list">
            <a class="gallery-link" href="${o}">
              <img
                class="gallery-image"
                src="${r}" 
                alt="${n}"
              />
            </a>
            <ul class="adds-list">
              <li class="info-item">
                <p class="text-item text-item-name">Likes</p>
                <p class="text-item">${e}</p>
              </li>
              <li class="info-item">
                <p class="text-item text-item-name">Views</p>
                <p class="text-item">${t}</p>
              </li>
              <li class="info-item">
                <p class="text-item text-item-name">Comments</p>
                <p class="text-item">${s}</p>
              </li>
              <li class="info-item">
                <p class="text-item text-item-name">Downloads</p>
                <p class="text-item">${d}</p>
              </li>
            </ul>
          </div>
        </li>`).join("")}function b(i){c.innerHTML="",c.insertAdjacentHTML("beforeend",x(i.hits)),h.refresh()}function u(){c.innerHTML=""}const l=document.querySelector(".loader"),p=document.querySelector(".my-input"),L=document.querySelector(".form-btn");L.addEventListener("click",S);function S(i){l.style.display="inline-block",i.preventDefault();let r=p.value.trim().replace(/\s+/g,"+").toLowerCase();if(r===""){l.style.display="none",u(),f.error({title:"Error",backgroundColor:"#ef4040",message:"Please enter a valid search query.",messageColor:"#fff",messageSize:"16px",position:"topRight"});return}console.log(r),g(r).then(o=>{l.style.display="none",o.totalHits===0?(m(),u()):b(o)}).catch(m).finally(()=>{p.value=""})}
//# sourceMappingURL=commonHelpers.js.map
