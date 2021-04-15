import { wrapperDate } from '../../utils/createElements.js/baseAndWeatherElements';
import fullNameCountry from '../../utils/fullNameCountry.json';
import { objSettings } from '../../utils/values';

const countryEl = document.createElement('p');
wrapperDate.appendChild(countryEl);

export async function countryDate(timestamp, city, country, timezone) {
  const dateEl = document.createElement('p');
  dateEl.classList.add('current-time');
  wrapperDate.appendChild(dateEl);

  // Country/City
  if (city) {
    countryEl.innerHTML = `${city}, ${fullNameCountry[country]}`;
  } else {
    countryEl.innerHTML = `${fullNameCountry[country]}`;
  }
  // Date-clock
  const OPTIONS = {
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };

  let currentTime = new Date(timestamp * 1000).getTime();
  const idInterval = setInterval(() => {
    currentTime += 1000;
    OPTIONS.timeZone = `${timezone}`;
    document.querySelector('.current-time').innerHTML = new Date(currentTime)
      .toLocaleString('en', OPTIONS)
      .toUpperCase();
  }, 1000);

  objSettings.idInterval = idInterval;
}
