import './util.js';
import './photo-comments.js';
import {createDescriptionArray} from './photo-discriptions.js';
import {renderPhotos} from './photo-rendering.js';
import './photo-detail-view.js';
import './photo-load.js';
import './validate-upload-form.js';
import './photo-scale.js';
import './photo-filters.js';


const picturesContainer = document.querySelector('.pictures');
const similarPost = createDescriptionArray();

renderPhotos(picturesContainer, similarPost);
