import React, { useState } from 'react';
import { handleloginInputOnChange } from '../../apis/util/handleloginInputOnChange/handleloginInputOnChange';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import valueDuplicateCheckValue from '../../apis/EmptyDuplicateCheckValue/valueDuplicateCheckValue';
import DuplicateCheckValue from '../../apis/userFindByInfo/DuplicateCheckValue';
import { confirmAlert } from '../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';

function FindByPassword(props) {
  const [isUsernameCheck, setUsernameCheck] = useState(false);
  const [inputUser, setInputUser] = useState({
    email: '',
    username:''
  });

  const handleInputOnChange = (e) => {
    setInputUser(e.target.value);
    console.log(inputUser);
  }

  const handleUsernameCheck = async () => {
    
    if (!valueDuplicateCheckValue(inputUser)) {
    } else {
      confirmAlert("해당 아이디를 찾을 수가 없습니다.");
      return;
    }
    const response = await DuplicateCheckValue("username", inputUser);

    if(response.status === 200){
      
    }else{
      confirmAlert("다시 시도해주세요")
    }
    
  }

  const handlePasswordCheck = () => {

  } 

  return (
      <div css={s.login}>
          <div css={s.loginInput}>
              <div css={s.loginTitle}>
                <p>비밀번호 찾기</p>
              </div>
              <input type="text" name="username" autoComplete="off" onChange={handleInputOnChange} value={inputUser.username} placeholder='아이디' />
              <input type="email" name="email" autoComplete="off" onChange={handleInputOnChange} value={inputUser.email} placeholder='이메일' />
              <button onClick={() => handleUsernameCheck(inputUser.username, inputUser.email)}>확인</button>
              {
                isUsernameCheck? 
                <div css={s.loginTitle}>
                  <input type="password" name="password" autoComplete="off" onChange={handleInputOnChange} value={inputUser.password} placeholder='새 비밀번호' />
                  <input type="password" name="passwordCheck" autoComplete="off" onChange={handleInputOnChange} value={inputUser.password} placeholder='비밀번호 확인' />
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