import { fetchData } from './js/pixabay-api';
import {
  renderGallery,
  showLoader,
  hideLoader,
  clearGallery,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import warningIcon from './img/warning-icon.svg';
import cautionIcon from './img/caution-icon.svg';

const form = document.querySelector('.form');
const input = document.querySelector("input[name='search-text']");
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
const perPage = 15;

form.addEventListener('submit', async event => {
  event.preventDefault();
  query = input.value.trim();
  if (query === '') {
    iziToast.show({
      title: 'Caution',
      titleColor: '#fff',
      titleSize: '16px',
      titleLineHeight: '1.5',

      message: `Not valid data`,
      messageColor: '#fff',
      messageSize: '16px',
      messageLineHeight: '1.5',

      backgroundColor: '#ffa000',
      iconUrl: cautionIcon,

      progressBar: false,
      position: 'topRight',
    });
    return;
  }
  page = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await fetchData(query, page, perPage);
    if (data.hits.length === 0) {
      iziToast.show({
        message: `Sorry, there are no images matching <br/> your search query. Please try again!`,
        messageColor: '#fafafb',
        messageSize: '16px',
        messageLineHeight: '20px',

        backgroundColor: '#ef4040',
        iconUrl: warningIcon,

        progressBar: false,
        position: 'topRight',
      });
      return;
    }
    renderGallery(data.hits);
    if (page * perPage < data.totalHits) showLoadMoreButton();
  } catch (error) {
    iziToast.show({
      message: 'Something went wrong. Please try again later.',
      messageColor: '#fafafb',
      messageSize: '16px',
      messageLineHeight: '20px',

      backgroundColor: '#ef4040',
      iconUrl: warningIcon,

      progressBar: false,
      position: 'topRight',
    });
  } finally {
    hideLoader();
    form.reset();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();
  try {
    const data = await fetchData(query, page, perPage);
    renderGallery(data.hits, true);
    if (page * perPage >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.show({
        message: `We're sorry, but you've reached the end of search results.`,
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '20px',

        backgroundColor: '#ffa000',
        iconUrl: cautionIcon,

        progressBar: false,
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.show({
      message: 'Something went wrong. Please try again later.',
      messageColor: '#fafafb',
      messageSize: '16px',
      messageLineHeight: '20px',

      backgroundColor: '#ef4040',
      iconUrl: warningIcon,

      progressBar: false,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
