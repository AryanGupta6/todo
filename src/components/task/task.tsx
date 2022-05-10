import * as React from 'react';
import { Component } from 'react';
import  '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../task/task.css'

interface prop{
    value: string
    handleValue: any
    checked: boolean
    id: number
    handleDelete:any
}
const Task = (props :prop )=> {
    function ju(){
        console.log(props.id)
    }
    return (
        <div className='task'>

        <input type="checkbox" className='box' defaultChecked={props.checked}>
        </input>
        {/* <input type="text" defaultValue={props.value} onKeyPress={e=>{e.key==='Enter'&& props.handleValue(e)}}> 

        </input> */}
        <input type="text" defaultValue={props.value} onKeyPress={e=>{e.key==='Enter'&& props.handleValue(props.id,e)}}  className="taskinput" >
        </input>
        <button className="deletetask" onClick={()=>{props.handleDelete(props.id)}}>X</button>
        </div>  
    );
}

export default Task;