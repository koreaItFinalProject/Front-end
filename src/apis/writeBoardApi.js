import { useMutation, useQueryClient } from "react-query";
import { instance } from "./util/instance"

export const useWriteBoardMutation = (navigate) => {
    const queryClient = useQueryClient();
    return useMutation(
        async (board) => {
            const response = await instance.post('/board', board);
            return response.data;
        },
        {
            onSuccess: (data) => {
                console.log(data);
                alert("게시글 작성이 완료되었습니다.");
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