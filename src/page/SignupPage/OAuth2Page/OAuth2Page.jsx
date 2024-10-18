import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import OAuth2Merge from '../../../components/Oauth2/OAuth2Merge/OAuth2Merge';
import { useNavigate } from 'react-router-dom';
import OAuth2Signup from '../../../components/Oauth2/OAuth2Signup/OAuth2Signup';

function OAuth2Page(props) {
  const [ selectMenu, setSelectMenu ] = useState(true);
  const handelSelectMenu = () => {
    setSelectMenu(prevSelectMenu => !prevSelectMenu);
  }

  return (
    <div css={s.layout}>
      <button onClick={handelSelectMenu}>누르기</button>
      {
        selectMenu ?<OAuth2Merge/> : <OAuth2Signup/> 
      }
    </div>
  );
}

export default OAuth2Page;