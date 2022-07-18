import { React } from "react";

// import '../Css/Workspace.css';

function Topheader(props) {
  return (
    <>
      <div className="top-card-section">
        <div className="row">
          <div className="col-md-5">
            <div className="heading">
              <span className="heading-icon">
                <i className="fa fa-lock"></i> &nbsp;
              </span>
              <span className="fs-6 mt-1">{props.workspace.name}</span>
              <div className="other-option">
                {/* <span>
                  <a
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <a>
                    {" "}
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </a>
                </span> */}
              </div>
            </div>
            {/* <div className="collapse " id="collapseExample">
              <p className="pb-0">Board description show here..</p>
            </div> */}
          </div>
          <div className="col-md-7">
            <div className="right-option">
              <ul className="ul-menu">
                {/* <li>
                  <button
                    className="dropdown-toggle no-btn"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-lock"></i>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <li>
                      <a className="dropdown-item">
                        Everyone can write updates, the board <br /> is view
                        only.
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>
                    Last seen <span className="name-icon">K</span>
                  </a>
                </li>
                <li>
                  <a data-bs-toggle="modal" data-bs-target="#invite_modal">
                    <i className="fa fa-user-plus"></i> invite /5
                  </a>
                </li>

                <li>
                  <a data-bs-toggle="modal" data-bs-target="#activity_modal">
                    <i className="fa fa-chart"></i> Activity
                  </a>
                </li>

                <li>
                  <button
                    className="btn btn-sm add-board-btn dropdown-toggle no-dropdown"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    + Add to board
                  </button>
               
                </li> */}
                <li>
                  <button
                    className="btn dropdown-toggle no-dropdown ellipsis"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-h"></i>
                  </button>
                 
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-md-12">
            <ul
              className="nav nav-tabs work-space m-0"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true" style={{borderRight:"0px solid"}}
                >
                  <i className="fa fa-home"></i> Main Table
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Table
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Dashboard
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <div className="">
                  <a
                    className="btn dropdown-toggle add-dropdown"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-plus font-14"></i>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Table
                      </a>
                    </li>
                  
                    <li>
                      <a className="dropdown-item" href="#">
                        Chart
                      </a>
                    </li>
    
                  </ul>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default Topheader;
