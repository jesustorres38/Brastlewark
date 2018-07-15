import React, { Component }                     from 'react'
import { withRouter, Route, Switch, Redirect }  from 'react-router-dom'

import { bindActionCreators }                   from 'redux';
import { connect }                              from 'react-redux';
import { saveAction }                          from '../../redux/actions'

//components
import './App.css'
import Home from '../Home/Home'
import Inhabitants from '../Inhabitants/Inhabitants'
import InhabitantsDetails from '../InhabitantsDetails/InhabitantsDetails'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import axios from "axios";

class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      inhabitants: []
    }

    let {dispatch} = this.props;

    this.onSaveData = bindActionCreators(saveAction, dispatch);
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
        this.onSaveData.save(infoInhabitants);
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
            <Route exact path="/inhabitantsDetails" component={InhabitantsDetails}/>
 
            <Redirect to='/' />
        </Switch>

        <Footer/>

      </div>
    );
  }
}

export default withRouter( connect()(App));


