import React from 'react';
import Footer from'./Footer';
import Invite from "../components/Invite";
import Sidebar from'../components/Sidebar';
import '../Css/Main.css';



function Userlist ()  {
    return (
        <>
         <div classNameName="wrapper">
         
         <Sidebar/>
   <div class="page-wrapper">
       <div className='page-content'>
       <div class="row">
               <div class="col-12 col-lg-12 col-md-12 col-sm-12">
                   <div>
                  <h4 class="mb-3">All users</h4>
                  <button class="btn btn-primary float-right invite-btn" data-bs-toggle="modal" data-bs-target="#invite-member"><i className='bx bx-user-plus'></i>Invite</button>  
                  </div>
                  {/* <!--search section--> */}
                   <div class="row">
                       <div class="col-md-3">
                           <div class="d-flex mb-3">
                               <input class="form-control user-search border" name="" />
                               <button class="btn btn-user-search"><i class="fa fa-search"></i></button>
                           </div>
                       </div>
                      
                   </div>

                  {/* <!--search section--> */}
                  {/* <!--user table section--> */}
                   <table class="table user-list-table table-responsive">
                       <thead>
                           <tr>
                               <th>Name</th>
                               <th>Email</th>
                               <th>Title</th>
                               <th>Teams</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <td>
                                   <img src="pb.png" /> Pieter Benadie <button class="btn btn-outline-primary btn-sm">Pending</button>
                               </td>
                               <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                               <td><a href="mailto:+91 9999999999">+91 9999999999</a></td>
                               <td>No Team</td>
                           </tr>
                           <tr>
                               <td>
                                   <img src="pb.png" /> Pieter Benadie
                               </td>
                               <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                               <td><a href="mailto:+91 9999999999">+91 9999999999</a></td>
                               <td>
                                   <img src="team_default.png" class="right-user-img" />
                                   <img src="team_default.png" class="right-user-img" />
                              </td>
                           </tr>
                           <tr>
                               <td>
                                   <img src="pb.png" /> Pieter Benadie
                               </td>
                               <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                               <td><a href="mailto:+91 9999999999">+91 9999999999</a></td>
                               <td><img src="team_default.png" class="right-user-img" /></td>
                           </tr>
                           <tr>
                               <td>
                                   <img src="pb.png" /> Pieter Benadie
                               </td>
                               <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                               <td><a href="mailto:+91 9999999999">+91 9999999999</a></td>
                               <td><img src="team_default.png" class="right-user-img" /></td>
                           </tr>
                           <tr>
                               <td>
                                   <img src="pb.png" /> Pieter Benadie
                               </td>
                               <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                               <td><a href="mailto:+91 9999999999">+91 9999999999</a></td>
                               <td><img src="team_default.png" class="right-user-img" /></td>
                           </tr>
                           <tr>
                               <td>
                                   <img src="pb.png" /> Pieter Benadie
                               </td>
                               <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                               <td><a href="mailto:+91 9999999999">+91 9999999999</a></td>
                               <td><img src="team_default.png" class="right-user-img" /></td>
                           </tr>
                           <tr>
                               <td>
                                   <img src="pb.png" /> Pieter Benadie
                               </td>
                               <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                               <td><a href="mailto:+91 9999999999">+91 9999999999</a></td>
                               <td><img src="team_default.png" class="right-user-img" /></td>
                           </tr>
                           <tr>
                               <td>
                                   <img src="pb.png" /> Pieter Benadie
                               </td>
                               <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                               <td><a href="mailto:+91 9999999999">+91 9999999999</a></td>
                               <td><img src="team_default.png" class="right-user-img" /></td>
                           </tr>
                           <tr>
                               <td>
                                   <img src="pb.png" /> Pieter Benadie
                               </td>
                               <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                               <td><a href="mailto:+91 9999999999">+91 9999999999</a></td>
                               <td><img src="team_default.png" class="right-user-img" /></td>
                           </tr>
                           <tr>
                               <td>
                                   <img src="pb.png" /> Pieter Benadie
                               </td>
                               <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                               <td><a href="mailto:+91 9999999999">+91 9999999999</a></td>
                               <td><img src="team_default.png" class="right-user-img" /></td>
                           </tr>
                           <tr>
                               <td>
                                   <img src="pb.png" /> Pieter Benadie
                               </td>
                               <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                               <td><a href="mailto:+91 9999999999">+91 9999999999</a></td>
                               <td><img src="team_default.png" class="right-user-img" /></td>
                           </tr>
                           <tr>
                               <td>
                                   <img src="pb.png" /> Pieter Benadie
                               </td>
                               <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                               <td><a href="mailto:+91 9999999999">+91 9999999999</a></td>
                               <td><img src="team_default.png" class="right-user-img" /> </td>
                           </tr>
                           <tr>
                               <td>
                                   <img src="pb.png"/> Pieter Benadie
                               </td>
                               <td><a href="mailto:user@gmail.com">user@gmail.com</a></td>
                               <td><a href="mailto:+91 9999999999">+91 9999999999</a></td>
                               <td><img src="team_default.png" class="right-user-img"/></td>
                           </tr>
                       </tbody>
                   </table>
                  {/* <!--user table section--> */}
       </div>


    </div>
    </div>
    </div>
   

   <Footer/>
          </div> 

          <div class="modal  " id="invite-member" tabindex="-1" aria-hidden="true" >
    <div class="modal-dialog  ">
       <div class="modal-content">
          <div class="modal-header">
             <h4 class="modal-title"> <img src="user-invite-logo.png" /> Invite new members</h4>
             </div>
             <div class="modal-body">
             <Invite/>
             </div>
            </div>
            </div>
            </div>


            
  </>
  );
  }
  export default Userlist 