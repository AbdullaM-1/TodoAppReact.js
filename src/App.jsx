import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
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
    <div className='app'>
    <TodoProvider value={{todos, addTodo,}}>
    <div className="title1">
    <h1 className="title">Get Things <a className='T1'>Done</a>!</h1>
</div>

                    <div>
                    <TodoForm  /> </div>
                 
            
    </TodoProvider>
    </div>
    </>
 
                          
    )
}

export default App