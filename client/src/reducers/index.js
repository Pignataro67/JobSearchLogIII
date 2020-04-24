import { combineReducers } from 'redux';
import TasksReducer from './reducer_tasks';
import TypesReducer from './reducer_types';

const RootReducer = combineReducers({
  types: TypesReducer,
  tasks: TasksReducer,
});

export default RootReducer;