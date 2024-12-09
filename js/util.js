//  ОБЩИЕ ФУНКЦИИ

const ARRAY_MIN_INDEX = 0;
const REMOVE_MESSAGE_TIMEOUT = 5000;

//Получение случайного целого числа в заданном интервале, включительно.
const getRandomInt = (min, max) => {
  if (min >= 0 && max > 0 && min !== max && max > min) {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);

    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  return null;
};

//Получить случайный элемент массива
const getRandomArrayItem = (array) => array[getRandomInt(ARRAY_MIN_INDEX, array.length - 1)];

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

export {getRandomInt, getRandomArrayItem, toggleClass, showErrorMessage};
