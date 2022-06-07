import React from 'react';
import { Link } from "react-router-dom";
import '../Css/Main.css';
import Invite from "./Invite";
// import Notification from "././Components/Modal/Notification";
import {Image } from 'react-bootstrap';
import {useState} from 'react';
import {Modal } from 'react-bootstrap';



function Sidebar ()  {

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
    
    return (
        <>
        
     
      <div className="sidebar-wrapper" data-simplebar="true">
          
          <ul className="metismenu" id="menu">
            <li>
             <Image src="slogo.png" className="logo-icon ms-2" alt="logo icon" />
             </li>

           
            

             <li>
                <a href="" >
                   <div className="parent-icon " data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Dashboard"><i className='bx bx-category'></i>

                   </div>
               
                </a>
             </li>
             <li>
                <span data-bs-toggle="modal" data-bs-target="#notification" className='color-white'>
                   <div class="parent-icon"  data-bs-placement="right" title="" data-bs-original-title="Notification" ><i class='bx bx-bell'></i>

                   </div>
               
                </span>
             </li>
             <li>
                <a href="" className='color-white'>
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Inbox"><i class='bx bx-message-alt'></i>

                   </div>
               
                </a>
             </li>
             <li>
                <a href="" className='color-white'>
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="My Work"><i class='bx bx-check-square'></i>

                   </div>
               
                </a>
             </li>

             <li class="mt-15">
                <a href="" className='color-white'>
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="App"><i class='bx bx-devices'></i>

                   </div>
               
                </a>
             </li>

             <li>
          
                <span className='color-white' onClick={handleShow}>
                   <div className="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Invite Members"><i className='bx bx-user-plus'></i>

                   </div>
               
                </span>
             </li>

             <li>
            
                <Link  className='color-white' to={{ pathname: '/Userlist', }}>
                   <div className="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="User List"><i className='bx bx-list-plus'></i>

                   </div>
               
                </Link>
             </li>

             <li>
                <span data-bs-toggle="offcanvas" data-bs-target="#search" aria-controls="search" className='color-white'>
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Search Everything"><i class='bx bx-search'></i>

                   </div>
               
                </span>
             </li>
             <li>
                <span data-bs-toggle="modal" data-bs-target="#help" className='color-white'>
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Help"><i class='bx bx-question-mark'></i>

                   </div>
               
                </span>
             </li>

             <li>
                <Link to={{ pathname: '/Profile', }} className='color-white sidebar-user-icon'>
                  K </Link>


                
             </li>
             
        
          </ul>

         
         
       </div>

       <Modal show={show} onHide={handleClose}  
      size="lg">
        <Modal.Header closeButton>
          <Modal.Title>  <Image src="user-invite-logo.png" /> Invite new members</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Invite/>
       </Modal.Body>
        
      </Modal>

      

{/* <Notification/> */}
  
  
  </>
 
  );
  }
  
  export default Sidebar ;