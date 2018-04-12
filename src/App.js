import React, { Component } from 'react';
import './App.scss';
import VisibleContainer from './packs/container';

class App extends Component {
  render() {
    return (
      <div className="App custom-container">
        <VisibleContainer/>
      </div>
    );
  }
}

export default App;
// docu https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
// $('html, body').animate({
//   scrollTop: 400
// }, 2000);

