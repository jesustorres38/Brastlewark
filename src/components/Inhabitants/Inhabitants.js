import React, { Component } from 'react'
// import axios from "axios"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import "./Inhabitants.css"

class Inhabitants extends Component {

    constructor (props) {
        super(props);
    
        this.state = {
            data: props.data
        }

    }

    handleClick = () => {
        const word = document.getElementById("input1").value;
        const term = word.charAt(0).toUpperCase()+word.toLowerCase().slice(1);
        const data = this.props.data;


        this.setState({
            data: data.filter(x => {
            if (x.professions){
                if(x.professions.indexOf(term)>-1){
                    return x;
                }
            }
            return false;
            })
        })
    }

    render(){

        const data = this.state.data;

        return(
            <div>
                <main role="main">
                    <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Find friends for new adventures</h1>
                        <p className="lead text-muted">Find friends for new adventures filtering by professions like "Metalworker, Tinker or Baker".</p>
                        <div className="input-group mb-1">
                            <input type="text" className="form-control" placeholder="Profession" id="input1"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" onClick={this.handleClick}>Search</button>
                            </div>
                        </div>
                    </div>
                    </section>
                </main>
                <div className="album py-2 bg-light">
                    <div className="container">
                        <div className="row">
                            {data.map((x,i)=>{
                                return (
                                    <div key={i} className="col-md-3">
                                        <div className="card mb-4 box-shadow">
                                            <img className="card-img-top" src={x.thumbnail} alt="Card cap" />
                                            <div className="card-body">
                                            <p className="card-text">{x.name}.</p>
                                            <p className="card-text">{x.age} years.</p>
                                            <div className="d-flex justify-content-center">
                                                <div className="btn-group">
                                                <Link to={{ pathname: "/inhabitantsDetails", info: { data: x } }} className="btn btn-sm btn-outline-secondary">View Details</Link>
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

export default connect(
    estado => ({
        data: estado.saveReducer.data
    })
)(Inhabitants);