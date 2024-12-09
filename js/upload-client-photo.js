const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadInput = document.querySelector('.img-upload__input');
const uploadPreview = document.querySelector('.img-upload__preview > img');
const effectsPreviews = document.querySelectorAll('.effects__preview');

uploadInput.addEventListener('change', () => {
  const file = uploadInput.files[0];
  const fileUrl = URL.createObjectURL(file);
  const fileName = file.name.toLowerCase();
  const isMatches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (isMatches) {
    uploadPreview.src = fileUrl;
    effectsPreviews.forEach((effectsPreview) => {
      effectsPreview.style.backgroundImage = `url("${fileUrl}")`;
    });
  }
});
