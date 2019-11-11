import React, { Component } from 'react';
import '../css/Header.css';
import User from '../icons/user.png';
import Logo from '../img/nc-news-logo.png';

class Header extends Component {
  render() {
    return (
      <>
        <div id="header">
          <div id="logo-div">
            <img id="logo" src={Logo} alt="" />
          </div>
          <div className="login">
            <p className="login-item">{this.props.username}</p>
            <img className="user login-item" src={User} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Header;
