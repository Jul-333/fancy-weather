import { setGeolocation } from './geolocationBlock/setGeolocation';
import { addBackgrOnPage } from '../utils/buttons/addBackgrOnPage';
import { changeTemperatureFormat } from '../utils/buttons/changeTemperatureFormat';
import {
  buttonBackground,
  buttonHeaderWrapper,
  inputSearch,
} from '../utils/createElements.js/headerElements';
import { countryDate } from './weatherBlock/countryDate';
import { setCurrentWeather } from './weatherBlock/setCurrentWeather';
import { setThreeDaysWeather } from './weatherBlock/setThreeDaysWeather';
import { objSettings } from '../utils/values';
import { getDataSearch } from '../API/getDataSearch';
// import { checkSearchField } from '../utils/checkSearchField';
import { getUserLocation } from '../API/getUserLocation';
import { getWeatherForecast } from '../API/getWeatherForecast';

export const commonFunctionsManager = async (resultInput) => {
  let valueForSearch;
  let city;

  if(objSettings.location === 'current'){
    valueForSearch = await getUserLocation();
  } else{
    valueForSearch = resultInput;
  }

  const data = await getDataSearch(valueForSearch);

  if(data.results[0].components.village){
   city  = data.results[0].components.village;
  } else{
    city = data.results[0].components.city;
  }
  if (!city) {
    city = data.results[0].components.state;
  }

  const country = data.results[0].components['ISO_3166-1_alpha-2'];
  const timestamp = data.timestamp.created_unix;
  const timezone = data.results[0].annotations.timezone.name;
  const { lat: latitude, lng: longitude } = data.results[0].geometry;
  const latitudeLongitude = `${latitude},${longitude}`;
  const listWeatherForecast = await getWeatherForecast(latitudeLongitude);
  const { icon } = listWeatherForecast.currently;

  const objWithProperties = {
    icon,
    city,
    country,
    timezone,
    timestamp,
    listWeatherForecast,
    latitudeLongitude,
  };

  setGeolocation(latitudeLongitude);
  countryDate(timestamp, city, country, timezone);
  setCurrentWeather(listWeatherForecast.currently);
  setThreeDaysWeather(listWeatherForecast);

  addBackgrOnPage(icon);
  buttonBackground.addEventListener('click', () => addBackgrOnPage(icon));
  buttonHeaderWrapper.addEventListener('click', (event) => {
    changeTemperatureFormat(event, listWeatherForecast);
  });
};
