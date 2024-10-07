import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function ListMain(props) {
    return (
        <div>
            <div css={s.adornmentBox}></div>
            <div css={s.box}>
                <div css={s.inputSection}>
                    <span>검색:</span>
                    <input type="text" />
                </div>
                <label css={s.searchOption}>
                <select>
                    <option value="suggest">추천수</option>
                    <option value="views">조회수</option>
                </select>   
            </label>
            </div>

            <div css={s.layout}>
                <div css={s.pictureBox}></div>

                <div css={s.showBox}>

                    <div css={s.viewBox}>
                        <span>조회수</span>
                        <span>추천수</span>
                    </div>

                    <div css={s.spanBox}>
                        <span>카페 이름:</span>
                        <span>카테고리:</span>
                        <span>주소:</span>
                    </div>
                    
                </div>

            </div>

            <div css={s.layout}>
                <div css={s.pictureBox}></div>
                <div css={s.showBox}>
                    <div css={s.viewBox}>
                        <span>조회수</span>
                        <span>추천수</span>
                    </div>

                    <div css={s.spanBox}>
                        <span>카페 이름:</span>
                        <span>카테고리:</span>
                        <span>주소:</span>
                    </div>
                </div>
            </div>

            <div css={s.layout}>
                <div css={s.pictureBox}></div>
                <div css={s.showBox}>
                    <div css={s.viewBox}>
                        <span>조회수</span>
                        <span>추천수</span>
                    </div>

                    <div css={s.spanBox}>
                        <span>카페 이름:</span>
                        <span>카테고리:</span>
                        <span>주소:</span>
                    </div>
                </div>
            </div>

            <div css={s.layout}>
                <div css={s.pictureBox}></div>
                <div css={s.showBox}>
                    <div css={s.viewBox}>
                        <span>조회수</span>
                        <span>추천수</span>
                    </div>

                    <div css={s.spanBox}>
                        <span>카페 이름:</span>
                        <span>카테고리:</span>
                        <span>주소:</span>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default ListMain;