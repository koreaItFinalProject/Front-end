
import { instance } from "../util/instance";
import { confirmAlert } from "../util/SweetAlert2/ConfirmAlert/ConfirmAlert";


const DuplicateCheckValue = async (fieldName, checkValue) => {
  console.log(fieldName);
  console.log(checkValue);
  let getResponse;
  try {
    getResponse = await instance.get(`/user/find/duplicated/${fieldName}?value=${checkValue}`);
    console.log(getResponse);
    return getResponse;
  } catch (e) {
    console.log("해당 id없음");
    const response = e.response;
    confirmAlert("해당 요청이 실패했습니다.")
    return response;
  }
}

export default DuplicateCheckValue;

