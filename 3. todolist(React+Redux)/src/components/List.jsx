import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeList, updateList } from "../redux/action/listAction";

function List({item, index}) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const update = () => {
    dispatch(updateList(id, text));
    setOpen(false)
  }

  const changeList = (e) => {
    const html = e.target.parentNode.querySelector(".text");
    const {listId} = e.target.parentNode.dataset
    const innetText = html.innerText;

    setOpen(true)
    setId(listId);
    setText(innetText);
  }

  const deleteList = (e) => {
    const {listId} = e.target.parentNode.dataset;
    
    dispatch(removeList(listId));
    setOpen(false)
  }
    
  return (
    <>
        <li key={index} className="list" data-list-id={index}>
            <input className={!open ? "close" : "input"}type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <div className={open ? "close text" : "text"}>{item}</div>
            <div className={open ? "close btn" : "update-btn btn"} onClick={changeList}>UPD</div>
            <div className={!open ? "close btn" : "app-btn btn"} onClick={update}>APP</div>
            <div className={!open ? "close btn" : "cancle-btn btn"} onClick={()=> setOpen(false)}>CLE</div>
            <div className="delete-btn btn" onClick={deleteList}>X</div>
        </li>
    </>
  )
}

export default List