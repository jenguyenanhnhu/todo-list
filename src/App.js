import React, {useState} from "react";
import TodoItem from "./components/todoItem/todoItem";
import TodoForm from "./components/todoForm/todoForm";
import "./App.css"

function App() {
  const [todos, setTodos] = useState([
    {text: "Nap", isComplete: false},
    {text: "Sort out my shit", isComplete: false},
    {text: "Be a superstar", isComplete: false},
  ]);

// Write a function to mark a Todo as complete when I click it.
  const markComplete=(index)=> {
    const newTodos = [...todos];
    todos[index].isComplete = !todos[index].isComplete;
    console.log(newTodos)
    setTodos(newTodos)
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Define a function which will add a new provided todo to our list of todos in state.
  function addTodo(text) {
    setTodos([...todos, {text}])
  }

  return (
    <div className="app">
      <div className="todo-list">
        <h1>My To Do List</h1>
        {/* loop over each todo and render a react component called <todoItem /> with the todo as a prop */}
        {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} index={index} myTodo={todo} markComplete={markComplete} removeTodo={removeTodo}/>))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>

  )

}
  

export default App;
