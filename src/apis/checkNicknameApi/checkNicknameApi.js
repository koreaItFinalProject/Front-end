import { instance } from "../util/instance";

const checkNicknameApi = async(nickname) => {
  console.log(nickname);
  let checkNickname = {
    isSuccess:false
  };
  try {
    const response = await instance.get(`/user/check/nickname/${nickname}`);
    checkNickname = {
      isSuccess:true,
    }
    console.log(checkNickname); 
    console.log(response); 
  } catch (error) {
    const response = error.response
    console.log(response);
    return error.response
  }
  return checkNickname;
}

export default checkNicknameApi;