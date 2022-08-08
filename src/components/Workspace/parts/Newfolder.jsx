import {
  React,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import axios from "axios";
import { Form, Text } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import { notify } from "../../../utils/services";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import {
  FaArrowDown,
  FaCaretDown,
  FaChevronDown,
  FaEdit,
  FaEllipsisH,
  FaEllipsisV,
  FaFile,
  FaFolder,
  FaPlus,
  FaTrash,
} from "react-icons/fa";

const Newfolder = forwardRef((props, ref) => {
  const folder_data = props.folder_data;
  const [reload, setReload] = useState();
  const [workspaceList, setWorkspaceList] = useState([]);
  let no_ws = "";
  useImperativeHandle(ref, () => ({
    secondAlert() {
      setReload(true);
    },
  }));
  const saveFolder = (title) => {
    // if (e.key === "Enter") {
    axios
      .put(
        process.env.REACT_APP_LOCAL_API + "/folder/" + folder_data.id,
        {
          name: title,
          isActive: 1,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((data) => {
        // notify("Successfully updated", "success");
      });
    // }
  };

  useEffect(() => {
  
    axios
      .get(process.env.REACT_APP_LOCAL_API + "/workspace/list/" + props.user_data.id + "/" + folder_data.id, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setWorkspaceList(res.data);
      })

  
  }, [reload]);

  if(workspaceList.length==0) {
    no_ws = <p><i>No Workspace</i></p>
  }
  
  // useEffect(() => {
  //   setInterval(() => {
  //     axios
  //       .get(
  //         process.env.REACT_APP_LOCAL_API +
  //           "/workspace/list/" +
  //           props.user_data.id +
  //           "/" +
  //           folder_data.id,
  //         {
  //           "Content-Type": "application/json",
  //         }
  //       )
  //       .then((res) => {
  //         setWorkspaceList(res.data);
  //       });
  //   }, 1000);
  // }, [reload]);

  if (workspaceList.length == 0) {
    no_ws = (
      <p>
        <i>No Workspace</i>
      </p>
    );
  }

  const deleteFolder = () => {
    axios
      .delete(
        process.env.REACT_APP_LOCAL_API + "/folder/" + folder_data.id,
        {},
        {
          "Content-Type": "application/json",
        }
      )
      .then((data, e) => {
        notify("Deleted successfully", "success");
      });
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("accordion!")
    );

    return (
      <>
        <div style={{ display: "flex" }} className="dropdown-sec">
          <span className="f-color my-2" onClick={decoratedOnClick}>
            <FaCaretDown />
          </span>
          <Form.Control
            type="text"
            placeholder="New Folder"
            defaultValue={folder_data.name}
            className="border-0 shadow-0"
            onChange={(e) => saveFolder(e.target.value)}
            style={{ background: "transparent", color: "black" }}
          />
          <div className="dropdown-sec mt-2">
            <div className="dropdown">
              <span
                href="#"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaEllipsisH />
              </span>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a
                    className="dropdown-item"
                    onChange={(e) => saveFolder(e.target.value)}
                  >
                    {" "}
                    <FaEdit /> Rename Folder
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#" onClick={deleteFolder}>
                    <FaTrash /> Delete Folder
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#addworkspace"
                  >
                    <FaPlus /> Add Datasets
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {children}
        </div>
      </>
    );
  }

  return (
    <>
      <Accordion defaultActiveKey="0">
        <>
          <>
            <CustomToggle eventKey="0"></CustomToggle>
          </>
          <Accordion.Collapse eventKey="0">
            <>
              <div aria-label="Workspace selection" className="border-0 ms-4">
                {no_ws}
                {workspaceList.map((wspace, i) => {
                  return (
                    <p
                      onClick={(e) => props.changeData(wspace.id)}
                      value={wspace.id}
                      key={i}
                    >
                      {<FaFile className="f-color" />} {wspace.name}
                    </p>
                  );
                })}
              </div>
            </>
          </Accordion.Collapse>
        </>
      </Accordion>
    </>
  );
});
export default Newfolder;
