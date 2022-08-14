import { React, useEffect, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

function Cells(props) {
  let select_data_class;

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
    .get(process.env.REACT_APP_LOCAL_API + "/cells/list/" + props.workspace_id + "/" + props.group_id + "/" + props.column_id + "/" + props.row_id, {
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
  const saveCell = (value) => {
    getCell(true);
    if (cell!="" && cellId!="") {
      axios
        .put(
          process.env.REACT_APP_LOCAL_API + "/cells/" + cellId,
          {
            name: value,
            user_id: props.user_data.id,
            workspace_id: props.workspace_id,
            group_id: props.group_id,
            column_id: props.column_id,
            row_id: props.row_id,
            isActive: 1,
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
            group_id: props.group_id,
            column_id: props.column_id,
            row_id: props.row_id,
            isRow: false,
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
  };
  


  const selection_options = [
    ["gray", ""],
    ["green", "DONE"],
    ["orange", "WORKING ON IT"],
    ["red", "STUCK"],
    ["black", "NO GO"],
  ];

  if (props.type == "status") {
    let bg_class = "bg-secondary";
    selection_options.map((selected_data, i) => {
      if (selected_data[1] == cell) {
        bg_class = "bg-" + selected_data[0];
      }
    });
    return (
      <>
        <Form>
          <Form.Select
            value={cell}
            aria-label=""
            className={bg_class}
            onChange={(e) => saveCell(e.target.value)}
          >
            {selection_options.map((select_data, i) => {
              select_data_class = "mt-2 bg-" + select_data[0] + " text-white";
              return (
                <option key={i} className={select_data_class}>
                  {" "}
                  {select_data[1]}
                </option>
              );
            })}
          </Form.Select>
        </Form>
      </>
    );
  } else {
    return (
      <>
        <Form.Control
          type={props.type}
          placeholder={props.type}
          id="textfield1"
          defaultValue={cell}
          onMouseOut={(e) => saveCell(e.target.value)}
        />
      </>
    );
  }
}
export default Cells;
