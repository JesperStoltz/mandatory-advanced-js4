import React, { Component } from 'react';
import "./Score.css";

class Score extends Component {
  render() {
    return (
        <div className="score_container">
            <p className="score_text">And the winner is...</p><br/>
            <p className="score_winnerText">{this.props.winner}</p><br/>
            <p className="score_next">Click on the eraser to play again!</p>
        </div>
    );
  }
}

export default Score;
