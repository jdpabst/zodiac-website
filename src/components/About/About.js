import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './About.css';

class About extends Component {

  render() {
    return (
      <div className="about">
        <div id="animations">
          <div className="stars"></div>
          <div className="twinkling"></div>
            {/* <div className="comet"></div>    */}
        </div>
        <Link to='/' style={{textDecoration: 'none'}}>
          <div id="home_title" className="fadeIn">
            <h1 className="floating">about</h1>
          </div>
        </Link>
      </div>
    );
  }
}


export default About;