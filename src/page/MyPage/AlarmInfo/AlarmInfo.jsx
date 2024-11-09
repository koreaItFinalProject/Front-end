import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { instance } from '../../../apis/util/instance';
import { useQueryClient } from 'react-query';

function AlramInfoPage({ alarm }) {
    const queryClient = useQueryClient();
    const accessCheck = queryClient.getQueryData("userInfoQuery");
    const userId = accessCheck.data.userId;
    console.log(userId);
    const [notices, setNotices] = useState([]);
    const [lastId, setLastId] = useState(null);
    console.log(alarm);

    // 처음 렌더링 시에만 초기 메시지 가져오기
    useEffect(() => {
        const fetchMessage = async () => {
            const response = await instance.get(`/user/getMessage/${accessCheck.data.userId}`);
            console.log(response);
            setNotices(response?.data);
            setLastId(response.data[response.data.length - 1]?.id);  // 마지막 메시지 ID 설정
        };

        if (userId) {
            fetchMessage();
        }
    }, [userId]);

    

    // SSE로 실시간 메시지 받기
    

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
