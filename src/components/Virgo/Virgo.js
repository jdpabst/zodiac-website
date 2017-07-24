import React, { Component } from 'react';

import './Virgo.css';

class Virgo extends Component {

  render() {
    return (
      <div className="home">
        <div id="animations">
          <div className="stars"></div>
          <div className="twinkling"></div>
          {/* <div className="clouds"></div>  */}
        </div>
        <div id="home_title" className="fadeIn">
          <h1 className="floating">virgo</h1>
        </div>
        <div id="virgo_info">
        </div>
        <p>Testing the div space...</p>
      </div>
    );
  }
}


export default Virgo;