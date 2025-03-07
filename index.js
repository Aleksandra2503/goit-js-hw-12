import{a as h,S as y,i as c}from"./assets/vendor-BlV6sHEg.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();function p(s,e){const t="https://pixabay.com"+"/api/",r={key:"48973939-644076cc1162f9ad5e5260876",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:40},a={Accept:"application/json"};return h.get(t,{params:r,headers:a})}function d(s){return s.hits.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href=${e.largeImageURL}>
        <img
          class="gallery-image"
          src=${e.webformatURL}
          alt=${e.tags}
        />
      </a>
      <div class="description-wrap">
  <div class="imgs-properties">
    <p class="imgs-properties-name">Likes</p>
    <p class="imgs-properties-value">${e.likes}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Views</p>
    <p class="imgs-properties-value">${e.views}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Comments</p>
    <p class="imgs-properties-value">${e.comments}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Downloads</p>
    <p class="imgs-properties-value">${e.downloads}</p>
  </div>
</div>
    </li>
  `).join("")}const i={formInput:document.querySelector(".js-create-form"),imgList:document.querySelector(".img-list"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".js-btn-load")},o={userValue:"",page:1,total:100};let u=new y(".img-list a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});i.formInput.addEventListener("submit",async s=>{s.preventDefault(),g(),o.userValue=s.target.elements.imgTitle.value.trim(),o.page=1,i.imgList.innerHTML="";try{const e=await p(o.userValue,o.page);if(e.data.hits.length===0){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(e.data),o.total=e.data.totalHits,m(),f()}catch(e){i.imgList.innerHTML="",c.error("error",console.log(e))}s.target.reset()});function L(s){const e=d(s);i.imgList.innerHTML=e,u.refresh()}i.btnLoadMore.addEventListener("click",async s=>{o.page+=1,g(),m();const e=await p(o.userValue,o.page),n=d(e.data);i.imgList.insertAdjacentHTML("beforeend",n),f(),w(),u.refresh()});function v(){i.btnLoadMore.classList.remove("visually-hidden")}function b(){i.btnLoadMore.classList.add("visually-hidden")}function m(){const e=Math.ceil(o.total/40);o.page>=e?(b(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"})):v()}function g(){i.loader.classList.remove("visually-hidden")}function f(){i.loader.classList.add("visually-hidden")}function w(){const e=i.imgList.firstElementChild.getBoundingClientRect().height;scrollBy({top:e*3,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
