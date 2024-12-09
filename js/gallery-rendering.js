import {showErrorMessage} from './util.js';
import {renderPhotos} from './photo-rendering.js';
import {getData} from './api.js';
import {filterChange, showGalleryFilters} from './gallery-filters.js';


const bootstrap = async () => {
  try {
    const data = await getData();
    renderPhotos(data);
    filterChange(data);
    showGalleryFilters();
  } catch(error) {
    showErrorMessage(error.message);
  }
};

bootstrap();
