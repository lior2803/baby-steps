import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../index.css';
import Nav from './Nav';
import BabyStep from './BabyStep';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <header className="header"/>
            <div className="container">
                <Nav/>
                <Switch>
                    <Route exact path='/' component={BabyStep}/>
                    <Route path="/step2" component={BabyStep}/>
                    <Route path="/step3" component={BabyStep}/>
                    <Route path="/step4" component={BabyStep}/>
                    <Route path="/step5" component={BabyStep}/>
                    <Route path="/step6" component={BabyStep}/>
                    <Route path="/step7" component={BabyStep}/>
                    <Route render={function () {
                        return <p>Not Found</p>
                    }}/>
                </Switch>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
