import { React, useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import { Form } from "react-bootstrap";
import { notify } from "../../utils/services";
import Newfolder from "./parts/Newfolder";

function Worksidebar(props) {
  const user_data = props.user_data;
  const [list, setList] = useState([]);
  const workspace_id_tbl = props.workspace.id;

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_LOCAL_API + "/workspace/list/" + user_data.id, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setList(res.data);
      });
  }, []);

  const changeData = (value) => {
    if(value!="") {
      localStorage.setItem("workspace", value);
      notify("Workspace Successfully changed.", "success");
      window.location.reload();
    }
  };

  return (
    <>
      <p className="fs-6 mt-5">
        <b>DATA SETS</b>
      </p>
      <div>
        <Form>
          <Form.Select aria-label="Workspace selection" onChange={(e) => changeData(e.target.value)} value={workspace_id_tbl}>
            <option className="mt-2" value="">Select</option>
            {list.map((wspace, i) => {
              return <option value={wspace.id} key={i}>{wspace.name}</option>
            })}
          </Form.Select>
        </Form>
      </div>
      <div className="team-font mt-2">
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle
            id="dropdown-autoclose-true"
            style={{
              backgroundColor: "transparent",
              border: "0px solid",
              color: "black",
            }}
          >
            <i className="bx bx-plus"></i> Add
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">New Folder</Dropdown.Item>
            <Dropdown.Item href="#">New Board</Dropdown.Item>
            
        {/* <Dropdown.Item href="#">New Dashboard</Dropdown.Item>  */}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {/* <p className="team-font ms-3">
        <i className="bx bx-filter-alt"></i> Filter
      </p>
      <p className="team-font ms-3">
        <i className="bx bx-search"></i> Search
      </p> */}
      <p className="team-font ms-3">
        <i className="bx bx-add"></i>{" "}
        <a data-bs-toggle="modal" data-bs-target="#addworkspace">
          Add Data Sets
        </a>
      </p>
      <Newfolder id="folder_id"/>
      {/* <Newfolder/> */}
    </>
  );
}
export default Worksidebar;
