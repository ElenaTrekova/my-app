import React from "react";

function Todo(props){
    const {todo ,deleteTodo ,saveTodo} = props
    const {id, text, isCompleted} = todo
    const classes = ['list-group-item', 'd-flex', 'align-items-center']
    if ( isCompleted ) classes.push('bg-secondary')
    return(
        <li className={classes.join(' ')}>
            <span className="flex-grow-1">{text}</span>
            <span className="d-flex align-items-center gap-2">
              <button className="btn btn-info" onClick={ () => saveTodo(id)}>
                <i className="bi bi-cloud-download"></i>
              </button>
              <button className="btn btn-danger" onClick={ () => deleteTodo(id)}>
                <i className="bi bi-trash3"></i>
              </button>
            </span>
        </li>
    )
}

export default Todo;
