import React, { useEffect, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode'; // Daum 주소 검색 관련 hook
//주소 api
/** @jsxImportSource @emotion/react */
import * as s from "./style";


const SearchAdress = ({ setAddress }) => {
    const [latitude, setLatitude] = useState(null); // 위도 상태
    const [longitude, setLongitude] = useState(null); // 경도 상태
    const postcodeScriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    const open = useDaumPostcodePopup(postcodeScriptUrl);

    useEffect(() => {
        // 카카오맵 Geocoder 객체 초기화
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 위도, 경도를 찾는 함수
    //     const getLatLngFromAddress = (setAddress) => {
    //         geocoder.addressSearch(setAddress, function (result, status) {
    //             // 정상적으로 검색이 완료됐을 경우
    //             if (status === window.kakao.maps.services.Status.OK) {
    //                 const lat = result[0].y;
    //                 const lng = result[0].x;
    //                 setLatitude(lat); // 위도 설정
    //                 setLongitude(lng); // 경도 설정
    //             } else {
    //                 console.error('주소를 찾을 수 없습니다.');
    //             }
    //             getLatLngFromAddress(setAddress.address);
    //         });
    //     };
        
    }, [setAddress]);

    const handleComplete = (data) => {
        setAddress(data); // setAddress를 호출하여 부모 컴포넌트의 상태를 업데이트

        console.log(data);
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return(
        <>
            <div css={s.layout}>
                <button onClick={handleClick}>주소검색</button>
            </div>
        </>
    ) 
};

export default SearchAdress;