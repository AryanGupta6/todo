import React from 'react';
import './App.css';
import Task from './components/task/task';
import {useState} from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import {  addtoarray ,editinarray,removefromarray} from './components/redux/taskarrayslice'
import { RootState } from './components/redux/store'
import { setConstantValue } from 'typescript';

function App() {
  const arr = useSelector((state: RootState) => state.arr.arr)
  const dispatch = useDispatch()
  const [input,setinput]= useState("")
  function onValue(e:any){
      dispatch(addtoarray( e.target.value))
      setinput("");
  };
  function onDelete(index:number){
      dispatch(removefromarray(index))
      //console.log("nwjnf")
      // console.log(index)
      console.log("delete initiated")
      console.log(index)
  };
  function onEdit(index:number , e:any){
      const value=e.target.value
      dispatch(editinarray({index , value}))
      console.log(arr)
  };
  function consolecheck(){
    console.log(arr)
  };
  return (
    <div className="App">
        <input value={input} onChange={e=>setinput(e.target.value)} onKeyPress={(e)=>{e.key==='Enter'&& onValue(e) } }></input>
        {arr.map((obj,i)=>{return(<Task key={i} id={i} value={obj.task} handleDelete={onDelete} handleValue={onEdit} checked={obj.completed} />)})}        
        <h1>completed</h1>
        {arr.filter(obj=>obj.completed).map((obj,i)=>{return(<Task key={i} id={i} value={obj.task} handleValue={onEdit} handleDelete={onDelete} checked={obj.completed} />)})}       
        <h1>not completed</h1> 
        {arr.filter(obj=>!obj.completed).map((obj,i)=>{return(<Task key={i} id={i} value={obj.task} handleValue={onEdit} handleDelete={onDelete} checked={obj.completed} />)})}        
        <button onClick={consolecheck}>console check</button>
    </div>
  );
}

export default App;
