/*global kakao*/

const KakaoGeocoder = (data , setCoordinates) => {
    if (!window.kakao || !window.kakao.maps) {
        console.error('Kakao maps is not initialized');
        return;
    }

    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(data.address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
            const { y: latitude, x: longitude } = result[0];
            setCoordinates(latitude , longitude);
        } else {
            console.error('Geocode was not successful for the following reason: ' + status);
        }
    });
};

export default KakaoGeocoder;