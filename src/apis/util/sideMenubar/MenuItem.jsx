import React from 'react';
import { useNavigate } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Menu({ title , icon , path }){
  const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(path.includes('mypage') ? '/admin/mobile/mypage' : `/manager/web${path}`);
  }

  return (
      <div css={s.layout}  >
          <button onClick={handleClick}>
            <div>
                {icon}
            </div>
            <div>
                {title}
            </div>
        </button>
      </div>
  )
};

export default Menu;

