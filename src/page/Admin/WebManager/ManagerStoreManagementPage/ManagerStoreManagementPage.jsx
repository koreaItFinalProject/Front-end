import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useMutation, useQueryClient } from 'react-query';
import { instance } from '../../../../apis/util/instance';
import { useCafeQuery } from '../../../../apis/CafeApis/getCafeListApi';
import { useNavigate } from 'react-router-dom';

function ManagerStoreManagementPage({ check, setCheck, inputvalue, setInputvalue }) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [cafelistUp, setCafelistUp] = useState([]);
    const { data: cafeList } = useCafeQuery(check, inputvalue, {
        onSuccess: (data) => {
            setCafelistUp(data);
        }
    })

    const [inputdata, setInputData] = useState("");


    const handleInputOnChange = (e) => {
        setInputData(e.target.value);
    };

    useEffect(() => {
        setCheck("전체");
        setInputvalue("");
    }, []);

    const handleInputKeyPress = (e) => {
        if (e.key === "Enter") {
            setInputvalue(inputdata);
        }
    };
    const deleteUserMutaion = useMutation(
        async (id) => await instance.delete(`/manager/cafe/${id}`),
        {
            onSuccess: response => {
                alert("해당 카페를 삭제하였습니다.");
                queryClient.invalidateQueries(["cafeQuery", check, inputvalue]);
            }
        }
    );
    const handleDeleteOnclick = (e) => {
        const id = e.target.value;
        console.log(id);
        deleteUserMutaion.mutateAsync(id);
    };
    return (
        <div css={s.mainLayout}>
            <div css={s.ibBox}>
                <div css={s.inputSection}>
                    <p>조회:</p>
                    <input type="text" value={inputdata} onChange={handleInputOnChange} onKeyDown={handleInputKeyPress} />
                </div>
                <button css={s.button} onClick={() => setInputvalue(inputdata)}>검색</button>
            </div>
            <div css={s.listContainer}>
                <table css={s.cafeListTable}>
                    <tr>
                        <th>순번</th>
                        <th>카페 이름</th>
                        <th>주소</th>
                        <th>카테고리</th>
                        <th>카페 ID</th>
                        <th>삭제</th>
                    </tr>
                    <tr>
                    </tr>
                    {
                        cafeList?.map((result, index) => (
                            <>
                                <tr key={index}>
                                    <td onClick={() => navigate(`/cafe/detail/${result.id}`)}>{index + 1}</td>
                                    <td onClick={() => navigate(`/cafe/detail/${result.id}`)}>{result.cafeName}</td>
                                    <td onClick={() => navigate(`/cafe/detail/${result.id}`)}>{result.address}</td>
                                    <td onClick={() => navigate(`/cafe/detail/${result.id}`)}>{result.category}</td>
                                    <td onClick={() => navigate(`/cafe/detail/${result.id}`)}>{result.id}</td>
                                    <td onClick={() => handleDeleteOnclick(result.id)}>삭제</td>
                                </tr>
                            </>
                        ))
                    }
                </table>
            </div>
        </div>
    );
}

export default ManagerStoreManagementPage;