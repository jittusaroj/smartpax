import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../../../utils/services";


function ColumnData(props) {
  const data = JSON.parse(localStorage.getItem("user"));
  const workspace_id = props.workspace_id;

  const gName = props.columnData.name??props.columnData.type;
  const [name, setName] = useState("");
  useEffect(() => {
    setName(gName);
  }, [gName]);

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
          //window.location.reload();
        });
    }
  };

  return (
    <>
        <div className="head">
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
        </div>
        {/* <div className="head">
            <span className="value">Week</span>
        </div> */}
    </>
  );
}
export default ColumnData;
