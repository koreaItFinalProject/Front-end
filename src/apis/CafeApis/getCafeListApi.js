import { useQuery } from "react-query";
import { instance } from "../util/instance";

export const useCafeQuery = (check, inputvalue) => {
    console.log(check);
    return useQuery(
        ["cafeQuery", check, inputvalue],
        async () => {
            const cafeList = await instance.get(`/cafe/get?category=${check}&search=${inputvalue}`);
            console.log(cafeList.data)
            return cafeList.data;
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
        }
    );
};