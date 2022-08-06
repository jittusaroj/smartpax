import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../../utils/services";
import { Form, Text, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Collapse from "react-bootstrap/Collapse";
import { FaFilter, FaExchangeAlt, FaEyeSlash } from "react-icons/fa";
import Select from "react-select";

function Person() {
  return (
    <>
      <div className="dropdown">
        <span
          href="#"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaEyeSlash className="f-color" />

          <span className="ms-1 f-color"> Hide</span>
        </span>
       
        <div
          className="dropdown-menu"
          aria-labelledby="dropdownMenuLink"
          style={{ width: "15rem" }}
        >
          <div style={{ padding: "2px 15px" }}>
         
            <Form.Control
              className="custom-select h-30 shadow-0"
              defaultValue=""
              placeholder="Search.."
              name=""
            
            />

            <p className="mt-1 f-color">
              All Columns
              <span className="float-end ">
                <Form.Check type="checkbox" className="check" />
              </span>
            </p>

            <p className="mt-1 f-color">
              Person{" "}
              <span className="float-end ">
                <Form.Check type="checkbox" className="check" />
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Person;
