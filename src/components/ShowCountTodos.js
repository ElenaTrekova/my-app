import React from "react";

function ShowCountTodos(props){
   
    const {todos}= props
    const isCompletedCount = todos.filter((todo) => todo.isCompleted).length
    const isRunningCount =  todos.filter((todo) => !todo.isCompleted).length
    
    return(

        <div className="col-sm-2 d-flex align-items-center gap-4">      
            <span className="border">
               All : {todos.length}
            </span>     
            <span className="border">
            Completed : {isCompletedCount}
            </span>  
            <span className="border">
            Running : { isRunningCount }
            </span>  
        </div>
    )
}

export default ShowCountTodos;