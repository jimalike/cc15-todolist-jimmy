// Dependencies
import './App.scss';
import AppBar from '../components/Common/AppBar/AppBar';
import SideBar from '../components/SideBar/SideBar';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoLists from '../components/Todo/TodoLists';
import { useState } from 'react';

const data = [
  {
    "id": 1,
    "task": "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    "status": false,
    "date": "2023-05-03"
  },
  {
    "id": 2,
    "task": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    "status": false,
    "date": "2023-05-04"
  },
  {
    "id": 3,
    "task": "Curabitur in libero ut massa volutpat convallis.",
    "status": false,
    "date": "2023-04-29"
  },
]

function App() {
  const [allTodos, setAllTodos] = useState(data)
  return (
    <div className='todo'>
      <div className='todo__header'>
        <AppBar />
      </div>
      <div className='todo__sidebar'>
        <SideBar />
      </div>
      <div className='todo__content'>
        <main className='todo__container'>
          <TodoHeader />
          <TodoCreate data={allTodos} setTodo={setAllTodos}/>
          <TodoLists data={allTodos}/>
        </main>
      </div>
    </div>
  );
}

export default App;
