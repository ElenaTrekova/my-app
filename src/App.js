import React , { useState} from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './components/Todo';
//import ShowMessage from './components/ShowMessage';
import ShowCountTodos from './components/ShowCountTodos';

function App(){
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const [showMessage, setShowMessage] = useState(null)
 
  const setMessageState = () => {
    setShowMessage({status: 'alert-success', message: 'Ok'})
  }

  const addTodo = () => {

    setTodos([...todos, {id:uuid(),text:todo, isCompleted: false}])
  } 


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  const saveTodo = (id) => {
    setTodos( todos.map((todo) => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo) )
  }

  return(
    <div className="container my-5">
      <div className="row my-4">
        <div className="col-sm-10">
          <div className="row my-4">
            <div className="col-sm-6">
              <input type="text" className="form-control" id="todo" placeholder="Todo Title" onChange={(e) => setTodo(e.target.value.trim())}/>
            </div>
            <div className="col-sm-2">
              <button className="btn btn-primary" id="add-todo" onClick={addTodo}>
                <i className="bi bi-cloud-plus"></i>
              </button>
            </div>
          </div>
          <div className="row my-4">
            <ul className="list-group col-sm-7" id="todo-list">
              {todos.map( (todo)=> <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} saveTodo={saveTodo}/>)}
            </ul>
          </div>
        </div>
          <div className="col-sm-2">
            <ShowCountTodos todos={todos} />
          </div>
      </div>
    </div>
  )
}
//{showMessage && <ShowMessage  status={showMessage.status} message={showMessage.message} />}
//{ShowCountTodos && <ShowCountTodos setShowCount={todos.length}/>}
export default App;
