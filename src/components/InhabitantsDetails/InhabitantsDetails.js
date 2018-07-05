import React, { Component } from 'react'

class InhabitantsDetails extends Component {

    render(){

        const {location} = this.props;

        return(
            <div className="row justify-content-center my-5">
                <div className="col-12">
                    <section className="text-center mt-3">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-10 order-2 col-sm-6 order-sm-1 col-md-4 order-md-1">
                            <figure className="figure">
                            <img src={location.info.data.thumbnail} className="figure-img img-fluid rounded" alt="pic-gnome"/>
                            <figcaption className="figure-caption">Id: {location.info.data.id}</figcaption>
                            </figure>
                        </div>
                        <div className="col-10 order-1 col-sm-6 order-sm-2 col-md-6 order-md-2">
                            <h3 className="sub-heading mb-3">{location.info.data.name}</h3>
                            <p className="text-left"><strong>Age:</strong> {location.info.data.age}</p>
                            <p className="text-left"><strong>Height:</strong> {location.info.data.height}</p>
                            <p className="text-left"><strong>Weight:</strong> {location.info.data.weight}</p>
                            {location.info.data.friends[0] && <p className="text-left"><strong>Friends:</strong> {location.info.data.friends.map(x => {return x+", "})}</p>}
                            <p className="text-left"><strong>Professions:</strong> {location.info.data.professions.map(x => {return x+", "})}</p>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default InhabitantsDetails;