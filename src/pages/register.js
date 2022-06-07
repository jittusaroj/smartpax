
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import { register,notify } from '../utils/services'
import '../Css/styles.css';

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassowrd] = useState("")
    const [phone, setPhone] = useState("")
    const onRegister = async (e) => {
        e.preventDefault();
        if (name && email && password && phone) {
            const data = {
                name: name,
                email: email,
                password: password,
                phone: phone
            }
            // let res = await register()
            // console.log(res)
            notify('Register Successfully','success')
        } else {
            notify('Please fill all required field','error')
        }
    }
    return (
        <section className="">
            <div className=" main">
               <Header/>
                <div className="main-login main-center">
                    <div className="text-center">
                        <h1>Registration </h1>
                        <small>QMS</small>
                    </div>
                    <form className="form-horizontal mt-4" method="post" action="#">
                        <div className="form-group">
                            <label for="username" className="col-sm-3 control-label">Name</label>
                            <div className="col-sm-10">
                                <div className="input-group">

                                    <input type="text" className="form-control" name="username" id="username" placeholder="Enter your Name"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="username" className="col-sm-3 control-label">Contact no.</label>
                            <div className="col-sm-10">
                                <div className="input-group">

                                    <input type="number" className="form-control" name="username" id="username" placeholder="Enter your Contact No."
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="username" className="col-sm-3 control-label">Email</label>
                            <div className="col-sm-10">
                                <div className="input-group">

                                    <input type="email" className="form-control" name="username" id="username" placeholder="Enter your Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="password" className="col-sm-3 control-label">Password</label>
                            <div className="col-sm-10">
                                <div className="input-group">

                                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter your Password"

                                        onChange={(e) => setPassowrd(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="form-group ms-4">
                            <button type="button" className="btn btn-primary btn-lg btn-block login-button "
                                onClick={(e) => onRegister(e)}
                            >Register</button>
                        </div>

                        <div className="login-separator-wrapper"><div className="login-separator-component split-line"><span className="separator-line"></span>
                            <small>Or Sign In</small>
                            <span className="separator-line"></span></div></div>

                        <button className="btn btn-outline text-center">Google</button>

                        <div className="login-separator-component">
                            <span className="separator-line"></span>
                        </div>
                        <span className="signup-text">If you have an <b>@gmail.com</b> email, you can</span>
                        <Link to={{ pathname: '/signup', }} >
                            Signup to Login
                        </Link>
                        <div className="login-separator-component">
                            <span className="separator-line"></span>
                        </div>
                        <Link to={{ pathname: '/', }} >
                            Login to another account
                        </Link>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register