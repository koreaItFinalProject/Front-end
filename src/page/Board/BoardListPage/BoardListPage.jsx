/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from "react-query";
import BoardList from "../../../components/Board/BoardList/BoardList";
import { confirmAlert } from "../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert";
import { FaPlus } from "react-icons/fa6";

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
            confirmAlert("로그인 후 작성 가능합니다.");
            return;
        }
        navigate("/board/write");
    }

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <div css={s.box}>
                    <h2>CafeInBusan</h2>
                    <input
                        type="text"
                        placeholder='검색어를 입력하세요'
                        onChange={handleSearchInputOnChange}
                        onKeyDown={handleEnterInput}
                        name=""
                        value={searchValue}
                    />
                    <select name="searchFilter" onChange={handleFilterOnChange}>
                        <option name="title" value={"title"}>제목</option>
                        <option name="writer" value={"writer"}>작성자</option>
                    </select>
                </div>
                <div css={s.boardSelector}>
                    <div>
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
                    <button css={s.writeButton} onClick={handleWriteOnClick}>게시글 작성<FaPlus /></button>
                </div>
            </div>
            <div css={s.boardListLayout}>
                <BoardList boardList={boardList} loadMoreRef={loadMoreRef} />
                <div ref={loadMoreRef} css={s.ref}></div>
            </div>
        </div>
    );
}

export default BoardListPage;
