import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../../utils/services";
import { Form, Text, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Collapse from "react-bootstrap/Collapse";
import { FaFilter, FaExchangeAlt, FaPlus } from "react-icons/fa";
// import Select from "react-select";

function Sortmodal(props) {
  const [reload, setReload] = useState(false);
  const [name, setName] = useState();

  useEffect(() => {
    // setInterval((e) => {
    //  e.preventdefault();
    var current = new Date();
    setName(current);
    // }, 3000);
  }, [reload]);
  const workspace_id = props.workspace_id;
  const user_data = props.user_data;

  // const total_columns = localStorage.getItem("columns" + workspace_id) ?? 0;
  const deleteSort = () => {
    axios
      .delete(
        process.env.REACT_APP_LOCAL_API + "/group/" + props.group_data.id,
        {},
        {
          "Content-Type": "application/json",
        }
      )
      .then((data) => {
        // console.log(data);
        notify("Deleted successfully", "success");
        reload == false ? setReload(true) : setReload(false);
      });
  };

  const options = [
    { value: "Column", label: "Column" },
    { value: "Group", label: "Group" },
    { value: "Text", label: "Text" },
    { value: "Date", label: "Date" },
    { value: "Status", label: "Status" },
  ];
  const sort = [
    { value: "Ascending", label: "Ascending" },
    { value: "Descending", label: "Descending" },
  ];

  const select1 = () => {
    var s1 = document.getElementById("s1");

    s1.selectedIndex == 0 ? props.doSort("Asc") : props.doSort("Desc");
  };

  return (
    <>
      <div className="dropdown">
        <span
          href="#"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <FaExchangeAlt
            className="f-color"
            style={{ transform: "rotate(90deg)" }}
          />

          <span className="ms-1 f-color"> Sort</span>
        </span>
        <div
          className="dropdown-menu"
          aria-labelledby="dropdownMenuLink"
          style={{ width: "25rem" }}
        >
          <div style={{ padding: "2px 15px" }}>
            <div className="row">
              <div className="col-md-8 col-6">
                <h6>Sort filters</h6>
              </div>
            </div>

            <div className="d-flex mb-2 my-2">
              <div className="col-md-6 me-2 ms-1">
                <select className="form-control custom-select">
                  <option> Group</option>
                  <option> Date</option>
                </select>
              </div>
              <div className="col-md-5 me-2">
                <select className="form-control custom-select">
                  <option> Ascending</option>
                  <option> Descending</option>
                </select>
              </div>

              <div className="col-md-1 mx-2">
                <div className="">
                  {" "}
                  <i className="fa fa-times"></i>
                </div>
              </div>
            </div>
            <Button
              style={{ background: "white", border: "0px" }}
              onChange={select1}
            >
              {" "}
              <FaPlus style={{color: 'black '}} /> <b className="f-color">Add Sort Filter</b>{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sortmodal;
