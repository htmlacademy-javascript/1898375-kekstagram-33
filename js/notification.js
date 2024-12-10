const body = document.body;


const onCloseNotification = (evt) => {
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = existElement.querySelector('.success__button') || document.querySelector('.error__button');

  if (evt.target === existElement || evt.target === closeButton) {
    existElement.remove();
    body.removeEventListener('click', onCloseNotification);
  }
};

const onEscKeydown = (evt) => {
  evt.stopPropagation();

  const existElement = document.querySelector('.success') || document.querySelector('.error');

  if (evt.key === 'Escape') {
    existElement.remove();
    body.removeEventListener('keydown', onEscKeydown);
  }
};

const appendNotification = (template, trigger = null) => {
  trigger?.();

  const notificationNode = template.cloneNode(true);
  body.append(notificationNode);

  body.addEventListener('click', onCloseNotification);
  body.addEventListener('keydown', onEscKeydown);
};

export {appendNotification};
