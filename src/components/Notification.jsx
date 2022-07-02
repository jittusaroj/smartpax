import React from "react";
import { useState } from "react";
// import './Main.css';
import { Modal, Button, Dropdown } from "react-bootstrap";

function Notification() {
  return (
    <>
      <div
        className="modal notification-modal "
        id="notification"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog custom-dialog right-26  ">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Notifications</h4>
              <Dropdown className="noti-toggle">
                <Dropdown.Toggle id="dropdown-basic" className="btn-toggle ">
                  <i className="bx bx-dots-horizontal-rounded color-black "></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Mark all as read
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Delete all</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <ul className="nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  data-bs-toggle="tab"
                  data-bs-target="#all"
                >
                  All
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#unread"
                >
                  Unread
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#mentioned"
                >
                  I was mentioned
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#assign"
                >
                  Assign to me
                </a>
              </li>
            </ul>

            <div className="modal-body overflow-550">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="all"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <b> Last 7 days</b>

                  <div className="notification-card">
                    <div className=" row">
                      <div className="col-md-3 col-sm-4 col-4 mt-2">
                        <span className="text-circle">NM</span>
                      </div>
                      <div className="col-md-9 col-sm-8 col-8">
                        <span className="fs-4">Natasha Manyenga </span>{" "}
                        <span>6d</span> <br />
                        <span>
                          added you as an owner of Dashboard "Duplicate of SL
                          C2A SMARTPAX GRAPHS - QMS FOODTECH "
                        </span>
                        <span className="float-right notification-icon">
                          <i className="bx bx-check-square"></i>{" "}
                          <i className="bx bx-trash"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="notification-card noti-bg">
                    <div className=" row">
                      <div className="col-md-3 col-sm-4 col-4 mt-2">
                        <span className="text-circle">NM</span>
                      </div>
                      <div className="col-md-9 col-sm-8 col-8">
                        <span className="fs-4">Natasha Manyenga </span>{" "}
                        <span>6d</span> <br />
                        <span>
                          added you as an owner of Dashboard "Duplicate of SL
                          C2A SMARTPAX GRAPHS - QMS FOODTECH "
                        </span>
                        <span className="float-right notification-icon">
                          <i className="bx bx-check-square"></i>{" "}
                          <i className="bx bx-trash"></i>
                          <i className="bi bi-three-dots-horizontal"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="unread"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="notification-card noti-bg">
                    <div className=" row">
                      <div className="col-md-3 col-sm-4 col-4 mt-2">
                        <span className="text-circle">NM</span>
                      </div>
                      <div className="col-md-9 col-sm-8 col-8">
                        <span className="fs-4">Natasha Manyenga </span>{" "}
                        <span>6d</span> <br />
                        <span>
                          added you as an owner of Dashboard "Duplicate of SL
                          C2A SMARTPAX GRAPHS - QMS FOODTECH "
                        </span>
                        <span className="float-right notification-icon">
                          <i className="bx bx-check-square"></i>{" "}
                          <i className="bx bx-trash"></i>
                          <i className="bi bi-three-dots-horizontal"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="mentioned"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="notification-card noti-bg">
                    <div className=" row">
                      <div className="col-md-3 col-sm-4 col-4 mt-2">
                        <span className="text-circle">NM</span>
                      </div>
                      <div className="col-md-9 col-sm-8 col-8">
                        <span className="fs-4">Natasha Manyenga </span>{" "}
                        <span>6d</span> <br />
                        <span>
                          added you as an owner of Dashboard "Duplicate of SL
                          C2A SMARTPAX GRAPHS - QMS FOODTECH "
                        </span>
                        <span className="float-right notification-icon">
                          <i className="bx bx-check-square"></i>{" "}
                          <i className="bx bx-trash"></i>
                          <i className="bi bi-three-dots-horizontal"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="notification-card noti-bg">
                    <div className=" row">
                      <div className="col-md-3 col-sm-4 col-4 mt-2">
                        <span className="text-circle">NM</span>
                      </div>
                      <div className="col-md-9 col-sm-8 col-8">
                        <span className="fs-4">Natasha Manyenga </span>{" "}
                        <span>6d</span> <br />
                        <span>
                          added you as an owner of Dashboard "Duplicate of SL
                          C2A SMARTPAX GRAPHS - QMS FOODTECH "
                        </span>
                        <span className="float-right notification-icon">
                          <i className="bx bx-check-square"></i>{" "}
                          <i className="bx bx-trash"></i>
                          <i className="bi bi-three-dots-horizontal"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="assign"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="notification-card noti-bg">
                    <div className=" row">
                      <div className="col-md-3 col-sm-4 col-4 mt-2">
                        <span className="text-circle">NM</span>
                      </div>
                      <div className="col-md-9 col-sm-8 col-8">
                        <span className="fs-4">Natasha Manyenga </span>{" "}
                        <span>6d</span> <br />
                        <span>
                          added you as an owner of Dashboard "Duplicate of SL
                          C2A SMARTPAX GRAPHS - QMS FOODTECH "
                        </span>
                        <span className="float-right notification-icon">
                          <i className="bx bx-check-square"></i>{" "}
                          <i className="bx bx-trash"></i>
                          <i className="bi bi-three-dots-horizontal"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Notification;
