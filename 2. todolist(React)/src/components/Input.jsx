import React, { useState } from "react";

function Input({ getList }) {
  const [text, setText] = useState("");

  const setTextHandler = (e) => setText(e.target.value);
  
  const getListHandler = () => {
    getList(text);
    setText("")
  }

  return (
    <section className="input-container">
      <h3>입력폼</h3>
      <input
        type="text"
        value={text}
        placeholder="할일을 입력하시오"
        onChange={setTextHandler}
      />
      <b className="input-btn" onClick={getListHandler}>
        입력버튼
      </b>
    </section>
  );
}

export default Input;
