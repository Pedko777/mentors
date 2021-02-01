const getName = (fullName: string): string =>
  fullName && fullName.split(' ')[0];

const getFirstLetterOfSurname = (fullName: string): string =>
  fullName && fullName.split(' ')[1].slice(0, 1) + '.';

export { getName, getFirstLetterOfSurname };
