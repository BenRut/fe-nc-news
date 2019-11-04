import React, { Component } from 'react';
import '../css/Nav.css';

class Nav extends Component {
  render() {
    return (
      <div id="nav">
        <form action="">
          Sort By
          <select name="" id="">
            <option value="author"></option>
            <option value="topic"></option>
          </select>
          <select name="" id="">
            <option value="ascending"></option>
            <option value="descending"></option>
          </select>
        </form>
      </div>
    );
  }
}

export default Nav;
