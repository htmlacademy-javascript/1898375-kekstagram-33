const filterSlider = document.querySelector('.effect-level');
const sliderElement = filterSlider.querySelector('.effect-level__slider');
const sliderValue = filterSlider.querySelector('.effect-level__value');
const effectInput = document.querySelectorAll('.effects__radio');
const uploadPhotoPreview = document.querySelector('.img-upload__preview > img');

const Effects = [
  { filter: 'none' },
  { filter: 'grayscale', min: 0, max: 1, step: 0.1 },
  { filter: 'sepia', min: 0, max: 1, step: 0.1 },
  { filter: 'invert', min: 0, max: 100, step: 1, suffix: '%' },
  { filter: 'blur', min: 0, max: 3, step: 0.1, suffix: 'px' },
  { filter: 'brightness', min: 1, max: 3, step: 0.1 },
];

filterSlider.classList.add('hidden');

noUiSlider.create(sliderElement, {
  range: { min: 0, max: 1 },
  start: 1,
  step: 0.1,
  connect: 'lower',
});


const resetFilter = () => {
  filterSlider.classList.add('hidden');
  uploadPhotoPreview.className = '';
  uploadPhotoPreview.style.filter = '';
};

const applyEffect = (effect) => {
  if (effect.filter === 'none') {
    resetFilter();
    return;
  }

  filterSlider.classList.remove('hidden');

  sliderElement.noUiSlider.updateOptions({
    range: { min: effect.min, max: effect.max },
    step: effect.step,
    format: {
      to: (value) => (Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1)),
      from: (value) => parseFloat(value),
    }
  });

  sliderElement.noUiSlider.set(effect.max);

  sliderElement.noUiSlider.on('update', (values) => {
    const value = values[0];
    sliderValue.value = value;
    uploadPhotoPreview.style.filter = `${effect.filter}(${effect.suffix ? value + effect.suffix : value})`;
  });
};


const setFilters = () => {
  effectInput.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      uploadPhotoPreview.className = `effects__preview--${radio.value}`;
      applyEffect(Effects[index]);
    });
  });
};

setFilters();
