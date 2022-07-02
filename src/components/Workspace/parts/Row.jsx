import { React, useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import { Form } from "react-bootstrap";

function Row() {
 

  return (
    <>
    <div className="d-flex">
            <div className="dropdown-sec">
              <div className="dropdown">
                <a
                  className="btn btn-primary btn-xs dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Collapse this group
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Collapse All group
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Select all items
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Add Group
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Another Drop
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rename Group
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex body-section blue-section">
              <div className="body1 first-head">
                <span className="value first-col">ABC</span>
              </div>
              <div className="body1">
                <span className="value">12/04/22</span>
              </div>
              <div className="body1">
                <span className="value">week 22</span>
              </div>
              <div className="body1">
                <span className="value">
                  <button className="crose-btn value-remove">
                    <i className="fa fa-times"></i>
                  </button>
                  <input className="" name="" id="textfield1" defaultValue="1" />
                </span>
              </div>

              <div className="body1">
                <span className="value">1</span>
              </div>
              <div className="body1">
                <span className="value">1</span>
              </div>
            </div>
          </div>
    

    </>
    );
  }
  export default Row;