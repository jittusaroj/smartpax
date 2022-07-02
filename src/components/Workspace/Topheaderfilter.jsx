import { React } from "react";

// import '../Css/Workspace.css';

function Topheaderfilter() {
  return (
    <>
      <div className="top-filter-section">
        <ul className="filter">
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                New item
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  New group of Items
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Import Items</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <div className="d-lg-none d-md-none d-sm-block d-xs-block mb-d-inline">
              <button className="btn">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </li>
          <li className="d-none d-lg-block d-md-block">
            <div className="d-flex search-field">
              <div className="search-btn">
                <i className="fa fa-search"></i>
              </div>
              <input
                className="form-control"
                value=""
                placeholder="search.."
                name=""
              />
            </div>
          </li>
          <li>
            <a data-bs-toggle="modal" data-bs-target="#person_modal">
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

            <div className="collapse megamenu" id="megamenu">
              <div className="card card-body">
                <div className="row mb-3">
                  <div className="col-md-8 col-8">
                    <h5>
                      Quick person filter{" "}
                      <small>Showing all of 149 items</small>
                    </h5>
                  </div>
                  <div className="col-md-4 col-4 float-right">
                    <a>Clear All</a>
                    <button className="btn btn-add-group">
                      Save as new View
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <div className="mt-2">Where</div>
                  </div>
                  <div className="col-md-3">
                    <input
                      type="date"
                      className="form-control"
                      name=""
                      value=""
                    />
                  </div>
                  <div className="col-md-3">
                    <select className="form-control">
                      <option>is</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-control">
                      <option>option1</option>
                    </select>
                  </div>
                  <div className="col-md-1">
                    <div className="mt-2">
                      <a>
                        <i className="fa fa-times"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mt-2">And</div>
                  </div>
                  <div className="col-md-3">
                    <select className="form-control">
                      <option>Column</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-control">
                      <option>Condition</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-control">
                      <option>value</option>
                    </select>
                  </div>
                  <div className="col-md-1">
                    <div className="mt-2">
                      <a>
                        <i className="fa fa-times"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <a>+ Add new filter</a>
                  </div>
                  <div className="filter-section">
                    <h5 className="mb-3 mt-3"> All columns </h5>
                    <div className="d-flex">
                      <div className="filter-options">
                        <div className="filter-heading">Group</div>
                        <ul>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                        </ul>
                      </div>
                      <div className="filter-options">
                        <div className="filter-heading">Group</div>
                        <ul>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                        </ul>
                      </div>
                      <div className="filter-options">
                        <div className="filter-heading">Group</div>
                        <ul>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                        </ul>
                      </div>
                      <div className="filter-options">
                        <div className="filter-heading">Group</div>
                        <ul>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                        </ul>
                      </div>
                      <div className="filter-options">
                        <div className="filter-heading">Group</div>
                        <ul>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                        </ul>
                      </div>
                      <div className="filter-options">
                        <div className="filter-heading">Group</div>
                        <ul>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                          <li>
                            Top group <span className="right">17</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--mega menu--> */}
          </li>
          <li>
            <a data-bs-toggle="modal" data-bs-target="#sort">
              <span>
                <i className="fa fa-filter font-20"></i>
              </span>{" "}
              Sort
            </a>
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
            {/* <!--mega menu--> */}
            <div className="collapse megamenu pin-megamenu" id="pin">
              <div className="card card-body filter-checkbox">
                <h6>Choose column to</h6>
                <div className="form-check pl-0">
                  <label className="form-check-label" for="name">
                    <i className="fa fa-file-text-o"></i> Name
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="name"
                  />
                </div>
                <div className="form-check pl-0">
                  <label className="form-check-label" for="name">
                    <i className="fa fa-file-text-o"></i> Name
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="name"
                  />
                </div>
                <div className="form-check pl-0">
                  <label className="form-check-label" for="name">
                    <i className="fa fa-file-text-o"></i> Name
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="name"
                  />
                </div>
                <div className="form-check pl-0">
                  <label className="form-check-label" for="name">
                    <i className="fa fa-file-text-o"></i> Name
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="name"
                  />
                </div>
              </div>
            </div>
            {/* <!--mega menu--> */}
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
                <i className="fa fa-eye-slash" aria-hidden="true"></i>
              </span>{" "}
            </a>
            {/* <!--mega menu--> */}
            <div className="collapse megamenu pin-megamenu" id="hide">
              <div className="card card-body filter-checkbox">
                <h6>Choose column to display</h6>
                <div className="filter-search d-flex">
                  <input className="form-conrtol" name="" value="" />
                  <button className="btn search-custum">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
                <div className="form-check pl-0">
                  <label className="form-check-label" for="all">
                    <i className="fa fa-file-text-o"></i> All Columns
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="all"
                  />
                </div>
                <div className="form-check pl-0">
                  <label className="form-check-label" for="week">
                    <i className="fa fa-file-text-o"></i> Week
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="week"
                  />
                </div>
                <div className="form-check pl-0">
                  <label className="form-check-label" for="week">
                    <i className="fa fa-file-text-o"></i> Drench Water Micro
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="week"
                  />
                </div>
                <div className="form-check pl-0">
                  <label className="form-check-label" for="week">
                    <i className="fa fa-file-text-o"></i> Drench Water Micro
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="week"
                  />
                </div>
              </div>
            </div>
            {/* <!--mega menu--> */}
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
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
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
            {/* <!--<a>Search 123</a>--> */}
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
                <i className="fa fa-paint-brush" aria-hidden="true"></i>
              </span>
            </a>
            {/* <!--mega menu--> */}
            <div
              className="collapse megamenu color-megamenu"
              id="color-megamenu"
            >
              <div className="card card-body">
                <div className="row mb-3">
                  <div className="col-md-7 col-7">
                    <h5>Conditional coloring</h5>
                  </div>
                  <div className="col-md-5 col-5 float-right">
                    <a>
                      <i className="fa fa-comments-o"></i> Feedback
                    </a>
                    <button className="btn btn-add-group">
                      Save as new View
                    </button>
                  </div>
                </div>
                <div className="border border-radius-10 p-3 pt-2 pb-2 mb-2">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="d-flex">
                        <div className="point green width-12per"></div>
                        <div className="" style={{ width: "50%" }}>
                          <select className="form-control" name="">
                            <option>Cell</option>
                            <option>Cell</option>
                          </select>
                        </div>
                        <div className="mt-2" style={{ marginLeft: "10px" }}>
                          When
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <select className="form-control" name="">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <select className="form-control">
                        <option>condition</option>
                        <option>choose a column</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <select className="form-control">
                        <option>Value</option>
                        <option>choose a column</option>
                      </select>
                    </div>
                  </div>
                </div>
                <a className="btn btn-add-group" style={{ width: "135px" }}>
                  + Add new filter
                </a>
              </div>
            </div>
            {/* <!--mega menu--> */}
          </li>
          <li>
            <a data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i
                className="fa fa-pencil-square-o"
                style={{ fontSize: "18px" }}
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Topheaderfilter;
