/* import { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';
 
// eslint-disable-next-line react/prop-types
function DisplayTodoItem({ todo }) {
 
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {toggleComplete} = useTodo()

  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id)
  }

  return (
      <div>
          <input 
             id='task'
              type="checkbox"
              // eslint-disable-next-line react/prop-types
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          <div className="">
  <div className=' conatiner row justify-content-center col-10 d-flex justify-content-center border border-80 p-3 '>{todoMsg}</div>

  </div>

      </div>
      
  );
}

export default DisplayTodoItem;  */

import React, { useState } from 'react'   
import { useTodo } from '../contexts/TodoContext';
 
function DisplayTodoItem({ todo }) {
  const [IsTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {toggleComplete} = useTodo()

 
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id)
  }

  return (
      <div
          className={` d-flex border border-dark rounded-lg px-3 py-2 gap-x-3 shadow-sm transition duration-300 text-dark ${
              // eslint-disable-next-line react/prop-types
              todo.completed ? "bg-success text-decoration-line-through" : "bg-light"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={` max-width-80 border-0 w-100 bg-transparent rounded-lg" ${
                  IsTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!IsTodoEditable}
          />
 
 
      </div>
  );
}

export default DisplayTodoItem;