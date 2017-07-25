import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Aries.css';

class Aries extends Component {

  render() {
    return (
      <div className="home">
        <div id="animations">
          <div className="stars"></div>
          <div className="twinkling"></div>
          {/* <div className="clouds"></div>  */}
        </div>
        <Link to='/' style={{textDecoration: 'none'}}>
          <div id="home_title" className="fadeIn">
            <h1 className="floating">aries</h1>
          </div>
        </Link>
        <div id="aries_info">
        </div>
         <div id="sign_info_container">
          <h2>Testing the div space...</h2>
        </div>
      </div>
    );
  }
}


export default Aries;