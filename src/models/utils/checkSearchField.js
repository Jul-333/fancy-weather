import { inputSearch } from './createElements.js/headerElements';

export const checkSearchField = (resultInput) => {
  const inputValueToNumber = Number(resultInput);
  inputSearch.value = '';
  if (resultInput === '') {
    alert(`The field can't be empty! Enter the name of the city or country!`);
    return false;
  }
  if (
    resultInput.length < 2 ||
    (typeof inputValueToNumber === 'number' && !Number.isNaN(inputValueToNumber))
  ) {
    alert('Incorrect request!');
    return false;
  }
  return true;
};
