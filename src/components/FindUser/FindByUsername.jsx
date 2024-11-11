import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import valueDuplicateCheckValue from '../../apis/EmptyDuplicateCheckValue/valueDuplicateCheckValue';
import { confirmAlert } from '../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';
import DuplicateCheckValue from '../../apis/userFindByInfo/DuplicateCheckValue';
import { sendEmailFindUsernameApi } from '../../apis/userFindByInfo/sendEmailFindUsernameApi';



function FindByUsername() {
  const [inputUser, setInputUser] = useState({
    email: ''
  });

  const handleInputOnChange = (e) => {
    setInputUser(e.target.value);
    console.log(inputUser);
  }

  const handleUsernameCheck = async () => {

    if (!valueDuplicateCheckValue(inputUser)) {
    } else {
      confirmAlert("해당 이메일로 찾을 수가 없습니다.");
      return;
    }
    const response = await DuplicateCheckValue("FindUser", inputUser);
    console.log(response.email);
    console.log(response.username);
    console.log(response);

    if (response.status === 200) {
      const sendEmail = await sendEmailFindUsernameApi("FindUser", response.data.email, response.data.username);
      console.log(sendEmail);
    } else {
      confirmAlert("다시 시도해주세요");
      return
    }

  }
  return (
    <div css={s.login}>
      <div css={s.loginInput}>
        <div css={s.loginTitle}>
          <p>아이디 찾기</p>
        </div>
        <input
          type="email"
          name="email"
          autoComplete="off"
          onChange={handleInputOnChange}
          value={inputUser.email}
          placeholder='이메일 입력' />
        <button onClick={handleUsernameCheck}>찾기</button>
      </div>
    </div>
  );
}

export default FindByUsername;