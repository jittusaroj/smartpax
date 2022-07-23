import { React, useEffect, useState } from "react";
import { Form, Text, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from 'react-bootstrap/Modal';

function Personmodal() {
   


  return (
    <>
 
 {/* <!--item default modal --> */}
 <div className="modal fade sort-modal" id="person_modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
                        <div className="row">
                           <div className="col-md-8 col-7">
                              <h5>Quick person filter</h5>
                           </div>
                           <div className="col-md-4 col-5">
                              <button className="btn btn-add-group">Save as new View</button>
                           </div>
                        </div>
                        <p>Filter items and subitems by person</p>
                        <div className="persone-icon">
                           <ul>
                              <li>
                                 {/* <a><img src="assets/images/per.png" /> </a> */}
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!--person modal--> */}

    </>
  );
}
export default Personmodal;
