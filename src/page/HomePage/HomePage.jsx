import React from 'react';
import Header from '../../components/Header/Header';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function HomePage(props) {
    return (
        <div css={s.layout}>
            <Header/>
        </div>
    );
}

export default HomePage;