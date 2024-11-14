const DESCRIPTION_NUMBER = 25;

const LIKES_MIN_NUMBER = 15;
const LIKES_MAX_NUMBER = 200;

const AVATAR_MIN_NUMBER = 1;
const AVATAR_MAX_NUMBER = 6;

const COMMETS_MIN_NUMBER = 0;
const COMMETS_MAX_NUMBER = 30;

const ARRAY_MIN_INDEX = 0;

const PHOTO_DESCRIPTIONS = [
  'Уникальный опыт который стоит пережить каждому',
  'Остались только незабываемые впечатления',
  'Не судите строго, я начинающий фотограф',
  'Так получилось лучше всего'
];

const NAMES = [
  'Иван',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Сергей',
  'Антон'
];

const COMMENT_TEXTS = [
  'Всё отлично!!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


//  ОБЩИЕ ФУНКЦИИ

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

//СОЗДАНИЕ ОПИСАНИЙ К ФОТО.

let IdNumber = 1;
let photoID = 1;
let photoNumber = 1;

const createComment = () => ({
  id: IdNumber++,
  avatar: `img/avatar-${getRandomInt(AVATAR_MIN_NUMBER, AVATAR_MAX_NUMBER)}.svg`,
  message: getRandomArrayItem(COMMENT_TEXTS),
  name: getRandomArrayItem(NAMES),
});

const createCommentArray = () => Array.from ({length: getRandomInt(COMMETS_MIN_NUMBER, COMMETS_MAX_NUMBER)}, createComment);

const createPhotoDescription = () => ({
  id: photoID++,
  url: `photos/${(photoNumber++)}.jpg` ,
  description: getRandomArrayItem(PHOTO_DESCRIPTIONS),
  likes: getRandomInt(LIKES_MIN_NUMBER, LIKES_MAX_NUMBER),
  comments: createCommentArray()
});

const createDescriptionArray = () => Array.from ({length: DESCRIPTION_NUMBER}, createPhotoDescription);

createDescriptionArray();
