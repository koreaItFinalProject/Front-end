import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import BackButton from '../../../components/BackButton/BackButton';

function NoticeListPage(props) {
    return (
        <div css={s.layout}>
            <BackButton prevPage={'마이페이지'} prevPageUrl={'/owner/mypage'}/>
        </div>
    );
}

export default NoticeListPage;