import { SEASONS_ARRAY } from '../values';
import { keyUnsplash } from '../config';
import { spinner } from '../spinner';

function getTimeOfDay(date) {
  // get  time of day
  const hour = date.getHours();
  if (hour <= 6 <= 20) {
    return 'day';
  }
  return 'night';
}

export async function addBackgrOnPage(weather) {
  const weatherNewFormat = weather.split('-').join(' '); // remove hyphen between words weather name
  const date = new Date();
  // Get season
  const mounthIndex = date.getMonth();
  const season = SEASONS_ARRAY[mounthIndex];
  // Get result time of day
  const timeOfDay = getTimeOfDay(date);
  // Get image
  const backgroundData = await fetch(
    `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=
    ${weatherNewFormat}+${season}+${timeOfDay}&client_id=${keyUnsplash}`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error))
    .finally(() => spinner(false));

  document.getElementsByTagName(
    'body'
  )[0].style.backgroundImage = `url('${backgroundData.urls.regular}')`;
}
