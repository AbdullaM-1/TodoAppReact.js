import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import ShowAllPage from './components/ShowAllPage/ShowAllPage.jsx'
import EditTodo from './components/EditTodoPage/EditTodo.jsx'
import App from './App.jsx'


 const router = createBrowserRouter([
   {
     path: '/',
          element: <Layout/>,
     children: [
       {
         path: "ShowAllPage",
         element: <ShowAllPage />
       },
       {
         path: "EditTodo",
         element: <EditTodo />
       },
       {
        path: "/",
        element: <App/>
       }
     ]
   }
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
