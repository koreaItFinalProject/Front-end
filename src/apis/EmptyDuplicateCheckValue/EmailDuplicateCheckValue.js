import { instance } from "../util/instance";

const EmailDuplicateCheckValue = async(email) => {
  console.log("체크");
  let successData ={
    isSucceses: false,
    ok: {
      message: "",
    }
  }
  
  try {
    const response = await instance.get(`/signup/check/${email}`)
    console.log(email);
    successData ={
      isSucceses:true,
      ok:response.data
    }
    console.log(successData);
    return successData
  }catch(error){
    const response = error.response;
    console.log(response);
  }
  return successData;
}

export default EmailDuplicateCheckValue;