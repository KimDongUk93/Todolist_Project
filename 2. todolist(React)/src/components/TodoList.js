import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    }

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);
    };

    const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    return (
        <div>
            <h1>오늘 할일</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList
