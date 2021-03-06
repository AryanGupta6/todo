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
    handlecheckbox:any
}
const Task = (props :prop )=> {
    const [valueref,setvalueref]=React.useState(props.value)
    const [compref,setcompref]=React.useState(props.checked)

    React.useEffect(()=>{
        setvalueref(props.value)
    },[props.value])
    React.useEffect(()=>{
        setcompref(props.checked)
    },[props.checked])
    return (
        <div className='task'>

        <input type="checkbox" className='box' checked={compref} onClick={()=>{props.handlecheckbox(props.id)}}>
        </input>
        {/* <input type="text" defaultValue={props.value} onKeyPress={e=>{e.key==='Enter'&& props.handleValue(e)}}> 

        </input> */}
        <input type="text" value={valueref} onChange={e=>{setvalueref(e.target.value)}} onKeyPress={e=>{e.key==='Enter'&& props.handleValue(props.id,e)}}  className="taskinput" >
        </input>
        <button className="deletetask" onClick={()=>{props.handleDelete(props.id)}}>X</button>
        </div>  
    );
}

export default Task;