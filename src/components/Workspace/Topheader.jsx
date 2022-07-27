import { React, useState } from "react";
import axios from "axios";
import { notify } from "../../utils/services";
import { Form, Dropdown } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Textmodal from "../Header/Textmodal";
import Modal from "react-bootstrap/Modal";
import Invitemodal from "../Header/Invitemodal";
import {
  FaArrowAltCircleDown,
  FaExclamationCircle,
  FaExternalLinkSquareAlt,
  FaTrash,
} from "react-icons/fa";
import { FaLock } from "react-icons/fa";

// import '../Css/Workspace.css';

function Topheader(props) {
  const user_data = props.user_data;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const saveWorkspace = (value) => {
    axios
      .put(
        process.env.REACT_APP_LOCAL_API + "/workspace/" + props.workspace.id,
        {
          name: value,
          user_id: user_data.id,
          isActive: 1,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((data) => {
        // console.log(data);
        // notify("Successfully updated", "success");
        //window.location.reload();
      });
  };

  const deleteWorkspace = (value) => {
    // window.confirm("Are you sure");
    axios
      .delete(
        process.env.REACT_APP_LOCAL_API + "/workspace/" + props.workspace.id,
        {},
        {
          "Content-Type": "application/json",
        }
      )
      .then((data) => {
        // console.log(data);
        localStorage.removeItem("workspace");
        notify("Deleted successfully", "success");
        window.location.reload();
      });
  };

  return (
    <>
      <div className="top-card-section">
        <div className="row">
          <div className="col-md-5">
            <div className="heading">
              <span className="heading-icon">
                {/* <i className="fa fa-lock"></i> &nbsp; */}
              </span>
              <input
                value={props.workspace.name}
                onChange={(e) => saveWorkspace(e.target.value)}
                className="border-0"
                style={{ marginTop: "-6px" }}
              />

              <div className="other-option">
                <span
                  className="mt-2"
                  onClick={handleShow}
                  style={{ transform: "rotate(180deg)" }}
                >
                  <FaExclamationCircle />
                </span>
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Textmodal />
                </Modal>

                <Invitemodal />

                {/* <span>
                  <a
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a>
                    {" "}
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </a>
                </span> */}
              </div>
            </div>

            <p className="ms-2">{props.workspace.name}</p>
          </div>
          <div className="col-md-7">
            <div className="right-option">
              <ul className="ul-menu">
                <li>
                  <a data-bs-toggle="modal" data-bs-target="#invite_modal">
                    <i className="fa fa-user-plus"></i> invite
                  </a>
                </li>

                <li>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <i className="fa fa-ellipsis-h font-14"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      style={{ minWidth: "13rem", marginLeft: "-127px " }}
                    >
                      <Dropdown.Item>
                        <FaLock /> DataSets Permissions
                      </Dropdown.Item>
                      <Dropdown.Item onClick={deleteWorkspace}>
                        <FaTrash /> Delete DataSets
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-12">
            <ul
              className="nav nav-tabs work-space m-0"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  style={{ borderRight: "0px solid" }}
                >
                  <i className="fa fa-home"></i> Main Table
                </button>

                <span className="table-icon-header">
                  <span style={{ marginLeft: "6px" }}>
                    <FaArrowAltCircleDown />
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Topheader;
