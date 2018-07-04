import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

class Home extends Component {

    render(){
        return(
            <main role="main">

                <section className="jumbotron text-center bg-light">
                <div className="container">
                    <h1 className="jumbotron-heading">Brastlewark</h1>
                    <p className="lead text-muted">Wellcome Heroes in this app you will find information of all the inhabitants from Brastlewark.</p>
                    <p>
                    <Link to="/inhabitants" className="btn btn-primary my-2 mx-1">Explore</Link>
                    </p>
                </div>
                </section>
            </main>
        )
    }
}

export default Home;