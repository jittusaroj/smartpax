import { React, useEffect, useState } from "react";
import axios from "axios";
import { Form, Text, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Collapse from "react-bootstrap/Collapse";
import ColumnData from "../Workspace/parts/ColumnData";
import { FaFilter } from "react-icons/fa";
import Select from "react-select";

function Filtermodal(props) {
  const options = [
    { value: "Column", label: "Column" },
    { value: "Group", label: "Group" },
    { value: "Text", label: "Text" },
    { value: "Date", label: "Date" },
    { value: "Status", label: "Status" },
  ];
  const value = [
    { value: "Value", label: "Value" },
    { value: "is", label: "is " },
    { value: "is not", label: "is not" },
    { value: " contain", label: "contain" },
    { value: "do not contain", label: "do not contain" },
  ];
  const condition = [
    { value: "Condition", label: "Condition" },
    { value: "Top Group", label: "Top Group" },
    { value: "New Group", label: "New Group" },
    { value: "New Group", label: "New Group" },
  ];

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          <FaFilter className="f-color" style={{ fontSize: "12px" }} />
          <span className="ms-1 f-color"> Filter</span>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ width: "35rem" }}>
          <div style={{ padding: "2px 25px" }}>
            <div className="row">
              <div className="col-md-8 col-6">
                <h6>Advanced filters</h6>
              </div>
            </div>

            <div className="d-flex mb-2 my-4">
              <div className="col-md-1 me-2">
                <span class="f-color">Where</span>
              </div>
              <div className="col-md-3 me-2 ms-1">
                <Select options={options} className="select" />
              </div>
              <div className="col-md-3 me-2">
                <Select options={value} className="select" />
              </div>
              <div className="col-md-4 me-2">
                <Select options={condition} className="select" />
              </div>
              <div className="col-md-2 me-2">
                <div className="">
                  {" "}
                  <i className="fa fa-times"></i>
                </div>
              </div>
            </div>

            <div className="d-flex mb-2 my-4">
              <div className="col-md-1 me-2">
                <span class="f-color">Where</span>
              </div>
              <div className="col-md-3 me-2 ms-1">
                <Select options={options} className="select" />
              </div>
              <div className="col-md-3 me-2">
                <Select options={value} className="select" />
              </div>
              <div className="col-md-4 me-2">
                <Select options={condition} className="select" />
              </div>
              <div className="col-md-2 me-2">
                <div className="">
                  {" "}
                  <i className="fa fa-times"></i>
                </div>
              </div>
            </div>

            {/* <div className="row mb-2 my-4">
                <div className="col-md-2">
                  <select className="form-control">
                    <option> Where</option>
                    <option> Date</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option> Group</option>
                    <option> Date</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option> </option>
                    <option> is </option>
                    <option> is not</option>
                    <option> contain</option>
                    <option>doesn't contain</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option></option>
                    <option>Top Group</option>
                  </select>
                </div>
                <div className="col-md-1">
                  <div className="mt-2">
                    {" "}
                    <i className="fa fa-times"></i>
                  </div>
                </div>
              </div> */}
          </div>
        </Dropdown.Menu>
      </Dropdown>
      {/* <span data-bs-toggle="modal" data-bs-target="#filter-modal">
        <i className="fa fa-filter f-color"></i>
        <span className="ms-2 f-color">Filter</span>
      </span>
      <div
        className="modal fade"
        id="filter-modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-md-8 col-6">
                  <h5>Advanced filters</h5>
                </div>
              </div>

              <div className="row mb-2 my-4">
                <div className="col-md-2">
                  <select className="form-control">
                    <option> Where</option>
                    <option> Date</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option> Column</option>
                    <option> Date</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option> value</option>
                    <option> Date</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option>Condition</option>
                    <option>Descending</option>
                  </select>
                </div>
                <div className="col-md-1">
                  <div className="mt-2">
                    {" "}
                    <i className="fa fa-times"></i>
                  </div>
                </div>
              </div>

              <div className="row mb-2 my-4">
                <div className="col-md-2">
                  <select className="form-control">
                    <option> Where</option>
                    <option> Date</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option> Group</option>
                    <option> Date</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option> </option>
                    <option> is </option>
                    <option> is not</option>
                    <option> contain</option>
                    <option>doesn't contain</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option></option>
                    <option>Top Group</option>
                  </select>
                </div>
                <div className="col-md-1">
                  <div className="mt-2">
                    {" "}
                    <i className="fa fa-times"></i>
                  </div>
                </div>
              </div>

              <div className="row mb-2 my-4">
                <div className="col-md-2">
                  <select className="form-control">
                    <option> Where</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option> Name</option>
                    <option> Date</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option> </option>
                    <option> is </option>
                    <option> is not</option>
                    <option> contain</option>
                    <option>doesn't contain</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-control">
                    <option></option>
                    <option>Top Group</option>
                  </select>
                </div>
                <div className="col-md-1">
                  <div className="mt-2">
                    {" "}
                    <i className="fa fa-times"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default Filtermodal;
