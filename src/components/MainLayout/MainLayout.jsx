/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';

function MainLayout({ children, setCheck, setInputvalue }) {
    const location = useLocation();

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
                    <div css={s.children}>
                        {children}
                    </div>
                    {
                        location.pathname.includes('detail')
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