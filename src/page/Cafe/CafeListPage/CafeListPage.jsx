import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import SelectCategory from '../../../components/SelectCategory/SelectCategory';
import { MdRateReview } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { useCafeQuery } from '../../../apis/CafeApis/getCafeListApi';

function CafeListPage({ check, setCheck, inputvalue, setInputvalue }) {
    const navigate = useNavigate();
    const [inputdata, setInputData] = useState("");
    const { data: cafeList } = useCafeQuery(check, inputvalue);

    const handleInputOnChange = (e) => {
        setInputData(e.target.value);
    };

    const handleInputKeyPress = (e) => {
        if (e.key === "Enter") {
            setInputvalue(inputdata);
        }
    };

    const handleCafeClick = (cafeItem) => {
        navigate(`/cafe/detail/${cafeItem.id}`);
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
                <button onClick={handleInputKeyPress}>검색</button>
                <select name="" id="">
                    <option value="like">인기순</option>
                    <option value="review">리뷰순</option>
                </select>
            </div>
            <div css={s.selectbutton}>
                <SelectCategory check={check} setCheck={setCheck} />
            </div>
            <div css={s.listContainer}>
                {
                    cafeList?.map((cafeItem, index) => (
                        <div css={s.listbox} key={index} onClick={() => handleCafeClick(cafeItem)}>
                            <div css={s.pictureBox}>
                                <img src={cafeItem.img} alt="CafeImg" />
                            </div>
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