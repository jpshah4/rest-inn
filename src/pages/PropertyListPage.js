import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PropertyList from '../components/PropertyList'

const PropertyListPage = () => {
    return (
        <div className="App">
            <Header />
            <PropertyList />
            <Footer />
        </div>
    )
}

export default PropertyListPage
