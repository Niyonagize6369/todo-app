import './App.css';
import React from 'react'

function App() {
  return (
    <div>
      <h2>My Daily Activity</h2>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div>
            <label>Title</label>
            <input type="text" placeholder='what is Task title?' />
          </div>
          <div>
            <label>Discription</label>
            <input type="text" placeholder='what is Task Discription?' />
          </div>
          <button type='button' className='primaryBtn'>Add</button>
        </div>
      </div>

      <div className='btn-area'>
        <button>Todo</button>
        <button>Completed</button>
      </div>
      <div className='todo-list'>
        <div className='todo-list-item'>
          <h3>Task1</h3>
          <p>Description</p>
        </div>
      </div>
    </div>
  )
}

export default App
