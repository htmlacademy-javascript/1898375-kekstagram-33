const COMMENTS_STEP = 5;

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const pictureDesctiption = bigPicture.querySelector('.social__caption');
const closeButton = bigPicture.querySelector ('.big-picture__cancel');
const socialComment = bigPicture.querySelector ('.social__comment');
const commentsList = bigPicture.querySelector ('.social__comments');
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

  commentsList.append(commentFragment);
};

// Закрытие и показ поста
const openBigPicture = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeBigPicture = () => {
  commentsCount = COMMENTS_STEP;

  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

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

const hideCommentsCount = () => {
  socialCommentsCount.classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
};

const showBigPicture = (picture) => {
  currentComments = picture.comments.slice();

  hideCommentsCount();
  fillBigPicture(picture);
  renderComments();
  openBigPicture();

  document.addEventListener('keydown', onEscKeydown);
};

closeButton.addEventListener('click', onCloseButtonClick);

export {showBigPicture};
