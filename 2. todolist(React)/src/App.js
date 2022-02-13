import React, {useState} from 'react'
import Input from './components/Input';
import ListContainer from './components/ListContainer';

function App() {
  const [list, setList] = useState([]);

  const getList = (text) => {
    setList([...list, text]);
  }

  const deleteList = (index) => {
    const filteredList = list.filter(item => item !== list[index]);
    console.log(filteredList)
    setList(filteredList);
  }

  const updateList = (updateIndex, text) => {
    const newList = list.map((item, listIndex) => {
      if(updateIndex === listIndex) item = text
      return item
    })

    setList(newList); 
  }

  return (
    <div>
      <h1>투두리스트</h1>
      <Input getList={getList}/>
      <ListContainer list={list} deleteList={deleteList} updateList={updateList}/>
    </div>
  )
}

export default App