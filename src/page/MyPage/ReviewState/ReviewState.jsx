import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import myPageDeleteApi from '../../../apis/myPageDeleteApi/myPageDeleteApi';
import StarRating from '../../../apis/util/starRating';

function ReviewState({ isCount }) {
    const [recent, setRecent] = useState(false);
    const navigate = useNavigate();
    const Param = "review"
    const sortedPosts = [...isCount].sort((a, b) => {
        return !recent ?
            new Date(b.writeDate) - new Date(a.writeDate) :
            new Date(a.writeDate) - new Date(b.writeDate);
    });

    const handeleOnRecentClick = () => {
        setRecent(!recent);
    }

    const handleDeleteClick = async (Param, id) => {
        const selection = window.confirm("게시글을 삭제하시겠습니까?");
        let response = null;
        if (selection) {
            response = await myPageDeleteApi(Param, id);
            console.log(response);
        } else if (response.status !== 200) {
            alert("삭제 실패")
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
                    !recent ?
                        <button onClick={handeleOnRecentClick}>최신순</button>
                        :
                        <button onClick={handeleOnRecentClick}>과거순</button>
                }
            </div>
            <di>
                {sortedPosts.map((result) => (
                    <div css={s.layout} key={result.cafeId} >
                        <div css={s.view}>
                            <p>입력 날짜 : {result.writeDate}</p>
                        </div>
                        <div css={s.imgTitle}>
                            <div css={s.img}>
                                <img src={result.img} alt="" />
                            </div>
                            <div css={s.title} >
                                <div css={s.reviewStat}>
                                    <StarRating
                                        averageRating={result.rating}
                                    />
                                </div>
                                <div>
                                    <p onClick={() => navigate(`/board/detail/${result.boardId}`)}>{result.cafeName} </p>
                                </div>
                                <div>
                                    {result.review}
                                </div>
                                <div css={s.category}>
                                    {result.category}
                                </div>

                            </div>
                        </div>
                        <div css={s.button}>
                            <button onClick={() => handleDeleteClick(Param, result.cafeId)}>삭제</button>
                        </div>
                    </div>
                ))}
            </di>
        </div>
    );
}

export default ReviewState;