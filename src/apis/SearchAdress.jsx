import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode'; // Daum 주소 검색 관련 hook
//주소 api
/** @jsxImportSource @emotion/react */
import * as s from "./style";


const SearchAdress = ({ setAddress }) => {
    const postcodeScriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    const open = useDaumPostcodePopup(postcodeScriptUrl);

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