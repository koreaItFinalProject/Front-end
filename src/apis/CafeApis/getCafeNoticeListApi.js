import { useQuery } from "react-query"
import { instance } from "../util/instance"

export const useCafeNoticeListQuery = (ownerId) => {
    return useQuery(
        ["cafeNoticeListQuery"],
        async () => {
            const noticeList = await instance.get(`/board/notice/${ownerId}`);
            return noticeList.data;
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
        }
    );
};