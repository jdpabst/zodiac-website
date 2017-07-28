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
            <h1>about</h1>
          </div>
        </Link>
        <div id="content">
            <div className='img'></div>
            <p id="p">Hi there! Thanks for visiting Empyrean, a project inspired by the mysteries of the stars. I hope you enjoyed it! Check me out on GitHub, LinkedIn, or my portfolio to see more of my work. Feel free to contact me with any opportunities or questions.</p>
            <ul>
                <li><a href="https://github.com/jdpabst" target="_blank">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/jessica-pabst/" target="_blank">LinkedIn</a></li>
                <li><a href="http://jdpabst.com/" target="_blank">Portfolio</a></li>
            </ul>
        </div>
        
      </div>
    );
  }
}


export default About;