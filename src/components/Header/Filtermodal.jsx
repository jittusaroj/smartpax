import { React, useEffect, useState } from "react";
import { Form, Text, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Collapse from "react-bootstrap/Collapse";

function Filtermodal() {
//   const [open, setOpen] = useState(false);

  return (
    <>
      <span data-bs-toggle="modal" data-bs-target="#filter-modal">
      <i className="fa fa-filter"></i> Filter
      </span>
      <div
        className="modal fade"
        id="filter-modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="card card-body">
                <div className="row mb-3">
                  <div className="col-md-8 col-8">
                    <h5>
                      Quick person filter{" "}
                      <small>Showing all of 149 items</small>
                    </h5>
                  </div>
                  <div className="col-md-4 col-4 float-right">
                    <a>Clear All</a>
                    <button className="btn btn-add-group">
                      Save as new View
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <div className="mt-2">Where</div>
                  </div>
                  <div className="col-md-3">
                    <input
                      type="date"
                      className="form-control mt-1"
                      name=""
                      value=""
                    />
                  </div>
                  <div className="col-md-3">
                    <select className="form-control">
                      <option>is</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-control">
                      <option>option1</option>
                    </select>
                  </div>
                  <div className="col-md-1">
                    <div className="mt-2">
                      <a>
                        <i className="fa fa-times"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mt-2">And</div>
                  </div>
                  <div className="col-md-3">
                    <select className="form-control">
                      <option>Column</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-control">
                      <option>Condition</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-control">
                      <option>value</option>
                    </select>
                  </div>
                  <div className="col-md-1">
                    <div className="mt-2">
                      <a>
                        <i className="fa fa-times"></i>
                      </a>
                    </div>
                  </div>
                  {/* <div className="col-md-12">
                    <a>+ Add new filter</a>
                  </div> */}
                  <div className="filter-section">
                    <h5 className="mb-3 mt-3"> All columns </h5>
                    <div className="d-flex">
                      <div className="filter-options">
                        <div className="filter-heading">Group</div>
                        <ul>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                        </ul>
                      </div>
                      <div className="filter-options">
                        <div className="filter-heading">Group</div>
                        <ul>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                        </ul>
                      </div>
                      <div className="filter-options">
                        <div className="filter-heading">Group</div>
                        <ul>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle
            id="dropdown-autoclose-true"
            style={{
              backgroundColor: "transparent",
              border: "0px solid",
              color: "black",
              marginTop: "-6px",
            }}
          >
           <i className="fa fa-filter"></i> Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">  
              <div className="card card-body">
                                             <div className="row mb-3">
                                                <div className="col-md-8 col-8">
                                                   <h5>Quick person filter <small>Showing all of 149 items</small></h5>
                                                </div>
                                                <div className="col-md-4 col-4 float-right">
                                                   <a>Clear All</a>
                                                   <button className="btn btn-add-group">Save as new View</button>
                                                </div>
                                             </div>
                                             <div className="row">
                                                <div className="col-md-2">
                                                   <div className="mt-2">Where</div>
                                                </div>
                                                <div className="col-md-3">
                                                   <input type="date" className="form-control" name="" value="" />
                                                </div>
                                                <div className="col-md-3">
                                                   <select className="form-control">
                                                      <option>is</option>
                                                   </select>
                                                </div>
                                                <div className="col-md-3">
                                                   <select className="form-control">
                                                      <option>option1</option>
                                                   </select>
                                                </div>
                                                <div className="col-md-1">
                                                   <div className="mt-2"><a><i className="fa fa-times"></i></a></div>
                                                </div>
                                                <div className="col-md-2">
                                                   <div className="mt-2">And</div>
                                                </div>
                                                <div className="col-md-3">
                                                   <select className="form-control">
                                                      <option>Column</option>
                                                   </select>
                                                </div>
                                                <div className="col-md-3">
                                                   <select className="form-control">
                                                      <option>Condition</option>
                                                   </select>
                                                </div>
                                                <div className="col-md-3">
                                                   <select className="form-control">
                                                      <option>value</option>
                                                   </select>
                                                </div>
                                                <div className="col-md-1">
                                                   <div className="mt-2"><a><i className="fa fa-times"></i></a></div>
                                                </div>
                                                <div className="col-md-12">
                                                   <a>+ Add new filter</a>
                                                </div>
                                                <div className="filter-section">
                                                   <h5 className="mb-3 mt-3"> All columns </h5>
                                                   <div className="d-flex">
                                                      <div className="filter-options">
                                                         <div className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div className="filter-options">
                                                         <div className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div className="filter-options">
                                                         <div className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                     
                                                     
                                                     
                                                   </div>
                                                </div>
                                             </div>
             </div>
             </Dropdown.Item>
           
            
        
          </Dropdown.Menu>
        </Dropdown> */}

      {/* <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       <i className="fa fa-filter"></i> Filter
      </a> */}

      {/* <Collapse in={open}>
        <div id="example-collapse-text">

        <div className="card card-body">
                                             <div className="row mb-3">
                                                <div className="col-md-8 col-8">
                                                   <h5>Quick person filter <small>Showing all of 149 items</small></h5>
                                                </div>
                                                <div className="col-md-4 col-4 float-right">
                                                   <a>Clear All</a>
                                                   <button className="btn btn-add-group">Save as new View</button>
                                                </div>
                                             </div>
                                             <div className="row">
                                                <div className="col-md-2">
                                                   <div className="mt-2">Where</div>
                                                </div>
                                                <div className="col-md-3">
                                                   <input type="date" className="form-control" name="" value="" />
                                                </div>
                                                <div className="col-md-3">
                                                   <select className="form-control">
                                                      <option>is</option>
                                                   </select>
                                                </div>
                                                <div className="col-md-3">
                                                   <select className="form-control">
                                                      <option>option1</option>
                                                   </select>
                                                </div>
                                                <div className="col-md-1">
                                                   <div className="mt-2"><a><i className="fa fa-times"></i></a></div>
                                                </div>
                                                <div className="col-md-2">
                                                   <div className="mt-2">And</div>
                                                </div>
                                                <div className="col-md-3">
                                                   <select className="form-control">
                                                      <option>Column</option>
                                                   </select>
                                                </div>
                                                <div className="col-md-3">
                                                   <select className="form-control">
                                                      <option>Condition</option>
                                                   </select>
                                                </div>
                                                <div className="col-md-3">
                                                   <select className="form-control">
                                                      <option>value</option>
                                                   </select>
                                                </div>
                                                <div className="col-md-1">
                                                   <div className="mt-2"><a><i className="fa fa-times"></i></a></div>
                                                </div>
                                                <div className="col-md-12">
                                                   <a>+ Add new filter</a>
                                                </div>
                                                <div className="filter-section">
                                                   <h5 className="mb-3 mt-3"> All columns </h5>
                                                   <div className="d-flex">
                                                      <div className="filter-options">
                                                         <div className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div className="filter-options">
                                                         <div className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div className="filter-options">
                                                         <div className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div className="filter-options">
                                                         <div className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div className="filter-options">
                                                         <div className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div className="filter-options">
                                                         <div className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                            <li>Top group <span className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
             </div>

       
        </div>
      </Collapse> */}
    </>
  );
}
export default Filtermodal;
