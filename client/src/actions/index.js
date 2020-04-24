import fetch from 'isomorphic-fetch';
export const FETCH_TASKS = 'FETCH_TASKS';
export const RECEIVED_TASKS = 'RECEIVED_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const FETCH_TASK = 'FETCH_TASK';
export const RECEIVED_TASK = 'RECEIVED_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const FETCH_TYPES = 'FETCH_TYPES';
export const RECEIVED_TYPES = 'RECEIVED_TYPES';

const ROOT_URL = 'http://localhost:3001/api';

export function fetchTasks() {
  return (dispatch) => {
    dispatch({type: FETCH_TASKS});
    fetch(`${ROOT_URL}/tasks`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch({type: RECEIVED_TASKS, payload: json})
      })
  };
}

export function createTask(values, callback) {
  return (dispatch) => {
    fetch(`${ROOT_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(json => { 
        dispatch({ type: CREATE_TASK, payload: json })
    })
    .then(() => callback())
  };
}

export function fetchTask(id) {
  return (dispatch) => {
    dispatch({type: FETCH_TASK});
    fetch(`${ROOT_URL}/tasks/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: RECEIVED_TASK, payload: json })
      })
  };
}

export function deleteTask(id, callback) {
  return (dispatch) => {
    dispatch({type: DELETE_TASK, payload: id});
    fetch(`${ROOT_URL}/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    })
    .then(() => callback())
  }
}

export function fetchTypes() {
  return (dispatch) => {
    dispatch({type: FETCH_TYPES});
    fetch(`${ROOT_URL}/types`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: RECEIVED_TYPES, payload: json })
      })
  };
}