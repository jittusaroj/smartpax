import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import { register, notify } from "../utils/services";
import "../Css/styles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [phone, setPhone] = useState("");
  const onRegister = async (e) => {
    e.preventDefault();
    if (name && email && password && phone) {
      const data = {
        name: name,
        email: email,
        password: password,
        phone: phone,
      };
      // let res = await register()
      // console.log(res)
      notify("Register Successfully", "success");
    } else {
      notify("Please fill all required field", "error");
    }
  };
  return (
    <section className="">
      <div className=" main">
        <Header />
        <div className="main-login main-center">
          <div className="text-center">
            <h1>Registration </h1>
          </div>
          <form className="form-horizontal1 mt-4" method="post" action="#">
            <div className="form-group">
              <label for="username" className="col-sm-2 left-20 control-label">
                Name
              </label>
              <div className="col-sm-10 left-20">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    placeholder="Enter your Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="username" className="col-sm-3 left-20 control-label">
                Contact no.
              </label>
              <div className="col-sm-10 left-20">
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    name="username"
                    id="username"
                    placeholder="Enter your Contact No."
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="username" className="col-sm-2 left-20 control-label">
                Email
              </label>
              <div className="col-sm-10 left-20">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    name="username"
                    id="username"
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label for="password" className="col-sm-2 left-13 control-label">
                Password
              </label>
              <div className="col-sm-10 left-20">
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                    onChange={(e) => setPassowrd(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="form-group ">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block login-button "
                onClick={(e) => onRegister(e)}
              >
                Register
              </button>
            </div>

            <span className="signup-text mt-4">
              {" "}
              <b>Already a Member ? </b>
              <Link to={{ pathname: "/" }}>
                <b>Log In</b>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
