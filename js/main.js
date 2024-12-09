import {showErrorMessage} from './util.js';
import './photo-comments.js';
import './photo-discriptions.js';
import {renderPhotos} from './photo-rendering.js';
import './photo-detail-view.js';
import './photo-upload-form.js';
import './validate-upload-form.js';
import './photo-scale.js';
import './photo-filters.js';
import {getData} from './api.js';
import './reset-settings.js';
import './notification.js';

const picturesContainer = document.querySelector('.pictures');

const bootstrap = async () => {
  try {
    const data = await getData();
    renderPhotos(picturesContainer, data);
  } catch(error) {
    showErrorMessage(error.message);
  }
};

bootstrap();


