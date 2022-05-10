import React from 'react';
import './App.css';
import Task from './components/task/task';
import {useState} from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import {  addtoarray ,editinarray,removefromarray,editcompleted,deletecompleted} from './components/redux/taskarrayslice'
import { RootState } from './components/redux/store'
import { setConstantValue } from 'typescript';

function App() {
  let arr = useSelector((state: RootState) => state.arr.arr)
  const dispatch = useDispatch()
  const [input,setinput]= useState("")
  const [select,setselect]=useState(1)
  function onValue(e:any){
      dispatch(addtoarray( e.target.value))
      setinput("");
  };
  function onDelete(index:number){
    dispatch(removefromarray(index))
    console.log("delete initiated")
    console.log(index)
};
  function onCheckbox(index:number){
    dispatch(editcompleted(index))
  };
function onEdit(index:number , e:any){
      const value=e.target.value
      dispatch(editinarray({index , value}))
      console.log(arr)
  };
  function removechecked(){
    dispatch(deletecompleted())
  };

  return (
    <div className="App">
        <button onClick={()=>setselect(1)} className="b1"> all</button><button onClick={()=>setselect(2)} className="b2">completed</button><button onClick={()=>setselect(3)} className="b3">notcompleted</button>
        <h2>enter task</h2>
        <input className="taskval" value={input} onChange={e=>setinput(e.target.value)} onKeyPress={(e)=>{e.key==='Enter'&& onValue(e) } }></input>
        {
        select==1 &&
        <div>

        <h1>All</h1>
        {arr.map((obj,i)=>{return(<Task key={i} id={i} value={obj.task} handlecheckbox={onCheckbox} handleDelete={onDelete} handleValue={onEdit} checked={obj.completed} />)})}        
        </div>
        } 
        {
          select==2 &&
          <div>

        <h1>completed</h1>
        {arr.filter(obj=>obj.completed).map((obj,i)=>{return(<Task key={i} id={i} value={obj.task} handlecheckbox={onCheckbox}  handleValue={onEdit} handleDelete={onDelete} checked={obj.completed} />)})}       
        </div>
        }

        {
          select==3 &&
          <div>
          <h1>not completed</h1> 
          {arr.filter(obj=>!obj.completed).map((obj,i)=>{return(<Task key={i} id={i} value={obj.task} handlecheckbox={onCheckbox} handleValue={onEdit} handleDelete={onDelete} checked={obj.completed} />)})}        
          </div>
        }
        <button onClick={removechecked} className="delete">remove checked</button>
    </div>
  );
}

export default App;
