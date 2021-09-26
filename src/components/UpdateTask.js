import React, {useState, useContext} from 'react'
import { TaskContext } from '../context/tasklist/taskContext'

const UpdateTask = (props) => {

    const {hideButton, taskList} = useContext(TaskContext)
    const [hide, setHide] = useState(false)
    const [tasks, setTask] = taskList

    const hideFunc = () => {!hide ? setHide(true) :setHide(false)}
    
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")

    function updateTitle (e) {
        setTitle(e.target.value)
    }

    function updateNote (e) {
        setNote(e.target.value)
    }
    function onSubmit (e){
        e.preventDefault()
       let array = [...tasks]
       const search = array.find(check => check.id === props.id)
       let index = array.indexOf(search)
       array.splice(index, index, {title: props.title, note: note, id: props.id})
        setTask(array)
        setHide(false)
    }
    return (
        <div>
        {hide === false && <button  onClick = {hideFunc}> Edit</button>}
        {hide === true && <form onSubmit = {onSubmit} >
            <input type="text" name="title" id="title" placeholder='Title' value = {props.title} onChange = {updateTitle} />
            <input type="text" name="note" id="note" placeholder='Note'   onChange = {updateNote} />
            <button type ='submit'>Submit</button>
        {hide === true && <button onClick = {hideFunc}>Cancel</button>}
        </form>}
        </div>
    )
}

export default UpdateTask
