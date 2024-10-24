import React, { useCallback, useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { RiAlarmWarningLine , RiAlarmWarningFill  } from "react-icons/ri";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { instance } from '../../apis/util/instance';
import { State } from '../../atom/userState';
import { useRecoilState } from 'recoil';

function MyPage(props) {
    const navigate = useNavigate();
    const [alram , setAlram] = useState(false);
    const [user, setUser] = useRecoilState(State);
    const [isCount , setCount] = useState({
        user:{},
        board:{},
        review:{},
        comment:{}
    })

    const startTimer = useCallback(() => {
        const timer = setInterval(() => {
            setAlram(prevAlram => !prevAlram);
        }, 1000);

        return () => clearInterval(timer)
    },[alram])     

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
            onError : response => {
                alert(`${response.data?.user?.username} 의 정보를 가져오지 못했습니다.`);
            }
        }
    )

    return (
        <div css={s.layout}>
            <div css={s.profileBox} onClick={() => navigate("/user/auth/mypage/modify")}>
                <div css={s.profileimage}>
                    <img src={isCount.user?.img} alt="프로필 이미지" />
                </div>
                <div css={s.infoLayout}>
                    <div css={s.userInfo}>
                        <p>{isCount.user?.nickname} </p>
                    </div>
                </div>
            </div>
                <div css={s.mainBox}>
                    <div css={s.mainBoxLayout}>
                        <div>
                            <div css={s.post}>
                                <div onClick={()=> navigate('/')}>
                                    <div css={s.postInventory}>
                                        <BsFillFileEarmarkPostFill/>
                                        <p>게시글</p>
                                    </div>
                                    <div css={s.box} onClick={()=> navigate('/')}>
                                        <p>게시글 수 : 
                                            {
                                        isCount.board.length==0?'':isCount.board.length
                                        }</p>
                                    </div>
                                </div>
                            </div>
                            <div css={s.comment}>
                                <div onClick={()=> navigate('/')}>
                                    <div css={s.commentInventory}>
                                        <FaRegCommentDots/>
                                        <p>댓글관리</p>
                                    </div>
                                    <div css={s.box} onClick={()=> navigate('/')}>
                                        <p>댓글 수 : 
                                        {
                                            isCount.comment.length==0? '':isCount.comment.length
                                        }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div css={s.review}>
                                <div onClick={()=> navigate('/')}>
                                    <div css={s.reviewInventory}>
                                        <MdOutlineRateReview/>
                                        <p>리뷰관리</p>
                                    </div>
                                    <div css={s.box} onClick={()=> navigate('/')}>
                                        <p>리뷰 수 : 
                                        {isCount.review.length==0? '':isCount.review.length}</p>
                                    </div>
                                </div>
                            </div>
                            <div css={s.information}>
                                <div >
                                    <div css={s.alarm} onClick={()=> navigate('/')}>
                                        {
                                            alram? 
                                            <RiAlarmWarningLine className='white-alarm-icon'/>:
                                            <RiAlarmWarningFill className='red-alarm-icon'/>
                                        }
                                        <p>알림정보</p>
                                    </div>
                                    <div css={s.box} onClick={()=> navigate('/')}>
                                        <p>알림 수 : {0}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
        </div>
    );
}

export default MyPage;