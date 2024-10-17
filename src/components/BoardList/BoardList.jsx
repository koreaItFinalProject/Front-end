import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoMdHeart } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function BoardList({ data, loadMoreRef }) {
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (loadMoreRef.current && loadMoreRef.current) {
    //         loadMoreRef.current.appendChild(loadMoreRef.current);
    //     }
    // }, []);

    return (
        <ul css={s.cardLayout} ref={loadMoreRef}>
            {
                data?.pages.map((page, pageIndex) => (
                    <React.Fragment key={pageIndex}> {
                        page.data.boards.map(board => {
                            const mainImgStartIndex = board.content.indexOf("<img");
                            let mainImg = board.content.slice(mainImgStartIndex);
                            mainImg = mainImg.slice(0, mainImg.indexOf(">") + 1);
                            const mainImgSrc = mainImg.slice(mainImg.indexOf("src") + 5, mainImg.length - 2)

                            let mainContent = board.content;
                            while (true) {
                                const pIndex = mainContent.indexOf("<p>");
                                if (pIndex === -1) { // p태그가 없는 상황 
                                    mainContent = ""; // p태그가 없으면 출력되지 않게 비워줌
                                    break;
                                }
                                mainContent = mainContent.slice(pIndex + 3);
                                if (mainContent.indexOf("<img") !== 0) {
                                    if (mainContent.includes("<img")) {
                                        mainContent = mainContent.slice(0, mainContent.indexOf("<img"));
                                        break;
                                    }
                                    mainContent = mainContent.slice(0, mainContent.indexOf("</p>")); // 다음 p태그 안의 내용을 mainContent에 넣어준다. 
                                    break;
                                }
                            }

                            return (
                                <li key={board.id} css={s.card} onClick={() => navigate(`/board/detail/${board.id}`)}>
                                    <main css={s.cardMain}>
                                        {
                                            mainImgStartIndex !== -1 &&
                                            <div css={s.cardImg}>
                                                <img src={mainImgSrc} alt="" />
                                            </div>
                                        }
                                        <div css={s.cardContent(mainImgStartIndex !== -1)}>
                                            <h3>{board.title}</h3>
                                            <div dangerouslySetInnerHTML={{ __html: mainContent }}></div>
                                        </div>
                                    </main>
                                    <footer css={s.cardFooter}>
                                        <div>
                                            <img src={board.writerProfileImg} alt="" />
                                            <span>by </span>
                                            {board.nickname}
                                        </div>
                                        <div><IoMdHeart /><span>{board.likeCount}</span></div>
                                    </footer>
                                </li>
                            );
                        })}
                    </React.Fragment>
                ))
            }
        </ul>
    );
}

export default BoardList;