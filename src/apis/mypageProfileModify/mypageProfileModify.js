import { instance } from "../util/instance";

const mypageProfileModify = async (userInfo) => {
  console.log(userInfo);

  try {
    const response = await instance.put("/mypage/profile/modify", userInfo);
    console.log(response);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
    alert("프로필 업데이트 중 오류가 발생")
  }
}

export default mypageProfileModify;