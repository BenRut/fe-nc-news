import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
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
