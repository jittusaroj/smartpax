import React from 'react';
import Nav from '../components/Nav';
// import '../main.css';
// import Footer from './Footer';
// import Sidebar from './Sidebar';


function Profile() {
  return (
    <>

  <link href="css/style.css" rel="stylesheet" type="text/css" />
  <link href="css/main.css" rel="stylesheet" type="text/css" />
<Nav />

<div class="wrapper">
     {/*wrapper*/}
     <div class="wrapper">
      {/*sidebar wrapper */}
      <div class="sidebar-wrapper" data-simplebar="true">
        <ul class="metismenu" id="menu">
            <li>
             <img src="assets/slogo.PNG" class="logo-icon" alt="logo icon" />
             </li>

           
            

             <li>
                <a href="">
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Dashboard"><i class='bx bx-category'></i>

                   </div>
               
                </a>
             </li>
             <li>
                <a data-bs-toggle="modal" data-bs-target="#notification">
                   <div class="parent-icon"  data-bs-placement="right" title="" data-bs-original-title="Notification" ><i class='bx bx-bell'></i>

                   </div>
               
                </a>
             </li>
             <li>
                <a href="">
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Inbox"><i class='bx bx-message-alt'></i>

                   </div>
               
                </a>
             </li>
             <li>
                <a href="">
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="My Work"><i class='bx bx-check-square'></i>

                   </div>
               
                </a>
             </li>
             <li class="mt-15">
                <a href="">
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="App"><i class='bx bx-devices'></i>

                   </div>
               
                </a>
             </li>
             <li>
                <a data-bs-toggle="modal" data-bs-target="#invite-member">
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Invite Members"><i class='bx bx-user-plus'></i>

                   </div>
               
                </a>
             </li>
             <li>
                <a href="">
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="User List"><i class='bx bx-list-plus'></i>

                   </div>
               
                </a>
             </li>
            <li>
                <a href="">
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Search Everything"><i class='bx bx-search'></i>

                   </div>
               
                </a>
             </li>
             <li>
                <a href="">
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Help"><i class='bx bx-question-mark'></i>

                   </div>
               
                </a>
             </li>

            

              <li>
                <a href="profile.html" class='color-white sidebar-user-icon'>
                  K </a>


                
             </li>

                  
             
          </ul>
         {/*end navigation*/}
      </div>
    
      
      {/*end sidebar wrapper */}
      {/*start page wrapper */}
      <div class="page-wrapper">
          <div class="page-content p-0">
            <div class="bg-blue profile-head">
                <div class="edit-file">
                       <div class="profile-section">
                           K
                        </div>
                        <div class="change-profile-option">
                             <a role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                 <div class="icon-margin">
                                     <center>
                                          <i class="fa fa-pencil"></i> <br/>
                                           Change profile picture
                                     </center>
                                 </div>
                             </a>
                              <ul class="dropdown-menu profile-dropdown" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Upload profile picture </a></li>
                                <li><a class="dropdown-item" href="#">Remove profile picture</a></li>
                                <li><a class="dropdown-item" href="#">Change avatar theme</a></li>
                                <li><a class="dropdown-item" href="#">Working status</a></li>
                              </ul>
                        </div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <input type="text" class="form-control name-input"  value="Krishna"/>
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
                {/*tab option*/}
                
                {/*tab option*/}
            </div>
             {/*end page wrapper */}
             {/*profile section*/}
               <div class="card-body">
                   <div class="tab-content" id="myTabContent">
                                   {/*personal info tab*/}
                                  <div class="tab-pane fade show active" id="personal_info" role="tabpanel" aria-labelledby="home-tab">
                                       <div class="row">
                                           <div class="col-md-3"></div>
                                           <div class="col-md-6">
                                                <h5>Overview</h5>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-user"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_title"><span>Title</span> add a title </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-envelope"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_email"><span>Email</span> <span class="__cf_email__" data-cfemail="e297918790a2858f838b8ecc818d8f">[email&#160;protected]</span> </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-phone"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_mobile"><span>Mobile number</span> +9999999999 </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-skype"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_skype"><span>Skype </span>Add a skype number </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-map"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_location"><span>Location </span>Add your location </a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-clock-o"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_timezone"><span>Timezone </span> (GMT+01:00) Berlin</a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-gift"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_birthday"><span>Birthday </span> Add your birth date</a>
                                                        </div>
                                                </div>
                                                <div class="d-flex mb-2">
                                                        <div class="icon-section">
                                                          <i class="fa fa-calendar"></i>
                                                        </div>
                                                         <div class="input-field">
                                                           <a data-bs-toggle="modal" data-bs-target="#add_workanniversary"><span>Work Anniversary </span> Add your work anniversary</a>
                                                        </div>
                                                </div>
                                                <hr/>
                                                <p>Nothing to show here : Joining teams helps you keep track on projects you're interested in, and lets people know what you're about. Explore all teams</p>
                                           </div>
                                       <div class="col-md-3"></div>
                                   </div>
                                  </div> 
                                    {/*personal info tab*/}
                                    {/*working status*/}
                                    <div class="tab-pane fade" id="working_status" role="tabpanel" aria-labelledby="profile-tab">
                                         <div class="row">
                                           <div class="col-md-3"></div>
                                           <div class="col-md-6">
                                            <h5>Update your working status</h5>
                                            <p>Let everyone know your status </p>
                                            <div class="status-option">
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="in_office"/>
                                                      <label class="form-check-label" for="in_office">
                                                        In the office
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="working_form_home"/>
                                                      <label class="form-check-label" for="working_form_home">
                                                        Working from home
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="Out_sick"/>
                                                      <label class="form-check-label" for="Out_sick">
                                                       Out sick
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="on_break"/>
                                                      <label class="form-check-label" for="on_break">
                                                       On break
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="out_off_office"/>
                                                      <label class="form-check-label" for="out_off_office">
                                                       Out of office
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="Out_sick"/>
                                                      <label class="form-check-label" for="Out_sick">
                                                       Out Sick
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="working_outside"/>
                                                      <label class="form-check-label" for="working_outside">
                                                         Working outside
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="Fimaly_time"/>
                                                      <label class="form-check-label" for="Fimaly_time">
                                                         Fimaly time
                                                      </label>
                                                  </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="status" id="do_not_distrub"/>
                                                      <label class="form-check-label" for="do_not_distrub">
                                                        Do not distrub
                                                      </label>
                                                  </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <input type="date" class="form-control mt-3 mb-3" name=""/>
                                                </div>
                                                <div class="col-md-6"></div>
                                                <div class="col-md-8 mt-2 mb-3">
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="checkbox" value="" id="disable_notifivation"/>
                                                      <label class="form-check-label" for="disable_notifivation">
                                                        Disable email and mobile notifications while not in the office
                                                      </label>
                                                    </div>
                                                </div>
                                                <div class="col-md-8 mt-2 mb-3">
                                                    <h6>User Activity Indication Control</h6>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="checkbox" value="" id="user_activity"/>
                                                      <label class="form-check-label" for="user_activity">
                                                         User Activity Indication Control
                                                      </label>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                           <div class="col-md-3"></div>
                                       </div>
                                    </div>
                                   {/*working status*/}
                                   {/*change password tab*/}
                                  <div class="tab-pane fade" id="password" role="tabpanel" aria-labelledby="contact-tab">
                                       <div class="row">
                                           <div class="col-md-3"></div>
                                           <div class="col-md-6">
                                              <h5 class="mt-2">Change Password</h5>
                                              <form method="" action="">
                                                  <div class="row mt-3">
                                                      <div class="col-md-4">
                                                          <label class="mb-2 mt-2">Current Password</label>
                                                      </div>
                                                      <div class="col-md-8">
                                                          <input type="password" class="form-control mb-3" name=""/>
                                                      </div>
                                                      <div class="col-md-4">
                                                          <label class="mb-2 mt-2">New Password</label>
                                                      </div>
                                                      <div class="col-md-8">
                                                          <input type="password" class="form-control mb-3" name=""/>
                                                      </div>
                                                      <div class="col-md-4">
                                                          <label class="mb-2 mt-2">Confirm Password</label>
                                                      </div>
                                                      <div class="col-md-8">
                                                          <input type="password" class="form-control mb-3" name=""/>
                                                      </div>
                                                      <div class="col-md-12">
                                                         <div style="float:right">
                                                              Forgot password ? <a>Resend password via mail</a>
                                                         </div>
                                                      </div>
                                                  </div>
                                                  <hr/>
                                                  <button type="submit" class="btn btn-primary mb-2" style="float:right">Save</button>
                                              </form>
                                              </div>
                                               <div class="col-md-3"></div>
                                           </div>
                                  </div>
                                   {/*change password tab*/}
                                   {/*preference-tab*/}
                                  <div class="tab-pane fade" id="Preferences" role="tabpanel" aria-labelledby="contact-tab">
                                       <div class="row">
                                           <div class="col-md-3"></div>
                                           <div class="col-md-6">
                                              <h6 class="mt-3">Time Format</h6>
                                              <form>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="time_format" id="time_format"/>
                                                      <label class="form-check-label" for="time_format">
                                                        12 hours 12:30 PM
                                                      </label>
                                                    </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="time_format" id="time_format1"/>
                                                      <label class="form-check-label" for="time_format1">
                                                        24 hours 12:30 PM
                                                      </label>
                                                    </div>
                                              </form>
                                              <h6 class="mt-3">Date Format</h6>
                                              <form>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="date_format" id="date"/>
                                                      <label class="form-check-label" for="date">
                                                         May 25 2022
                                                      </label>
                                                    </div>
                                                  <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="date_format" id="date1"/>
                                                      <label class="form-check-label" for="date1">
                                                        25 May 2022
                                                      </label>
                                                    </div>
                                              </form>
                                          </div>
                                           <div class="col-md-3"></div>
                                       </div>
                                  </div>
                                   {/*preference-tab*/}
                                   {/*notification tab*/}
                                  <div class="tab-pane fade" id="Notifications" role="tabpanel" aria-labelledby="contact-tab">
                                            <div class="row">
                                               <div class="col-md-3"></div>
                                               <div class="col-md-6">
                                                   <h5>Manage your notification settings</h5>
                                                   <p>We may still send you important notifications about your account and content outside of your preferred notification settings.</p>
                                                   <div class="border p-2 mb-3 shadow-sm">
                                                       <div class="row">
                                                           <div class="col-md-2 col-2 text-center">
                                                               <i class="fa fa-file mt-2" style="font-size:25px"></i>
                                                           </div>
                                                           <div class="col-md-6 col-10">
                                                               <h6>Desktop notifications</h6>
                                                               <p>Receive notifications directly on my Windows</p>
                                                           </div>
                                                           <div class="col-md-4 col-12">
                                                               <button class="btn btn-primary btn-sm mt-2" style="float:right">Enable desktop setting</button>
                                                           </div>
                                                       </div>
                                                   </div>
                                                       <a class="text-black" data-bs-toggle="collapse" href="#email_notifiction" role="button" aria-expanded="false" aria-controls="email_notifiction">
                                                                <div class="border p-2 shadow-sm">
                                                                   <div class="row">
                                                                       <div class="col-md-2 col-2 text-center">
                                                                           <i class="fa fa-envelope mt-2" style="font-size:25px"></i>
                                                                       </div>
                                                                       <div class="col-md-6 col-8">
                                                                           <h6>Email notifications</h6>
                                                                           <p>Send me notification via email</p>
                                                                       </div>
                                                                       <div class="col-md-4 col-2">
                                                                           <div class="mt-2 collapse-right" style="float:right"><i class="fa fa-chevron-down"></i></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                       </a>
                                                        <div class="collapse multi-collapse" id="email_notifiction">
                                                              <div class="card card-body">
                                                                   <div class="form-check">
                                                                      <input class="form-check-input" type="checkbox" value="" id="assign_me" checked/>
                                                                      <label class="form-check-label" for="assign_me">
                                                                        Assigns me to an Item
                                                                      </label>
                                                                    </div>
                                                                   <div class="form-check">
                                                                      <input class="form-check-input" type="checkbox" value="" id="mentions" checked/>
                                                                      <label class="form-check-label" for="mentions">
                                                                         Mentions me in a post or reply
                                                                      </label>
                                                                    </div>
                                                                    <hr/>
                                                                   <div class="form-check">
                                                                      <input class="form-check-input" type="checkbox" value="" id="update" checked/>
                                                                      <label class="form-check-label" for="update">
                                                                         Writes an update on an Item I’m the owner of
                                                                      </label>
                                                                    </div>
                                                                   <div class="form-check">
                                                                      <input class="form-check-input" type="checkbox" value="" id="subscribed" checked/>
                                                                      <label class="form-check-label" for="subscribed">
                                                                         Writes an update on an Item I’m subscribed to
                                                                      </label>
                                                                    </div>
                                                                    <hr/>
                                                                   <div class="form-check">
                                                                      <input class="form-check-input" type="checkbox" value="" id="Replies" checked/>
                                                                      <label class="form-check-label" for="Replies">
                                                                         Replies or likes a conversation I’m a part of
                                                                      </label>
                                                                    </div>
                                                                   <div class="form-check">
                                                                      <input class="form-check-input" type="checkbox" value="" id="my_update" checked/>
                                                                      <label class="form-check-label" for="my_update">
                                                                        Replies to my update
                                                                      </label>
                                                                    </div>
                                                              </div>
                                                      </div>
                                                           <a class="text-black" data-bs-toggle="collapse" href="#slack_notification" role="button" aria-expanded="false" aria-controls="slack_notification">
                                                                    <div class="border p-2 mt-3 shadow-sm">
                                                                       <div class="row">
                                                                           <div class="col-md-2 col-2 text-center">
                                                                              <img src="assets/images/slack-2x.png" style="height:40px"/>
                                                                           </div>
                                                                           <div class="col-md-6 col-8">
                                                                               <h6>Slack notifications</h6>
                                                                               <p>Get a Slack notification when someone assigns or mentions me in an update</p>
                                                                           </div>
                                                                           <div class="col-md-4 col-2">
                                                                               <div class="mt-2 collapse-right" style="float:right"><i class="fa fa-chevron-down"></i></div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                           </a>
                                                            <div class="collapse multi-collapse" id="slack_notification">
                                                                  <div class="card card-body">
                                                                       <button class="btn btn-primary btn-sm mt-2 mb-2" style="width:200px">Enable slack notification</button>
                                                                       <p>Examples :</p>
                                                                       <img src="assets/images/slack-notification-example-2x.png" class="w-100 mb-2"/>
                                                                       <p class="mb-3">You can unsubscribe easily by going to the monday.com app in Slack.</p>
                                                                       <p>To ensure all notifications are delivered successfully to Slack, make sure your team is using the same email address both in Slack and in monday.com</p>
                                                                  </div>
                                                          </div>
                                                          
                                                           <a class="text-black" data-bs-toggle="collapse" href="#in_smart" role="button" aria-expanded="false" aria-controls="in_smart">
                                                                <div class="border p-2 mt-3 shadow-sm">
                                                                   <div class="row">
                                                                       <div class="col-md-2 col-2 text-center">
                                                                           <i class="fa fa-bell mt-2" style="font-size:25px"></i>
                                                                       </div>
                                                                       <div class="col-md-6 col-8">
                                                                           <h6>In Smart</h6>
                                                                           <p>Send me notification on smartpax when someone...</p>
                                                                       </div>
                                                                       <div class="col-md-4 col-2">
                                                                           <div class="mt-2 collapse-right" style="float:right"><i class="fa fa-chevron-down"></i></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                       </a>
                                                            <div class="collapse multi-collapse" id="in_smart">
                                                                  <div class="card card-body">
                                                                       <div class="form-check">
                                                                          <input class="form-check-input" type="checkbox" value="" id="likes" checked/>
                                                                          <label class="form-check-label" for="likes">
                                                                             Likes my update
                                                                          </label>
                                                                        </div>
                                                                       <div class="form-check">
                                                                          <input class="form-check-input" type="checkbox" value="" id="on_reply" checked/>
                                                                          <label class="form-check-label" for="on_reply">
                                                                            Replies to my update
                                                                          </label>
                                                                        </div>
                                                                       <div class="form-check">
                                                                          <input class="form-check-input" type="checkbox" value="" id="conversation" checked/>
                                                                          <label class="form-check-label" for="conversation">
                                                                              Replies or likes a conversation I’m a part of
                                                                          </label>
                                                                        </div>
                                                                       <div class="form-check">
                                                                          <input class="form-check-input" type="checkbox" value="" id="on_subscribed" checked/>
                                                                          <label class="form-check-label" for="on_subscribed">
                                                                             Subscribes me to a Board/Item/Team
                                                                          </label>
                                                                        </div>
                                                                       <div class="form-check">
                                                                          <input class="form-check-input" type="checkbox" value="" id="Writes" checked/>
                                                                          <label class="form-check-label" for="Writes">
                                                                             Writes an update on an Item I’m subscribed to
                                                                          </label>
                                                                        </div>
                                                                      <br/>
                                                                  </div>
                                                          </div>
                                                      </div>
                                               <div class="col-md-3"></div>
                                           </div>
                                  </div>
                                  {/*notification tab*/}
                                  {/*session tab*/}
                                  <div class="tab-pane fade" id="Session_history" role="tabpanel" aria-labelledby="contact-tab">
                                       <div class="row">
                                       <div class="col-md-2"></div>
                                        <div class="col-md-8">
                                          <div class="row mb-2">
                                              <div class="col-md-6 col-6">
                                                  <p>15 Sessions</p>
                                              </div>
                                              <div class="col-md-6 col-12">
                                                 <div style="float:right"> <i class="fa fa-clock-o"></i> Recent Session : May 25, 2022 01:15 PM</div>
                                              </div>
                                          </div>
                                          <table class="table session-table">
                                              <thead>
                                                  <tr>
                                                      <td>Device</td>
                                                      <td>Location</td>
                                                      <td>Last usage</td>
                                                      <td></td>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr>
                                                      <td>
                                                          <div class="row">
                                                              <div class="col-auto p-2">
                                                                   <span class="f-20"><i class="fa fa-desktop" aria-hidden="true"></i> </span> 
                                                              </div>
                                                              <div class="col-auto">
                                                                    <span class="extra-font">Windows</span> <br/> Chorme
                                                              </div>
                                                          </div>
                                                       </td>
                                                       <td>
                                                           Lucknow, Uttar Pradesh, IN
                                                           <br/><small>2409:4063:4202:8ad5:902c:bf99:9fc9:6873</small>
                                                       </td>
                                                       <td>
                                                           May 25, 2022 01:15 PM
                                                           <br/>
                                                           <small>11 M</small>
                                                       </td>
                                                       <td>
                                                           <a class="log_out">Log out</a>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                      <td>
                                                          <div class="row">
                                                              <div class="col-auto p-2">
                                                                   <span class="f-20"><i class="fa fa-desktop" aria-hidden="true"></i> </span> 
                                                              </div>
                                                              <div class="col-auto">
                                                                    <span class="extra-font">Windows</span> <br/> Chorme
                                                              </div>
                                                          </div>
                                                       </td>
                                                       <td>
                                                           Lucknow, Uttar Pradesh, IN
                                                           <br/><small>2409:4063:4202:8ad5:902c:bf99:9fc9:6873</small>
                                                       </td>
                                                       <td>
                                                           May 25, 2022 01:15 PM
                                                           <br/>
                                                           <small>11 M</small>
                                                       </td>
                                                       <td>
                                                           <a class="log_out">Log out</a>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                      <td>
                                                          <div class="row">
                                                              <div class="col-auto p-2">
                                                                   <span class="f-20"><i class="fa fa-desktop" aria-hidden="true"></i> </span> 
                                                              </div>
                                                              <div class="col-auto">
                                                                    <span class="extra-font">Windows</span> <br/> Chorme
                                                              </div>
                                                          </div>
                                                       </td>
                                                       <td>
                                                           Lucknow, Uttar Pradesh, IN
                                                           <br/><small>2409:4063:4202:8ad5:902c:bf99:9fc9:6873</small>
                                                       </td>
                                                       <td>
                                                           May 25, 2022 01:15 PM
                                                           <br/>
                                                           <small>11 M</small>
                                                       </td>
                                                       <td>
                                                           <a class="log_out">Log out</a>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                      <td>
                                                          <div class="row">
                                                              <div class="col-auto p-2">
                                                                   <span class="f-20"><i class="fa fa-desktop" aria-hidden="true"></i> </span> 
                                                              </div>
                                                              <div class="col-auto">
                                                                    <span class="extra-font">Windows</span> <br/> Chorme
                                                              </div>
                                                          </div>
                                                       </td>
                                                       <td>
                                                           Lucknow, Uttar Pradesh, IN
                                                           <br/><small>2409:4063:4202:8ad5:902c:bf99:9fc9:6873</small>
                                                       </td>
                                                       <td>
                                                           May 25, 2022 01:15 PM
                                                           <br/>
                                                           <small>11 M</small>
                                                       </td>
                                                       <td>
                                                           <a class="log_out">Log out</a>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                      <td>
                                                          <div class="row">
                                                              <div class="col-auto p-2">
                                                                   <span class="f-20"><i class="fa fa-desktop" aria-hidden="true"></i> </span> 
                                                              </div>
                                                              <div class="col-auto">
                                                                    <span class="extra-font">Windows</span> <br/> Chorme
                                                              </div>
                                                          </div>
                                                       </td>
                                                       <td>
                                                           Lucknow, Uttar Pradesh, IN
                                                           <br/><small>2409:4063:4202:8ad5:902c:bf99:9fc9:6873</small>
                                                       </td>
                                                       <td>
                                                           May 25, 2022 01:15 PM
                                                           <br/>
                                                           <small>11 M</small>
                                                       </td>
                                                       <td>
                                                           <a class="log_out">Log out</a>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                      <td>
                                                          <div class="row">
                                                              <div class="col-auto p-2">
                                                                   <span class="f-20"><i class="fa fa-desktop" aria-hidden="true"></i> </span> 
                                                              </div>
                                                              <div class="col-auto">
                                                                    <span class="extra-font">Windows</span> <br/> Chorme
                                                              </div>
                                                          </div>
                                                       </td>
                                                       <td>
                                                           Lucknow, Uttar Pradesh, IN
                                                           <br/><small>2409:4063:4202:8ad5:902c:bf99:9fc9:6873</small>
                                                       </td>
                                                       <td>
                                                           May 25, 2022 01:15 PM
                                                           <br/>
                                                           <small>11 M</small>
                                                       </td>
                                                       <td>
                                                           <a class="log_out">Log out</a>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                      <td>
                                                          <div class="row">
                                                              <div class="col-auto p-2">
                                                                   <span class="f-20"><i class="fa fa-desktop" aria-hidden="true"></i> </span> 
                                                              </div>
                                                              <div class="col-auto">
                                                                    <span class="extra-font">Windows</span> <br/> Chorme
                                                              </div>
                                                          </div>
                                                       </td>
                                                       <td>
                                                           Lucknow, Uttar Pradesh, IN
                                                           <br/><small>2409:4063:4202:8ad5:902c:bf99:9fc9:6873</small>
                                                       </td>
                                                       <td>
                                                           May 25, 2022 01:15 PM
                                                           <br/>
                                                           <small>11 M</small>
                                                       </td>
                                                       <td>
                                                           <a class="log_out">Log out</a>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                      <td>
                                                          <div class="row">
                                                              <div class="col-auto p-2">
                                                                   <span class="f-20"><i class="fa fa-desktop" aria-hidden="true"></i> </span> 
                                                              </div>
                                                              <div class="col-auto">
                                                                    <span class="extra-font">Windows</span> <br/> Chorme
                                                              </div>
                                                          </div>
                                                       </td>
                                                       <td>
                                                           Lucknow, Uttar Pradesh, IN
                                                           <br/><small>2409:4063:4202:8ad5:902c:bf99:9fc9:6873</small>
                                                       </td>
                                                       <td>
                                                           May 25, 2022 01:15 PM
                                                           <br/>
                                                           <small>11 M</small>
                                                       </td>
                                                       <td>
                                                           <a class="log_out">Log out</a>
                                                       </td>
                                                  </tr>
                                                  <tr>
                                                      <td>
                                                          <div class="row">
                                                              <div class="col-auto p-2">
                                                                   <span class="f-20"><i class="fa fa-desktop" aria-hidden="true"></i> </span> 
                                                              </div>
                                                              <div class="col-auto">
                                                                    <span class="extra-font">Windows</span> <br/> Chorme
                                                              </div>
                                                          </div>
                                                       </td>
                                                       <td>
                                                           Lucknow, Uttar Pradesh, IN
                                                           <br/><small>2409:4063:4202:8ad5:902c:bf99:9fc9:6873</small>
                                                       </td>
                                                       <td>
                                                           May 25, 2022 01:15 PM
                                                           <br/>
                                                           <small>11 M</small>
                                                       </td>
                                                       <td>
                                                           <a class="log_out">Log out</a>
                                                       </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                         </div>
                                           <div class="col-md-2"></div>
                                       </div>
                                  </div>
                                   {/*session tab*/}
                                </div>
                       </div>
                 </div>
             {/*profile section*/}
             {/*start overlay*/}
             <div class="overlay toggle-icon"></div>
             {/*end overlay*/}
             {/*Start Back To Top Button*/}  <a href="javaScript:;" class="back-to-top"><i class='bx bxs-up-arrow-alt'></i></a>
             {/*End Back To Top Button*/}
             <footer class="page-footer">
                <p class="mb-0">Copyright © 2022. All rights reserved. Powered BY Binplus Technologies Pvt. Limited </p>
             </footer>
          </div>
          {/*modals*/}
           {/*info modal*/}
           <div class="modal fade" id="add_title" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog profile-modal">
                <div class="modal-content">
                  <div class="modal-header border-top-blue border-bottom-0">
                    <h5 class="modal-title" id="exampleModalLabel"> Title</h5>
                    <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form action="" method="">
                          <div class="modal-body">
                           <input class="form-control" name="" value=""/>
                          </div>
                          <div class="modal-footer borde-top-0">
                            {/*<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                            <button type="button" class="btn btn-primary">Save</button>
                          </div>
                  </form>
                </div>
              </div>
            </div>
            {/*info_modal*/}
           {/*email modal*/}
           <div class="modal fade" id="add_email" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog profile-modal">
                <div class="modal-content">
                  <div class="modal-header border-top-blue border-bottom-0">
                    <h5 class="modal-title" id="exampleModalLabel"> Email</h5>
                    <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form action="" method="">
                          <div class="modal-body">
                              <div class="row">
                                  <div class="col-md-5 col-5">
                                      <label class="mb-2">Current Email</label>
                                  </div>
                                  <div class="col-md-7 col-7">
                                    <div class="mb-2">
                                        <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="532620362113343e323a3f7d303c3e">[email&#160;protected]</a>
                                    </div>
                                  </div>
                                  <div class="col-md-5">
                                     <label class="mb-2">New  Email</label>
                                  </div>
                                  <div class="col-md-7">
                                      <input type="email" class="form-control" name="" value="" placeholder="current email"/>
                                  </div>
                                  <div class="col-md-5">
                                     <label class="mb-2">Current Password</label>
                                  </div>
                                  <div class="col-md-7">
                                      <input type="password" class="form-control" name="" value="" placeholder=" "/>
                                  </div>
                              </div>
                           
                          </div>
                          <div class="modal-footer borde-top-0">
                            {/*<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                            <button type="button" class="btn btn-primary">Change email address</button>
                          </div>
                  </form>
                </div>
              </div>
            </div>
            {/*email*/}
           {/*mobile modal*/}
           <div class="modal fade" id="add_mobile" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog profile-modal">
                <div class="modal-content">
                  <div class="modal-header border-top-blue border-bottom-0">
                    <h5 class="modal-title" id="exampleModalLabel"> Email</h5>
                    <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form action="" method="">
                          <div class="modal-body">
                              <div class="row">
                                  <div class="col-md-5">
                                      <label class="mb-2">Mobile</label>
                                  </div>
                                 <div class="col-md-7">
                                      <input type="number" class="form-control" name="" value="" />
                                  </div>
                                  <div class="col-md-5">
                                     <label class="mb-2">Mobile</label>
                                  </div>
                                  <div class="col-md-7">
                                      <input type="number" class="form-control" name="" value=""/>
                                  </div>
                                  <div class="col-md-12">
                                       <div class="form-check mt-2">
                                        <input class="form-check-input" type="checkbox" id="app_link"/>
                                        <label class="form-check-label" for="app_link">
                                          Send me app download link
                                        </label>
                                      </div>
                                  </div>
                              </div>
                           
                          </div>
                          <div class="modal-footer borde-top-0">
                            <button type="button" class="btn btn-primary">Save</button>
                          </div>
                  </form>
                </div>
              </div>
            </div>
            {/*mobile modal*/}
             {/*skype modal*/}
               <div class="modal fade" id="add_skype" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog profile-modal">
                    <div class="modal-content">
                      <div class="modal-header border-top-blue border-bottom-0">
                        <h5 class="modal-title" id="exampleModalLabel"> Skype</h5>
                        <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <form action="" method="">
                              <div class="modal-body">
                               <input class="form-control" name="" value=""/>
                              </div>
                              <div class="modal-footer borde-top-0">
                                {/*<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                                <button type="button" class="btn btn-primary">Save</button>
                              </div>
                      </form>
                    </div>
                  </div>
                </div>
            {/*skype*/}
             {/*location modal*/}
               <div class="modal fade" id="add_location" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog profile-modal">
                    <div class="modal-content">
                      <div class="modal-header border-top-blue border-bottom-0">
                        <h5 class="modal-title" id="exampleModalLabel"> Location</h5>
                        <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <form action="" method="">
                              <div class="modal-body">
                               <input class="form-control" name="" value=""/>
                              </div>
                              <div class="modal-footer borde-top-0">
                                {/*<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                                <button type="button" class="btn btn-primary">Save</button>
                              </div>
                      </form>
                    </div>
                  </div>
                </div>
            {/*location*/}
             {/*timezone modal*/}
               <div class="modal fade" id="add_timezone" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog profile-modal">
                    <div class="modal-content">
                      <div class="modal-header border-top-blue border-bottom-0">
                        <h5 class="modal-title" id="exampleModalLabel"> Time Zone</h5>
                        <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <form action="" method="">
                              <div class="modal-body">
                               <input type="time" class="form-control" name="" value=""/>
                              </div>
                              <div class="modal-footer borde-top-0">
                                {/*<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                                <button type="button" class="btn btn-primary">Save</button>
                              </div>
                      </form>
                    </div>
                  </div>
                </div>
            {/*timezone*/}
             {/*birthday modal*/}
               <div class="modal fade" id="add_birthday" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog profile-modal">
                    <div class="modal-content">
                      <div class="modal-header border-top-blue border-bottom-0">
                        <h5 class="modal-title" id="exampleModalLabel"> Birthday </h5>
                        <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <form action="" method="">
                              <div class="modal-body">
                               <input type="date" class="form-control" name="" value=""/>
                              </div>
                              <div class="modal-footer borde-top-0">
                                {/*<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                                <button type="button" class="btn btn-primary">Save</button>
                              </div>
                      </form>
                    </div>
                  </div>
                </div>
            {/*birthday*/}
             {/*work anniversary modal*/}
               <div class="modal fade" id="add_workanniversary" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog profile-modal">
                    <div class="modal-content">
                      <div class="modal-header border-top-blue border-bottom-0">
                        <h5 class="modal-title" id="exampleModalLabel"> When did you join smartpax </h5>
                        <button type="button" class="btn-close custum-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <form action="" method="">
                              <div class="modal-body">
                               <input type="date" class="form-control" name="" value=""/>
                              </div>
                              <div class="modal-footer borde-top-0">
                                {/*<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                                <button type="button" class="btn btn-primary">Save</button>
                              </div>
                      </form>
                    </div>
                  </div>
                </div>
            {/*work anniversary*/}
          {/*modals*/}
          {/*end wrapper*/}
      </div>
</div>
    
    </>
  );
}
export default Profile;