import { instance } from "../util/instance";

const checkUsernameApi = async(username) => {
  console.log(username);
  let checkname = {
    isSuccess:false
  };
  try {
    const response = await instance.get(`/user/check/username/${username}`);
    checkname = {
      isSuccess:true,
    }
    console.log(checkname); 
    console.log(response); 
  } catch (error) {
    const response = error.response
    console.log(response);
    return error.response
  }
  return checkname;
}

export default checkUsernameApi;