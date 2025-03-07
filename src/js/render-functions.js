export function imageTemplate(images) {
  return images.hits
    .map(
      image => `<li class="gallery-item">
      <a class="gallery-link" href=${image.largeImageURL}>
        <img
          class="gallery-image"
          src=${image.webformatURL}
          alt=${image.tags}
        />
      </a>
      <div class="description-wrap">
  <div class="imgs-properties">
    <p class="imgs-properties-name">Likes</p>
    <p class="imgs-properties-value">${image.likes}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Views</p>
    <p class="imgs-properties-value">${image.views}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Comments</p>
    <p class="imgs-properties-value">${image.comments}</p>
  </div>
  <div class="imgs-properties">
    <p class="imgs-properties-name">Downloads</p>
    <p class="imgs-properties-value">${image.downloads}</p>
  </div>
</div>
    </li>
  `
    )
    .join('');
}