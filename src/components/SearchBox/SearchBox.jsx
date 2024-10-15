import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SearchBox({ check, setCheck, inputvalue, setInputvalue }) {
  const [inputdata, setInputdata] = useState("");

  const handleOnChange = (e) => {
    setCheck(e.target.value);
    console.log(inputdata);
    if(inputdata === ""){
      setInputdata(inputvalue)
    }
  };

  const handleInputOnChange = (e) => {
    setInputdata(e.target.value);
  };

  const handleSearchOnClick = async () => {
    setInputvalue(inputdata);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchOnClick();
    }
  };
  return (
    <div css={s.inputbox}>
      <input
        type="text"
        value={inputdata}
        onChange={handleInputOnChange}
        onKeyDown={handleInputKeyPress}
      />
      <button onClick={handleSearchOnClick}>확인</button>
      <fieldset css={s.radiobutton}>
        <label>
          <input
            type="radio"
            name="menu"
            onChange={handleOnChange}
            value={"전체"}
            checked={check === "전체"}
          />
          전체
        </label>
        <label>
          <input
            type="radio"
            name="menu"
            onChange={handleOnChange}
            value={"브런치"}
            checked={check === "브런치"}
          />
          브런치
        </label>
        <label>
          <input
            type="radio"
            name="menu"
            onChange={handleOnChange}
            value={"분위기"}
            checked={check === "분위기"}
          />
          분위기
        </label>
        <label>
          <input
            type="radio"
            name="menu"
            onChange={handleOnChange}
            value={"베이커리"}
            checked={check === "베이커리"}
          />
          베이커리
        </label>
        <label>
          <input
            type="radio"
            name="menu"
            onChange={handleOnChange}
            value={"디저트"}
            checked={check === "디저트"}
          />
          디저트
        </label>
      </fieldset>
    </div>
  );
}

export default SearchBox;
