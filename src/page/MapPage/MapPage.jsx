/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { Map, MapMarker, MapTypeControl, ZoomControl, useMap } from "react-kakao-maps-sdk";
import { instance } from "../../apis/util/instance";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import CustomMarker from "../../components/CustomMarker/CustomMarker";
import { LuDessert } from "react-icons/lu";
import { MdOutlineBrunchDining } from "react-icons/md";
import { MdOutlineBakeryDining } from "react-icons/md";
import { TbCoffee } from "react-icons/tb";

function MapPage(props) {
    
    const [check, setCheck] = useState("전체");
    const [inputvalue, setInputvalue] = useState("");
    const [center, setCenter] = useState({
        lat: 35.156359,
        lng: 129.0631410,
    });
    const [currentCafeIndex, setCurrentCafeIndex] = useState(0); // 현재 카페 인덱스 추가

    const cafe = useQuery(
        ["cafeQuery", check, inputvalue],
        async () => {
            return instance.get(`/cafe/get/${check}/${inputvalue}`);
        },
        {
            onSuccess: response => console.log(response),
            refetchOnWindowFocus: false,
            retry: 0,
        }
    );

    const EventMarkerContainer = ({ position}) => {
        const map = useMap();
        const [isVisible, setIsVisible] = useState(false)

        return (
            <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onSuccess={(marker) => map.panTo(marker.getPosition())}
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
      </MapMarker>
        );
    };
    const handlePrevCafe = () => {
        setCurrentCafeIndex((prevIndex) =>
            (prevIndex - 1 + (cafe.data?.data.length || 1)) % (cafe.data?.data.length || 1)
        );
    };

    // 다음 카페로 이동하는 함수
    const handleNextCafe = () => {
        setCurrentCafeIndex((prevIndex) =>
            (prevIndex + 1) % (cafe.data?.data.length || 1)
        );
    };

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.inputbox}>
                    <Link to={"/"}><h2>CafeDev</h2></Link>
                    <input type="text" placeholder="카페명을 입력해주세요" required />
                    <span></span>
                    <button>검색</button>
                </div>
                <div css={s.selectbutton}>
                    <button><MdOutlineBakeryDining css={s.icon} /> 베이커리</button>
                    <button><MdOutlineBrunchDining css={s.icon} /> 브런치</button>
                    <button><TbCoffee css={s.icon} /> 분위기</button>
                    <button><LuDessert css={s.icon} /> 디저트</button>
                </div>
            </div>
            <Map css={s.map} center={center}>
                {cafe.data?.data.map((result) => (
                    <EventMarkerContainer
                        position={{ lat: result.lat, lng: result.lng }} // 마커를 표시할 위치
                        cafe={result} // 카페 리스트 객체
                    />
                ))}
            

            <div css={s.cafeContainer}>
                <button onClick={handlePrevCafe}>이전</button>
                <div css={s.cafeInfo}>
                    {cafe.data?.data.length > 0 && (
                        <>
                            <h3>카페이름: {cafe.data.data[currentCafeIndex].cafeName}</h3>
                            <p>주소: {cafe.data.data[currentCafeIndex].address}</p>
                            <p>카테고리: {cafe.data.data[currentCafeIndex].category}</p>
                            <EventMarkerContainer
                        position={{ lat: cafe.data.data[currentCafeIndex].lat, lng: cafe.data.data[currentCafeIndex].lng }} // 마커를 표시할 위치
                    />
                        </>
                    )}
                </div>
                <button onClick={handleNextCafe}>다음</button>
            </div>
            
            </Map>
        </div>
    );
}

export default MapPage;