import { instance } from "./util/instance"
import { confirmAlert } from "./util/SweetAlert2/ConfirmAlert/ConfirmAlert";

export const writeNoticeApi = async (board, navigate) => {
    try {
        const response = await instance.post("/board", board);
        await confirmAlert("공지사항이 작성되었습니다.");
        navigate(`/owner/notice/detail/${response.data}`);
    } catch (error) {
        const fieldErrors = error.response;
        for (let fieldError of fieldErrors) {
            if (fieldError.field === 'title') {
                confirmAlert(fieldError.defaultMessage);
                return;
            }
            for (let fieldError of fieldErrors) {
                if (fieldError.field === 'content') {
                    confirmAlert(fieldError.defaultMessage);
                    break;
                }
            }
        }
    }
}