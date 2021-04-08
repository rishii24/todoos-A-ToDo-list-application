import React from "react";
import '../App.css';


const Form = ({ inputText, setInputText, todo, setTodo, status, setStatus }) => {

  //Updating states to input values 

  const inputTextHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitTodo = (e) => {
    e.preventDefault();
    setTodo([
      ...todo, { text: inputText, completed: false, id: Math.random() * 100 }
    ])
    setInputText("")
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div className="Input-form">
      <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Write here.."/>
        <button onClick={submitTodo}  type="submit" className="submit-btn">
        <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option className="option" value="all">All</option>
            <option className="option" value="completed">Completed</option>
            <option className="option" value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;