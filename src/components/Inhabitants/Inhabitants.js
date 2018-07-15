import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import "./Inhabitants.css"

class Inhabitants extends Component {

    constructor (props) {
        super(props);
    
        this.state = {
            data: props.data,
            currentPage: 1,
            elemtsPerPage: 100
        }
    }

    handleClick = () => {
        const word = document.getElementById("input1").value;
        const term = word.charAt(0).toUpperCase()+word.toLowerCase().slice(1);
        const data = this.props.data;

        if(word === ''){
            this.setState({data: data});
        }
        else{
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
    }

    handlePagination = (e) => {
        this.setState({
            currentPage: Number(e.target.id)
        })
        window.scrollTo(0, 0);
    }

    render(){

        const data = this.state.data;

        // logic for pagination
        const last = this.state.currentPage * this.state.elemtsPerPage;
        const first = last - this.state.elemtsPerPage;
        const currents = data.slice(first, last);

         // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / this.state.elemtsPerPage); i++) {
            pageNumbers.push(i);
        }
        
        return(
            <div>
                <main role="main">
                    <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Find friends for new adventures</h1>
                        <p className="lead text-muted">Find friends for new adventures filtering by professions like "Metalworker, Tailor or Baker".</p>
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
                            {currents.length > 0 && currents.map((x,i)=>{
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
                            {data.length === 0 && <div>No results found...</div>} 
                        </div>
                        <div className="row">
                            <nav aria-label="...">
                                <ul className="pagination pagination-sm flex-wrap">   
                                    {pageNumbers.length > 0 && pageNumbers.map(x => {
                                        return (
                                            <li className="page-item" key={x} >
                                                <a className={x === this.state.currentPage ? 'page-link active': 'page-link'} id={x} onClick={this.handlePagination}>{x}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
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