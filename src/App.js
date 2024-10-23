import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Global } from '@emotion/react';
import { reset } from './Global/global';
import { useEffect, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { instance } from './apis/util/instance';
import MainLayout from './components/MainLayout/MainLayout';
import MapPage from './page/MapPage/MapPage';
import WritePage from './page/Board/WritePage/WritePage';
import UserSignupPage from './page/SignupPage/UserSignupPage/UserSignupPage';
import OwnerSignupPage from './page/SignupPage/OwnerSignupPage/OwnerSignupPage';
import ManagerProfilePage from './page/Manager/ManagerProfilePage/ManagerProfilePage';
import ManagerDashBoardPage from './page/Manager/ManagerDashBoardPage/ManagerDashBoardPage';
import ManagerManagementPage from './page/Manager/ManagerManagementPage/ManagerManagementPage';
import DetailPage from './page/Board/DetailPage/DetailPage';
import ManagerStoreManagementPage from './page/Manager/ManagerStoreManagementPage/ManagerStoreManagementPage';
import ModifyPage from './page/Board/ModifyPage/ModifyPage';
import ManagerSetting from './page/Manager/ManagerSetting/ManagerSetting';
import ManagerMainLayout from './components/Manager/ManagerMainLayout/ManagerMainLayout';
import UsersSignupSelectPage from './page/UsersSignupSelectPage/UsersSignupSelectPage';
import UserSigninPage from './page/UserSigninPage/UserSigninPage';
import UserFindPage from './page/UserFindPage/UserFindPage';
import MyPage from './page/MyPage/MyPage';
import SignLayout from './components/MainLayout/SignLayout/SignLayout';
import CafeListPage from './page/Cafe/CafeListPage/CafeListPage';
import CafeDetailPage from './page/Cafe/CafeDetailPage/CafeDetailPage';
import BoardListPage from './page/Board/BoardListPage/BoardListPage';
import CafeReviewPage from './page/Cafe/CafeReviewPage/CafeReviewPage';
import CafeReviewModifyPage from './page/Cafe/CafeReviewModifyPage/CafeReviewModifyPage';
import OAuth2Signup from './page/SignupPage/OAuth2Signup/OAuth2Signup';
import ModifyProfilePage from './page/MyPage/ModifyProfilePage/ModifyProfilePage';
import OAuth2MergePage from './page/SignupPage/OAuth2Page/OAuth2MergePage';
import ReactModal from 'react-modal';

function App() {
  const location = useLocation();
  const navigete = useNavigate();
  const [authRefresh, setAuthRefresh] = useState(true);
  const [check, setCheck] = useState("전체");
  const [inputvalue, setInputvalue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchFilter, setSearchFilter] = useState("title");
  const limit = 20;

  useEffect(() => {
    if (!authRefresh) {
      setAuthRefresh(true);
    }
  }, [location.pathname]);

  const cafe = useQuery(
    ["cafeQuery", check, inputvalue],
    async () => {
      return instance.get(`/cafe/get/${check}/${inputvalue}`);
    },
    {
      refetchOnWindowFocus: false,
      retry: 0,
    }
  );

  const { data: boardList, fetchNextPage, hasNextPage, refetch } = useInfiniteQuery(
    ["boardListQuery"],
    async ({ pageParam = 1 }) => await instance.get(`/board/list?page=${pageParam}&limit=${limit}&searchFilter=${searchFilter}&searchValue=${searchValue}`),
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
      onSuccess: response => {
        const permitAllPaths = ["/user/auth/sasdas", "/owner"];
        for (let permitAllPasth of permitAllPaths) {
          if (location.pathname.startsWith(permitAllPasth)) {
            console.log(permitAllPasth);
            const blockPaths = ["/user", "/owner"];
            for (let blockPath of blockPaths) {
              if (location.pathname.startsWith(blockPath)) {
                alert("잘못된 요청입니다.")
                navigete("/");
                break;
              }
            }
          }
        }
      },
      onError: error => {
        const authPaths = ["/profile"];
        for (let authPath of authPaths) {
          if (location.pathname.startsWith(authPath)) {
            alert("로그인 후 이용해주세요")
            navigete("/user/login");
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
        <Route path='/manager/*' element={
          <ManagerMainLayout>
            <Routes>
              <Route path='/profile' element={<ManagerProfilePage />} />
              <Route path='/home' element={<ManagerDashBoardPage />} />
              <Route path='/management' element={<ManagerManagementPage />} />
              <Route path='/storemanagement' element={<ManagerStoreManagementPage check={check} setCheck={setCheck} inputvalue={inputvalue} setInputvalue={setInputvalue} />} />
              <Route path='/setting' element={<ManagerSetting />} />
            </Routes>
          </ManagerMainLayout>
        } />
        <Route path='/*' element={
          <MainLayout setCheck={setCheck} setInputvalue={setInputvalue}>
            <Routes>
              <Route path='/list' element={<CafeListPage check={check} setCheck={setCheck} inputvalue={inputvalue} setInputvalue={setInputvalue} />} />
              <Route path='/cafe/detail/:cafeId' element={<CafeDetailPage check={check} setCheck={setCheck} inputvalue={inputvalue} setInputvalue={setInputvalue} />} />
              <Route path='/cafe/review/:cafeId' element={<CafeReviewPage />} />
              <Route path='/cafe/review/modify/:cafeId' element={<CafeReviewModifyPage />} />
              <Route path='/map' element={<MapPage check={check} setCheck={setCheck} inputvalue={inputvalue} setInputvalue={setInputvalue} />} />
              <Route path='/board' element={<BoardListPage
                boardList={boardList}
                fetchNextPage={fetchNextPage}
                hasNextPage={hasNextPage}
                refetch={refetch}
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />}
              />
              <Route path='/board/write' element={<WritePage />} />
              <Route path='/board/detail/:boardId' element={<DetailPage />} />
              <Route path='/board/modify/:boardId' element={<ModifyPage />} />
            </Routes>
          </MainLayout>
        } />
        <Route path='/user/*' element={
          <SignLayout>
            <Routes>
              <Route path='/oauth/oauth2' element={<OAuth2MergePage />} />
              <Route path='/oauth/oauth2/signup' element={<OAuth2Signup />} />
              <Route path='/find' element={<UserFindPage />} />
              <Route path='/signup' element={<UserSignupPage />} />
              <Route path='/signin' element={<UserSigninPage />} />
              <Route path='/owner/signup' element={<OwnerSignupPage />} />
              <Route path='/select/signup' element={<UsersSignupSelectPage />} />
              <Route path='/auth/mypage' element={<MyPage />} />
              <Route path='/auth/mypage/modify' element={<ModifyProfilePage />} />
            </Routes>
          </SignLayout>
        } />
      </Routes>
    </>
  );
}

export default App;
