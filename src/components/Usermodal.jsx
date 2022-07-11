import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";

function Usermodal() {
  return (
    <>
      <div className="modal " id="userModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog custom-dialog modal-dialog-centered account-width">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title blue">Account</h5>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-12">
                  <div className="account">
                    <Link to={{ pathname: "/profile" }} className="">
                      <i className="bx bx-user"></i> My Profile
                    </Link>

                    <Link to={{ pathname: "/" }} className="">
                      <i className="bx bx-cog"></i> Admin
                    </Link>
                    <Link to={{ pathname: "/Userlist" }} className="">
                      <i className="bx bx-group"></i> Teams{" "}
                    </Link>
                    <Link to={{ pathname: "/" }} className="">
                      <i className="bx bx-log-out"></i> Logout
                    </Link>
                    <hr style={{ width: "100%" }} />
                    <span
                      data-bs-toggle="modal"
                      data-bs-target="#invite-member"
                      className="mb-2"
                    >
                      <i className="bx bx-plus"></i> Invite{" "}
                    </span>
                    {/* <a href="#" className='team-font'><i className='bx bx-user'></i> Change Theme</a> */}
                    <div className="mb-2 d-flex">
                      <i className="bx bx-sun"></i>
                      <DropdownButton
                        key={`end`}
                        id={`dropdown-button-drop-end`}
                        drop={`end`}
                        variant="secondary"
                        title={` Change Theme `}
                        className={`Userdrop`}
                      >
                        <Dropdown.Item eventKey="1">
                          <i className="bx bx-sun"></i> Light
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          <i className="bx bx-moon"></i> Dark
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3">
                          <i className="bx bx-star"></i> Night
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3">
                          <i className="bx bx-cog"></i> System Default
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Usermodal;
