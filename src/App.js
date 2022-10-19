import React , { useState} from 'react';
import uuid from 'react-uuid';
import Todo from './components/Todo';

function App(){
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState('')
  const [message,setMessage] = useState('')

  const setMessageState = (state) => {
    setMessage(state)
  }

  const addTodo = () => {
    setTodos([...todos,{id:uuid(),text:todo}])
    setMessageState("added")
  } 
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    setMessageState("deleted")
  }


  return(
    <div className="container my-5">
      <div className="messige-box" id="message-box"></div>
      <div className="row my-4">
        <div className="col-sm-8">
          <input type="text" className="form-control" id="todo" placeholder="Todo Title" onChange={(e) => setTodo(e.target.value.trim())}/>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-primary" id="add-todo" onClick={addTodo}>
            <i className="bi bi-cloud-plus"></i>
          </button>
        </div>
      </div>

      <div className="row my-4">
        <ul className="list-group" id="todo-list">
          {todos.map( (todo)=> < Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />)}
        </ul>
      </div>

      <div className="col-sm-2 d-flex align-items-center gap-4">
        <span>
          <button className="btn btn-primary">
            {todos.length}
          </button>
        </span>
      </div>
      
      <div className="row m-4 p-2 bg-secondary text-center">
         <span >{message} successfully</span>
      </div>
    </div>
  )
}


export default App;
