import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Css/Main.css";
import Invite from "./Invite";
import Usermodal from "./Usermodal";
import Notification from "./Notification";
import { Image } from "react-bootstrap";
import { Modal } from "react-bootstrap";

function Sidebar(props) {
  const user_data = props.user_data??JSON.parse(localStorage.getItem("user"));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var url = process.env.REACT_APP_LOCAL_API;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url + "/users/" + user_data.id, {
        "Content-Type": "application/json",
      })
      .then((user) => {
        console.log(user);

        setData(user.data);
      });
  }, []);
  return (
    <>
      <div className="sidebar-wrapper" data-simplebar="true">
        <ul className="metismenu" id="menu">
          <li>
            <Image src="slogo.png" className="logo-icon ms-2" alt="logo icon" />
          </li>

          <li>
            <Link className="color-white" to={{ pathname: "/Dashboard" }}>
              <div
                className="parent-icon "
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title=""
                data-bs-original-title="Dashboard"
              >
                <i className="bx bx-category"></i>
              </div>
            </Link>
          </li>
          <li>
            <span
              data-bs-toggle="modal"
              data-bs-target="#notification"
              className="color-white"
            >
              <div
                className="parent-icon"
                data-bs-placement="right"
                title=""
                data-bs-original-title="Notification"
              >
                <i className="bx bx-bell"></i>
              </div>
            </span>
          </li>
          <li>
            <Link className="color-white" to={{ pathname: "/Workspace" }}>
              <div
                className="parent-icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title=""
                data-bs-original-title="Inbox"
              >
                <i className="bx bx-message-alt"></i>
              </div>
            </Link>
          </li>
          <li>
            <a href="#" className="color-white">
              <div
                className="parent-icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title=""
                data-bs-original-title="My Work"
              >
                <i className="bx bx-check-square"></i>
              </div>
            </a>
          </li>

          <li className="mt-15">
            <span className="color-white" onClick={handleShow}>
              <div
                className="parent-icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title=""
                data-bs-original-title="Invite Members"
              >
                <i className="bx bx-user-plus"></i>
              </div>
            </span>
          </li>

          <li>
            <Link className="color-white" to={{ pathname: "/Userlist" }}>
              <div
                className="parent-icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title=""
                data-bs-original-title="User List"
              >
                <i className="bx bx-list-plus"></i>
              </div>
            </Link>
          </li>

          <li
            data-bs-toggle="modal"
            data-bs-target="#userModal"
            className="color-white"
          >
            <img
              src="blank-profile.png"
              alt="profile"
              className="profile-img-side"
            />
            <div className="profile-sidebar-icon">
              {data.working_status == "in_office" && (
                <i className="fa fa-building" aria-hidden="true"></i>
              )}

              {data.working_status == "working_from_home" && (
                <i className="fa fa-home" aria-hidden="true"></i>
              )}

              {data.working_status == "Out_sick" && (
                <i className="fa fa-plus" aria-hidden="true"></i>
              )}

              {data.working_status == "on_break" && (
                <i className="fa fa-bed" aria-hidden="true"></i>
              )}

              {data.working_status == "out_off_office" && (
                <i className="fa fa-cloud" aria-hidden="true"></i>
              )}

              {data.working_status == "working_outside" && (
                <i className="fa fa-cloud" aria-hidden="true"></i>
              )}

              {data.working_status == "family_time" && (
                <i className="fa fa-heart" aria-hidden="true"></i>
              )}

              {data.working_status == "do_not_distrub" && (
                <i className="fa fa-bell" aria-hidden="true"></i>
              )}
            </div>

            {/* </Link> */}
          </li>
        </ul>
      </div>
      <Usermodal />
      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <Image src="user-invite-logo.png" /> Invite new members
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Invite />
        </Modal.Body>
      </Modal>

      <Notification />
    </>
  );
}

export default Sidebar;
