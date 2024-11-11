import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { instance } from '../../../../apis/util/instance';
import { confirmAlert } from '../../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { confirmCancelAlert } from '../../../../apis/util/SweetAlert2/ConfirmCancelAlert/ConfirmCancelAlert';

function ManagerSetting(props) {
  const navigate = useNavigate();
  const [content, setNotice] = useState('');
  const [userId, setUserId] = useState("");
  const [type, setType] = useState("");

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
  console.log(report);

  const deleteReportMutation = useMutation(
    async (id) => {
      return await instance.delete(`/report/${id}`);
    },
    {
      onSuccess: () => {
        confirmAlert("수정요청이 삭제완료되었습니다.");
        report.refetch();
      }
    }
  )

  const handleSubmit = async (id, type, Content, deleteid) => {

    const requestBody = {
      type: type,
      userId: id,
      content: type === "공지사항" ? content : Content,
    };
    try {
      console.log(requestBody);
      const response = await instance.post('/message', requestBody); // POST 요청
      console.log(response);
      if (response.status === 200) {
        setNotice(''); // 입력 필드 초기화
        confirmAlert('공지사항이 전송되었습니다.');
        console.log(deleteid);
        await instance.delete(`/report/${type}/${Content}`);
        report.refetch();

      } else {
        confirmAlert('공지사항 전송에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
      confirmAlert('서버와의 연결에 실패했습니다.');
    }
  };

  const handleReportDeleteOnClick = async (id) => {
    console.log(id);
    if (await confirmCancelAlert("정말 삭제하시겠습니까?")) {
      deleteReportMutation.mutateAsync(id);
    }
    return;
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
                    result.reportType === "게시글" ?
                      <>
                        <td onClick={() => navigate(`/board/detail/${result.contentId}`)}>{index + 1}</td>
                        <td onClick={() => navigate(`/board/detail/${result.contentId}`)}>{result.reportType}</td>
                        <td onClick={() => navigate(`/board/detail/${result.contentId}`)}>{result.content}</td>
                        <td onClick={() => navigate(`/board/detail/${result.contentId}`)}>{result.reportDate}</td>
                        <td onClick={() => navigate(`/board/detail/${result.contentId}`)}>{result.reportCount}</td>
                        <td onClick={() => handleSubmit(result.contentId, result.reportType, result.content, result.id)}>수정요청</td>
                        <td onClick={() => handleReportDeleteOnClick(result.id)}>삭제</td>
                      </>
                      :
                      <>
                        <td >{index + 1}</td>
                        <td >{result.reportType}</td>
                        <td >{result.content}</td>
                        <td >{result.reportDate}</td>
                        <td >{result.reportCount}</td>
                        <td onClick={() => handleSubmit(result.contentId, result.reportType, result.content, result.id)}>수정요청</td>
                        <td onClick={() => handleReportDeleteOnClick(result.id)}>삭제</td>
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