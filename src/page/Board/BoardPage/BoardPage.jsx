/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from 'react';
import 'swiper/css'
import 'swiper/css/pagination';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { instance } from '../../../apis/util/instance';
import { useQuery } from "react-query";
import BoardList from "../../../components/BoardList/BoardList";

function BoardPage(props) {
    const [searchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState("");
    const [searchFilter, setSearchFilter] = useState("title");
    const [isClick, setIsClick] = useState(false);
    const [selectedButton, setSelectedButton] = useState('공지');
    const page = searchParams.get("page")
    const limit = 20;
    const navigate = useNavigate();

    const boardList = useQuery(
        ["boardListQuery", page, isClick === true],
        async () => {
            const response = await instance.get(`/board/list?page=${page}&limit=${limit}&searchFilter=${searchFilter}&searchValue=${searchValue}`);
            return response;
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setIsClick(false);
            }
        }
    );

    const handleFilterOnChange = (e) => {
        setSearchFilter(e.target.value);
    }

    const handleSearchInputOnChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSearchOnClick = (e) => {
        setIsClick(true);
    }

    const handleEnterInput = (e) => {
        if (e.key === "Enter") {
            setIsClick(true);
        }
    }

    const handleNavButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <div css={s.layout}>
            <div css={s.boardHeader}>
                <h1>커뮤니티</h1>
            </div>
            <div css={s.boardNavigater}>
                <button
                    onClick={() => handleNavButtonClick('공지')}
                    style={{ fontWeight: selectedButton === '공지' ? 'bold' : 'normal' }}
                >
                    공지
                </button>
                <button
                    onClick={() => handleNavButtonClick('자유')}
                    style={{ fontWeight: selectedButton === '자유' ? 'bold' : 'normal' }}
                >
                    자유
                </button>
            </div>
            <div css={s.boardListHeader}>
                <h3>총 {boardList?.data?.data.totalCount}개</h3>
                <select name="searchFilter" onChange={handleFilterOnChange}>
                    <option name="title" value={"title"}>제목</option>
                    <option name="writer" value={"writer"}>작성자</option>
                </select>
                <div css={s.searchBox}>
                    <input
                        type="text"
                        placeholder='검색'
                        onChange={handleSearchInputOnChange}
                        onKeyDown={handleEnterInput}
                        name=""
                        value={searchValue}
                    />
                    <button onClick={handleSearchOnClick}>검색</button>
                </div>
                <button css={s.writeButton} onClick={() => navigate("/board/write")}>글쓰기</button>
            </div>
            <div css={s.boardListLayout}>
                <BoardList isClick={isClick} page={page} />
            </div>
        </div>
    );
}

export default BoardPage;