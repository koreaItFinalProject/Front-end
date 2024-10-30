import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import myPageDeleteApi from '../../../apis/myPageDeleteApi/myPageDeleteApi';

function PostModify({ isCount }) {
    const [recent, setRecent] = useState(false);
    const navigate = useNavigate();
    const param = "board";
    const [isAscending, setIsAscending] = useState(false);
    const [isView, setView] = useState(false);
    const [sortedPosts, setSortedPosts] = useState([]);

    useEffect(() => {
        setSortedPosts = [...isCount].sort((a, b) => {
            if (recent) {
                return isView ? b.view_count - a.view_count : a.view_count - b.view_count;
            }
            else if (!recent) {
                return !isAscending ?
                    new Date(b.writeDate) - new Date(a.writeDate) :
                    new Date(a.writeDate) - new Date(b.writeDate);
            }
        })
    }, [isCount, isAscending, isView])

    const handleOnRecentClick = () => {
        console.log(isAscending);
        setIsAscending(isAscending === true ? false : true);
        setRecent(false);
    }

    const handleOnViewClick = () => {
        setView(!isView);
        setRecent(true);
    }

    const handleDeleteClick = async (Param, id) => {
        const selection = window.confirm("게시글을 삭제하시겠습니까?");
        let response = null;
        if (selection) {
            response = await myPageDeleteApi(Param, id);

            console.log(response);
        }
    }

    const extractImageTags = (content) => {
        const imgTags = content.match(/<img[^>]*\/?>/i) || [];
        return imgTags.map((img, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: img }} />
        ));
    };

    return (
        <div css={s.mainLayout}>
            <div css={s.AllPost}>
                <p>
                    게시글 수 : {isCount.length}
                </p>
            </div>
            <div css={s.select}>
                {
                    !isAscending ?
                        <button onClick={handleOnRecentClick}>최신순</button>
                        :
                        <button onClick={handleOnRecentClick}>과거순</button>
                }
                <button onClick={handleOnViewClick}>조회수</button>
            </div>
            <div css={s.content}>
                {sortedPosts.map((result) => (
                    <div css={s.layout} key={result.id} >
                        <div css={s.view}>
                            <p>조회수 : {result.view_count}</p>
                            <p>입력 날짜 : {result.writeDate}</p>
                        </div>
                        <div css={s.imgTitle}>
                            <div css={s.img}>
                                {extractImageTags(result.content)}
                            </div>
                            <div css={s.title} onClick={() => navigate(`/board/detail/${result.id}`)} >
                                <p>{result.title}</p>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div css={s.button}>
                            <button onClick={() => handleDeleteClick(param, result.id)}>삭제</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostModify;