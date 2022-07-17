import { React, useEffect, useState } from "react";
import axios from "axios";
import Row from "./parts/Row";
import Column from "./parts/Column";

function Workspacetable(props) {
  const user_data = props.user_data;
  const workspace_id = props.workspace_id;
  const group_id = props.group_id;

  const total_rows = props.group_data.total_rows??1; //localStorage.getItem("rows" + group_id) ?? 1;
  const tableCallback = (cb) => {
    return cb();
  };
  const addNewRow = () => {
    axios
    .put(
      process.env.REACT_APP_LOCAL_API + "/group/" + group_id,
      {
        total_rows: parseInt(total_rows) + 1,
        user_id: user_data.id,
        workspace_id: workspace_id,
        isActive: 1,
      },
      {
        "Content-Type": "application/json",
      }
    )
    .then((data) => {
      console.log(data)
      // localStorage.setItem("rows" + group_id, parseInt(total_rows) + 1);
      window.location.reload();
    });
  };
  return (
    <>
      <div className="overflow-scroll1 penicillium-section">
        <Column
          workspace_id={workspace_id}
          group_id={group_id}
          group_data={props.group_data}
          user_data={user_data}
        />
        <div id="sortable">
          {tableCallback(() => {
            const row = [];
            for (var i = 1; i <= total_rows; i++) {
              row.push(<Row key={props.group_data.id+"row"+i} workspace_id={workspace_id} group_data={props.group_data} user_data={user_data} />);
            }
            return row;
          })}
        </div>

        <a onClick={addNewRow} className="plus-left">
          <i className="fa fa-plus-circle"></i>
        </a>
      </div>
    </>
  );
}
export default Workspacetable;
