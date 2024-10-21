import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function CafeMenu(props) {
    return (
        <div css={s.layout}>
            <h1>Menu</h1>
            <div css={s.menuList}>
                <div>카페라떼</div>
                <div>5,500</div>
            </div>
        </div>
    );
}

export default CafeMenu;