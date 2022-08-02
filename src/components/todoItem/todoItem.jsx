import React from 'react'
import "./todoItem.css"

function TodoItem(props) {
    const {myTodo,index, markComplete, removeTodo} = props

    return (
        <div className={`todo ${myTodo.isComplete ? "complete": ""}`}>
            <p>{myTodo.text}</p>
            <button onClick={() => markComplete(index)}>Toggle Status</button>
            <button onClick={() => removeTodo(index)}>X</button>
        </div>
    )
}

export default TodoItem