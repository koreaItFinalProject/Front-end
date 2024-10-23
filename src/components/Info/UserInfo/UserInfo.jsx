import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
function UserInfo({ info }) {
    console.log(info);
    return (
        <div css={s.mainLayout}>
            <div css={s.header}>
                <h2>사용자 정보</h2>
            </div>
            <div css={s.layout}>
                <div css={s.profileImg}>
                    이미지: {info.img}
                </div>
                <div css={s.userInfo}>
                    <div>username: {info.username}</div>
                    <div>name: {info.name}</div>
                    <div>email: {info.email}</div>
                    <div>phonenumber: {info.phonenumber}</div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;