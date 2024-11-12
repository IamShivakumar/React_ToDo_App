import React from 'react'
import {Button,Table} from 'react-bootstrap'

const ListTask = ({task,index,removeTask,markCompleted}) => {
  return (
    <>
        <tr>
          <td className={task.completed ?'completed':''} onClick={()=>markCompleted(index)}>{task.title}</td>
          <td>
            {/* <Button className="bg-warning text-black btn btn-sm me-2">Edit</Button> */}
            <Button onClick={() => removeTask(index)} className="bg-danger text-black btn btn-sm">Delete</Button>
          </td>
        </tr>

    </>
  )
}

export default ListTask