import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import BackButton from '../../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { instance } from '../../../apis/util/instance';
import { FaPlus } from "react-icons/fa6";
import NoticeList from '../../../components/NoticeList/NoticeList';

function CafeNoticeListPage(props) {
    const loadMoreRef = useRef(null);
    const [isAscending, setIsAscending] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [loadedNoticeList, setLoadedNoticeList] = useState([]);
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const accessCheck = queryClient.getQueryData("userInfoQuery");
    const limit = 20;

    const noticeList = useInfiniteQuery(
        ["noticeListQuery"],
        async ({ pageParam = 1 }) => {
            const response = await instance.get('/owner/notice', {
                params: {
                    page: pageParam,
                    limit,
                    searchValue: searchValue
                }
            });
            return response?.data;
        },
        {
            getNextPageParam: (lastPage, allPage) => {
                const totalPageCount = lastPage?.totalCount % limit === 0
                    ? lastPage?.totalCount / limit
                    : Math.floor(lastPage?.totalCount / limit) + 1
                return totalPageCount !== allPage.length ? allPage.length + 1 : null;
            },
            onSuccess: (response) => {
                setLoadedNoticeList(response.pages.flatMap(page => page.boards));
            },
            retry: 0,
            refetchOnWindowFocus: false,
        }
    )

    useEffect(() => {
        if (!noticeList.hasNextPage || !loadMoreRef.current) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                noticeList.fetchNextPage();
            }
        }, {
            rootMargin: '200px',
            threshold: 0.1
        });

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();

    }, [noticeList.hasNextPage]);

    const sortedNoticeList = [...loadedNoticeList].sort((a, b) => {
        return !isAscending ?
            new Date(b.writeDate) - new Date(a.writeDate) :
            new Date(a.writeDate) - new Date(b.writeDate);
    })

    const handleWriteOnClick = () => {
        if (!accessCheck?.data) {
            alert("로그인 후 작성해주세요.");
            navigate("/user/signin");
            return;
        }
        navigate("/owner/notice/write");
    }

    const handleSearchInputOnChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSearchOnClick = (e) => {
        noticeList.refetch();
    }

    const handleEnterInput = (e) => {
        if (e.key === "Enter") {
            noticeList.refetch();
        }
    }

    const handleOnRecentClick = () => {
        console.log(isAscending);
        setIsAscending(false);
    }

    const handleOnOldClick = () => {
        setIsAscending(true);
    }

    console.log(noticeList);

    return (
        <div css={s.layout}>
            <BackButton prevPage={'마이페이지'} prevPageUrl={'/owner/mypage'} />
            <div css={s.searchContainer}>
                <input
                    type="text"
                    placeholder='공지사항을 검색하세요'
                    onChange={handleSearchInputOnChange}
                    onKeyDown={handleEnterInput}
                    name=""
                    value={searchValue}
                />
                <button onClick={handleSearchOnClick}>검색</button>
                <button onClick={handleWriteOnClick}>공지추가<FaPlus /></button>
            </div>
            <div css={s.boardNavigater}>
                <button
                    css={!isAscending ? s.activeButton : s.sortButton}
                    onClick={handleOnRecentClick}
                >최신순
                </button>
                <button
                    css={isAscending ? s.activeButton : s.sortButton}
                    onClick={handleOnOldClick}
                >오래된순
                </button>
            </div>
            <NoticeList sortedNoticeList={sortedNoticeList} prevPage={'list'} />
            <div ref={loadMoreRef}></div>
        </div>
    );
}

export default CafeNoticeListPage;