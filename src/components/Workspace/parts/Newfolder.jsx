import { React, useEffect, useState } from "react";
import axios from "axios";
import { Form, Text } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "react-bootstrap/Accordion";
import { notify } from "../../../utils/services";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { FaEllipsisH, FaEllipsisV, FaFolder } from "react-icons/fa";
// import Card from "react-bootstrap/Card";
// import { FaChevronDown } from "react-icons/fa";

function Newfolder(props) {
  const folder_data = props.folder_data;
  const [workspaceList, setWorkspaceList] = useState([]);
  let no_ws = "";
  const saveFolder = (title) => {
    // if (e.key === "Enter") {
      axios
        .put(
          process.env.REACT_APP_LOCAL_API + "/folder/" + folder_data.id,
          {
            name: title,
            isActive: 1
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
      });
  }, []);

  if(workspaceList.length==0) {
    no_ws = <p><i>No Workspace</i></p>
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
      .then((data) => {
        notify("Deleted successfully", "success");
     });
  };
  // function CustomToggle({ children, eventKey }) {
  //   const decoratedOnClick = useAccordionButton(eventKey, () =>
  //     console.log("totally custom!")
  //   );

  //  {/* <FaChevronDown size='15'/> */}
  //   return (
      
       
  //     <Form>
  //       <Form.Control
  //         type="text"
  //         placeholder="New Folder" defaultValue="New Folder"
  //         className="border-0"
  //         onClick={decoratedOnClick}
  //         style={{ background: "transparent", color: "black" }}
  //       />
  //       {children}
  //     </Form>
  //   );
  // }

  return (
    <>
    <div style={{display: "flex"}}>
      <span className="f-color my-2"><FaFolder/></span>
            <Form.Control
              type="text"
              placeholder="New Folder"
              defaultValue={folder_data.name}
              className="border-0 shadow-0"
              onChange={(e) => saveFolder(e.target.value)}
              style={{ background: "transparent", color: "black"}}
            />
          
          <div className="dropdown-sec">
          <div className="dropdown">
           
            <span
              
              href="#"
           
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
           <FaEllipsisH/>
            </span>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            
              <li>
                <a className="dropdown-item" href="#"  onClick={deleteFolder}>
                 Delete Folder
                </a>
              </li>
            </ul>
          </div>
        </div>
              </div>
          <div aria-label="Workspace selection" className="border-0 ms-2">
            {no_ws}
            {workspaceList.map((wspace, i) => {
              return <p onClick={(e) => props.changeData(wspace.id)} value={wspace.id} key={i}>{wspace.name}</p>
            })}
          </div>
        

    </>
  );
}
export default Newfolder;
