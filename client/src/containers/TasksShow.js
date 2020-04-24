import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTask, deleteTask } from '../actions';
import TaskItemShow from '../components/TaskItemShow';

class TasksShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    if (!this.props.task) {
        this.props.fetchTask(id);
    }
  }
  
  onDeleteClick = () => {
    const { id } = this.props.match.params
    this.props.deleteTask(id, () => { 
        this.props.history.push('/tasks');
      });
  }
  
  render() {
    const { task } = this.props;

    if (!task) {
      return <div>Loading...</div>;
    }

    return (
      <div  className="container task-item-container">
        <TaskItemShow onClick={this.onDeleteClick} key={task.id} task={task} />
    </div>
    );
  }
}

function mapStateToProps({ tasks }, ownProps) {
  return { task: tasks[ownProps.match.params.id] };
}
  
export default connect(mapStateToProps, { fetchTask, deleteTask })(TasksShow);