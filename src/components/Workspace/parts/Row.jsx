import { React, useEffect, useState } from "react";
import axios from "axios";

import Cells from "./Cells";
import { notify } from "../../../utils/services";

function Row(props) {


  const workspace_id = props.workspace_id;
  const user_data = props.user_data;
 
  let columns = props.columns;
  

  // For cells.
  const [cell, setCell] = useState([]);
  const [cellId, setCellId] = useState([]);
  useEffect(() => {
    getCell(true);
  }, []);
  
  // For Columns First title.
  const getCell = (setData) => {
    let dt = "";
    axios
    .get(process.env.REACT_APP_LOCAL_API + "/cells/list/" + props.workspace_id + "/" + props.group_data.id + "/0/" + props.id, {
      "Content-Type": "application/json",
    })
    .then((res) => {
      let cellData = res.data[0]?res.data[0].name:"";
      if(setData) {
        setCell(cellData);
        setCellId(res.data[0]?res.data[0].id:"");
      }
      dt = cellData;
    });
    return dt;
  };
  const saveCell = (e) => {
    let value = e.target.value;
    
    axios
    .get(process.env.REACT_APP_LOCAL_API + "/cells/list/" + props.workspace_id + "/" + props.group_data.id + "/0/" + props.id, {
      "Content-Type": "application/json",
    })
    .then((res) => {
      let cellData = res.data;

      // if (cell!="" && cellId!="") {
      if(cellData.length != 0) {
        axios
          .put(
            process.env.REACT_APP_LOCAL_API + "/cells/" + cellId,
            {
              name: value,
              user_id: props.user_data.id,
              workspace_id: props.workspace_id,
              group_id: props.group_data.id,
              column_id: 0,
              row_id: props.id,
              isRow: true,
              isActive: true,
            },
            {
              "Content-Type": "application/json",
            }
          )
          .then((data) => {
            setCell(value);
          });
     
      }

    });
  };

  return (
    <>
      <div className="d-flex dropdown-sec">
        <div className="dropdown-sec1">
          <div className="dropdown">
          <i className="fa fa-trash" onClick={props.deleteNewRow} aria-hidden="true" style={{color:"red"}}></i>
        
          </div>
        </div>
        <div className="d-flex body-section blue-section">
          <div className="body1 first-head">
          
            <span
              className="value first-col"
            >
              <input
                className="value first-col first-text border-0"
                type="text"
                placeholder="New Item"
                onKeyDown={(e) => saveCell(e)}
                defaultValue={cell}
              />
            </span>
          </div>
          {columns.map((column, i) => {
            return (
              <div key={i} className="body1">
                <span className="value">
                  <Cells type={column.type} row_id={props.id} workspace_id={props.workspace_id} group_id={props.group_data.id} column_id={column.id} user_data={props.user_data}/>
                </span>
              </div>
            );
          })}

         

        </div>
      </div>
    </>
    );
  }
  export default Row;