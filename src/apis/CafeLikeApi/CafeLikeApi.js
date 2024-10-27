import { useMutation, useQuery } from "react-query";
import { instance } from "../util/instance";



export const useCafeLikeQuery = (cafeId) => {
    return useQuery(
        ["cafeLikeQuery"],
        async () => {
            const response = await instance.get(`/cafe/${cafeId}`);
            return response.data;
        },
        {
            refetchOnWindowFocus: false,
            retry: 0
        }
    );
}

export const useLikeMutation = (cafeId, refetchCafeLike) => {
    return useMutation(
        async () => {
            return await instance.post(`/cafe/${cafeId}/like`);
        },
        {
            onSuccess: () => {
                refetchCafeLike();
            }
        }
    );
};

export const useDislikeMutation = (cafeLikeId, refetchCafeLike) => {
    return useMutation(
        async () => {
            return await instance.delete(`/cafe/like/${cafeLikeId}`);
        },
        {
            onSuccess: () => {
                refetchCafeLike();
            }
        }
    );
};