// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo"
const  TodoList =props=>{
    return(
        <div className="TodoList">
            {props.todos.map(item=>(
                <Todo key={item.id} item={item} toggleList={props.toggleList}/>

            ))}
            
        </div>
    )
}

export default TodoList