import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {

  const [toDo, setToDo] = useState([
    {id: 1 ,title: "Task 1" ,status: false},
    {id: 2 ,title: "Task 2" ,status: false},

  ]);

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  //Add task
  const addTask =()=>{

  }
  //-----------------------------------
  //Delete task
  const deleteTask =(id)=>{
    
  }
  //-----------------------------------
  //Mark task as done or Completed
  const markDone =(id)=>{
    
  }
  //-----------------------------------
  //Cancel update
  const cancelUpdate =()=>{
    
  }
  //-----------------------------------
  // change task for update
  const changeTask =(e)=>{
    
  }
  //-----------------------------------
  //Update task
  const updateTask =()=>{
    
  }



  return (
    <div className="container App"> 

        <br></br>
        <h2>To Do List App</h2>
        <br></br>

     {toDo && toDo.length ? '' : 'No Tasks...'}

    </div>
  );
}

export default App;
