const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const uploadPhoto = document.querySelector('.img-upload__preview > img');

const scaleSettings = {
  MIN_VALUE: 25,
  MAX_VALUE: 100,
  STEP: 25
};

const updatePhotoScale = (scale) => {
  scaleControlValue.value = `${scale}%`;
  uploadPhoto.style.transform = `scale(${scale / 100})`;
};

const onScaleChange = (change) => {
  let scale = parseInt(scaleControlValue.value, 10) + change;

  if (scale > scaleSettings.MAX_VALUE) {
    scale = scaleSettings.MAX_VALUE;
  }

  if (scale < scaleSettings.MIN_VALUE) {
    scale = scaleSettings.MIN_VALUE;
  }

  updatePhotoScale(scale);
};

const setPhotoScale = () => {
  updatePhotoScale(scaleSettings.MAX_VALUE);

  scaleControlSmaller.addEventListener('click', () => onScaleChange(-scaleSettings.STEP));
  scaleControlBigger.addEventListener('click', () => onScaleChange(scaleSettings.STEP));

};

setPhotoScale();

const resetPhotoScale = () => {
  updatePhotoScale(scaleSettings.MAX_VALUE);
};

export {resetPhotoScale};
