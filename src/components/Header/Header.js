import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.css' 

class Header extends Component {

    render(){
        return(
            <header>
                <div className="collapse bg-dark" id="navbarHeader">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                        <h4 className="text-white">About</h4>
                        <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Go to...</h4>
                        <ul className="list-unstyled">
                            <li><Link className="text-white" to="/">Home</Link></li>
                            <li><Link className="text-white" to="/inhabitants">Inhabitants</Link></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark box-shadow">
                    <div className="container d-flex justify-content-between">
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                        <strong>Brastlewark</strong>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;