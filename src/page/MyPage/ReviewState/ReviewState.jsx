import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import StarRating from '../../../apis/util/starRating';
import { useMyPageDeleteMutation } from '../../../apis/useMyPageDeleteMutation/useMyPageDeleteMutation';

function ReviewState({ review }) {
    const [recent, setRecent] = useState(false);
    const navigate = useNavigate();
    const param = "review";
    const deleteMutation = useMyPageDeleteMutation(param);
    const sortedPosts = [...review].sort((a, b) => {
        return !recent ?
            new Date(b.writeDate) - new Date(a.writeDate) :
            new Date(a.writeDate) - new Date(b.writeDate);
    });

    const handeleOnRecentClick = () => {
        setRecent(!recent);
    }

    const handleDeleteClick = async (id) => {
        const selection = window.confirm("게시글을 삭제하시겠습니까?");
        if (selection) {
            deleteMutation.mutateAsync(id)
        }
    }

    return (
        <div css={s.mainLayout}>
            <div css={s.AllPost}>
                <p>
                    게시글 수 : {review.length}
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
            <div>
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
                                        dimension={"15px"}
                                        spacing={1}
                                    />
                                </div>
                                <div>
                                    <p onClick={() => navigate(`/cafe/detail/${result.cafeId}`)}>{result.cafeName} </p>
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
                            <button onClick={() => handleDeleteClick(result.cafeId)}>삭제</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewState;