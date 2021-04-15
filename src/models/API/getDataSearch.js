import { keyOpencagedata } from '../utils/config';
import { spinner } from '../utils/spinner';

export async function getDataSearch(value) {
  spinner(true);
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${value}&language=en&key=${keyOpencagedata}&pretty=1`
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log('error', error));
}
