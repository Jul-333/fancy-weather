export async function updateMap(latitude, longitude) {
  try {
    await window.map.flyTo({
      center: [longitude, latitude],
      speed: 3,
      curve: 1,
      easing(t) {
        return t;
      },
    });
    await window.marker.setLngLat([longitude, latitude]).addTo(window.map);
  } catch (error) {
    console.log('error', error);
  }
}
