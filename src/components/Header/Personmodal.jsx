import { React, useEffect, useState } from "react";
import { Form, Text, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

function Personmodal() {
  return (
    <>

<div className="dropdown">
        <span
          href="#"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
         

          <span className="ms-1 f-color">  <i className="fa fa-user-circle f-color"></i>  Person</span>
        </span>
       
        <div
          className="dropdown-menu"
          aria-labelledby="dropdownMenuLink"
          style={{ width: "30rem" }}
        >
          <div style={{ padding: "2px 15px" }}>
         
          <div className="row">
                <div className="col-md-8 col-7">
                  <h5>Quick person filter</h5>
                </div>
              </div>
              <p>Filter items and subitems by person</p>
              <div className="persone-icon">
                <ul>
                  <li>
                    <a>
                      <img src="blank-profile.png" />{" "}
                    </a>
                  </li>
                </ul>
          </div>
        </div>
      </div>
      </div>

      {/* <div
        className="modal fade sort-modal"
        id="person_modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-md-8 col-7">
                  <h5>Quick person filter</h5>
                </div>
              </div>
              <p>Filter items and subitems by person</p>
              <div className="persone-icon">
                <ul>
                  <li>
                    <a>
                      <img src="blank-profile.png" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default Personmodal;
