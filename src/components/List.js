import React, { Fragment, useContext } from 'react'
import Task from './Task'
import {TaskContext} from '../context/tasklist/taskContext'
import ControlPanel  from './ControlPanel'
function List() {
    const {taskList} = useContext(TaskContext)
    const [task, setTask] = taskList

    
    const deleteTask = (id) => { 
        
        const newArr = [...task].filter(task => task.id !== id)
        setTask(newArr)
    } 

    
    
    
    return (
        <Fragment>
        <div >
            <div className = 'container'>
            {task.map((item) => 
            (
                <Task title = {item.title} note = {item.note} id = {item.id} key = {item.id}  deleteTask = {deleteTask} /> 
            )
                
            )}
             </div> 
             
        </div>
        <hr />
        <ControlPanel />
        </Fragment>
        
    );
};

export default List
