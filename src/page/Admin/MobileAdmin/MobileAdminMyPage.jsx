/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';
import ReactModal from 'react-modal';
import { State } from '../../../atom/userState';
import { RiAlarmWarningFill } from "react-icons/ri";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { PiCoffee } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { VscMegaphone } from "react-icons/vsc";
import ModifyProfilePage from "../../MyPage/ModifyProfilePage/ModifyProfilePage";
import UserProfileModify from "../../MyPage/UserProfileModify/UserProfileModify";
import NoticeBoard from "../../MyPage/NoticeBoard/NoticeBoard";
import CommentBoard from "../../MyPage/CommentBoard/CommentBoard";
import ReviewState from "../../MyPage/ReviewState/ReviewState";
import AlramInfoPage from "../../MyPage/AlarmInfo/AlarmInfo";
import AdminCafeList from "./AdminCafeList/AdminCafeList";
import { confirmAlert } from "../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert";
import { ImExit } from "react-icons/im";
import { userDeleteApi } from "../../../apis/signUpApis/userDeleteApi";


function MobileAdminMyPage(props) {
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(State);
    const [check, setCheck] = useState("user");
    const [isCount, setCount] = useState({
        user: {},
        board: {},
        review: {},
        comment: {},
        boardComment: {},
        cafemanager: {},
        alarm: {}
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

    const userManagement = useQuery(
        ["userManagementInfo"],
        async () => {
            const response = instance.get(`/user/auth/info`);
            return response;
        },
        {
            retry: 0,
            enabled: !user?.username,
            onSuccess: response => {
                setUser(response.data);
                setCount(response.data);
            },
            onError: response => {
                confirmAlert(`${response.data?.user?.username} 의 정보를 가져오지 못했습니다.`);
            }
        }
    );

    const handleOnModalClick = (value) => {
        if (value) {
            console.log("e" + value);
            setCheck(value);
            setIsOpen(true);
        }
        console.log(check);
    };
    console.log(isCount);

    const handleOnWithdrawClick = async () => {
        try {
            const response = await userDeleteApi(isCount.user.id);
            console.log(isCount.user.id);
            console.log(response);
            localStorage.removeItem("accessToken");
            window.location.replace("/user/signin");
            confirmAlert("회원탈퇴 완료")
        } catch (error) {
            const response = error.response;
            console.log(response);
            confirmAlert("회원탈퇴 실패")
        }
    }

    const handleLogoutClick = () => {
        localStorage.removeItem("accessToken");
        window.location.replace("/user/signin");
    }

    return (
        <div css={s.layout}>
            <div css={s.profileBox}>
                <ModifyProfilePage
                    handleOnModalClick={() => handleOnModalClick("userinfo")}
                    setIsOpen={setIsOpen}
                    value={"userinfo"}
                    closeModal={closeModal}
                    isOpen={isOpen}
                />
            </div>
            <div css={s.menuContainer}>
                <div css={s.menu} onClick={() => handleOnModalClick("post")}>
                    <BsFillFileEarmarkPostFill />
                    <p>작성한 게시글</p>
                    <p>{isCount.board.length === 0 ? '0' : isCount.board.length}</p>
                </div>
                <div css={s.menu} onClick={() => handleOnModalClick("comment")}>
                    <FaRegCommentDots />
                    <p>작성한 댓글</p>
                    <p>{isCount.boardComment.length === 0 ? '0' : isCount.boardComment.length}</p>
                </div>
                <div css={s.menu} onClick={() => handleOnModalClick("review")}>
                    <MdOutlineRateReview />
                    <p>작성한 리뷰</p>
                    <p>{isCount.review.length === 0 ? '0' : isCount.review.length}</p>
                </div>
                <div css={s.menu} onClick={() => handleOnModalClick("cafemanager")}>
                    <PiCoffee />
                    <p>카페 관리</p>
                    <p>{isCount.cafemanager.length === 0 ? '0' : isCount.cafemanager.length}</p>
                </div>
                <div css={s.menu} onClick={() => navigate('/owner/notice/write')}>
                    <VscMegaphone />
                    <p>공지사항</p>
                </div>
                <div css={s.menu} onClick={() => handleOnModalClick("alarm")}>
                    <RiAlarmWarningFill />
                    <p>알림</p>
                    <p>{isCount.alarm.length === 0 ? '0' : isCount.alarm.length}</p>
                </div>
                <div css={s.menu} onClick={handleLogoutClick}>
                    <FiLogOut />
                    <p>로그아웃</p>
                </div>
                <div css={s.menu} onClick={handleOnWithdrawClick}>
                    <ImExit />
                    <p>회원 탈퇴</p>
                </div>
            </div>
            <ReactModal isOpen={isOpen} check={check} isCount={isCount[check]} style={s.modalStyles}>
                <button onClick={closeModal}>Close</button>
                {
                    check === "userinfo" ?
                        <UserProfileModify user={isCount.user} />
                        :
                        check === "post" ?
                            <NoticeBoard board={isCount.board} />
                            :
                            check === "comment" ?
                                <CommentBoard comment={isCount.boardComment} />
                                :
                                check === "cafemanager" ?
                                    <AdminCafeList cafemanager={isCount.cafemanager} />
                                    :
                                    check === "review" ?
                                        <ReviewState review={isCount.review} />
                                        :
                                        check === "alarm" ?
                                            <AlramInfoPage alarm={isCount.alarm} />
                                            : <></>
                }
            </ReactModal>
        </div>
    );
}

export default MobileAdminMyPage;