import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../../../utils/services";
import { Form } from "react-bootstrap";
// import Text from "../Columnmodal/Text";
// import Person from "../Columnmodal/Person";
// import Status from "../Columnmodal/Status";
// import Number from "../Columnmodal/Number";
import ColumnType from "../Columnmodal/ColumnType";

function ColumnModal(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  // const total_columns = props.total_columns;

  const addNewColumn = (type) => {
    // localStorage.setItem("columns" + props.workspace_id, parseInt(total_columns) + 1);
    // alert("Selected: "+ type);
    axios
      .post(
        process.env.REACT_APP_LOCAL_API + "/columns/save",
        {
          type: type,
          workspace_id: props.workspace_id,
          user_id: user.id,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((data) => {
        console.log(data);
        notify("New column added.", "success");
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
                  <ColumnType type="status" addNewColumn={addNewColumn} />
                </div>
                <div className="col-md-6 col-6">
                  <span
                    className="essen-icon"
                    style={{ background: "rgb(247, 72, 117)" }}
                  >
                  </span>
                  Dropdown
                </div>
                <div className="col-md-6 col-6">
                  <span
                    className="essen-icon "
                    style={{ background: "rgb(0, 169, 255)" }}
                  >
                    <img src="text.svg" alt="text" />
                   
                  </span>
                  <ColumnType type="text" addNewColumn={addNewColumn} />                
                </div>
                <div className="col-md-6 col-6">
                  <span
                    className="essen-icon"
                    style={{ background: "rgb(0, 207, 244)" }}
                  >
                  </span>
                  Person
                </div>
                <div className="col-md-6 col-6">
                  <span
                    className="essen-icon bg-light-gn"
                    style={{ background: "rgb(255, 204, 0)" }}
                  >
                  </span>
                  <ColumnType type="date" addNewColumn={addNewColumn} />
                </div>
                <div className="col-md-6 col-6">
                  <span
                    className="essen-icon bg-light-gn"
                    style={{ background: "rgb(255, 204, 0)" }}
                  >
                  </span>
                  <ColumnType type="number" addNewColumn={addNewColumn} />
                </div>

                
                {/* <div className="row">
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
                    </span>
                    Formula
                  </div>
                  
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ColumnModal;