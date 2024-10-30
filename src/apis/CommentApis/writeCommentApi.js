import { useMutation } from "react-query";
import { instance } from "../util/instance";


const useWriteCommentMutation = (commentData, setCommentData, comments, boardId) => {
    return useMutation(
        async () => {
            return await instance.post("/comment", commentData);
        },
        {
            onSuccess: response => {
                setCommentData({
                    boardId,
                    parentId: null,
                    content: ""
                });
                comments.refetch();
            }
        }
    );
};

export default useWriteCommentMutation;