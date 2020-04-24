import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeNavBar = ({ showHeader }) =>

  <div className="navbar">

    <NavLink
      to="/"
      exact
      className="btn btn-info"
      activeStyle={{
        background: 'grey'
      }}

    >Home</NavLink>

    <NavLink
      to="/about"
      exact
      className="btn btn-info"
      activeStyle={{
        background: 'grey'
      }}
    >About</NavLink>
    
    <NavLink
      to="/types"
      exact
      className="btn btn-info"
      activeStyle={{
        background: 'grey'
      }}
    >Task Types</NavLink>
    
    <NavLink
      to="/tasks"
      exact
      className="btn btn-info"
      activeStyle={{
        background: 'grey'
      }}
    >My Tasks</NavLink>

    <NavLink
      to="/tasks/new"
      exact
      className="btn btn-info pull-xs-right"
      activeStyle={{
        background: 'grey'
      }}
    >Add Task</NavLink>

  </div>

export default HomeNavBar;