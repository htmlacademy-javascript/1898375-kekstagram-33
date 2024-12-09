import {toggleClass} from './util.js';
import {sendData} from './api.js';
import {pristine} from './validate-upload-form.js';
import {resetSettings} from './reset-settings.js';
import {appendNotification} from './notification.js';

const uploadPhotoContainer = document.querySelector('.img-upload');
const uploadPhotoForm = uploadPhotoContainer.querySelector('.img-upload__form');
const imgUploadInput = uploadPhotoContainer.querySelector('.img-upload__input');
const uploadOverlay = uploadPhotoContainer.querySelector('.img-upload__overlay');
const closeButton = uploadPhotoContainer.querySelector('.img-upload__cancel');
const hashtags = uploadPhotoContainer.querySelector('.text__hashtags');
const description = uploadPhotoContainer.querySelector('.text__description');
const submitButton = uploadPhotoContainer.querySelector('.img-upload__submit');

const templateSuccess = document.querySelector('#success').content;
const templateError = document.querySelector('#error').content;

const overlayControl = () => {
  toggleClass(uploadOverlay, 'hidden');
  toggleClass(document.body, 'modal-open');
};

const closeOverlay = () => {
  overlayControl();

  resetSettings();

  document.removeEventListener('keydown', onEscKeydown);
};

function onEscKeydown (evt) {
  if(evt.key === 'Escape') {
    if (document.activeElement !== description && document.activeElement !== hashtags) {
      closeOverlay();
    }
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

//Блокировка кнопки при отправке

const submitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...',
};

const disableButton = (text) => {
  submitButton.disabled = true;
  submitButton.disabled = text;
};

const enableButton = (text) => {
  submitButton.disabled = false;
  submitButton.disabled = text;
};

// Отправка формы

const sendFormData = async (form) => {
  const isValid = pristine.validate();

  if (isValid) {
    disableButton(submitButtonText.SENDING);

    try {
      await sendData (new FormData(form));
      appendNotification(templateSuccess, () => closeOverlay());
    } catch (error) {
      appendNotification(templateError);
    } finally {
      console.log('работаем');
      enableButton(submitButtonText.IDLE);
    }
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  sendFormData(evt.target);
};

uploadPhotoForm.addEventListener('submit', onFormSubmit);
