import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Signs.css';
import virgo from './../../../img/virgo.png'

class Signs extends Component {

  render() {
    return (
      <div className="main_signs_section">
        <div id="sign_holder">
          {/* <img id="no_hover" src= { virgo } /> */}
          <Link to='/virgo' style={{textDecoration: 'none'}}>
            <div className="sign">
              <img src="https://i2.wp.com/madamastrology.com/wp-content/uploads/2014/11/virgo_symbol_madamastrology1.png"/>
              <p>VIRGO</p>
            </div>
          </Link>
          <div className="sign">
            <img src="https://i0.wp.com/madamastrology.com/wp-content/uploads/2014/11/taurus_symbol_madamastrology1.png"/>
            <p>TAURUS</p>
          </div>
          <div className="sign">
            <img src="https://i2.wp.com/madamastrology.com/wp-content/uploads/2014/11/scorpio_symbol_madamastrology1.png"/>
            <p>SCORPIO</p>
          </div>
          <div className="sign">
            <img src="https://i2.wp.com/madamastrology.com/wp-content/uploads/2014/11/sagittarius_symbol_madamastrology1.png"/>
            <p>SAGITTARIUS</p>
          </div>
          <div className="sign">
            <img src="https://i2.wp.com/madamastrology.com/wp-content/uploads/2014/11/pisces_symbol_madamastrology1.png"/>
            <p>PISCES</p>
          </div>
          <div className="sign">
            <img src="https://i2.wp.com/madamastrology.com/wp-content/uploads/2014/11/libra_symbol_madamastrology1.png"/>
            <p>LIBRA</p>
          </div>
          <div className="sign">
            <img src="https://i2.wp.com/madamastrology.com/wp-content/uploads/2014/11/capricorn_symbol_madamastrology1.png"/>
            <p>CAPRICORN</p>
          </div>
          <div className="sign">
            <img src="https://i2.wp.com/madamastrology.com/wp-content/uploads/2014/11/cancer_symbol_madamastrology1.png"/>
            <p>CANCER</p>
          </div>
          <div className="sign">
            <img src="https://i2.wp.com/madamastrology.com/wp-content/uploads/2014/11/aries_symbol_madamastrology1.png"/>
            <p>ARIES</p>
          </div>
          <div className="sign">
            <img src="https://i2.wp.com/madamastrology.com/wp-content/uploads/2014/11/aquarius_symbol_madamastrology1.png"/>
            <p>AQUARIUS</p>
          </div>
          <div className="sign">
            <img src="https://i2.wp.com/madamastrology.com/wp-content/uploads/2014/11/leo_symbol_madamastrology1.png"/>
            <p>LEO</p>
          </div>
          <div className="sign">
            <img src="https://i2.wp.com/madamastrology.com/wp-content/uploads/2014/11/gemini_symbol_madamastrology1.png"/>
            <p>GEMINI</p>
        </div>
        </div>
      </div>
    );
  }
}


export default Signs;