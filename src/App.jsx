import React, { useState } from 'react'
import TodoHeader from './componets/TodoHeader'
import TodoInput from './componets/TodoInput'
import TodoLists from './componets/TodoLists'
import "./App.css"



function App() {
  const [id, setId] = useState(0);
  const [todos,setTodos] = useState([]);
  const [formData, setFormData] = useState({
    title:'',
    desc:'',
    category:'',
    participant:"",
    color:"",
    start: new Date().toISOString().split("T")[0],
    end:''
  })

  function onSubmit(e){
    e.preventDefault();
    setTodos(prevTodo => ([
      ...prevTodo, {
      ...formData,
      id:id
    }]))
    setId(prevId => prevId + 1);

    setFormData({
    title:'',
    desc:'',
    category:'',
    participant:"",
    color:"",
    start: new Date().toISOString().split("T")[0],
    end:''
    })
  }
  
  function onChange(e) {
    const {name,value} = e.target
    // console.log(name,value);
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))

  }
  function onClick(e){
    console.dir(e.target.dataset)
    setFormData(prevData => ({
      ...prevData,
      ["category"]: e.target.innerText,
      ["color"]: e.target.dataset.color
    }))
  }

  return (
    <>
    <TodoHeader />
    <TodoInput onSubmit={onSubmit} onClick={onClick} formData={formData} onChange={onChange}/>
    <TodoLists todos={todos} />
    </>
  )
}

export default App