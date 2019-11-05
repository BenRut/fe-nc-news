import React, { Component } from 'react';
import '../css/Nav.css';
import * as api from '../utils/api';

class Nav extends Component {
  state = {
    topics: [],
    isLoading: false
  };
  componentDidMount() {
    api.fetchTopics().then(
      topics => {
        this.setState({ topics });
      },
      () => {
        console.log(this.state.topics);
      }
    );
  }
  render() {
    return (
      <div id="nav">
        {!this.state.isLoading && (
          <>
            {this.state.topics.map(topic => {
              return <h3>{topic.slug}</h3>;
            })}
          </>
        )}
      </div>
    );
  }
}

export default Nav;
