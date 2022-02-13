
import List from "./List"

function ListContainer({list, deleteList, updateList}) {
    

  return (
    <section className='list-container'>
        <ul>
            {list.map((item, index) => (
                <List text={item} index={index} deleteList={deleteList} updateList={updateList}/>
            ))}
        </ul>
    </section>
  )
}

export default ListContainer