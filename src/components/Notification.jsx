import React from 'react';
import {useState} from 'react';
// import './Main.css';
import {Modal , Button, Dropdown } from 'react-bootstrap';



function Notification ()  {
    return (                                                              
    <>

   
    <div class="modal notification-modal " id="notification" tabindex="-1" aria-hidden="true" >
    <div class="modal-dialog custom-dialog right-26  " >
       <div class="modal-content">
          <div class="modal-header">
             <h4 class="modal-title">Notifications</h4>
     <Dropdown className='noti-toggle'>
  <Dropdown.Toggle id="dropdown-basic" className="btn-toggle ">
  <i class="bx bx-dots-horizontal-rounded color-black "></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Mark all as read</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Delete all</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Setting</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> 
         </div>
                                              <ul class="nav">
<li class="nav-item">
<a class="nav-link active" aria-current="page" data-bs-toggle="tab" data-bs-target="#all">All</a>
</li>
<li class="nav-item">
<a class="nav-link" data-bs-toggle="tab" data-bs-target="#unread">Unread</a>
</li>
<li class="nav-item">
<a class="nav-link" data-bs-toggle="tab" data-bs-target="#mentioned">I was mentioned</a>
</li>

<li class="nav-item">
<a class="nav-link" data-bs-toggle="tab" data-bs-target="#assign">Assign to me</a>
</li>

</ul>
         
          <div class="modal-body overflow-550" >


          <div class="tab-content" id="myTabContent">
<div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="home-tab">
<b> Last 7 days</b>

<div class="notification-card">
<div class=" row">
<div class="col-md-3 col-sm-4 col-4 mt-2">
<span class="text-circle">NM</span> 
</div>
<div class="col-md-9 col-sm-8 col-8">
<span class="fs-4">Natasha Manyenga </span> <span>6d</span> <br/>
<span>added you as an owner of Dashboard "Duplicate of SL C2A SMARTPAX GRAPHS - QMS FOODTECH "</span>
<span class="float-right notification-icon"><i class="bx bx-check-square"></i> <i class="bx bx-trash"></i>



</span>
</div>
</div>

</div>
<div class="notification-card noti-bg">
<div class=" row">
<div class="col-md-3 col-sm-4 col-4 mt-2">
<span class="text-circle">NM</span> 
</div>
<div class="col-md-9 col-sm-8 col-8">
<span class="fs-4">Natasha Manyenga </span> <span>6d</span> <br/>
<span>added you as an owner of Dashboard "Duplicate of SL C2A SMARTPAX GRAPHS - QMS FOODTECH "</span>
<span class="float-right notification-icon"><i class="bx bx-check-square"></i> <i class="bx bx-trash"></i>
<i class="bi bi-three-dots-horizontal"></i>
</span>
</div>
</div>

</div>
</div>
<div class="tab-pane fade" id="unread" role="tabpanel" aria-labelledby="profile-tab">
<div class="notification-card noti-bg">
<div class=" row">
<div class="col-md-3 col-sm-4 col-4 mt-2">
<span class="text-circle">NM</span> 
</div>
<div class="col-md-9 col-sm-8 col-8">
<span class="fs-4" >Natasha Manyenga </span> <span>6d</span> <br/>
<span>added you as an owner of Dashboard "Duplicate of SL C2A SMARTPAX GRAPHS - QMS FOODTECH "</span>
<span class="float-right notification-icon"><i class="bx bx-check-square"></i> <i class="bx bx-trash"></i>
<i class="bi bi-three-dots-horizontal"></i>
</span>
</div>
</div>

</div>
</div>
<div class="tab-pane fade" id="mentioned" role="tabpanel" aria-labelledby="contact-tab">
<div class="notification-card noti-bg">
<div class=" row">
<div class="col-md-3 col-sm-4 col-4 mt-2">
<span class="text-circle">NM</span> 
</div>
<div class="col-md-9 col-sm-8 col-8">
<span class="fs-4">Natasha Manyenga </span> <span>6d</span> <br/>
<span>added you as an owner of Dashboard "Duplicate of SL C2A SMARTPAX GRAPHS - QMS FOODTECH "</span>
<span class="float-right notification-icon"><i class="bx bx-check-square"></i> <i class="bx bx-trash"></i>
<i class="bi bi-three-dots-horizontal"></i>
</span>
</div>
</div>

</div>
<div class="notification-card noti-bg">
<div class=" row">
<div class="col-md-3 col-sm-4 col-4 mt-2">
<span class="text-circle">NM</span> 
</div>
<div class="col-md-9 col-sm-8 col-8">
<span class="fs-4">Natasha Manyenga </span> <span>6d</span> <br/>
<span>added you as an owner of Dashboard "Duplicate of SL C2A SMARTPAX GRAPHS - QMS FOODTECH "</span>
<span class="float-right notification-icon"><i class="bx bx-check-square"></i> <i class="bx bx-trash"></i>
<i class="bi bi-three-dots-horizontal"></i>
</span>
</div>
</div>

</div>
</div>
<div class="tab-pane fade" id="assign" role="tabpanel" aria-labelledby="contact-tab">
<div class="notification-card noti-bg">
<div class=" row">
<div class="col-md-3 col-sm-4 col-4 mt-2">
<span class="text-circle">NM</span> 
</div>
<div class="col-md-9 col-sm-8 col-8">
<span class="fs-4">Natasha Manyenga </span> <span>6d</span> <br/>
<span>added you as an owner of Dashboard "Duplicate of SL C2A SMARTPAX GRAPHS - QMS FOODTECH "</span>
<span class="float-right notification-icon"><i class="bx bx-check-square"></i> <i class="bx bx-trash"></i>
<i class="bi bi-three-dots-horizontal"></i>
</span>
</div>
</div>

</div>
</div>
</div> 
            
                        
          </div>
          <div class="modal-footer">
         
          </div>
       </div>
    </div>
 </div>



         
        </>
      );
    }
    export default Notification ;