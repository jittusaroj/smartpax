
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/header";
import { notify } from "../utils/services";
const Login = () => {
    const nav = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassowrd] = useState('')

    const login = () => {

        // console.log("EMail: " + email);


        var data = {
            email:email,
            password:password,                 

        }
        const headers = {
            'Content-Type': 'application/json',
          }

        axios.post('http://91.134.244.97:3002/users/login', data,{
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
                        <h1><b>Log</b> <small>In</small></h1>
                    
                    </div>

                    <form className="form-horizontal1 mt-4" method="post" action="#">
                        <div className="form-group">
                            <label for="username" className="col-sm-2 left-20 control-label">Email</label>
                            
                            <div className=" col-sm-10 left-20">
                                <div className="input-group">

                                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" name="username" id="username" placeholder="Enter your Email" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="password" className="col-sm-2 left-13 control-label">Password</label>
                            
                            <div className="col-sm-10 left-20">
                                <div className="input-group">

                                    <input type="password" onChange={(e) => setPassowrd(e.target.value)} className="form-control" name="password" id="password" placeholder="Enter your Password" />
                                </div>
                            </div>
                        </div>
                        <Link className="form-group float-right mr-2" to={{ pathname: '/forgot_password', }} >
                            Forgot your password?
                        </Link>
                        {/* <Link className="form-group  mr-2" to={{ pathname: '/Dashboard', }} >
                           Dashboard
                        </Link> */}

                        <div className="form-group ">
                            <button type="button"
                                onClick={() => login()}
                                className="btn btn-primary btn-lg btn-block login-button">Log In <i class="fa fa-arrow-right login-arrow"></i></button>
                        </div>

                        <div className="login-separator-wrapper"><div className="login-separator-component split-line"><span className="separator-line"></span>
                            <small><b>Or Sign In</b></small>
                            <span className="separator-line"></span></div></div>

                        <button className="btn btn-outline text-center google-font"> <img className="google-img" src="google.jpg" alt="Google image"/> Google</button>

                        {/* <div className="login-separator-component">
                            <span className="separator-line"></span>
                        </div> */}



                        <span className="signup-text mt-3"> <b>New Member ? </b> 
                        <Link to={{ pathname: '/signup', }} >
                        <b>Sign Up</b>    
                        </Link>
                        </span>
                        {/* <a href="" className="form-group ">Signup to Login</a> */}
                        

                        {/* <div className="login-separator-component">
                            <span className="separator-line"></span>
                        </div>

                        <Link to={{ pathname: '/register', }} >
                            Don't have account ? Register
                        </Link> */}

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login