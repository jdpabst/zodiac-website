import React, { Component } from 'react';
import Signs from './Signs/Signs'
import {Link} from 'react-router-dom';

import './Home.css';
import virgo from './../../img/virgo.png'

class Home extends Component {

  render() {
    return (
      <div className="home">
        <div id="animations">
          <div className="stars"></div>
          <div className="twinkling"></div>
            <div className="comet"></div>   
        </div>
        <div id="home_title" className="fadeIn">
          <h1 className="floating">empyrean</h1>
        </div>
        <Link to="/about">
          <div id='about'>About</div>
        </Link>
        <Signs />
      </div>
    );
  }
}


export default Home;