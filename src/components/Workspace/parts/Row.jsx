import { React, useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import { Form } from "react-bootstrap";

function Row(props) {
  const workspace_id = props.workspace_id;
  const total_columns = localStorage.getItem("columns" + workspace_id); 
  const rowCallback = (cb) => {
    return cb();
  };
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
              {
              rowCallback(() => {
                  const row = [];
                  for (var i = 1; i <= total_columns; i++) {
                    row.push(<div key={i} className="body1">
                    <span className="value">
                      <input className="" name="" id="textfield1" defaultValue="1" />
                    </span>
                  </div>);
                  }
                  return row;
                })
              }

            </div>
          </div>
    

    </>
    );
  }
  export default Row;