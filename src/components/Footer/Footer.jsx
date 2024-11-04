import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { FaList } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { useQueryClient } from 'react-query';

function Footer({ setCheck, setInputvalue }) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const accessCheck = queryClient.getQueryData("userInfoQuery"); 

    const handleLogoutButtonOnClick = () => {
        localStorage.removeItem("accessToken");
        window.location.replace("/");
    }

    const handleListClick = () => {
        navigate('/cafe/list');
        setCheck("전체");
        setInputvalue("");
    }

    const handleMapClick = () => {
        navigate('/map');
        setCheck("전체");
        setInputvalue("");
    }

    const handleMyPageOnClick = () => {
        if (!accessCheck) {
            navigate('/user/select/signup');
            return;
        }
        navigate("/mypage");
    }

    return (
        <div css={s.layout}>
            <button onClick={handleMapClick}><FaMap /></button>
            <button onClick={handleListClick}><FaList /></button>
            <button onClick={() => navigate('/board?page=1')}><BsChatLeftTextFill /></button>
            <button onClick={handleMyPageOnClick}><FaUserLarge /></button>
        </div>
    );
}

export default Footer;