import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Menus } from '../../apis/util/sideMenubar/Menus';
import Menu from '../../apis/util/sideMenubar/MenuItem';



function SideBar(props) {
  return (
    <div css={s.layout}>
      {Menus.map((menu, index) => (
        <Menu key={index} title={menu.title} icon={menu.icon} path={menu.path} />
      ))}
    </div>
  );
}

export default SideBar;