import {React,useEffect,useState} from 'react';

import axios from "axios";
import Footer from'./Footer';
import Invite from "../components/Invite";
import Sidebar from'../components/Sidebar';
import '../Css/Main.css';
import { ListGroup ,Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';




function Userlist ()  {

    const [list, setList] = useState([]);

  useEffect(()=>{

    const headers = {
        'Content-Type': 'application/json',
      }
    var url = process.env.REACT_APP_LOCAL_API;
    axios.get(url+'/users/list',{
        // axios.post('http://91.134.201.104:3002/users/login', data,{
        headers: headers
      })
            .then(res => {     
                
                setList(res.data);

            
            })
  
          }, []) 
   
    return (
        <>
         <div classNameName="wrapper">
         
         <Sidebar/>
   <div class="page-wrapper">

  
       <div className='page-content'>
    
       <div class="row">
       <div class="col-12 col-lg-2 col-md-2 col-sm-12 bg-lightgray custom-user-sidebar" style={{background:'rgb(233 236 240 / 25%)'}}>
     <p className='fs-6 mt-4'><b>TEAMS</b></p>
      <p className='team-font'>
      <i className='bx bx-plus'></i>      New Team
      </p>
      <p className='team-font'>
      <i className='bx bx-filter-alt'></i>  Filter Team
      </p>
      <p className='team-font'>
      <i className='bx bx-search'></i> Search Team
      </p>

      
     
<hr style={{width:'100%'}}/>
<div className='team-font'>
<i className='bx bx-list-plus'></i>  
    All Users
    <Badge bg="primary" className='float-right'>
      14
    </Badge>
      </div>
      <div className='team-font'>
      <i className='bx bx-user'></i>   Admin
    <Badge bg="primary" className='float-right'>
      14
    </Badge>
      </div>
      <div className='team-font'>
      <i className='bx bx-user'></i>     Sales
    <Badge bg="primary" className='float-right'>
      14
    </Badge>
      </div>
      <div className='team-font'>
      <i className='bx bx-user'></i>   Finance
    <Badge bg="primary" className='float-right'>
      14
    </Badge>
      </div>

           
           </div>
               <div class="col-12 col-lg-10 col-md-10 col-sm-12">
                   <div>
                  <h4 class="mb-3">All users</h4>
                  <button class="btn btn-primary float-right invite-btn" data-bs-toggle="modal" data-bs-target="#invite-member"><i className='bx bx-user-plus'></i>Invite</button>  
                  </div>
                  {/* <!--search section--> */}
                   <div class="row">
                       <div class="col-md-4">
                           {/* <div class="d-flex mb-3">
                               <input class="form-control user-search border" name="" />
                               <button class="btn btn-user-search"><i class="fa fa-search"></i></button>
                           </div> */}
                           <div class="d-flex left-search">
<div class="search-input">
<input type="search" id="form1" class="" placeholder="Search by Name or Email" />
</div>

<button class="btn btn-user-search">
<i class="fa fa-search search_icon" style={{color:'#d3d3d3a8', marginTop:'-28px'}}></i>
</button>


</div>
                       </div>
                      
                   </div>

                  {/* <!--search section--> */}
                  {/* <!--user table section--> */}
                   <table class="table user-list-table table-responsive">
                       <thead>
                           <tr>
                               <th>S.No</th>
                               <th>Name</th>
                               <th>Email</th>
                               <th>Teams</th>
                           </tr>
                       </thead>
                       <tbody>

                       {
                       list.map((user, i) => { 
                           return(
                           <tr key={i}>
                               
                               <td><a href="#">{i}</a></td>
                               <td><a href="#">{user.name}</a></td>
                               <td><a href="#">{user.email}</a></td>
                               <td>No Team</td>
                           </tr>

                           );
                       })
                       } 
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