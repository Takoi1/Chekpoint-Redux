import React from 'react'
import Nav from './components/Nav'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import './style.css';

const App = () => (
  <div className='app'>
    <h1>My ToDo List </h1>
    <Nav />
    <AddTodo />
    <VisibleTodoList />
    
  </div>
)

export default App