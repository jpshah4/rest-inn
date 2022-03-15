import React, { useEffect, useState } from 'react'
import ShowItemTile from './ShowItemTile';

const BestSellerList = () => {
    const [bestProperties, setBestproperties] = useState([{
        id: 0,
        price: 0,
        title: "",
        imageSrc: null
    }]);

    useEffect(() => {

        const URL = 'http://localhost:5000/bestPropertyList'

        fetch(URL)
            .then(response => response.json())
            .then(json => {
                setBestproperties(json)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className="m-4 border-bottom">
                <h3>Best Property</h3>
            </div>

            <div className="container">
                <div className="row d-flex mt-4 mb-4">
                    {
                        bestProperties.map(best => (
                            <div className="col">
                                <ShowItemTile image={best.imageSrc} description={best.title} price={best.price} />
                            </div >
                        ))
                    }
                </div >
            </div >

        </div>
    )
}

export default BestSellerList
