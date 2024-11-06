/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilState } from "recoil";
import { animationDirectionState } from "../../atom/animationDirection";

function MainLayout({ children, setCheck, setInputvalue, pageCount, setPageCount }) {
    const location = useLocation();
    const noFooterPaths = ['/board/detail', '/cafe/modify'];
    const [animationDirection, setanimationDirection] = useRecoilState(animationDirectionState);
    const isNoFooter = noFooterPaths.some(path => location.pathname.includes(path));
    const pagesWithAnimation = ['/user/signup', '/user/signin', '/user/owner/signup', "/user/select/signup", "/user/oauth/oauth2", "/user/oauth/oauth2/signup"];
    const Animation = pagesWithAnimation.includes(location.pathname);

    console.log(animationDirection);

    const resetAnimationDirection = () => {
        setanimationDirection('left-to-right');
    }

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
                        Animation ? (
                            <AnimatePresence>
                                <motion.div css={s.children(isNoFooter)}
                                    pageCount={pageCount}
                                    key={location.pathname}
                                    className="page"
                                    initial={{ opacity: 0, x: animationDirection === 'right-to-left' ? '-100%' : '100%' }} // 들어오는 위치
                                    animate={{ opacity: 1, x: 0 }} // 새 페이지 위치
                                    exit={{ opacity: 0, x: animationDirection === 'right-to-left' ? '100%' : '-100%' }} // 나가는 페이지
                                    transition={{ duration: 1 }}
                                    onAnimationComplete={resetAnimationDirection}
                                    style={{ position: 'absolute', width: '100%', top: 0, zIndex: 1 }}
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
        </div>
    );
}

export default MainLayout;