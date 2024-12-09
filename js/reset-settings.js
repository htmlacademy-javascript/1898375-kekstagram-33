import {pristine} from './validate-upload-form.js';
import {resetPhotoScale} from './photo-scale.js';

const uploadPhotoForm = document.querySelector('.img-upload__form');
const effectLevel = document.querySelector('.img-upload__effect-level');
const effectNoneFilter = document.querySelector('#effect-none');
const uploadPhoto = document.querySelector('.img-upload__preview > img');

const resetSettings = () => {
  pristine.reset();
  uploadPhotoForm.reset();
  resetPhotoScale();
  uploadPhoto.style.transform = 'scale(1)';
  uploadPhoto.style.filter = 'none';
  effectLevel.classList.add('hidden');
  effectNoneFilter.checked = true;
};

export {resetSettings};
