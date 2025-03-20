import{a as v,S,i as l}from"./assets/vendor-KnZd4sWe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const q="49053882-7e244883c6f1c912e1433ba1a",P="https://pixabay.com/api/";async function h(r,t=1,i=15){const o={key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:i};try{return(await v.get(P,{params:o})).data}catch(e){throw new Error(`An error occurred: ${e.message}`)}}const g=document.querySelector(".gallery");let a=null;function y(r){const t=r.map(({webformatURL:i,largeImageURL:o,tags:e,likes:s,views:c,comments:b,downloads:w})=>`
            <li class="gallery-item">
                    <a href="${o}" class="gallery">
                    <img class="gallery-image" src="${i}" alt="${e}">
                    </a>
                

                <div class="info">
                    <p><b>Likes:</b> ${s}</p>
                    <p><b>Views:</b> ${c}</p>
                    <p><b>Comments:</b> ${b}</p>
                    <p><b>Downloads:</b> ${w}</p>
                </div>
            </li>
        `).join("");g.insertAdjacentHTML("beforeend",t),a?a.refresh():a=new S(".gallery a")}function $(){g.innerHTML="",a&&(a.destroy(),a=null)}const E=document.querySelector(".form"),O=document.querySelector(".gallery"),n=document.querySelector(".load-more"),d=document.querySelector(".loader");let u=1,m="",p=0;const f=15;n.classList.add("hidden");d.classList.add("hidden");E.addEventListener("submit",async r=>{if(r.preventDefault(),m=r.target.searchQuery.value.trim(),u=1,!m){l.warning({message:"Please enter a search query!"});return}$(),n.classList.add("hidden"),d.classList.remove("hidden");try{const t=await h(m,u,f);if(p=t.totalHits,t.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y(t.hits),L(t)}catch(t){l.error({message:t.message})}finally{d.classList.add("hidden")}});n.addEventListener("click",async()=>{u++,d.classList.remove("hidden"),n.classList.add("hidden");try{const r=await h(m,u,f);y(r.hits),L(r),A()}catch(r){l.error({message:r.message})}finally{d.classList.add("hidden")}});function L(r){u*f>=p?(l.info({message:"End of results"}),n.classList.add("hidden")):n.classList.remove("hidden")}function A(){const r=O.firstElementChild;if(r){const{height:t}=r.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
