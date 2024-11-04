/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useCafeQuery } from "../../apis/CafeApis/getCafeListApi";
import SelectCategory from "../../components/SelectCategory/SelectCategory";
import { useNavigate } from "react-router-dom";

function MapPage({ check, setCheck, inputvalue, setInputvalue }) {
    const navigate = useNavigate();
    const [inputdata, setInputData] = useState("");
    const [center, setCenter] = useState({
        lat: 35.1560557306354,
        lng: 129.059978704814,
    });
    const { data: cafeList } = useCafeQuery(check, inputvalue);
    const cafe = cafeList;
    const [currentCafeIndex, setCurrentCafeIndex] = useState(0);
    const [slide, setSlide] = useState(0);

    console.log(cafe);

    const handlePrevCafe = () => {
        setSlide(-100);
        setCurrentCafeIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + cafe.length) % cafe.length;
            setCenter({ lat: cafe[newIndex].lat, lng: cafe[newIndex].lng });
            return newIndex;
        });
    }

    const handleNextCafe = () => {
        setSlide(100);
        setCurrentCafeIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % cafe.length;
            setCenter({ lat: cafe[newIndex].lat, lng: cafe[newIndex].lng });
            return newIndex;
        });
    }

    const handleInputOnChange = (e) => {
        setInputData(e.target.value);
    }

    const handleSearchOnClick = () => {
        setInputvalue(inputdata);
    }

    const handleInputKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearchOnClick();
        }
    }

    const handleCafeSlideClick = (cafeId) => {
        navigate(`/cafe/detail/${cafeId}`);
    }

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <h2>CafeInBusan</h2>
                <div css={s.inputbox}>
                    <input
                        type="text"
                        placeholder="카페명을 입력해주세요"
                        value={inputdata}
                        onChange={handleInputOnChange}
                        onKeyDown={handleInputKeyPress}
                    />
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
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 7.47475V12.5253H9.13636L13.5556 16.9444L10.5 20L0.5 10L10.5 0L13.5556 3.05556L9.13636 7.47475H20.5Z" fill="#F2780C" />
                        </svg>
                    </button>
                    <div css={s.cafeInfo(slide)} onClick={() => handleCafeSlideClick(cafe[currentCafeIndex].id)}>
                        {cafe?.length > 0 ? (
                            <>
                                <div css={s.pictureBox}>
                                    <img src={cafe[currentCafeIndex].img} alt="" />
                                </div>
                                <div css={s.listBox}>
                                    <h3>{cafe[currentCafeIndex].cafeName}</h3>
                                    <p>{cafe[currentCafeIndex].address}</p>
                                    <p>{cafe[currentCafeIndex].category}</p>
                                </div>
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
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 12.5253V7.47475H11.8636L7.44444 3.05556L10.5 0L20.5 10L10.5 20L7.44444 16.9444L11.8636 12.5253H0.5Z" fill="#F2780C" />
                        </svg>
                    </button>
                </div>
            </Map>
        </div>
    );
}

export default MapPage;