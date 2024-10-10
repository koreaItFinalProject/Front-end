/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import Header from '../../../components/Header/Header';
import ReactPaginate from 'react-paginate';
import { instance } from '../../../apis/util/instance';
import { useQuery } from "react-query";

function BoardPage(props) {
    const [searchParams] = useSearchParams();
    const [totalPageCount, setTotalPageCount] = useState(1);
    const limit = 20;
    const navigate = useNavigate();

    const boardList = useQuery(
        ["boardListQuery", searchParams.get("page")],
        async () => await instance.get(`/board/list?page=${searchParams.get("page")}&limit=${limit}`),
        {
            retry: 0,
            onSuccess: response => setTotalPageCount(
                response.data.totalCount % limit === 0
                    ? response.data.totalCount / limit
                    : Math.floor(response.data.totalCount / limit) + 1,
                )
        }
    );

    const handlePageOnChange = (event) => {
        navigate(`/board?page=${event.selected + 1}`); // 페이지를 넘길때 마다 useNavigate로 페이지 이동, index가 0부터 시작하기 떄문에 + 1, 렌더링 되는 컴포넌트는 그대로이지만 page 번호만 바뀐다.
    }

    console.log(boardList);

    return (
        <div css={s.layout}>
            <Header />
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
                    <div css={s.thead}>
                        <div css={s.tr}>
                            <span>번호</span>
                            <span>제목</span>
                            <span>추천수</span>
                            <span>조회수</span>
                            <span>작성일</span>
                        </div>
                    </div>
                    <div css={s.tbody}>
                        {
                            boardList.isLoading
                                ?
                                <></>
                                :
                                boardList.data.data.boards.map(board =>
                                    <div css={s.tr} key={board.id} onClick={() => navigate(`/board/detail/${board.id}`)}>
                                        <span>{board.id}</span>
                                        <span>{board.title}</span>
                                        <span>{board.likeCount}</span>
                                        <span>{board.viewCount}</span>
                                        <span>{board.writeDate}</span>
                                    </div>
                                )
                        }
                    </div>
                    <div css={s.paginateContainer}>
                        <ReactPaginate
                            breakLabel="..."
                            previousLabel={<><IoMdArrowDropleft /></>}
                            nextLabel={<><IoMdArrowDropright /></>}
                            pageCount={totalPageCount} // 총 페이지 수, 
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            activeClassName='active'
                            onPageChange={handlePageOnChange}
                            forcePage={parseInt(searchParams.get("page")) - 1}
                        // forcePage: 현재 활성화된 페이지를 강제로 설정, url의 page 파라미터를 가져와서 현재 페이지로 설정한다, 
                        // 이때 -1을 해주는 이유는 페이지네이션의 인덱스가 0부터 시작하기 때문이다.
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardPage;