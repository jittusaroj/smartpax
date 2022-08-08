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

  useEffect(() => {
    // setWorkspaceId(props.workspace.id);
    axios
      .get(
        process.env.REACT_APP_LOCAL_API + "/workspace/list/" + user_data.id,
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        setWorkspaceList(res.data);
        // if(!props.workspace.id && res.data && res.data[0] && res.data[0].id) {
        //   changeData(res.data[0].id);
        // }
      });
  }, [reload]);

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
      notify("Datasets Successfully changed.", "success");
      props.setReloader(true);
     

   //  props.setReloader(true);
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
        notify("New Folder added.", "success");
      });
  };

  return (
    <>
      <h6 className="fs-6 mt-3">
        <b>DATASETS</b>
      </h6>
      <div>
        <Form>
          <Form.Select
            aria-label="Workspace selection"
            onChange={(e) => changeData(e.target.value)}
            value={props.workspace.id}
          >
            <option className="mt-2" value="">
              Add
            </option>
            <option className="mt-2" onClick={addNewFolder}>
              New Folder
            </option>
            <option className="mt-2" value="">
              New Datasets
            </option>
            {workspaceList.map((wspace, i) => {
              return (
                <option value={wspace.id} key={i}>
                  {wspace.name}
                </option>
              );
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
          />
        );
      })}
      {/* <Newfolder/> */}
    </>
  );
});
export default Worksidebar;
