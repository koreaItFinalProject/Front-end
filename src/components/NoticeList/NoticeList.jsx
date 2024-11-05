import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { BsEye } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

function NoticeList({ sortedNoticeList, prevPage, cafeId, cafeName }) {
    const navigate = useNavigate();

    console.log(sortedNoticeList);

    return (
        <div css={s.boardListLayout}>
            {
                sortedNoticeList?.map((board, index) => {
                    const mainImgStartIndex = board.content.indexOf("<img");
                    let mainImg = board.content.slice(mainImgStartIndex);
                    mainImg = mainImg.slice(0, mainImg.indexOf(">") + 1);
                    const mainImgSrc = mainImg.slice(mainImg.indexOf("src") + 5, mainImg.length - 2);

                    return (
                        <div key={index}
                            css={s.noticeLayout}
                            onClick={() => {
                                const path = prevPage === 'detail'
                                    ? `/cafe/notice/detail/${board.id}?cafeId=${cafeId}&cafeName=${cafeName}&selectMenu=notice`
                                    : `/owner/notice/detail/${board.id}`;
                                navigate(path);
                            }}
                        >
                            <div css={s.noticeInfoLayout}>
                                <h1>{board.title}</h1>
                                <div css={s.writerAndWriteDate}>
                                    <p>{board.nickname} </p>
                                    <p>{board.writeDate}</p>
                                </div>
                                <div css={s.counts}>
                                    <p><BsEye />{board.viewCount}</p>
                                    <p><IoMdHeartEmpty />{board.likeCount === null ? 0 : board.likeCount}</p>
                                </div>
                            </div>
                            <div css={s.noticeImgContainer}>
                                {
                                    !mainImgSrc
                                        ?
                                        <></>
                                        :
                                        <img src={mainImgSrc} alt="" />
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default NoticeList;