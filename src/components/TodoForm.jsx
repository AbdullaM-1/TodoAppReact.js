import { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';
import './TodoForm.css'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
      <form id='form' onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="m-0 w-50 border border-secondary rounded-start px-7 bg-light border-2 px-3 bg-secondary-800 border-opacity-10 py-1.5" style={{ height: '42px' }}
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="w-10 border border-secondary border-opacity-0 rounded-start px-3 bg-secondary py-2 btn btn-secondary rounded-pill px-0 py-0 m-0">Add ➕
          </button>
      </form>
  );
}

export default TodoForm;