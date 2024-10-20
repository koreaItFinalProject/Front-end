/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import SelectCategory from "../../components/SelectCategory/SelectCategory";
import { IoIosSearch } from "react-icons/io";

function MapPage({ check, setCheck, inputvalue, setInputvalue }) {
    const [inputdata, setInputData] = useState("");
    const [center, setCenter] = useState({
        lat: 35.1560557306354,
        lng: 129.059978704814,
    });
    const queryClient = useQueryClient();
    const cafelist = queryClient.getQueryData(["cafeQuery", check, inputvalue]);
    const cafe = cafelist?.data;
    const [currentCafeIndex, setCurrentCafeIndex] = useState(0);
    const [ slide, setSlide ] = useState(0);

    const handlePrevCafe = () => {
        setSlide(-100);
        setCurrentCafeIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + cafe.length) % cafe.length;
            setCenter({ lat: cafe[newIndex].lat, lng: cafe[newIndex].lng });
            return newIndex;
        });
    };

    const handleNextCafe = () => {
        setSlide(100);
        setCurrentCafeIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % cafe.length;
            setCenter({ lat: cafe[newIndex].lat, lng: cafe[newIndex].lng });
            return newIndex;
        });
    };

    const handleInputOnChange = (e) => {
        setInputData(e.target.value);
    };

    const handleSearchOnClick = () => {
        setInputvalue(inputdata);
    };

    const handleInputKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearchOnClick();
        }
    };

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.inputbox}>
                    <Link to={"/"}><div/></Link>
                    <input
                        type="text"
                        placeholder="카페명을 입력해주세요"
                        value={inputdata}
                        onChange={handleInputOnChange}
                        onKeyDown={handleInputKeyPress}
                    />
                    <button onClick={handleSearchOnClick}><IoIosSearch size={20}/></button>
                </div>
                <div css={s.selectbutton}>
                    <SelectCategory check={check} setCheck={setCheck} />
                </div>
            </div>
            <Map css={s.map} center={center} isPanto={true}>
                {cafe?.map((result) => (
                    <MapMarker
                        key={result.id}
                        position={{ lat: result.lat, lng: result.lng }}
                    />
                ))}
                <div css={s.cafeContainer}>
                    <button onClick={handlePrevCafe} disabled={!cafe?.length}>
                        이전
                    </button>
                    <div css={s.cafeInfo(slide)}>
                        {cafe?.length > 0 ? (
                            <>
                                <h3>카페이름: {cafe[currentCafeIndex].cafeName}</h3>
                                <p>주소: {cafe[currentCafeIndex].address}</p>
                                <p>카테고리: {cafe[currentCafeIndex].category}</p>
                                <MapMarker
                                    position={{
                                        lat: cafe[currentCafeIndex].lat,
                                        lng: cafe[currentCafeIndex].lng
                                    }}
                                />
                            </>
                        ) : (
                            <p>카페 데이터가 없습니다.</p>
                        )}
                    </div>
                    <button onClick={handleNextCafe} disabled={!cafe?.length}>
                        다음
                    </button>
                </div>
            </Map>
        </div>
    );
}

export default MapPage;