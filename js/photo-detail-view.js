import {toggleClass} from './util.js';

const COMMENTS_STEP = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const pictureDesctiption = bigPicture.querySelector('.social__caption');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialComment = bigPicture.querySelector('.social__comment');
const commentsList = bigPicture.querySelector('.social__comments');
const loadButton = document.querySelector('.comments-loader');
const commentFragment = document.createDocumentFragment();

let commentsCount = COMMENTS_STEP;
let currentComments = [];

// Наполнение поста
const fillBigPicture = (picture) => {
  const {url, likes, description} = picture;

  bigPictureImg.src = url;
  likesCount.textContent = likes;
  pictureDesctiption.textContent = description;

};

const createComment = (comment) => {
  const newComment = socialComment.cloneNode(true);

  const avatar = newComment.querySelector('.social__picture');

  avatar.src = comment.avatar;
  avatar.alt = comment.name;
  newComment.querySelector('.social__text').textContent = comment.message;

  return newComment;
};


const renderComments = () => {
  commentsList.innerHTML = '';

  commentsCount = (commentsCount > currentComments.length) ? currentComments.length : commentsCount;

  socialCommentsCount.querySelector('.social__comment-shown-count').textContent = commentsCount;
  socialCommentsCount.querySelector('.social__comment-total-count').textContent = currentComments.length;

  for (let i = 0; i < commentsCount; i++) {
    commentFragment.append(createComment(currentComments[i]));
  }

  if (currentComments.length <= COMMENTS_STEP || commentsCount >= currentComments.length) {
    loadButton.classList.add('hidden');
  } else {
    loadButton.classList.remove('hidden');
  }

  commentsList.append(commentFragment);
};

const onLoadButtonClick = () => {
  commentsCount += COMMENTS_STEP;
  renderComments();
};

// Показать или закрыть пост
const toggleModal = () => {
  toggleClass(bigPicture, 'hidden');
  toggleClass(document.body, 'modal-open');
};

const closeBigPicture = () => {
  commentsCount = COMMENTS_STEP;

  toggleModal();

  document.removeEventListener('keydown', onEscKeydown);
};

function onEscKeydown (evt) {
  if(evt.key === 'Escape') {
    closeBigPicture();
  }
}

const onCloseButtonClick = () => {
  closeBigPicture();
};


const showBigPicture = (picture) => {
  currentComments = picture.comments.slice();

  fillBigPicture(picture);
  renderComments();
  toggleModal();

  document.addEventListener('keydown', onEscKeydown);
};

closeButton.addEventListener('click', onCloseButtonClick);
loadButton.addEventListener('click', onLoadButtonClick);

export {showBigPicture};
