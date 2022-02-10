import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {setList, removeAllList} from "../redux/actions/listAction";

function InputComp() {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const createList = () => {
    setText("");
    dispatch(setList(text));
  }

  const removeAllListHandle = () => {
    dispatch(removeAllList());
  }

  return (
    <div className="input-comp">
      <input type="text" placeholder="write todo" onChange={e=> setText(e.target.value)}/>
      <p className="create-btn btn" onClick={createList}>WRT</p>
      <p className="remove-all-btn btn" onClick={removeAllListHandle}>DEL ALL</p>
    </div>
  );
}

export default InputComp;
