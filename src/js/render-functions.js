import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const renderImages = images => {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(image => {
      return `
        <li>
          <a href="${image.largeImageURL}" target="_blank">
            <img src="${image.webformatURL}" alt="${image.tags}" />
          </a>
          <div class="info">
            <div class="stat-item">
              <p class="label">Likes</p>
              <p class="value">${image.likes}</p>
            </div>
            <div class="stat-item">
              <p class="label">Views</p>
              <p class="value">${image.views}</p>
            </div>
            <div class="stat-item">
              <p class="label">Comments</p>
              <p class="value">${image.comments}</p>
            </div>
            <div class="stat-item">
              <p class="label">Downloads</p>
              <p class="value">${image.downloads}</p>
            </div>
          </div>
        </li>
      `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
};

export function toggleLoadingIndicator(isLoading, disableSearchBtn = false) {
  const loader = document.querySelector('.loader');
  const searchBtn = document.querySelector('.sub-btn');
  const loadMoreBtn = document.querySelector('.sub-loader');

  if (isLoading) {
    loader.classList.remove('hidden');
  } else {
    loader.classList.add('hidden');
  }

  searchBtn.disabled = disableSearchBtn;
  loadMoreBtn.disabled = disableSearchBtn;
}
