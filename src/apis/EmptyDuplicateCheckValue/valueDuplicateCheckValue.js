import { confirmAlert } from "../util/SweetAlert2/ConfirmAlert/ConfirmAlert";

const valueDuplicateCheckValue = (newValue) => {
    console.log(newValue);
    if (!(newValue.trim())) {
        confirmAlert("공백으로는 변경할 수 없습니다.");
        return true;
    }
    return false;
};

export default valueDuplicateCheckValue