import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useLocation, useNavigate } from 'react-router-dom';
import { FaList } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { useQueryClient } from 'react-query';
import { pageCounter } from '../../atom/pageCount';
import { useSetRecoilState } from 'recoil';

function Footer({ setCheck, setInputvalue }) {
    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const loginCheck = queryClient.getQueryData("accessTokenValidQuery");
    const accessCheck = queryClient.getQueryData("userInfoQuery");
    const setPageCount = useSetRecoilState(pageCounter);
    const handleListClick = () => {
        navigate('/cafe/list');
        setCheck("전체");
        setPageCount(0);
        setInputvalue("");
    }

    const handleMapClick = () => {
        navigate('/map');
        setPageCount(0);
        setCheck("전체");
        setInputvalue("");
    }

    const handleMyPageOnClick = () => {
        if (!loginCheck?.data) {
            setPageCount(0);
            navigate('/user/signin', { replace: true });
        } else if (loginCheck?.data) {
            if (accessCheck?.data.role === "USER") {
                setPageCount(0);
                navigate("/mypage", { replace: true });
                return;
            } else if (accessCheck?.data.role === "OWNER") {
                setPageCount(0);
                navigate("/owner/mypage", { replace: true });
                return;
            }
            else {
                navigate("/admin/mobile/mypage", { replace: true });
                setPageCount(0);
            };
        }
    }

    const handleBoardClick = () => {
        navigate('/board?page=1', { replace: true })
        setPageCount(0);
    }

    return (
        <div css={s.layout}>
            <button css={s.menuButton(pathname.startsWith("/map"))} onClick={handleMapClick}><FaMap /></button>
            <button css={s.menuButton(pathname.startsWith("/cafe"))} onClick={handleListClick}><FaList /></button>
            <button css={s.menuButton(pathname.startsWith("/board"))} onClick={handleBoardClick}><BsChatLeftTextFill /></button>
            <button css={s.menuButton(pathname.includes("/mypage"))} onClick={handleMyPageOnClick}><FaUserLarge /></button>
        </div>
    );
}

export default Footer;