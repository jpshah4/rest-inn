import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="bg-dark text-white font-small indigo">
                <div className="container">
                    <div className="row">
                        <div className="col-6 p-2">
                            <img src={require("../img/Footer.jpg")} alt="Footer Image Here" />
                        </div>
                        <div className="col-6 p-2">
                            <h4 className='border-bottom'> Social Media Links</h4>
                            <ul className='pb-2'>
                                <li><button type="button" class="btn btn-primary footer-button">
                                    <i class="bi bi-facebook"><span class="p-2">Facebook</span></i></button></li>
                                <li><button type="button" class="btn btn-success footer-button"><i class="bi bi-whatsapp"><span class="p-1">WhatsApp</span></i></button></li>
                                <li><button type="button" class="btn btn-primary footer-button"><i class="bi bi-twitter"><span class="p-1">Twitter</span></i></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer
