import { useMutation, useQueryClient } from "react-query";
import { instance } from "./util/instance";
import { confirmAlert } from "./util/SweetAlert2/ConfirmAlert/ConfirmAlert";

export const useModifyBoardMutation = (navigate) => {
    const queryClient = useQueryClient();
    return useMutation(
        async ({ modifyBoard, boardId }) => {
            const response = await instance.put(`/board/${boardId}`, modifyBoard);
            return response.data;
        },
        {
            onSuccess: async (data) => {
                await confirmAlert("게시글 수정 완료");
                queryClient.invalidateQueries("boardListQuery");
                navigate(`/board/detail/${data}`);
            },
            onError: (error) => {
                const fieldErrors = error.response.data;
                for (let fieldError of fieldErrors) {
                    if (fieldError.field === "title") {
                        confirmAlert(fieldError.defaultMessage);
                        return;
                    }
                }
                for (let fieldError of fieldErrors) {
                    if (fieldError.field === "content") {
                        confirmAlert(fieldError.defaultMessage);
                        return;
                    }
                }
            }
        }
    );
};