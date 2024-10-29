import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ReviewState({isCount}) {
    return (
        <div>
            <div css={s.mainLayout}>
                <div css={s.content}>
                    {isCount.map((result, index) => (
                        <div css={s.layout}>
                            <div>{index + 1}</div>
                            <div>{result.title}</div>
                            <div>{result.view_count}</div>
                            <div>{result.writeDate}</div>
                            <button>수정</button>
                            <button>삭제</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReviewState;