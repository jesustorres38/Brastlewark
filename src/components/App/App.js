import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'

//components
import './App.css'
import Home from '../Home/Home'
import Inhabitants from '../Inhabitants/Inhabitants'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import axios from "axios";

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      inhabitants: []
    }
  }

  componentDidMount(){
    axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
      .then(response => {
        const infoInhabitants = response.data.Brastlewark.map(elemt => {
          return {
            id: elemt.id,
            name: elemt.name,
            age: elemt.age,
            weight: elemt.weight,
            height: elemt.height,
            thumbnail: elemt.thumbnail,
            hair: elemt.hair_color,
            friends: elemt.friends,
            professions: elemt.professions
          };
        })
        this.setState({inhabitants: infoInhabitants});
      })
      .catch(error => console.log(error));
  }

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
