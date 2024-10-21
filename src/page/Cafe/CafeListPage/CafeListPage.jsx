import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import SelectCategory from '../../../components/SelectCategory/SelectCategory';

function CafeListPage({ check, setCheck, inputvalue, setInputvalue }) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const cafelist = queryClient.getQueryData(["cafeQuery", check, inputvalue]);
    const cafe = cafelist?.data;
    const [inputdata, setInputData] = useState("");

    const handleInputOnChange = (e) => {
        setInputData(e.target.value);
    };

    const handleInputKeyPress = (e) => {
        if (e.key === "Enter") {
            setInputvalue(inputdata);
        }
    };

    const handleCafeClick = (cafeItem) => {
        navigate(`/cafe/detail/${cafeItem.id}`, {state: { cafeItem } });
    }

    return (
        <div css={s.allLayout}>
            <div css={s.box}>
                <div css={s.inputSection}>
                    <input type="text" value={inputdata} onChange={handleInputOnChange} onKeyDown={handleInputKeyPress} spellCheck="false" required />
                    <label>카페이름:</label>
                    <span></span>
                </div>
                <div css={s.selectbutton}>
                    <SelectCategory check={check} setCheck={setCheck} />
                </div>
            </div>
            <div css={s.listContainer}>
                {cafe?.map(cafeItem => (
                    <div css={s.listbox} key={cafeItem.id} onClick={() => handleCafeClick(cafeItem)}>
                        <div css={s.pictureBox}></div>
                        <div css={s.showBox}>
                            <div css={s.spanBox}>
                                <h2>카페 이름: {cafeItem.cafeName}</h2>
                                <p>주소: {cafeItem.address}</p>
                                <p>카테고리: {cafeItem.category}</p>
                            </div>
                            <div css={s.viewBox}>
                                <span>조회:</span>
                                <span>추천:</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CafeListPage;