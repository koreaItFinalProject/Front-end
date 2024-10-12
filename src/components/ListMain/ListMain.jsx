import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function ListMain(props) {
    return (
        <div>
            <div css={s.adornmentBox}></div>
            <div css={s.box}>
                <div css={s.inputSection}>
                    <p>검색:</p>
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
                        <p>조회수</p>
                        <p>추천수</p>
                    </div>

                    <div css={s.spanBox}>
                        <p>카페 이름:</p>
                        <p>카테고리:</p>
                        <p>주소:</p>
                    </div>
                    
                </div>

            </div>

            <div css={s.layout}>
                <div css={s.pictureBox}></div>
                <div css={s.showBox}>
                    <div css={s.viewBox}>
                        <p>조회수</p>
                        <p>추천수</p>
                    </div>

                    <div css={s.spanBox}>
                        <p>카페 이름:</p>
                        <p>카테고리:</p>
                        <p>주소:</p>
                    </div>
                </div>
            </div>

            <div css={s.layout}>
                <div css={s.pictureBox}></div>
                <div css={s.showBox}>
                    <div css={s.viewBox}>
                        <p>조회수</p>
                        <p>추천수</p>
                    </div>

                    <div css={s.spanBox}>
                        <p>카페 이름:</p>
                        <p>카테고리:</p>
                        <p>주소:</p>
                    </div>
                </div>
            </div>

            <div css={s.layout}>
                <div css={s.pictureBox}></div>
                <div css={s.showBox}>
                    <div css={s.viewBox}>
                        <p>조회수</p>
                        <p>추천수</p>
                    </div>

                    <div css={s.spanBox}>
                        <p>카페 이름:</p>
                        <p>카테고리:</p>
                        <p>주소:</p>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default ListMain;