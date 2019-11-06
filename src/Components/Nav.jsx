import React, { Component } from 'react';
import '../css/Nav.css';
import * as api from '../utils/api';
import { Link } from '@reach/router';

class Nav extends Component {
  state = {
    topics: [],
    isLoading: false
  };
  componentDidMount() {
    api.fetchTopics().then(topics => {
      this.setState({ topics });
    });
  }

  render() {
    return (
      <div id="nav">
        {!this.state.isLoading && (
          <>
            <Link to="/">
              <button className="topic-button">all articles</button>
            </Link>
            {this.state.topics.map(topic => {
              return (
                <Link key={topic.slug} to={`/${topic.slug}/articles`}>
                  <button className="topic-button">#{topic.slug}</button>
                </Link>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default Nav;
