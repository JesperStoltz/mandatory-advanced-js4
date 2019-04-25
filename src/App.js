import React, { Component } from 'react';
import Login from "./Login/Login.js"
import "./App.css";

class App extends Component {
  render() {
    return (
        <div className="main_container">
          <Login />
        </div>
    );
  }
}

export default App;
