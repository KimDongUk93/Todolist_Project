import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {setList, removeAllList} from "../redux/action/listAction";

function InputComponent() {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const writeText = (e) => {
    setText(e.target.value)
  }

  const createList = (e) => {
    if(text === "") {
      alert('write please!');
      return false
    }
    
    dispatch(setList(text));
    setText("");
  }

  const removeList = () => {
    dispatch(removeAllList());
  }

  return (
    <div className="input-comp">
      <input type="text" placeholder="write todo" onChange={writeText} value={text}/>
      <p className="create-btn btn" onClick={createList}>WRT</p>
      <p className="remove-all-btn btn" onClick={removeList}>DEL ALL</p>
    </div>
  );
}

export default InputComponent;
