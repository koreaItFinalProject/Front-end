import React from 'react';
import UserInfo from '../Info/UserInfo/UserInfo';
import BoardInfo from '../Info/BoardInfo/BoardInfo';
import CommentInfo from '../Info/CommentInfo/CommentInfo';
import ReviewInfo from '../Info/ReviewInfo/ReviewInfo';

function UserContent({ check, info }) {

    return (
        <div>
            {
                check === "user" ?
                    <UserInfo info={info} />
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

export default UserContent;