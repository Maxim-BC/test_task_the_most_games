import React, { useState, useEffect } from "react";
import VerificationText from "./VerificationText";

export default function SearchBox({ setArrayLines, getList }) {
  const [arrayIdLine, setArrayIdLine] = useState([]);
  const separators = [",", ";"];

  const searchLineChangeHandler = (e) => {
    const array = e.target.value;
    const result = array.split(new RegExp(separators.join("|"), "g"));
    const filterArr = result.filter((item, index) => {
      return result.indexOf(item) === index;})
    setArrayIdLine(filterArr);
  };
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    setArrayLines([]);
    arrayIdLine.forEach(getList);
  };
  const resultValid =
    arrayIdLine === []
      ? ""
      : arrayIdLine.map((item) => {
          return <VerificationText item={item} />;
        });
  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          <p className="search-box__form-label-p">Индификаторы строк:</p>
          <div className="search-box">
            <textarea
              type="text"
              className="search-box__form-textarea"
              placeholder="Например: 10, 15"
              onChange={searchLineChangeHandler}
            />
            <div contenteditable="true" className="text-area-selection">
              {resultValid}
            </div>
          </div>
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!arrayIdLine}
        >
          Подсчитать
        </button>
      </form>
    </div>
  );
}
