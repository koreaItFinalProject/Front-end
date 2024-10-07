import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function CafeBoardPage(props) {
    return (
        <div css={s.layout}>
            <div css={s.boardHeader}>
                <h1>커뮤니티</h1>
                <div>카페에 대한 이야기를 나누세요.</div>
            </div>
            <div css={s.noticeLayout}>
                <h1>공지사항을 안내드립니다.</h1>
                <div css={s.swiperContainer}>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={50}
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
                        <SwiperSlide>Slide 9</SwiperSlide>
                        <SwiperSlide>Slide 10</SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div css={s.boardListLayout}>
                <div css={s.boardListHeader}>
                    <h1>자유게시판</h1>
                    <div css={s.headerInputs}>
                        <select name="filter" id="">
                            <option value="제목"></option>
                            <option value="작성자"></option>
                        </select>
                        <div>
                            <input type="text" placeholder='검색' />
                            <button>검색</button>
                        </div>
                        <button>게시물 작성하기</button>
                    </div>
                </div>
                <div css={s.boardList}>
                    <thead>
                        <li>

                        </li>
                    </thead>
                    <tbody>

                    </tbody>
                </div>
            </div>
        </div>
    );
}

export default CafeBoardPage;