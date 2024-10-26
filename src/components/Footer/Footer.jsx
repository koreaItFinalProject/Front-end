import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { FaList } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";

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
      <button onClick={() => navigate('/board?page=1')}><GoHomeFill />게시판</button>
      <button onClick={handleListClick}><FaList />리스트</button>
      <button onClick={handleMapClick}><LuMapPin />지도</button>
      <button onClick={() => navigate('/user/signin')}><MdManageAccounts />사용자</button>
      <button onClick={handleLogoutButtonOnClick}>로그아웃</button>
    </div>
  );
}

export default Footer;