import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../utils/services";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
// import Collapse from "react-bootstrap/Collapse";

import Footer from "./Footer";
import Sidebar from "../components/Sidebar";
import "../Css/Main.css";
import "../Css/Workspace.css";
import Workspacetable from "../components/Workspace/Workspacetable";
import Topheader from "../components/Workspace/Topheader";
import Worspacemodal from "../components/Workspace/Worspacemodal";
import Worksidebar from "../components/Workspace/Worksidebar";
import Personmodal from "../components/Header/Personmodal";
import Sortmodal from "../components/Header/Sortmodal";
import Filtermodal from "../components/Header/Filtermodal";
import { FaCheckSquare, FaEyeSlash } from "react-icons/fa";

function Workspace(props) {
  const user_data = JSON.parse(localStorage.getItem("user"));
  const workspace_id_tbl = localStorage.getItem("workspace");
  const workspace_id = workspace_id_tbl; //props.workspace_id;
  // const workspace_id_tbl = localStorage.getItem("workspace")??props.match.params.workspace_id;
  const [folderList, setFolderList] = useState([]);
  const [list, setList] = useState([]);

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

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_LOCAL_API + "/folder/list/" + user_data.id, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setFolderList(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_LOCAL_API +
          "/group/list/" +
          user_data.id +
          "/" +
          workspace_id_tbl,
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        setList(res.data);
      });
  }, []);

  const [wslist, setWslist] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_LOCAL_API + "/workspace/" + workspace_id_tbl, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setWslist(res.data);
      });
  }, []);

  const addNewGroup = () => {
    axios
      .post(
        process.env.REACT_APP_LOCAL_API + "/group/save",
        {
          total_rows: 1,
          workspace_id: workspace_id_tbl,
          user_id: user_data.id,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((data) => {
        console.log(data);
        notify("New Item Group added.", "success");
        window.location.reload();
      });
  };
  return (
    <>
      <div className="wrapper">
        <Sidebar user_data={user_data} />
        <div className="page-wrapper ">
          <div className="page-content">
            <div className="row">
              <div
                className="col-12 col-lg-2 col-md-2 col-sm-12 bg-lightgray custom-user-sidebar"
                style={{ background: "rgb(233 236 240 / 25%)" }}
              >
                <Worksidebar
                  folderList={folderList}
                  setFolderList={setFolderList}
                  workspace={wslist}
                  user_data={user_data}
                />
              </div>

              <div className="col-12 col-lg-10 col-md-10 col-sm-12">
                <div className="row">
                  <div className="col-12 col-lg-12 col-md-12 col-sm-12 inbox1">
                    <div className="board-section">
                      <Topheader workspace={wslist} user_data={user_data} />

                      <div
                        className="card-body"
                        style={{ padding: "1rem 0rem" }}
                      >
                        <div>
                          <div className="top-filter-section">
                            <ul className="filter">
                              <li className="">
                                <Button
                                  variant="primary"
                                  onClick={addNewGroup}
                                  style={{ marginTop: "-5px" }}
                                >
                                  New Group
                                </Button>
                              </li>
                              <li className=" ms-1">
                                <div className="d-lg-none d-md-none d-sm-block d-xs-block mb-d-inline">
                                  <button className="btn ms-4 border-1">
                                    <i className="fa fa-search"></i>
                                  </button>
                                </div>
                              </li>
                              <li
                                className="d-none d-lg-block d-md-block  "
                                style={{}}
                              >
                                <div className="d-flex search-field ">
                                  <div className="search-btn">
                                    <i className="fa fa-search"></i>
                                  </div>
                                  <input
                                    className="form-control"
                                    defaultValue=""
                                    placeholder="search.."
                                    name=""
                                    style={{ marginTop: "-10px" }}
                                  />
                                </div>
                              </li>
                              <li className="">
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#person_modal"
                                >
                                  <i className="fa fa-user-circle f-color"></i>
                                  <span className="ms-2 f-color">Person</span>
                                </a>
                              </li>
                              {/* <li className="">
                                <a
                                  data-bs-toggle="collapse"
                                  href="#megamenu"
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls="collapseExample"
                                >
                                  <span>
                                    <i className="fa fa-filter"></i>
                                  </span>{" "}
                                  Filter{" "}
                                </a>
                              </li> */}

                              <li>
                                {/* 
                                <span
                                  data-bs-toggle="modal"
                                  data-bs-target="#sort"
                                >
                                  <i className="fa fa-filter f-color"></i>
                                  <span className="ms-2 f-color">Filter</span>
                                </span> */}
                                <Filtermodal
                                  groupList={list}
                                  setgroupList={setList}
                                  nameList={list}
                                  setnameList={setList}
                                  columns={columns}
                                  setColumns={setColumns}
                                />
                              </li>
                              <li className="mx-4">
                                <span
                                  data-bs-toggle="modal"
                                  data-bs-target="#sort"
                                >
                                  <i className="fa fa-filter f-color"></i>
                                  <span className="ms-2 f-color">Sort</span>
                                </span>
                              </li>

                              <li className="" style={{marginTop:'-7px'}}>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant=""
                                    id="dropdown-basic"
                                  >
                                    <FaEyeSlash className="f-color" />
                                    <span className="ms-2 f-color">Hide</span>
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu style={{ width: "15rem" }}>
                                    <div style={{ padding: "2px 5px" }}>
                                      <Form.Control
                                        className=""
                                        defaultValue=""
                                        placeholder="Search.."
                                        name=""
                                        style={{ height: "32px" }}
                                      />

                                      <p className="mt-1">
                                        All Columns
                                        <span className="float-end">
                                          <Form.Check type="checkbox" />
                                        </span>
                                      </p>
                                    
                                      <p className="mt-1">
                                        Person{" "}
                                        <span className="float-end">
                                          <Form.Check type="checkbox" />
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </li>
                            </ul>
                          </div>

                          <br />

                          {list.map((group, i) => {
                            return (
                              <Workspacetable
                                key={i}
                                workspace_id={group.workspace_id}
                                group_id={group.id}
                                group_data={group}
                                user_data={user_data}
                                columns={columns}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Personmodal />
        <Sortmodal />

        <Worspacemodal folderList={folderList} user_data={user_data} />

        <Footer />
      </div>
    </>
  );
}
export default Workspace;
