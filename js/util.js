//  ОБЩИЕ ФУНКЦИИ

const ARRAY_MIN_INDEX = 0;

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

export {getRandomInt, getRandomArrayItem};
