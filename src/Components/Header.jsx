import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <div>
          <h1>
            <span className="tags">&lt;</span>NC News
            <span className="tags">/&gt;</span>{' '}
          </h1>
        </div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Header;
