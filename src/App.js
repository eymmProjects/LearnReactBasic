import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import PureComp from './components/pureComp';
import Adjel from './components/adjel';
import Profile from './components/profile';
import User from './components/user'

const App = ()=> {
  return (
    
    <BrowserRouter>
        <Header/>
        <div className="container">
          <Switch>
            <Route path="/user" component={User}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/adjel" component={Adjel}/>
            <Route path="/pureComp" component={PureComp}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
