import React, { Component } from 'react';
import "./Highscore.css";

class Highscore extends Component {
    render(){
            return (
                <div className="highscore_container">
                    <table>
                        <thead>
                            <tr>
                                <td className="playerTitle">{this.props.username1}</td>
                                <td className="playerTitle">{this.props.username2}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="playerScore">{this.props.score1}</td>
                                <td className="playerScore">{this.props.score2}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
    }
}

export default Highscore;