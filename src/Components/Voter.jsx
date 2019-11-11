import React, { Component } from 'react';
import * as api from '../utils/api';
import Up from '../icons/up.png';
import Down from '../icons/down.png';
import '../css/Voter.css';
import '../css/App.css';

class Voter extends Component {
  state = {
    optimisticVotes: 0
  };

  handleVote = e => {
    const newVotes = e.target.name;
    api.updateVotes(this.props.id, newVotes, this.props.endpoint);
    this.setState(
      currentState => {
        return { optimisticVotes: currentState.optimisticVotes + +newVotes };
      },
      () => {}
    );
  };
  render() {
    return (
      <div className="votes">
        <input
          type="image"
          src={Up}
          onClick={this.handleVote}
          name="1"
          disabled={this.state.optimisticVotes === 1}
          alt=""
        />

        <p className="votes">{this.props.votes + this.state.optimisticVotes}</p>

        <input
          type="image"
          src={Down}
          onClick={this.handleVote}
          name="-1"
          disabled={this.state.optimisticVotes === -1}
          alt=""
        />
      </div>
    );
  }
}

export default Voter;
