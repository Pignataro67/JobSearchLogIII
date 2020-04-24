import React from 'react';
import { Link } from 'react-router-dom';

const TaskItemShow = ( {task, onClick} ) => {
  return (
    <div className="card task-item-card">

      <div>
        <Link to="/tasks" className="btn btn-info pull-xs-right">Back To Index</Link>
        {task.date_formatted}
        <button
          className="btn btn-danger btn-sm pull-xs-right"
          onClick={onClick}
        >
          Delete Task
        </button>
      </div>

      <div className="container task-item">
        <br /> 
        <h4 id="task-item-title">{task.name}</h4>

        <br />
        <h5>{task.description}</h5>
        <br />
        <h5>{task.type.name} <Link id="type-link" to="/types">(more about this)</Link></h5>
        <br />

        {task.notes ?
          <div>
            <h5>Notes:</h5>
            <h6>{task.notes}</h6>
          </div>
          :
          <div><br/></div>
        }
        <br /><br />
      </div>
    </div>
  )
}

export default TaskItemShow;