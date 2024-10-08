/*global kakao*/
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { Map, MapTypeControl, ZoomControl, useKakaoLoader } from "react-kakao-maps-sdk";

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
                <div css={s.content}>카페리스트
                    <div css={s.contentlist}>
                        <ul>
                            <li>
                                <p>카페이름</p>
                                <p>평점</p>
                                <p>주소</p>
                                <p>카테고리/ 리뷰수</p>
                            </li>
                            <li>
                                <p>카페이름</p>
                                <p>평점</p>
                                <p>주소</p>
                                <p>카테고리/ 리뷰수</p>
                            </li>
                            <li>
                                <p>카페이름</p>
                                <p>평점</p>
                                <p>주소</p>
                                <p>카테고리/ 리뷰수</p>
                            </li>
                            <li>
                                <p>카페이름</p>
                                <p>평점</p>
                                <p>주소</p>
                                <p>카테고리/ 리뷰수</p>
                            </li>
                            <li>
                                <p>카페이름</p>
                                <p>평점</p>
                                <p>주소</p>
                                <p>카테고리/ 리뷰수</p>
                            </li>
                            <li>
                                <p>카페이름</p>
                                <p>평점</p>
                                <p>주소</p>
                                <p>카테고리/ 리뷰수</p>
                            </li>
                            <li>
                                <p>카페이름</p>
                                <p>평점</p>
                                <p>주소</p>
                                <p>카테고리/ 리뷰수</p>
                            </li>
                            <li>
                                <p>카페이름</p>
                                <p>평점</p>
                                <p>주소</p>
                                <p>카테고리/ 리뷰수</p>
                            </li>
                            <li>
                                <p>카페이름</p>
                                <p>평점</p>
                                <p>주소</p>
                                <p>카테고리/ 리뷰수</p>
                            </li>
                            <li>
                                <p>카페이름</p>
                                <p>평점</p>
                                <p>주소</p>
                                <p>카테고리/ 리뷰수</p>
                            </li>
                            <li>
                                <p>카페이름</p>
                                <p>평점</p>
                                <p>주소</p>
                                <p>카테고리/ 리뷰수</p>
                            </li>
                            <li>
                                <p>카페이름</p>
                                <p>평점</p>
                                <p>주소</p>
                                <p>카테고리/ 리뷰수</p>
                            </li>
                            <li>
                                <p>카페이름</p>
                                <p>평점</p>
                                <p>주소</p>
                                <p>카테고리/ 리뷰수</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Map css={s.map} center={center}>
                <MapTypeControl position={"TOPRIGHT"} />
                <ZoomControl position={"RIGHT"} />
            </Map>
        </div>
    )
}

export default MapPage;