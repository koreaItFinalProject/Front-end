/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilState } from "recoil";
import { animationDirectionState } from "../../atom/animationDirection";
import { ANIMATION_PATHS } from "../../apis/util/ANIMATION_PATHS/ANIMATION_PATHS";
import { pageCounter } from "../../atom/pageCount";
import { useEffect, useState } from "react";

function MainLayout({ children, setCheck, setInputvalue }) {
    const location = useLocation();
    const noFooterPaths = ['/board/detail', '/cafe/modify'];
    const [animationDirection, setanimationDirection] = useRecoilState(animationDirectionState);
    const isNoFooter = noFooterPaths.some(path => location.pathname.includes(path));
    const [pageCount, setPageCount] = useRecoilState(pageCounter);
    const [historyStack, setHistoryStack] = useState([]);
    const [select, setSelect] = useState(false);
    useEffect(() => {
        setHistoryStack(prevStack => [...prevStack, location.pathname])
        setSelect(false);

        if (location.pathname !== "/user/select/signup" && location.pathname !== "/user/signin") {
            setHistoryStack([]);
        }
    }, [location.pathname])

    const isAnimationEnabled = ANIMATION_PATHS.some((path) => {
        // ":param" 부분을 정규식으로 변환하여 동적 경로와 매칭
        const pathPattern = path.replace(/:\w+/g, '[^/]+'); // 모든 파라미터를 정규식 [^/]+로 변환
        const regex = new RegExp(`^${pathPattern}$`);
        return regex.test(location.pathname);
    });


    const resetAnimationDirection = () => {
        setanimationDirection('right-to-left');
    }
    // console.log(animationDirection);

    console.log(location.pathname);
    console.log(pageCount);
    console.log(historyStack.length);
    console.log(select);
    return (
        <div css={s.background}>
            <div css={s.layout}>
                <div css={s.camera}>
                    <div></div>
                    <div></div>
                    <div>
                        <div></div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div css={s.container}>
                    <div css={s.header}>
                        <Header />
                    </div>
                    {
                        isAnimationEnabled ? (
                            <AnimatePresence>
                                <motion.div css={s.children(isNoFooter)}
                                    pageCount={pageCount}
                                    key={location.pathname}
                                    className="page"
                                    initial={{
                                        opacity: 0.3, x: (location.pathname === "/user/select/signup" && historyStack.length === 0)
                                            || pageCount != 0 ? '100%' : '-100%'
                                    }} // 들어오는 위치
                                    animate={{ opacity: 1, x: 0 }} // 새 페이지 위치
                                    exit={{
                                        opacity: 0.3, x: pageCount > 0 ? '-100%' : '100%'
                                    }} // 나가는 페이지
                                    transition={{ duration: 0.7 }}
                                    // onAnimationComplete={resetAnimationDirection}
                                    style={{ position: 'absolute', width: '100%', top: 0, zIndex: 1 }}
                                    onClick={(resetAnimationDirection, console.log(historyStack))}

                                >
                                    {children}
                                </motion.div>
                            </AnimatePresence>)
                            :
                            <div css={s.children(isNoFooter)}>
                                {children}
                            </div>
                    }
                    {
                        isNoFooter
                            ?
                            <></>
                            :
                            <div css={s.footer}>
                                <Footer setCheck={setCheck} setInputvalue={setInputvalue} />
                            </div>
                    }
                </div>
            </div>
        </div >
    );
}

export default MainLayout;