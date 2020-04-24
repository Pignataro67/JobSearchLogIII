import React from 'react';
import { Link } from 'react-router-dom';

const TaskItemIndex = ({ task }) => {
  const { name, id, description, type } = task;
    if (!type) {
      return (
        <div className="loading">
          <h2>...Loading</h2>
        </div>
      )
    } else {
      return (
      <div className="col-sm-4">
        <div className="card">
          <div className="card-header border-info mb-3">{type.name}</div>
          <div className="card-body text">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <Link to={`/tasks/${id}`} >More Details&#8680;</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskItemIndex;