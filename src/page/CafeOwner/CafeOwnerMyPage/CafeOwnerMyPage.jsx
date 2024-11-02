/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';
import ReactModal from 'react-modal';
import { State } from '../../../atom/userState';
import ModifyProfilePage from '../../MyPage/ModifyProfilePage/ModifyProfilePage';
import UserProfileModify from '../../MyPage/UserProfileModify/UserProfileModify';
import PostModify from '../../MyPage/PostModify/PostModify';
import CommentState from '../../MyPage/CommentState/CommentState';
import ReviewState from '../../MyPage/ReviewState/ReviewState';
import AlramInfoPage from '../../MyPage/AlramInfo/AlramInfo';
import { RiAlarmWarningFill } from "react-icons/ri";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { PiCoffee } from "react-icons/pi";
import { VscMegaphone } from "react-icons/vsc";

function CafeOwnerMyPage(props) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState();
    const [user, setUser] = useRecoilState(State);
    const [check, setCheck] = useState("user");
    const [isCount, setCount] = useState({
        user: {},
        board: {},
        review: {},
        comment: {},
        boardComment: {}
    })

    // "자유글"만 담은 배열 생성, isCount에 데이터가 들어오기 전에는 실행 되지 않도록 삼항연산자 사용
    const freePosts = Array.isArray(isCount.board) ? isCount.board.filter(post => post.category === '자유글') : [];

    // "공지사항"만 담은 배열 생성
    const noticePosts = Array.isArray(isCount.board) ? isCount.board.filter(post => post.category === '공지사항') : [];

    const openModal = () => {
        setIsOpen(true)
        console.log(isOpen);
    }

    const closeModal = () => {
        setIsOpen(false)
        console.log(isOpen);
    }

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
                alert(`${response.data?.user?.username} 의 정보를 가져오지 못했습니다.`);
            }
        }
    )

    const cafeData = useQuery(
        ["cafeDataQuery"],
        async () => {
            const response = await instance.get('/cafe/owner');
            return response?.data;
        },
        {
            enabled: userManagement.isSuccess && !!userManagement?.data?.data,
            retry: 0,
            refetchOnWindowFocus: false,
        }
    )

    const handleOnModalClick = (value) => {
        if (value) {
            console.log("e" + value);
            setCheck(value);
            setIsOpen(true);
        }
        console.log(check);
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
                    <p>{freePosts === 0 ? '0' : freePosts.length}</p>
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
                <div css={s.menu} onClick={() => navigate(`/owner/cafe/modify/${cafeData?.data?.cafeId}`)}>
                    <PiCoffee />
                    <p>카페 관리</p>
                    <p>{cafeData?.data?.cafeName}</p>
                </div>
                <div css={s.menu} onClick={() => navigate('/owner/notice/list')}>
                    <VscMegaphone />
                    <p>공지사항 관리</p>
                    <p>{noticePosts === 0 ? '0' : noticePosts.length}</p>
                </div>
                <div css={s.menu} onClick={() => handleOnModalClick("alram")}>
                    <RiAlarmWarningFill />
                    <p>알림</p>
                </div>
            </div>
            <ReactModal isOpen={isOpen} check={check} isCount={isCount[check]} style={s.modalStyles}>
                <button onClick={closeModal}>Close</button>
                {
                    check === "userinfo" ?
                        <UserProfileModify isCount={isCount.user} />
                        :
                        check === "post" ?
                            <PostModify isCount={freePosts} />
                            :
                            check === "comment" ?
                                <CommentState isCount={isCount.boardComment} />
                                :
                                check === "review" ?
                                    <ReviewState isCount={isCount.review} />
                                    :
                                    check === "alram" ?
                                        <AlramInfoPage isCount={isCount} />
                                        : <></>
                }
            </ReactModal>
        </div>
    );
}

export default CafeOwnerMyPage;