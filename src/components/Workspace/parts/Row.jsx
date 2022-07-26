import { React, useEffect, useState } from "react";
import axios from "axios";
// import Dropdown from "react-bootstrap/Dropdown";
// import { Form } from "react-bootstrap";
import Cells from "./Cells";
import { notify } from "../../../utils/services";

function Row(props) {
  // const popupBox = ({ handleDeleteTrue }) => {
  //   return (
  //     <div className="modal">
  //       <div className="modal_box">
  //         <p>You sure you wanna delete?</p>
  //         <button className="modal_buttonCancel">Cancel</button>
  //         <button onClick={handleDeleteTrue} className="modal_buttoDelete">
  //           Confirm
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  const workspace_id = props.workspace_id;
  const user_data = props.user_data;
  // const total_columns = localStorage.getItem("columns" + workspace_id); 
  // const rowCallback = (cb) => {
  //   return cb();
  // };

  // const [popup, setPopup] = useState({
  //   show: false, // initial values set to false and null
  //   id: null,
  // });
  // // This will show the Cofirmation Box
  // const handleDelete = () => {
  //   setPopup({
  //     show: true,
  //     id: "1",
  //   });
  // };
  // // This will perform the deletion and hide the Confirmation Box
  // const handleDeleteTrue = () => {
  //   if (popup.show && popup.id) {
  //     // let filteredData = todos.filter((todo) => todo.id !== popup.id);
  //     // setToDos(filteredData);
  //     setPopup({
  //       show: false,
  //       id: null,
  //     });
  //   }
  // };
  // // This will just hide the Confirmation Box when user clicks "No"/"Cancel"
  // const handleDeleteFalse = () => {
  //   setPopup({
  //     show: false,
  //     id: null,
  //   });
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
    // axios
    // .put(
    //   process.env.REACT_APP_LOCAL_API + "/cells/" + cellId,
    //   {
    //     name: value,
    //     user_id: props.user_data.id,
    //     workspace_id: props.workspace_id,
    //     group_id: props.group_data.id,
    //     column_id: 0,
    //     row_id: props.id,
    //     isRow: true,
    //     isActive: true,
    //   },
    //   {
    //     "Content-Type": "application/json",
    //   }
    // )
    // .then((data) => {
    //   setCell(value);
    // });
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
      // } else {
        // axios
        //   .post(
        //     process.env.REACT_APP_LOCAL_API + "/cells/save",
        //     {
        //       name: value,
        //       user_id: props.user_data.id,
        //       workspace_id: props.workspace_id,
        //       group_id: props.group_data.id,
        //       column_id: 0,
        //       row_id: props.id,
        //       isRow: true,
        //       isActive: true,
        //     },
        //     {
        //       "Content-Type": "application/json",
        //     }
        //   )
        //   .then((data) => {
        //     setCell(value);
        //     setCellId(data.data.uData.id);
        //   });
      }

    });
  };

  return (
    <>
      <div className="d-flex">
        <div className="dropdown-sec">
          <div className="dropdown">
          <i className="fa fa-trash" onClick={props.deleteNewRow} aria-hidden="true" style={{color:"red"}}></i>
          {/* {popup.show && (
            <popupBox
              handleDeleteTrue={handleDeleteTrue}
              handleDeleteFalse={handleDeleteFalse}
            />
          )} */}
            {/* <a>Text</a> */}
            {/* <a
              className="btn btn-primary btn-xs dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {" "}
            </a> */}
            {/* <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuLink"
            >
            
              <li>
                <a className="dropdown-item" href="#">
                  Remove Group
                </a>
              </li>
            </ul> */}
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