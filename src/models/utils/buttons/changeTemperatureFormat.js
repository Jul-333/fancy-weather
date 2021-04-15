import {  buttonCelsius, buttonFahrenheit } from '../createElements.js/headerElements';
import { apparentTemperatEl } from '../createElements.js/baseAndWeatherElements';

export function changeTemperatureFormat(event, listWeatherForecast) {
  const { apparentTemperature, temperature } = listWeatherForecast.currently;
  const dataOfSecondDay = listWeatherForecast.daily.data[1];
  const dataOfThirdDay = listWeatherForecast.daily.data[2];
  const dataOfFourthDay = listWeatherForecast.daily.data[3];

  const day1TemperatureEl = document.getElementById('temperature-day-1');
  const day2TemperatureEl = document.getElementById('temperature-day-2');
  const day3TemperatureEl = document.getElementById('temperature-day-3');
  const day4TemperatureEl = document.getElementById('temperature-day-4');

  if ((event.target).classList.contains('button-fahrenheit')) {
    buttonCelsius.classList.remove('hidden');
    buttonFahrenheit.classList.add('hidden');

    // apparent temperature to fahrenheit
    const fahrenheitAT = ((apparentTemperature * 9) / 5) + 32;
    apparentTemperatEl.innerHTML = `Feels like: ${Math.round(fahrenheitAT)}\u00B0`;

    // day 1/current temperature to fahrenheit
    const fahrenheitTempDay1 = ((temperature * 9) / 5) + 32;
    day1TemperatureEl.innerHTML = `${Math.round(fahrenheitTempDay1)}\u00B0`;

    // day 2 temperature to fahrenheit
    const resultSumDay2 = (dataOfSecondDay.temperatureMax + dataOfSecondDay.temperatureMin);
    const fahrenheitTempDay2 = ((resultSumDay2 * 9) / 5) + 32;
    day2TemperatureEl.innerHTML = `${Math.round(fahrenheitTempDay2)}\u00B0`;

    // day 3 temperature to fahrenheit
    const resultSumDay3 = (dataOfThirdDay.temperatureMax + dataOfThirdDay.temperatureMin);
    const fahrenheitTempDay3 = ((resultSumDay3 * 9) / 5) + 32;
    day3TemperatureEl.innerHTML = `${Math.round(fahrenheitTempDay3)}\u00B0`;

    // day 4 temperature to fahrenheit
    const resultSumDay4 = (dataOfFourthDay.temperatureMax + dataOfFourthDay.temperatureMin);
    const fahrenheitTempDay4 = ((resultSumDay4 * 9) / 5) + 32;
    day4TemperatureEl.innerHTML = `${Math.round(fahrenheitTempDay4)}\u00B0`;
  }
  if ((event.target).classList.contains('button-celsius')) {
    buttonCelsius.classList.add('hidden');
    buttonFahrenheit.classList.remove('hidden');

    // apparent temperature to celsius
    apparentTemperatEl.innerHTML = `Feels like: ${Math.round(apparentTemperature)}\u00B0`;

    // day 1/current temperature to celsius
    day1TemperatureEl.innerHTML = `${Math.round(temperature)}\u00B0`;

    // day 2 temperature to celsius
    const resultDay2 = (dataOfSecondDay.temperatureMax + dataOfSecondDay.temperatureMin) / 2;
    day2TemperatureEl.innerHTML = `${Math.round(resultDay2)}\u00B0`;

    // day 3 temperature to celsius
    const resultDay3 = (dataOfThirdDay.temperatureMax + dataOfThirdDay.temperatureMin) / 2;
    day3TemperatureEl.innerHTML = `${Math.round(resultDay3)}\u00B0`;

    // day 4 temperature to celsius
    const resultDay4 = (dataOfFourthDay.temperatureMax + dataOfFourthDay.temperatureMin) / 2;
    day4TemperatureEl.innerHTML = `${Math.round(resultDay4)}\u00B0`;
  }
}
