import React from "react";
import '../App';
import Todo2 from "./Todo2.js"

const Todo = ({todo, setTodo, filterTodo}) => {
   
    console.log('todo')
    return (
        <div className="todo-container">
            <div className="todo-list">
               {filterTodo.map(todo2 =>(
                   <Todo2 
                   todo={todo} 
                   setTodo={setTodo}
                   key={todo2.id} 
                   text={todo2.text} 
                   todo2={todo2}  />
               ))}
            </div>
        </div>
    )
}


export default Todo;