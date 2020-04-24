import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions/index';
import TaskItemIndex from '../components/TaskItemIndex';

class TasksIndex extends Component {
  componentDidMount = () => {
    this.props.fetchTasks();
  }

  renderTasks = () => {
    return _.map(this.props.tasks, task => {
      return (
        <TaskItemIndex
          key={task.id}
          task={task}
        />
      );
    });
  }

  render() {
  
    return (
      <div className="container">
        <div className="row index-div">
          <div className="">
            {this.renderTasks()}
          </div>
        </div>
      </div>	     
    );	    
  };	  
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, { fetchTasks })(TasksIndex);