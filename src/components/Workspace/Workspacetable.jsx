import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../../utils/services";

function Workspacetable() {
  const [open, setOpen] = useState(false);
  const data = JSON.parse(localStorage.getItem("user"));
  const gName = localStorage.getItem("groupName");

  const [name, setName] = useState("");

  useEffect(() => {
    setName(gName);
  }, [gName]);

  const saveData = (e) => {
    if (e.key === "Enter") {
      axios
        .post(
          process.env.REACT_APP_LOCAL_API + "/group/save",
          {
            name: name,
            user_id: data.id,
            workspace_id: 1,
            isActive: 1,
          },
          {
            "Content-Type": "application/json",
          }
        )
        .then((data) => {
          console.log(data);
          localStorage.setItem("groupName", name);

          notify("Successfully updated", "success");
          window.location.reload();
        });
    }
  };

  return (
    <>
      <div className="overflow-scroll1 penicillium-section">
        {/* <!--head section--> */}
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
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Another Drop
                  </a>
                </li>
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
                                        onChange={(e) =>
                                          setName(e.target.value)
                                        }
                                        defaultValue={name}
                                        onKeyPress={(e) => saveData(e)}
                                      />
                                    </span>
            </div>
            <div className="head">
              <span className="value">Testing Date</span>
            </div>
            <div className="head">
              <span className="value">Week</span>
            </div>
            <div className="head">
              <span className="value"> Column1</span>
            </div>
            <div className="head">
              <span className="value"> Column2</span>
            </div>

            <div className="head">
              <span className="value">
                Column3
                <a
                  className="plus-right"
                  data-bs-toggle="modal"
                  data-bs-target="#column-modal"
                >
                  <i className="fa fa-plus-circle"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* <!--head section-->
                                 <!--body-section--> */}
        <div id="sortable">
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
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
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
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Another Drop
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rename Group
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex body-section blue-section">
              <div className="body1 first-head">
                <span className="value first-col">ABC</span>
              </div>
              <div className="body1">
                <span className="value">12/04/22</span>
              </div>
              <div className="body1">
                <span className="value">week 22</span>
              </div>
              <div className="body1">
                <span className="value">
                  <button className="crose-btn value-remove">
                    <i className="fa fa-times"></i>
                  </button>
                  <input className="" name="" id="textfield1" defaultValue="1" />
                </span>
              </div>

              <div className="body1">
                <span className="value">1</span>
              </div>
              <div className="body1">
                <span className="value">1</span>
              </div>
            </div>
          </div>

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
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
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
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Another Drop
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rename Group
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex body-section blue-section">
              <div className="body1 first-head">
                <span className="value first-col">ABC</span>
              </div>
              <div className="body1">
                <span className="value">12/04/22</span>
              </div>
              <div className="body1">
                <span className="value">week 22</span>
              </div>
              <div className="body1">
                <span className="value">
                  <button className="crose-btn value-remove">
                    <i className="fa fa-times"></i>
                  </button>
                  <input className="" name="" id="textfield1" defaultValue="1" />
                </span>
              </div>

              <div className="body1">
                <span className="value">1</span>
              </div>
              <div className="body1">
                <span className="value">1</span>
              </div>
            </div>
          </div>
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
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
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
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Another Drop
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rename Group
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex body-section blue-section">
              <div className="body1 first-head">
                <span className="value first-col">ABC</span>
              </div>
              <div className="body1">
                <span className="value">12/04/22</span>
              </div>
              <div className="body1">
                <span className="value">week 22</span>
              </div>
              <div className="body1">
                <span className="value">
                  <button className="crose-btn value-remove">
                    <i className="fa fa-times"></i>
                  </button>
                  <input className="" name="" id="textfield1" defaultValue="1" />
                </span>
              </div>

              <div className="body1">
                <span className="value">1</span>
              </div>
              <div className="body1">
                <span className="value">1</span>
              </div>
            </div>
          </div>

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
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
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
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Another Drop
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rename Group
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex body-section blue-section">
              <div className="body1 first-head">
                <span className="value first-col">ABC</span>
              </div>
              <div className="body1">
                <span className="value">12/04/22</span>
              </div>
              <div className="body1">
                <span className="value">week 22</span>
              </div>
              <div className="body1">
                <span className="value">
                  <button className="crose-btn value-remove">
                    <i className="fa fa-times"></i>
                  </button>
                  <input className="" name="" id="textfield1" defaultValue="1" />
                </span>
              </div>

              <div className="body1">
                <span className="value">1</span>
              </div>
              <div className="body1">
                <span className="value">1</span>
              </div>
            </div>
          </div>

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
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
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
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Another Drop
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Rename Group
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex body-section blue-section">
              <div className="body1 first-head">
                <span className="value first-col">ABC</span>
              </div>
              <div className="body1">
                <span className="value">12/04/22</span>
              </div>
              <div className="body1">
                <span className="value">week 22</span>
              </div>
              <div className="body1">
                <span className="value">
                  <button className="crose-btn value-remove">
                    <i className="fa fa-times"></i>
                  </button>
                  <input className="" name="" id="textfield1" defaultValue="1" />
                </span>
              </div>

              <div className="body1">
                <span className="value">1</span>
              </div>
              <div className="body1">
                <span className="value">1</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!--body-section-->
                                 <!--last column--> */}

        {/* <div   className="d-flex">
                                    <div   className="dropdown-sec">
                                    </div>
                                   

                                     <div   className="body-section blue-section my-2" style={{width:'100%'}}>
                                             <div   className=" last-head" style={{width:'100%'}}>
                                       
                                                <Form.Control type="text" className="form-control" placeholder="+ Add item" />
                                             </div>
                                          </div>
                                          <button   className="btn custum-add-button btn-primary text-white ms-2">Add</button>
                                       
                                 </div> */}

        {/* <!--last column-->
                                 <!--table section design--> */}
      </div>
    </>
  );
}
export default Workspacetable;
