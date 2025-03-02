import{a as L,i as m,S as g}from"./assets/vendor-YT4DRQk6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const y=async(a,r=1)=>{const o="48797096-f4883239ab22667ebb957e7d3",t="https://pixabay.com/api/";try{console.log("Запит до API:",t,{params:{key:o,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:40}});const e=await L.get(t,{params:{key:o,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:40}});return console.log("Відповідь від API:",e.data),e.data}catch(e){throw console.error("Помилка при отриманні зображень:",e.response?e.response.data:e.message),e}},b=a=>{const r=document.querySelector(".gallery"),o=a.map(t=>`
        <li>
          <a href="${t.largeImageURL}" target="_blank">
            <img src="${t.webformatURL}" alt="${t.tags}" />
          </a>
          <div class="info">
            <div class="stat-item">
              <p class="label">Likes</p>
              <p class="value">${t.likes}</p>
            </div>
            <div class="stat-item">
              <p class="label">Views</p>
              <p class="value">${t.views}</p>
            </div>
            <div class="stat-item">
              <p class="label">Comments</p>
              <p class="value">${t.comments}</p>
            </div>
            <div class="stat-item">
              <p class="label">Downloads</p>
              <p class="value">${t.downloads}</p>
            </div>
          </div>
        </li>
      `).join("");r.insertAdjacentHTML("beforeend",o)};function c(a,r=!1){const o=document.querySelector(".loader"),t=document.querySelector(".sub-btn"),e=document.querySelector(".sub-loader");a?o.classList.remove("hidden"):o.classList.add("hidden"),t.disabled=r,e.disabled=r}let d=1,h="",p=0;document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".gallery"),r=document.querySelector(".form"),o=document.querySelector(".form-input"),t=document.querySelector(".sub-loader"),e=document.querySelector(".end-message"),s=document.querySelector(".sub-btn");if(!r||!o||!t||!e||!s)return;r.addEventListener("submit",async l=>{if(l.preventDefault(),h=o.value.trim(),!h){m.error({message:"Sorry, no images match your search. Please try again!",position:"topRight",timeout:5e3}),c(!1);return}a.innerHTML="",d=1,t.classList.add("hidden"),e.classList.add("hidden"),s.disabled=!0,c(!0);try{const n=await y(h,d);p=n.totalHits;const u=n.hits;if(u.length===0){m.error({message:"Sorry, no images match your search. Please try again!",position:"topRight",timeout:3e3}),c(!1);return}await new Promise(v=>setTimeout(v,1e3)),b(u),new g(".gallery a").refresh(),u.length<p?t.classList.remove("hidden"):(t.classList.add("hidden"),e.classList.remove("hidden"),e.textContent="We're sorry, but you've reached the end of search results."),i()}catch{m.error({message:"Sorry, no images match your search. Please try again!",position:"topRight",timeout:3e3})}finally{c(!1),s.disabled=!1}}),t.addEventListener("click",async()=>{d+=1,c(!0),t.classList.add("hidden");try{const n=(await y(h,d)).hits;if(n.length===0||d*40>=p){t.classList.add("hidden"),e.classList.remove("hidden"),e.textContent="We're sorry, but you've reached the end of search results.";return}await new Promise(f=>setTimeout(f,1e3)),b(n),new g(".gallery a").refresh(),d*40>=p?(t.classList.add("hidden"),e.classList.remove("hidden"),e.textContent="We're sorry, but you've reached the end of search results."):t.classList.remove("hidden"),i()}catch{m.error({message:"Sorry, no images match your search. Please try again!",position:"topRight",timeout:3e3})}finally{c(!1)}});function i(){const l=document.querySelectorAll(".gallery li");if(l.length>0){const n=l[0].offsetHeight;window.scrollBy({top:n*2,left:0,behavior:"smooth"})}}});
//# sourceMappingURL=index.js.map
