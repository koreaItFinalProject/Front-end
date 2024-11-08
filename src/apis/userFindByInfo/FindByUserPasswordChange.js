
import { useNavigate } from "react-router-dom";
import { instance } from "../util/instance";
import { confirmAlert } from "../util/SweetAlert2/ConfirmAlert/ConfirmAlert";


const FindByUserPasswordChange = async (fieldName, checkValue) => {
    console.log(fieldName);
    console.log(checkValue);
    let getResponse;
    try {
        getResponse = await instance.put(`/user/change/${fieldName}`, checkValue);
        console.log(getResponse);
        return getResponse
    } catch (e) {
        console.log("실패");
        const response = e.response;
        console.log(response);
        confirmAlert(`${response.data}`)
        return response;
    }
}

export default FindByUserPasswordChange;

