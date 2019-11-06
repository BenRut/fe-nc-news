import React, { Component } from 'react';
import * as api from '../utils/api';

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };
  handleVote = e => {
    const newVotes = e.target.name;
    // e.stopPropagation();
    // e.preventDefault();
    api.updateVotes(this.props.article.article_id, newVotes);
    this.setState(currentState => {
      return { optimisticVotes: currentState.optimisticVotes + +newVotes };
    });
  };
  render() {
    return (
      <div className="votes">
        <button
          onClick={this.handleVote}
          name="1"
          disabled={this.state.optimisticVotes === 1}
        >
          Up
        </button>
        <div>{this.props.article.votes + this.state.optimisticVotes}</div>
        <button
          onClick={this.handleVote}
          name="-1"
          disabled={this.state.optimisticVotes === -1}
        >
          Down
        </button>
      </div>
    );
  }
}

export default Voter;
