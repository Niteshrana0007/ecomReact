import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar } from 'reactstrap'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <h1>Ristorante Con Fusion</h1>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
