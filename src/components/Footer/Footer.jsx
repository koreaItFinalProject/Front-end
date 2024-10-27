import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { FaList } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";

function Footer({ setCheck, setInputvalue }) {
  const navigate = useNavigate();
  const handleLogoutButtonOnClick = () => {
    localStorage.removeItem("accessToken");
    window.location.replace("/");
  }

  const handleListClick = () => {
    navigate('/list'); // 리스트 페이지로 이동
    setCheck("전체");
    setInputvalue("");
  }

  const handleMapClick = () => {
    navigate('/map'); // 지도 페이지로 이동
    setCheck("전체");
    setInputvalue("");
  }
  return (
    <div css={s.layout}>
      <button onClick={handleMapClick}><FaMap /></button>
      <button onClick={handleListClick}><FaList /></button>
      <button onClick={() => navigate('/board?page=1')}><BsChatLeftTextFill /></button>
      <button onClick={() => navigate('/user/signin')}><FaUserLarge /></button>
      <button onClick={handleLogoutButtonOnClick}>로그아웃</button>
    </div>
  );
}

export default Footer;