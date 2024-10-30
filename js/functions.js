// Проверка длины строки
const isStringValid = (string, maxLength) => string.length <= maxLength;

isStringValid('привет', 4);

//Проверка на полиндром
const isPalindrom = (string) => {
  const cleanString = string.replaceAll(' ','').toLowerCase();
  const reversString = cleanString.split('').reverse().join('');

  return cleanString === reversString;
};

isPalindrom('дОвоД');

