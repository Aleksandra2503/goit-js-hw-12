import{a as m,i as l,S as p}from"./assets/vendor-YT4DRQk6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=async(o,r=1)=>{const n="https://pixabay.com/api/";try{return(await m.get(n,{params:{key:"48797096-f4883239ab22667ebb957e7d3",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:9}})).data.hits}catch(s){throw console.error("Error fetching images:",s),s}},d=o=>{const r=document.querySelector(".loader");o?r.classList.remove("hidden"):r.classList.add("hidden")},g=o=>{const r=document.querySelector(".gallery");if(r.innerHTML="",o.length===0){l.error({message:"Sorry, no images match your search. Please try again!",position:"topRight",timeout:5e3,transitionIn:"fadeIn",transitionOut:"fadeOut"});return}const n=o.map(({webformatURL:s,largeImageURL:e,tags:t,likes:a,views:i,comments:c,downloads:u})=>`
        <li>
          <a href="${e}" class="gallery-item">
            <img src="${s}" alt="${t}" />
          </a>
          <div class="info">
            <div class="stat-item">
              <p class="label">Likes</p>
              <p class="value">${a}</p>
            </div>
            <div class="stat-item">
              <p class="label">Views</p>
              <p class="value">${i}</p>
            </div>
            <div class="stat-item">
              <p class="label">Comments</p>
              <p class="value">${c}</p>
            </div>
            <div class="stat-item">
              <p class="label">Downloads</p>
              <p class="value">${u}</p>
            </div>
          </div>
        </li>
      `).join("");r.insertAdjacentHTML("beforeend",n)};document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".gallery"),r=document.querySelector(".form"),n=document.querySelector(".form-input");!r||!n||r.addEventListener("submit",async s=>{s.preventDefault();const e=n.value.trim();if(!e){l.error({message:"Sorry, no images match your search. Please try again!",position:"topRight",timeout:2e3,transitionIn:"fadeIn",transitionOut:"fadeOut"});return}o.innerHTML="",d(!0);try{const t=await f(e);if(t.length===0){l.error({message:"Sorry, no images match your search. Please try again!",position:"topRight",timeout:2e3,transitionIn:"fadeIn",transitionOut:"fadeOut"});return}await new Promise(u=>setTimeout(u,2e3)),g(t);const a=new p(".gallery a");a.refresh();const i=document.querySelector(".next-btn"),c=document.querySelector(".prev-btn");i&&i.addEventListener("click",()=>{a.next()}),c&&c.addEventListener("click",()=>{a.prev()})}catch(t){l.error({message:"Something went wrong, please try again later.",position:"topRight",timeout:2e3,transitionIn:"fadeIn",transitionOut:"fadeOut"}),console.error("Error fetching images:",t)}finally{d(!1)}},{passive:!1})});
//# sourceMappingURL=index.js.map
