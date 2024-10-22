import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import Header from '../../../components/Header/Header';
import { Link } from 'react-router-dom';
import SideBar from '../../../components/SideBar/SideBar';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';

function ManagerManagementPage(props) {
    const [role, setRole] = useState("user");
    const AllList = useQuery(
        ["getUsers", role],
        async () => {
            return instance.get(`/manager/${role}`)
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
        }
    );

    console.log(AllList);

    const handleRoleOnClick = (e) => {
        setRole(e.target.value);
    };
    const deleteUserMutaion = useMutation(
        async (id) => await instance.delete(`/manager/${id}`),
        {
            onSuccess: response => {
                alert("해당 유저를 삭제하였습니다.");
                AllList.refetch();
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
            <div css={s.selectbutton(role)}>
                <button value={"user"} onClick={handleRoleOnClick}>일반 회원</button>
                <button value={"owner"} onClick={handleRoleOnClick}>기업 회원</button>
            </div>
            <table css={s.userList}>
                <tr>
                    <th>number</th>
                    {role === "owner" &&
                        <th>cafename</th>
                    }
                    <th>username</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phonenumber</th>
                </tr>
                <tr>
                </tr>
                {
                    AllList?.data?.data.map((result, index) => (
                        <>
                            <tr key={index} onClick={() => console.log(result.id)}>
                                <td>{index}</td>
                                {role === "owner" &&
                                    <td>{result.cafeName}</td>
                                }
                                <td>{result.username}</td>
                                <td>{result.name}</td>
                                <td>{result.email}</td>
                                <td>{result.phoneNumber}</td>
                                <td>{result.id}</td>
                                <button value={result.id} onClick={handleDeleteOnclick}>삭제</button>
                            </tr>
                        </>
                    ))
                }
            </table>
            {/* <div css={s.userInfo}></div> */}
        </div>
    );
}

export default ManagerManagementPage;