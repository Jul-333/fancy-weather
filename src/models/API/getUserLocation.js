import { spinner } from "../utils/spinner";

export async function getUserLocation() {
    spinner(true)
    const options = {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000
    };

    const getPosition = () => {
        return new Promise(function(resolve, reject) {
            const watchID = navigator.geolocation.watchPosition(resolve, reject, options);
            const timeout = setTimeout(function() {
                navigator.geolocation.clearWatch(watchID);
            }, 5000);
        });
    }

    return getPosition()
        .then((position) => {
            const crd = position.coords;
            return `${crd.latitude},${crd.longitude}`;
        })
        .catch((err) => {
            console.error(err.message);
        });
}