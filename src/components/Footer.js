import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white font-small indigo">
                <div className="container">
                    <div className="row">
                        <div className="col-6 p-2">
                            <img src={require("../img/Footer.jpg")} alt="Footer Image Here" />
                        </div>
                        <div className="col-6 p-2">
                            <h4 className='border-bottom'> Social Media Links</h4>
                            <ul className='pb-2'>
                                <li><button type="button" className="btn btn-primary footer-button">
                                    <i className="bi bi-facebook"><span className="p-2">Facebook</span></i></button></li>
                                <li><button type="button" className="btn btn-success footer-button"><i className="bi bi-whatsapp"><span className="p-1">WhatsApp</span></i></button></li>
                                <li><button type="button" className="btn btn-primary footer-button"><i className="bi bi-twitter"><span className="p-1">Twitter</span></i></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer
