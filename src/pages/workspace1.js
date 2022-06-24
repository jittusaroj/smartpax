
import {React,useEffect,useState} from 'react';

import axios from "axios";
import Footer from'./Footer';
import Invite from "../components/Invite";
import Sidebar from'../components/Sidebar';
import '../Css/Main.css';
import '../Css/Workspace.css';
import { ListGroup ,Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';




function Workspace ()  {

   
   
    return (
        <>
         <div   classNameNameName="wrapper">
         
         <Sidebar/>
   <div   className="page-wrapper">

  
       <div   classNameName='page-content'>

       <div   className="row">
               <div   className="col-12 col-lg-12 col-md-12 col-sm-12 inbox">
                  <div   className="board-section">
                     <div   className="top-card-section">
                        <div   className="row">
                           <div   className="col-md-7">
                              <div   className="heading">
                                 <span   className="heading-icon"><i   className="fa fa-lock"></i> &nbsp;</span> SL Compac 2A Q-Check 2021 Packhouse Hygiene 
                                 <div   className="other-option">
                                    <span>
                                    <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <i   className="fa fa-exclamation-circle" aria-hidden="true"></i>  
                                    </a>
                                    <a> <i   className="fa fa-star-o" aria-hidden="true"></i></a>
                                    </span>
                                 </div>
                              </div>
                              <div   className="collapse show" id="collapseExample">
                                 <p   className="pb-0">Board description show here..</p>
                              </div>
                           </div>
                           <div   className="col-md-5">
                              <div   className="right-option">
                                 <ul   className="ul-menu">
                                    <li>
                                       <button   className="dropdown-toggle no-btn" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                       <i   className="fa fa-lock"></i>
                                       </button>
                                       <ul   className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                          <li><a   className="dropdown-item">Everyone can write updates, the board <br/> is view only.</a></li>
                                       </ul>
                                    </li>
                                    <li><a>Last seen <span   className="name-icon">K</span></a></li>
                                    <li><a data-bs-toggle="modal" data-bs-target="#invite_modal" ><i   className="fa fa-user-plus"></i> invite /5</a></li>
                                  
                                    <li><a data-bs-toggle="modal" data-bs-target="#activity_modal" ><i   className="fa fa-chart"></i> Activity</a></li>
      
                                    <li>
                                       <button   className="btn btn-sm add-board-btn dropdown-toggle no-dropdown" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                       + Add to board
                                       </button>
                                       <ul   className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                          <li><a   className="dropdown-item active" href="#">Group</a></li>
                                          <li><a   className="dropdown-item" href="#">Column</a></li>
                                          <li><a   className="dropdown-item" href="#">View</a></li>
                                          <li><a   className="dropdown-item" href="#">Integrations</a></li>
                                          <li><a   className="dropdown-item" href="#">Automations</a></li>
                                          <li><a   className="dropdown-item" href="#">Apps</a></li>
                                          <li><a   className="dropdown-item" href="#">Dashboard</a></li>
                                          <li><a   className="dropdown-item" href="#">Import Items</a></li>
                                     
                                       </ul>
                                    </li>
                                    <li>
                                       <button   className="btn dropdown-toggle no-dropdown ellipsis" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                       <i   className="fa fa-ellipsis-h"></i>
                                       </button>
                                       <ul   className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                          <li><a   className="dropdown-item active" href="#">Board members</a></li>
                                          <li><a   className="dropdown-item" href="#">Board activity</a></li>
                                          <li>
                                             <hr   className="dropdown-divider" />
                                          </li>
                                          <li><a   className="dropdown-item" href="#">Integrations center</a></li>
                                          <li><a   className="dropdown-item" href="#">Automations center</a></li>
                                          <li><a   className="dropdown-item" href="#">Apps marketplace</a></li>
                                          <li>
                                             <hr   className="dropdown-divider" />
                                          </li>
                                          <li><a   className="dropdown-item" href="#">Board permissions</a></li>
                                          <li><a   className="dropdown-item" href="#">Board Setting</a></li>
                                          <li><a   className="dropdown-item" href="#">More Action</a></li>
                                          <li>
                                             <hr   className="dropdown-divider" />
                                          </li>
                                          <li><a   className="dropdown-item" href="#">Delete / Archive board</a></li>
                                       </ul>
                                    </li>
                                   
                                 </ul>
                              </div>
                           </div>
                           <div   className="col-md-12">
                              <ul   className="nav nav-tabs work-space m-0" id="myTab" role="tablist">
                                 <li   className="nav-item" role="presentation">
                                    <button   className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i   className="fa fa-home"></i> Main Table</button>
                                 </li>
                                 <li   className="nav-item" role="presentation">
                                    <button   className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Table</button>
                                 </li>
                                 <li   className="nav-item" role="presentation">
                                    <button   className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Dashboard</button>
                                 </li>
                                 <li   className="nav-item" role="presentation">
                                    <div   className="">
                                       <a   className="btn dropdown-toggle add-dropdown" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                       <i   className="fa fa-plus font-14"></i>
                                       </a>
                                       <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                          <li><a   className="dropdown-item" href="#">Table</a></li>
                                          <li><a   className="dropdown-item" href="#">Dashboard</a></li>
                                          <li><a   className="dropdown-item" href="#">Chart</a></li>
                                          <li><a   className="dropdown-item" href="#">Karban</a></li>
                                          <li><a   className="dropdown-item" href="#">Gantt</a></li>
                                          <li><a   className="dropdown-item" href="#">Cards</a></li>
                                          <li><a   className="dropdown-item" href="#">Forms</a></li>
                                          <li><a   className="dropdown-item" href="#">Fils Gallery</a></li>
                                          <li>
                                             <hr   className="dropdown-divider" />
                                          </li>
                                          <li><a   className="dropdown-item" href="#">Apps</a></li>
                                       
                                       </ul>
                                    </div>

                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div   className="card-body">
                        <div   className="tab-content" id="myTabContent">
                           {/* <!--first tab--> */}
                           <div   className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                              <div   className="top-filter-section">
                                 <ul   className="filter">
                                    <li>
                                       <div   className="dropdown">
                                          <a   className="btn btn-primary dropdown-toggle btn-sm ml-0" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                          New item
                                          </a>
                                          <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                             <li><a   className="dropdown-item" data-bs-toggle="collapse" href="#add_group1" role="button" aria-expanded="false" aria-controls="collapseExample">New group of Items</a></li>
                                             <li><a   className="dropdown-item" href="#">Import Items</a></li>
                                          </ul>
                                       </div>
                                     
                                    </li>
                                    <li>
                                       <div   className="d-lg-none d-md-none d-sm-block d-xs-block mb-d-inline">
                                          <button    className="btn"><i   className="fa fa-search"></i></button>
                                       </div>
                                    </li>
                                    <li   className="d-none d-lg-block d-md-block">
                                       <div   className="d-flex search-field">
                                          <div   className="search-btn"><i   className="fa fa-search"></i></div>
                                          <input   className="form-control" value="" placeholder="search.." name=""/> 
                                       </div>
                                    </li>
                                    <li><a data-bs-toggle="modal" data-bs-target="#person_modal"><i   className="fa fa-user-circle"></i> Person</a></li>
                                    <li>
                                       <a data-bs-toggle="collapse" href="#megamenu" role="button" aria-expanded="false" aria-controls="collapseExample"><span><i   className="fa fa-filter"></i></span> Filter </a>
                                     
                                       <div   className="collapse megamenu" id="megamenu">
                                          <div   className="card card-body">
                                             <div   className="row mb-3">
                                                <div   className="col-md-8 col-8">
                                                   <h5>Quick person filter <small>Showing all of 149 items</small></h5>
                                                </div>
                                                <div   className="col-md-4 col-4 float-right" >
                                                   <a>Clear All</a>
                                                   <button   className="btn btn-add-group">Save as new View</button>
                                                </div>
                                             </div>
                                             <div   className="row">
                                                <div   className="col-md-2">
                                                   <div   className="mt-2">Where</div>
                                                </div>
                                                <div   className="col-md-3">
                                                   <input type="date"   className="form-control" name="" value=""/>
                                                </div>
                                                <div   className="col-md-3">
                                                   <select   className="form-control">
                                                      <option>is</option>
                                                   </select>
                                                </div>
                                                <div   className="col-md-3">
                                                   <select   className="form-control">
                                                      <option>option1</option>
                                                   </select>
                                                </div>
                                                <div   className="col-md-1">
                                                   <div   className="mt-2"><a><i   className="fa fa-times"></i></a></div>
                                                </div>
                                                <div   className="col-md-2">
                                                   <div   className="mt-2">And</div>
                                                </div>
                                                <div   className="col-md-3">
                                                   <select   className="form-control">
                                                      <option>Column</option>
                                                   </select>
                                                </div>
                                                <div   className="col-md-3">
                                                   <select   className="form-control">
                                                      <option>Condition</option>
                                                   </select>
                                                </div>
                                                <div   className="col-md-3">
                                                   <select   className="form-control">
                                                      <option>value</option>
                                                   </select>
                                                </div>
                                                <div   className="col-md-1">
                                                   <div   className="mt-2"><a><i   className="fa fa-times"></i></a></div>
                                                </div>
                                                <div   className="col-md-12">
                                                   <a>+ Add new filter</a>
                                                </div>
                                                <div   className="filter-section">
                                                   <h5   className="mb-3 mt-3"> All columns </h5>
                                                   <div   className="d-flex">
                                                      <div   className="filter-options">
                                                         <div   className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div   className="filter-options">
                                                         <div   className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div   className="filter-options">
                                                         <div   className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div   className="filter-options">
                                                         <div   className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div   className="filter-options">
                                                         <div   className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div   className="filter-options">
                                                         <div   className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       {/* <!--mega menu--> */}
                                    </li>
                                    <li><a  data-bs-toggle="modal" data-bs-target="#sort"><span><i   className="fa fa-filter font-20"></i></span> Sort</a></li>
                                    <li>
                                       <a data-bs-toggle="collapse" href="#pin" role="button" aria-expanded="false" aria-controls="collapseExample"><span> <i   className="fa fa-map-pin"></i></span> </a>
                                       {/* <!--mega menu--> */}
                                       <div   className="collapse megamenu pin-megamenu" id="pin">
                                          <div   className="card card-body filter-checkbox">
                                             <h6>Choose column to</h6>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="name">
                                                <i   className="fa fa-file-text-o"></i> Name
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="name"/>
                                             </div>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="name">
                                                <i   className="fa fa-file-text-o"></i> Name
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="name"/>
                                             </div>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="name">
                                                <i   className="fa fa-file-text-o"></i> Name
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="name"/>
                                             </div>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="name">
                                                <i   className="fa fa-file-text-o"></i> Name
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="name"/>
                                             </div>
                                          </div>
                                       </div>
                                       {/* <!--mega menu--> */}
                                    </li>
                                    <li>
                                       <a data-bs-toggle="collapse" href="#hide" role="button" aria-expanded="false" aria-controls="collapseExample"><span> <i   className="fa fa-eye-slash" aria-hidden="true"></i></span> </a>
                                       {/* <!--mega menu--> */}
                                       <div   className="collapse megamenu pin-megamenu" id="hide">
                                          <div   className="card card-body filter-checkbox">
                                             <h6>Choose column to display</h6>
                                             <div   className="filter-search d-flex">
                                                <input   className="form-conrtol" name="" value="" />
                                                <button   className="btn search-custum"><i   className="fa fa-search"></i></button>
                                             </div>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="all">
                                                <i   className="fa fa-file-text-o"></i> All Columns
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="all"/>
                                             </div>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="week">
                                                <i   className="fa fa-file-text-o"></i> Week
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="week" />
                                             </div>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="week">
                                                <i   className="fa fa-file-text-o"></i> Drench Water Micro
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="week" />
                                             </div>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="week">
                                                <i   className="fa fa-file-text-o"></i> Drench Water Micro
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="week"/>
                                             </div>
                                          </div>
                                       </div>
                                       {/* <!--mega menu--> */}
                                    </li>
                                    <li>
                                       <div   className="dropdown">
                                          <a   className="dropdown-toggle btn-sm" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                          Item height
                                          </a>
                                          <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                             <li><a   className="dropdown-item" href="#">Single</a></li>
                                             <li><a   className="dropdown-item" href="#">Double</a></li>
                                             <li><a   className="dropdown-item" href="#">Triple</a></li>
                                          </ul>
                                       </div>
                                       {/* <!--<a>Search 123</a>--> */}
                                    </li>
                                    <li>
                                       <a data-bs-toggle="collapse" href="#color-megamenu" role="button" aria-expanded="false" aria-controls="collapseExample"><span><i   className="fa fa-paint-brush" aria-hidden="true"></i></span></a>
                                       {/* <!--mega menu--> */}
                                       <div   className="collapse megamenu color-megamenu" id="color-megamenu">
                                          <div   className="card card-body">
                                             <div   className="row mb-3">
                                                <div   className="col-md-7 col-7">
                                                   <h5>Conditional coloring</h5>
                                                </div>
                                                <div   className="col-md-5 col-5 float-right">
                                                   <a><i   className="fa fa-comments-o"></i> Feedback</a>
                                                   <button   className="btn btn-add-group">Save as new View</button>
                                                </div>
                                             </div>
                                             <div   className="border border-radius-10 p-3 pt-2 pb-2 mb-2">
                                                <div   className="row">
                                                   <div   className="col-md-3">
                                                      <div   className="d-flex">
                                                         <div   className="point green width-12per"></div>
                                                         <div   className="" style="width:50%">
                                                            <select   className="form-control" name="">
                                                               <option>Cell</option>
                                                               <option>Cell</option>
                                                            </select>
                                                         </div>
                                                         <div   className="mt-2" style="margin-left:10px;">
                                                            When
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div   className="col-md-3">
                                                      <select   className="form-control" name="">
                                                         <option>option 1</option>
                                                         <option>option 2</option>
                                                         <option>option 3</option>
                                                      </select>
                                                   </div>
                                                   <div   className="col-md-3">
                                                      <select   className="form-control">
                                                         <option>condition</option>
                                                         <option>choose a column</option>
                                                      </select>
                                                   </div>
                                                   <div   className="col-md-3">
                                                      <select   className="form-control">
                                                         <option>Value</option>
                                                         <option>choose a column</option>
                                                      </select>
                                                   </div>
                                                </div>
                                             </div>
                                             <a   className="btn btn-add-group" style="width:135px">+ Add new filter</a>
                                          </div>
                                       </div>
                                       {/* <!--mega menu--> */}
                                    </li>
                                    <li><a data-bs-toggle="modal" data-bs-target="#exampleModal"><i   className="fa fa-pencil-square-o" style="font-size:18px"></i></a></li>
                                 </ul>
                              </div>
                              <div   className="collapse" id="add_group1">
                                 <div   className="">
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
                                          <div   className="head-section  d-flex">
                                             <div   className="head first-head">
                                                <span   className="value first-col first-text pink-text font-16" style="text-align:left"> New Group</span>
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
                                                <span   className="value">Number</span>
                                             </div>
                                          </div>
                                       </div>
                                       {/* <!--head section--> */}
                                       <div   className="d-flex">
                                          <div   className="dropdown-sec">
                                          </div>
                                          <div   className="body-section pink-section" style="width:100%">
                                             <div   className="body1 last-head" style="width:100%">
                                                <input type="text"   className="form-control" value="" name="" placeholder="+ Add item"/>
                                             </div>
                                          </div>
                                          <button   className="btn custum-add-button bg-pink border-pink text-white">Add</button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              {/* <!--card section --> */}
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
                                             <button   className="crose-btn value-remove" onclick="ClearFields();"><i   className="fa fa-times"></i></button>
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
                                    <div   className="d-flex body-section blue-section" style="width:100%">
                                       <div   className="body1 last-head">
                                          <span   className="value first-col add-item"> + Add item </span>
                                       </div>
                                    </div>
                                 </div>
                                 {/* <!--last column-->
                                 <!--table section design--> */}
                              </div>
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
                                    <div   className="head-section yellow-section d-flex">
                                       <div   className="head first-head">
                                          <span   className="value first-col first-text yellow-text font-16"> Blue Penicillium</span>
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
                                          <span   className="value">Number</span>
                                       </div>
                                    </div>
                                 </div>
                                 {/* <!--head section-->
                                 <!--body-section--> */}
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
                                    <div   className="d-flex body-section yellow-section">
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
                                    <div   className="d-flex body-section yellow-section">
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
                                    <div   className="d-flex body-section yellow-section">
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
                                    <div   className="d-flex body-section yellow-section">
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
                                 {/* <!--body-section-->
                                 <!--last column--> */}
                                 <div   className="d-flex">
                                    <div   className="dropdown-sec">
                                    </div>
                                    <div   className="d-flex body-section yellow-section" style="width:100%">
                                       <div   className="body1 last-head">
                                          <span   className="value first-col add-item"> + Add item </span>
                                       </div>
                                    </div>
                                 </div>
                                 {/* <!--last column-->
                                 <!--table section design--> */}
                              </div>
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
                                    <div   className="head-section green-section d-flex">
                                       <div   className="head first-head">
                                          <span   className="value first-col first-text green-text font-16"> Blue Penicillium</span>
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
                                          <span   className="value">Number</span>
                                       </div>
                                    </div>
                                 </div>
                                 {/* <!--head section-->
                                 <!--body-section--> */}
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
                                    <div   className="d-flex body-section green-section">
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
                                    <div   className="d-flex body-section green-section">
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
                                    <div   className="d-flex body-section green-section">
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
                                    <div   className="d-flex body-section green-section">
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
                                    <div   className="d-flex body-section green-section">
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
                                    <div   className="d-flex body-section green-section">
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
                                 {/* <!--body-section-->
                                 <!--last column--> */}
                                 <div   className="d-flex">
                                    <div   className="dropdown-sec">
                                    </div>
                                    <div   className="d-flex body-section green-section" style="width:100%">
                                       <div   className="body1 last-head">
                                          <span   className="value first-col add-item"> + Add item </span>
                                       </div>
                                    </div>
                                 </div>
                                 {/* <!--last column-->
                                 <!--table section design--> */}
                              </div>
                              {/* <!--card section -->
                              <!--add group section--> */}
                              <div   className="collapse" id="add_group">
                                 <div   className="">
                                    <div   className="overflow-scroll penicillium-section">
                                       {/* <!--head section--> */}
                                       <div   className="d-flex">
                                          <div   className="dropdown-sec">
                                             <div   className="dropdown">
                                                <a   className="btn btn-primary btn-xs dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> </a>
                                                <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                   <li><a   className="dropdown-item" href="#">Collapse this group</a></li>
                                                   <li><a   className="dropdown-item" href="#">Collapse All group</a></li>
                                                   <li><a   className="dropdown-item" href="#">Select all items</a> </li>
                                                   <li>
                                                      <hr   className="dropdown-divider" />
                                                   </li>
                                                   <li><a   className="dropdown-item" href="#">Add Group</a></li>
                                                   <li><a   className="dropdown-item" href="#"  data-bs-toggle="dropdown" aria-expanded="false">Another Drop</a></li>
                                                   <li><a   className="dropdown-item" href="#">Rename Group</a></li>
                                                </ul>
                                             </div>
                                          </div>
                                          <div   className="head-section  d-flex">
                                             <div   className="head first-head">
                                                <span   className="value first-col first-text pink-text font-16" style="text-align:left"> New Group</span>
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
                                                <span   className="value">Number</span>
                                             </div>
                                          </div>
                                       </div>
                                       {/* <!--head section--> */}
                                       <div   className="d-flex">
                                          <div   className="dropdown-sec">
                                          </div>
                                          <div   className="body-section pink-section" style="width:100%">
                                             <div   className="body1 last-head" style="width:100%">
                                                <input type="text"   className="form-control" value="" name="" placeholder="+ Add item"/>
                                             </div>
                                          </div>
                                          <button   className="btn custum-add-button bg-pink border-pink text-white">Add</button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <button   className="btn btn-add-group" data-bs-toggle="collapse" data-bs-target="#add_group" aria-expanded="false" aria-controls="collapseExample">+ Add new group</button>
                              {/* <!--add group section--> */}
                           </div>
                           {/* <!--first tab-->
                           <!--second tab--> */}
                           <div   className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                              <div   className="top-filter-section">
                                 <ul   className="filter">
                                    <li>
                                       <div   className="dropdown">
                                          <a   className="btn btn-primary dropdown-toggle btn-sm ml-0" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                          New item
                                          </a>
                                          <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                             <li><a   className="dropdown-item" data-bs-toggle="collapse" href="#add_group1" role="button" aria-expanded="false" aria-controls="collapseExample">New group of Items</a></li>
                                             <li><a   className="dropdown-item" href="#">Import Items</a></li>
                                          </ul>
                                       </div>

                                    </li>
                                    <li>
                                       <div   className="d-lg-none d-md-none d-sm-block d-xs-block mb-d-inline">
                                          <button    className="btn"><i   className="fa fa-search"></i></button>
                                       </div>
                                    </li>
                                    <li   className="d-none d-lg-block d-md-block">
                                       <div   className="d-flex search-field">
                                          <div   className="search-btn"><i   className="fa fa-search"></i></div>
                                          <input   className="form-control" value="" placeholder="search.." name="" />
                                       </div>
                                    </li>
                                    <li><a data-bs-toggle="modal" data-bs-target="#person_modal"><i   className="fa fa-user-circle"></i> Person</a></li>
                                    <li>
                                       <a data-bs-toggle="collapse" href="#megamenu" role="button" aria-expanded="false" aria-controls="collapseExample"><span><i   className="fa fa-filter"></i></span> Filter </a>
                                       {/* <!--mega menu--> */}
                                       <div   className="collapse megamenu" id="megamenu">
                                          <div   className="card card-body">
                                             <div   className="row mb-3">
                                                <div   className="col-md-8 col-8">
                                                   <h5>Quick person filter <small>Showing all of 149 items</small></h5>
                                                </div>
                                                <div   className="col-md-4 col-4" >
                                                   <a>Clear All</a>
                                                   <button   className="btn btn-add-group">Save as new View</button>
                                                </div>
                                             </div>
                                             <div   className="row">
                                                <div   className="col-md-2">
                                                   <div   className="mt-2">Where</div>
                                                </div>
                                                <div   className="col-md-3">
                                                   <input type="date"   className="form-control" name="" value=""/>
                                                </div>
                                                <div   className="col-md-3">
                                                   <select   className="form-control">
                                                      <option>is</option>
                                                   </select>
                                                </div>
                                                <div   className="col-md-3">
                                                   <select   className="form-control">
                                                      <option>option1</option>
                                                   </select>
                                                </div>
                                                <div   className="col-md-1">
                                                   <div   className="mt-2"><a><i   className="fa fa-times"></i></a></div>
                                                </div>
                                                <div   className="col-md-2">
                                                   <div   className="mt-2">And</div>
                                                </div>
                                                <div   className="col-md-3">
                                                   <select   className="form-control">
                                                      <option>Column</option>
                                                   </select>
                                                </div>
                                                <div   className="col-md-3">
                                                   <select   className="form-control">
                                                      <option>Condition</option>
                                                   </select>
                                                </div>
                                                <div   className="col-md-3">
                                                   <select   className="form-control">
                                                      <option>value</option>
                                                   </select>
                                                </div>
                                                <div   className="col-md-1">
                                                   <div   className="mt-2"><a><i   className="fa fa-times"></i></a></div>
                                                </div>
                                                <div   className="col-md-12">
                                                   <a>+ Add new filter</a>
                                                </div>
                                                <div   className="filter-section">
                                                   <h5   className="mb-3 mt-3"> All columns </h5>
                                                   <div   className="d-flex">
                                                      <div   className="filter-options">
                                                         <div   className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div   className="filter-options">
                                                         <div   className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div   className="filter-options">
                                                         <div   className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div   className="filter-options">
                                                         <div   className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div   className="filter-options">
                                                         <div   className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                      <div   className="filter-options">
                                                         <div   className="filter-heading">Group</div>
                                                         <ul>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                            <li>Top group <span   className="right">17</span></li>
                                                         </ul>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       {/* <!--mega menu--> */}
                                    </li>
                                    <li><a  data-bs-toggle="modal" data-bs-target="#sort"><span><i   className="fa fa-filter font-20"></i></span> Sort</a></li>
                                    <li>
                                       <a data-bs-toggle="collapse" href="#pin" role="button" aria-expanded="false" aria-controls="collapseExample"><span> <i   className="fa fa-map-pin"></i></span> </a>
                                       {/* <!--mega menu--> */}
                                       <div   className="collapse megamenu pin-megamenu" id="pin">
                                          <div   className="card card-body filter-checkbox">
                                             <h6>Choose column to</h6>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="name">
                                                <i   className="fa fa-file-text-o"></i> Name
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="name"/>
                                             </div>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="name">
                                                <i   className="fa fa-file-text-o"></i> Name
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="name"/>
                                             </div>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="name">
                                                <i   className="fa fa-file-text-o"></i> Name
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="name" />
                                             </div>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="name">
                                                <i   className="fa fa-file-text-o"></i> Name
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="name" />
                                             </div>
                                          </div>
                                       </div>
                                       {/* <!--mega menu--> */}
                                    </li>
                                    <li>
                                       <a data-bs-toggle="collapse" href="#hide" role="button" aria-expanded="false" aria-controls="collapseExample"><span> <i   className="fa fa-eye-slash" aria-hidden="true"></i></span> </a>
                                       {/* <!--mega menu--> */}
                                       <div   className="collapse megamenu pin-megamenu" id="hide">
                                          <div   className="card card-body filter-checkbox">
                                             <h6>Choose column to display</h6>
                                             <div   className="filter-search d-flex">
                                                <input   className="form-conrtol" name="" value="" />
                                                <button   className="btn search-custum"><i   className="fa fa-search"></i></button>
                                             </div>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="all">
                                                <i   className="fa fa-file-text-o"></i> All Columns
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="all" />
                                             </div>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="week">
                                                <i   className="fa fa-file-text-o"></i> Week
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="week" />
                                             </div>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="week">
                                                <i   className="fa fa-file-text-o"></i> Drench Water Micro
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="week" />
                                             </div>
                                             <div   className="form-check pl-0">
                                                <label   className="form-check-label" for="week">
                                                <i   className="fa fa-file-text-o"></i> Drench Water Micro
                                                </label>
                                                <input   className="form-check-input" type="checkbox" value="" id="week" />
                                             </div>
                                          </div>
                                       </div>
                                       {/* <!--mega menu--> */}
                                    </li>
                                    <li>
                                       <div   className="dropdown">
                                          <a   className="dropdown-toggle btn-sm" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                          Item height
                                          </a>
                                          <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                             <li><a   className="dropdown-item" href="#">Single</a></li>
                                             <li><a   className="dropdown-item" href="#">Double</a></li>
                                             <li><a   className="dropdown-item" href="#">Triple</a></li>
                                          </ul>
                                       </div>
                
                                    </li>
                                    <li>
                                       <a data-bs-toggle="collapse" href="#color-megamenu" role="button" aria-expanded="false" aria-controls="collapseExample"><span><i   className="fa fa-paint-brush" aria-hidden="true"></i></span></a>
                                       {/* <!--mega menu--> */}
                                       <div   className="collapse megamenu color-megamenu" id="color-megamenu">
                                          <div   className="card card-body">
                                             <div   className="row mb-3">
                                                <div   className="col-md-7 col-7">
                                                   <h5>Conditional coloring</h5>
                                                </div>
                                                <div   className="col-md-5 col-5 float-right">
                                                   <a><i   className="fa fa-comments-o"></i> Feedback</a>
                                                   <button   className="btn btn-add-group">Save as new View</button>
                                                </div>
                                             </div>
                                             <div   className="border border-radius-10 p-3 pt-2 pb-2 mb-2">
                                                <div   className="row">
                                                   <div   className="col-md-3">
                                                      <div   className="d-flex">
                                                         <div   className="point green width-12per"></div>
                                                         <div   className="" style="width:50%">
                                                            <select   className="form-control" name="">
                                                               <option>Cell</option>
                                                               <option>Cell</option>
                                                            </select>
                                                         </div>
                                                         <div   className="mt-2" style="margin-left:10px;">
                                                            When
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div   className="col-md-3">
                                                      <select   className="form-control" name="">
                                                         <option>option 1</option>
                                                         <option>option 2</option>
                                                         <option>option 3</option>
                                                      </select>
                                                   </div>
                                                   <div   className="col-md-3">
                                                      <select   className="form-control">
                                                         <option>condition</option>
                                                         <option>choose a column</option>
                                                      </select>
                                                   </div>
                                                   <div   className="col-md-3">
                                                      <select   className="form-control">
                                                         <option>Value</option>
                                                         <option>choose a column</option>
                                                      </select>
                                                   </div>
                                                </div>
                                             </div>
                                             <a   className="btn btn-add-group" style="width:135px">+ Add new filter</a>
                                          </div>
                                       </div>
                                       {/* <!--mega menu--> */}
                                    </li>
                                    <li><a data-bs-toggle="modal" data-bs-target="#exampleModal"><i   className="fa fa-pencil-square-o" style="font-size:18px"></i></a></li>
                                 </ul>
                              </div>
                              <div   className="collapse" id="add_group1">
                                 <div   className="">
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
                                          <div   className="head-section  d-flex">
                                             <div   className="head first-head">
                                                <span   className="value first-col first-text pink-text font-16" style="text-align:left"> New Group</span>
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
                                                <span   className="value">Number</span>
                                             </div>
                                          </div>
                                       </div>
                                       {/* <!--head section--> */}
                                       <div   className="d-flex">
                                          <div   className="dropdown-sec">
                                          </div>
                                          <div   className="body-section pink-section" style="width:100%">
                                             <div   className="body1 last-head" style="width:100%">
                                                <input type="text"   className="form-control" value="" name="" placeholder="+ Add item" />
                                             </div>
                                          </div>
                                          <button   className="btn custum-add-button bg-pink border-pink text-white">Add</button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              {/* <!--card section --> */}
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
                                          <span   className="value">Number</span>
                                       </div>
                                    </div>
                                 </div>
                                 {/* <!--head section-->
                                 <!--body-section--> */}
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
                                 {/* <!--body-section-->
                                 <!--last column--> */}
                                 <div   className="d-flex">
                                    <div   className="dropdown-sec">
                                    </div>
                                    <div   className="d-flex body-section blue-section" style="width:100%">
                                       <div   className="body1 last-head">
                                          <span   className="value first-col add-item"> + Add item </span>
                                       </div>
                                    </div>
                                 </div>
                                 {/* <!--last column-->
                                 <!--table section design--> */}
                              </div>
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
                                    <div   className="head-section yellow-section d-flex">
                                       <div   className="head first-head">
                                          <span   className="value first-col first-text yellow-text font-16"> Blue Penicillium</span>
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
                                          <span   className="value">Number</span>
                                       </div>
                                    </div>
                                 </div>
                                 {/* <!--head section-->
                                 <!--body-section--> */}
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
                                    <div   className="d-flex body-section yellow-section">
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
                                    <div   className="d-flex body-section yellow-section">
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
                                    <div   className="d-flex body-section yellow-section">
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
                                    <div   className="d-flex body-section yellow-section">
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
                                 {/* <!--body-section-->
                                 <!--last column--> */}
                                 <div   className="d-flex">
                                    <div   className="dropdown-sec">
                                    </div>
                                    <div   className="d-flex body-section yellow-section" style="width:100%">
                                       <div   className="body1 last-head">
                                          <span   className="value first-col add-item"> + Add item </span>
                                       </div>
                                    </div>
                                 </div>
                                 {/* <!--last column-->
                                 <!--table section design--> */}
                              </div>
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
                                    <div   className="head-section green-section d-flex">
                                       <div   className="head first-head">
                                          <span   className="value first-col first-text green-text font-16"> Blue Penicillium</span>
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
                                          <span   className="value">Number</span>
                                       </div>
                                    </div>
                                 </div>
                                 {/* <!--head section-->
                                 <!--body-section--> */}
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
                                    <div   className="d-flex body-section green-section">
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
                                    <div   className="d-flex body-section green-section">
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
                                    <div   className="d-flex body-section green-section">
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
                                    <div   className="d-flex body-section green-section">
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
                                    <div   className="d-flex body-section green-section">
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
                                    <div   className="d-flex body-section green-section">
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
                                 {/* <!--body-section-->
                                 <!--last column--> */}
                                 <div   className="d-flex">
                                    <div   className="dropdown-sec">
                                    </div>
                                    <div   className="d-flex body-section green-section" style="width:100%">
                                       <div   className="body1 last-head">
                                          <span   className="value first-col add-item"> + Add item </span>
                                       </div>
                                    </div>
                                 </div>
                                 {/* <!--last column-->
                                 <!--table section design--> */}
                              </div>
                              {/* <!--card section -->
                              <!--add group section--> */}
                              <div   className="collapse" id="add_group">
                                 <div   className="">
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
                                          <div   className="head-section  d-flex">
                                             <div   className="head first-head">
                                                <span   className="value first-col first-text pink-text font-16" style="text-align:left"> New Group</span>
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
                                                <span   className="value">Number</span>
                                             </div>
                                          </div>
                                       </div>
                                       {/* <!--head section--> */}
                                       <div   className="d-flex">
                                          <div   className="dropdown-sec">
                                          </div>
                                          <div   className="body-section pink-section" style="width:100%">
                                             <div   className="body1 last-head" style="width:100%">
                                                <input type="text"   className="form-control" value="" name="" placeholder="+ Add item"/>
                                             </div>
                                          </div>
                                          <button   className="btn custum-add-button bg-pink border-pink text-white">Add</button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <button   className="btn btn-add-group" data-bs-toggle="collapse" data-bs-target="#add_group" aria-expanded="false" aria-controls="collapseExample">+ Add new group</button>
                              {/* <!--add group section--> */}
                           </div>
                           {/* <!--second tab--> */}
                           <div   className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div   className="top-filter-section">
                                 <ul   className="filter">
                                    <li>
                                       <div   className="dropdown">
                                          <a   className="btn btn-primary dropdown-toggle btn-sm ml-0" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                          New item
                                          </a>
                                          <ul   className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                             <li><a   className="dropdown-item" data-bs-toggle="collapse" href="#add_group1" role="button" aria-expanded="false" aria-controls="collapseExample">New group of Items</a></li>
                                             <li><a   className="dropdown-item" href="#">Import Items</a></li>
                                          </ul>
                                       </div>
                                   
                                    </li>
                                    <li>
                                       <div   className="d-lg-none d-md-none d-sm-block d-xs-block mb-d-inline">
                                          <button    className="btn"><i   className="fa fa-search"></i></button>
                                       </div>
                                    </li>
                                    <li   className="d-none d-lg-block d-md-block">
                                       <div   className="d-flex search-field">
                                          <div   className="search-btn"><i   className="fa fa-search"></i></div>
                                          <input   className="form-control" value="" placeholder="search.." name="" />
                                       </div>
                                    </li>
                                    <li><a data-bs-toggle="modal" data-bs-target="#person_modal"><i   className="fa fa-user-circle"></i> Person</a></li>
                                 </ul>
                              </div>
                              <div   className="dashboard-board">
                                 <div   className="das-head-board">
                                    <h4>Visual your board data</h4>
                                    <p>Choose your first widget to start</p>
                                 </div>
                                 <div   className="das-body-board">
                                    <div   className="row">
                                       <div   className="col-md-4">
                                          <div   className="card visual-card">
                                             <div   className="overlay-card">
                                                <div   className="overlay-content">
                                                   <i   className="fa fa-plus"></i>
                                                   <p>Create new Battery widget</p>
                                                </div>
                                             </div>
                                             {/* <img src="assets/images/battery.png"> */}
                                             <h6>Battery-Image</h6>
                                             <div   className="card-body">
                                                <h5>Battery</h5>
                                             </div>
                                          </div>
                                       </div>
                                       <div   className="col-md-4">
                                          <div   className="card visual-card">
                                             <div   className="overlay-card">
                                                <div   className="overlay-content">
                                                   <i   className="fa fa-plus"></i>
                                                   <p>Create new Battery widget</p>
                                                </div>
                                             </div>
                                             {/* <img src="assets/images/workload.png"> */}
                                             <h6>Battery-Image</h6>
                                             <div   className="card-body">
                                                <h5>workload</h5>
                                             </div>
                                          </div>
                                       </div>
                                       <div   className="col-md-4">
                                          <div   className="card visual-card">
                                             <div   className="overlay-card">
                                                <div   className="overlay-content">
                                                   <i   className="fa fa-plus"></i>
                                                   <p>Create new Battery widget</p>
                                                </div>
                                             </div>
                                             {/* <img src="assets/images/number.png"> */}
                                             <h6>Battery-Image</h6>
                                             <div   className="card-body">
                                                <h5>Number</h5>
                                             </div>
                                          </div>
                                       </div>
                                       <div   className="col-md-4">
                                          <div   className="card visual-card">
                                             <div   className="overlay-card">
                                                <div   className="overlay-content">
                                                   <i   className="fa fa-plus"></i>
                                                   <p>Create new Battery widget</p>
                                                </div>
                                             </div>
                                             {/* <img src="assets/images/timeline_gantt.png"/> */}
                                             <div   className="card-body">
                                                <h5>Gantt</h5>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
    
    
    </div>
    </div>
   

   <Footer/>
          </div> 

        


            
  </>
  );
  }
  export default Workspace