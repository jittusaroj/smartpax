import { React, useEffect, useState } from "react";
import axios from "axios";

import { notify } from "../../utils/services";

function Notification(props) {
  var url = process.env.REACT_APP_LOCAL_API;

  const updateProfile = (status) => {
    axios
      .put(
        url + "/users/" + props.data.id,
        {
          notification: status,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((data) => {
        console.log(data);
        window.location.reload();

        notify("Settings updated", "success");
      });
  };

  return (
    <>
      <section
        className="tab-pane fade"
        id="Notifications"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h5>Manage your notification settings</h5>
            <p>
              We may still send you important notifications about your account
              and content outside of your preferred notification settings.
            </p>
            <div className="border p-2 br-8 mb-3 shadow-sm">
              <div className="row">
                <div className="col-md-2 col-2 text-center">
                  <i
                    className="bx bx-desktop mt-2"
                    style={{ fontSize: "28px" }}
                  ></i>
                </div>
                <div className="col-md-7 col-10">
                  <h6>Desktop notifications</h6>
                  <p className="f-12">
                    Receive notifications directly on my Windows
                  </p>
                </div>
                <div className="col-md-3 col-12">
                  {props.data.notification == 0 && (
                    <button
                      className="btn btn-primary btn-sm mt-2 btn-padding"
                      style={{ float: "right" }}
                      onClick={(e) => updateProfile(1)}
                    >
                      Enable{" "}
                    </button>
                  )}
                  {props.data.notification == 1 && (
                    <button
                      className="btn btn-danger btn-sm mt-2 btn-padding"
                      style={{ float: "right" }}
                      onClick={(e) => updateProfile(0)}
                    >
                      Disable{" "}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </section>
    </>
  );
}
export default Notification;
