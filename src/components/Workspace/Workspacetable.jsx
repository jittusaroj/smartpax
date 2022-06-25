
import {React} from 'react';
import {Form} from 'react-bootstrap';
import Worspacemodal from './Worspacemodal';

// import '../Css/Workspace.css';




function Workspacetable () { 
    return (
        <>

<div   className="overflow-scroll penicillium-section">
                                 {/* <!--head section--> */}
                                 <div   className="d-flex">
                                    <div   className="dropdown-sec">
                                       <div   className="dropdown">
                                          <a   className="btn btn-primary btn-xs dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> </a>
                                          <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                             <li><a   className="dropdown-item" href="#">Collapse this group</a></li>
                                             <li><a   className="dropdown-item" href="#">Collapse All group</a></li>
                                             <li><a   className="dropdown-item" href="#">Select all items</a></li>
                                             <li>
                                                <hr   className="dropdown-divider" />
                                             </li>
                                             <li><a   className="dropdown-item" href="#">Add Group</a></li>
                                             <li><a   className="dropdown-item" href="#"  data-bs-toggle="dropdown" aria-expanded="false">Another Drop</a></li>
                                             <li><a   className="dropdown-item" href="#">Rename Group</a></li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div   className="head-section blue-section d-flex">
                                       <div   className="head first-head">
                                          <span   className="value first-col first-text blue-text font-16"> Blue Penicillium</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Testing Date</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Week</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value"> Drench Water Micro</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value"> High Pressure Water Micro</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Fungicide Water Micro</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Pre-Sorting (1) Surface Swab</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Pre-Sorting (2) Surface Swab</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Pressure Spray 1 Surface Swab</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Drying Brush Surface Swab</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Wax Brush Surface Swab</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Main Sorting (1) Surface Swab</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Packing Table (1) Surface Swab</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Pre-Sorting (1) Air Plates</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Fungicide Air Plates</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Wax Air Plates</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Status</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Dropdown</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Formula</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">People</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Date</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Number <a   className="plus-right" data-bs-toggle="modal" data-bs-target="#column-modal"><i   className="fa fa-plus-circle"></i></a></span>
                                       </div>
                                    </div>
                                 </div>
                                 {/* <!--head section-->
                                 <!--body-section--> */}
                                 <div id="sortable">
                                    <div   className="d-flex">
                                       <div   className="dropdown-sec">
                                          <div   className="dropdown">
                                             <a   className="btn btn-primary btn-xs dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> </a>
                                             <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a   className="dropdown-item" href="#">Collapse this group</a></li>
                                                <li><a   className="dropdown-item" href="#">Collapse All group</a></li>
                                                <li><a   className="dropdown-item" href="#">Select all items</a></li>
                                                <li>
                                                   <hr   className="dropdown-divider" />
                                                </li>
                                                <li><a   className="dropdown-item" href="#">Add Group</a></li>
                                                <li><a   className="dropdown-item" href="#"  data-bs-toggle="dropdown" aria-expanded="false">Another Drop</a></li>
                                                <li><a   className="dropdown-item" href="#">Rename Group</a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div   className="d-flex body-section blue-section">
                                          <div   className="body1 first-head">
                                             <span   className="value first-col">ABC</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">12/04/22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">week 22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">
                                             <button   className="crose-btn value-remove" ><i   className="fa fa-times"></i></button>
                                             <input   className="" name="" id="textfield1" value="1"/>
                                             </span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1 status-bg">
                                             <span   className="value">Hello</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"><i   className="fa fa-user-circle-o user-icon-font"></i></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div   className="d-flex">
                                       <div   className="dropdown-sec">
                                          <div   className="dropdown">
                                             <a   className="btn btn-primary btn-xs dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> </a>
                                             <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a   className="dropdown-item" href="#">Collapse this group</a></li>
                                                <li><a   className="dropdown-item" href="#">Collapse All group</a></li>
                                                <li><a   className="dropdown-item" href="#">Select all items</a></li>
                                                <li>
                                                   <hr   className="dropdown-divider"/>
                                                </li>
                                                <li><a   className="dropdown-item" href="#">Add Group</a></li>
                                                <li><a   className="dropdown-item" href="#"  data-bs-toggle="dropdown" aria-expanded="false">Another Drop</a></li>
                                                <li><a   className="dropdown-item" href="#">Rename Group</a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div   className="d-flex body-section blue-section">
                                          <div   className="body1 first-head">
                                             <span   className="value first-col">ABC</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">12/04/22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">week 22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1 status-bg">
                                             <span   className="value">Hello</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"><i   className="fa fa-user-circle-o user-icon-font"></i></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div   className="d-flex">
                                       <div   className="dropdown-sec">
                                          <div   className="dropdown">
                                             <a   className="btn btn-primary btn-xs dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> </a>
                                             <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a   className="dropdown-item" href="#">Collapse this group</a></li>
                                                <li><a   className="dropdown-item" href="#">Collapse All group</a></li>
                                                <li><a   className="dropdown-item" href="#">Select all items</a></li>
                                                <li>
                                                   <hr   className="dropdown-divider"/>
                                                </li>
                                                <li><a   className="dropdown-item" href="#">Add Group</a></li>
                                                <li><a   className="dropdown-item" href="#"  data-bs-toggle="dropdown" aria-expanded="false">Another Drop</a></li>
                                                <li><a   className="dropdown-item" href="#">Rename Group</a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div   className="d-flex body-section blue-section">
                                          <div   className="body1 first-head">
                                             <span   className="value first-col">ABC</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">12/04/22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">week 22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1 status-bg">
                                             <span   className="value">Hello</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"><i   className="fa fa-user-circle-o user-icon-font"></i></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div   className="d-flex">
                                       <div   className="dropdown-sec">
                                          <div   className="dropdown">
                                             <a   className="btn btn-primary btn-xs dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> </a>
                                             <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a   className="dropdown-item" href="#">Collapse this group</a></li>
                                                <li><a   className="dropdown-item" href="#">Collapse All group</a></li>
                                                <li><a   className="dropdown-item" href="#">Select all items</a></li>
                                                <li>
                                                   <hr   className="dropdown-divider" />
                                                </li>
                                                <li><a   className="dropdown-item" href="#">Add Group</a></li>
                                                <li><a   className="dropdown-item" href="#"  data-bs-toggle="dropdown" aria-expanded="false">Another Drop</a></li>
                                                <li><a   className="dropdown-item" href="#">Rename Group</a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div   className="d-flex body-section blue-section">
                                          <div   className="body1 first-head">
                                             <span   className="value first-col">ABC</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">12/04/22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">week 22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1 status-bg">
                                             <span   className="value">Hello</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"><i   className="fa fa-user-circle-o user-icon-font"></i></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div   className="d-flex">
                                       <div   className="dropdown-sec">
                                          <div   className="dropdown">
                                             <a   className="btn btn-primary btn-xs dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> </a>
                                             <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a   className="dropdown-item" href="#">Collapse this group</a></li>
                                                <li><a   className="dropdown-item" href="#">Collapse All group</a></li>
                                                <li><a   className="dropdown-item" href="#">Select all items</a></li>
                                                <li>
                                                   <hr   className="dropdown-divider" />
                                                </li>
                                                <li><a   className="dropdown-item" href="#">Add Group</a></li>
                                                <li><a   className="dropdown-item" href="#"  data-bs-toggle="dropdown" aria-expanded="false">Another Drop</a></li>
                                                <li><a   className="dropdown-item" href="#">Rename Group</a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div   className="d-flex body-section blue-section">
                                          <div   className="body1 first-head">
                                             <span   className="value first-col">ABC</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">12/04/22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">week 22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1 status-bg">
                                             <span   className="value">Hello</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"><i   className="fa fa-user-circle-o user-icon-font"></i></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div   className="d-flex">
                                       <div   className="dropdown-sec">
                                          <div   className="dropdown">
                                             <a   className="btn btn-primary btn-xs dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> </a>
                                             <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a   className="dropdown-item" href="#">Collapse this group</a></li>
                                                <li><a   className="dropdown-item" href="#">Collapse All group</a></li>
                                                <li><a   className="dropdown-item" href="#">Select all items</a></li>
                                                <li>
                                                   <hr   className="dropdown-divider" />
                                                </li>
                                                <li><a   className="dropdown-item" href="#">Add Group</a></li>
                                                <li><a   className="dropdown-item" href="#"  data-bs-toggle="dropdown" aria-expanded="false">Another Drop</a></li>
                                                <li><a   className="dropdown-item" href="#">Rename Group</a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div   className="d-flex body-section blue-section">
                                          <div   className="body1 first-head">
                                             <span   className="value first-col">ABC</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">12/04/22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">week 22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1 status-bg">
                                             <span   className="value">Hello</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"><i   className="fa fa-user-circle-o user-icon-font"></i></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div   className="d-flex">
                                       <div   className="dropdown-sec">
                                          <div   className="dropdown">
                                             <a   className="btn btn-primary btn-xs dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> </a>
                                             <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a   className="dropdown-item" href="#">Collapse this group</a></li>
                                                <li><a   className="dropdown-item" href="#">Collapse All group</a></li>
                                                <li><a   className="dropdown-item" href="#">Select all items</a></li>
                                                <li>
                                                   <hr   className="dropdown-divider" />
                                                </li>
                                                <li><a   className="dropdown-item" href="#">Add Group</a></li>
                                                <li><a   className="dropdown-item" href="#"  data-bs-toggle="dropdown" aria-expanded="false">Another Drop</a></li>
                                                <li><a   className="dropdown-item" href="#">Rename Group</a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div   className="d-flex body-section blue-section">
                                          <div   className="body1 first-head">
                                             <span   className="value first-col">ABC</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">12/04/22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">week 22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1 status-bg">
                                             <span   className="value">Hello</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"><i   className="fa fa-user-circle-o user-icon-font"></i></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div   className="d-flex">
                                       <div   className="dropdown-sec">
                                          <div   className="dropdown">
                                             <a   className="btn btn-primary btn-xs dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> </a>
                                             <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a   className="dropdown-item" href="#">Collapse this group</a></li>
                                                <li><a   className="dropdown-item" href="#">Collapse All group</a></li>
                                                <li><a   className="dropdown-item" href="#">Select all items</a></li>
                                                <li>
                                                   <hr   className="dropdown-divider" />
                                                </li>
                                                <li><a   className="dropdown-item" href="#">Add Group</a></li>
                                                <li><a   className="dropdown-item" href="#"  data-bs-toggle="dropdown" aria-expanded="false">Another Drop</a></li>
                                                <li><a   className="dropdown-item" href="#">Rename Group</a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div   className="d-flex body-section blue-section">
                                          <div   className="body1 first-head">
                                             <span   className="value first-col">ABC</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">12/04/22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">week 22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1 status-bg">
                                             <span   className="value">Hello</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"><i   className="fa fa-user-circle-o user-icon-font"></i></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div   className="d-flex">
                                       <div   className="dropdown-sec">
                                          <div   className="dropdown">
                                             <a   className="btn btn-primary btn-xs dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> </a>
                                             <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a   className="dropdown-item" href="#">Collapse this group</a></li>
                                                <li><a   className="dropdown-item" href="#">Collapse All group</a></li>
                                                <li><a   className="dropdown-item" href="#">Select all items</a></li>
                                                <li>
                                                   <hr   className="dropdown-divider" />
                                                </li>
                                                <li><a   className="dropdown-item" href="#">Add Group</a></li>
                                                <li><a   className="dropdown-item" href="#"  data-bs-toggle="dropdown" aria-expanded="false">Another Drop</a></li>
                                                <li><a   className="dropdown-item" href="#">Rename Group</a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div   className="d-flex body-section blue-section">
                                          <div   className="body1 first-head">
                                             <span   className="value first-col">ABC</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">12/04/22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">week 22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1 status-bg">
                                             <span   className="value">Hello</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"><i   className="fa fa-user-circle-o user-icon-font"></i></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                       </div>
                                    </div>
                                    <div   className="d-flex">
                                       <div   className="dropdown-sec">
                                          <div   className="dropdown">
                                             <a   className="btn btn-primary btn-xs dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> </a>
                                             <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li><a   className="dropdown-item" href="#">Collapse this group</a></li>
                                                <li><a   className="dropdown-item" href="#">Collapse All group</a></li>
                                                <li><a   className="dropdown-item" href="#">Select all items</a></li>
                                                <li>
                                                   <hr   className="dropdown-divider" />
                                                </li>
                                                <li><a   className="dropdown-item" href="#">Add Group</a></li>
                                                <li><a   className="dropdown-item" href="#"  data-bs-toggle="dropdown" aria-expanded="false">Another Drop</a></li>
                                                <li><a   className="dropdown-item" href="#">Rename Group</a></li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div   className="d-flex body-section blue-section">
                                          <div   className="body1 first-head">
                                             <span   className="value first-col">ABC</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">12/04/22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">week 22</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">0</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1 status-bg">
                                             <span   className="value">Hello</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"><i   className="fa fa-user-circle-o user-icon-font"></i></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value"></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 {/* <!--body-section-->
                                 <!--last column--> */}
                                
                                 <div   className="d-flex">
                                    <div   className="dropdown-sec">
                                    </div>
                                    {/* <div   className="d-flex body-section blue-section" style={{width:'100%'}}>
                                       <div   className="body1 last-head">
                                          <span   className="value first-col add-item"> + Add item </span>
                                       </div>
                                    </div> */}
                                     <div   className="body-section pink-section" style={{width:'100%'}}>
                                             <div   className="body1 last-head" style={{width:'100%'}}>
                                                {/* <input type="text"   className="form-control" value="" name="" placeholder="+ Add item"/> */}
                                                <Form.Control type="text" className="form-control" placeholder="+ Add item" />
                                             </div>
                                          </div>
                                          <button   className="btn custum-add-button bg-pink border-pink text-white">Add</button>
                                       
                                 </div>


                                 {/* <!--last column-->
                                 <!--table section design--> */}
                              </div>

                           
                        
        

        


            
  </>
  );
  }
  export default Workspacetable;