import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {Dropdown , DropdownButton , ButtonGroup  } from 'react-bootstrap';

function Usermodal ()  {
    return (
        <>
       <div class="modal " id="userModal" tabindex="-1" aria-hidden="true" >
                                  <div class="modal-dialog custom-dialog modal-dialog-centered account-width" >
                                     <div class="modal-content">
                                        <div class="modal-header">
                                           <h5 class="modal-title blue">Account</h5>
                                        
                                        </div>
                                        <div class="modal-body" > 
                                          <div class="row">
                                 
                                             <div class="col-md-12 col-sm-12 col-12">
                                              
                                                <div class="account">
                                                   <Link  to={{ pathname: '/profile', }} className=''><i class='bx bx-user'></i> My Profile</Link>
                                                  
                                                   <Link to={{ pathname: '/', }} className=''><i class='bx bx-cog'></i> Admin</Link>
                                                   <Link to={{ pathname: '/Userlist', }} className=''><i class='bx bx-group'></i> Teams </Link>
                                                   <Link to={{ pathname: '/', }} className=''><i class="bx bx-log-out" ></i> Logout</Link>
                                                   <hr style={{width:'100%'}}/>
                                                   <a data-bs-toggle="modal" data-bs-target="#invite-member" className='mb-2'><i class='bx bx-plus'></i> Invite </a>
                                                   {/* <a href="#" className='team-font'><i class='bx bx-user'></i> Change Theme</a> */}
            <div className="mb-2 d-flex">
            <i class='bx bx-sun'></i>
      <DropdownButton
     
        key={`end`}
        id={`dropdown-button-drop-end`}
        drop={`end`}
        variant="secondary"
        title={` Change Theme `}
        className={`Userdrop`} 
       
      >
         
        <Dropdown.Item eventKey="1"><i class="bx bx-sun"></i> Light</Dropdown.Item>
        <Dropdown.Item eventKey="2"><i class="bx bx-moon"></i> Dark</Dropdown.Item>
        <Dropdown.Item eventKey="3"><i class="bx bx-star"></i> Night</Dropdown.Item>
        <Dropdown.Item eventKey="3"><i class="bx bx-cog"></i> System Default</Dropdown.Item>
        
        
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