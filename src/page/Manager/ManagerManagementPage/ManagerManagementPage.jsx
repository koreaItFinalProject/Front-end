import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';
import ReactModal from 'react-modal';
import UserInfo from '../../../components/Info/UserInfo/UserInfo';
import BoardInfo from '../../../components/Info/BoardInfo/BoardInfo';
import CommentInfo from '../../../components/Info/CommentInfo/CommentInfo';
import ReviewInfo from '../../../components/Info/ReviewInfo/ReviewInfo';
function ManagerManagementPage(props) {
    const [role, setRole] = useState("user");
    const [isOpen, setIsOpen] = useState(false);
    const [check, setCheck] = useState("user");
    const [info, setInfo] = useState({
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
    const handleDeleteOnclick = (id) => {
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
        setCheck("user");
        openModal();
    }

    return (
        <div css={s.mainLayout}>
            <div css={s.selectbutton(role)}>
                <button value={"user"} onClick={handleRoleOnClick}>일반 회원</button>
                <button value={"owner"} onClick={handleRoleOnClick}>기업 회원</button>
            </div>
            <div css={s.listContainer}>
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
                        <th>삭제</th>
                    </tr>
                    {
                        AllList?.data?.data.map((result, index) => (
                            <>
                                <tr key={index} >
                                    <td onClick={() => hanldeGetInfoOnClick(result.id)}>{index + 1}</td>
                                    {role === "owner" &&
                                        <td onClick={() => hanldeGetInfoOnClick(result.id)}>{result.cafeName}</td>
                                    }
                                    <td onClick={() => hanldeGetInfoOnClick(result.id)}>{result.username}</td>
                                    <td onClick={() => hanldeGetInfoOnClick(result.id)}>{result.name}</td>
                                    <td onClick={() => hanldeGetInfoOnClick(result.id)}>{result.email}</td>
                                    <td onClick={() => hanldeGetInfoOnClick(result.id)}>{result.phoneNumber}</td>
                                    {/* <td>{result.id}</td> */}
                                    <td onClick={() => handleDeleteOnclick(result.id)}>삭제</td>
                                </tr>
                            </>
                        ))
                    }
                </table>
            </div>
            <ReactModal isOpen={isOpen} style={s.modalStyles}>
                <div css={s.boxlayout}>
                    <div css={s.selects}>
                        <button onClick={closeModal}>Close</button>
                        {
                            check !== "user" && (
                                <div css={s.radioContainer}>
                                    <label css={s.radioLabel}>
                                        <input type="radio" id="select" name="shop" />
                                        <span>최신순</span>
                                    </label>
                                    <label css={s.radioLabel}>
                                        <input type="radio" id="select2" name="shop" />
                                        <span>오래된 순</span>
                                    </label>
                                </div>

                            )
                        }
                    </div>
                    <div css={s.layout2}>
                        <div css={s.contentBox}>
                            <div style={{ backgroundColor: check === 'user' ? "#7e7e7e" : "" }} onClick={() => setCheck("user")}>사용자 정보</div>
                            <div style={{ backgroundColor: check === 'board' ? "#7e7e7e" : "" }} onClick={() => setCheck("board")}>게시글 기록</div>
                            <div style={{ backgroundColor: check === 'comment' ? "#7e7e7e" : "" }} onClick={() => setCheck("comment")}>댓글 기록</div>
                            <div style={{ backgroundColor: check === 'review' ? "#7e7e7e" : "" }} onClick={() => setCheck("review")}>리뷰 기록</div>
                        </div>
                        <div css={s.content}>
                            {
                                check === "user" ?
                                    <UserInfo info={info[check]} />
                                    :
                                    check === "board" ?
                                        <BoardInfo info={info[check]} />
                                        :
                                        check === "comment" ?
                                            <CommentInfo info={info[check]} />
                                            :
                                            <ReviewInfo info={info[check]} />
                            }
                        </div>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}

export default ManagerManagementPage;