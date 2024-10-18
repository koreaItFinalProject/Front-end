import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { FaList } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";

function Footer(props) {
  const navigate = useNavigate();
  const handleLogoutButtonOnClick = () => {
    localStorage.removeItem("accessToken");
    window.location.replace("/");
  }
  const [loginState , setLoginState] = useState(false);
  return (
    <div css={s.layout}>
      <button onClick={() => navigate('/board?page=1')}><GoHomeFill/>게시판</button>
      <button onClick={() => navigate('/list')}><FaList/>리스트</button>
      <button onClick={() => navigate('/map')}><LuMapPin/>지도</button>
      <button onClick={() => navigate('/select/signup')}><MdManageAccounts/>사용자</button>
      <button onClick={handleLogoutButtonOnClick}>로그아웃</button>
    </div>
  );
}

export default Footer;