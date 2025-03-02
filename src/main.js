import { fetchImages } from './js/pixabay-api';
import { renderImages, toggleLoadingIndicator } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const form = document.querySelector('.form');
  const searchInput = document.querySelector('.form-input');

  if (!form || !searchInput) return;

  form.addEventListener(
    'submit',
    async event => {
      event.preventDefault();

      const searchQuery = searchInput.value.trim();

      if (!searchQuery) {
        iziToast.error({
          message: 'Sorry, no images match your search. Please try again!',
          position: 'topRight',
          timeout: 2000,
          transitionIn: 'fadeIn',
          transitionOut: 'fadeOut',
        });
        return;
      }

      gallery.innerHTML = '';
      toggleLoadingIndicator(true);

      try {
        const images = await fetchImages(searchQuery);

        if (images.length === 0) {
          iziToast.error({
            message: 'Sorry, no images match your search. Please try again!',
            position: 'topRight',
            timeout: 2000,
            transitionIn: 'fadeIn',
            transitionOut: 'fadeOut',
          });
          return;
        }

        await new Promise(resolve => setTimeout(resolve, 2000));

        renderImages(images);

        const lightbox = new SimpleLightbox('.gallery a');
        lightbox.refresh();

        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');

        if (nextButton) {
          nextButton.addEventListener('click', () => {
            lightbox.next();
          });
        }

        if (prevButton) {
          prevButton.addEventListener('click', () => {
            lightbox.prev();
          });
        }
      } catch (error) {
        iziToast.error({
          message: 'Something went wrong, please try again later.',
          position: 'topRight',
          timeout: 2000,
          transitionIn: 'fadeIn',
          transitionOut: 'fadeOut',
        });
        console.error('Error fetching images:', error);
      } finally {
        toggleLoadingIndicator(false);
      }
    },
    { passive: false }
  );
});
