import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';
import ReactModal from 'react-modal';
import UserContent from '../../../components/UserContent/UserContent';
function ManagerManagementPage(props) {
    const [role, setRole] = useState("user");
    const [isOpen, setIsOpen] = useState(false);
    const [ check, setCheck ] = useState("user");
    const [ info, setInfo ] = useState({
        user: {},
        board: {},
        comment: {},
        review: {},
    });
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
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

    const hanldeGetInfoOnClick = async (userId) => {
        console.log(userId);
        let response;
        response = await instance.get(`/manager/info/${userId}`);
        // response = await instance.get("/manager/info");
        console.log(response);
        setInfo(response?.data);
        openModal();
    }

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
                {
                    AllList?.data?.data.map((result, index) => (
                        <>
                            <tr key={index} onClick={() => hanldeGetInfoOnClick(result.id)}>
                                <td>{index + 1}</td>
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
            <ReactModal isOpen={isOpen} style={s.modalStyles}>
                <button onClick={closeModal}>Close</button>
                <div css={s.layout}>
                    <div css={s.contentBox}>
                        <div onClick={() => setCheck("user")}>사용자 정보</div>
                        <div onClick={() => setCheck("board")}>게시글 기록</div>
                        <div onClick={() => setCheck("comment")}>댓글 기록</div>
                        <div onClick={() => setCheck("review")}>리뷰 기록</div>
                    </div>
                    <div css={s.content}>
                        <UserContent check={check} info={info[check]}/>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}

export default ManagerManagementPage;