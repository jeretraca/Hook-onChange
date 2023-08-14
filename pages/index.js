import React, { useState } from 'react';
import ImageChangeOnScroll from './ImageChangeOnScroll';
//import ImageChangeOnMouseOver from "./ImageChangeOnMouseOver";

const InputElement = () => {
  const [inputText, setInputText] = useState('');
  const [historyList, setHistoryList] = useState([]);

  return (
    <>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter Some Text"
      />
      <br />
      {inputText}
      <hr />
      <br />
      <ul>
        {historyList.map((rec) => {
          return <div>{rec}</div>;
        })}
      </ul>
      <ImageChangeOnScroll />
    </>
  );
};

export default InputElement;
