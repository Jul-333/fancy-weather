import { convertToMinutes } from '../../utils/convertToMinutes';
import { objSettings } from '../../utils/values';
import { initMap } from '../../API/initMap';
import { updateMap } from '../../API/updateMap';
import {
  latitudeEl,
  longitudeEl,
} from '../../utils/createElements.js/mapElements';

export async function setGeolocation(location) {
  const coordinate = location.split(',');
  const [latitude, longitude] = coordinate;

  // Map
  if (objSettings.location === 'current') {
    initMap(latitude, longitude);
  } else {
    await updateMap(latitude, longitude);
  }

  // Geolocation
  const resultLatitude = convertToMinutes(latitude);
  const resultLongitude = convertToMinutes(longitude);
  latitudeEl.innerHTML = `Latitude: ${resultLatitude}`;
  longitudeEl.innerHTML = `Longitude: ${resultLongitude}`;
}
