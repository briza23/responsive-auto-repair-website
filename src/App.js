import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import VisibleContainer from './packs/container';

class App extends Component {
  render() {
    return (
      <div className="App custom-container">
        <VisibleContainer />
      </div>
    );
  }
}

export default App;
