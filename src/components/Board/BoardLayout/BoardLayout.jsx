import React, { useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../../Header/Header';
import BoardFooter from '../BoardFooter/BoardFooter';
import { useLocation } from 'react-router-dom';
import Footer from '../../Footer/Footer';

function BoardLayout({ children, setCheck, setInputvalue }) {
    const location = useLocation();

    const renderFooter = () => {
        if (location.pathname === '/board') {
            return <Footer setCheck={setCheck} setInputvalue={setInputvalue} />;
        } else if (location.pathname === '/board/write' || location.pathname === '/board/modify/:boardId') {
            return <></>;
        } else if (location.pathname === '/map') {
            return <></>;
        } else {
            return <BoardFooter />;
        }
    };

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
                        <Header />
                    </div>
                    <div css={s.children}>
                        {children}
                    </div>
                    <div css={s.footer}>
                        {renderFooter()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardLayout;