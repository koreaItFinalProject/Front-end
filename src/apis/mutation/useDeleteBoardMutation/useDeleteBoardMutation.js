import { useMutation, useQueryClient } from "react-query";
import { instance } from "../../util/instance";

const useDeleteBoardMutation = (id, query) => {
    const queryClient = useQueryClient();
    return useMutation(
        async () => {
            await instance.delete(`/board/${id}`);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(query);
            }
        }
    );
};

export default useDeleteBoardMutation;