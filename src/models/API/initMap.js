import mapboxgl from 'mapbox-gl';
import { tokenMap } from '../utils/config';

export async function initMap(latitude, longitude) {
  try {
    mapboxgl.accessToken = tokenMap;
    window.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 10,
      attributionControl: false,
      logoPosition: 'top-left',
    });
    window.marker = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(window.map);
  } catch (error) {
    console.log('error', error);
  }
}
