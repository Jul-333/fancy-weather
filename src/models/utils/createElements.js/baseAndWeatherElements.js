export const wrapper = document.getElementById('wrapper');
export const header = document.createElement('header');
export const main = document.createElement('main');

//  create elenents into main
export const wrapperWeatherDate = document.createElement('div');
export const wrapperGeolocationData = document.createElement('div');
//  create elenents into wrapperWeatherDate
export const wrapperDate = document.createElement('div');
export const wrapperCurrentWeather = document.createElement('div');
export const currentWeatherL = document.createElement('div');
export const currentWeatherR = document.createElement('div');
export const threeDaysWeather = document.createElement('div');
// create current weather data
export const ul = document.createElement('ul');
export const summaryEl = document.createElement('li');
export const apparentTemperatEl = document.createElement('li');
export const windSpeedEl = document.createElement('li');
export const spanWindSpeedEl = document.createElement('span');
export const humidityEl = document.createElement('li');
// add containers for three day weather
export const containerSecDay = document.createElement('div');
export const containerThirdDay = document.createElement('div');
export const containerFourthDay = document.createElement('div');

header.classList.add('header-buttons');
main.classList.add('main');

//  add class for elements of main
wrapperWeatherDate.classList.add('wrapper-weather-date');
wrapperGeolocationData.classList.add('wrapper-geolocation-data');
//  add class for elements of wrapperWeatherDate
wrapperDate.classList.add('wrapper-date');
wrapperCurrentWeather.classList.add('wrapper-current-weather');
currentWeatherL.classList.add('current-weather-left');
currentWeatherR.classList.add('current-weather-right');
threeDaysWeather.classList.add('three-days-weather');
// add class for current weather data
ul.classList.add('list-weather-propertys');
summaryEl.classList.add('weather-propertys');
apparentTemperatEl.classList.add('weather-propertys');
windSpeedEl.classList.add('weather-propertys');
spanWindSpeedEl.classList.add('wind-speed-span');
humidityEl.classList.add('weather-propertys');
// add classes for three day weather
containerSecDay.classList.add('container-second-day');
containerThirdDay.classList.add('container-third-day');
containerFourthDay.classList.add('container-fourth-day');

wrapper.append(header);
wrapper.append(main);

//  add elements of main
main.append(wrapperWeatherDate);
main.append(wrapperGeolocationData);
//  add elements of wrapperWeatherDate into wrapperWeatherDate
wrapperWeatherDate.append(wrapperDate);
wrapperWeatherDate.append(wrapperCurrentWeather);
wrapperCurrentWeather.append(currentWeatherL);
wrapperCurrentWeather.append(currentWeatherR);
wrapperWeatherDate.append(threeDaysWeather);
// add current weather data
currentWeatherR.appendChild(ul);
currentWeatherR.appendChild(summaryEl);
currentWeatherR.appendChild(apparentTemperatEl);
currentWeatherR.appendChild(windSpeedEl);
windSpeedEl.appendChild(spanWindSpeedEl);
currentWeatherR.appendChild(humidityEl);
// add three day weather elements
threeDaysWeather.appendChild(containerSecDay);
threeDaysWeather.appendChild(containerThirdDay);
threeDaysWeather.appendChild(containerFourthDay);

// MESSAGE
export const message = document.createElement('div');
const body = document.getElementsByTagName('body')[0];
message.classList.add('message');
message.classList.add('message-hidden');
message.insertAdjacentHTML(
    'afterbegin',
    '<div><p class="message-text message-p1">IMPORTANT!</p><p class="message-text message-p2">You need turn on location on your device and/or reload the page.</p></div> <button type="button" class="message-button">OK</button>'
);
body.append(message);
export const buttonMessage = document.querySelector(".message-button");