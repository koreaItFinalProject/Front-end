import { useQuery } from "react-query";
import { instance } from "../util/instance";

const useGetComments = (boardId) => {
    return useQuery(
        ["commentsQuery"],
        async () => {
            return await instance.get(`/comment/${boardId}`);
        },
        {
            retry: 0,
            refetchOnWindowFocus: false
        }
    );
};

export default useGetComments;