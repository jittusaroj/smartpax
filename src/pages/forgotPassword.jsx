import React from "react";
import Header from "../components/header";
import "../Css/styles.css";

function Forgotpassword() {
  return (
    <>
      <section className="">
        <div className=" main">
          <Header />
          <div className="main-login main-center">
            <div className="text-center">
              <h1>
                <b>Forgot</b> <small>your password ?</small>
              </h1>
              <small>
                We'll email you instructions on how to reset your password
              </small>
            </div>

            <form className="form-horizontal1 mt-4" method="post" action="#">
              <div className="form-group">
                <div className="col-sm-10 left-6">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      name="username"
                      id="username"
                      placeholder="Enter your  Email"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group my-4">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block login-button"
                >
                  Reset Password{" "}
                  <i className="fa fa-arrow-right login-arrow"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Forgotpassword;
