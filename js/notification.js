const body = document.body;

const closeNotification = (evt) => {
  evt.stopPropagation();

  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = existElement.querySelector('.success__button') || document.querySelector('.error__button');

  if (evt.target === existElement || evt.target === closeButton || evt.key === 'Escape') {
    existElement.remove();
    body.removeEventListener('click', closeNotification);
    body.removeEventListener('keydown', closeNotification);
  }
};

const appendNotification = (template, trigger = null) => {
  trigger?.();

  const notificationNode = template.cloneNode(true);
  body.append(notificationNode);

  body.addEventListener('click', closeNotification);
  body.addEventListener('keydown', closeNotification);
};

export {appendNotification};
