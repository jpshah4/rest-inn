import React, { useState, useEffect } from 'react'
import PropertyTypeTile from './PropertyTypeTile';


const PropertyTypeList = () => {

    const [propertyTypes, setPropertyType] = useState([{
        id: 0,
        description: "",
        imageSrc: null
    }]);

    useEffect(() => {

        const URL = 'http://localhost:5000/propertyTypes'
        fetch(URL)
            .then(response => response.json())
            .then(json => {
                setPropertyType(json)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className="m-4 border-bottom">
                <h3>Property Types</h3>
            </div>
            <div className="container">
                <div className="row d-flex mt-4 mb-4">
                    {
                        propertyTypes.map(type => (
                            <div className="col ">
                                <PropertyTypeTile id={type.id} image={type.imageSrc} description={type.description} />
                            </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default PropertyTypeList
