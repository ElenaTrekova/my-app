import React , { useState} from 'react';
import uuid from 'react-uuid';
import Todo from './components/Todo';

function App(){
  const [todos,setTodos] = useState([])
  const [todo,setTodo] = useState('')
  const addTodo = () => {
    setTodos([...todos,{id:uuid(),text:todo}])
  } 
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
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


    </div>
  )
}


export default App;
