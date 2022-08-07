import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../../../utils/services";
import { FaEllipsisH, FaTrash } from "react-icons/fa";
import Removecolumn from "./Removecolumn";

function ColumnData(props) {
  const data = JSON.parse(localStorage.getItem("user"));
  const workspace_id = props.workspace_id;
  const [reload, setReload] = useState(false);
  const gName = props.columnData.name ?? props.columnData.type;
  const [name, setName] = useState("");
  useEffect(() => {
    setName(gName);
  }, [gName, reload]);

  const saveGroup = (e) => {
    if (e.key === "Enter") {
      axios
        .put(
          process.env.REACT_APP_LOCAL_API + "/columns/" + props.column_id,
          {
            name: name,
            user_id: data.id,
            workspace_id: workspace_id,
            isActive: 1,
          },
          {
            "Content-Type": "application/json",
          }
        )
        .then((data) => {
          console.log(data);

          notify("Successfully updated", "success");
          setReload(true);
        });
    }
  };
  return (
    <>
      <div className="head dropdown-column">
        <span
          className="value"
          style={{
            textAlign: "left",
            marginTop: "-10px",
          }}
        >
          <input
            className="value border-0"
            type="text"
            placeholder="NEW GROUP2"
            onChange={(e) => setName(e.target.value)}
            defaultValue={name}
            onKeyPress={(e) => saveGroup(e)}
          />
        </span>
        <Removecolumn />
      </div>
    </>
  );
}
export default ColumnData;
