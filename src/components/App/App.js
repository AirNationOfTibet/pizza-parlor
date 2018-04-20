import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Checkout from './Checkout/Checkout.js';
import Menu from './Menu/Menu.js';
import Order from './Order/Order.js'

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
        
        <Route exact path="/menu" component={Menu}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/order" component={Order}/>
      </div>
      </Router>
    );
  
  }
}

export default App;
