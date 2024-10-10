import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header';

function BoardPage(props) {

    const navigate = useNavigate();

    return (
        <div css={s.layout}>
            <Header/>
            <div css={s.boardHeader}>
                <h1>커뮤니티</h1>
                <div>카페에 대한 이야기를 나누세요.</div>
            </div>
            <div css={s.noticeLayout}>
                <h1>공지사항을 안내드립니다.</h1>
                <div css={s.swiperContainer}>
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={4}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div css={s.boardListLayout}>
                <div css={s.boardListHeader}>
                    <h2>자유게시판</h2>
                    <div css={s.headerInputs}>
                        <h3>총 100,000,000개</h3>
                        <select name="filter" id="">
                            <option value="제목">제목</option>
                            <option value="작성자">작성자</option>
                        </select>
                        <div>
                            <input type="text" placeholder='검색' />
                            <button>검색</button>
                        </div>
                        <button onClick={() => navigate("/board/write")}>게시물 작성하기</button>
                    </div>
                </div>
                <div css={s.boardList}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>추천수</th>
                            <th>조회수</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </div>
            </div>
        </div>
    );
}

export default BoardPage;