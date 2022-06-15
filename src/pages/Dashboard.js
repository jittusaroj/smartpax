import TicketCard from '../components/TicketCard'
import { useState, useEffect, useContext } from 'react'
// import axios from 'axios'
// import CategoriesContext from '../context'
// import { ticketsData } from '../dummy-data'
// import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Rightsidebar from '../components/Rightsidebar'
import Footer from './Footer'
import {Image } from 'react-bootstrap';

const Dashboard = () => {
 
  return (
    <>
      
      <div classNameName="wrapper">
         
      <Sidebar />

          <div className="page-wrapper">
          <div className="page-content">
                <div className="row">
                   <div className="col-12 col-lg-8 col-md-8 col-sm-12 inbox">
                 
                     <div><p className="float-right"> <i className="bx bx-heart"></i> Send Feedback</p></div>
                     <h1 className="mt-2">Inbox</h1>

                     {/* <a href='/'> <button type="button" class="btn btn-danger">Logout</button></a> */}
                     
                     <p>Catch up on updates from all your boards.<a href=""> Learn more </a>                     
                     </p>
                     <div><p className="open-text"> <b>open(1)</b>/All Update</p></div>
                     <br/>
                     <div><button className="btn btn-primary float-right ms-2 px-1"><i className="bx bx-check fs-1"></i></button></div>
                     <div className="card inbox-card">
                        <div className="card-body">
                           <center className="m-auto">
                              <Image src="blank-profile.png" />

                              <h3 className="mt-8">It's Michael's birthday today!</h3>
                              <p className="mt-4"><b>Show some Love </b></p>
                           </center>

                        </div>
                        <div className="d-flex ">
                           <div className="w-50">
                              <button className="btn-like">
                              <i className="bx bx-like"> </i>    Like
                              </button>
                           </div>
                           <div className="w-50">
                              <button className="btn-like">
                              <i className="bx bx-share"> </i>   Reply
                              </button>
                           </div>
                        </div>
                        <br />
                        <div className="d-flex pl-20">
                           <span className="username"><span style={{color:'white', fontSize: '22px', marginLeft: '6px' }}>JS </span></span>
                           <span className="usertext">Lot Stuart happy birthday to you Michael, wish you all the best this day unfolds for you</span>
                     </div>
                     <br />
                     <div className="pl-20">
                        <i className="bx bx-timer"> </i> 20days| 13 <i className="bx bx-happy-heart-eyes"> </i> |<i className="bx bx-like"> </i>
                     </div>
                     <br />
                     <div className="d-flex pl-20">
                           <span className="username"><span style={{color: 'white', fontSize: '22px', marginLeft: '10px'}}>K </span></span>
                          {/* <!--  <span className="usertext">Lot Stuart happy birthday to you Michael, wish you all the best this day unfolds for you</span> --> */}
                          <input type="text " className="form-control input" placeholder="Write something here" />
                     </div>
                     <br />
                            
                   </div>

                  
                </div>
                
                <div className="col-md-1 col-sm-12 col-lg-1 col-12"></div>
             
             <div className="col-md-3 col-sm-12 col-lg-3 col-12">
             <h3 className="mt-8">  Inbox View Options </h3>
            
             <Rightsidebar/>

             <h3 className="mt-4"> Filter By Board</h3>
             <span>Update without Board <span className="float-right">1</span></span>
             </div>




            
       </div>
      
      
       <Footer/>

    </div>
    </div>

        </div>
    </>
  )
}

export default Dashboard
