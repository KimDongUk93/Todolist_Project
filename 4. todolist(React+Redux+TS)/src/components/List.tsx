import {TodoListPropsType} from "../redux/types/listTypes";

//TodoListPropsType : ListComp에서 넘어온 인자들에게 적용되는 타입, item: string, index: number로 지정함
function List({item, index, removeList}: TodoListPropsType){
  const deleteList = ():void => {
    removeList(index)
  }

  return (
    <li key={index} className="list" data-list-id={index}>
        <div className="title">{item}</div>
        <div className="delete-btn btn" onClick={deleteList}>X</div>
    </li>
  );
}

export default List;