import React, { useCallback, useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from 'react-query';
import { RiAlarmWarningLine, RiAlarmWarningFill } from "react-icons/ri";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { instance } from '../../apis/util/instance';
import { State } from '../../atom/userState';
import { useRecoilState } from 'recoil';
import ModifyProfilePage from './ModifyProfilePage/ModifyProfilePage';
import ReactModal from 'react-modal';
import UserProfileModify from './UserProfileModify/UserProfileModify';
import PostModify from './PostModify/PostModify';
import CommentState from './CommentState/CommentState';
import ReviewState from './ReviewState/ReviewState';
import AlramInfo from './AlramInfo/AlramInfo';

function MyPage(props) {
    const [alram, setAlram] = useState(false);
    const [user, setUser] = useRecoilState(State);
    const [check, setCheck] = useState("user");
    const [isCount, setCount] = useState({
        user: {},
        board: {},
        review: {},
        comment: {},
        boardComment: {}
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

    const startTimer = useCallback(() => {
        const timer = setInterval(() => {
            setAlram(prevAlram => !prevAlram);
        }, 1000);

        return () => clearInterval(timer)
    }, [alram])

    useEffect(() => {
        const clearTimer = startTimer();
        return clearTimer;
    }, [startTimer]);



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
                setCount(response.data);
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
                {/* 필요없는거 지우셈 */}
                <ModifyProfilePage handleOnModalClick={handleOnModalClick} value={"userinfo"} />
            </div>
            <div css={s.mainBox}>
                <div css={s.mainBoxLayout}>
                    <div>
                        <div css={s.post}>
                            <div>
                                <div css={s.postInventory} >
                                    <BsFillFileEarmarkPostFill />
                                    <p>게시글</p>
                                </div>
                                <button css={s.box} onClick={handleOnModalClick} value={"post"}>
                                    <p>게시글 수 :
                                        {
                                            isCount.board.length === 0 ? '0' : isCount.board.length
                                        }</p>
                                </button>
                            </div>
                        </div>
                        <div css={s.comment}>
                            <div >
                                <div css={s.commentInventory}>
                                    <FaRegCommentDots />
                                    <p>댓글관리</p>
                                </div>
                                <button css={s.box} onClick={handleOnModalClick} value={"comment"}>
                                    <p>댓글 수 :
                                        {
                                            isCount.boardComment.length === 0 ? '0' : isCount.boardComment.length
                                        }
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div css={s.review}>
                            <div>
                                <div css={s.reviewInventory}>
                                    <MdOutlineRateReview />
                                    <p>리뷰관리</p>
                                </div>
                                <button css={s.box} onClick={handleOnModalClick} value={"review"}>
                                    <p>리뷰 수 :
                                        {isCount.review.length === 0 ? '0' : isCount.review.length}</p>
                                </button>
                            </div>
                        </div>
                        <div css={s.information}>
                            <div >
                                <div css={s.alarm}>
                                    {
                                        alram ?
                                            <RiAlarmWarningLine className='white-alarm-icon' /> :
                                            <RiAlarmWarningFill className='red-alarm-icon' />
                                    }
                                    <p>알림정보</p>
                                </div>
                                <button css={s.box} onClick={handleOnModalClick} value={"alram"}>
                                    <p>알림 수 : {0}</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReactModal isOpen={isOpen} check={check} isCount={isCount[check]} style={s.modalStyles}>
                <button css={s.closeButton} onClick={closeModal}>Close</button>
                {
                    check === "userinfo" ?
                        <UserProfileModify isCount={isCount.user} />
                        :
                        check === "post" ?
                            <PostModify isCount={isCount.board} />
                            :
                            check === "comment" ?
                                <CommentState isCount={isCount.boardComment} />
                                :
                                check === "review" ?
                                    <ReviewState isCount={isCount.review} />
                                    :
                                    check === "alram" ?
                                        <AlramInfo isCount={isCount} />
                                        : <></>
                }
            </ReactModal>

        </div>
    );
}

export default MyPage;