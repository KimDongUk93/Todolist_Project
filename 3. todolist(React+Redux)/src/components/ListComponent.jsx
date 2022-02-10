import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../redux/action/listAction";
import List from "./List";

function ListComponent() {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.listReducer.list);

  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <div className="list-comp">
      <ul>
        {lists ? (
          lists.map((item, index) => <List item={item} index={index} />)
        ) : (
          <li>no list</li>
        )}
      </ul>
    </div>
  );
}

export default ListComponent;
