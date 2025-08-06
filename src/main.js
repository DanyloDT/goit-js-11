import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { clearGallery, createGallery, showLoader } from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const searchValue = e.target.elements['search-text'].value.trim();

  if (!searchValue) {
    alert('Please enter search query');
    return;
  }
  clearGallery();
  showLoader();

  getImagesByQuery(searchValue)
    .then(({ data }) => {
      if (!data.hits.length) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again.',
          position: 'topCenter',
        });
      }

      createGallery(data.hits);
    })
    .catch(error =>
      iziToast.error({
        message: `${error.message}`,
        position: 'topCenter',
      })
    )
    .finally(() => {
      form.reset();
      hideLoader();
    });
});
