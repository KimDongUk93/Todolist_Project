import { useEffect, useState } from "react";
import {TodoListPropsType} from "../redux/types/listTypes";
import { updateList } from "../redux/actions/listAction";
import { useDispatch } from "react-redux";

//TodoListPropsType : ListComp에서 넘어온 인자들에게 적용되는 타입, item: string, index: number로 지정함
function List({number, item, index, removeList}: TodoListPropsType){
  //useState<string>() === useState("")
  const dispatch = useDispatch()
  const [text, setText] = useState<string>();

  useEffect(()=>{
    setText(item)
  },[])

  const setTextHandler = (e:React.ChangeEvent<HTMLInputElement>):void => {
    const inputValue = e.target.value;
    setText(inputValue);
  }

  const removeListHandler = ():void => removeList(index);

  const updateListHandler = () => {
    dispatch(updateList(index, text));
  }


  return (
    <li key={number} className="list" data-list-id={index}>
        <input className="input" type="text" value={text} onChange={setTextHandler}/>
        <div className="title">{item}</div>
        <div className="delete-btn btn" onClick={removeListHandler}>X</div>
        <div className="update-btn btn" onClick={updateListHandler}>UDT</div>
    </li>
  );
}

export default List;