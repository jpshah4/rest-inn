import React, { useState, useEffect } from 'react'
import PropertyListTile from './PropertyListTile';
import { useParams } from 'react-router';

const PropertyList = () => {

    const [properties, setProperties] = useState([{
        id: 0,
        img: null,
        location: "",
        price: 0,
        name: "",
        bestseller: false,
        type: ""
    }]);

    const { type } = useParams()

    useEffect(() => {
        const URL = type ? `http://localhost:5000/propertyList?type=${type}` : 'http://localhost:5000/propertyList'

        fetch(URL)
            .then(response => response.json())
            .then(json => {
                setProperties(json)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row mt-4 mb-4">
                    {
                        properties.map(property => (
                            <PropertyListTile id={property.id} image={property.img} name={property.name} address={property.address} type={property.type} price={property.price} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PropertyList
