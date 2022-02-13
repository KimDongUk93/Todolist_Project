import React, { useEffect, useState } from "react";

function List({text, index, deleteList, updateList}) {
    const [updateText, setUpdateText] = useState("");

    const setUpdateHandler = (e) => {
        setUpdateText(e.target.value)
    }

    useEffect(() => {
        setUpdateText(text);
    },[text])

  return (
    <li key={index}>
        <input type="text" value={updateText} onChange={setUpdateHandler}/>
        <p>{text}</p>
        <span onClick={() => deleteList(index)}>DEL</span>
        <span onClick={() => updateList(index, updateText)}>UPD</span>
    </li>
  )
}

export default List