import React, { Component } from 'react';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../index.css';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <header className="header"/>
            <div className="container">
              <Nav/>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;


/*
 <BrowserRouter>
 <div>
 <header className="header"/>
 <div className="container">
 <Nav/>
 </div>
 </div>
 </BrowserRouter>
 */
