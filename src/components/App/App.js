import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import Home from '../Home/Home'
import Inhabitants from '../Inhabitants/Inhabitants'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>

        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/inhabitants" component={Inhabitants}/>

            <Redirect to='/' />
        </Switch>

        <Footer/>

      </div>
    );
  }
}

export default withRouter(App);
