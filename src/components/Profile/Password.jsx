import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../../utils/services";

function Password(props) {
  var url = process.env.REACT_APP_LOCAL_API;
  const [cpwd, setCpwd] = useState("");
  const [npwd, setNpwd] = useState("");

  useEffect(() => {}, [props.data.password]);

  const updateProfile = (e) => {
    if (props.data.password != cpwd) {
      notify("current password does not match", "error");
      return false;
    }

    axios
      .put(
        url + "/users/" + props.data.id,
        {
          password: npwd,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((data) => {
        console.log(data);
        window.location.reload();

        notify("Password Successfully updated", "success");
      });
  };
  return (
    <>
      <section
        className="tab-pane fade"
        id="password"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h5 className="mt-2">Change Password</h5>
            <form method="" action="">
              <div className="row mt-3">
                <div className="col-md-4">
                  <label className="mb-2 mt-2">Current Password</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="password"
                    className="form-control mb-3"
                    name="cpwd"
                    onChange={(e) => setCpwd(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label className="mb-2 mt-2">New Password</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="password"
                    className="form-control mb-3"
                    name="npwd"
                    onChange={(e) => setNpwd(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label className="mb-2 mt-2">Confirm Password</label>
                </div>
                <div className="col-md-8">
                  <input
                    type="password"
                    className="form-control mb-3"
                    name=""
                    required
                  />
                </div>
                <div className="col-md-12">
                  <div style={{ float: "right" }}>
                    Forgot password ? <a>Resend password via mail</a>
                  </div>
                </div>
              </div>
              <hr />
              <button
                type="button"
                onClick={(e) => updateProfile()}
                className="btn btn-primary mb-2"
                style={{ float: "right" }}
              >
                Save
              </button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </section>
    </>
  );
}
export default Password;
