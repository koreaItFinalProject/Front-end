import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SideBar from '../../SideBar/SideBar';
import ManagerTitle from '../../ManagerTitle/ManagerTitle';


function ManagerMainLayout({ children }) {
    return (
        <div css={s.layout}>
            <SideBar />
            <div css={s.container}>
                <ManagerTitle/>
                <div css={s.contentBox}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ManagerMainLayout;