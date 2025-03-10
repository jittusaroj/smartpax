import {
  React,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import { Form } from "react-bootstrap";
import { notify } from "../../utils/services";
import Newfolder from "./parts/Newfolder";
import { FaFile } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Worksidebar = forwardRef((props, ref) => {
  const user_data = props.user_data;
  const folderList = props.folderList;
  const [workspaceList, setWorkspaceList] = useState([]);
  const [workspaceId, setWorkspaceId] = useState(props.workspace.id);
  const [reload, setReload] = useState();
  const newRef = useRef();
  const Navigate = useNavigate();

  useImperativeHandle(ref, () => ({
    getAlert() {
      setReload(true);
      newRef.current.secondAlert();
    },
  }));

  // const changeData = (value) => {
  //   if(value!="") {
  //     localStorage.setItem("workspace", value);
  //     setWorkspaceId(value);
  //     notify("Datasets Successfully changed.", "success");
  //     window.location.reload();
  //   }
  // };
  
  // const changeData = (value) => {
  //   if (value != "") {
  //     props.setWorkspaceId(value);

  //     props.setReloader(true);
  //   }
  // };

  const changeData = ( value) => {
    if(value!="") {
      localStorage.setItem("workspace", value);
      setWorkspaceId(value);
      // notify("Datasets Successfully changed.", "success");
      props.setReloader(true);
    }
  };

  const addNewFolder = () => {
    axios
      .post(
        process.env.REACT_APP_LOCAL_API + "/folder/save",
        {
          user_id: user_data.id,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((data) => {
        axios
          .get(
            process.env.REACT_APP_LOCAL_API + "/folder/list/" + user_data.id,
            {
              "Content-Type": "application/json",
            }
          )
          .then((res) => {
            props.setFolderList(res.data);
          });
        // notify("New Folder added.", "success");
        props.setReloader(true);
      });
  };

  return (
    <>
      <h6 className="fs-6 mt-3">
        <b>DATASETS</b>
      </h6>
      {/* <div>
        <Form>
          <Form.Select
            aria-label="Workspace selection"
            onChange={(e) => changeData(e.target.value)}
            value={props.workspace.id}
          >
            <option className="mt-2" value="">
              Add
            </option>
            <option className="mt-2" value="addNewFolder">
              New Folder
            </option>
            <option className="mt-2" value="">
              New Datasets
            </option>
          </Form.Select>
        </Form>
      </div> */}
      <div>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-autoclose-true"
            className="form-control"
          >
            <i className="bx bx-plus"></i> Add
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ width: "100%" }}>
            <Dropdown.Item onClick={addNewFolder}>New Folder</Dropdown.Item>
            <Dropdown.Item href="#">
              <a data-bs-toggle="modal" data-bs-target="#addworkspace">
                New Datasets
              </a>
            </Dropdown.Item>

            {/* <Dropdown.Item href="#">New Dashboard</Dropdown.Item>  */}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <hr style={{ width: "100%" }} />
      {/* <p className="team-font ms-3">
        <i className="bx bx-filter-alt"></i> Filter
      </p>
      <p className="team-font ms-3">
        <i className="bx bx-search"></i> Search
      </p> */}
      {/* <p className="team-font ms-3">
        <i className="bx bx-add"></i>{" "}
        <a data-bs-toggle="modal" data-bs-target="#addworkspace">
          Add Data Sets
        </a>
      </p> */}
      {folderList.map((folder, key) => {
        return (
          <Newfolder
            ref={newRef}
            user_data={user_data}
            changeData={changeData}
            key={key}
            folder_data={folder}
            props={props}
          />
        );
      })}
      {/* <Newfolder/> */}
    </>
  );
});
export default Worksidebar;
