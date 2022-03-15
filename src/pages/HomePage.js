import React from 'react'
import BestSellerList from '../components/BestSellerList'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PropertyTypeList from '../components/PropertyTypeList'

const HomePage = () => {
    return (
        <div>
            <div className="App">
                <Header />
                <Hero />
                <PropertyTypeList />
                <BestSellerList />
                <Footer />
            </div>
        </div>
    )
}

export default HomePage
