import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import OAuth2Merge from '../../../components/Oauth2/OAuth2Merge/OAuth2Merge';
import { useNavigate } from 'react-router-dom';

function OAuth2Page(props) {
  const [ selectMenu, setSelectMenu ] = useState(true);
  const navigate = useNavigate();
  const handelSelectMenu = () => {
    setSelectMenu(prevSelectMenu => !prevSelectMenu);
  }

  return (
    <div css={s.layout}>
      <button onClick={handelSelectMenu}>누르기</button>
      {
        selectMenu ?<OAuth2Merge/> : navigate(()=> ('/user/signin')) 
      }
    </div>
  );
}

export default OAuth2Page;