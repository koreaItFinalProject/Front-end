import React from 'react';
import Header from '../../components/Header/Header';
/** @jsxImportSource @emotion/react */
import * as s from "./style";


function UserSigninpage(props) {
    return (
        <div>
            <Header/>
            <div css={s.layout}>
                로그인
                <div css={s.selectMember}>
                    <div>개인 회원</div>
                    <div>기업 회원</div>
                </div>
                {
                    
                }
            </div>
        </div>
    );
}

export default UserSigninpage;