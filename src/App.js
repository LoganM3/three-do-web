import { useState } from 'react';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [tasklist, setTaskList] = useState()
   
  return (
    <>
    <h1>Three-do</h1>
    <TodoList tasklist={tasklist} setTaskList = {setTaskList} />
    <AddTask setTaskList={setTaskList}/>
    </>
  );
}

export default App;
