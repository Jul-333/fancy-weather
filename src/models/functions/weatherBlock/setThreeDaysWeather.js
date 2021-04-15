import { setTemperature } from './setTemperature';
import { setIcon } from './setIcon';
import { setNameOfWeek } from './setNameOfWeek';
import {
  containerSecDay,
  containerThirdDay,
  containerFourthDay,
} from '../../utils/createElements.js/baseAndWeatherElements';

export function setThreeDaysWeather(listWeatherForecast) {
  const dataOfSecondDay = listWeatherForecast.daily.data[1]; // get data of every day of the week
  const dataOfThirdDay = listWeatherForecast.daily.data[2];
  const dataOfFourthDay = listWeatherForecast.daily.data[3];

  const arrData = [dataOfSecondDay, dataOfThirdDay, dataOfFourthDay];
  const arrContainers = [
    containerSecDay,
    containerThirdDay,
    containerFourthDay,
  ];
  setNameOfWeek(arrData, arrContainers);

  setTemperature(dataOfSecondDay, containerSecDay); // add temperature for second day
  setTemperature(dataOfThirdDay, containerThirdDay); // add temperature for third day
  setTemperature(dataOfFourthDay, containerFourthDay); // add temperature for fourth day

  setIcon(dataOfSecondDay, containerSecDay); // add icon for second day
  setIcon(dataOfThirdDay, containerThirdDay); // add icon for third day
  setIcon(dataOfFourthDay, containerFourthDay); // add icon for fourth day
}
