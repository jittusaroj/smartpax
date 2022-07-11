import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../../utils/services";
import { Form } from "react-bootstrap";

function Worspacemodal() {
  const data = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const workspace_icon = name[0] ?? "N";

  const saveData = () => {
    name != "" &&
      axios
        .post(
          process.env.REACT_APP_LOCAL_API + "/workspace/save",
          {
            name: name,
            isActive: status,
            user_id: data.id,
          },
          {
            "Content-Type": "application/json",
          }
        )
        .then((data) => {
          notify("Successfully updated", "success");
          window.location.reload();
        });
  };

  return (
    <>
      <div
        className="modal fade"
        id="column-modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-right-fixed">
          <div className="modal-content">
            <div className="modal-header b-0">
              <h6 className="modal-title" id="exampleModalLabel">
                Essentials
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body essen-section">
              <div className="row">
                <div className="col-md-6 col-6">
                  <span className="essen-icon bg-light-gn">
                    <img src="status.svg" alt="status" />
                  </span>
                  Status
                </div>
                <div className="col-md-6 col-6">
                  <span
                    className="essen-icon"
                    style={{ background: "rgb(247, 72, 117)" }}
                  >
                    {/* <img src="assets/images/essen/dropdown.svg"> */}
                  </span>
                  Dropdown
                </div>
                <div className="col-md-6 col-6">
                  <span
                    className="essen-icon"
                    style={{ background: "rgb(0, 169, 255)" }}
                  >
                    <img src="text.svg" alt="text" />
                  </span>
                  Text
                </div>
                <div className="col-md-6 col-6">
                  <span
                    className="essen-icon"
                    style={{ background: "rgb(0, 207, 244)" }}
                  >
                    {/* <img src="assets/images/essen/date.svg"> */}
                  </span>
                  Date
                </div>
                <div className="col-md-6 col-6">
                  <span
                    className="essen-icon bg-light-gn"
                    style={{ background: "rgb(255, 204, 0)" }}
                  >
                    {/* <img src="assets/images/essen/person.svg"> */}
                  </span>
                  Person
                </div>
                <div className="col-md-6 col-6">
                  <span
                    className="essen-icon bg-light-gn"
                    style={{ background: "rgb(255, 204, 0)" }}
                  >
                    {/* <img src="assets/images/essen/numeric.svg"> */}
                  </span>
                  Numbers
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <br />
                    <h6>Super Useful</h6>
                    <br />
                  </div>
                  <div className="col-md-6 col-6">
                    <span
                      className="essen-icon"
                      style={{ background: "rgb(0, 169, 255)" }}
                    >
                      {/* <img src="assets/images/essen/subitem.svg"> */}
                    </span>
                    Subitems
                  </div>
                  <div className="col-md-6 col-6">
                    <span
                      className="essen-icon"
                      style={{ background: "rgb(163, 88, 223)" }}
                    >
                      {/* <img src="assets/images/essen/timeline.svg"> */}
                    </span>
                    Timeline
                  </div>
                  <div className="col-md-6 col-6">
                    <span
                      className="essen-icon"
                      style={{ background: "rgb(0, 169, 255)" }}
                    >
                      {/* <img src="assets/images/essen/subitem.svg"> */}
                    </span>
                    Subitems
                  </div>
                  <div className="col-md-6 col-6">
                    <span
                      className="essen-icon"
                      style={{ background: "rgb(163, 88, 223)" }}
                    >
                      {/* <img src="assets/images/essen/timeline.svg"> */}
                    </span>
                    Timeline
                  </div>
                  <div className="col-md-6 col-6">
                    <span
                      className="essen-icon"
                      style={{ background: "rgb(0, 169, 255)" }}
                    >
                      {/* <img src="assets/images/essen/subitem.svg"> */}
                    </span>
                    Subitems
                  </div>
                  <div className="col-md-6 col-6">
                    <span
                      className="essen-icon"
                      style={{ background: "rgb(163, 88, 223)" }}
                    >
                      {/* <img src="assets/images/essen/timeline.svg"> */}
                    </span>
                    Timeline
                  </div>
                  <div className="col-md-6 col-6">
                    <span
                      className="essen-icon"
                      style={{ background: "rgb(0, 169, 255)" }}
                    >
                      {/* <img src="assets/images/essen/subitem.svg"> */}
                    </span>
                    Subitems
                  </div>
                  <div className="col-md-6 col-6">
                    <span
                      className="essen-icon"
                      style={{ background: "rgb(163, 88, 223)" }}
                    >
                      {/* <img src="assets/images/essen/timeline.svg"> */}
                    </span>
                    Timeline
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                ADD WORKSPACE
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

              <Form.Label>Workspace Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Workspace Name"
                required="required"
                onChange={(e) => setName(e.target.value)}
              />

              <p className="mt-4">Privacy</p>
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

              <p>Every team member in the account can join.</p>

              <div className="float-right">
                <span
                  className="me-4"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </span>
                <button className="btn btn-primary" onClick={saveData}>
                  Create Workspace
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
