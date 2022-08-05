import { React, useEffect, useState } from "react";
import { Form, Text, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

function Personmodal() {
  return (
    <>
      <div
        className="modal fade sort-modal"
        id="person_modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-md-8 col-7">
                  <h5>Quick person filter</h5>
                </div>
              </div>
              <p>Filter items and subitems by person</p>
              <div className="persone-icon">
                <ul>
                  <li>
                    <a>
                      <img src="blank-profile.png" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Personmodal;
