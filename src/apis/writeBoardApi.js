import { instance } from "./util/instance"

export const writeBoardApi = async (board, navigate) => {
    try {
        const response = await instance.post("/board", board);
        alert("게시글이 작성되었습니다.")
        navigate(`/board/detail/${response.data.boardId}`);
    } catch (error) {
        const fieldErrors = error.response.data;
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