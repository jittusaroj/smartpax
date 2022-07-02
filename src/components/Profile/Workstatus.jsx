import React from "react";
import axios from "axios";
import { notify } from "../../utils/services";

function Workstatus(props) {
  var url = process.env.REACT_APP_LOCAL_API;

  const updateProfile = (status) => {
    axios
      .put(
        url + "/users/" + props.data.id,
        {
          working_status: status,
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
        id="working_status"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h5>Update your working status</h5>
            <p>Let everyone know your status </p>
            <div className="status-option">
              <div className="form-check work-form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="in_office"
                  defaultChecked={
                    props.data.working_status == "in_office" ? "true" : false
                  }
                  onClick={(e) => updateProfile("in_office")}
                />
                <label className="form-check-label" htmlFor="in_office">
                  In the office{" "}
                  <i className="fa fa-building" aria-hidden="true"></i>
                </label>
              </div>
              <div className="form-check work-form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="working_from_home"
                  defaultChecked={
                    props.data.working_status == "working_from_home"
                      ? "true"
                      : false
                  }
                  onClick={(e) => updateProfile("working_from_home")}
                />
                <label className="form-check-label" htmlFor="working_form_home">
                  Working from home{" "}
                  <i className="fa fa-home" aria-hidden="true"></i>
                </label>
              </div>
              <div className="form-check work-form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="Out_sick"
                  defaultChecked={
                    props.data.working_status == "Out_sick" ? "true" : false
                  }
                  onClick={(e) => updateProfile("Out_sick")}
                />
                <label className="form-check-label" htmlFor="Out_sick">
                  Out sick <i className="fa fa-plus" aria-hidden="true"></i>
                </label>
              </div>
              <div className="form-check work-form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="on_break"
                  defaultChecked={
                    props.data.working_status == "on_break" ? "true" : false
                  }
                  onClick={(e) => updateProfile("on_break")}
                />
                <label className="form-check-label" htmlFor="on_break">
                  On break <i className="fa fa-bed" aria-hidden="true"></i>
                </label>
              </div>
              <div className="form-check work-form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="out_off_office"
                  defaultChecked={
                    props.data.working_status == "out_off_office"
                      ? "true"
                      : false
                  }
                  onClick={(e) => updateProfile("out_off_office")}
                />
                <label className="form-check-label" htmlFor="out_off_office">
                  Out of office{" "}
                  <i className="fa fa-cloud" aria-hidden="true"></i>
                </label>
              </div>

              <div className="form-check work-form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="working_outside"
                  defaultChecked={
                    props.data.working_status == "working_outside"
                      ? "true"
                      : false
                  }
                  onClick={(e) => updateProfile("working_outside")}
                />
                <label className="form-check-label" htmlFor="working_outside">
                  Working outside
                  <i className="fa fa-cloud" aria-hidden="true"></i>
                </label>
              </div>
              <div className="form-check work-form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="family_time"
                  defaultChecked={
                    props.data.working_status == "family_time" ? "true" : false
                  }
                  onClick={(e) => updateProfile("family_time")}
                />
                <label className="form-check-label" htmlFor="family_time">
                  Family time<i className="fa fa-heart" aria-hidden="true"></i>
                </label>
              </div>
              <div className="form-check work-form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="do_not_distrub"
                  defaultChecked={
                    props.data.working_status == "do_not_distrub"
                      ? "true"
                      : false
                  }
                  onClick={(e) => updateProfile("do_not_distrub")}
                />
                <label className="form-check-label" htmlFor="do_not_distrub">
                  Do not distrub{" "}
                  <i className="fa fa-bell" aria-hidden="true"></i>{" "}
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="date" className="form-control mt-3 mb-3" name="" />
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-8 mt-2 mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="disable_notifivation" defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="disable_notifivation"
                  >
                    Disable email and mobile notifications while not in the
                    office
                  </label>
                </div>
              </div>
              <div className="col-md-8 mt-2 mb-3">
                <h6>User Activity Indication Control</h6>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="user_activity" defaultChecked
                  />
                  <label className="form-check-label" htmlFor="user_activity">
                    User Activity Indication Control
                  </label>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Workstatus;
