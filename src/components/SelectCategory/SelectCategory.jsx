/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SelectCategory({ check, setCheck }) {
    
    const handleClick = (category) => {
        setCheck(check === category ? "전체" : category);
    };

    return (
        <>
            <button
                onClick={() => handleClick("베이커리")}
                css={s.bakeryButton(check === "베이커리")}
            >
                베이커리
            </button>
            <button
                onClick={() => handleClick("브런치")}
                css={s.brunchButton(check === "브런치")}
            >
                브런치
            </button>
            <button
                onClick={() => handleClick("분위기")}
                css={s.atmosphereButton(check === "분위기")}
            >
                분위기
            </button>
            <button
                onClick={() => handleClick("디저트")}
                css={s.dessertButton(check === "디저트")}
            >
                디저트
            </button>
        </>
    );
}

export default SelectCategory;
