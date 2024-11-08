import { confirmAlert } from "../util/SweetAlert2/ConfirmAlert/ConfirmAlert";
import { instance } from "../util/instance";

const EmailDuplicateCheckValue = async (email) => {
  console.log("체크");
  console.log(email);
  let successData = {
    isSucceses: false,
    ok: {
      message: "",
    }
  }

  try {
    const response = await instance.get(`/signup/check/${email}`)
    console.log(email);
    successData = {
      isSucceses: true,
      ok: response.data
    }
    console.log(successData);
    return successData
  } catch (error) {
    const response = error.response;
    console.log(response);
    if (response.status !== 400) {
      return confirmAlert("다시 요청해주세요");
    }
  }
  return successData;
}

export default EmailDuplicateCheckValue;