import React, { useState } from 'react'
import TodoForm from './TodoForm'

function Todo({ todos, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id:null,
            value:""
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return (
        <div className='todo'>
            {todos.map((todo, index) => (
                <div className='todo-row' key={index}>
                    <div key={todo.id}>
                        {todo.text} | 
                        <span onClick={() => removeTodo(todo.id)}>완료</span> | 
                        <span onClick={() => setEdit({ id: todo.id, value: todo.text })}>수정</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Todo
