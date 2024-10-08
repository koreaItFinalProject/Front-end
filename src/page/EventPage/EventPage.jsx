import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import Header from '../../components/Header/Header';

function EventPage(props) {
    return (
        <div>
            <Header />
            <div css={s.layout}>
                <div css={s.eventImageBox}></div>

                <div css={s.progressEvent}></div>

                <p css={s.searchBox}>
                    검색:
                    <input type="text" />
                </p>

                <div css={s.eventPost}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>










        </div>
    );
}

export default EventPage;