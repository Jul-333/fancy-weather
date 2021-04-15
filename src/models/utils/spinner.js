import { wrapper } from './createElements.js/baseAndWeatherElements';
import spinnerImg from '../../assets/spinner.svg';

const body = document.getElementsByTagName('body')[0];
body.insertAdjacentHTML(
  'afterbegin',
  `<img class="spinner" src="../../assets/spinner.svg" alt="spinner"
     width="90 height="90">`
);
const img = document.querySelector('.spinner');
img.src = spinnerImg;

export const spinner = (boolean) => {
  if (boolean === false) {
    wrapper.classList.remove('blur');
    img.classList.add('delete-spinner');
  }

  if (boolean === true) {
    wrapper.classList.add('blur');
    img.classList.remove('delete-spinner');
  }
};
