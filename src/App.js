import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import Todo from "./components/Todo";
import background3 from "./images/BG3.jpg";

function App() {

  //States
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);




  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodo(todo.filter(todo2 => todo2.completed === true))
        break;
      case "uncompleted":
        setFilterTodo(todo.filter(todo2 => todo2.completed === false))
        break;
      default:
        setFilterTodo(todo)
        break;
    }
  }

  //Save to local storage 

  const saveLocalTodo = () => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }

  const getLocalTodo = () => {
    if (localStorage.getItem('todo') === null) {
      localStorage.setItem('todo', JSON.stringify([]))
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todo"))
      setTodo(todoLocal)
    }
  }

  //Run once

  useEffect(() => {
    getLocalTodo();
  }, [])

  //Run on state update 

  useEffect(() => {
    filterHandler();
    saveLocalTodo();
  }, [todo, status])



  return (
    <div className="App">
      <div className="bg-img"><img src={background3} alt="" /></div>
      <div className="Heading">
        <h1>Welcome to todoos` </h1>
        <div className="head-line"></div>
        <p>Must be tired of remembering all the tasks..? <br />
        Don't worry here's your own "to-do" list
        </p>
      </div>
      <Form inputText={inputText}
        todo={todo}
        setTodo={setTodo}
        setInputText={setInputText}
        status={status}
        setStatus={setStatus} />
      <Todo
        todo={todo}
        setTodo={setTodo}
        filterTodo={filterTodo} />
      <div className="footer">
        <p>	&#xA9;<b>todoos`</b> 2021 | All rights reserved.  </p>
      </div>
    </div>

  );
}

export default App;
