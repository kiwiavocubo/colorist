import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Black from "./components/Black";
import White from "./components/White";
import Blue from "./components/Blue";
import Red from "./components/Red";

class App extends Component {
  render() {
    return (
       <BrowserRouter>
      <div>
      <Navigation />
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/black" component={Black} />
      <Route path="/blue" component={Blue} />
      <Route path="/white" component={White} />
      <Route path="/red" component={Red} />     
      <Route path="/contact" component={Contact} />
      <Route component={Error}/>
      </Switch>
      <div className="footer">
      @copyright Qianwen Hu
      </div>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
