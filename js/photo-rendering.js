

const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');
const similarPhotoGragment = document.createDocumentFragment();

const renderPhotos = (container, similarPost) => {
  similarPost.forEach((post) => {
    const newElement = pictureTemplate.cloneNode(true);
    const newElementImg = newElement.querySelector('.picture__img');

    newElementImg.src = post.url;
    newElementImg.alt = post.description;
    newElement.querySelector('.picture__comments').textContent = post.comments.length;
    newElement.querySelector('.picture__likes').textContent = post.likes;

    similarPhotoGragment.append(newElement);
  });

  container.append(similarPhotoGragment);
};

export {renderPhotos};
