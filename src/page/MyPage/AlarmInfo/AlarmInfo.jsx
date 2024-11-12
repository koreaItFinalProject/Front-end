import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQueryClient } from 'react-query';
import { instance } from '../../../apis/util/instance';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from '../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';

function AlramInfoPage({ alarm }) {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const accessCheck = queryClient.getQueryData("userInfoQuery");
    const userId = accessCheck?.data?.userId;
    const [openIndex, setOpenIndex] = useState(null); // 수정 모드로 전환할 항목의 인덱스
    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("all");

    console.log(userId);

    // 알림을 역순으로 저장한 배열
    const reversedAlarm = Array.isArray(alarm) ? [...alarm]?.reverse() : [];

    const filteredAlarm = reversedAlarm.filter((alarmItem) => {
        if (filter === "all") return true; // All alarms are shown
        if (filter === "notice" && alarmItem.type === "공지사항") return true;
        if (filter === "modify" && (alarmItem.type.includes("수정 요청"))) return true;
        return false;
    });

    const handleInputKeyPress = async (e) => {
        if (e.key === "Enter") {
            setOpenIndex(null); // 수정 완료 후 닫기
            console.log(reversedAlarm[openIndex]);
            if (reversedAlarm[openIndex].type === "댓글수정 요청") {
                await instance.put(`/comment/${reversedAlarm[openIndex].contentId}`, { commentId: reversedAlarm[openIndex].contentId, content: inputValue });
            }
            else if (reversedAlarm[openIndex].type === "리뷰수정 요청") {
                await instance.put(`/review/${reversedAlarm[openIndex].contentId}`, { reviewId: reversedAlarm[openIndex].contentId, review: inputValue });
            }
            setInputValue("");
            await instance.delete(`/message/${reversedAlarm[openIndex].id}`);
            await queryClient.invalidateQueries("userManagementInfo"); // 알림 리스트 쿼리 무효화로 새로고침
            confirmAlert("수정 완료했습니다.");
        }
    };

    const handleInputOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleGetBoard = async (title, boardId, id) => {
        const response = await instance.get(`/board/${boardId}/content`);
        console.log(response);
        if (response.data) {
            navigate(`/board/modify/${boardId}`, { state: { title: title, content: response.data, reportId: id } });
        }
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div css={s.mainLayout}>
            <div css={s.AllPost}>
                <h2>알림정보</h2>
                <h3>새로운 알림: {filteredAlarm.filter(al => al.id > localStorage.getItem("lastId")).length}</h3>
                <select name="searchFilter" value={filter} onChange={handleFilterChange}>
                    <option value="all">전체</option>
                    <option value="notice">공지사항</option>
                    <option value="modify">수정사항</option>
                </select>
            </div>
            <ul css={s.AlramList}>
                {filteredAlarm?.map((alarmItem, index) => (
                    <div key={index} css={s.layout}>
                        <tr>
                            <td>{alarmItem.type}</td>
                            {alarmItem.type === "댓글수정 요청" || alarmItem.type === "리뷰수정 요청" ? (
                                openIndex === index ? (
                                    <td>
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onKeyDown={handleInputKeyPress}
                                            onChange={handleInputOnChange}
                                        />
                                    </td>
                                ) : (
                                    <td onClick={() => { setOpenIndex(index); setInputValue(alarmItem.content); console.log(alarmItem.contentId); }} >
                                        {alarmItem.content}
                                    </td>
                                )
                            ) :
                                alarmItem.type === "게시글수정 요청" ? (
                                    <td onClick={() => { handleGetBoard(alarmItem.content, alarmItem.contentId, alarmItem.id) }}>{alarmItem.content}</td>
                                )
                                    :
                                    <td>{alarmItem.content}</td>
                            }
                            <td>{alarmItem.messageDate}</td>
                        </tr>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default AlramInfoPage;
