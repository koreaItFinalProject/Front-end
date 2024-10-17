import React from 'react';
import ListMain from '../../components/ListMain/ListMain';
import { useQueryClient } from 'react-query';

function CafeListPage({ check, setCheck, inputvalue, setInputvalue }) {
    const queryClient = useQueryClient();
    const cafelist = queryClient.getQueryData(["cafeQuery", check, inputvalue]);
    const cafe = cafelist?.data;
    console.log(cafe);
    return (
        <div>
            <ListMain/>
        </div>
    );
}

export default CafeListPage;