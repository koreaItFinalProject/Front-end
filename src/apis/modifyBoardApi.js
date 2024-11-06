import { useMutation, useQueryClient } from "react-query";
import { instance } from "./util/instance";

export const useModifyBoardMutation = (navigate) => {
    const queryClient = useQueryClient();
    return useMutation(
        async ({ modifyBoard, boardId }) => {
            const response = await instance.put(`/board/${boardId}`, modifyBoard);
            return response.data;
        },
        {
            onSuccess: (data) => {
                alert("수정이 완료되었습니다.");
                queryClient.invalidateQueries("boardListQuery");
                navigate(`/board/detail/${data}`);
            },
            onError: (error) => {
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
    );
};