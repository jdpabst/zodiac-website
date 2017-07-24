import React, { Component } from 'react';

import './Virgo.css';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <div id="animations">
          <div className="stars"></div>
          <div className="twinkling"></div>
          {/* <div className="clouds"></div>  */}
        </div>
        <div id="home_title" className="fadeIn">
          <h1 className="floating">empyrean</h1>
        </div>
      </div>
    );
  }
}


export default Home;