import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';

const PropertyDescription = () => {

    const [detail, setDetail] = useState([{
        id: 0,
        img: null,
        address: "",
        price: 0,
        name: "",
        bestseller: false,
        type: ""
    }]);

    const [otherDetail, setOtherDetails] = useState([{
        id: 0,
        propertyDescription: "",
        houseRules: "",
        amenities: ""
    }]);

    const { id } = useParams()

    useEffect(() => {
        const URL = `http://localhost:5000/propertyList/${id}`;
        const URL2 = `http://localhost:5000/propertyDetails/${id}`
        fetch(URL)
            .then(response => response.json())
            .then(json => {
                setDetail(json)
            }).then(
                fetch(URL2)
                    .then(response => response.json())
                    .then(json => {
                        setOtherDetails(json)
                    })
            )
            .catch(err => console.log(err))
    }, [])

    return (

        <div className="container m-3">
            <div className="row">
                <div className="col-5">
                    <img className='detail-Image' src={detail.img} alt="Property image" />
                </div>
                <div className="col-7">
                    <h3 className='mt-5'>{detail.name}</h3>
                    <h5 className='mt-3'>{detail.type}</h5>
                    <h5 className='mt-3'><i class=" h3 bi bi-geo "></i>{detail.address}</h5>
                    <div class="position-relative text-left shadow-lg p-3 bg-white rounded">
                        <h6>{otherDetail.propertyDescription}</h6>
                    </div>
                    <div class="position-relative shadow-sm p-3  bg-white rounded"><h6>{otherDetail.amenities}</h6></div>
                    <div class="position-relative shadow p-3 mb-5 bg-white rounded"><h6>{otherDetail.houseRules}</h6></div>

                </div>
                <button type="button" class="btn btn-primary btn-lg mb-4">BOOK FOR ${detail.price} CAD</button>
            </div>
        </div>

    )
}

export default PropertyDescription
