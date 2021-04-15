import { header } from "./baseAndWeatherElements";

//  create elenent into header
export const buttonHeaderWrapper = document.createElement('div');
export const buttonBackground = document.createElement('button');
export const searchForm = document.createElement('div');

//  add class for element of header
buttonHeaderWrapper.classList.add('wrapper-button-header');
buttonBackground.classList.add('button-background');
searchForm.classList.add('search-form');

//  add elements of header
header.append(buttonHeaderWrapper);
buttonHeaderWrapper.append(buttonBackground);
header.append(searchForm);

buttonBackground.insertAdjacentHTML(
  'afterbegin',
  '<i class="fa fa-refresh" aria-hidden="true"></i>'
);

// add buttons change temperature format
buttonHeaderWrapper.insertAdjacentHTML(
  'beforeend',
  '<button class="button-celsius hidden">℃</button><button class="button-fahrenheit">℉</button>'
);
export const buttonCelsius = document.querySelector('.button-celsius');
export const buttonFahrenheit = document.querySelector('.button-fahrenheit');

// add button search
searchForm.insertAdjacentHTML(
  'afterbegin',
  '<button class="button-search" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>'
);
export const buttonSearch = document.querySelector('.button-search');
// add button microphone
searchForm.insertAdjacentHTML(
  'afterbegin',
  '<button class="button-microphone" type="submit"><i class="fa fa-microphone" aria-hidden="true"></i></button>'
);
export const buttonMicrophone = document.querySelector('.button-microphone');
// add input search
searchForm.insertAdjacentHTML(
  'afterbegin',
  '<input class="input-search" required type="text" placeholder="Input the city"></input>'
);
export const inputSearch = document.querySelector('.input-search');
