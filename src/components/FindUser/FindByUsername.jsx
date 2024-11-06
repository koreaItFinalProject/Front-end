import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { handleloginInputOnChange } from '../../apis/util/handleloginInputOnChange/handleloginInputOnChange';
import valueDuplicateCheckValue from '../../apis/EmptyDuplicateCheckValue/valueDuplicateCheckValue';

function FindByUsername() {
  const [isUsernameCheck, setUsernameCheck] = useState(false);
  const [inputUser, setInputUser] = useState({});
  const FindID = null;

  const handleUsernameCheck = async(e) => {
    const {name} = e.target;
    console.log(e.target.value);
    console.log(name);
    if (valueDuplicateCheckValue(inputUser[name])) {
      return;
    }
    const response = 
    setUsernameCheck(true);
    setInputUser({});
  }

  return (
      <div css={s.login}>
          <div css={s.loginInput}>
              <div css={s.loginTitle}>
                <p>아이디 찾기</p>
              </div>
              <input type="email" name="email" autoComplete="off" onChange={handleloginInputOnChange(setInputUser)} value={inputUser.username} placeholder='이메일' />
              <button value='email'onClick={handleUsernameCheck}>찾기</button>
              {
                isUsernameCheck? 
                <div css={s.loginTitle}>
                  <p>당신의 ID : {FindID}</p>
                </div>
                :
                <></>
              }
          </div>
      </div>
  );
}

export default FindByUsername;