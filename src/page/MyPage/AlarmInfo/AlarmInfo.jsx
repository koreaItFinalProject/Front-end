import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { instance } from '../../../apis/util/instance';
import { useQueryClient } from 'react-query';

function AlramInfoPage({ alarm }) {
    const queryClient = useQueryClient();
    const accessCheck = queryClient.getQueryData("userInfoQuery");
    console.log(accessCheck.data.userId);
    const [notices, setNotices] = useState([]);
    const [lastId, setLastId] = useState(null);
    const [eventSource, setEventSource] = useState(null);

    console.log(alarm);

    // 처음 렌더링 시에만 초기 메시지 가져오기
    useEffect(() => {
        const fetchMessage = async () => {
            const response = await instance.get(`/user/getMessage/${accessCheck.data.userId}`);
            console.log(response);
            setNotices(response?.data);
            setLastId(response.data[response.data.length - 1]?.id);  // 마지막 메시지 ID 설정
        };

        if (accessCheck.data.userId) {
            fetchMessage();
        }
    }, [accessCheck.data.userId]);

    // SSE로 실시간 메시지 받기
    useEffect(() => {
        if (accessCheck && accessCheck.data.userId) {
            // SSE 연결 설정
            const es = new EventSource(`http://localhost:8080/message/events?lastId=${lastId || 0}`);

            es.onmessage = (event) => {
                try {
                    // 받아온 데이터 처리
                    const parsedData = JSON.parse(event.data);
                    console.log(parsedData);

                    // 기존 알림에 새 메시지 추가
                    setNotices((prevNotices) => {
                        // 기존 notices에 새 메시지 추가
                        return [...prevNotices, parsedData];
                    });
                    setLastId(parsedData.lastId);  // 최신 메시지 ID 저장
                } catch (error) {
                    console.error("알림 처리 중 오류 발생", error);
                }
            };

            es.onerror = (err) => {
                console.error("SSE 연결 실패", err);
                es.close();  // 연결 실패 시 종료
                setTimeout(() => {
                    setEventSource(null);  // 연결이 끊기면 5초 후 재시도
                }, 5000);
            };

            setEventSource(es);

            // 컴포넌트 언마운트 시 SSE 종료
            return () => {
                es.close();
            };
        }
    }, [accessCheck, lastId]);  // accessCheck와 lastId 변경 시마다 실행

    return (
        <div css={s.mainLayout}>
            <div css={s.AllPost}>
                <h2 >알림정보</h2>
                <h3> 마지막 알림정보 : {lastId}</h3>
            </div>
            <ul css={s.AlramList}>
                {notices.map((alarm, index) => (
                    <div key={index} css={s.layout}>
                        <tr>
                            <td>{alarm.type}</td>
                            <td >{alarm.content}</td>
                        </tr>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default AlramInfoPage;
