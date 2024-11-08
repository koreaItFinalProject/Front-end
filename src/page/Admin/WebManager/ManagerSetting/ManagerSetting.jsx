import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { instance } from '../../../../apis/util/instance';
import { confirmAlert } from '../../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';

function ManagerSetting(props) {
  const [content, setNotice] = useState('');
  const [userId, setUserId] = useState("");
  const [type, setType] = useState("");
  const [sendToAll, setSendToAll] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      type: type,
      userId: userId ? userId : "",
      content: content,
    };
    try {
      console.log(requestBody);
      const response = await instance.post('/message', requestBody); // POST 요청
      console.log(response);
      if (response.status === 200) {
        setNotice(''); // 입력 필드 초기화
        confirmAlert('공지사항이 전송되었습니다.');
        // 연결 해제
        // 이 부분은 클라이언트 측에서 연결을 해제하는 로직이 필요함
        // 예: EventSource.close() 호출
        // 하지만 여기서는 연결 해제를 위해서 어떤 상태 관리가 필요할 수 있습니다.

      } else {
        confirmAlert('공지사항 전송에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
      confirmAlert('서버와의 연결에 실패했습니다.');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        공지사항:
        <textarea
          value={content}
          onChange={(e) => setNotice(e.target.value)}
          required
        />
        <div>
          유저 아이디:
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        메세지 타입:
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      </div>
      <button type="submit">공지사항 보내기</button>
    </form>
  );
}

export default ManagerSetting;