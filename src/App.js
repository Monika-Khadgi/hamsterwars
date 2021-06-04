import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

//pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import competition from "./components/Battle/battle";
import Gallery from "./components/Gallery/gallery";
import AddHamsterForm from './components/Form/AddHamsterForm';


class App extends Component {
  render(){
    return (
      <Router>
        <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/404"component={NotFoundPage} /> 
          <Route exact path="/gallery"component={Gallery} />
          <Route exact path="/competition"component={competition} />
          <Route exact path="/add-hamster"component={AddHamsterForm} />
        </Switch>
        </div>
    </Router>
    );
  }
}

export default App