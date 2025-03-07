import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImages } from './js/pixabay-api.js';
import { imageTemplate } from './js/render-functions.js';

const refs = {
  formInput: document.querySelector('.js-create-form'),
  imgList: document.querySelector('.img-list'),
  loader: document.querySelector('.loader'),
  btnLoadMore: document.querySelector('.js-btn-load'),
};

const params = {
  userValue: '',
  page: 1,
  total: 100,
};

let lightbox = new SimpleLightbox('.img-list a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

refs.formInput.addEventListener('submit', async e => {
  e.preventDefault();
  showSpinner();
  params.userValue = e.target.elements.imgTitle.value.trim();
  params.page = 1;

  refs.imgList.innerHTML = '';

  try {
    const response = await searchImages(params.userValue, params.page);

    if (response.data.hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    renderImgs(response.data);
    params.total = response.data.totalHits;
    checkBtnStatus();
    hideSpinner();
  } catch (error) {
    refs.imgList.innerHTML = '';
    iziToast.error('error', console.log(error));
  }
  e.target.reset();
});

function renderImgs(images) {
  const markup = imageTemplate(images);
  refs.imgList.innerHTML = markup;
  lightbox.refresh();
}

refs.btnLoadMore.addEventListener('click', async e => {
  params.page += 1;
  showSpinner();
  checkBtnStatus();

  const response = await searchImages(params.userValue, params.page);
  const markup = imageTemplate(response.data);
  refs.imgList.insertAdjacentHTML('beforeend', markup);
  hideSpinner();
  scrollPage();
  lightbox.refresh();
});

function showLoadMoreBtn() {
  refs.btnLoadMore.classList.remove('visually-hidden');
}

function hideLoadMoreBtn() {
  refs.btnLoadMore.classList.add('visually-hidden');
}

function checkBtnStatus() {
  const perPage = 40;
  const maxPage = Math.ceil(params.total / perPage);
  if (params.page >= maxPage) {
    hideLoadMoreBtn();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'bottomRight',
    });
  } else {
    showLoadMoreBtn();
  }
}

function showSpinner() {
  refs.loader.classList.remove('visually-hidden');
}

function hideSpinner() {
  refs.loader.classList.add('visually-hidden');
}

function scrollPage() {
  const info = refs.imgList.firstElementChild.getBoundingClientRect();
  const height = info.height;
  scrollBy({
    top: height * 3,
    left: 0,
    behavior: 'smooth',
  });
}