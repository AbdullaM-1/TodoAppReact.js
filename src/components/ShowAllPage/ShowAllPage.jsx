/* import TodoItem from "./TodoItem"; 
import { useState, useEffect } from 'react';


function ShowAllPage () {

    const [todos, setTodos] = useState([]);


    useEffect(() => {
    
      const storedTodos = localStorage.getItem("todos");
  
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }, []);    
      

    return(

        <div>
        <h2>List of all the tasks which are pending here.</h2>
        
          {todos.map((todo, index) => (
            <ul key={index}>        <table>
            <thead>
              <tr>
              <th>{todo.id} || </th> 
            <th>{todo.todo}</th>
            <th>{todo.completed ? " | ✔️" : " | ❌"}</th>
              </tr>
            </thead>
                </table>
             </ul>
          ))}
      </div>
    )   
}

export default ShowAllPage; */

import { useState, useEffect } from 'react'
import { TodoProvider } from '../../contexts'
import DisplayTodoItem from '../DisplayTodo'


function App() {
  const [todos, setTodos] = useState([])

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => { const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]) 
  

  return (
    <>
    <TodoProvider value={{todos, toggleComplete}}>
      <div>
                <div>
                    <h1> Show All Todos</h1>
                    <div className>
                    </div>
                    <div>
                       {todos.map((todo) => (
                          <div key={todo.id}
                          >
                            <DisplayTodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
    </>
 
                          
    )
}

export default App 