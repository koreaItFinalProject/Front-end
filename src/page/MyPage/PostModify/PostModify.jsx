import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';

function PostModify({isCount}) {
    const [recent , setRecent] = useState(false);
    const [modifyTitle , setModifyTitle] = useState(false);
    const [modifyText , setModifyText] = useState("");
    const navigate = useNavigate();
    const sortedPosts = [...isCount].sort((a, b) => b.id - a.id);

    const handeleOnRecentClick = () => {
        setRecent(!recent);
        if(recent === true){

        }
        if(recent === false){

        }
    }

    const handleModifyClick = () => {
        setModifyTitle(!modifyTitle);
    }

    const handleOnChange = (e) => {
        setModifyText(e.target.value);
    }

    const extractImageTags = (content) => {
        const imgTags = content.match(/<img[^>]*\/?>/gi) || [];
        return imgTags.map((img, index) => (
            
            <div key={index} dangerouslySetInnerHTML={{ __html: img }} />
        ));
    };

    return (
            <div css={s.mainLayout}>
                <div>
                    <p>
                      게시글 수 : {isCount.length}
                    </p>
                </div>
                <div css={s.select}>
                    {
                        !recent ?
                        <button onClick={handeleOnRecentClick}>오름차순</button>
                        : 
                        <button onClick={handeleOnRecentClick}>내림차순</button>
                    }
                    <button>조회수</button>
                    <button>날짜</button>
                </div>
                <div css={s.content}>
                    {sortedPosts.map((result) => (
                        <div css={s.layout} key={result.id} >
                            <div css={s.view}><p>조회수 : {result.view_count}</p>
                            <p>입력 날짜 : {result.write_date}</p>
                            </div>
                            <div css={s.imgTitle}>
                                <div css={s.img}>
                                    {extractImageTags(result.content)}
                                </div>
                                <div css={s.title} onClick={() => navigate(`/board/detail/${result.id}`)}>
                                {
                                    !modifyTitle?     
                                    <p>{result.title}</p>
                                    :
                                    <input name="title" value={result.title} onChange={handleOnChange} />
                                    
                                }
                                </div>
                            </div>
                            <div>
                                
                            </div>
                            <div css={s.button}>
                                <button onClick={handleModifyClick}>수정</button>
                                <button>삭제</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default PostModify;