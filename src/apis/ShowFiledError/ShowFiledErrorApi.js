import React from 'react';

const ShowFiledError = (fieldErrors) => {
  let EmptyfieldErrors = {
      username: <></>,
      password: <></>,
      checkPassword: <></>,
      name: <></>,
      email: <></>
  }

  // 해당 에러하나에 하나씩 채워줌 - 키 밸류 형태로 넣음 리스트에 객체 형태
  for (let fieldError of fieldErrors) {
      EmptyfieldErrors = {
          ...EmptyfieldErrors,
          [fieldError.field]: <p>{fieldError.defaultMessage}</p>
      }
  }
  return ShowFiledError;
}

export default ShowFiledError;