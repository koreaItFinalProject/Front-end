import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
function UserInfo({ info }) {
    console.log(info);
    return (
        <div css={s.layout}>
            <div>이미지: {info.img}</div>
            <div>{info.id}</div>
            <div>username: {info.username}</div>
            <div>name: {info.name}</div>
            <div>email: {info.email}</div>
            <div>phonenumber: {info.phonenumber}</div>
        </div>
    );
}

export default UserInfo;