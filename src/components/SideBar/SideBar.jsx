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
  const userInfoState =queryClient.getQueryState();
  const [ uploadPercent , setUploadPercent] = useState();
  const navigate = useNavigate();
  return (
    <div css={s.layout}>
      <div css={s.profile}>
          <div onClick={() => navigate('/')}>
            <img src={logo} alt="" />
            <h1>CAFE DEV</h1>
          </div>
          <div>
            <img onClick='' src="https://believesewoong.co.kr/images/sph_user.png" alt="프로필이미지" />
          </div>
          <div>사용자이름</div>
          <div>관리자</div>
          <button>로그아웃</button>
      </div>
      <div css={s.sidebox}>
        {Menus.map((menu, index) => (
          <Menu key={index} title={menu.title} icon={menu.icon} path={menu.path} />
        ))}
      </div>
      <div css={s.footbox}>

      </div>
    </div>
  );
}

export default SideBar;