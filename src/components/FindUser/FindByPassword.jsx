import React, { useState } from 'react';
import { handleloginInputOnChange } from '../../apis/util/handleloginInputOnChange/handleloginInputOnChange';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import valueDuplicateCheckValue from '../../apis/EmptyDuplicateCheckValue/valueDuplicateCheckValue';

function FindByPassword(props) {
  const [isUsernameCheck, setUsernameCheck] = useState(false);
  const [inputUser, setInputUser] = useState({});

  const handleUsernameCheck = (username , email) => {
    console.log(username , email);
    if (valueDuplicateCheckValue(username)|| valueDuplicateCheckValue(email)) {
      return;
    }
    
    setUsernameCheck(true);
    setInputUser({});
  }

  const handlePasswordCheck = () => {

  } 

  return (
      <div css={s.login}>
          <div css={s.loginInput}>
              <div css={s.loginTitle}>
                <p>비밀번호 찾기</p>
              </div>
              <input type="text" name="username" autoComplete="off" onChange={handleloginInputOnChange(setInputUser)} value={inputUser.username} placeholder='아이디' />
              <input type="email" name="email" autoComplete="off" onChange={handleloginInputOnChange(setInputUser)} value={inputUser.email} placeholder='이메일' />
              <button onClick={() => handleUsernameCheck(inputUser.username, inputUser.email)}>확인</button>
              {
                isUsernameCheck? 
                <div css={s.loginTitle}>
                  <input type="password" name="password" autoComplete="off" onChange={handleloginInputOnChange(setInputUser)} value={inputUser.password} placeholder='새 비밀번호' />
                  <input type="password" name="passwordCheck" autoComplete="off" onChange={handleloginInputOnChange(setInputUser)} value={inputUser.password} placeholder='비밀번호 확인' />
                  <button onClick={handlePasswordCheck}>변경</button>
                </div>
                :
                <></>
              }
          </div>
      </div>
  );
}

export default FindByPassword;