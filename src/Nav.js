import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
          <Link to='/' >Home</Link> |&nbsp; 
          <Link to='/add_school' >Add School</Link> |&nbsp;
          <Link to='/add_student' >Add Student</Link> |&nbsp;
          <Link to='/update_student' >Update Student</Link> |&nbsp;
          <Link to='/search_student' >Search Student</Link>

      </div>
    );
  }
}

export default Nav;
