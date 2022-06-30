import {React,useEffect,useState} from 'react';
import axios from "axios";
import { notify } from "../utils/services";

import Footer from'./Footer';
import Sidebar from'../components/Sidebar';
import '../Css/Main.css';
import '../Css/Workspace.css';
import {Form } from 'react-bootstrap';

import Collapse from 'react-bootstrap/Collapse';
import Dropdown from 'react-bootstrap/Dropdown';
import Workspacetable from '../components/Workspace/Workspacetable';
import Topheader from '../components/Workspace/Topheader';
import Worspacemodal from '../components/Workspace/Worspacemodal';
import Worksidebar from '../components/Workspace/Worksidebar';




function Workspace ()  {
    const [open, setOpen] = useState(false);
    const data = JSON.parse(localStorage.getItem('user'));
    const gName = localStorage.getItem('groupName');

    const [name, setName] = useState('')

    useEffect(()=>{

      setName(gName);
 
  
  }, [
   gName
  ]) 

    const saveData = (e) => {      
      if(e.key === 'Enter'){              

        axios.post(process.env.REACT_APP_LOCAL_API+'/group/save',{
         name:name,
         user_id:data.id,
         workspace_id:1,
         isActive:1
          },{   
          'Content-Type': 'application/json',
         })
            .then(data => {
                console.log(data);  
                localStorage.setItem('groupName', name);
                


                notify('Successfully updated', 'success');
                window.location.reload();


            })

      }
    }
  
   
    return (
        <>
         <div   classNameNameName="wrapper">
         
         <Sidebar/>
   <div   className="page-wrapper ">

  
       <div   classNameName='page-content' style={{marginLeft:'2%'}}>
       <div class="row">
       <div class="col-12 col-lg-2 col-md-2 col-sm-12 bg-lightgray custom-user-sidebar" style={{background:'rgb(233 236 240 / 25%)'}}>
    <Worksidebar/>
</div>

           
          
               <div class="col-12 col-lg-10 col-md-10 col-sm-12">

       <div   className="row">
               <div   className="col-12 col-lg-12 col-md-12 col-sm-12 inbox">
                  <div   className="board-section">
                     <Topheader/>

                     <div   className="card-body" style={{padding:'1rem 0rem'}}>
                        <div>
                        <div   className="top-filter-section">
                                 <ul   className="filter">
                                    <li>
                                    <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
   New item
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={() => setOpen(!open)} aria-controls="example-collapse-text"
        aria-expanded={open}>New group of Items</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Import Items</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>


                                      
                                     
                                    </li>
                                    <li>
                                       <div   className="d-lg-none d-md-none d-sm-block d-xs-block mb-d-inline">
                                          <button    className="btn ms-4 border-1"><i   className="fa fa-search"></i></button>
                                       </div>
                                    </li>
                                    <li   className="d-none d-lg-block d-md-block">
                                       <div   className="d-flex search-field  ms-4">
                                          <div   className="search-btn"><i   className="fa fa-search"></i></div>
                                          <input   className="form-control" value="" placeholder="search.." name="" style={{marginTop:'-10px'}}/> 
                                       </div>
                                    </li>
                                    <li><a data-bs-toggle="modal" data-bs-target="#person_modal"><i   className="fa fa-user-circle"></i> Person</a></li>
                                    <li>
                                       <a data-bs-toggle="collapse" href="#megamenu" role="button" aria-expanded="false" aria-controls="collapseExample"><span><i   className="fa fa-filter"></i></span> Filter </a>
                                     
                                       
                                    </li>
                                    <li><a  data-bs-toggle="modal" data-bs-target="#sort"><span><i   className="fa fa-filter font-20"></i></span> Sort</a></li>
                                    <li>
                                       <a data-bs-toggle="collapse" href="#pin" role="button" aria-expanded="false" aria-controls="collapseExample"><span> <i   className="fa fa-map-pin"></i></span> </a>
                                    
                                    </li>
                                    <li>
                                       <a data-bs-toggle="collapse" href="#hide" role="button" aria-expanded="false" aria-controls="collapseExample"><span> <i   className="fa fa-eye-slash" aria-hidden="true"></i></span> </a>
                                      
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
                                      
                                    </li>
                                    <li><a data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa fa-pencil-square-o" style={{fontSize:'18px'}}></i></a></li>
                                 </ul>
                              </div>
                              <Collapse in={open}>
                            <div id="example-collapse-text">
        <div   className="">
                                    <div   className="overflow-scroll1 penicillium-section">
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
                                             <div   className="head first-head" style={{marginLeft: '-9px'}}>
                                                <span   className="value first-col first-text pink-text pink-section font-16" style={{textAlign:'left' , marginTop:'-10px'}}> 
                                                <input className="value first-col first-text pink-text font-16 border-0" type="text" placeholder='NEW GROUP' onChange={(e) => setName(e.target.value)} value={name} onKeyPress={(e) => saveData(e)} />
                                                </span>
                                             </div>
                                             <div   className="head">
                                                <span   className="value">Testing Date</span>
                                             </div>
                                             <div   className="head">
                                                <span   className="value">Week</span>
                                             </div>
                                             <div   className="head">
                                                <span   className="value"> Column1</span>
                                             </div>
                                             <div   className="head">
                                                <span   className="value"> Column2</span>
                                             </div>
                                             <div   className="head">
                                             <span   className="value">Column3 
                                          <a   className="plus-right" data-bs-toggle="modal" data-bs-target="#column-modal"><i   className="fa fa-plus-circle"></i></a>
                                          </span>
                                             </div>
                                            
                                          </div>
                                       </div>
                                       {/* <!--head section--> */}

                                       {/* <div   className="d-flex">
                                          <div   className="dropdown-sec">
                                          </div>
                                          <div   className="body-section pink-section my-2" style={{width:'100%'}}>
                                             <div   className=" last-head" style={{width:'100%'}}>
                                       
                                                <Form.Control type="text" className="form-control" placeholder="+ Add item" />
                                             </div>
                                          </div>
                                          <button   className="btn custum-add-button bg-pink border-pink text-white ms-2">Add</button>
                                       </div> */}

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
                                       <div   className="d-flex body-section pink-section">
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
                                             <button   className="crose-btn value-remove" ><i   className="fa fa-times"></i></button>
                                             <input   className="" name="" id="textfield1" value="1"/>
                                             </span>
                                          </div>
                                          
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>

                                          
                                       </div>
                                    </div>
                                    </div>
                                 </div>
                        </div>
              </Collapse>
              <br/>

              <div   className="">
                                    <div   className="overflow-scroll1 penicillium-section">
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
                                             <div   className="head first-head" style={{marginLeft: '-9px'}}>
                                                <span   className="value first-col first-text pink-text pink-section font-16" style={{textAlign:'left' , marginTop:'-10px'}}> 
                                                <input className="value first-col first-text pink-text font-16 border-0" type="text" placeholder='NEW GROUP' onChange={(e) => setName(e.target.value)} value={name} onKeyPress={(e) => saveData(e)} />
                                                </span>
                                             </div>
                                             <div   className="head">
                                                <span   className="value">Testing Date</span>
                                             </div>
                                             <div   className="head">
                                                <span   className="value">Week</span>
                                             </div>
                                             <div   className="head">
                                                <span   className="value"> Column1</span>
                                             </div>
                                             <div   className="head">
                                                <span   className="value"> Column2</span>
                                             </div>
                                             <div   className="head">
                                             <span   className="value">Column3 
                                          <a   className="plus-right" data-bs-toggle="modal" data-bs-target="#column-modal"><i   className="fa fa-plus-circle"></i></a>
                                          </span>
                                             </div>
                                            
                                          </div>
                                       </div>
                                       {/* <!--head section--> */}

                                       {/* <div   className="d-flex">
                                          <div   className="dropdown-sec">
                                          </div>
                                          <div   className="body-section pink-section my-2" style={{width:'100%'}}>
                                             <div   className=" last-head" style={{width:'100%'}}>
                                 
                                                <Form.Control type="text" className="form-control" placeholder="+ Add item" />
                                             </div>
                                          </div>
                                          <button   className="btn custum-add-button bg-pink border-pink text-white ms-2">Add</button>
                                       </div> */}

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
                                       <div   className="d-flex body-section pink-section">
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
                                             <button   className="crose-btn value-remove" ><i   className="fa fa-times"></i></button>
                                             <input   className="" name="" id="textfield1" value="1"/>
                                             </span>
                                          </div>
                                          
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>

                                          
                                       </div>
                                    </div> 


                                    </div>
                                 </div>

                                 <br/>

                                 <div   className="overflow-scroll1 penicillium-section">
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
                                          <span   className="value first-col first-text blue-text font-16" style={{textAlign:'left' , marginTop:'-10px'}}>
                                     
                                                <input className="value first-col first-text pink-text font-16 border-0" type="text" placeholder='NEW GROUP' onChange={(e) => setName(e.target.value)} value={name} onKeyPress={(e) => saveData(e)} />
                                                
                                              
                                              </span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Testing Date</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value">Week</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value"> Column1</span>
                                       </div>
                                       <div   className="head">
                                          <span   className="value"> Column2</span>
                                       </div>
                                       
                                       <div   className="head">
                                          <span   className="value">Column3 <a   className="plus-right" data-bs-toggle="modal" data-bs-target="#column-modal"><i   className="fa fa-plus-circle"></i></a></span>
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
                                             <button   className="crose-btn value-remove" ><i   className="fa fa-times"></i></button>
                                             <input   className="" name="" id="textfield1" value="1"/>
                                             </span>
                                          </div>
                                          
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
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
                                             <span   className="value">
                                             <button   className="crose-btn value-remove" ><i   className="fa fa-times"></i></button>
                                             <input   className="" name="" id="textfield1" value="1"/>
                                             </span>
                                          </div>
                                          
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>
                                          <div   className="body1">
                                             <span   className="value">1</span>
                                          </div>

                                          
                                       </div>
                                    </div>
                                   

                                   

                                  
                                 </div>
                              
                                
                                
                               


                                 {/* <!--last column-->
                                 <!--table section design--> */}
                              </div>

                              <br/>
                              
                              {/* <!--card section --> */}
                             <Workspacetable/>
                             
                              {/* <!--card section -->
                              <!--add group section--> */}
                             
                           
                              
                        </div>
                       
                     </div>
                   
                  </div>
               </div>
            </div>
            </div>
            </div>
    
    
    </div>
    </div>
    

   
    <Worspacemodal/>
           
   

   <Footer/>
          </div> 

        


            
  </>
  );
  }
  export default Workspace