import { useMutation, useQueryClient } from "react-query";
import { instance } from "./util/instance"
import { confirmAlert } from "./util/SweetAlert2/ConfirmAlert/ConfirmAlert";

export const useWriteBoardMutation = (navigate) => {
    const queryClient = useQueryClient();
    return useMutation(
        async (board) => {
            const response = await instance.post('/board', board);
            return response.data;
        },
        {
            onSuccess: (boardId) => {
                confirmAlert("작성 완료");
                queryClient.invalidateQueries("boardListQuery");
                navigate(`/board/detail/${boardId}`);
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