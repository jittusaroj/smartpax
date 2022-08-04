import { React, useEffect, useState } from "react";
import axios from "axios";
import { Form, Text, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Collapse from "react-bootstrap/Collapse";
import ColumnData from "../Workspace/parts/ColumnData";

function Filtermodal(props) {
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
              <div className="row">
                 <div className="col-md-8 col-6">
                    <h5>Advanced filters
</h5>
                 </div>
                 {/* <div className="col-md-4 col-6">
                    <button className="btn btn-add-group">Save as new View</button>
                 </div> */}
              </div>

             

              <div className="row mb-2 my-4">
              <div className="col-md-2">
              <select className="form-control">
                          <option> Where</option>
                          <option> Date</option>
                       </select>    
                    </div>
              <div className="col-md-3">
                       <select className="form-control">
                          <option> Column</option>
                          <option> Date</option>
                       </select>
                    </div>
                    <div className="col-md-3">
                       <select className="form-control">
                          <option> value</option>
                          <option> Date</option>
                       </select>
                    </div>
                    <div className="col-md-3">
                       <select className="form-control">
                          <option>Condition</option>
                          <option>Descending</option>
                       </select>
                    </div>
                    <div className="col-md-1">
                       <div className="mt-2"> <i className="fa fa-times"  ></i></div>
                    </div>
                 </div>

              {/* <a> + Add new Filter</a> */}
            
             
          

          
            </div>
          </div>
        </div>
      </div>

   
    </>
  );
}
export default Filtermodal;
