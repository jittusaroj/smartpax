import { React, useEffect, useState } from "react";

import axios from "axios";
import Footer from "./Footer";
import Invite from "../components/Invite";
import Sidebar from "../components/Sidebar";
import "../Css/Main.css";
import { ListGroup, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function Userlist() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_LOCAL_API + "/users/list", {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setList(res.data);
      });
  }, []);

  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="page-wrapper">
          <div className="page-content">
            <div className="row">
              <div
                className="col-12 col-lg-2 col-md-2 col-sm-12 bg-lightgray custom-user-sidebar"
                style={{ background: "rgb(233 236 240 / 25%)" }}
              >
                <p className="fs-6 mt-4">
                  <b>TEAMS</b>
                </p>
                <p className="team-font">
                  <i className="bx bx-plus"></i> New Team
                </p>
                <p className="team-font">
                  <i className="bx bx-filter-alt"></i> Filter Team
                </p>
                <p className="team-font">
                  <i className="bx bx-search"></i> Search Team
                </p>

                <hr style={{ width: "100%" }} />
                <div className="team-font">
                  <i className="bx bx-list-plus"></i>
                  All Users
                  <Badge bg="primary" className="float-right">
                    14
                  </Badge>
                </div>
                <div className="team-font">
                  <i className="bx bx-user"></i> Admin
                  <Badge bg="primary" className="float-right">
                    14
                  </Badge>
                </div>
                <div className="team-font">
                  <i className="bx bx-user"></i> Sales
                  <Badge bg="primary" className="float-right">
                    14
                  </Badge>
                </div>
                <div className="team-font">
                  <i className="bx bx-user"></i> Finance
                  <Badge bg="primary" className="float-right">
                    14
                  </Badge>
                </div>
              </div>
              <div className="col-12 col-lg-10 col-md-10 col-sm-12">
                <div>
                  <h4 className="mb-3">All users</h4>
                  <button
                    className="btn btn-primary float-right invite-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#invite-member"
                  >
                    <i className="bx bx-user-plus"></i>Invite
                  </button>
                </div>
                {/* <!--search section--> */}
                <div className="row">
                  <div className="col-md-4">
                   
                    <div className="d-flex left-search">
                      <div className="search-input">
                        <input
                          type="search"
                          id="form1"
                          className=""
                          placeholder="Search by Name or Email"
                        />
                      </div>

                      <button className="btn btn-user-search">
                        <i
                          className="fa fa-search search_icon"
                          style={{ color: "#d3d3d3a8", marginTop: "-28px" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* <!--search section--> */}
                {/* <!--user table section--> */}
                <table className="table user-list-table table-responsive">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Teams</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((user, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            <a href="#">{i + 1}</a>
                          </td>
                          <td>
                            <a href="#">{user.name}</a>
                          </td>
                          <td>
                            <a href="#">{user.email}</a>
                          </td>
                          <td>No Team</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {/* <!--user table section--> */}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <div
        className="modal  "
        id="invite-member"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog  ">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                {" "}
                <img src="user-invite-logo.png"  alt="Invite Member"/> Invite new members
              </h4>
            </div>
            <div className="modal-body">
              <Invite />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Userlist;
