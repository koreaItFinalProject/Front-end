import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';


function AdminCafeList({ cafemanager }) {
    const [recent, setRecent] = useState(false);
    const navigate = useNavigate();
    const sortedPosts = [...cafemanager].sort((a, b) => {
        return !recent ?
            new Date(b.commentWriteDate) - new Date(a.commentWriteDate) :
            new Date(a.commentWriteDate) - new Date(b.commentWriteDate);
    });

    return (
        <div css={s.mainLayout}>
            <div css={s.AllPost}>
                <p>
                    카페 수 : {cafemanager.length}
                </p>
            </div>
            <di>
                {sortedPosts.map((result) => (
                    <div css={s.layout} key={result.id} >
                        <div css={s.imgTitle}>
                            <div css={s.img}>
                                <img src={result.img} alt="" />
                            </div>
                            <div css={s.title} >
                                <div>
                                    <p onClick={() => navigate(`/cafe/detail/${result.id}`)}>{result.cafeName} </p>
                                </div>
                                <div>
                                    {result.address}
                                </div>
                                <div css={s.category}>
                                    {result.category}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </di>
        </div>

    );
}

export default AdminCafeList;