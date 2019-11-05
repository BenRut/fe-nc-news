import React, { Component } from 'react';
import '../css/Nav.css';
import * as api from '../utils/api';

class Nav extends Component {
  state = {
    topics: []
  };
  // componentDidMount() {
  //   api.fetchTopics().then(topics => {
  //     console.log(topics);

  //     this.setState({ topics });
  //   });
  // }
  render() {
    return (
      <div id="nav">
        {this.state.topics.map(topic => {
          return topic;
        })}
      </div>
    );
  }
}

export default Nav;
