import React, { useState } from 'react'
import TodoHeader from './componets/TodoHeader'
import TodoInput from './componets/TodoInput'
import TodoLists from './componets/TodoLists'
import "./App.css"


function App() {
  const [idx, setIdx] = useState(0);


  const [formData, setFormData] = useState({
    title:'',
    desc:'',
    start: new Date().toISOString().split("T")[0],
    end:''
  })

  function onSubmit(e){
    e.preventDefault();
    // setTodos(prevTodos => [...prevTodos , {
    //   id: idx,
    //   subject : title,
    //   desc : description,
    //   start : startDate,
    //   end : endDate
    // }])
  }

function onChange(e) {
  const {name,value} = e.target
  console.log(name,value);
}

  return (
    <>
    <TodoHeader />
    <TodoInput onSubmit={onSubmit} formData={formData} onChange={onChange} />
    <TodoLists />
    </>
  )
}

export default App