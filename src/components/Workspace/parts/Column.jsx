import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../../../utils/services";
import ColumnModal from "./ColumnModal";
import ColumnData from "./ColumnData";

function Column(props) {
  const user_data = props.user_data;
  const workspace_id = props.workspace_id;
  // const total_columns = localStorage.getItem("columns" + workspace_id) ?? 0;

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

  // For columns.
  const [cells, setCells] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_LOCAL_API + "/cells/list/" + workspace_id, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setCells(res.data);
      });
  }, []);

  // For Group Name.
  const gName = props.group_data.name;
  const [name, setName] = useState("");
  useEffect(() => {
    setName(gName);
  }, [gName]);
  const saveGroup = (e) => {
    if (e.key === "Enter") {
      axios
        .put(
          process.env.REACT_APP_LOCAL_API + "/group/" + props.group_id,
          {
            name: name,
            user_id: user_data.id,
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
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
              {/* <li>
                <a
                  className="dropdown-item"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Another Drop
                </a>
              </li> */}
              <li>
                <a className="dropdown-item" href="#">
                  Rename Group
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="head-section blue-section d-flex">
          <div className="head first-head">
            <span
              className="value first-col first-text font-16"
              style={{
                textAlign: "left",
                marginTop: "-10px",
              }}
            >
              <input
                className="value first-col first-text pink-text font-16 border-0"
                type="text"
                placeholder="NEW GROUP"
                onChange={(e) => setName(e.target.value)}
                defaultValue={name}
                onKeyPress={(e) => saveGroup(e)}
              />
            </span>
          </div>
          {columns.map((column, i) => {
            return (
              <ColumnData columnData={column} workspace_id={workspace_id} column_id={column.id} key={i} />
            );
          })}

          <a  data-bs-toggle="modal"  data-bs-target="#column-modal" className="plus-right1">
            <i className="fa fa-plus-circle"></i>
          </a>
        </div>
      </div>
      <ColumnModal workspace_id={workspace_id} />
    </>
  );
}
export default Column;
