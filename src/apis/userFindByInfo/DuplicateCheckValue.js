import { instance } from "../util/instance";


const DuplicateCheckValue = async(fieldName, value) => {
    let getResponse;
    try {
      getResponse = await instance.get(`/user/find/duplicated/${fieldName}?value=${value}`);
      if (getResponse.status === 200) {
        console.log("확인");
        return getResponse;
      }
    } catch (e) {
      console.log("해당 id없음");
      const response = e.response;
      return response;    
    }
}

export default DuplicateCheckValue;