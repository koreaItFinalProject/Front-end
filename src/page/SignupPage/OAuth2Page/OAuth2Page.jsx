import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import OAuth2Merge from '../../../components/Oauth2/OAuth2Merge/OAuth2Merge';
import Oauth2Login from '../../../components/Oauth2/Oauth2Login/Oauth2Login';

function OAuth2Page(props) {
  const [ selectMenu, setSelectMenu ] = useState(true);

  const handelSelectMenu = () => {
    setSelectMenu(!selectMenu)
  }

  return (
    <div css={s.layout}>
      <button onClick={handelSelectMenu}>누르기</button>
      {
        selectMenu === true ?<OAuth2Merge/> : <Oauth2Login/>
      }
    </div>
  );
}

export default OAuth2Page;