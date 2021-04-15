import { buttonSearch, buttonMicrophone, inputSearch } from './utils/createElements.js/headerElements';
import { microphoneSearch } from './utils/buttons/microphone';
import { objSettings } from './utils/values';
import { commonFunctionsManager } from './functions/commonFunctionsManager';
import { message, wrapper, buttonMessage } from './utils/createElements.js/baseAndWeatherElements';
import { checkSearchField } from './utils/checkSearchField';

// if you are not logged in from a computer
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    message.classList.remove('message-hidden');
}

buttonMessage.addEventListener('click', async() => {
    message.classList.add('message-hidden');
})

const inputSearchCommonFunc = () => {
    const resultInput = inputSearch.value;
    const isValidValue = checkSearchField(resultInput);
    if (!isValidValue) {
        return;
    }
    objSettings.location = 'after search';
    clearInterval(objSettings.idInterval);
    commonFunctionsManager(resultInput);
}

if (objSettings.location === 'current') {
    commonFunctionsManager();
}

buttonSearch.addEventListener('click', async() => {
    inputSearchCommonFunc();
});

wrapper.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        inputSearchCommonFunc();
    }
});

buttonMicrophone.addEventListener('click', async() => { microphoneSearch() });