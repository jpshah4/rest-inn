import React from 'react';
import { Link } from 'react-router-dom';

const PropertyListTile = (props) => {
    return (
        <div className='border-bottom pt-3'>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img className='h-75 w-75' src={props.image} alt="Property Image"></img>
                    </div>
                    <div className="col-5">
                        <Link to={`/properties/select/${props.id}`} >
                            <h4 className='p-3 align-left'>{props.name}</h4>
                        </Link>
                        <h6 className='p-3 align-left'><i className="bi bi-geo-alt-fill">{props.address}</i></h6>
                    </div>
                    <div className="col-3 p-3">
                        <h4 className='pt-3'>${props.price}CAD</h4>
                        <input className="btn btn-primary" type="button" value="Book Now" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PropertyListTile
