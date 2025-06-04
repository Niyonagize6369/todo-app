import React, { useState ,useEffect} from 'react';
import './App.css'; 
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs'; // ✅ Add missing import

function App() {
  const [isCompleteScreen, setCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDiscription, setNewDescription] = useState(""); // ✅ Fix: Initialize as empty string

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDiscription
    };

    let updatedTodoArr = [...allTodos, newTodoItem];
    setTodos(updatedTodoArr);
    setNewTitle("");
    setNewDescription(""); // ✅ Clear inputs after add
    localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
  };

  useEffect(()=>{
let savedTodo = JSON.parse(localStorage.getItem('todolist'))
if(savedTodo){
  setTodos(savedTodo);
}
  },[])

  return (
    <div>
      <h2>My Daily Activity</h2>

      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder='What is the task title?'
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              value={newDiscription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder='What is the task description?'
            />
          </div>
          <button type='button' onClick={handleAddTodo} className='primaryBtn'>Add</button>
        </div>
      </div>

      <div className='btn-area'>
        <button
          className={`filter-btn ${!isCompleteScreen ? 'active' : ''}`}
          onClick={() => setCompleteScreen(false)}
        >
          Todo
        </button>
        <button
          className={`filter-btn ${isCompleteScreen ? 'active' : ''}`}
          onClick={() => setCompleteScreen(true)}
        >
          Completed
        </button>
      </div>

      <div className='todo-list'>
        {allTodos.map((item, index) => (
          <div className='todo-list-item' key={index}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div>
              <AiOutlineDelete className='icon' title='Delete?' />
              <BsCheckLg className='check-icon' title='Mark as completed' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
