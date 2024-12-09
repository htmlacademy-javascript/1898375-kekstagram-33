import {debounce} from './util.js';
import {shuffleArray} from './util.js';
import {renderPhotos} from './photo-rendering.js';

const RANDOM_SHOWN_PHOTOS = 10;

const galleryFilters = document.querySelector('.img-filters');

const sortComments = (photos) => photos.sort((a, b) => b.comments.length - a.comments.length);

const removeActiveClass = () => {
  const activeFilter = galleryFilters.querySelector('.img-filters__button--active');
  if (activeFilter) {
    activeFilter.classList.remove('img-filters__button--active');
  }
};

const removePhotos = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
};

const Filters = {
  'filter-default': debounce((photos) => {
    removePhotos();
    renderPhotos(photos);
  }),
  'filter-random': debounce((photos) => {
    removePhotos();
    renderPhotos(shuffleArray(photos.slice()).slice(0, RANDOM_SHOWN_PHOTOS));
  }),
  'filter-discussed': debounce((photos) => {
    removePhotos();
    renderPhotos(sortComments(photos.slice()));
  }),
};

const filterChange = (photos) => {
  galleryFilters.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      removeActiveClass();
      evt.target.classList.add('img-filters__button--active');
      Filters[evt.target.id](photos);
    }
  });
};

const showGalleryFilters = () => {
  galleryFilters.classList.remove('img-filters--inactive');
};

export {filterChange, showGalleryFilters};
