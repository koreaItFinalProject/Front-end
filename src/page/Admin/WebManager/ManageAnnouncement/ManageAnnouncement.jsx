import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { instance } from '../../../../apis/util/instance';
import { confirmAlert } from '../../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

function ManageAnnouncement(props) {
  const navigate = useNavigate();
  const [content, setNotice] = useState('');
  const [userId, setUserId] = useState("");

  const handleSubmit = async (id) => {

    const requestBody = {
      type: "공지사항",
      userId: id,
      content: content
    };
    try {
      console.log(requestBody);
      const response = await instance.post('/message', requestBody); // POST 요청
      console.log(response);
      if (response.status === 200) {
        setNotice(''); // 입력 필드 초기화
        confirmAlert('알림 전송되었습니다.');
        // 연결 해제
        // 이 부분은 클라이언트 측에서 연결을 해제하는 로직이 필요함
        // 예: EventSource.close() 호출
        // 하지만 여기서는 연결 해제를 위해서 어떤 상태 관리가 필요할 수 있습니다.

      } else {
        confirmAlert('알림 전송에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
      confirmAlert('서버와의 연결에 실패했습니다.');
    }
  };
  return (
    <div css={s.mainLayout}>
      <div css={s.alarmBanner}>
        <h1>알림 전송</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div css={s.boxLayout}>
          <div css={s.eachBox}>
            <p>알림 내용:</p>
            <textarea
              value={content}
              onChange={(e) => setNotice(e.target.value)}
              required
            />
          </div>
          <div css={s.eachBox}>
            <p>유저 아이디:</p>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
          </div>
        </div>
        <div css={s.button}>
          <button onClick={() => handleSubmit(userId)}>공지사항 보내기</button>
        </div>
      </form>
    </div>
  );
}

export default ManageAnnouncement;