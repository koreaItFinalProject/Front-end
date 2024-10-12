import React from 'react';
import { useNavigate } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Menu({ title , icon , path }){
  const navigate = useNavigate();
  
  const handleClick = () => {
      navigate(path);
  }

  return (
      <div css={s.layout}  >
          <button onClick={handleClick}>{icon}{title}</button>
      </div>
  )
};

export default Menu;

