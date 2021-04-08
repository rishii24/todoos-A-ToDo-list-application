import React from "react";
import '../App.css';

const Todo2 = ({ text, todo, setTodo, todo2 }) => {

    //Events

    const deleteHandler = () => {
        setTodo(todo.filter((el) => el.id !== todo2.id));
        // console.log(todo)
    }

    const completeHandler = () => {
        setTodo(todo.map((item) => {
            if (item.id === todo2.id)
            return{
                ...item,completed : !item.completed
            }
            return item
        }))

    }
    return (
        <div className="todo-2">
            <div className="todo-item">
                {text}
            </div>
            <button onClick={completeHandler} className={`done-btn ${todo2.completed ? "completed" : ""}`}>
            <i class="fa fa-check" aria-hidden="true"></i>
            </button>
            <button onClick={deleteHandler} className="remove-btn">
            <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default Todo2