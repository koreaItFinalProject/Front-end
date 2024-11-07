
import { instance } from "../util/instance";


const DuplicateCheckValue = async (fieldName, value) => {
  console.log(fieldName);
  console.log(value.email);
  let getResponse;
  try {
    getResponse = await instance.get(`/user/find/duplicated/${fieldName}?value=${value}`);
    if (getResponse.status === 200) {
      console.log("확인");
      const emailResponse = await instance.post(`/mail/find/send/${fieldName}?value=${value}`)
      return getResponse;
    }
  } catch (e) {
    console.log("해당 id없음");
    const response = e.response;
    return response;
  }
}

export default DuplicateCheckValue;