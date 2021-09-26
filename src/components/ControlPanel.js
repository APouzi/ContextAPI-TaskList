import React, {useContext, useState} from 'react'
import { TaskContext } from '../context/tasklist/taskContext'

function ControlPanel() {
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const {taskList} = useContext(TaskContext)
    const [task, setTask] = taskList
    
    function updateTitle (e) {
        setTitle(e.target.value)
    }

    function updateNote (e) {
        setNote(e.target.value)
    }

    function setPriceAndText(e) {
        const date = new Date(Date.now())
        const dateN = date.toDateString()
        e.preventDefault();
        const id = Math.floor(Math.random() * 999)
        setTask( prevModel => [...prevModel, {title: title, note: note, id : id} ])
        
    }

    



    return (
        <div className = " container">
            <form onSubmit = {setPriceAndText} className = "card textarea">
                <input  type="text" title = "title" name = "title" value = {title} onChange = {updateTitle} placeholder = "Title"/>
                <input type="text" note = "note" name = "note" value = {note} onChange = {updateNote} placeholder = "Note"/>
                <button>Submit</button> 
            </form>
        </div>
    )
}


export default ControlPanel
