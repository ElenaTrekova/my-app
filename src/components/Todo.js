import React from "react";

function Todo(props){
    const {todo ,deleteTodo} = props
    const { id,text} = todo

    return(
        <li className="list-group-item d-flex align-items-center">
            <span className="flex-grow-1">{text}</span>
            <span className="d-flex align-items-center">
              <button className="btn btn-danger" onClick={ () => deleteTodo(id)}>
                <i className="bi bi-trash3"></i>
              </button>
            </span>
        </li>
    )
}

export default Todo;