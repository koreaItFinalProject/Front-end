import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import {  IoIosWifi, IoIosBatteryFull  } from "react-icons/io";

function Header() {

    return (
        <>
            <div css={s.layout}>
                <div css={s.highBar}>
                    <div>
                        <IoIosWifi/>
                        <IoIosBatteryFull/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;