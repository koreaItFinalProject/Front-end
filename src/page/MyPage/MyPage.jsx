import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from 'react-query';
import { MdNotifications , MdNotificationsActive  } from "react-icons/md";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
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
import AlramInfo from './AlramInfo/AlramInfo';
import NoticeBoard from './NoticeBoard/NoticeBoard';

function MyPage(props) {
    const [alram, setAlram] = useState(false);
    const [user, setUser] = useRecoilState(State);
    const [check, setCheck] = useState("user");
    const [infoBoard, setInfoBoard] = useState({
        user: {},
        board: {},
        review: {},
        comment: {},
        boardComment: {},
        alram:{}
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

    useEffect(() => {
        const timer = setInterval(() => {
            setAlram(prevAlram => !prevAlram);
        }, 1000);
    
        return () => clearInterval(timer);
    }, []); 



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
                console.log(user);
            },
            onError: response => {
                alert(`${response.data?.user?.username} 의 정보를 가져오지 못했습니다.`);
            }
        }
    )

    const handleOnModalClick = (e) => {
        if (e.target.value) {
            console.log("e" + e.target.value);
            setCheck(e.target.value);
            setIsOpen(true);
        }
        console.log(check);
    };

    return (
        <div css={s.layout}>
            <div css={s.profileBox}>
                <ModifyProfilePage handleOnModalClick={handleOnModalClick} value={"userinfo"} />
            </div>
            <div css={s.menuContainer} >
                <div css={s.menu}>
                    <button onClick={handleOnModalClick} value={"post"}>
                    <BsFillFileEarmarkPostFill />
                    <p>게시글</p>
                    <p>게시글 수 :
                        {
                            infoBoard.board.length === 0 ? '0' : infoBoard.board.length
                        }</p>
                    </button>
                </div>
                <div css={s.menu}>
                    <button onClick={handleOnModalClick} value={"comment"}>
                    <FaRegCommentDots />
                    <p>댓글관리</p>
                        <p>댓글 수 :
                            {
                                infoBoard.boardComment.length === 0 ? '0' : infoBoard.boardComment.length
                            }
                        </p>
                    </button>
                </div>
                <div css={s.menu}>
                    <button onClick={handleOnModalClick} value={"review"}>
                    <MdOutlineRateReview />
                    <p>리뷰관리</p>
                        <p>리뷰 수 :
                            {infoBoard.review.length === 0 ? '0' : infoBoard.review.length}
                        </p>
                    </button>
                </div>
                <div css={s.menu}>
                    <div css={s.noticeAlarm} style={{ display: alram.length > 0 ? 'none' : 'block' }}>
                        {
                            alram.length >= 1 ?(
                                //일반
                                <MdNotificationsActive/>
                            ):(
                                //알림
                                <div css={s.alarm}>
                                    <MdNotificationsActive className='alarm-icon'/>
                                    <p>알람이 왔습니다</p>
                                </div>
                                // <MdNotifications className='alarm-icon'/>
                            )
                        }
                    </div>
                    <button onClick={handleOnModalClick} value={"alram"}>
                    <AiOutlineNotification/>
                    <p>알림정보</p>
                        <p>알림 수 : {0}</p>
                    </button>
                </div>
            </div>
            <ReactModal isOpen={isOpen} check={check} infoBoard ={infoBoard[check]} style={s.modalStyles}>
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
                                    check === "alram" ?
                                        <AlramInfo alram={infoBoard.alram} />
                                        : <></>
                }
            </ReactModal>

        </div>
    );
}

export default MyPage;