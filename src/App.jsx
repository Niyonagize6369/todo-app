
import React,{useState} from 'react';
import './App.css'; 
import { AiOutlineDelete } from 'react-icons/ai';
function App() {
  const [isCompleteScreen,setCompleteScreen] = useState(false);
  const [allTodos,setTodos] = useState([]);
  const [newTitle,setNewTitle] = useState("");
  const [newDiscription,setNewDescription] = useState();
  return (
    <div>
      <h2>My Daily Activity</h2>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div>
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}placeholder='what is Task title?' />
          </div>
          <div>
            <label>Discription</label>
            <input type="text" value={newDiscription} onChange={(e)=>setNewDescription(e.target.value)} placeholder='what is Task Discription?' />
          </div>
          <button type='button' className='primaryBtn'>Add</button>
        </div>
      </div>

      <div className='btn-area'>
        <button className={`isCompleteScreen ${isCompleteScreen===false && 'active'}`} onClick={()=>setCompleteScreen(false)}>Todo</button>
        <button className={`isCompleteScreen ${isCompleteScreen===true && 'active'}`} onClick={()=>setCompleteScreen(true)}>Completed</button>
      </div>
      <div className='todo-list'>
        <div className='todo-list-item'>
          <h3>Task1</h3>
          <p>Description</p>
        </div>
        <div>
       <AiOutlineDelete className='icon'/>
       <BsChecklg className='check-con'/>
        </div>
      </div>
    </div>
  )
}

export default App
