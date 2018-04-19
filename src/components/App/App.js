import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Checkout from './Checkout/Checkout.js';
import Menu from './Menu/Menu.js';

class App extends Component {

  render() {

    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
         </header>
         <nav>
        <ul>
          <li>
            <Link to ="/menu"> Menu </Link>
            <Link to ="/checkout"> Checkout </Link>
          </li>
          
        </ul>
        </nav>
       
        <br/>
        <p>Pizza is great.</p>
        
        <Route exact path="/menu" component={Menu}/>
        <Route path="/checkout" component={Checkout}/>
      </div>
      </Router>
    );
  
  }
}

export default App;
