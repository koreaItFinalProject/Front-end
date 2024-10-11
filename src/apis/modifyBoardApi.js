import { instance } from "./util/instance";

export const modifyBoardApi = async (modifyBoard, boardId, navigate) => {
    console.log(modifyBoard);
    try {
        const response = await instance.put(`/board/${boardId}`, modifyBoard);
        console.log(response);
        alert("수정이 완료되었습니다.");
        navigate(`/board/detail/${response.data}`);
    } catch (error) {
        const fieldErrors = error.response.data;
        for (let fieldError of fieldErrors) {
            if (fieldError.field === "title") {
                alert(fieldError.defaultMessage);
                return;
            }
        }
        for (let fieldError of fieldErrors) {
            if (fieldError.field === "content") {
                alert(fieldError.defaultMessage);
                return;
            }
        }
    }
}