
import React from 'react';
import { Link } from 'react-router-dom';

const PropertyTypeTile = (props) => {
    return (
        <div>
            <div className="card">
                <Link to={`/properties/${props.description}`} >
                    <div className="view overlay">
                        <img className="card-img-top" src={props.image} />
                        <a href="#!">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{props.description}</h4>
                        {/* <div className={props.price ? undefined : 'hiddenpro'}>
                        <h4 className="card-title">${props.price}CAD/Night</h4>
                    </div> */}
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default PropertyTypeTile
