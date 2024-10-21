import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../../Header/Header';


function SignLayout({children}) {
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
                    <div css={s.header}>
                        <Header/>
                    </div>
                    <div css={s.children}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignLayout;