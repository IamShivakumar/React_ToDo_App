import { Button,Form } from 'react-bootstrap'
import React, { useState } from 'react'


const AddTask = ({addTask}) => {
    const [task, setTask] = useState("");
    const addItem = e => {
        e.preventDefault()
        addTask(task)
        setTask("")
    }


    return (
        <>
            <form className='todoForm' onSubmit={addItem}>
                <input type='Text' placeholder='Add Task' onChange={(e) => { setTask(e.target.value) }} className='input' value={task}></input>
                <Button type='submit' className='m-2 rounded-pill bg-warning text-black'>Add Task</Button>
            </form>
        </>
    )
}

export default AddTask