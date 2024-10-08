/*global kakao*/
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { Map, useKakaoLoader } from "react-kakao-maps-sdk";

function MapPage(props) {
    const [loading, error] = useKakaoLoader({
        appkey: process.env.REACT_APP_KAKAOMAP_API_KEY, // 발급 받은 APPKEY
    })
    const [center, setCenter] = useState({
        lat: 35.156359,
        lng: 129.0631410,
    });

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.searchbox}>
                    <div css={s.header}>
                        <div css={s.logobox}>
                            <button>이벤트 이동</button>
                            LOGO
                        </div>
                        <div css={s.inputbox}>
                            <input type="text" />
                            <button>확인</button>
                            <fieldset css={s.radiobutton}>
                                <label>
                                    <input type="radio" name="select" />
                                    전체
                                </label>
                                <label>
                                    <input type="radio" name="select" />
                                    선택1
                                </label>
                                <label>
                                    <input type="radio" name="select" />
                                    선택2
                                </label>
                                <label>
                                    <input type="radio" name="select" />
                                    선택3
                                </label>
                                <label>
                                    <input type="radio" name="select" />
                                    선택4
                                </label>
                            </fieldset>
                        </div>
                    </div>
                    <div css={s.content}>카페리스트</div>
                </div>
            </div>
            <Map css={s.map} center={center}></Map>
        </div>
    )
}

export default MapPage;