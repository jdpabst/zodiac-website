import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './Can.css';

class Can extends Component {
  constructor(props){
      super(props);
      this.state = {
        signsArr: [{}]
      }
    }

    componentDidMount(){
        axios.get(`/api/signs/can`).then( signsArr => {
            this.setState({
               signsArr: signsArr.data,
            })
            console.log(signsArr)
        })
    }
  render() {
    let signs = this.state.signsArr;
    return (
      <div className="home">
        <div id="animations">
          <div className="stars"></div>
          <div className="twinkling"></div>
          {/* <div className="clouds"></div>  */}
        </div>
        <Link to='/' style={{textDecoration: 'none'}}>
          <div id="home_title" className="fadeIn">
            <h1 className="floating">cancer</h1>
          </div>
        </Link>
        <div id="can_info">
        </div>
         <div id="sign_info_container">
          {signs.map( (sign, id) => {
            return <div key={ id }id="sign_db_info">
              <img className='planet'src={ signs[id].planet } />
              <div id="birth_constellation">
                <h2 className='birth'>{ signs[id].birthday }</h2>
                <img className='constellation' src={ signs[id].constellation }/>
              </div>
              <p id="cap_p" className='history'>{ signs[id].history }</p>
            </div>
          })}
        </div>
      </div>
    );
  }
}


export default Can;