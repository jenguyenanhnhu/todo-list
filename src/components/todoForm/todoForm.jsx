import React, {useState} from "react";
import "./todoForm.css"

function TodoForm(props) {
    const [value, setValue] = React.useState("");

    // When we detect a change in our input field, we want to update our input field's value
    function handleChange (event) {
        setValue(event.target.value)
    }

    // When we detect a submission using the 'ENTER' key, we want to take the input field's value and send to its parent.
    function handleSubmit (event) {
        event.preventDefault();
        // Send our 'newTodo' to our parent
        props.addTodo(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Add your to-do item here..."
            value={value}
            onChange={handleChange}/>
        </form> 
)
}

export default TodoForm;