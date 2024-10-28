import { useQuery } from "react-query"
import { instance } from "../util/instance"

export const useCafeDetailQuery = (cafeId) => {
    return useQuery(
        ["cafeDetailQuery"],
        async () => {
            const cafeDetail = await instance.get(`/cafe/detail/${cafeId}`);
            return cafeDetail.data;
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
        }
    );
};