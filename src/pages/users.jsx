import React, { Component, useState }  from "react";
import './users.css';
import '../components/Form/Form';
import { Form } from "../components/Form/Form";

import image1 from '../images/hamster-1.jpg';

class UsersPage extends Component {
  state = { showBox: false };
  state = { showForm: false };
  
  handleBoxToggle = () => this.setState({showBox: !this.state.showBox});
  showForm = () => {
    return (
      <div className="form-panel">
          <Form/>
      </div>
      );
  }

  render() {
    let hamsters_name = return_hamster_name();
    let names = hamsters_name.map( (name, index) => {        
          return <img key={index} 
          className="box1 img-responsive" alt="hampsters" 
          src={require(`../../public/img/${name}.jpg`).default} />
      } );
      return (
          <div className="container">
              <div className="row">
                <div className='add-hamster-div'>
                <button className='form-input-btn' onClick={() => this.setState({showForm: true}) }>Add Hamster</button>
                </div>
              {this.state.showForm ? this.showForm() : null}

                <div onMouseOver={this.handleBoxToggle}
                className={`box1${this.state.showBox ? " show":""}`}>
                  {/* <img className="hamsterImage" src={image1}/> */}
                  {/* <div className='infoBox'>This is info box</div> */}
                  <div className='infoBox'>This is info box</div>
                  
                  <div className="list"> 
                      { names }
                  </div>
                  
                  </div>
              </div>
          </div>
      );
  }
}

function return_hamster_name() {
  var hamsters = [];
  let hamster_name = 'hamster-';
  for (var i = 1; i <= 42; i++) {
    hamsters.push(hamster_name+i);
  }
  return hamsters;
}

export default UsersPage;