import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useParams } from 'react-router-dom';
import boardDeleteApi from '../../../apis/boardApis/boardDeleteApi';

function PostModify({ isCount }) {
    const [recent, setRecent] = useState(false);
    // const [modifyTitle, setModifyTitle] = useState(false);
    const [modifyText, setModifyText] = useState("");
    const params = useParams();
    const boardId = params.id;
    const navigate = useNavigate();
    const [isAscending, setIsAscending] = useState(false);
    const [isView, setView] = useState(false);
    const sortedPosts = [...isCount].sort((a, b) => {
        if (recent) {
            return isView ? b.view_count - a.view_count : a.view_count - b.view_count;
        }
        else if (!recent) {
            return !isAscending ?
                new Date(b.writeDate) - new Date(a.writeDate) :
                //b.id - a.id : a.id - b.id;
                new Date(a.writeDate) - new Date(b.writeDate);
        }
    })

    console.log(sortedPosts);

    const handleOnRecentClick = () => {
        console.log(isAscending);
        setIsAscending(isAscending === true ? false : true);
        setRecent(false);
    }

    const handleOnViewClick = () => {
        setView(!isView);
        setRecent(true);
    }

    // const handleModifyClick = (e, id) => {
    //     setModifyTitle(!modifyTitle);
    // }

    // const handleNaviClick = (e, id) => {
    //     if (modifyTitle) {
    //         e.preventDefault();
    //         e.stopPropagation();
    //         return;
    //     }
    //     navigate(`/board/detail/${id}`);
    // }

    const handleDeleteClick = async (id) => {
        const selection = window.confirm("게시글을 삭제하시겠습니까?");
        let response = null;
        if (selection) {
            response = await boardDeleteApi(id);
            console.log(response);
        }
    }

    // const handleOnChange = (e) => {
    //     setModifyText(e.target.value);
    // }

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
                                {/* <div css={s.title} onClick={(e) => handleNaviClick(e, result.id)} > */}
                                {/* <div css={s.title} onClick={(e) => handleNaviClick(e, result.id)} disabled={!modifyTitle ? true : false}> */}
                                <p>{result.title}</p>
                                {/* {
                                    !modifyTitle ?
                                        <p>{result.title}</p>
                                        :
                                        <input name="title" value={result.title} onChange={handleOnChange} />
                                } */}
                            </div>
                        </div>
                        <div>
                        </div>
                        <div css={s.button}>
                            {/* {
                                modifyTitle ?
                                    <button onClick={() => handleModifyCheckClick(result.id)}>
                                        확인
                                    </button>
                                    : <></>
                            } */}
                            {/* <button onClick={handleModifyClick}>수정</button> */}
                            <button onClick={() => handleDeleteClick(result.id)}>삭제</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostModify;