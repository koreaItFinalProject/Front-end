import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { handleloginInputOnChange } from '../../apis/util/handleloginInputOnChange/handleloginInputOnChange';
import valueDuplicateCheckValue from '../../apis/EmptyDuplicateCheckValue/valueDuplicateCheckValue';
import DuplicateCheckValue from '../../apis/userFindByInfo/DuplicateCheckValue';
import { confirmAlert } from '../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';

function FindByUsername() {
  const [inputUser, setInputUser] = useState({
    email: ''
  });

  const handleUsernameCheck = async () => {
    // if (valueDuplicateCheckValue(inputUser[value])) {
    //   confirmAlert("해당 아이디로 메일을 보내겠습니다.")
    //   return;
    // } else {
    //   confirmAlert("해당 아이디로 찾을 수가 없습니다.")
    // }
    // const response = await DuplicateCheckValue("email", inputUser.email);
    // console.log(response.data);
    // if (response.status === 200) {
    //   const mailResponse = await MailSendApi("email", inputUser, response?.data?.username);
    // }

  }

  return (
    <div css={s.login}>
      <div css={s.loginInput}>
        <div css={s.loginTitle}>
          <p>아이디 찾기</p>
        </div>
        <input type="email" name="email" autoComplete="off" onChange={handleloginInputOnChange(setInputUser)} value={inputUser.email} placeholder='이메일' />
        <button value='email' onClick={handleUsernameCheck}>찾기</button>
      </div>
    </div>
  );
}

export default FindByUsername;