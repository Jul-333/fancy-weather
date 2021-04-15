import { setTemperature } from './setTemperature';
import { setIcon } from './setIcon';
import {
  summaryEl,
  apparentTemperatEl,
  windSpeedEl,
  spanWindSpeedEl,
  humidityEl,
  currentWeatherL,
  currentWeatherR,
} from '../../utils/createElements.js/baseAndWeatherElements';

export function setCurrentWeather(listWeatherForecastCurrently) {
  const {
    summary,
    apparentTemperature,
    windSpeed,
    humidity,
  } = listWeatherForecastCurrently;
  setTemperature(listWeatherForecastCurrently, currentWeatherL);
  setIcon(listWeatherForecastCurrently, currentWeatherR);

  // Summary
  summaryEl.innerHTML = summary;
  //  Apparent temperature
  apparentTemperatEl.innerHTML = `Feels like: ${Math.round(
    apparentTemperature
  )} \u00B0`;
  // Wind speed
  windSpeedEl.innerHTML = `Wind: ${Math.round(windSpeed)} m/s`;
  spanWindSpeedEl.innerHTML = ' m/s';
  // Humidity
  const percentHumidity = Math.round(humidity * 100);
  humidityEl.innerHTML = `Humidity: ${percentHumidity} \u0025`;
}
