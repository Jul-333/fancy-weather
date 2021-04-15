import { objSettings, DAYS_OF_WEEK } from '../../utils/values';

function createNameOfWeekEl(dataListDay, container, valueID) {
  const dayEl = document.createElement('p');
  dayEl.classList.add('weekday-name-three-days');
  dayEl.setAttribute('id', `${valueID}`);
  addNameOfWeek(dayEl, dataListDay);
  container.appendChild(dayEl);
}

function addNameOfWeek(dayEl, dataListDay) {
  const data = new Date(dataListDay.time * 1000);
  const indexDay = data.getDay();
  dayEl.innerHTML = DAYS_OF_WEEK[indexDay];
}

export function setNameOfWeek(arrData, arrContainers) {
  const arrClasses = ['name-day-2', 'name-day-3', 'name-day-4'];
  if (objSettings.location === 'current') {
    for (let i = 0; i < 3; i++) {
      createNameOfWeekEl(arrData[i], arrContainers[i], arrClasses[i]);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      const dayEl = document.getElementById(arrClasses[i]);
      addNameOfWeek(dayEl, arrData[i]);
    }
  }
}
