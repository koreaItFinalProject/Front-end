import React, { useCallback, useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
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
import AlramInfoPage from './AlramInfoPage/AlramInfoPage';
import ReviewInfo from '../../components/Info/ReviewInfo/ReviewInfo';
import UserProfileModify from './UserProfileModify/UserProfileModify';
import PostModifyPage from './PostModifyPage/PostModifyPage';
import CommentInfo from '../../components/Info/CommentInfo/CommentInfo';

function MyPage(props) {
    const navigate = useNavigate();
    const [alram, setAlram] = useState(false);
    const [user, setUser] = useRecoilState(State);
    const [check, setCheck] = useState("user");
    const [isCount, setCount] = useState({
        user: {},
        board: {},
        review: {},
        comment: {}
    })
    const [isOpen, setIsOpen] = useState();
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

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
                <ModifyProfilePage setIsOpen={setIsOpen} />
            </div>
            <div css={s.mainBox}>
                <div css={s.mainBoxLayout}>
                    <div>
                        <div css={s.post}>
                            <div onClick={handleOnModalClick} value={"board"}>
                                <div css={s.postInventory} >
                                    <BsFillFileEarmarkPostFill />
                                    <p>게시글</p>
                                </div>
                                <div css={s.box}>
                                    <p>게시글 수 :
                                        {
                                            isCount.board.length == 0 ? '' : isCount.board.length
                                        }</p>
                                </div>
                            </div>
                        </div>
                        <div css={s.comment} onClick={handleOnModalClick} value={"comment"} >
                            <div >
                                <div css={s.commentInventory}>
                                    <FaRegCommentDots />
                                    <p>댓글관리</p>
                                </div>
                                <div css={s.box}>
                                    <p>댓글 수 :
                                        {
                                            isCount.comment.length == 0 ? '' : isCount.comment.length
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div css={s.review}>
                            <div onClick={() => navigate('/')} value={"review"}>
                                <div css={s.reviewInventory}>
                                    <MdOutlineRateReview />
                                    <p>리뷰관리</p>
                                </div>
                                <div css={s.box} onClick={handleOnModalClick}>
                                    <p>리뷰 수 :
                                        {isCount.review.length == 0 ? '' : isCount.review.length}</p>
                                </div>
                            </div>
                        </div>
                        <div css={s.information}>
                            <div >
                                <div css={s.alarm} onClick={handleOnModalClick} value={"alram"}>
                                    {
                                        alram ?
                                            <RiAlarmWarningLine className='white-alarm-icon' /> :
                                            <RiAlarmWarningFill className='red-alarm-icon' />
                                    }
                                    <p>알림정보</p>
                                </div>
                                <div css={s.box} onClick={() => navigate('/')}>
                                    <p>알림 수 : {0}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactModal isOpen={isOpen} check={check} isCount={isCount[check]} style={s.modalStyles}>
                    <button onClick={closeModal}>Close</button>
                    {
                        check === "userinfo" ?
                            <UserProfileModify isCount={isCount.user} />
                            :
                            check === "post" ?
                                <PostModifyPage isCount={isCount.board} />
                                :
                                check === "comment" ?
                                    <CommentInfo isCount={isCount.comment} />
                                    :
                                    check === "review" ?
                                        <ReviewInfo isCount={isCount.review} />
                                        :
                                        check === "alram" ?
                                            <AlramInfoPage isCount={isCount} />
                                            : <></>
                    }
                </ReactModal>
            </div>
        </div>
    );
}

export default MyPage;