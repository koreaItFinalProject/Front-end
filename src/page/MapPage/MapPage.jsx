/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from "react";
import { Map, MapMarker, MapTypeControl, ZoomControl } from "react-kakao-maps-sdk";
import { instance } from "../../apis/util/instance";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox";
import Cafelist from "../../components/Cafelist/Cafelist";
import CustomMarker from "../../components/CustomMarker/CustomMarker";

function MapPage(props) {
    const [check, setCheck] = useState("전체");
    const [inputvalue, setInputvalue] = useState("");
    const [center, setCenter] = useState({
        lat: 35.156359,
        lng: 129.0631410,
    });

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

    const EventMarkerContainer = ({ position, cafe }) => {
        const [isClick, setIsClick] = useState(false);

        return (
            <MapMarker position={position} onClick={() => setIsClick(true)}>
                {isClick && <CustomMarker cafe={cafe} setIsClick={setIsClick}/>}
            </MapMarker>
        );
    };

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.header}>
                    <div css={s.logobox}>
                        <button>이벤트 이동</button>
                        <Link to={"/"}>LOGO</Link>
                    </div>
                    <SearchBox check={check} setCheck={setCheck} inputvalue={inputvalue} setInputvalue={setInputvalue} />
                </div>
                <Cafelist check={check} inputvalue={inputvalue}/>
            </div>
            <Map css={s.map} center={center}>
                <MapTypeControl position={"TOPRIGHT"} />
                <ZoomControl position={"RIGHT"} />
                {cafe.data?.data.map((result) => (
                    <EventMarkerContainer
                        position={{ lat: result.lat, lng: result.lng }} // 마커를 표시할 위치
                        cafe={result} // 카페 리스트 객체
                    />
                ))}
            </Map>
        </div>
    );
}

export default MapPage;