import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { instance } from '../../../../apis/util/instance';
import { confirmAlert } from '../../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

function ManagerSetting(props) {
  const navigate = useNavigate();
  const [content, setNotice] = useState('');
  const [userId, setUserId] = useState("");
  const [type, setType] = useState("");
  const [sendToAll, setSendToAll] = useState(false);


  const report = useQuery(
    ["reportQuery"],
    async () => {
        return await instance.get("/report/get");
    },
    {
        refetchOnWindowFocus: false,
        retry: 0,
    }
);
console.log(report)

  const handleSubmit = async (id, type) => {

    const requestBody = {
      type: type,
      userId: id,
      content: type === "공지사항"? content: type + " 수정해주세요.",
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
      <div css={s.mainLayout}>
        <div css={s.listContainer}>
          <table css={s.cafeListTable}>
            <tr>
              <th>순번</th>
              <th>신고 유형</th>
              <th>내용</th>
              <th>날짜</th>
              <th>신고 수</th>
              <th>수정요청</th>
              <th>삭제</th>
            </tr>
            <tr>
              
            </tr>
            {
              report?.data?.data?.map((result, index) => (
                <>
                  <tr key={index}>
                    {
                      result.reportType === "게시글"?
                      <>
                      <td onClick={() => navigate(`/board/detail/${result.contentId}`)}>{index + 1}</td>
                      <td onClick={() => navigate(`/board/detail/${result.contentId}`)}>{result.reportType}</td>
                      <td onClick={() => navigate(`/board/detail/${result.contentId}`)}>{result.content}</td>
                      <td onClick={() => navigate(`/board/detail/${result.contentId}`)}>{result.reportDate}</td>
                      <td onClick={() => navigate(`/board/detail/${result.contentId}`)}>{result.reportCount}</td>
                      <td onClick={() => handleSubmit(result.contentId, result.reportType)}>수정요청</td>
                      <td>삭제</td>
                      </>
                      :
                      <>
                      <td >{index + 1}</td>
                      <td >{result.reportType}</td>
                      <td >{result.content}</td>
                      <td >{result.reportDate}</td>
                      <td >{result.reportCount}</td>
                      <td onClick={() => handleSubmit(result.contentId, result.reportType)}>수정요청</td>
                      <td >삭제</td>
                    </>
                    }
                  </tr>
                </>
              ))
            }
          </table>
        </div>
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
        <button onClick={() => handleSubmit(userId, type)}>공지사항 보내기</button>
      </form>
      </div>
  );
}

export default ManagerSetting;