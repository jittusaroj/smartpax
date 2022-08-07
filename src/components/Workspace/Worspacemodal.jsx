import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../../utils/services";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Worspacemodal(props) {
  const user_data = props.user_data;
  const folderList = props.folderList;
  const [name, setName] = useState(false);
  const Navigate= useNavigate();
  const [description, setDescription] = useState(false);
  const [folder, setFolder] = useState(false);
  const workspace_icon = name[0] ?? "N";

  const saveData = (e) => {
    name != "" && folder != "" &&
      axios
        .post(
          process.env.REACT_APP_LOCAL_API + "/workspace/save",
          {
            name: name,
            description: description,
            isActive: 1,
            user_id: user_data.id,
            folder_id: folder
          },
          {
            "Content-Type": "application/json",
          }
        )
        .then((data) => {
          notify("Successfully updated", "success");
       
        
          props.setReloader("H");
        });
      
      
  };


 

  return (
    <>
      {/* Workspace Modal */}

      <div
        className="modal fade border-0"
        id="addworkspace"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-right-fixed">
          <div className="modal-content">
            <div className="modal-header b-0">
              <h6 className="modal-title" id="exampleModalLabel">
                ADD DATASETS
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body essen-section">
              <center>
                <div
                  className="box"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "15px",
                    background: "#ff9800",
                  }}
                >
                  <span style={{ color: "white", fontSize: "60px" }}>
                    {workspace_icon.toUpperCase()}
                  </span>
                </div>
              </center>

              <Form.Label>Datasets Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required="required"
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Label className="mt-2">Datasets Description</Form.Label>
              <Form.Control as="textarea" rows={4}
                
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form className="mt-4">
                <Form.Select aria-label="Folder selection" onChange={(e) => setFolder(e.target.value)}>
                  <option className="mt-2" value="">Select</option>
                  {folderList.map((folder, key) => {
                    return <option key={key} className="mt-2" value={folder.id}>{folder.name}</option>
                  })}
                  </Form.Select>
              </Form>

              {/* <p className="mt-4">Privacy</p>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-2 mt-2">
                  <Form.Check
                    inline
                    label="Open"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    value="1"
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="Closed"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    value="2"
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </div>
              ))}

              <p>Every team member in the account can join.</p> */}
              <br/><br/>

              <div className="float-right">
                <span
                  className="me-4"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </span>
                <button className="btn btn-primary" onClick={saveData}>
                  Create Datasets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Worspacemodal;
