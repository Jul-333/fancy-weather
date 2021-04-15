import { wrapperGeolocationData } from "./baseAndWeatherElements";

const mapEl = document.createElement('div');
export const latitudeEl = document.createElement('p');
export const longitudeEl = document.createElement('p');

latitudeEl.classList.add('background-lat-lon');
longitudeEl.classList.add('background-lat-lon');
mapEl.setAttribute('id', 'map');

wrapperGeolocationData.appendChild(mapEl);
wrapperGeolocationData.appendChild(latitudeEl);
wrapperGeolocationData.appendChild(longitudeEl);
