import React, { useContext, useState } from 'react'
import { TaskContext } from '../context/tasklist/taskContext'
import UpdateTask from './UpdateTask'

function Task(props) {
    



    return (
        
        <div id = "id" className = 'container'>
            <div className = 'card grid-1'>
            
            <h3>{props.title}</h3>
            <div className = 'text-right'>
            <button className = 'bg-dark' onClick = {() => props.deleteTask(props.id)} >Delete</button>
            </div>
            <hr />
            <p>{props.note}</p>
                <form>
                    
                    
                    <br />
                    <div >
                    
                    
                    
                    </div>
                    
                </form>
                <UpdateTask id = {props.id} note = {props.note} title = {props.title}/>
            </div>
        </div>
    )
}

export default Task
