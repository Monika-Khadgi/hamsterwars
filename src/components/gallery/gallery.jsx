import React, { Component }  from "react";
import './gallery.css';
import '../components/Form/Form';
import { Form } from "../components/Form/Form";

import image2 from '../images/hamster-2.jpg';


// const UsersPage =() => {
//   return (
//     <div className="listWrapper">
//       {/* <Form/> */}
   
//       {/* <div className="list">
//           <div className="box1"><h2>Hampster1</h2></div>
//           <div className="box1"><h2>Hampster2</h2></div>
//           <div className="box1"><h2>Hampster3</h2></div>
//           <div className="box1"><h2>Hampster4</h2></div>
//           <div className="box1"><h2>Hampster5</h2></div>
//           <div className="box1"><h2>Hampster6</h2></div>
//           <div className="box1"><h2>Hampster7</h2></div>
//           <div className="box1"><h2>Hampster8</h2></div>
//           <div className="box1"><h2>Hampster9</h2></div>
//           <div className="box1"><h2>Hampster10</h2></div>
//           <div className="box1"><h2>Hampster11</h2></div>
//           <div className="box1"><h2>Hampster12</h2></div>
//       </div> */}
      
//     </div>
//   );
// };

// export default UsersPage;


class UsersPage extends Component {
  render() {
    let hamsters_name = return_hamster_name();
    let names = hamsters_name.map( (name, index) => {        
          return 
          (
          <img key={index} className="box1 img-responsive" alt="hampsters" src={require(`../../public/img/${name}.jpg`).default} />
          )
      } );
      return (
          <div className="container">
              <div className="row">
                  <div className="form-panel">
                    <Form/>
                  </div>
                  <div className="list">  
                      { names }
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