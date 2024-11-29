import './util.js';
import './photo-comments.js';
import {createDescriptionArray} from './photo-discriptions.js';
import {renderPhotos} from './photo-rendering.js';
import {showPost} from './photo-detail-view.js';

const picturesContainer = document.querySelector('.pictures');
const similarPost = createDescriptionArray();

renderPhotos(picturesContainer, similarPost);

console.log(similarPost[0]);

showPost(similarPost[0]);
