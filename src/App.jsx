import React, { useState } from 'react'
import TodoHeader from './componets/TodoHeader'
import TodoInput from './componets/TodoInput'
import TodoLists from './componets/TodoLists'
import "./App.css"


function App() {
  const [idx, setIdx] = useState(0);
  const [title, setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [startDate,setStartDate] = useState(new Date());
  const [endDate,setEndDate] = useState("");

  function onSubmit(e){
    e.preventDefault();
    setTodos(prevTodos => [...prevTodos , {
      id: idx,
      subject : title,
      desc : description,
      start : startDate,
      end : endDate
    }])
  }
  function onTitleChange(e) {
    setTitle(e.target.velue)
  }
  function onDescChange(e) {
    setDescription(e.target.velue)
  }
  function onStartDateChange(e) {
    setStartDate(new Date())
  }
  function onEndDateChange(e) {
    setEndDate(e.target.velue)
  }

  return (
    <>
    <TodoHeader />
    <TodoInput startDate={startDate} onTitleChange={onTitleChange} onDescChange={onDescChange} onStartDateChange={onStartDateChange} onEndDateChange={onEndDateChange} onSubmit={onSubmit} title={title} description={description} />
    <TodoLists />
    </>
  )
}

export default App