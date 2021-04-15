import { objSettings } from '../../utils/values';

function addNewIcon(style, day, element) {
  const img = document.getElementById(`${day}`);
  img.removeAttribute('class');
  img.classList.add(`${style}`, element.icon, `${day}`);
}

export function setIcon(element, container) {
  if (objSettings.location === 'current') {
    const img = document.createElement('div');
    if (container.classList.contains('current-weather-right')) {
      img.classList.add('icon-current-weather', element.icon);
      img.setAttribute('id', 'icon-day-1');
    }
    if (container.classList.contains('container-second-day')) {
      img.classList.add('icon-next-days-weather', element.icon);
      img.setAttribute('id', 'icon-day-2');
    }
    if (container.classList.contains('container-third-day')) {
      img.classList.add('icon-next-days-weather', element.icon);
      img.setAttribute('id', 'icon-day-3');
    }
    if (container.classList.contains('container-fourth-day')) {
      img.classList.add('icon-next-days-weather', element.icon);
      img.setAttribute('id', 'icon-day-4');
    }
    container.appendChild(img);
  } else {
    if (container.classList.contains('current-weather-right')) {
      addNewIcon('icon-current-weather', 'icon-day-1', element);
    }
    if (container.classList.contains('container-second-day')) {
      addNewIcon('icon-next-days-weather', 'icon-day-2', element);
    }
    if (container.classList.contains('container-third-day')) {
      addNewIcon('icon-next-days-weather', 'icon-day-3', element);
    }
    if (container.classList.contains('container-fourth-day')) {
      addNewIcon('icon-next-days-weather', 'icon-day-4', element);
    }
  }
}
