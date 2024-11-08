/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useRef } from 'react';
import 'swiper/css'
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from "react-query";
import BoardList from "../../../components/Board/BoardList/BoardList";
import { FaPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { confirmAlert } from "../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert";
import { showToast } from "../../../apis/util/SweetAlert2/Toast/Toast";

function BoardListPage({ boardList, fetchNextPage, hasNextPage, refetch, setSearchFilter, searchValue, setSearchValue, category, setCategory }) {
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
            rootMargin: '200px',
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

    const handleNavButtonClick = (category) => {
        setCategory(category);
    }

    const handleWriteOnClick = () => {
        if (!accessCheck?.data) {
            confirmAlert("로그인 후 작성해주세요.");
            navigate("/user/signin");
            return;
        }
        navigate("/board/write")
    }

    return (
        <div css={s.layout}>
            <h1 css={s.title}>Community</h1>
            <button css={s.writeButton} onClick={handleWriteOnClick}><FaPlus /></button>
            <div css={s.searchContainer}>
                <input
                    type="text"
                    placeholder='검색어를 입력하세요'
                    onChange={handleSearchInputOnChange}
                    onKeyDown={handleEnterInput}
                    name=""
                    value={searchValue}
                />
                <button onClick={handleSearchOnClick}><IoIosSearch /></button>
                <select name="searchFilter" onChange={handleFilterOnChange}>
                    <option name="title" value={"title"}>제목</option>
                    <option name="writer" value={"writer"}>작성자</option>
                </select>
            </div>
            <div css={s.boardSelector}>
                <button
                    css={[s.baseButtonStyle, category === '공지사항' && s.activeButton]}
                    onClick={() => handleNavButtonClick('공지사항')}
                >공지사항
                </button>
                <button
                    css={[s.baseButtonStyle, category === '자유글' && s.activeButton]}
                    onClick={() => handleNavButtonClick('자유글')}
                >자유
                </button>
            </div>
            <div css={s.boardListLayout}>
                <BoardList boardList={boardList} loadMoreRef={loadMoreRef} />
                <div ref={loadMoreRef} css={s.ref}></div>
            </div>
        </div>
    );
}

export default BoardListPage;