import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import Header from '../../components/Header/Header';

function EventPage(props) {
    return (
        <div>
            <Header/>
            <div css={s.layout}>
                <div css={s.eventImageBox}></div>

                <div css={s.progressEvent}></div>

                <div css={s.eventPost}>
                    <div css={s.searchBox}>
                        검색:
                        <input type="text" />
                    </div>
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