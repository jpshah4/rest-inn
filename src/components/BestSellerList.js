import React, { useEffect, useState } from 'react'
import BestPropertyTile from './BestPropertyTile';

const BestSellerList = () => {
    const [bestProperties, setBestproperties] = useState([{
        id: 0,
        price: 0,
        name: "",
        img: null
    }]);

    useEffect(() => {

        const URL = 'http://localhost:5000/propertyList?bestseller=true'

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
                                <BestPropertyTile image={best.img} description={best.name} price={best.price} />
                            </div >
                        ))
                    }
                </div >
            </div >

        </div>
    )
}

export default BestSellerList
