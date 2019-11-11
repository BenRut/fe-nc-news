import React, { Component } from 'react';
import '../css/Nav.css';
import * as api from '../utils/api';
import { Link } from '@reach/router';
import classnames from 'classnames';

class Nav extends Component {
  state = {
    topics: [],
    isLoading: false,
    prevScrollPos: window.pageYOffset,
    visible: true
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    api.fetchTopics().then(topics => {
      this.setState({ topics });
    });
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollPos } = this.state;

    const currentScrollPos = window.pageYOffset;

    this.setState({
      prevScrollPos: currentScrollPos,
      visible: !this.state.visible
    });
  };

  render() {
    return (
      <nav
        className={classnames({
          'navbar--hidden': !this.state.visible
        })}
      >
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
      </nav>
    );
  }
}

export default Nav;
