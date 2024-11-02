import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import BackButton from '../../../components/BackButton/BackButton';
import { useNavigate } from 'react-router-dom';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { instance } from '../../../apis/util/instance';
import { FaPlus } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";

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
                const totalPageCount = lastPage.totalCount % limit === 0
                ? lastPage.data.totalCount / limit
                : Math.floor(lastPage.totalCount / limit) + 1
                return totalPageCount !== allPage.length ? allPage.length + 1 : null;
            },
            onSuccess: (response) => {
                console.log(response.pages);
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
            <div css={s.boardListLayout}>
                {
                    sortedNoticeList?.map((board, index) => {
                        const mainImgStartIndex = board.content.indexOf("<img");
                        let mainImg = board.content.slice(mainImgStartIndex);
                        mainImg = mainImg.slice(0, mainImg.indexOf(">") + 1);
                        const mainImgSrc = mainImg.slice(mainImg.indexOf("src") + 5, mainImg.length - 2);

                        return (
                            <div key={index} css={s.noticeLayout} onClick={() => navigate(`/owner/notice/detail/${board.id}`)}>
                                <div css={s.noticeInfoLayout}>
                                    <h1>{board.title}</h1>
                                    <div css={s.writerAndWriteDate}>
                                        <p>{board.nickname} </p>
                                        <p>{board.writeDate}</p>
                                    </div>
                                    <div css={s.counts}>
                                        <p><BsEye />{board.viewCount}</p>
                                        <p><CiChat1 />{board.commentCount}</p>
                                    </div>
                                </div>
                                <div css={s.noticeImgContainer}>
                                    <img src={mainImgSrc} alt="" />
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div ref={loadMoreRef}></div>
        </div>
    );
}

export default CafeNoticeListPage;