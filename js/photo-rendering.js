import {showBigPicture} from './photo-detail-view.js';

const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');
const similarPhotoGragment = document.createDocumentFragment();
const picturesContainer = document.querySelector('.pictures');

const renderPhotos = (similarPost) => {
  similarPost.forEach((post) => {
    const newElement = pictureTemplate.cloneNode(true);
    const newElementImg = newElement.querySelector('.picture__img');

    newElementImg.src = post.url;
    newElementImg.alt = post.description;
    newElement.querySelector('.picture__comments').textContent = post.comments.length;
    newElement.querySelector('.picture__likes').textContent = post.likes;


    const onNewElementClick = (evt) => {
      evt.preventDefault();

      showBigPicture(post);
    };

    newElement.addEventListener('click', onNewElementClick);

    similarPhotoGragment.append(newElement);
  });

  picturesContainer.append(similarPhotoGragment);
};

export {renderPhotos};
