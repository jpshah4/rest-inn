import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="bg-light">
                <div className="container ">
                    <div className="row  align-items-end">
                        <div className="col-3">
                            <a href="/">
                                <img className="navImg py-2" src={require('../img/logo.png')} />
                            </a></div>
                        <div className="col-5">
                            <form className="form-inline my-2 d-flex">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="col-2">
                            <Link to='/properties'>
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">View All Properties</button>
                            </Link>
                        </div>
                        <div className="col-2">
                            <div class="dropdown">
                                <button className="btn  dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="bi bi-person" ></i></button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="/login">Login</a>
                                    <a class="dropdown-item" href="/signup">Sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </nav >
        </div >
    )
}

export default Header
