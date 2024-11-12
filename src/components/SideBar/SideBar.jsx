import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Menus } from '../../apis/util/sideMenubar/Menus';
import Menu from '../../apis/util/sideMenubar/MenuItem';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';


function SideBar(props) {
  const queryClient = useQueryClient();
  const userInfoState = queryClient.getQueryData("userInfoQuery");
  const [uploadPercent, setUploadPercent] = useState();
  const navigate = useNavigate();

  console.log(userInfoState);
  return (
    <div css={s.layout}>
      <div css={s.profile}>
        <div onClick={() => navigate('/')}>
          <img src={logo} alt="" />
          <h1>CAFE DEV</h1>
        </div>
        <div>
          <img src={userInfoState?.data.img} alt="프로필이미지" />
        </div>
        <div>{userInfoState?.data.name}</div>
        <div>{userInfoState?.data.role}</div>
      </div>
      <div css={s.sidebox}>
        {Menus.map((menu, index) => (
          <Menu key={index} title={menu.title} icon={menu.icon} path={menu.path} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;