import { instance } from "./util/instance"

export const writeNoticeApi = async (board, navigate) => {

    console.log(board);
    try {
        const response = await instance.post("/board", board);
        console.log(response.data);
        alert("공지사항이 작성되었습니다.");
        navigate(`/owner/notice/detail/${response.data}`);
    } catch (error) {
        console.error(error);
        const fieldErrors = error.response;
        for (let fieldError of fieldErrors) {
            if (fieldError.field === 'title') {
                alert(fieldError.defaultMessage);
                return;
            }
            for (let fieldError of fieldErrors) {
                if (fieldError.field === 'content') {
                    alert(fieldError.defaultMessage);
                    break;
                }
            }
        }
    }
}