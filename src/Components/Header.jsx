import React, { Component } from 'react';
import '../css/Header.css';
import User from '../icons/user.png';

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
        <div className="login">
          <p className="login-item">{this.props.username}</p>
          <img className="user login-item" src={User} />
        </div>
      </div>
    );
  }
}

export default Header;
