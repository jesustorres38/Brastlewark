import React, { Component } from 'react'
import axios from "axios"
// import { Link } from 'react-router-dom'

import "./Inhabitants.css"

class Inhabitants extends Component {

    constructor (props) {
        super(props);
    
        this.state = {
          inhabitants: ''
        }
    }

    componentDidMount(){
        axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
          .then(response => {
            const infoInhabitants = response.data.Brastlewark.map(elemt => {
              // console.log(elemt);
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

    render(){

        const {inhabitants} = this.state;
        console.log(inhabitants);

        if(inhabitants===''){return <div className="loading">Loading</div>}

        return(
            <div>
                <main role="main">
                    <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Find friends for new adventures</h1>
                        <p className="lead text-muted">Find friends for new adventures filtering by professions like "Metalworker, Tinker or Baker".</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Profession" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                    </section>
                </main>
                <div className="album py-2 bg-light">
                    <div className="container">
                        <div className="row">
                            {inhabitants.map((x,i)=>{
                                return (
                                    <div key={i} className="col-md-3">
                                        <div className="card mb-4 box-shadow">
                                            <img className="card-img-top" src={x.thumbnail} alt="Card cap" />
                                            <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <div className="d-flex justify-content-center">
                                                <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View Details</button>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>)
                                })
                            } 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inhabitants;