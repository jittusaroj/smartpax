import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../utils/services";
import Footer from "./Footer";
import Sidebar from "../components/Sidebar";
import "../Css/Main.css";
import "../Css/Workspace.css";
import Dropdown from "react-bootstrap/Dropdown";
import Workspacetable from "../components/Workspace/Workspacetable";
import Topheader from "../components/Workspace/Topheader";
import Worspacemodal from "../components/Workspace/Worspacemodal";
import Worksidebar from "../components/Workspace/Worksidebar";
import Button from 'react-bootstrap/Button';

function Workspace(props) {
  const user_data = JSON.parse(localStorage.getItem("user"));
  const workspace_id_tbl = localStorage.getItem("workspace");
  // const workspace_id_tbl = localStorage.getItem("workspace")??props.match.params.workspace_id;

  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_LOCAL_API + "/group/list/" + user_data.id + "/" + workspace_id_tbl, {
        "Content-Type": "application/json",
      })
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
        <Sidebar />
        <div className="page-wrapper ">
          <div className="page-content">
            <div className="row">
              <div
                className="col-12 col-lg-2 col-md-2 col-sm-12 bg-lightgray custom-user-sidebar"
                style={{ background: "rgb(233 236 240 / 25%)" }}
              >
                <Worksidebar workspace={wslist} user_data={user_data} />
              </div>

              <div className="col-12 col-lg-10 col-md-10 col-sm-12">
                <div className="row">
                  <div className="col-12 col-lg-12 col-md-12 col-sm-12 inbox">
                    <div className="board-section">
                      <Topheader workspace={wslist} />

                      <div
                        className="card-body"
                        style={{ padding: "1rem 0rem" }}
                      >
                        <div>
                          <div className="top-filter-section">
                            <ul className="filter">
                              {/* <li className="mt-1 mx-4">
                              <i className="fa fa-home fs-6"></i> Main Table
                              </li> */}
                              <li className="me-5">
                              <Button variant="primary" onClick={addNewGroup}>Add New Group</Button>
                               
                                {/* <Dropdown>
                                  <Dropdown.Toggle
                                    variant="primary"
                                    id="dropdown-basic"
                                  >
                                    New item
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item onClick={addNewGroup}>
                                      New group of Items
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown> */}
                              </li>
                              <li className=" ms-5" >
                                <div className="d-lg-none d-md-none d-sm-block d-xs-block mb-d-inline">
                                  <button className="btn ms-4 border-1">
                                    <i className="fa fa-search"></i>
                                  </button>
                                </div>
                              </li>
                              <li className="d-none d-lg-block d-md-block  " style={{marginLeft:"18rem"}}>
                                <div className="d-flex search-field  ms-4">
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
                                  <i className="fa fa-user-circle"></i> Person
                                </a>
                              </li>
                              <li className="">
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
                              </li>
                              <li className="mx-4">
                                <span
                                  data-bs-toggle="modal"
                                  data-bs-target="#sort"
                                >
                                  <i className="fa fa-filter font-20"></i>
                                </span>{" "}
                                Sort
                              </li>


                             
                            </ul>
                          </div>

                          <br />

                          {list.map((workspace_id, i) => {
                            return (
                              <Workspacetable
                                key={i}
                                workspace_id={workspace_id.workspace_id}
                                group_id={workspace_id.id}
                                group_data={workspace_id}
                                user_data={user_data}
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

        <Worspacemodal />

        <Footer />
      </div>
    </>
  );
}
export default Workspace;
