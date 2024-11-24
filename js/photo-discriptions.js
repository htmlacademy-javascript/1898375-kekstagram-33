// СОЗДАНИЕ ОПИСАНИЯ К ФОТОГРАФИЯМ

import {getRandomInt, getRandomArrayItem} from './util.js';
import {createCommentArray} from './photo-comments.js';

const DESCRIPTION_NUMBER = 25;

const LIKES_MIN_NUMBER = 15;
const LIKES_MAX_NUMBER = 200;

const PHOTO_DESCRIPTIONS = [
  'Уникальный опыт который стоит пережить каждому',
  'Остались только незабываемые впечатления',
  'Не судите строго, я начинающий фотограф',
  'Так получилось лучше всего'
];

let photoID = 1;
let photoNumber = 1;

const createPhotoDescription = () => ({
  id: photoID++,
  url: `photos/${(photoNumber++)}.jpg` ,
  description: getRandomArrayItem(PHOTO_DESCRIPTIONS),
  likes: getRandomInt(LIKES_MIN_NUMBER, LIKES_MAX_NUMBER),
  comments: createCommentArray()
});

const createDescriptionArray = () => Array.from ({length: DESCRIPTION_NUMBER}, createPhotoDescription);

export {createDescriptionArray};
