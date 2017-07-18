import React, { Component } from 'react';
import router from './router';

import './reset.css';
import './App.css';
import './css/animations.css'

class App extends Component {

  render() {
    return (
      <div className="App">

          { router }

      </div>
    );
  }
}


export default App;
