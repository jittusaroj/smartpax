import { React, useEffect, useState } from "react";
import Row from "./parts/Row";
import Column from "./parts/Column";

function Workspacetable(props) {
  const data = JSON.parse(localStorage.getItem("user"));
  const workspace_id = props.workspace_id;
  const group_id = props.group_id;

  const total_rows = localStorage.getItem("rows" + group_id) ?? 1;
  const tableCallback = (cb) => {
    return cb();
  };
  const addNewRow = () => {
    localStorage.setItem("rows" + group_id, parseInt(total_rows) + 1);

    window.location.reload();
  };
  return (
    <>
      <div className="overflow-scroll1 penicillium-section">
        <Column
          workspace_id={workspace_id}
          group_id={group_id}
          group_data={props.group_data}
        />
        <div id="sortable">
          {tableCallback(() => {
            const row = [];
            for (var i = 1; i <= total_rows; i++) {
              row.push(<Row key={i} workspace_id={workspace_id} />);
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
