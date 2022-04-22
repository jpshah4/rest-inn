import React, { useState } from 'react'

const Login = () => {

    const [username, setUserName] = useState("");
    const [Password, setPassword] = useState("");

    const validateUser = (e) => {
        e.preventDefault();
        console.log("called")
        console.log(username)
        console.log(Password)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "userName": username, "password": Password })
        };
        fetch('http://localhost:8080/Auth', requestOptions)
            .then((response) => {
                if (response.status == 200) {
                    window.location.href = '/'
                } else {
                    alert("Wrong username or password")
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
                        <div className="row">
                            <div className="col">
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="col">
                                <input type="text" id="email" value={username} onChange={((evt) => setUserName(evt.target.value))} />
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="col">
                                <input type="password" id="password" value={Password} onChange={((evt) => setPassword(evt.target.value))} />
                            </div>
                        </div>

                        <div className="form-control d-flex mt-3 justify-content-center">
                            <button className="btn btn-primary" type="submit" onClick={validateUser}>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>



    )
}

export default Login
