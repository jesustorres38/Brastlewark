import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import Home from '../Home/Home'
import About from '../About/About'
import Header from '../Header/Header'


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>

        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>

            <Redirect to='/' />
        </Switch>

      </div>
    );
  }
}

export default withRouter(App);
