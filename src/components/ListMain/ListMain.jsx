import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function ListMain(props) {
    return (
        <div css={mainBox}>
            <div css={adornmentBox}></div>
            <div css={searchBox}>검색</div>
            <div></div>
        </div>
    );
}

export default ListMain;