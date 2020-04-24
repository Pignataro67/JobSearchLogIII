import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Calendar from 'react-calendar';
import { createTask, fetchTypes } from '../actions';

class TasksForm extends Component {

  constructor() {
    super()

  this.handleOnSubmit = this.handleOnSubmit.bind(this)
  this.handleOnChange = this.handleOnChange.bind(this)
  this.validateType = this.validateType.bind(this)

  this.state = {
    name: '',
    description: '',
    notes: '',
    date: new Date(),
    type_id: ''
  }
}

componentDidMount() {
  this.props.fetchTypes();
}

handleOnChange = event => {
  const { name, value } = event.target
  this.setState({
    [name]: value
  });
}

handleDateChange = date => {
  this.setState({ date });
}

validateType = () => {
  if (this.state.type_id === '') {
    alert("Please Select A Type")
    return false
  } else {
    return true
  }
}

handleOnSubmit = (e) => {
  e.preventDefault();
  if (this.validateType()) {
    this.props.createTask( this.state, () => {
      this.props.history.push('/tasks');
    });
    this.setState({
      name: '',
      description: '',
      notes: '',
      date: new Date(),
      type_id: ''
    });
  }
}

  render() {
    const { types } = this.props;
    let typesForSelect;
    if (types.length !== 0){
      typesForSelect = types[0].map((type, index) => {
        return <option key={index} value={type.id}>{type.name}</option>
      });
    }
    
    return (

      <div className="container">
        <br />
        <div className="container">
        <h3 className="form-header">~Add a new task~</h3>
        </div>
        <br /><br />
          <form className="form-group" onSubmit={this.handleOnSubmit}>

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Name Your Task</label>
                <div className="col-sm-6">
              <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={this.handleOnChange}
                  value={ this.state.name }
                  required
              />
            </div>
          </div>

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Give a Brief Description</label>
                <div className="col-sm-6">
              <input
                  className="form-control"
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={this.handleOnChange}
                  value={ this.state.description }
                  required
              />
            </div>
          </div>
          
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">When 
              did you complete this task or when is this task scheduled for?
            </label>
            <div className="col-sm-7">
              <Calendar
                onChange={this.handleDateChange}
                value={this.state.date}
                className="form-control"
                calendarType="US"
              />
            </div>
          </div>
          <br />

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">What
                type of task is this?</label>
              <div className="col-sm-8">
              <select
                required
                type="select"
                name="type_id"
                className="form-select"
                onChange={this.handleOnChange}>
                <option defaultValue>Select Type.....</option>
                {typesForSelect}
              </select>
            </div>
          </div>

            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Write 
                any additional information here</label>
              <div className="col-sm-6">
              <textarea
                  className="form-control"
                  name="notes"
                  placeholder="Optional Notes"
                  onChange={this.handleOnChange}
                  value={ this.state.notes }
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
              <div className="col-sm-5">
                <button
                  type="submit"
                  className="form-control btn btn-primary"
                  >Save
                </button>
              </div>
              <div className="col-sm-5">
                <Link to="/tasks" className="form-control btn btn-danger">Cancel</Link>
              </div>
            </div>
            
          </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    types: state.types
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchTypes, createTask }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksForm);