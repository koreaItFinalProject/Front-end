import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from 'react-query';
import { MdNotifications, MdNotificationsActive } from "react-icons/md";
import { BsChatLeftTextFill } from "react-icons/bs";
import { AiOutlineNotification } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { instance } from '../../apis/util/instance';
import { State } from '../../atom/userState';
import { useRecoilState } from 'recoil';
import ModifyProfilePage from './ModifyProfilePage/ModifyProfilePage';
import ReactModal from 'react-modal';
import UserProfileModify from './UserProfileModify/UserProfileModify';
import CommentBoard from './CommentBoard/CommentBoard';
import ReviewState from './ReviewState/ReviewState';
import AlramInfo from './AlarmInfo/AlarmInfo';
import NoticeBoard from './NoticeBoard/NoticeBoard';
import { FiLogOut } from "react-icons/fi";
import { confirmAlert } from '../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';
import { ImExit } from "react-icons/im";
import { userDeleteApi } from '../../apis/signUpApis/userDeleteApi';
import { confirmCancelAlert } from '../../apis/util/SweetAlert2/ConfirmCancelAlert/ConfirmCancelAlert';

function MyPage(props) {
    const [user, setUser] = useRecoilState(State);
    const [check, setCheck] = useState("user");
    const [infoBoard, setInfoBoard] = useState({
        user: {},
        board: {},
        review: {},
        comment: {},
        boardComment: {},
        alarm: {},
    })
    const [isOpen, setIsOpen] = useState();

    const openModal = () => {
        setIsOpen(true)
        console.log(isOpen);
    };

    const closeModal = () => {
        setIsOpen(false)
        console.log(isOpen);

    };
    console.log(infoBoard)


    const userManagement = useQuery(
        ["userManagementInfo"],
        async () => {
            const response = instance.get(`/user/auth/info`);
            return response;
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
            enabled: !user?.username,
            onSuccess: response => {
                setUser(response.data);
                setInfoBoard(response.data);
            },
            onError: response => {
                confirmAlert(`${response.data?.user?.username} 의 정보를 가져오지 못했습니다.`);
            }
        }
    )

    const handleOnModalClick = (value) => {
        if (value) {
            console.log(value);
            setCheck(value);
            setIsOpen(true);
        }
        console.log(check);
    };

    const handleLogoutClick = () => {
        localStorage.removeItem("accessToken");
        window.location.replace("/user/signin");
    }

    const handleOnWithdrawClick = async () => {
        const selet = await confirmCancelAlert("정말 탈퇴하시겠습니까?");

        if (selet) {
            try {
                const response = await userDeleteApi(infoBoard.user.id);
                console.log(infoBoard.user.id);
                console.log(response);
                localStorage.removeItem("accessToken");
                window.location.replace("/user/signin");
                confirmAlert("회원탈퇴 완료")
            } catch (error) {
                const response = error.response;
                console.log(response);
                confirmAlert("회원탈퇴 실패")
            }
        } else {
            return
        }

    }

    return (
        <div css={s.layout}>
            <div css={s.profileBox}>
                <ModifyProfilePage
                    handleOnModalClick={() => handleOnModalClick("userinfo")}
                    value={"userinfo"}
                />
            </div>
            <div css={s.menuContainer}>
                <div css={s.menu} onClick={() => handleOnModalClick("post")}>
                    <BsChatLeftTextFill />
                    <p>게시글</p>
                    <p>{infoBoard.board.length === 0 ? '0' : infoBoard.board.length}</p>
                </div>
                <div css={s.menu} onClick={() => handleOnModalClick("comment")} >
                    <FaRegCommentDots />
                    <p>댓글관리</p>
                    <p>{infoBoard.boardComment.length === 0 ? '0' : infoBoard.boardComment.length}</p>
                </div>
                <div css={s.menu} onClick={() => handleOnModalClick("review")}>
                    <MdOutlineRateReview />
                    <p>리뷰관리</p>
                    <p>{infoBoard.review.length === 0 ? '0' : infoBoard.review.length}</p>
                </div>
                <div css={s.noticeAlarm} style={{ display: infoBoard?.alarm?.length > 0 ? 'none' : 'block' }}>
                    {
                        infoBoard?.alarm.length >= 1 ? (
                            //일반
                            <MdNotificationsActive />
                        ) : (
                            //알림
                            <div css={s.alarm}>
                                <MdNotificationsActive className='alarm-icon' />
                                <p>알람이 왔습니다</p>
                            </div>
                        )
                    }
                </div>
                <div css={s.menu} onClick={() => handleOnModalClick("alarm")}>
                    <AiOutlineNotification />
                    <p>알림정보</p>
                    <p>{infoBoard?.alarm?.length === 0 ? '0' : infoBoard?.alarm?.length}</p>
                </div>
                <div css={s.menu}>
                    <button onClick={handleLogoutClick}>
                        <FiLogOut />
                        <p>로그아웃</p>
                    </button>
                </div>
                <div css={s.menu}>
                    <button onClick={handleOnWithdrawClick}>
                        <ImExit />
                        <p>회원 탈퇴</p>
                    </button>
                </div>
            </div>
            <ReactModal isOpen={isOpen} check={check} infoBoard={infoBoard[check]} style={s.modalStyles}>
                <button css={s.closeButton} onClick={closeModal}>Close</button>
                {
                    check === "userinfo" ?
                        <UserProfileModify user={infoBoard.user} />
                        :
                        check === "post" ?
                            <NoticeBoard board={infoBoard.board} />
                            :
                            check === "comment" ?
                                <CommentBoard comment={infoBoard.boardComment} />
                                :
                                check === "review" ?
                                    <ReviewState review={infoBoard.review} />
                                    :
                                    check === "alarm" ?
                                        <AlramInfo alarm={infoBoard.alarm} />
                                        : <></>
                }
            </ReactModal>
        </div>
    );
}

export default MyPage;