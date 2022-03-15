import React from 'react'

const ShowItemTile = (props) => {
    return (
        <div>
            <div className="card">
                <div className="view overlay">
                    <img className="card-img-top" src={props.image} />
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{props.description}</h4>
                    <div className={props.price ? undefined : 'hidden'}>
                        <h4 className="card-title">${props.price}CAD/Night</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShowItemTile
