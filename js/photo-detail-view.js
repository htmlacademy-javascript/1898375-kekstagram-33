const picturesContainer = document.querySelector('.pictures');
const post = document.querySelector('.big-picture');
const closeButton = post.querySelector ('.big-picture__cancel');

const closePost = () => {
  closeButton.addEventListener ('click', () => {
    post.classList.add('hidden');
  });

  document.addEventListener ('keydown', (evt) => {
    if (evt.key === 'Escape') {
      post.classList.add('hidden');
    }
  });
};

const hideCommentsCount = () => {
  post.querySelector('.social__comment-count').classList.add('hidden');
  post.querySelector('.comments-loader').classList.add('hidden');
};

const fillPost = (postPrevie) => {
  post.querySelector('.big-picture__img').children[0].src = postPrevie.url;
  post.querySelector('.likes-count').textContent = postPrevie.likes;
  post.querySelector('.social__comment-total-count').textContent = postPrevie.comments.length;
  post.querySelector('.social__caption').textContent = postPrevie.description;

};


const showPost = (postPrevie) => {
  closePost();
  fillPost(postPrevie);
  hideCommentsCount();
  picturesContainer.addEventListener('click', () => {
    post.classList.remove('hidden');
  });
};


export {showPost};
