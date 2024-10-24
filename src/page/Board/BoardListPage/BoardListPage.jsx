/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useRef, useState } from 'react';
import 'swiper/css'
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from "react-query";
import BoardList from "../../../components/Board/BoardList/BoardList";

function BoardListPage({ boardList, fetchNextPage, hasNextPage, refetch, setSearchFilter, searchValue, setSearchValue }) {
    const [selectedButton, setSelectedButton] = useState('공지');
    const loadMoreRef = useRef(null);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const accessCheck = queryClient.getQueryData("userInfoQuery");

    useEffect(() => {
        if (!hasNextPage || !loadMoreRef.current) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                fetchNextPage();
            }
        }, {
            rootMargin: '1000px',
            threshold: 0.1
        });

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();

    }, [hasNextPage, fetchNextPage]);

    const handleFilterOnChange = (e) => {
        setSearchFilter(e.target.value);
    }

    const handleSearchInputOnChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSearchOnClick = (e) => {
        refetch();
    }

    const handleEnterInput = (e) => {
        if (e.key === "Enter") {
            refetch();
        }
    }

    const handleNavButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const handleWriteOnClick = () => {
        if (!accessCheck?.data) {
            alert("로그인 후 작성해주세요.");
            navigate("/user/signin");
            return;
        }
        navigate("/board/write")
    }

    return (
        <div css={s.layout}>
            <h1 css={s.title}>Community</h1>
            <div css={s.boardListHeader}>
                <select name="searchFilter" onChange={handleFilterOnChange}>
                    <option name="title" value={"title"}>제목</option>
                    <option name="writer" value={"writer"}>작성자</option>
                </select>
                <div css={s.searchBox}>
                    <input
                        type="text"
                        placeholder='검색어를 입력하세요'
                        onChange={handleSearchInputOnChange}
                        onKeyDown={handleEnterInput}
                        name=""
                        value={searchValue}
                    />
                    <button onClick={handleSearchOnClick}>검색</button>
                </div>
                <button css={s.writeButton} onClick={handleWriteOnClick}>글쓰기</button>
            </div>
            <div css={s.boardNavigater}>
                <button onClick={() => handleNavButtonClick('공지')}>공지사항</button>
                <button onClick={() => handleNavButtonClick('자유')}>자유</button>
            </div>
            <div css={s.boardListLayout}>
                <div css={s.boardList}>
                    <BoardList boardList={boardList} loadMoreRef={loadMoreRef} />
                    <div ref={loadMoreRef} css={s.ref}></div>
                </div>
            </div>
        </div>
    );
}

export default BoardListPage;