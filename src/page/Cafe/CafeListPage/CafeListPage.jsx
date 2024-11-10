/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectCategory from '../../../components/SelectCategory/SelectCategory';
import { useCafeQuery } from '../../../apis/CafeApis/getCafeListApi';
import { MdRateReview } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";

function CafeListPage({ check, setCheck, inputvalue, setInputvalue }) {
    const navigate = useNavigate();
    const [sortOption, setSortOption] = useState('like');
    const [sortedCafeList, setSortedCafeList] = useState([]);
    const [inputdata, setInputData] = useState("");
    const { data: cafeList } = useCafeQuery(check, inputvalue, {
        onSuccess: (data) => {
            setSortedCafeList(data);
        }
    });

    useEffect(() => {
        if (cafeList) {
            const sortedList = [...cafeList].sort((a, b) => {
                if (sortOption === 'like') {
                    return b.likeCount - a.likeCount; // 인기순 정렬
                } else if (sortOption === 'review') {
                    return b.reviewCount - a.reviewCount; // 리뷰순 정렬
                }
                return 0;
            });
            setSortedCafeList(sortedList);
        }
    }, [cafeList, sortOption]);

    const handleInputOnChange = (e) => {
        setInputData(e.target.value);
    }

    const handleSearchOnClick = () => {
        setInputvalue(inputdata);
    }

    const handleInputKeyPress = (e) => {
        if (e.key === "Enter") {
            setInputvalue(inputdata);
        }
    }

    const handleCafeClick = (cafeItem) => {
        navigate(`/cafe/detail/${cafeItem.id}`);
    }

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    }

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <div css={s.box}>
                    <h2>CafeInBusan</h2>
                    <input type="text"
                        value={inputdata}
                        onChange={handleInputOnChange}
                        onKeyDown={handleInputKeyPress}
                        spellCheck="false"
                        placeholder='카페를 검색하세요'
                    />
                    <select onChange={handleSortChange}>
                        <option value="like">인기순</option>
                        <option value="review">리뷰순</option>
                    </select>
                </div>
                <div>
                    <SelectCategory check={check} setCheck={setCheck} />
                </div>
            </div>
            <div css={s.listContainer}>
                {
                    sortedCafeList?.map((cafeItem, index) => (
                        cafeItem.id ? (
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
                        ) : null
                    ))}
            </div>
        </div>
    );
}

export default CafeListPage;