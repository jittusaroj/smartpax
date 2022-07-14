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

function Workspace() {
  const user = JSON.parse(localStorage.getItem("user"));

  localStorage.setItem("workspace", 1);
  const workspace_id = 1;
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_LOCAL_API + "/group/list/" + user.id, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setList(res.data);
      });
  }, []);

  const saveData = () => {
    axios
      .post(
        process.env.REACT_APP_LOCAL_API + "/group/save",
        {
          // name: "",
          workspace_id: workspace_id,
          user_id: user.id,
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
                <Worksidebar />
              </div>

              <div className="col-12 col-lg-10 col-md-10 col-sm-12">
                <div className="row">
                  <div className="col-12 col-lg-12 col-md-12 col-sm-12 inbox">
                    <div className="board-section">
                      <Topheader />

                      <div
                        className="card-body"
                        style={{ padding: "1rem 0rem" }}
                      >
                        <div>
                          <div className="top-filter-section">
                            <ul className="filter">
                              <li>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="primary"
                                    id="dropdown-basic"
                                  >
                                    New item
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item onClick={saveData}>
                                      New group of Items
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </li>
                              <li>
                                <div className="d-lg-none d-md-none d-sm-block d-xs-block mb-d-inline">
                                  <button className="btn ms-4 border-1">
                                    <i className="fa fa-search"></i>
                                  </button>
                                </div>
                              </li>
                              <li className="d-none d-lg-block d-md-block">
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
                              <li>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#person_modal"
                                >
                                  <i className="fa fa-user-circle"></i> Person
                                </a>
                              </li>
                              <li>
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
                              <li>
                                <span
                                  data-bs-toggle="modal"
                                  data-bs-target="#sort"
                                >
                                  <i className="fa fa-filter font-20"></i>
                                </span>{" "}
                                Sort
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#pin"
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls="collapseExample"
                                >
                                  <span>
                                    {" "}
                                    <i className="fa fa-map-pin"></i>
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#hide"
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls="collapseExample"
                                >
                                  <span>
                                    {" "}
                                    <i
                                      className="fa fa-eye-slash"
                                      aria-hidden="true"
                                    ></i>
                                  </span>{" "}
                                </a>
                              </li>
                              <li>
                                <div className="dropdown">
                                  <a
                                    className="dropdown-toggle btn-sm"
                                    href="#"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    Item height
                                  </a>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                  >
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Single
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Double
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        Triple
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="collapse"
                                  href="#color-megamenu"
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls="collapseExample"
                                >
                                  <span>
                                    <i
                                      className="fa fa-paint-brush"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                >
                                  <i
                                    className="fa fa-pencil-square-o"
                                    style={{ fontSize: "18px" }}
                                  ></i>
                                </a>
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
