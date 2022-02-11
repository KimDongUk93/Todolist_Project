import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {setList, removeAllList} from "../redux/actions/listAction";

function InputComp() {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const setTextHandler = (e:React.ChangeEvent<HTMLInputElement>) : void =>{
    const inputValue = e.target.value;
    setText(inputValue);
  }

  const createList = () : void => {
    dispatch(setList(text));
    setText("");
  }

  const removeAllListHandle = () : void => {
    dispatch(removeAllList());
  }

  return (
    <div className="input-comp">
      <input type="text" placeholder="write todo" onChange={setTextHandler} value={text}/>
      <p className="create-btn btn" onClick={createList}>WRT</p>
      <p className="remove-all-btn btn" onClick={removeAllListHandle}>DEL ALL</p>
    </div>
  );
}

export default InputComp;
