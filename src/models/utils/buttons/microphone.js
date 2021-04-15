import { inputSearch } from "../createElements.js/headerElements";

export function microphoneSearch() {
    const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition ||
        window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.interimResults = true;

    recognition.addEventListener('result', async(e) => {
        const arrResults = Array.from(e.results);
        const arrWithTranscript = arrResults[0];
        const { transcript } = arrWithTranscript[0];

        if (arrWithTranscript.isFinal) {
            inputSearch.value = transcript;
        }
    });

    recognition.start();
}