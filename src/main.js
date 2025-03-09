import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;
const perPage = 40;

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  currentQuery = event.target.searchQuery.value.trim();
  currentPage = 1;
  
  if (!currentQuery) {
    iziToast.warning({ message: 'Please enter a search query!' });
    return;
  }

  clearGallery();
  loadMoreBtn.classList.add('hidden');
  loader.classList.remove('hidden');

  try {
    const data = await fetchImages(currentQuery, currentPage, perPage);
    totalHits = data.totalHits;
    
    if (data.hits.length === 0) {
      iziToast.error({ message: 'Sorry, there are no images matching your search query. Please try again!' });
      return;
    }
    
    renderImages(data.hits);
    checkLoadMore(data);
  } catch (error) {
    iziToast.error({ message: error.message });
  } finally {
    loader.classList.add('hidden');
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage++;
  loader.classList.remove('hidden');
  loadMoreBtn.classList.add('hidden');

  try {
    const data = await fetchImages(currentQuery, currentPage, perPage);
    renderImages(data.hits);
    checkLoadMore(data);
    smoothScroll();
  } catch (error) {
    iziToast.error({ message: error.message });
  } finally {
    loader.classList.add('hidden');
  }
});

function checkLoadMore(data) {
  const totalLoaded = currentPage * perPage;
  if (totalLoaded >= totalHits) {
    iziToast.info({ message: "End of results" });
    loadMoreBtn.classList.add('hidden');
  } else {
    loadMoreBtn.classList.remove('hidden');
  }
}

function smoothScroll() {
  const galleryItem = gallery.firstElementChild;
  if (galleryItem) {
    const { height } = galleryItem.getBoundingClientRect();
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth'
    });
  }
}



