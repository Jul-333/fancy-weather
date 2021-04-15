import { objSettings } from '../../utils/values';

function addTemperatureEl(style, valueId, formulaTemperature, container) {
  const temperatureEl = document.createElement('span');
  temperatureEl.classList.add(`${style}`);
  temperatureEl.classList.add('span-temperature');
  temperatureEl.setAttribute('id', `${valueId}`);
  temperatureEl.innerHTML = `${formulaTemperature}`;
  container.appendChild(temperatureEl);
}

export function setTemperature(element, container) {
  if (objSettings.location === 'current') {
    if (container.classList.contains('current-weather-left')) {
      const formulaTemperature = `${Math.round(element.temperature)}\u00B0`;
      addTemperatureEl(
        'current-temperature',
        'temperature-day-1',
        formulaTemperature,
        container
      );
    }
    if (container.classList.contains('container-second-day')) {
      const temperatureSum = element.temperatureMax + element.temperatureMin;
      const formulaTemperature = `${Math.round(temperatureSum / 2)}\u00B0`;
      addTemperatureEl(
        'next-days-temperature',
        'temperature-day-2',
        formulaTemperature,
        container
      );
    }
    if (container.classList.contains('container-third-day')) {
      const temperatureSum = element.temperatureMax + element.temperatureMin;
      const formulaTemperature = `${Math.round(temperatureSum / 2)}\u00B0`;
      addTemperatureEl(
        'next-days-temperature',
        'temperature-day-3',
        formulaTemperature,
        container
      );
    }
    if (container.classList.contains('container-fourth-day')) {
      const temperatureSum = element.temperatureMax + element.temperatureMin;
      const formulaTemperature = `${Math.round(temperatureSum / 2)}\u00B0`;
      addTemperatureEl(
        'next-days-temperature',
        'temperature-day-4',
        formulaTemperature,
        container
      );
    }
  } else {
    if (container.classList.contains('current-weather-left')) {
      const temperatureEl = document.getElementById('temperature-day-1');
      temperatureEl.innerHTML = `${Math.round(element.temperature)}\u00B0`;
    }
    if (container.classList.contains('container-second-day')) {
      const temperatureEl = document.getElementById('temperature-day-2');
      const temperatureSum = element.temperatureMax + element.temperatureMin;
      temperatureEl.innerHTML = `${Math.round(temperatureSum / 2)}\u00B0`;
    }
    if (container.classList.contains('container-third-day')) {
      const temperatureEl = document.getElementById('temperature-day-3');
      const temperatureSum = element.temperatureMax + element.temperatureMin;
      temperatureEl.innerHTML = `${Math.round(temperatureSum / 2)}\u00B0`;
    }
    if (container.classList.contains('container-fourth-day')) {
      const temperatureEl = document.getElementById('temperature-day-4');
      const temperatureSum = element.temperatureMax + element.temperatureMin;
      temperatureEl.innerHTML = `${Math.round(temperatureSum / 2)}\u00B0`;
    }
  }
}
