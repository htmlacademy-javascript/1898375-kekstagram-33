// СОЗДАНИЕ МАССИВА КОМЕНТАРИЕВ
import {getRandomInt, getRandomArrayItem} from './util.js';

const AVATAR_MIN_NUMBER = 1;
const AVATAR_MAX_NUMBER = 6;

const COMMETS_MIN_NUMBER = 0;
const COMMETS_MAX_NUMBER = 30;

const COMMENT_TEXTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
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

let IdNumber = 1;

const createComment = () => ({
  id: IdNumber++,
  avatar: `img/avatar-${getRandomInt(AVATAR_MIN_NUMBER, AVATAR_MAX_NUMBER)}.svg`,
  message: getRandomArrayItem(COMMENT_TEXTS),
  name: getRandomArrayItem(NAMES),
});

const createCommentArray = () => Array.from ({length: getRandomInt(COMMETS_MIN_NUMBER, COMMETS_MAX_NUMBER)}, createComment);

export {createCommentArray};
