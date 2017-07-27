import React, { Component } from 'react';
import Signs from './Signs/Signs'

import './Home.css';
import virgo from './../../img/virgo.png'

class Home extends Component {

  render() {
    return (
      <div className="home">
        <div id="animations">
          <div className="stars"></div>
          <div className="twinkling"></div>
           {/* <div className="clouds"></div>   */}
        </div>
        <div id="home_title" className="fadeIn">
          <h1 className="floating">empyrean</h1>
        </div>
        <Signs />
      </div>
    );
  }
}


export default Home;