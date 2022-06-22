import {React,useEffect,useState} from 'react';
import axios from "axios";

import { Link } from "react-router-dom";
import '../Css/Main.css';
import Invite from "./Invite";
import Usermodal from "./Usermodal";
import Notification from "./Notification";
import {Image } from 'react-bootstrap';
import {Modal } from 'react-bootstrap';



function Sidebar (props)  {

  
  // alert(window.location.pathname)

  const cdata = JSON.parse(localStorage.getItem('user'));

   
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


   var url = process.env.REACT_APP_LOCAL_API;
    const [data, setData] = useState([]);
 
    useEffect(()=>{
      

        axios.get(url + '/users/' + cdata.id, { 
              'Content-Type': 'application/json',
          })
                .then(user => {
                    console.log(user);
  
                    setData(user.data);
  
                })
  
              }, []) 
    return (
        <>
        
     
      <div className="sidebar-wrapper" data-simplebar="true">
          
          <ul className="metismenu" id="menu">
            <li>
          
             <Image src="slogo.png" className="logo-icon ms-2" alt="logo icon" />
             
             </li>

           
            

             <li>
                <Link  className='color-white' to={{ pathname: '/Dashboard', }} >
                   <div className="parent-icon " data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Dashboard"><i className='bx bx-category'></i>

                   </div>
               
                </Link>
             </li>
             <li>
                <span data-bs-toggle="modal" data-bs-target="#notification" className='color-white'>
                   <div class="parent-icon"  data-bs-placement="right" title="" data-bs-original-title="Notification" ><i class='bx bx-bell'></i>

                   </div>
               
                </span>
             </li>
             <li>
                <a href="#" className='color-white'>
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Inbox"><i class='bx bx-message-alt'></i>

                   </div>
               
                </a>
             </li>
             <li>
                <a href="#" className='color-white'>
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="My Work"><i class='bx bx-check-square'></i>

                   </div>
               
                </a>
             </li>

             {/* <li class="mt-15">
                <a href="" className='color-white'>
                   <div class="parent-icon" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="App"><i class='bx bx-devices'></i>

                   </div>
               
                </a>
             </li> */}

             <li  class="mt-15">
          
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

             {/* <li>
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
             </li> */}

             {/* <li>
                <Link to={{ pathname: '/Profile', }} className='color-white sidebar-user-icon'>
                  V </Link>


                
             </li> */}

             <li data-bs-toggle="modal" data-bs-target="#userModal" className='color-white'>
               
                <img src="blank-profile.png" alt="profile" className='profile-img-side'/>
                <div className='profile-sidebar-icon'>
               
                { data.working_status == 'in_office' &&
                
                       <i class="fa fa-building" aria-hidden="true"></i>

                       }

              { data.working_status == 'working_from_home' &&
                
                      <i class="fa fa-home" aria-hidden="true"></i>

                       }

{ data.working_status == 'Out_sick' &&
                
                     <i class="fa fa-plus" aria-hidden="true"></i>

                       }

{ data.working_status == 'on_break' &&
                
                      <i class="fa fa-bed" aria-hidden="true"></i>

                       }

{ data.working_status == 'out_off_office' &&
                
                      <i class="fa fa-cloud" aria-hidden="true"></i>

                       }

{ data.working_status == 'working_outside' &&
                
                     <i class="fa fa-cloud" aria-hidden="true"></i>

                       }

{ data.working_status == 'family_time' &&
                
                     <i class="fa fa-heart" aria-hidden="true"></i>

                       }

{ data.working_status == 'do_not_distrub' &&
                
                      <i class="fa fa-bell" aria-hidden="true"></i> 

                       }

                </div>

                  {/* </Link> */}


                
             </li>
             
        
          </ul>

         
         
       </div>
<Usermodal/>
       <Modal show={show} onHide={handleClose}  
      size="md">
        <Modal.Header closeButton>
          <Modal.Title>  <Image src="user-invite-logo.png" /> Invite new members</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Invite/>
       </Modal.Body>
        
      </Modal>

      

<Notification/>
  
  
  </>
 
  );
  }
  
  export default Sidebar ;