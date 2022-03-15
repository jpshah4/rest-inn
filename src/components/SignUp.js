import React from 'react'

const SignUp = () => {
    return (
        <div>
            <div className="container d-flex mt-5 justify-content-center">
                <div className="row">
                    <img className=" img-login" src={require('../img/logo.png')} />
                </div>
            </div>

            <div className="container mt-5  d-flex justify-content-center">
                <form action="">
                    <div className="form-control">
                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="name">First Name</label>
                            </div>
                            <div className="col">
                                <input type="text" id="fname" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="name">Last Name</label>
                            </div>
                            <div className="col">
                                <input type="text" id="lname" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="col">
                                <input type="text" id="email" />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="col">
                                <input type="text" id="password" />
                            </div>
                        </div>


                        <input class="form-check-input m-4" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label m-3 p-1" for="flexCheckDefault">
                            You agree to the terms and conditions*
                        </label>

                        <div className="form-control d-flex mt-3 justify-content-center">
                            <button className="btn btn-primary" type="submit">Create Account</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
