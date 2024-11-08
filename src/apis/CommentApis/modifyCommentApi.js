import { useMutation } from "react-query";
import { instance } from "../util/instance";
import { confirmAlert } from "../util/SweetAlert2/ConfirmAlert/ConfirmAlert";

const useModifyCommentMutation = (commentData, setCommentData, comments) => {
    return useMutation(
        async () => await instance.put(`/comment/${commentData.commentId}`, commentData),
        {
            onSuccess: () => {
                confirmAlert("댓글을 수정하였습니다.");
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