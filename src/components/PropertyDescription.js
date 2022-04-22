import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';

const PropertyDescription = () => {

    const [otherDetail, setOtherDetails] = useState([{
        id: "",
        imgLocation: null,
        location: "",
        price: 0,
        title: "",
        bestSeller: false,
        type: "",
        description: "",
        houseRules: "",
        amenities: ""
    }]);

    const { id } = useParams()

    useEffect(() => {
        const URL = `http://localhost:8080/Properties/${id}`;
        fetch(URL)
            .then(response => response.json())
            .then(json => {
                setOtherDetails(json)
            })
            .catch(err => console.log(err))
    }, [])

    return (

        <div className="container m-3">
            <div className="row">
                <div className="col-5">
                    <img className='detail-Image' src={otherDetail.imgLocation} alt="Property image" />
                </div>
                <div className="col-7">
                    <h3 className='mt-5'>{otherDetail.title}</h3>
                    <h5 className='mt-3'>{otherDetail.type}</h5>
                    <h5 className='mt-3'><i className=" h3 bi bi-geo "></i>{otherDetail.location}</h5>
                    <div className="position-relative text-left shadow-lg p-3 bg-white rounded">
                        <h6>{otherDetail.description}</h6>
                    </div>
                    <div className="position-relative shadow-sm p-3  bg-white rounded"><h6>{otherDetail.amenities}</h6></div>
                    <div className="position-relative shadow p-3 mb-5 bg-white rounded"><h6>{otherDetail.houseRules}</h6></div>

                </div>
                <button type="button" className="btn btn-primary btn-lg mb-4">BOOK FOR ${otherDetail.price} CAD</button>
            </div>
        </div>

    )
}

export default PropertyDescription
