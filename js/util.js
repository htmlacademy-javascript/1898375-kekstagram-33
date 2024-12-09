const REMOVE_MESSAGE_TIMEOUT = 5000;
const RERENDER_TIMEOUT = 500;

// Если класс есть - удалить, если его нет - добавить

const toggleClass = (element, className = '') => {
  if (element) {
    element.classList.toggle(className);
  }
};

//Показ сообщения об ошибке

const errorTemplate = document.querySelector('#data-error').content;

const showErrorMessage = (message) => {
  const errorArea = errorTemplate.cloneNode(true);
  if (message) {
    errorArea.querySelector('.data-error__title').textContent = message;
  }
  document.body.append(errorArea);

  const errorLoadDataArea = document.body.querySelector('.data-error');

  setTimeout (() => {
    errorLoadDataArea.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
};

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

const debounce = (callback, timeoutDelay = RERENDER_TIMEOUT) => {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
};

export {toggleClass, showErrorMessage,shuffleArray, debounce};
