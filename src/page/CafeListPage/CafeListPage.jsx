import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQueryClient } from 'react-query';
import SelectCategory from '../../components/SelectCategory/SelectCategory';

function CafeListPage({ check, setCheck, inputvalue, setInputvalue }) {
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

    return (
        <div css={s.allLayout}>
            <div css={s.box}>
                <div css={s.inputSection}>
                    <p>검색:</p>
                    <input type="text" value={inputdata} onChange={handleInputOnChange} onKeyDown={handleInputKeyPress}/>
                </div>
                <div css={s.selectbutton}>
                    <SelectCategory check={check} setCheck={setCheck}/>
                </div>
            </div>
            <div css={s.listContainer}>
                {cafe?.map((cafeItem, index) => (
                    <div css={s.listbox} key={index}>
                        <div css={s.pictureBox}></div>
                        <div css={s.showBox}>
                            <div css={s.viewBox}>
                                <p>조회</p>
                                <p>추천</p>
                            </div>
                            <div css={s.spanBox}>
                                <p>카페 이름: {cafeItem.cafeName}</p>
                                <p>주소: {cafeItem.address}</p>
                                <p>카테고리: {cafeItem.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CafeListPage;