import React, { useState } from 'react'
import "./Todo.css"
import AddTask from './AddTask'
import { Container, Table } from 'react-bootstrap';
import ListTask from './ListTask';


const Todo = () => {
    const [tasks, setTasks] = useState([
    ]);
    const addTask = (title) => {
        title.length > 0 ? setTasks([...tasks, { title: title,completed:false }]) : setTasks([...tasks])
    }

    const removeTask = (index) => {
        const new_tasks = [...tasks]
        new_tasks.splice(index, 1)
        setTasks(new_tasks)
    }
    const markCompleted=(index)=>{
        const new_tasks = [...tasks]
        new_tasks[index].completed=true;
        setTasks(new_tasks)
    }



    return (
        <Container>
            <div className='todoContainer'>
                <div><h1 className=' header text-white'>TODO APP</h1></div>
                <div className='add-task'><AddTask addTask={addTask} />
                </div>
                <div className='list_task'>
                    <Table striped bordered hover size="sm" className="mt-3 table-warning">
                        <thead>
                            <tr>
                                <th>Task Title</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <ListTask index={index} task={task} removeTask={removeTask} markCompleted={markCompleted} />
                            ))}
                         </tbody>
                         </Table>

                        </div>
                </div>
        </Container>
    )
}

export default Todo