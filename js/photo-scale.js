const ScaleSettings = {
  MIN_VALUE: 25,
  MAX_VALUE: 100,
  STEP: 25
};

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const uploadPhoto = document.querySelector('.img-upload__preview > img');

const updatePhotoScale = (scale) => {
  scaleControlValue.value = `${scale}%`;
  uploadPhoto.style.transform = `scale(${scale / 100})`;
};

const onScaleChange = (change) => {
  let scale = parseInt(scaleControlValue.value, 10) + change;

  if (scale > ScaleSettings.MAX_VALUE) {
    scale = ScaleSettings.MAX_VALUE;
  }

  if (scale < ScaleSettings.MIN_VALUE) {
    scale = ScaleSettings.MIN_VALUE;
  }

  updatePhotoScale(scale);
};

const setPhotoScale = () => {
  updatePhotoScale(ScaleSettings.MAX_VALUE);

  scaleControlSmaller.addEventListener('click', () => onScaleChange(-ScaleSettings.STEP));
  scaleControlBigger.addEventListener('click', () => onScaleChange(ScaleSettings.STEP));

};

setPhotoScale();

const resetPhotoScale = () => {
  updatePhotoScale(ScaleSettings.MAX_VALUE);
};

export {resetPhotoScale};
