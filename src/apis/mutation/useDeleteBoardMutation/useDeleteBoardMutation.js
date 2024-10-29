import { useMutation } from "react-query";
import { instance } from "../../util/instance";
import { useNavigate } from "react-router-dom";

const useDeleteBoardMutation = (id) => {
    const navigate = useNavigate();

    return useMutation(
        async () => {
            return await instance.delete(`/board/${id}`)
        },
        {
            onSuccess: response => {
                alert("게시글을 삭제하였습니다.");
                navigate("/board?page=1");
            }
        }
    );
};
export default useDeleteBoardMutation;