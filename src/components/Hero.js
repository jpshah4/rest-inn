import React from 'react'

const Hero = () => {
    return (
        <div className='py-2'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require("../img/Hero1.jpg")} className="d-block w-100" alt="First" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../img/Hero2.jpg")} className="d-block w-100" alt="Second" />
                    </div>
                    <div className="carousel-item">
                        <img src={require("../img/Hero3.jpg")} className="d-block w-100" alt="Third " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
