import React, { Component } from 'react';
import Game from "../Game/Game.js"
import "./Login.css";

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username1: "",
            username2: "",
        }
    }
    setPlayer1 = (e) => {
        this.setState({
            username1: e.target.value
        })
    }
    setPlayer2 = (e) => {
        this.setState({
            username2: e.target.value
        })
    }
  render() {

    if (this.state.username1 !== "" && this.state.username2 !== "") {
    return (
        <>
        <div className="login_container">
            <form>
                <label className="login_label">X Name:</label>
                <input 
                className="login_input"
                type="text"
                value={this.state.username1}
                onChange={this.setPlayer1}
                /><br/>
                <label className="login_label">O Name:</label>
                <input 
                className="login_input"
                type="text"
                value={this.state.username2}
                onChange={this.setPlayer2}
                />
            </form>
        </div>
        <Game 
        username1={this.state.username1} 
        username2={this.state.username2}
        />
        </>
    );
    }
    return (
                <>
        <div className="login_container">
            <form>
                <label className="login_label">X Name:</label>
                <input 
                className="login_input"
                type="text"
                value={this.state.username1}
                onChange={this.setPlayer1}
                /><br/>
                <label className="login_label">O Name:</label>
                <input 
                className="login_input"
                type="text"
                value={this.state.username2}
                onChange={this.setPlayer2}
                />
            </form>
        </div>
        </>
    )
  }
}

export default Login;
