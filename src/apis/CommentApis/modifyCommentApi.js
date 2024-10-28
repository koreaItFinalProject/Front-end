import { useMutation } from "react-query";
import { instance } from "../util/instance";

const useModifyCommentMutation = (commentData, setCommentData, comments) => {
    return useMutation(
        async () => await instance.put(`/comment/${commentData.commentId}`, commentData),
        {
            onSuccess: () => {
                alert("댓글을 수정하였습니다.");
                setCommentData({
                    commentId: 0,
                    parentId: null,
                    content: ""
                });
                comments.refetch();
            }
        }
    );
};

export default useModifyCommentMutation;