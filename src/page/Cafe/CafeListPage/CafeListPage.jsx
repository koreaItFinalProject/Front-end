import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import SelectCategory from '../../../components/SelectCategory/SelectCategory';
import { MdRateReview } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";

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
        navigate(`/cafe/detail/${cafeItem.id}`, { state: { cafeItem } });
    };

    return (
        <div css={s.layout}>
            <h1 css={s.title}>Cafe List</h1>
            <div css={s.searchContainer}>
                <input type="text"
                    value={inputdata}
                    onChange={handleInputOnChange}
                    onKeyDown={handleInputKeyPress}
                    spellCheck="false"
                    placeholder='카페를 검색하세요'
                    required
                />
                <button>검색</button>
                <select name="" id="">
                    <option value="like">인기순</option>
                    <option value="review">리뷰순</option>
                </select>
            </div>
            <div css={s.selectbutton}>
                <SelectCategory check={check} setCheck={setCheck} />
            </div>
            <div css={s.listContainer}>
                {cafe?.map((cafeItem, index) => (
                    <div css={s.listbox} key={index} onClick={() => handleCafeClick(cafeItem)}>
                        <div css={s.pictureBox}></div>
                        <div css={s.showBox}>
                            <div css={s.spanBox}>
                                <h1>{cafeItem.cafeName}</h1>
                                <p>{cafeItem.address}</p>
                                <p>{cafeItem.category}</p>
                            </div>
                            <div css={s.counts}>
                                <div css={s.count}>
                                    <div><MdRateReview /></div>
                                    <div>{cafeItem.reviewCount}</div>
                                </div>
                                <div css={s.count}>
                                    <div><IoMdHeart /></div>
                                    <div>{cafeItem.likeCount}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CafeListPage;