import React from 'react';
import UserInfo from '../Info/UserInfo/UserInfo';
import BoardInfo from '../Info/BoardInfo/BoardInfo';
import CommentInfo from '../Info/CommentInfo/CommentInfo';
import ReviewInfo from '../Info/ReviewInfo/ReviewInfo';
import ModifyProfilePage from '../../page/MyPage/ModifyProfilePage/ModifyProfilePage';

function MyPageSelect({ name, info }) {

    return (
        <div>
            {
                name === "modifypage" ?
                    <ModifyProfilePage info={info} />
                    :
                    check === "board" ?
                        <BoardInfo info={info} />
                        :
                        check === "comment" ?
                            <CommentInfo info={info} />
                            :
                            <ReviewInfo info={info} />
            }
        </div >
    );
}

export default MyPageSelect;