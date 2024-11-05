import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Global } from '@emotion/react';
import { reset } from './Global/global';
import { useEffect, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { instance } from './apis/util/instance';
import MainLayout from './components/MainLayout/MainLayout';
import MapPage from './page/MapPage/MapPage';
import UserSignupPage from './page/SignupPage/UserSignupPage/UserSignupPage';
import OwnerSignupPage from './page/SignupPage/OwnerSignupPage/OwnerSignupPage';
import UserSigninPage from './page/UserSigninPage/UserSigninPage';
import UserFindPage from './page/UserFindPage/UserFindPage';
import MyPage from './page/MyPage/MyPage';
import CafeListPage from './page/Cafe/CafeListPage/CafeListPage';
import CafeDetailPage from './page/Cafe/CafeDetailPage/CafeDetailPage';
import BoardListPage from './page/Board/BoardListPage/BoardListPage';
import CafeReviewPage from './page/Cafe/CafeReviewPage/CafeReviewPage';
import CafeReviewModifyPage from './page/Cafe/CafeReviewModifyPage/CafeReviewModifyPage';
import OAuth2Signup from './page/SignupPage/OAuth2Signup/OAuth2Signup';
import ModifyProfilePage from './page/MyPage/ModifyProfilePage/ModifyProfilePage';
import OAuth2MergePage from './page/SignupPage/OAuth2Page/OAuth2MergePage';
import ReactModal from 'react-modal';
import ManagerMainLayout from './components/Manager/ManagerMainLayout/ManagerMainLayout';
import CafeModifyPage from './page/CafeOwner/CafeModifyPage/CafeModifyPage';
import BoardDetailPage from './page/Board/BoardDetailPage/BoardDetailPage';
import BoardModifyPage from './page/Board/BoardModifyPage/BoardModifyPage';
import BoardWritePage from './page/Board/BoardWritePage/BoardWritePage';
import ManagerProfilePage from './page/Admin/WebManager/ManagerProfilePage/ManagerProfilePage';
import ManagerDashBoardPage from './page/Admin/WebManager/ManagerDashBoardPage/ManagerDashBoardPage';
import ManagerManagementPage from './page/Admin/WebManager/ManagerManagementPage/ManagerManagementPage';
import ManagerStoreManagementPage from './page/Admin/WebManager/ManagerStoreManagementPage/ManagerStoreManagementPage';
import ManagerSetting from './page/Admin/WebManager/ManagerSetting/ManagerSetting';
import MobileAdminMyPage from './page/Admin/MobileAdmin/MobileAdminMyPage';
import CafeOwnerMyPage from './page/CafeOwner/CafeOwnerMyPage/CafeOwnerMyPage';
import CafeNoticeListPage from './page/CafeOwner/CafeNoticeListPage/CafeNoticeListPage';
import CafeNoticeWritePage from './page/CafeOwner/CafeNoticeWritePage/CafeNoticeWritePage';
import CafeNoticeDetailPage from './page/CafeOwner/CafeNoticeDetailPage/CafeNoticeDetailPage';
import CafeNoticeModifyPage from './page/CafeOwner/CafeNoticeModifyPage/CafeNoticeModifyPage';
import NoticeDetailPage from './page/Cafe/NoticeDetailPage/NoticeDetailPage';
import UserSignupSelectPage from './page/UserSignupSelectPage/UserSignupSelectPage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

ReactModal.setAppElement('#root');

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [authRefresh, setAuthRefresh] = useState(true);
  const [check, setCheck] = useState("전체");
  const [inputvalue, setInputvalue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchFilter, setSearchFilter] = useState("title");
  const [category, setCategory] = useState("공지사항");
  const limit = 20;

  useEffect(() => {
    if (!authRefresh) {
      setAuthRefresh(true);
    }
  }, [location.pathname]);

  const { data: boardList, fetchNextPage, hasNextPage, refetch } = useInfiniteQuery(
    ["boardListQuery", category],
    async ({ pageParam = 1 }) => await instance.get('/board/list', {
      params: {
        page: pageParam,
        limit: limit,
        searchFilter: searchFilter,
        searchValue: searchValue,
        category: category
      }
      // await instance.get(`/board/list?page=${pageParam}&limit=${limit}&searchFilter=${searchFilter}&searchValue=${searchValue}`), url 파라미터가 너무 길어져서 param 객체로 묶어서 요청 보냄
    }),
    {
      getNextPageParam: (lastPage, allPage) => {
        const totalPageCount = lastPage.data.totalCount % limit === 0
          ? lastPage.data.totalCount / limit
          : Math.floor(lastPage.data.totalCount / limit) + 1
        return totalPageCount !== allPage.length ? allPage.length + 1 : null;
      },
      retry: 0,
      refetchOnWindowFocus: false,
    }
  );

  const accessTokenValid = useQuery(
    ["accessTokenValidQuery"],
    async () => {
      setAuthRefresh(false);
      return await instance.get("/auth/access", {
        params: {
          accessToken: localStorage.getItem("accessToken")
        }
      });
    },
    {
      enabled: authRefresh,
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: () => {
        const blockPaths = ["/user"];
        for (let blockPath of blockPaths) {
          if (location.pathname.startsWith(blockPath)) {
            alert("잘못된 요청입니다.");
            navigate(-1);
            break;
          }
        }
      },
      onError: () => {
        const authPaths = ["/mypage", "/owner", "/admin", "/manager"];
        for (let authPath of authPaths) {
          if (location.pathname.startsWith(authPath)) {
            alert("로그인 후 이용해주세요")
            navigate('/user/select/signup');
            break;
          }
        }
      }
    }
  );

  const userInfo = useQuery(
    ["userInfoQuery"],
    async () => {
      return await instance.get("/user/me");
    },
    {
      enabled: accessTokenValid.isSuccess && accessTokenValid.data?.data,
      refetchOnWindowFocus: false
    }
  );


  return (
    <>
      <Global styles={reset} />
      <Routes>
        <Route path="/" element={<Navigate to="/map" />} />

        <Route path='/manager/web/*' element={
          <ManagerMainLayout>
            <Routes>
              <Route path='/home' element={<ManagerDashBoardPage />} />
              <Route path='/profile' element={<ManagerProfilePage />} />
              <Route path='/management' element={<ManagerManagementPage />} />
              <Route path='/storemanagement' element={<ManagerStoreManagementPage check={check} setCheck={setCheck} inputvalue={inputvalue} setInputvalue={setInputvalue} />} />
              <Route path='/setting' element={<ManagerSetting />} />
            </Routes>
          </ManagerMainLayout>
        } />

        <Route path='/admin/mobile/*' element={
          <MainLayout setCheck={setCheck} setInputvalue={setInputvalue}>
            <Routes>
              <Route path='/mypage' element={<MobileAdminMyPage />} />
            </Routes>
          </MainLayout>
        } />

        <Route path='/owner/*' element={
          <MainLayout setCheck={setCheck} setInputvalue={setInputvalue}>
            <Routes>
              <Route path='/mypage' element={<CafeOwnerMyPage />} />
              <Route path='/mypage/modify' element={<ModifyProfilePage />} />
              <Route path='/cafe/modify/:cafeId' element={<CafeModifyPage />} />
              <Route path='/notice/list' element={<CafeNoticeListPage
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                refetch={refetch}
              />} />
              <Route path='/notice/detail/:boardId' element={<CafeNoticeDetailPage />} />
              <Route path='/notice/write' element={<CafeNoticeWritePage />} />
              <Route path='/notice/modify/:boardId' element={<CafeNoticeModifyPage />} />
            </Routes>
          </MainLayout>
        } />

        <Route path='/cafe/*' element={
          <MainLayout setCheck={setCheck} setInputvalue={setInputvalue}>
            <Routes>
              <Route path='list' element={<CafeListPage check={check} setCheck={setCheck} inputvalue={inputvalue} setInputvalue={setInputvalue} />} />
              <Route path='detail/:cafeId' element={<CafeDetailPage />} />
              <Route path='notice/detail/:boardId' element={<NoticeDetailPage />} />
              <Route path='review/:cafeId' element={<CafeReviewPage />} />
              <Route path='review/modify/:cafeId' element={<CafeReviewModifyPage />} />
            </Routes>
          </MainLayout>
        } />

        <Route path='/board/*' element={
          <MainLayout setCheck={setCheck} setInputvalue={setInputvalue}>
            <Routes>
              <Route path='' element={<BoardListPage
                boardList={boardList}
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
                refetch={refetch}
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                category={category}
                setCategory={setCategory}
              />} />
              <Route path='write' element={<BoardWritePage />} />
              <Route path='modify/:boardId' element={<BoardModifyPage />} />
              <Route path='detail/:boardId' element={<BoardDetailPage />} />
            </Routes>
          </MainLayout>
        } />

        <Route path='/user/*' element={
          <MainLayout setCheck={setCheck} setInputvalue={setInputvalue}>
                <Routes>
                  <Route path='/oauth/oauth2' element={<OAuth2MergePage />} />
                  <Route path='/oauth/oauth2/signup' element={<OAuth2Signup />} />
                  <Route path='/find' element={<UserFindPage />} />
                  <Route path='/signup' element={<UserSignupPage />} />
                  <Route path='/signin' element={<UserSigninPage />} />
                  <Route path='/owner/signup' element={<OwnerSignupPage />} />
                  <Route path='/select/signup' element={<UserSignupSelectPage />} />
                </Routes>
          </MainLayout>
        } />

        <Route path='/*' element={
          <MainLayout setCheck={setCheck} setInputvalue={setInputvalue}>
            <Routes>
              <Route path='/map' element={<MapPage check={check} setCheck={setCheck} inputvalue={inputvalue} setInputvalue={setInputvalue} />} />
              <Route path='/mypage' element={<MyPage />} />
            </Routes>
          </MainLayout>
        } />
      </Routes>
    </>
  );
}

export default App;