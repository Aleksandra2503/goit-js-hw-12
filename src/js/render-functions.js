import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  navText: ['<<', '>>'],
});

export function showLoader() {
  loader.classList.remove('visually-hidden');
}

export function hideLoader() {
  loader.classList.add('visually-hidden');
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('visually-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('visually-hidden');
}

function scrollPage() {
  const { height } = gallery.firstElementChild.getBoundingClientRect();
  window.scrollBy({ top: height * 2, behavior: 'smooth' });
}

export function renderGallery(images, shouldScroll = false) {
  const markup = images
    .map(
      image => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${image.webformatURL}" 
                    alt="${image.tags}" 
                    // width="360" 
                    // height="200" 
                />
            </a>
            <div class="image-info-wrapper">
                <div class="image-info-container">
                    <span class="image-info-container-type">Likes</span>
                    <span class="image-info-container-value">${image.likes}</span>                
                </div>

                <div class="image-info-container">
                    <span class="image-info-container-type">Views</span>
                    <span class="image-info-container-value">${image.views}</span>                
                </div>

                <div class="image-info-container">
                    <span class="image-info-container-type">Comments</span>
                    <span class="image-info-container-value">${image.comments}</span>                
                </div>

                <div class="image-info-container">
                    <span class="image-info-container-type">Downloads</span>
                    <span class="image-info-container-value">${image.downloads}</span>                
                </div>
            </div>
        </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
  if (shouldScroll) {
    scrollPage();
  }
}
