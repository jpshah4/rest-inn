import React, { useState } from 'react'

const SignUp = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        password: ""
    });

    const createUser = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        fetch('http://localhost:8080/User', requestOptions)
            .then((response) => {
                if (response.status == 201) {
                    window.location.href = '/login'
                } else {
                    alert("Error creating user");
                }
            }
            )
    }

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
                                <input type="text" id="fname" value={user.firstName} onChange={((evt) => setUser({ ...user, firstName: evt.target.value }))} />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="name">Last Name</label>
                            </div>
                            <div className="col">
                                <input type="text" id="lname" value={user.lastName} onChange={((evt) => setUser({ ...user, lastName: evt.target.value }))} />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="uname">User Name</label>
                            </div>
                            <div className="col">
                                <input type="text" id="uname" value={user.userName} onChange={((evt) => setUser({ ...user, userName: evt.target.value }))} />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="col">
                                <input type="text" id="email" value={user.email} onChange={((evt) => setUser({ ...user, email: evt.target.value }))} />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="col">
                                <input type="password" id="password" value={user.password} onChange={((evt) => setUser({ ...user, password: evt.target.value }))} />
                            </div>
                        </div>

                        <input className="form-check-input m-4" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label m-3 p-1" for="flexCheckDefault">
                            You agree to the terms and conditions*
                        </label>

                        <div className="form-control d-flex mt-3 justify-content-center">
                            <button className="btn btn-primary" type="submit" onClick={createUser}>Create Account</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
