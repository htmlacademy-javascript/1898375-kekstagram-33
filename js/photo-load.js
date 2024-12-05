import {toggleClass} from './util.js';

const imgUploadInput = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('.img-upload__cancel');

const overlayControl = () => {
  toggleClass(uploadOverlay, 'hidden');
  toggleClass(document.body, 'modal-open');
};

const closeOverlay = () => {
  overlayControl();

  imgUploadInput.reset();

  document.removeEventListener('keydown', onEscKeydown);
};

function onEscKeydown (evt) {
  if(evt.key === 'Escape') {
    closeOverlay();
  }
}

const onCloseButtonClick = () => {
  closeOverlay();
};

imgUploadInput.addEventListener('change', () => {
  overlayControl();

  document.addEventListener('keydown', onEscKeydown);
});

closeButton.addEventListener('click', onCloseButtonClick);
