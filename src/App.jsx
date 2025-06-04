import React, { useState, useEffect } from 'react';
import './App.css';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

function App() {
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDuration, setNewDuration] = useState("Daily");
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [currentEditItem, setCurrentEditItem] = useState({ title: "", description: "", duration: "Daily" });
  const [filter, setFilter] = useState("All");

  const handleAddTodo = () => {
    const newTodoItem = {
      title: newTitle,
      description: newDescription,
      duration: newDuration
    };

    const updatedTodoArr = [...allTodos, newTodoItem];
    setTodos(updatedTodoArr);
    setNewTitle("");
    setNewDescription("");
    setNewDuration("Daily");
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));
  };

  const handleDeleteTodo = (index) => {
    const reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    setTodos(reducedTodo);
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
  };

  const handleEdit = (index, item) => {
    setCurrentEditIndex(index);
    setCurrentEditItem(item);
  };

  const handleUpdateTitle = (value) => {
    setCurrentEditItem((prev) => ({ ...prev, title: value }));
  };

  const handleUpdateDescription = (value) => {
    setCurrentEditItem((prev) => ({ ...prev, description: value }));
  };

  const handleUpdateDuration = (value) => {
    setCurrentEditItem((prev) => ({ ...prev, duration: value }));
  };

  const handleUpdateTodo = () => {
    const newTodoList = [...allTodos];
    newTodoList[currentEditIndex] = currentEditItem;
    setTodos(newTodoList);
    setCurrentEditIndex(null);
    setCurrentEditItem({ title: "", description: "", duration: "Daily" });
    localStorage.setItem('todolist', JSON.stringify(newTodoList));
  };

  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if (savedTodo) setTodos(savedTodo);
  }, []);

  const filteredTodos = allTodos.filter((todo) =>
    filter === "All" ? true : todo.duration === filter
  );

  return (
    <div>
      <h2>Make a better Plan for your Life </h2>
      <p>whoever you are, whatever you are lookinf fo we
        have the perfect place for you
      </p>

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
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder='What is the task description?'
            />
          </div>
          <div>
            <label>Duration</label>
            <select
              value={newDuration}
              onChange={(e) => setNewDuration(e.target.value)}
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <button
            type='button'
            onClick={handleAddTodo}
            className='primaryBtn'
          >
            Add
          </button>
        </div>
      </div>

      <div className='btn-area'>
        {["All", "Daily", "Weekly", "Monthly", "Yearly"].map((label) => (
          <button
            key={label}
            className={`filter-btn ${filter === label ? 'active' : ''}`}
            onClick={() => setFilter(label)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className='todo-list'>
        {filteredTodos.map((item, index) => {
          if (currentEditIndex === index) {
            return (
              <div className='edit_wrapper' key={index}>
                <input
                  placeholder='Update Title'
                  onChange={(e) => handleUpdateTitle(e.target.value)}
                  value={currentEditItem.title}
                />
                <textarea
                  placeholder='Update Description'
                  rows={4}
                  onChange={(e) => handleUpdateDescription(e.target.value)}
                  value={currentEditItem.description}
                />
                <select
                  value={currentEditItem.duration}
                  onChange={(e) => handleUpdateDuration(e.target.value)}
                >
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
                <button
                  type='button'
                  onClick={handleUpdateTodo}
                  className='primaryBtn'
                >
                  Update
                </button>
              </div>
            );
          } else {
            return (
              <div className='todo-list-item' key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className='duration-tag'>⏱ {item.duration}</p>
                </div>
                <div>
                  <AiOutlineDelete className='icon' onClick={() => handleDeleteTodo(index)} title='Delete?' />
                  <AiOutlineEdit className='icon' onClick={() => handleEdit(index, item)} title='Edit' />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
