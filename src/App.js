import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Example from './imageSelect/imageSelect';



import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

//pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import UsersPage from "./pages/users";
import competition from "./pages/competition";

class App extends Component {
  render(){
    return (
      <Router>
        <div>
        <Navbar />
       
        
        <switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/404"component={NotFoundPage} /> 
          <Route exact path="/users"component={UsersPage} />
          <Route exact path="/competition"component={competition} />
          </switch>
        </div>
    </Router>
    );
  }
}

export default App