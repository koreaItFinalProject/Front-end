import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../Header/Header';


function MainLayout({children}) {
    return (
        <div css={s.background}>
            <div css={s.layout}>
                <div css={s.camera}>
                    <div></div>
                    <div></div>
                    <div>
                        <div></div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div css={s.container}>
                    {children}
                    <Header/>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;