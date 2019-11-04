import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <h1>
          <span className="tags">&lt;</span>NC News
          <span className="tags">/&gt;</span>
          <form action="">
            {' '}
            <input placeholder="Search" /> <button>Submit</button>
          </form>
        </h1>
      </div>
    );
  }
}

export default Header;
