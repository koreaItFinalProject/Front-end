import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MyPage(props) {
    return (
        <div css={s.layout}>
            <div css={s.profileBox}>
                <div css={s.profile}>
                    <div>
                        <input type="file" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPage;