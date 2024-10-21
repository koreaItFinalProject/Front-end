import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'react-router-dom';
import SideBar from '../../../components/SideBar/SideBar';
import { instance } from '../../../apis/util/instance';
import { useMutation, useQuery, useQueryClient } from 'react-query';

function ManagerStoreManagementPage({ check, setCheck, inputvalue, setInputvalue }) {
    const queryClient = useQueryClient();
    const cafelist = queryClient.getQueryData(["cafeQuery", check, inputvalue]);

    const cafe = cafelist?.data;
    const [inputdata, setInputData] = useState("");
    console.log(cafe);
    const handleInputOnChange = (e) => {
        setInputData(e.target.value);
    };

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
            <div css={s.mainBox}>
                <div css={s.box}>
                    <div css={s.ibBox}>
                        <div css={s.inputSection}>
                            <p>조회:</p>
                            <input type="text" value={inputdata} onChange={handleInputOnChange} onKeyDown={handleInputKeyPress} />
                        </div>
                        <button css={s.button} onClick={() => setInputvalue(inputdata)}>검색</button>
                    </div>

                    <table border={1}>
                        <tr>
                            <th>number</th>
                            <th>cafename</th>
                            <th>address</th>
                            <th>category</th>
                        </tr>
                        <tr>
                        </tr>
                        {
                            cafe?.map((result, index) => (
                                <>
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{result.cafeName}</td>
                                        <td>{result.address}</td>
                                        <td>{result.category}</td>
                                        <td>{result.id}</td>
                                        <button value={result.id} onClick={handleDeleteOnclick}>삭제</button>
                                    </tr>
                                </>
                            ))
                        }
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ManagerStoreManagementPage;