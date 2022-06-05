
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/header";
import { notify } from "../utils/services";
const Login = () => {
    const nav = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassowrd] = useState('')
    const navigate = useNavigate()

    const login = () => {

        // console.log("EMail: " + email);


        var data = {
            email:email,
            password:password,                 

        }
        const headers = {
            'Content-Type': 'application/json',
          }

        axios.post('http://localhost:3001/users/login', data,{
            headers: headers
          })
                .then(user => {
                    console.log(user.data.status);
                    if(user.data.status){
                        nav('/dashboard')
                        notify(user.data.msg, 'success')

                    }else{
            notify('Something went wrong!', 'error')

                    }
                })

   
    }
    return (
        <section className="">
            <div className=" main">
                <Header />
                <div className="main-login main-center">
                    <div className="text-center">
                        <h1>Log <small>In</small></h1>
                        <small>QMS</small>
                    </div>

                    <form className="form-horizontal mt-4" method="post" action="#">
                        <div className="form-group">
                            <label for="username" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-10">
                                <div className="input-group">

                                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" name="username" id="username" placeholder="Enter your Email" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="password" className="col-sm-2 control-label">Password</label>
                            <div className="col-sm-10">
                                <div className="input-group">

                                    <input type="password" onChange={(e) => setPassowrd(e.target.value)} className="form-control" name="password" id="password" placeholder="Enter your Password" />
                                </div>
                            </div>
                        </div>
                        <Link className="form-group " to={{ pathname: '/forgot_password', }} >
                            Forgot your password?
                        </Link>

                        <div className="form-group ">
                            <button type="button"
                                onClick={() => login()}
                                className="btn btn-primary btn-lg btn-block login-button">Log In</button>
                        </div>

                        <div className="login-separator-wrapper"><div className="login-separator-component split-line"><span className="separator-line"></span>
                            <small>Or Sign In</small>
                            <span className="separator-line"></span></div></div>

                        <button className="btn btn-outline text-center">Google</button>

                        <div className="login-separator-component">
                            <span className="separator-line"></span>
                        </div>



                        <span className="signup-text">If you have an <b>@gmail.com</b> email, you can</span>
                        {/* <a href="" className="form-group ">Signup to Login</a> */}
                        <Link to={{ pathname: '/signup', }} >
                            Signup to Login
                        </Link>

                        <div className="login-separator-component">
                            <span className="separator-line"></span>
                        </div>

                        <Link to={{ pathname: '/register', }} >
                            Don't have account ? Register
                        </Link>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login