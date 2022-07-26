import { React, useState } from 'react';
import axios from "axios";
import { notify } from "../../utils/services";
import { Form , Dropdown} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Textmodal from "../Header/Textmodal";
import Modal from 'react-bootstrap/Modal';
import Invitemodal from "../Header/Invitemodal";
import {FaTrash } from "react-icons/fa";
import {FaLock } from "react-icons/fa";


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
              <Form.Control defaultValue={props.workspace.name} onChange={(e) => saveWorkspace(e.target.value)} className="border-0" style={{marginTop: "-6px",}}></Form.Control>
              {/* <span className="fs-6 mt-1" >{props.workspace.name}</span> */}
             
              
              <div className="other-option">

              {/* <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true" onClick={handleShow}
                    ></i> */}
                   <Modal show={show} onHide={handleClose} animation={false}>
                   <Textmodal/>
                   </Modal>

                 
                   <Invitemodal/>
                  
                   
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
            {/* <div className="collapse " id="collapseExample">
              <p className="pb-0">Board description show here..</p>
            </div> */}
          </div>
          <div className="col-md-7">
            <div className="right-option">
              <ul className="ul-menu">
                {/* <li>
                  <button
                    className="dropdown-toggle no-btn"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-lock"></i>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a className="dropdown-item">
                        Everyone can write updates, the board <br /> is view
                        only.
                      </a>
                    </li>
                  </ul>
                </li>
                 <li>
                  <a>
                    Last seen <span className="name-icon">K</span>
                  </a>
                </li> */}
                <li>
                   <a data-bs-toggle="modal" data-bs-target="#invite_modal">
                     <i className="fa fa-user-plus" ></i> invite
                   </a>
                </li>

                {/* <li>
                  <a data-bs-toggle="modal" data-bs-target="#activity_modal">
                    <i className="fa fa-chart"></i> Activity
                  </a>
                </li>  */}

                 {/* <li>
                  <button
                    className="btn btn-sm add-board-btn dropdown-toggle no-dropdown"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    + Add to board
                  </button>
               
                </li> */}
                <li>

                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant=""
                                    id="dropdown-basic"
                                  >
                                    <i className="fa fa-ellipsis-h font-14"></i>
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu  style={{minWidth: '13rem', marginLeft: "-127px " }}> 
                                   <Dropdown.Item >
                                  <FaLock/>  DataSets Permissions
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={deleteWorkspace} >
                                    <FaTrash />   Delete DataSets
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>

                {/* <a
                    className="btn dropdown-toggle add-dropdown"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-h font-14"></i>
                  </a> */}
                  {/* <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                     DataSets
                      </a>
                    </li>


                  
                    <li>
                      <a className="dropdown-item" href="#">
                      Datasets7


              
                      </a>
                    </li>
    
                  </ul> */}
                  {/* <button
                    className="btn dropdown-toggle no-dropdown ellipsis"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-h"></i>
                  </button> */}
                 
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
                  aria-selected="true" style={{borderRight:"0px solid"}}
                >
                  <i className="fa fa-home"></i> Main Table
                </button>
              </li>
              {/* <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Table
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Dashboard
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <div className="">
                  <a
                    className="btn dropdown-toggle add-dropdown"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-plus font-14"></i>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Table
                      </a>
                    </li>
                  
                    <li>
                      <a className="dropdown-item" href="#">
                        Chart
                      </a>
                    </li>
    
                  </ul>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Topheader;
