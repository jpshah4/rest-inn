import React, { useState, useEffect } from 'react'
import PropertyListTile from './PropertyListTile';
import { useParams } from 'react-router';

const PropertyList = () => {

    const [properties, setProperties] = useState([{
        id: "",
        imgLocation: null,
        location: "",
        price: 0,
        title: "",
        bestseller: false,
        type: ""
    }]);

    const { type } = useParams()

    useEffect(() => {
        const URL = type ? `http://localhost:8080/Properties/Search?type=${type}` : 'http://localhost:8080/Properties'

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
                            <PropertyListTile id={property.id} image={property.imgLocation} name={property.title} address={property.location} type={property.type} price={property.price} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PropertyList
