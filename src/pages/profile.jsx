import React from 'react';
import '../Css/Main.css';
import Footer from'./Footer';
import Sidebar from '../components/Sidebar'
import Personaltab from'../components/Profile/Personaltab';
import Workstatus from'../components/Profile/Workstatus';
import Password from'../components/Profile/Password';
import Preference from '../components/Profile/Preference';
import Notification from '../components/Profile/Notification';
import Sessionhistory from '../components/Profile/Sessionhistory';
import {Dropdown, Form } from 'react-bootstrap';


function Profile ()  {
    return (
        <>
         <div classNameName="wrapper">
         
         <Sidebar/>
   <div class="page-wrapper" >
          <div class="page-content p-0">
            <div class="bg-blue profile-head">
                <div class="edit-file">
                       <div class="profile-section">
                         {/* <span> V</span>  */}
                         <img src="blank-profile.png" alt="profile" className='profile-img-width'/>

                        </div>
                        

                        <div class="change-profile-option">
                        <Dropdown >

                        <Dropdown.Toggle  id="dropdown-basic" className="btn-toggle"  >
                        <div class="icon-margin color-black" >
                                     <center>
                                     <i class="fa fa-pencil"></i> 
                                      <br/>
                                      Change Profile Pic
                                     </center>
                                    
                                  
                                 </div>
  </Dropdown.Toggle>
                             

                             <Dropdown.Menu>
    <Dropdown.Item  className="color-black" data-bs-toggle="modal" data-bs-target="#update_profile">Upload profile picture</Dropdown.Item>
    <Dropdown.Item href="#/action-2" className="color-black">Remove profile picture</Dropdown.Item>
  
  </Dropdown.Menu>
                              
</Dropdown>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        {/* <input type="text" class="form-control name-input"  value="Krishna" /> */}
                        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="text" className='name-input' value="Vishesh Singh" />
    
  </Form.Group>

</Form>
                    </div>
                    <div class="col-md-4"></div>
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <div class="profile-tabs">
                              <ul class="nav nav-tabs" id="myTab" role="tablist">
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#personal_info" type="button" role="tab" aria-controls="home" aria-selected="true">Personal info</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#working_status" type="button" role="tab" aria-controls="profile" aria-selected="false">Working Status</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#password" type="button" role="tab" aria-controls="contact" aria-selected="false">Password</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Preferences" type="button" role="tab" aria-controls="contact" aria-selected="false">Preferences</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Notifications" type="button" role="tab" aria-controls="contact" aria-selected="false">Notifications</button>
                                  </li>
                                  <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Session_history" type="button" role="tab" aria-controls="contact" aria-selected="false">Session history</button>
                                  </li>
                              </ul>
                        </div>
                    </div>
                  
                </div>
               
            </div>

            <div class="tab-content mt-4 mx-5 height" id="myTabContent">
                             
                                  <Personaltab/>
                                  
                                   <Workstatus/>
                                  

                                    <Password/>

                                    <Preference/>

                                    <Notification/>

                                    <Sessionhistory/>
                                   
                 
                 
            
            
            
            
            </div>

              </div>      
                  <Footer/>
          </div> 

          </div>

          <div class="modal fade" id="update_profile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog profile-modal">
                <div class="modal-content">
                  <div class="modal-header border-top-blue border-bottom-0">
                    <h5 class="modal-title" id="exampleModalLabel"> Update Profile Photo</h5>
                    <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form action="" method="">
                          <div class="modal-body">
                          <div className="name-first-word">
                                      K
                                  </div>
                                  
                                 
                                    <label for="profile_img" class="update_image_label btn btn-primary">Upload image</label>
                                    <input type="file" name="" id="profile_img" value="" class="update_profile_img"/>
                                
                              
                                </div>
                          <div class="modal-footer borde-top-0">
                       
                            <button type="button" class="btn btn-primary">Save</button>
                          </div>
                  </form>
                </div>
              </div>
            </div>
          
  
  
  </>
  );
  }
  export default Profile 