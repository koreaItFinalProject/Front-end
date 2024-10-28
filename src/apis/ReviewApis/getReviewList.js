import { useQuery } from "react-query";
import { instance } from "../util/instance";

export const useReviewQuery = (cafeId) => {
    return useQuery(
        ["reviewQuery"],
        async () => {
            const reviewList = await instance.get(`/review/${cafeId}`);
            return reviewList.data;
        },
        {
            refetchOnWindowFocus: false,
            retry: 0
        }
    );
};