import { React, useEffect, useState } from "react";
import axios from "axios";
// import Dropdown from "react-bootstrap/Dropdown";
// import { Form } from "react-bootstrap";
import Cells from "./Cells";

function Row(props) {
  const workspace_id = props.workspace_id;
  const user_data = props.user_data;
  // const total_columns = localStorage.getItem("columns" + workspace_id); 
  // const rowCallback = (cb) => {
  //   return cb();
  // };

  // For columns.
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_LOCAL_API + "/columns/list/" + workspace_id, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setColumns(res.data);
      });
  }, []);

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
    if (e.key === "Enter") {
      if (cell!="" && cellId!="") {
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
      } else {
        axios
          .post(
            process.env.REACT_APP_LOCAL_API + "/cells/save",
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
            setCellId(data.data.uData.id);
          });
      }
    }
  };

  return (
    <>
      <div className="d-flex">
        <div className="dropdown-sec">
          <div className="dropdown">
            <a
              className="btn btn-primary btn-xs dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {" "}
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Collapse this group
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Collapse All group
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Select all items
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add Group
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Another Drop
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Rename Group
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex body-section blue-section">
          <div className="body1 first-head">
            {/* <span className="value first-col">ABC</span> */}
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

          {/* {
          rowCallback(() => {
              const row = [];
              for (var i = 1; i <= total_columns; i++) {
                row.push(<div key={i} className="body1">
                <span className="value">
                  <Cells type="number"/>
                  {/* <input className="" name="" id="textfield1" defaultValue="1" /> * /}
                </span>
              </div>);
              }
              return row;
            })
          } */}

        </div>
      </div>
    </>
    );
  }
  export default Row;