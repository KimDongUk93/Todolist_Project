import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList, removeList } from "../redux/actions/listAction";
import { RootState } from "../redux/store";
import List from "./List";

function ListComp(){
  const dispatch = useDispatch();
  //RootState : store의 state에 적용되는 타입
  const lists = useSelector((state: RootState) => state.todoList.lists);
  
  //setA(lists)
  const removeListHandler = (id:number):void => {
    dispatch(removeList(id));
  }

  useEffect(()=> {
    dispatch(getList())
  },[])
  
  return (
    <div className="list-comp">
      <ul>
        {lists ? 
            lists.map((item, index) => <List item={item} index={index} removeList={removeListHandler}/>) : 
            <li>no list</li>
        }
      </ul>
    </div>
  );
}

export default ListComp;