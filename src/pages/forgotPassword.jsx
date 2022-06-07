import React from 'react';
import Header from '../components/header';
import '../Css/styles.css';
// import './index.css';
// import Loginhead from "./Loginhead";

function Forgotpassword() {
    return (
        <>
            <section class="">
                <div class=" main">
                    <Header />
                    <div class="main-login main-center">
                        <div class="text-center">
                            <h1>Forgot <small>your password ?</small></h1>
                            <small>We'll email you instructions on how to reset your password</small>
                        </div>

                        <form class="form-horizontal mt-4" method="post" action="#">
                            <div class="form-group">

                                <div class="col-sm-10 ms-5">
                                    <div class="input-group">

                                        <input type="email" class="form-control" name="username" id="username" placeholder="Enter your  Email" />

                                    </div>
                                </div>
                            </div>





                            <div class="form-group my-4">
                                <button type="button" class="btn btn-primary btn-lg btn-block login-button">Reset Password</button>
                            </div>






                        </form>
                    </div>
                </div>
            </section>


        </>
    );
}
export default Forgotpassword;