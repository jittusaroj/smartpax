import { React, useEffect, useState } from "react";
import axios from "axios";
import { notify } from "../utils/services";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
// import Collapse from "react-bootstrap/Collapse";
import { useRef } from "react";
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
import {
  FaCheckSquare,
  FaExchangeAlt,
  FaEyeSlash,
  FaStackExchange,
} from "react-icons/fa";
import Hide from "../components/Header/Hide";
import { useNavigate, useLocation } from "react-router-dom";

function Workspace(props) {
  const user_data = JSON.parse(localStorage.getItem("user"));
  const workspace_id_tbl = localStorage.getItem("workspace");
  const workspace_id = workspace_id_tbl;//props.workspace_id;

  const [folderList, setFolderList] = useState([]);
  const [list, setList] = useState([]);
  const [gid, setGID] = useState([]);
  const [reload, setReload] = useState(false);
  const [add, setAdd] = useState(false);
  const [se, setSE] = useState();
  const childRef=useRef();
  // For columns.
  const [columns, setColumns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_LOCAL_API + "/columns/list/" + workspace_id, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setColumns(res.data);
      }
    )
  }, [reload]);
 
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_LOCAL_API + "/folder/list/" + user_data.id, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setFolderList(res.data);
      }
    );
  }, [reload]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_LOCAL_API + "/group/list/" + user_data.id + "/" + workspace_id, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setList(res.data);
      });
  }, [reload]);

  const [wslist, setWslist] = useState([]);
  useEffect(() => {

    axios
      .get(process.env.REACT_APP_LOCAL_API + "/workspace/" + workspace_id, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setWslist(res.data);
      });
   
  }, [reload]);

  const addNewGroup = (e) => {
    axios
      .post(
        process.env.REACT_APP_LOCAL_API + "/group/save",
        {
          total_rows: 1,
          workspace_id: workspace_id,
          user_id: user_data.id,
         
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((data) => {
        notify("New Item Group added.", "success");
        reload==false?setReload(true):setReload(false);
       // window.location.reload(); 
      });
  };

const reloader=(a)=>{
  childRef.current.getAlert();
}

const reloaded=(a)=>{
  reload==false?setReload(true):setReload(false);
}
  const location = useLocation();

  const nextpage = location.state?.nextpage || '/';
  var handleKeyPress=(e)=>{
    // if (e.key === "Enter") 
    //  {
      axios
      .get(process.env.REACT_APP_LOCAL_API + "/group/list/" + user_data.id + "/" + workspace_id, {
        "Content-Type": "application/json",
      })
      .then((res) => {
       
        if(e.target.value==""){
        
          setList(res.data);
      
   
        }
        else
        for(var i=0;i<res.data.length;i++)
        if(res.data[i].name==e.target.value){
        
          setList(res.data.filter(id => id.name==e.target.value));
      
   
        }

    
     
      });

    //  }
    }
  
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
                  ref={childRef}
                  ddddd
                  folderList={folderList}
                  setFolderList={setFolderList}
                  setReloader={reloaded}
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
                                    onKeyPress={handleKeyPress}
                                
                                    style={{ marginTop: "-10px"  }}
                                  />
                                </div>
                              </li>
                              <li className="">
                                <Personmodal />
                                {/* <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#person_modal"
                                >
                                  <i className="fa fa-user-circle f-color"></i>
                                  <span className="ms-2 f-color">Person</span>
                                </a> */}
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

                              <li style={{ marginTop: "-7px" }}>
                                <Filtermodal
                                 
                                />
                                 {/* groupList={list}
                                  setgroupList={setList}
                                  nameList={list}
                                  setnameList={setList}
                                  columns={columns}
                                  setColumns={setColumns} */}
                              </li>
                              <li className="mx-4">
                                <Sortmodal />
                                {/* <span
                                  data-bs-toggle="modal"
                                  data-bs-target="#sort"
                                >
                                  <FaExchangeAlt className="f-color" style={{transform:'rotate(90deg)'}}/>
                                
                                  <span className="ms-2 f-color">Sort</span>
                                </span> */}
                              </li>

                              <li className="mx-4">
                                <Hide />
                              </li>
                            </ul>
                          </div>

                          <br />
                          {list
                            .map((group, i) => {
                              return (
                                <Workspacetable
                                  key={i}
                                  workspace_id={group.workspace_id}
                                  group_id={group.id}
                                  group_data={group}
                                  user_data={user_data}
                                  columns={columns}
                                  add={add}
                                  gid={list[0].id}
                                  reload={reload}
                                  setReload={setReload}
                                />
                              );
                            })
                            .reverse()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Personmodal /> */}
        <Sortmodal />

        <Worspacemodal
          folderList={folderList}
          user_data={user_data}
          setReloader={reloader}
        />

        <Footer />
      </div>
    </>
  );
}
export default Workspace;
