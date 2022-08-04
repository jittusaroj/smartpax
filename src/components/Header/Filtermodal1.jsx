import { React, useEffect, useState } from "react";
import axios from "axios";
import { Form, Text, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Collapse from "react-bootstrap/Collapse";
import ColumnData from "../Workspace/parts/ColumnData";

function Filtermodal1(props) {
  const filterGroup = props.groupList;
  //const [filterGroup, setFilterGroup] = useState(props.groupList);
  const applyFilter = (groupID) => {
    props.setgroupList(props.groupList.filter(group => group.id==groupID));
  }
  // useEffect(() => {
  //   setFilterGroup(props.groupList);
  // });

  const filterName = props.nameList;

  const applynameFilter = (nameID) => {
    props.setnameList(props.nameList.filter(groupname => groupname.id==nameID));
  }
  return (
    <>
      <span data-bs-toggle="modal" data-bs-target="#filter-modal">
      <i className="fa fa-filter f-color"></i>
        <span className="ms-2 f-color">Filter</span>
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
                  {/* <div className="col-md-4 col-4 float-right">
                    <a>Clear All</a>
                    <button className="btn btn-add-group">
                      Save as new View
                    </button>
                  </div> */}
                </div>
                <div className="row">
                 
                  <div className="filter-section">
                    <h5 className="mb-3 mt-3"> All columns </h5>
                    <div className="d-flex">
                      <div className="filter-options">
                        <div className="filter-heading">Group</div>
                        <ul>
                    
                          {filterGroup.map((group, i) => {
                            return (
                              <li onClick={(e) => applyFilter(group.id)}>
                                {group.name??"New Group"}
                              </li>
                            );
                          })}
                         
                        </ul>
                      </div>
                      <div className="filter-options">
                        <div className="filter-heading">Name</div>
                        <ul>
                        {filterName.map((groupname, i) => {
                            return (
                              <li onClick={(e) => applynameFilter(groupname.id)}>
                                {groupname.name??"Name"}
                              </li>
                            );
                          })}
                          
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

   
    </>
  );
}
export default Filtermodal1;
