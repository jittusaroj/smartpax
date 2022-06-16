
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/header";
import { notify } from "../utils/services";
const SignUp = () => {
    const nav = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassowrd] = useState('')

    const signup = () => {

        // console.log("EMail: " + email);

     
        var data = {
            name:name,
            email:email,
            password:password,
            created_at:new Date(),    
            isActive:1,            

        }
        const headers = {
            'Content-Type': 'application/json',
          }

        var url = process.env.REACT_APP_LOCAL_API;
        axios.post(url+'/users/signup', data,{

        // axios.post('http://91.134.201.104:3002/users/signup', data,{
            headers: headers
          })
                .then(user => {
                    console.log(user.data.status);
                    if(user.data.status){
                        nav('/')
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
                        <h1>Signup <small>Up</small></h1>
                        <small>QMS</small>
                    </div>

                    <form className="form-horizontal mt-4" method="post" action="#">
                        <div className="form-group">
                            <label for="username" className="col-sm-2 control-label">Name</label>
                            <div className="col-sm-10">
                                <div className="input-group">

                                    <input type="name" onChange={(e) => setName(e.target.value)} className="form-control"  id="username" placeholder="Enter your Name" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="username" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-10">
                                <div className="input-group">

                                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="username" placeholder="Enter your Email" />
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
                                onClick={() => signup()}
                                className="btn btn-primary btn-lg btn-block login-button">Submit</button>
                        </div>

                        <div className="login-separator-wrapper"><div className="login-separator-component split-line"><span className="separator-line"></span>
                            <small>Or Sign In</small>
                            <span className="separator-line"></span></div></div>

                        <button className="btn btn-outline text-center">Google</button>

                        <div className="login-separator-component">
                            <span className="separator-line"></span>
                        </div>



                        <span className="signup-text">If you already Signed Up,

<Link to={{ pathname: '/', }} >
    Log-in here
</Link>
</span>

                       

                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp