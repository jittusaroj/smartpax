import { React, useEffect, useState } from "react";
import axios from "axios";

import "../Css/Main.css";
import Footer from "./Footer";
import Sidebar from "../components/Sidebar";
import Personaltab from "../components/Profile/Personaltab";
import Workstatus from "../components/Profile/Workstatus";
import Password from "../components/Profile/Password";
import Preference from "../components/Profile/Preference";
import Notification from "../components/Profile/Notification";
import Sessionhistory from "../components/Profile/Sessionhistory";
import { Dropdown, Form } from "react-bootstrap";
import { notify } from "../utils/services";

function Profile() {
  //let { networkStatus } = useNavigator();
  // let { userAgent } = useNavigator();

  var url = process.env.REACT_APP_LOCAL_API;

  const data = JSON.parse(localStorage.getItem("user"));
  const [udata, setUdata] = useState([]);

  const [name, setName] = useState("");

  useEffect(() => {
    // if (userAgent) {
    //   console.log("userAgent", userAgent);
    // }

    axios
      .get(url + "/users/" + data.id, {
        "Content-Type": "application/json",
      })
      .then((user) => {
        console.log(user);

        setUdata(user.data);
        setName(user.data.name);
        return udata;
      });
  }, []);

  const updateProfile = (e) => {
    if (e.key === "Enter") {
      axios
        .put(
          url + "/users/" + udata.id,
          {
            name: name,
          },
          {
            "Content-Type": "application/json",
          }
        )
        .then((user) => {
          console.log(user);
          notify("Successfully updated", "success");
        });
    }
  };

  const [uploadFile, setUploadFile] = useState("");

  const submitFile = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("avatar", uploadFile);
    console.log(data);
    axios
      .post(url + "/users/upload/avatar/" + udata.id, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {
        console.log(data);
        notify("Avatar Successfully updated", "success");
        window.location.reload();
      })
      .catch((error) => {
        // error response
      });
  };

  const removeAvatar = (event) => {
    const data = new FormData();
    data.append("avatar", uploadFile);
    console.log(data);
    axios
      .post(url + "/users/remove/avatar/" + udata.id, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((data) => {
        console.log(data);
        notify("Avatar Successfully removed", "success");
        window.location.reload();
      })
      .catch((error) => {
        // error response
      });
  };

  return (
    <>
      <div className="wrapper">
        <Sidebar data={udata} />
        <div className="page-wrapper">
          <div className="page-content p-0">
            <div className="bg-blue profile-head">
              <div className="edit-file">
                {udata.working_status == "in_office" && (
                  <div className="profile-icon">
                    <i className="fa fa-building" aria-hidden="true"></i>
                  </div>
                )}

                {udata.working_status == "working_from_home" && (
                  <div className="profile-icon">
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </div>
                )}

                {udata.working_status == "Out_sick" && (
                  <div className="profile-icon">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </div>
                )}

                {udata.working_status == "on_break" && (
                  <div className="profile-icon">
                    <i className="fa fa-bed" aria-hidden="true"></i>
                  </div>
                )}

                {udata.working_status == "out_off_office" && (
                  <div className="profile-icon">
                    <i className="fa fa-cloud" aria-hidden="true"></i>
                  </div>
                )}

                {udata.working_status == "working_outside" && (
                  <div className="profile-icon">
                    <i className="fa fa-cloud" aria-hidden="true"></i>
                  </div>
                )}

                {udata.working_status == "family_time" && (
                  <div className="profile-icon">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                  </div>
                )}

                {udata.working_status == "do_not_distrub" && (
                  <div className="profile-icon">
                    <i className="fa fa-bell" aria-hidden="true"></i>
                  </div>
                )}

                <div className="profile-section">
                  {/* <span> V</span>  */}
                  <img
                    src={
                      udata.avatar
                        ? process.env.REACT_APP_LOCAL_API +
                          "/users/media/" +
                          udata.avatar
                        : "blank-profile.png"
                    }
                    alt="profile"
                    className="profile-img-width"
                  />
                </div>

                <div className="change-profile-option">
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="btn-toggle">
                      <div className="icon-margin color-black">
                        <center>
                          <i className="fa fa-pencil"></i>
                          <br />
                          Change Profile Pic
                        </center>
                      </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        className="color-black"
                        data-bs-toggle="modal"
                        data-bs-target="#update_profile"
                      >
                        Upload profile picture
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#"
                        onClick={(e) => removeAvatar()}
                        className="color-black"
                      >
                        Remove profile picture
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  {/* <input type="text" className="form-control name-input"  value="Krishna" /> */}
                  <Form>
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      onKeyPress={(e) => updateProfile(e)}
                      className="name-input"
                    />
                  </Form>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="profile-tabs">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#personal_info"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Personal info
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#working_status"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Working Status
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="contact-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#password"
                          type="button"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          Password
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="contact-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#Preferences"
                          type="button"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          Preferences
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="contact-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#Notifications"
                          type="button"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          Notifications
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="contact-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#Session_history"
                          type="button"
                          role="tab"
                          aria-controls="contact"
                          aria-selected="false"
                        >
                          Session history
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-content mt-4 mx-5 height" id="myTabContent">
              <Personaltab data={udata} />

              <Workstatus data={udata} />

              <Password data={udata} />

              <Preference data={udata} />

              <Notification data={udata} />

              <Sessionhistory data={udata} />
            </div>
          </div>
          <Footer />
        </div>
      </div>

      <div
        className="modal fade"
        id="update_profile"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog profile-modal">
          <div className="modal-content">
            <div className="modal-header border-top-blue border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                {" "}
                Update Profile Photo
              </h5>
              <button
                type="button"
                className="btn-close custum-close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={submitFile}>
              <div className="modal-body">
                {/* <div className="name-first-word">
                                      K
                                  </div> */}

                <label
                  htmlFor="profile_img"
                  className="update_image_label btn btn-primary"
                >
                  Upload image
                </label>
                <input
                  type="file"
                  name="avatar"
                  id="profile_img"
                  value=""
                  className="update_profile_img"
                  onChange={(e) => setUploadFile(e.target.files[0])}
                />
              </div>
              <div className="modal-footer borde-top-0">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
