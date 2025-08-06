import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

export const createGallery = images => {
  console.log(images);

  const dataImage = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        id,
      }) => {
        return `<li class="photo-card " id="${id}" >
      <a href="${largeImageURL}">
        <img src="${webformatURL}" width="360" height="200" alt="${tags}" loading="lazy" />
        <div class="info">
          <div class="info-item">
            <h2>Likes</h2>
            <p>${likes}</p>
          </div>
          <div class="info-item">
            <h2>Views</h2>
            <p>${views}</p>
          </div>
          <div class="info-item">
            <h2>Comments</h2>
            <p>${comments}</p>
          </div>          
          <div class="info-item">
            <h2>Downloads</h2>
            <p>${downloads}</p>
          </div>
        </div>
      </a>
    </li>`;
      }
    )
    .join('');

  gallery.innerHTML = dataImage;
  lightbox.refresh();
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};

export const showLoader = () => {
  gallery.innerHTML =
    '<div class="loader">Loading images, please wait...</div>';
};

export const hideLoader = () => {
  gallery.innerHTML = '';
};
